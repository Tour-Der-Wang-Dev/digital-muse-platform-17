
import { GenerationResult } from "./ReplicateService";

export interface CacheEntry {
  key: string;
  value: GenerationResult;
  timestamp: number;
  accessCount: number;
  size: number;
  expiryTime: number;
}

export class CacheManager {
  private cache = new Map<string, CacheEntry>();
  private maxSize = 100 * 1024 * 1024; // 100MB
  private currentSize = 0;
  private defaultTTL = 24 * 60 * 60 * 1000; // 24 hours

  // Intelligent caching with LRU eviction
  set(key: string, value: GenerationResult, ttl?: number): void {
    const size = this.calculateSize(value);
    const expiryTime = Date.now() + (ttl || this.defaultTTL);
    
    // Remove expired entries first
    this.cleanExpired();
    
    // Check if we need to evict items
    while (this.currentSize + size > this.maxSize && this.cache.size > 0) {
      this.evictLRU();
    }
    
    // Remove existing entry if updating
    if (this.cache.has(key)) {
      this.currentSize -= this.cache.get(key)!.size;
    }
    
    const entry: CacheEntry = {
      key,
      value,
      timestamp: Date.now(),
      accessCount: 0,
      size,
      expiryTime
    };
    
    this.cache.set(key, entry);
    this.currentSize += size;
  }

  get(key: string): GenerationResult | null {
    const entry = this.cache.get(key);
    
    if (!entry) return null;
    
    // Check if expired
    if (Date.now() > entry.expiryTime) {
      this.delete(key);
      return null;
    }
    
    // Update access statistics
    entry.accessCount++;
    entry.timestamp = Date.now();
    
    return entry.value;
  }

  delete(key: string): boolean {
    const entry = this.cache.get(key);
    if (entry) {
      this.currentSize -= entry.size;
      return this.cache.delete(key);
    }
    return false;
  }

  // Preemptive caching for popular prompts
  async warmCache(popularPrompts: string[]): Promise<void> {
    // Implementation would pre-generate popular combinations
    console.log('Warming cache for popular prompts:', popularPrompts);
  }

  // Analytics for cache performance
  getStatistics() {
    const entries = Array.from(this.cache.values());
    const now = Date.now();
    
    return {
      totalEntries: this.cache.size,
      totalSize: this.currentSize,
      sizeUtilization: (this.currentSize / this.maxSize) * 100,
      averageAccessCount: entries.reduce((sum, entry) => sum + entry.accessCount, 0) / entries.length,
      expiredEntries: entries.filter(entry => now > entry.expiryTime).length,
      hitRate: this.calculateHitRate(),
      memoryEfficiency: this.calculateMemoryEfficiency()
    };
  }

  private calculateSize(value: GenerationResult): number {
    // Estimate size based on image URL and metadata
    return JSON.stringify(value).length * 2; // Rough estimation
  }

  private evictLRU(): void {
    let oldestEntry: CacheEntry | null = null;
    let oldestKey = '';
    
    for (const [key, entry] of this.cache.entries()) {
      if (!oldestEntry || entry.timestamp < oldestEntry.timestamp) {
        oldestEntry = entry;
        oldestKey = key;
      }
    }
    
    if (oldestKey) {
      this.delete(oldestKey);
    }
  }

  private cleanExpired(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];
    
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiryTime) {
        expiredKeys.push(key);
      }
    }
    
    expiredKeys.forEach(key => this.delete(key));
  }

  private calculateHitRate(): number {
    // This would be tracked with actual hit/miss statistics
    return 0.75; // Example 75% hit rate
  }

  private calculateMemoryEfficiency(): number {
    const entries = Array.from(this.cache.values());
    const totalAccesses = entries.reduce((sum, entry) => sum + entry.accessCount, 0);
    return totalAccesses / this.cache.size;
  }
}

export const cacheManager = new CacheManager();
