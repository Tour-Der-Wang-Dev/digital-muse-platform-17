
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Zap, 
  Clock, 
  HardDrive, 
  Wifi, 
  AlertTriangle,
  CheckCircle,
  Loader
} from "lucide-react";

interface PerformanceMetrics {
  loadTime: number;
  fps: number;
  memoryUsage: number;
  networkLatency: number;
  renderTime: number;
  cacheHitRate: number;
  apiResponseTime: number;
}

interface SystemStatus {
  status: 'optimal' | 'good' | 'warning' | 'critical';
  message: string;
  recommendations?: string[];
}

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 1.2,
    fps: 60,
    memoryUsage: 45,
    networkLatency: 50,
    renderTime: 16,
    cacheHitRate: 85,
    apiResponseTime: 150
  });

  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    status: 'optimal',
    message: 'All systems operating optimally'
  });

  const [isMonitoring, setIsMonitoring] = useState(true);

  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      // Simulate real-time metrics updates
      setMetrics(prev => ({
        loadTime: Math.max(0.5, prev.loadTime + (Math.random() - 0.5) * 0.2),
        fps: Math.min(60, Math.max(30, prev.fps + (Math.random() - 0.5) * 5)),
        memoryUsage: Math.min(90, Math.max(20, prev.memoryUsage + (Math.random() - 0.5) * 5)),
        networkLatency: Math.max(10, prev.networkLatency + (Math.random() - 0.5) * 20),
        renderTime: Math.max(8, prev.renderTime + (Math.random() - 0.5) * 4),
        cacheHitRate: Math.min(95, Math.max(70, prev.cacheHitRate + (Math.random() - 0.5) * 3)),
        apiResponseTime: Math.max(50, prev.apiResponseTime + (Math.random() - 0.5) * 30)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isMonitoring]);

  useEffect(() => {
    // Evaluate system status based on metrics
    const evaluateStatus = () => {
      const issues: string[] = [];
      const recommendations: string[] = [];

      if (metrics.memoryUsage > 80) {
        issues.push('High memory usage');
        recommendations.push('Close unused tabs or applications');
      }

      if (metrics.fps < 45) {
        issues.push('Low frame rate');
        recommendations.push('Enable performance mode');
      }

      if (metrics.networkLatency > 200) {
        issues.push('High network latency');
        recommendations.push('Check internet connection');
      }

      if (metrics.apiResponseTime > 300) {
        issues.push('Slow API responses');
        recommendations.push('Consider upgrading to premium tier');
      }

      if (issues.length === 0) {
        setSystemStatus({
          status: 'optimal',
          message: 'All systems operating optimally'
        });
      } else if (issues.length <= 2) {
        setSystemStatus({
          status: 'good',
          message: `Minor issues detected: ${issues.join(', ')}`,
          recommendations
        });
      } else if (issues.length <= 3) {
        setSystemStatus({
          status: 'warning',
          message: `Performance issues detected: ${issues.join(', ')}`,
          recommendations
        });
      } else {
        setSystemStatus({
          status: 'critical',
          message: `Critical performance issues: ${issues.join(', ')}`,
          recommendations
        });
      }
    };

    evaluateStatus();
  }, [metrics]);

  const getStatusIcon = () => {
    switch (systemStatus.status) {
      case 'optimal': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'good': return <CheckCircle className="w-5 h-5 text-blue-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'critical': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const getStatusColor = () => {
    switch (systemStatus.status) {
      case 'optimal': return 'bg-green-500/10 border-green-500/30';
      case 'good': return 'bg-blue-500/10 border-blue-500/30';
      case 'warning': return 'bg-yellow-500/10 border-yellow-500/30';
      case 'critical': return 'bg-red-500/10 border-red-500/30';
      default: return 'bg-gray-500/10 border-gray-500/30';
    }
  };

  const formatMetric = (value: number, unit: string) => {
    return `${value.toFixed(1)}${unit}`;
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 z-50">
      <Card className={`glass-card border ${getStatusColor()}`}>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              {getStatusIcon()}
              Performance Monitor
            </div>
            <Badge 
              variant="outline" 
              className={`text-xs ${
                isMonitoring ? 'border-green-500 text-green-500' : 'border-gray-500 text-gray-500'
              }`}
            >
              {isMonitoring ? 'Live' : 'Paused'}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* System Status */}
          <div className="space-y-2">
            <p className="text-xs text-foreground/70">{systemStatus.message}</p>
            {systemStatus.recommendations && (
              <div className="space-y-1">
                {systemStatus.recommendations.map((rec, index) => (
                  <p key={index} className="text-xs text-gold-400">• {rec}</p>
                ))}
              </div>
            )}
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Load Time</span>
                <span>{formatMetric(metrics.loadTime, 's')}</span>
              </div>
              <Progress value={(3 - metrics.loadTime) / 3 * 100} className="h-1" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-foreground/70">FPS</span>
                <span>{Math.round(metrics.fps)}</span>
              </div>
              <Progress value={metrics.fps / 60 * 100} className="h-1" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Memory</span>
                <span>{Math.round(metrics.memoryUsage)}%</span>
              </div>
              <Progress value={metrics.memoryUsage} className="h-1" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Latency</span>
                <span>{Math.round(metrics.networkLatency)}ms</span>
              </div>
              <Progress value={Math.max(0, 100 - metrics.networkLatency / 3)} className="h-1" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Cache Hit</span>
                <span>{Math.round(metrics.cacheHitRate)}%</span>
              </div>
              <Progress value={metrics.cacheHitRate} className="h-1" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-foreground/70">API</span>
                <span>{Math.round(metrics.apiResponseTime)}ms</span>
              </div>
              <Progress value={Math.max(0, 100 - metrics.apiResponseTime / 5)} className="h-1" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className="text-xs text-gold-400 hover:text-gold-300 transition-colors"
            >
              {isMonitoring ? 'Pause' : 'Resume'}
            </button>
            <div className="flex items-center gap-1 text-xs text-foreground/50">
              <Activity className="w-3 h-3" />
              <span>Real-time</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
