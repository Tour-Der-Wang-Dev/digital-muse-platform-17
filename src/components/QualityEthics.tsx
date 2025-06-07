
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Star, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  Flag, 
  BookOpen,
  Scale,
  Heart,
  Brain,
  Lock
} from "lucide-react";

export const QualityEthics = () => {
  const qualityMetrics = [
    {
      category: "Technical Quality",
      metrics: [
        { name: "Resolution", score: 95, status: "excellent" },
        { name: "Composition", score: 88, status: "good" },
        { name: "Color Balance", score: 92, status: "excellent" },
        { name: "Detail Clarity", score: 89, status: "good" }
      ]
    },
    {
      category: "Artistic Merit",
      metrics: [
        { name: "Creativity", score: 91, status: "excellent" },
        { name: "Originality", score: 85, status: "good" },
        { name: "Visual Impact", score: 93, status: "excellent" },
        { name: "Style Coherence", score: 87, status: "good" }
      ]
    }
  ];

  const contentPolicies = [
    {
      icon: Shield,
      title: "Professional Use Guidelines",
      description: "Clear standards for commercial and professional applications",
      policies: [
        "Commercial licensing compliance",
        "Brand-safe content requirements",
        "Professional quality standards",
        "Attribution requirements"
      ]
    },
    {
      icon: Heart,
      title: "Artistic Expression",
      description: "Supporting creative freedom while maintaining standards",
      policies: [
        "Creative freedom protection",
        "Artistic vision support",
        "Style diversity encouragement",
        "Innovation promotion"
      ]
    },
    {
      icon: Users,
      title: "Community Standards",
      description: "Guidelines for maintaining a positive creative environment",
      policies: [
        "Respectful interaction",
        "Constructive feedback",
        "Inclusive community",
        "Professional conduct"
      ]
    },
    {
      icon: Eye,
      title: "Content Moderation",
      description: "Ensuring appropriate and safe content for all users",
      policies: [
        "Age-appropriate content",
        "Cultural sensitivity",
        "No harmful content",
        "Quality maintenance"
      ]
    }
  ];

  const ethicalPractices = [
    {
      icon: Brain,
      title: "AI Transparency",
      description: "Clear information about AI models and processes",
      features: [
        "Model capabilities disclosure",
        "Training data information",
        "Limitation acknowledgment",
        "Process transparency"
      ]
    },
    {
      icon: Scale,
      title: "Fair Use & Attribution",
      description: "Protecting creator rights and ensuring fair use",
      features: [
        "Clear attribution policies",
        "Creator rights protection",
        "Fair use guidelines",
        "Licensing clarity"
      ]
    },
    {
      icon: Shield,
      title: "Bias Mitigation",
      description: "Active measures to detect and reduce AI bias",
      features: [
        "Bias detection systems",
        "Diverse training data",
        "Regular bias audits",
        "Inclusive output validation"
      ]
    },
    {
      icon: BookOpen,
      title: "Responsible Development",
      description: "Ethical considerations in AI development and deployment",
      features: [
        "Ethical review processes",
        "Impact assessments",
        "Community feedback integration",
        "Continuous improvement"
      ]
    }
  ];

  const safetyMeasures = [
    {
      name: "Content Screening",
      description: "Automated detection of inappropriate content",
      status: "Active",
      coverage: "99.8%"
    },
    {
      name: "Community Reporting",
      description: "User-driven content flagging and review system",
      status: "Active",
      coverage: "100%"
    },
    {
      name: "Expert Review",
      description: "Professional moderation for featured content",
      status: "Active",
      coverage: "Featured Content"
    },
    {
      name: "Educational Resources",
      description: "User guidance on responsible AI use",
      status: "Active",
      coverage: "All Users"
    }
  ];

  return (
    <section id="quality-ethics" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Quality & Ethics{" "}
            <span className="gradient-text">Framework</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive standards ensuring professional quality, ethical practices, 
            and responsible AI development
          </p>
        </div>

        <Tabs defaultValue="quality" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="quality">Quality Assurance</TabsTrigger>
            <TabsTrigger value="policies">Content Policies</TabsTrigger>
            <TabsTrigger value="ethics">Ethical AI</TabsTrigger>
            <TabsTrigger value="safety">Safety Measures</TabsTrigger>
          </TabsList>

          <TabsContent value="quality" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="w-6 h-6 text-gold-400" />
                  <h3 className="text-xl font-playfair font-semibold">Quality Scoring System</h3>
                </div>
                <div className="space-y-6">
                  {qualityMetrics.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-3 text-gold-400">{category.category}</h4>
                      <div className="space-y-3">
                        {category.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">{metric.name}</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium">{metric.score}%</span>
                                <Badge 
                                  variant="outline" 
                                  className={
                                    metric.status === "excellent" 
                                      ? "border-green-500 text-green-400" 
                                      : "border-blue-500 text-blue-400"
                                  }
                                >
                                  {metric.status}
                                </Badge>
                              </div>
                            </div>
                            <Progress value={metric.score} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <CheckCircle className="w-6 h-6 text-gold-400" />
                  <h3 className="text-xl font-playfair font-semibold">Review Process</h3>
                </div>
                <div className="space-y-4">
                  <div className="border border-gold-500/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Automated Review</h4>
                    <p className="text-sm text-foreground/70 mb-3">
                      AI-powered quality assessment for all generated content
                    </p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Real-time processing</span>
                    </div>
                  </div>
                  <div className="border border-gold-500/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Expert Review</h4>
                    <p className="text-sm text-foreground/70 mb-3">
                      Professional curators review featured and premium content
                    </p>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">Manual validation</span>
                    </div>
                  </div>
                  <div className="border border-gold-500/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Community Feedback</h4>
                    <p className="text-sm text-foreground/70 mb-3">
                      User ratings and feedback contribute to quality assessment
                    </p>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Crowd validation</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="policies" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {contentPolicies.map((policy, index) => {
                const IconComponent = policy.icon;
                return (
                  <Card key={index} className="glass-card p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{policy.title}</h3>
                        <p className="text-foreground/70 text-sm">{policy.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {policy.policies.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
            
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Flag className="w-6 h-6 text-gold-400" />
                <h3 className="text-xl font-playfair font-semibold">Reporting & Enforcement</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Flag className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Report Content</h4>
                  <p className="text-sm text-foreground/60">Easy reporting system for policy violations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Review Process</h4>
                  <p className="text-sm text-foreground/60">Professional review of reported content</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Action Taken</h4>
                  <p className="text-sm text-foreground/60">Appropriate measures to maintain standards</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="ethics" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {ethicalPractices.map((practice, index) => {
                const IconComponent = practice.icon;
                return (
                  <Card key={index} className="glass-card p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{practice.title}</h3>
                        <p className="text-foreground/70 text-sm">{practice.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {practice.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="safety" className="space-y-8">
            <div className="grid gap-6">
              {safetyMeasures.map((measure, index) => (
                <Card key={index} className="glass-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{measure.name}</h3>
                        <p className="text-foreground/70 text-sm">{measure.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500 text-white mb-2">{measure.status}</Badge>
                      <div className="text-sm text-foreground/60">Coverage: {measure.coverage}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-gold-400" />
                <h3 className="text-xl font-playfair font-semibold">Emergency Response</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gold-400">Immediate Actions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Lock className="w-4 h-4 text-red-400 mr-3" />
                      Content removal within 1 hour
                    </li>
                    <li className="flex items-center text-sm">
                      <Shield className="w-4 h-4 text-blue-400 mr-3" />
                      Account suspension if needed
                    </li>
                    <li className="flex items-center text-sm">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mr-3" />
                      Law enforcement notification
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gold-400">Follow-up Measures</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Eye className="w-4 h-4 text-purple-400 mr-3" />
                      Investigation and review
                    </li>
                    <li className="flex items-center text-sm">
                      <BookOpen className="w-4 h-4 text-green-400 mr-3" />
                      Policy updates if needed
                    </li>
                    <li className="flex items-center text-sm">
                      <Users className="w-4 h-4 text-blue-400 mr-3" />
                      Community notification
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 font-semibold px-8 py-3">
            View Full Ethics Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};
