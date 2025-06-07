
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Crown, 
  Zap, 
  Award, 
  Shield, 
  Users, 
  Target,
  Star,
  Quote,
  TrendingUp,
  Calendar,
  BookOpen,
  Camera,
  Play,
  ChevronRight
} from "lucide-react";

export const MarketingSection = () => {
  const valuePropositions = [
    {
      icon: Crown,
      title: "Professional-Grade Creative Tools",
      description: "Industry-leading AI models and advanced creative controls designed for professional workflows",
      features: ["8K+ resolution outputs", "Advanced style controls", "Professional presets", "Custom model training"]
    },
    {
      icon: Zap,
      title: "Time-Saving Workflow Automation",
      description: "Streamlined processes that reduce creation time from hours to minutes",
      features: ["Batch processing", "Template libraries", "Auto-optimization", "Smart suggestions"]
    },
    {
      icon: Award,
      title: "High-Quality Artistic Outputs",
      description: "Gallery-worthy results that meet professional standards and client expectations",
      features: ["Museum-quality prints", "Commercial-grade licensing", "Brand-safe content", "Quality assurance"]
    },
    {
      icon: Shield,
      title: "Commercial Licensing Clarity",
      description: "Clear, comprehensive licensing that protects your business and creative investments",
      features: ["Full commercial rights", "Legal compliance", "Usage documentation", "Enterprise licensing"]
    },
    {
      icon: Users,
      title: "Professional Community Access",
      description: "Connect with industry leaders, learn from experts, and collaborate on projects",
      features: ["Expert mentorship", "Peer collaboration", "Industry networking", "Professional certification"]
    }
  ];

  const targetAudiences = [
    {
      title: "Creative Professionals & Agencies",
      description: "Full-service creative agencies and independent professionals",
      needs: ["Scalable creative solutions", "Client presentation tools", "Brand consistency"],
      solutions: ["Team collaboration", "White-label options", "Project management"]
    },
    {
      title: "Digital Artists & Illustrators",
      description: "Professional artists expanding their creative toolkit",
      needs: ["Artistic style control", "Portfolio development", "Commercial opportunities"],
      solutions: ["Style library", "Artist showcase", "Licensing support"]
    },
    {
      title: "Marketing & Advertising Teams",
      description: "Marketing departments creating campaign visuals",
      needs: ["Brand compliance", "Rapid iteration", "Cost efficiency"],
      solutions: ["Brand templates", "Bulk generation", "Usage analytics"]
    },
    {
      title: "Fashion & Beauty Industries",
      description: "Fashion brands and beauty companies",
      needs: ["Trend visualization", "Product concepts", "Editorial content"],
      solutions: ["Fashion presets", "Beauty filters", "Commercial licensing"]
    },
    {
      title: "Art Directors & Designers",
      description: "Creative directors and visual designers",
      needs: ["Concept development", "Client presentations", "Creative exploration"],
      solutions: ["Mood boards", "Style exploration", "Team workflows"]
    }
  ];

  const socialProof = [
    {
      type: "testimonial",
      content: "Artisan AI has revolutionized our creative workflow. We can now deliver high-quality visuals to clients 10x faster than traditional methods.",
      author: "Sarah Chen",
      role: "Creative Director",
      company: "Studio Collective",
      image: "https://i.postimg.cc/MGvX0j5n/LINE-ALBUM-2025-5-30-250607-1.jpg"
    },
    {
      type: "case-study",
      content: "After implementing Artisan AI, our agency increased project capacity by 300% while maintaining premium quality standards.",
      author: "Marcus Rivera",
      role: "Founder",
      company: "Pixel Perfect Agency",
      image: "https://i.postimg.cc/Y0fS2Nrs/LINE-ALBUM-2025-5-30-250607-2.jpg"
    },
    {
      type: "award",
      content: "Winner of the 2024 Creative Technology Excellence Award for Innovation in AI-Powered Design.",
      author: "Design Innovation Council",
      role: "Industry Recognition",
      company: "Professional Awards",
      image: "https://i.postimg.cc/SNksTPVF/LINE-ALBUM-2025-5-30-250607-3.jpg"
    }
  ];

  const contentStrategy = [
    {
      icon: BookOpen,
      title: "Educational Content Marketing",
      description: "Comprehensive tutorials and guides for professional development",
      content: ["Master classes", "Technique guides", "Industry insights", "Best practices"]
    },
    {
      icon: Camera,
      title: "Artist Showcase & Interviews",
      description: "Featuring top artists and their creative processes",
      content: ["Artist spotlights", "Behind-the-scenes", "Creative process", "Success stories"]
    },
    {
      icon: TrendingUp,
      title: "Industry Trend Analysis",
      description: "Stay ahead with cutting-edge design and technology trends",
      content: ["Trend reports", "Market analysis", "Future predictions", "Style evolution"]
    },
    {
      icon: Play,
      title: "Technical Tutorials & Guides",
      description: "Step-by-step technical guidance for professional workflows",
      content: ["Video tutorials", "Written guides", "Templates", "Tools reviews"]
    }
  ];

  return (
    <section id="marketing" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Premium <span className="gradient-text">Creative Platform</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Trusted by industry leaders, designed for professionals who demand excellence
          </p>
        </div>

        <Tabs defaultValue="value" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="value">Value Proposition</TabsTrigger>
            <TabsTrigger value="audience">Target Audience</TabsTrigger>
            <TabsTrigger value="proof">Social Proof</TabsTrigger>
            <TabsTrigger value="content">Content Strategy</TabsTrigger>
          </TabsList>

          <TabsContent value="value" className="space-y-8">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {valuePropositions.map((prop, index) => {
                const IconComponent = prop.icon;
                return (
                  <Card key={index} className="glass-card p-6 premium-hover">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold mb-3">{prop.title}</h3>
                    <p className="text-foreground/70 mb-4">{prop.description}</p>
                    <ul className="space-y-2">
                      {prop.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-foreground/60">
                          <ChevronRight className="w-4 h-4 text-gold-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="audience" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {targetAudiences.map((audience, index) => (
                <Card key={index} className="glass-card p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Target className="w-8 h-8 text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-playfair font-semibold mb-2">{audience.title}</h3>
                      <p className="text-foreground/70 text-sm">{audience.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Needs</h4>
                      <ul className="space-y-1">
                        {audience.needs.map((need, needIndex) => (
                          <li key={needIndex} className="text-sm text-foreground/60 flex items-center">
                            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2 flex-shrink-0" />
                            {need}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Our Solutions</h4>
                      <ul className="space-y-1">
                        {audience.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="text-sm text-foreground/60 flex items-center">
                            <ChevronRight className="w-3 h-3 text-gold-400 mr-2 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="proof" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {socialProof.map((proof, index) => (
                <Card key={index} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="border-gold-500/30 text-gold-400 capitalize">
                      {proof.type}
                    </Badge>
                    {proof.type === "award" && <Award className="w-4 h-4 text-gold-400" />}
                  </div>
                  
                  <Quote className="w-8 h-8 text-gold-400/50 mb-4" />
                  <p className="text-foreground/80 mb-4 italic">"{proof.content}"</p>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      src={proof.image} 
                      alt={proof.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">{proof.author}</h4>
                      <p className="text-xs text-foreground/60">{proof.role}, {proof.company}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="glass-card p-8 text-center">
              <div className="flex items-center justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">500+</div>
                  <div className="text-sm text-foreground/60">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">2M+</div>
                  <div className="text-sm text-foreground/60">Images Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">99.9%</div>
                  <div className="text-sm text-foreground/60">Uptime SLA</div>
                </div>
              </div>
              <p className="text-foreground/70 mb-4">
                Trusted by Fortune 500 companies and creative agencies worldwide
              </p>
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                View Case Studies
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {contentStrategy.map((strategy, index) => {
                const IconComponent = strategy.icon;
                return (
                  <Card key={index} className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-playfair font-semibold mb-2">{strategy.title}</h3>
                        <p className="text-foreground/70 text-sm mb-4">{strategy.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {strategy.content.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center text-sm text-foreground/60">
                              <Star className="w-3 h-3 text-gold-400 mr-2 flex-shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="glass-card p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-playfair font-semibold mb-2">Content Calendar</h3>
                <p className="text-foreground/70">Stay updated with our regular content releases</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 border border-gold-500/20 rounded-lg">
                  <Calendar className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Weekly</h4>
                  <p className="text-xs text-foreground/60">Artist Tutorials</p>
                </div>
                <div className="text-center p-4 border border-gold-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Monthly</h4>
                  <p className="text-xs text-foreground/60">Trend Reports</p>
                </div>
                <div className="text-center p-4 border border-gold-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Quarterly</h4>
                  <p className="text-xs text-foreground/60">Case Studies</p>
                </div>
                <div className="text-center p-4 border border-gold-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Annually</h4>
                  <p className="text-xs text-foreground/60">Industry Report</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
