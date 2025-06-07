
export interface AuditLog {
  id: string;
  timestamp: number;
  userId: string;
  action: string;
  resourceId: string;
  details: Record<string, any>;
  ipAddress: string;
  userAgent: string;
  compliance: {
    gdprCompliant: boolean;
    dataRetentionApplied: boolean;
    consentRecorded: boolean;
  };
}

export interface SecurityScan {
  id: string;
  timestamp: number;
  imageUrl: string;
  results: {
    nsfwScore: number;
    violenceScore: number;
    biasScore: number;
    copyrightRisk: number;
  };
  passed: boolean;
  flaggedReasons: string[];
}

export class ComplianceMonitor {
  private auditLogs: AuditLog[] = [];
  private securityScans: SecurityScan[] = [];
  private gdprSettings = {
    dataRetentionDays: 90,
    automaticDeletion: true,
    consentRequired: true,
    rightToForgetting: true
  };

  // Log all API interactions for compliance
  logActivity(activity: Omit<AuditLog, 'id' | 'timestamp'>): void {
    const log: AuditLog = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      ...activity
    };
    
    this.auditLogs.push(log);
    
    // Apply data retention policy
    this.applyDataRetention();
  }

  // Content safety scanning
  async scanContent(imageUrl: string): Promise<SecurityScan> {
    // Simulate AI content analysis
    const scan: SecurityScan = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      imageUrl,
      results: {
        nsfwScore: Math.random() * 0.1, // Low score for safe content
        violenceScore: Math.random() * 0.05,
        biasScore: Math.random() * 0.2,
        copyrightRisk: Math.random() * 0.1
      },
      passed: true,
      flaggedReasons: []
    };

    // Determine if content passes safety checks
    scan.passed = this.evaluateContentSafety(scan.results);
    
    if (!scan.passed) {
      scan.flaggedReasons = this.generateFlaggedReasons(scan.results);
    }

    this.securityScans.push(scan);
    return scan;
  }

  // GDPR compliance management
  handleDataSubjectRequest(userId: string, requestType: 'access' | 'delete' | 'portability'): any {
    const userLogs = this.auditLogs.filter(log => log.userId === userId);
    
    switch (requestType) {
      case 'access':
        return {
          personalData: userLogs,
          dataProcessingActivities: this.getUserProcessingActivities(userId),
          retentionPeriod: this.gdprSettings.dataRetentionDays,
          legalBasis: 'legitimate_interest'
        };
        
      case 'delete':
        this.auditLogs = this.auditLogs.filter(log => log.userId !== userId);
        return { deleted: true, confirmedAt: Date.now() };
        
      case 'portability':
        return {
          format: 'json',
          data: userLogs,
          exportedAt: Date.now()
        };
    }
  }

  // Generate compliance reports
  generateComplianceReport() {
    const now = Date.now();
    const last30Days = now - (30 * 24 * 60 * 60 * 1000);
    
    const recentLogs = this.auditLogs.filter(log => log.timestamp > last30Days);
    const recentScans = this.securityScans.filter(scan => scan.timestamp > last30Days);
    
    return {
      reportGenerated: now,
      period: '30_days',
      summary: {
        totalActivities: recentLogs.length,
        contentScans: recentScans.length,
        safetyViolations: recentScans.filter(scan => !scan.passed).length,
        gdprRequests: this.countGDPRRequests(last30Days),
        dataRetentionCompliance: this.calculateRetentionCompliance()
      },
      details: {
        mostCommonActivities: this.getMostCommonActivities(recentLogs),
        safetyMetrics: this.calculateSafetyMetrics(recentScans),
        complianceGaps: this.identifyComplianceGaps()
      },
      recommendations: this.generateComplianceRecommendations()
    };
  }

  // SLA monitoring
  calculateSLAMetrics() {
    const now = Date.now();
    const last24Hours = now - (24 * 60 * 60 * 1000);
    
    return {
      uptime: 99.9, // Would be calculated from actual metrics
      averageResponseTime: 3200, // milliseconds
      errorRate: 0.1, // percentage
      throughput: 1247, // requests per hour
      compliance: {
        soc2: true,
        gdpr: true,
        iso27001: true
      },
      slaBreaches: 0
    };
  }

  private evaluateContentSafety(results: SecurityScan['results']): boolean {
    const thresholds = {
      nsfwScore: 0.3,
      violenceScore: 0.2,
      biasScore: 0.4,
      copyrightRisk: 0.3
    };

    return Object.entries(results).every(([key, value]) => 
      value < thresholds[key as keyof typeof thresholds]
    );
  }

  private generateFlaggedReasons(results: SecurityScan['results']): string[] {
    const reasons: string[] = [];
    
    if (results.nsfwScore > 0.3) reasons.push('NSFW content detected');
    if (results.violenceScore > 0.2) reasons.push('Violence detected');
    if (results.biasScore > 0.4) reasons.push('Potential bias detected');
    if (results.copyrightRisk > 0.3) reasons.push('Copyright infringement risk');
    
    return reasons;
  }

  private applyDataRetention(): void {
    const cutoffDate = Date.now() - (this.gdprSettings.dataRetentionDays * 24 * 60 * 60 * 1000);
    this.auditLogs = this.auditLogs.filter(log => log.timestamp > cutoffDate);
  }

  private getUserProcessingActivities(userId: string): string[] {
    const activities = this.auditLogs
      .filter(log => log.userId === userId)
      .map(log => log.action);
    
    return [...new Set(activities)];
  }

  private countGDPRRequests(since: number): number {
    return this.auditLogs.filter(log => 
      log.timestamp > since && log.action.includes('gdpr')
    ).length;
  }

  private calculateRetentionCompliance(): number {
    // Calculate percentage of data within retention period
    return 100; // Simplified for example
  }

  private getMostCommonActivities(logs: AuditLog[]): Array<{action: string, count: number}> {
    const counts = logs.reduce((acc, log) => {
      acc[log.action] = (acc[log.action] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(counts)
      .map(([action, count]) => ({ action, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }

  private calculateSafetyMetrics(scans: SecurityScan[]) {
    if (scans.length === 0) return { safetyRate: 100, avgRiskScore: 0 };
    
    const safeScans = scans.filter(scan => scan.passed).length;
    const avgRiskScore = scans.reduce((sum, scan) => {
      return sum + Math.max(
        scan.results.nsfwScore,
        scan.results.violenceScore,
        scan.results.biasScore,
        scan.results.copyrightRisk
      );
    }, 0) / scans.length;

    return {
      safetyRate: (safeScans / scans.length) * 100,
      avgRiskScore: avgRiskScore * 100
    };
  }

  private identifyComplianceGaps(): string[] {
    const gaps: string[] = [];
    
    // Check for compliance issues
    if (this.auditLogs.some(log => !log.compliance.gdprCompliant)) {
      gaps.push('GDPR compliance gaps detected in some activities');
    }
    
    if (this.securityScans.filter(scan => !scan.passed).length > 0) {
      gaps.push('Content safety violations need attention');
    }
    
    return gaps;
  }

  private generateComplianceRecommendations(): string[] {
    return [
      'Implement automated GDPR consent collection',
      'Enhance content filtering algorithms',
      'Regular security compliance audits',
      'Update data retention policies',
      'Staff training on data protection'
    ];
  }
}

export const complianceMonitor = new ComplianceMonitor();
