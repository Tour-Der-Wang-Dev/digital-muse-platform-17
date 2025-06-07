
import { toast } from "sonner";

export interface ReplicateModel {
  id: string;
  name: string;
  description: string;
  category: 'photography' | 'artistic' | 'commercial';
  pricing: number;
  performance: {
    avgProcessingTime: number;
    reliability: number;
    quality: number;
  };
  capabilities: string[];
}

export interface GenerationRequest {
  id: string;
  model: string;
  prompt: string;
  parameters: Record<string, any>;
  priority: 'low' | 'normal' | 'high';
  userId: string;
  timestamp: number;
  estimatedCost: number;
}

export interface GenerationResult {
  id: string;
  requestId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  imageUrl?: string;
  error?: string;
  processingTime: number;
  actualCost: number;
  qualityScore: number;
  metadata: Record<string, any>;
}

export class ReplicateService {
  private apiKey: string | null = null;
  private baseUrl = 'https://api.replicate.com/v1';
  private requestQueue: GenerationRequest[] = [];
  private cache = new Map<string, GenerationResult>();
  private rateLimiter = new Map<string, number>();

  // Available models with intelligent routing
  private models: ReplicateModel[] = [
    {
      id: 'stability-ai/sdxl',
      name: 'SDXL Turbo',
      description: 'High-quality, fast image generation',
      category: 'photography',
      pricing: 0.01,
      performance: { avgProcessingTime: 5000, reliability: 0.95, quality: 0.9 },
      capabilities: ['photorealistic', 'portraits', 'landscapes']
    },
    {
      id: 'bytedance/sdxl-lightning-4step',
      name: 'SDXL Lightning',
      description: 'Ultra-fast generation for rapid prototyping',
      category: 'commercial',
      pricing: 0.005,
      performance: { avgProcessingTime: 2000, reliability: 0.9, quality: 0.8 },
      capabilities: ['commercial', 'product', 'quick-iterations']
    },
    {
      id: 'playgroundai/playground-v2.5-1024px-aesthetic',
      name: 'Playground v2.5',
      description: 'Artistic and aesthetic image generation',
      category: 'artistic',
      pricing: 0.015,
      performance: { avgProcessingTime: 8000, reliability: 0.93, quality: 0.95 },
      capabilities: ['artistic', 'aesthetic', 'creative']
    }
  ];

  constructor(apiKey?: string) {
    this.apiKey = apiKey || null;
    this.startQueueProcessor();
  }

  // Intelligent model selection based on requirements
  selectOptimalModel(
    category: string, 
    priority: string, 
    qualityRequirement: number
  ): ReplicateModel {
    const categoryModels = this.models.filter(m => m.category === category);
    
    if (priority === 'high' && qualityRequirement > 0.9) {
      return categoryModels.reduce((best, current) => 
        current.performance.quality > best.performance.quality ? current : best
      );
    }
    
    if (priority === 'low') {
      return categoryModels.reduce((best, current) => 
        current.pricing < best.pricing ? current : best
      );
    }
    
    // Balance quality, speed, and cost
    return categoryModels.reduce((best, current) => {
      const currentScore = (current.performance.quality + current.performance.reliability) / current.pricing;
      const bestScore = (best.performance.quality + best.performance.reliability) / best.pricing;
      return currentScore > bestScore ? current : best;
    });
  }

  // Queue management with priority handling
  async addToQueue(request: GenerationRequest): Promise<string> {
    // Check cache first
    const cacheKey = this.generateCacheKey(request);
    if (this.cache.has(cacheKey)) {
      return Promise.resolve(cacheKey);
    }

    // Add to queue with priority sorting
    this.requestQueue.push(request);
    this.requestQueue.sort((a, b) => {
      const priorityOrder = { high: 3, normal: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    return request.id;
  }

  // Real-time status tracking
  async getGenerationStatus(requestId: string): Promise<GenerationResult | null> {
    const cacheKey = Array.from(this.cache.keys()).find(key => 
      this.cache.get(key)?.requestId === requestId
    );
    
    if (cacheKey) {
      return this.cache.get(cacheKey) || null;
    }

    // Check with Replicate API for status
    try {
      const response = await fetch(`${this.baseUrl}/predictions/${requestId}`, {
        headers: {
          'Authorization': `Token ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        return {
          id: data.id,
          requestId,
          status: data.status,
          imageUrl: data.output?.[0],
          processingTime: Date.now() - new Date(data.created_at).getTime(),
          actualCost: data.cost || 0,
          qualityScore: 0.85, // Would be calculated based on analysis
          metadata: data.metrics || {}
        };
      }
    } catch (error) {
      console.error('Status check failed:', error);
    }

    return null;
  }

  // Batch processing for high-volume operations
  async processBatch(requests: GenerationRequest[]): Promise<string[]> {
    const batchId = crypto.randomUUID();
    const batchPromises = requests.map(async (request) => {
      await this.addToQueue(request);
      return request.id;
    });

    return Promise.all(batchPromises);
  }

  // Performance monitoring and analytics
  getPerformanceMetrics() {
    const completedRequests = Array.from(this.cache.values()).filter(
      result => result.status === 'completed'
    );

    return {
      totalRequests: this.cache.size,
      completedRequests: completedRequests.length,
      averageProcessingTime: completedRequests.reduce(
        (sum, result) => sum + result.processingTime, 0
      ) / completedRequests.length,
      averageQualityScore: completedRequests.reduce(
        (sum, result) => sum + result.qualityScore, 0
      ) / completedRequests.length,
      totalCost: completedRequests.reduce(
        (sum, result) => sum + result.actualCost, 0
      ),
      successRate: completedRequests.length / this.cache.size
    };
  }

  // Queue processor with rate limiting
  private startQueueProcessor() {
    setInterval(async () => {
      if (this.requestQueue.length > 0 && this.canMakeRequest()) {
        const request = this.requestQueue.shift()!;
        await this.processRequest(request);
      }
    }, 1000);
  }

  private canMakeRequest(): boolean {
    const now = Date.now();
    const lastRequest = this.rateLimiter.get('lastRequest') || 0;
    return now - lastRequest > 500; // 500ms rate limit
  }

  private async processRequest(request: GenerationRequest): Promise<void> {
    try {
      this.rateLimiter.set('lastRequest', Date.now());
      
      const model = this.selectOptimalModel(
        request.parameters.category || 'photography',
        request.priority,
        request.parameters.qualityRequirement || 0.8
      );

      const response = await fetch(`${this.baseUrl}/predictions`, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          version: model.id,
          input: {
            prompt: request.prompt,
            ...request.parameters
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const cacheKey = this.generateCacheKey(request);
        
        this.cache.set(cacheKey, {
          id: data.id,
          requestId: request.id,
          status: 'processing',
          processingTime: 0,
          actualCost: 0,
          qualityScore: 0,
          metadata: {}
        });
      } else {
        throw new Error(`API request failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Request processing failed:', error);
      toast.error('Image generation failed. Please try again.');
    }
  }

  private generateCacheKey(request: GenerationRequest): string {
    return `${request.model}-${request.prompt}-${JSON.stringify(request.parameters)}`;
  }

  // Cost optimization suggestions
  getCostOptimizationSuggestions() {
    const metrics = this.getPerformanceMetrics();
    const suggestions: string[] = [];

    if (metrics.averageProcessingTime > 10000) {
      suggestions.push("Consider using faster models for non-critical generations");
    }

    if (metrics.totalCost > 100) {
      suggestions.push("Enable intelligent caching to reduce redundant generations");
    }

    if (metrics.successRate < 0.9) {
      suggestions.push("Review prompts and parameters to improve success rate");
    }

    return suggestions;
  }
}

export const replicateService = new ReplicateService();
