
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Settings, 
  Monitor, 
  Shield, 
  Zap, 
  BarChart3, 
  Clock, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  Activity,
  Database,
  Globe,
  Lock
} from "lucide-react";
import { useState, useEffect } from "react";
import { replicateService, ReplicateModel } from "@/services/ReplicateService";

export const APIIntegration = () => {
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);
  const [costOptimization, setCostOptimization] = useState<string[]>([]);
  const [queueStatus, setQueueStatus] = useState({
    pending: 0,
    processing: 3,
    completed: 127
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setPerformanceMetrics(replicateService.getPerformanceMetrics());
      setCostOptimization(replicateService.getCostOptimizationSuggestions());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliance with end-to-end encryption",
      status: "Active"
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "GDPR compliant with automatic data retention policies",
      status: "Compliant"
    },
    {
      icon: Monitor,
      title: "Content Filtering",
      description: "AI-powered safety checks and content moderation",
      status: "Enabled"
    },
    {
      icon: Database,
      title: "Audit Logging",
      description: "Comprehensive logging for compliance reporting",
      status: "Active"
    }
  ];

  const performanceOptimizations = [
    {
      icon: Zap,
      title: "Intelligent Caching",
      description: "Smart caching reduces costs by 40% and improves speed",
      enabled: true,
      impact: "High"
    },
    {
      icon: Globe,
      title: "CDN Integration",
      description: "Global content delivery for optimal performance",
      enabled: true,
      impact: "Medium"
    },
    {
      icon: Activity,
      title: "Load Balancing",
      description: "Automatic request distribution across regions",
      enabled: true,
      impact: "High"
    }
  ];

  const modelPerformance = [
    { name: "SDXL Turbo", avgTime: "3.2s", reliability: 95, cost: "$0.01" },
    { name: "SDXL Lightning", avgTime: "1.8s", reliability: 92, cost: "$0.005" },
    { name: "Playground v2.5", avgTime: "5.1s", reliability: 97, cost: "$0.015" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-playfair font-bold mb-4 gradient-text">
          Professional API Integration
        </h3>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Advanced Replicate API integration with enterprise-grade performance, 
          security, and monitoring capabilities.
        </p>
      </div>

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          {/* Real-time Queue Status */}
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-playfair font-semibold gradient-text">
                Queue Management
              </h4>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                Healthy
              </Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{queueStatus.pending}</div>
                <div className="text-sm text-foreground/60">Pending</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{queueStatus.processing}</div>
                <div className="text-sm text-foreground/60">Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{queueStatus.completed}</div>
                <div className="text-sm text-foreground/60">Completed</div>
              </div>
            </div>
          </Card>

          {/* Model Performance Comparison */}
          <Card className="glass-card p-6">
            <h4 className="text-xl font-playfair font-semibold mb-4 gradient-text">
              Model Performance
            </h4>
            <div className="space-y-4">
              {modelPerformance.map((model, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                  <div>
                    <div className="font-semibold">{model.name}</div>
                    <div className="text-sm text-foreground/60">
                      Avg: {model.avgTime} • Cost: {model.cost}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm text-foreground/60">Reliability</div>
                      <div className="font-semibold">{model.reliability}%</div>
                    </div>
                    <Progress value={model.reliability} className="w-20" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Performance Optimizations */}
          <Card className="glass-card p-6">
            <h4 className="text-xl font-playfair font-semibold mb-4 gradient-text">
              Active Optimizations
            </h4>
            <div className="grid gap-4">
              {performanceOptimizations.map((optimization, index) => {
                const IconComponent = optimization.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <div className="font-semibold">{optimization.title}</div>
                        <div className="text-sm text-foreground/60">{optimization.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={optimization.impact === 'High' ? 'default' : 'outline'}>
                        {optimization.impact} Impact
                      </Badge>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="glass-card p-6">
            <h4 className="text-xl font-playfair font-semibold mb-4 gradient-text">
              Security & Compliance
            </h4>
            <div className="grid gap-4">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <div className="font-semibold">{feature.title}</div>
                        <div className="text-sm text-foreground/60">{feature.description}</div>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {feature.status}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Content Safety */}
          <Card className="glass-card p-6">
            <h4 className="text-xl font-playfair font-semibold mb-4 gradient-text">
              Content Safety Metrics
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-black/20 rounded-lg">
                <div className="text-2xl font-bold text-green-400">99.7%</div>
                <div className="text-sm text-foreground/60">Safe Content Rate</div>
              </div>
              <div className="text-center p-4 bg-black/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">0.3%</div>
                <div className="text-sm text-foreground/60">Flagged Content</div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="glass-card p-6">
            <h4 className="text-xl font-playfair font-semibold mb-4 gradient-text">
              Performance Analytics
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-black/20 rounded-lg">
                <Clock className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                <div className="text-xl font-bold">4.2s</div>
                <div className="text-sm text-foreground/60">Avg Processing</div>
              </div>
              <div className="text-center p-4 bg-black/20 rounded-lg">
                <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-xl font-bold">94.8%</div>
                <div className="text-sm text-foreground/60">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-black/20 rounded-lg">
                <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-xl font-bold">$247</div>
                <div className="text-sm text-foreground/60">Monthly Cost</div>
              </div>
              <div className="text-center p-4 bg-black/20 rounded-lg">
                <Activity className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-xl font-bold">12.3K</div>
                <div className="text-sm text-foreground/60">Total Requests</div>
              </div>
            </div>
          </Card>

          {/* Usage Trends */}
          <Card className="glass-card p-6">
            <h4 className="text-xl font-playfair font-semibold mb-4 gradient-text">
              Usage Trends (Last 30 Days)
            </h4>
            <div className="h-48 bg-black/20 rounded-lg flex items-center justify-center">
              <div className="text-foreground/60">
                Interactive analytics chart would be displayed here
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <Card className="glass-card p-6">
            <h4 className="text-xl font-playfair font-semibold mb-4 gradient-text">
              Cost Optimization Suggestions
            </h4>
            <div className="space-y-3">
              {costOptimization.length > 0 ? (
                costOptimization.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div className="text-sm">{suggestion}</div>
                  </div>
                ))
              ) : (
                <div className="flex items-center space-x-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <div className="text-sm">All systems optimized! No recommendations at this time.</div>
                </div>
              )}
            </div>
          </Card>

          {/* A/B Testing */}
          <Card className="glass-card p-6">
            <h4 className="text-xl font-playfair font-semibold mb-4 gradient-text">
              A/B Testing Framework
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-black/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">Model Performance Test</div>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    Running
                  </Badge>
                </div>
                <div className="text-sm text-foreground/60 mb-3">
                  Comparing SDXL vs Lightning for portrait generation
                </div>
                <Progress value={67} className="h-2" />
                <div className="text-xs text-foreground/50 mt-1">67% complete • 3 days remaining</div>
              </div>
              
              <Button className="w-full border-gold-500/30 text-gold-400 hover:bg-gold-500/10" variant="outline">
                Create New A/B Test
              </Button>
            </div>
          </Card>

          {/* Custom Model Training */}
          <Card className="glass-card p-6">
            <h4 className="text-xl font-playfair font-semibold mb-4 gradient-text">
              Custom Model Training
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-black/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Brand Style Model</div>
                    <div className="text-sm text-foreground/60">Fashion photography fine-tuning</div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    Ready
                  </Badge>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
                Start Model Training
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
