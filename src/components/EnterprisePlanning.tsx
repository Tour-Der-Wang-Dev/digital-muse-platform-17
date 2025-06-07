
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Users, 
  Palette, 
  BarChart3, 
  Shield, 
  Zap,
  Globe,
  Database,
  Bell,
  LifeBuoy,
  GraduationCap,
  UserCheck,
  Settings,
  Lock,
  CheckCircle,
  Star,
  ChevronRight,
  TrendingUp,
  Cloud,
  Monitor
} from "lucide-react";

export const EnterprisePlanning = () => {
  const enterpriseFeatures = [
    {
      icon: Users,
      title: "Team Management & Permissions",
      description: "Advanced role-based access control with granular permissions",
      features: [
        "Multi-tier permission system",
        "Department-based access controls", 
        "Project-level permissions",
        "Audit trail for user actions",
        "SSO integration support"
      ]
    },
    {
      icon: Palette,
      title: "Custom Branding & White-labeling",
      description: "Complete brand customization for enterprise deployment",
      features: [
        "Custom logo and branding",
        "Branded user interfaces",
        "Custom domain configuration",
        "API white-labeling",
        "Client portal customization"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Enterprise-grade analytics with comprehensive reporting",
      features: [
        "Real-time usage analytics",
        "Custom dashboard creation",
        "Automated report generation",
        "KPI tracking and monitoring",
        "Data export capabilities"
      ]
    },
    {
      icon: Shield,
      title: "SLA Guarantees & Support Tiers",
      description: "Enterprise support with guaranteed response times",
      features: [
        "99.9% uptime SLA",
        "24/7 priority support",
        "Dedicated account managers",
        "Emergency response protocols",
        "Custom support agreements"
      ]
    }
  ];

  const scalingInfrastructure = [
    {
      icon: Cloud,
      title: "Auto-scaling Cloud Architecture",
      description: "Dynamic resource allocation based on demand",
      capabilities: [
        "Automatic scaling policies",
        "Load balancing optimization",
        "Resource monitoring",
        "Cost optimization algorithms"
      ]
    },
    {
      icon: Globe,
      title: "Global CDN Deployment",
      description: "Worldwide content delivery for optimal performance",
      capabilities: [
        "Multi-region deployment",
        "Edge caching optimization",
        "Geographic load balancing",
        "Performance monitoring"
      ]
    },
    {
      icon: Database,
      title: "Database Optimization & Sharding",
      description: "Scalable database architecture for enterprise volumes",
      capabilities: [
        "Horizontal sharding",
        "Read replica optimization",
        "Query performance tuning",
        "Data archiving strategies"
      ]
    },
    {
      icon: Monitor,
      title: "Monitoring & Alerting Systems",
      description: "Comprehensive system monitoring with proactive alerts",
      capabilities: [
        "Real-time system monitoring",
        "Custom alert configurations",
        "Performance dashboards",
        "Incident response automation"
      ]
    }
  ];

  const professionalServices = [
    {
      icon: Settings,
      title: "Custom Model Training Services",
      description: "Tailored AI models for specific enterprise needs",
      services: [
        "Brand-specific model training",
        "Industry-focused customization",
        "Performance optimization",
        "Model validation and testing"
      ]
    },
    {
      icon: LifeBuoy,
      title: "Professional Consulting & Support",
      description: "Expert guidance for enterprise implementation",
      services: [
        "Implementation consulting",
        "Workflow optimization",
        "Best practices guidance",
        "Technical architecture review"
      ]
    },
    {
      icon: GraduationCap,
      title: "Training & Onboarding Programs",
      description: "Comprehensive training for enterprise teams",
      services: [
        "Executive training sessions",
        "Technical workshops",
        "User certification programs",
        "Custom training materials"
      ]
    },
    {
      icon: UserCheck,
      title: "Account Management & Success Teams",
      description: "Dedicated support for enterprise success",
      services: [
        "Dedicated account managers",
        "Success planning and review",
        "ROI optimization guidance",
        "Strategic roadmap planning"
      ]
    }
  ];

  const complianceSecurity = [
    {
      category: "Compliance Standards",
      icon: CheckCircle,
      items: [
        { name: "SOC 2 Type II", status: "Certified", description: "Annual third-party security audits" },
        { name: "GDPR Compliance", status: "Compliant", description: "EU data protection regulations" },
        { name: "HIPAA Ready", status: "Available", description: "Healthcare data protection" },
        { name: "PCI DSS", status: "Certified", description: "Payment card industry standards" }
      ]
    },
    {
      category: "Security Features",
      icon: Lock,
      items: [
        { name: "End-to-end Encryption", status: "Active", description: "AES-256 encryption at rest and in transit" },
        { name: "Zero Trust Architecture", status: "Implemented", description: "Never trust, always verify approach" },
        { name: "Multi-factor Authentication", status: "Required", description: "Enhanced account security" },
        { name: "Regular Security Audits", status: "Quarterly", description: "Continuous security assessment" }
      ]
    }
  ];

  return (
    <section id="enterprise-planning" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Building2 className="w-16 h-16 text-gold-400 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Enterprise-Ready <span className="gradient-text">Platform</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Scalable, secure, and compliant solutions designed for large organizations 
            and mission-critical creative workflows
          </p>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="features">Enterprise Features</TabsTrigger>
            <TabsTrigger value="infrastructure">Scaling Infrastructure</TabsTrigger>
            <TabsTrigger value="services">Professional Services</TabsTrigger>
            <TabsTrigger value="compliance">Compliance & Security</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {enterpriseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="glass-card p-6 premium-hover">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-playfair font-semibold mb-2">{feature.title}</h3>
                        <p className="text-foreground/70 mb-4">{feature.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-foreground/80">
                          <ChevronRight className="w-4 h-4 text-gold-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>

            <Card className="glass-card p-8 text-center">
              <h3 className="text-2xl font-playfair font-semibold mb-4">
                Custom Enterprise Solutions
              </h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Every enterprise has unique requirements. Our solutions team works with you to 
                create custom implementations that fit your specific needs and workflows.
              </p>
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                Schedule Enterprise Consultation
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="infrastructure" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {scalingInfrastructure.map((infra, index) => {
                const IconComponent = infra.icon;
                return (
                  <Card key={index} className="glass-card p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{infra.title}</h3>
                        <p className="text-foreground/70 text-sm">{infra.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {infra.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center text-xs text-foreground/60">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                          {capability}
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="glass-card p-8">
              <div className="text-center mb-6">
                <TrendingUp className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-semibold mb-2">Performance Guarantees</h3>
                <p className="text-foreground/70">Enterprise-grade performance with measurable SLAs</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">99.9%</div>
                  <div className="text-sm text-foreground/60">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">&lt;100ms</div>
                  <div className="text-sm text-foreground/60">API Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
                  <div className="text-sm text-foreground/60">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">Auto</div>
                  <div className="text-sm text-foreground/60">Scaling</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {professionalServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="glass-card p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {service.services.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-foreground/80">
                          <Star className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>

            <Card className="glass-card p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-playfair font-semibold mb-2">
                  Professional Service Tiers
                </h3>
                <p className="text-foreground/70">Choose the level of support that fits your organization</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-gold-500/20 rounded-lg">
                  <Badge className="mb-3">Essential</Badge>
                  <h4 className="font-semibold mb-2">Basic Support</h4>
                  <p className="text-sm text-foreground/60">Standard implementation with documentation</p>
                </div>
                <div className="text-center p-4 border border-gold-500/40 rounded-lg bg-gold-500/5">
                  <Badge className="mb-3 bg-gold-500 text-black">Premium</Badge>
                  <h4 className="font-semibold mb-2">Guided Implementation</h4>
                  <p className="text-sm text-foreground/60">Dedicated consulting and training</p>
                </div>
                <div className="text-center p-4 border border-gold-500/20 rounded-lg">
                  <Badge variant="outline" className="mb-3">Elite</Badge>
                  <h4 className="font-semibold mb-2">White-Glove Service</h4>
                  <p className="text-sm text-foreground/60">Full-service implementation and ongoing support</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-8">
            {complianceSecurity.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <IconComponent className="w-6 h-6 text-gold-400" />
                    <h3 className="text-xl font-playfair font-semibold">{section.category}</h3>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3 p-4 border border-foreground/10 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                item.status === 'Certified' || item.status === 'Active' || item.status === 'Required' 
                                ? 'border-green-500/30 text-green-400' 
                                : item.status === 'Compliant' || item.status === 'Implemented'
                                ? 'border-blue-500/30 text-blue-400'
                                : 'border-gold-500/30 text-gold-400'
                              }`}
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-foreground/60">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}

            <Card className="glass-card p-8 text-center">
              <Lock className="w-12 h-12 text-gold-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold mb-4">
                Enterprise Security Center
              </h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Access detailed security documentation, compliance reports, and audit materials 
                through our dedicated enterprise security portal.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-gold-500/30">
                  Security Documentation
                </Button>
                <Button variant="outline" className="border-gold-500/30">
                  Compliance Reports
                </Button>
                <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                  Request Security Assessment
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
