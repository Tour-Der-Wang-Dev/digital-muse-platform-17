
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Video, 
  Users, 
  Award, 
  PlayCircle, 
  Clock, 
  Star,
  TrendingUp,
  Target,
  Zap
} from "lucide-react";

export const LearningCenter = () => {
  const learningPaths = [
    {
      id: "beginner",
      title: "Foundation Artist",
      level: "Beginner",
      duration: "4 weeks",
      progress: 65,
      description: "Master the fundamentals of AI art generation and basic prompting techniques",
      modules: 8,
      color: "green"
    },
    {
      id: "intermediate",
      title: "Creative Professional", 
      level: "Intermediate",
      duration: "6 weeks",
      progress: 30,
      description: "Advanced composition, lighting, and style techniques for professional work",
      modules: 12,
      color: "blue"
    },
    {
      id: "expert",
      title: "Master Artisan",
      level: "Expert",
      duration: "8 weeks", 
      progress: 0,
      description: "Professional-grade workflows and commercial application mastery",
      modules: 16,
      color: "purple"
    }
  ];

  const featuredTutorials = [
    {
      title: "Professional Portrait Lighting",
      instructor: "Sarah Chen",
      duration: "45 min",
      level: "Intermediate",
      thumbnail: "https://i.postimg.cc/MGvX0j5n/LINE-ALBUM-2025-5-30-250607-1.jpg",
      rating: 4.9,
      students: 2847
    },
    {
      title: "Conceptual Art Fundamentals",
      instructor: "Marcus Rivera",
      duration: "1h 20min",
      level: "Beginner",
      thumbnail: "https://i.postimg.cc/SNksTPVF/LINE-ALBUM-2025-5-30-250607-3.jpg",
      rating: 4.8,
      students: 1923
    },
    {
      title: "Commercial Fashion Photography",
      instructor: "Elena Volkov",
      duration: "55 min",
      level: "Advanced",
      thumbnail: "https://i.postimg.cc/Y0fS2Nrs/LINE-ALBUM-2025-5-30-250607-2.jpg",
      rating: 4.9,
      students: 3156
    }
  ];

  const workshops = [
    {
      title: "Live Masterclass: Advanced Composition Techniques",
      date: "Tomorrow, 2:00 PM PST",
      instructor: "David Kim",
      spots: "12 spots left",
      price: "$49",
      featured: true
    },
    {
      title: "Interactive Workshop: Color Theory in AI Art",
      date: "Dec 15, 10:00 AM PST",
      instructor: "Maria Santos",
      spots: "8 spots left", 
      price: "$35",
      featured: false
    },
    {
      title: "Q&A Session: Professional Workflow Optimization",
      date: "Dec 18, 4:00 PM PST",
      instructor: "Alex Johnson",
      spots: "Free",
      price: "Free",
      featured: false
    }
  ];

  return (
    <section id="learning" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Professional <span className="gradient-text">Learning Center</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Master the art of AI generation through structured learning paths, expert guidance, and hands-on practice
          </p>
        </div>

        <Tabs defaultValue="paths" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/20 mb-8">
            <TabsTrigger value="paths">Learning Paths</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="workshops">Live Sessions</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Learning Paths */}
          <TabsContent value="paths" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {learningPaths.map((path) => (
                <Card key={path.id} className="glass-card p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-500/20 to-transparent rounded-bl-[100px]" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className={`border-${path.color}-500/30 text-${path.color}-400`}>
                        {path.level}
                      </Badge>
                      <span className="text-sm text-foreground/60">{path.duration}</span>
                    </div>

                    <h3 className="text-xl font-playfair font-semibold mb-2 gradient-text">
                      {path.title}
                    </h3>
                    
                    <p className="text-foreground/70 text-sm mb-4">
                      {path.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60">Progress</span>
                        <span className="text-gold-400">{path.progress}%</span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                      
                      <div className="flex items-center text-sm text-foreground/60">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {path.modules} modules
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
                      {path.progress > 0 ? 'Continue Learning' : 'Start Path'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Featured Tutorials */}
          <TabsContent value="tutorials" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {featuredTutorials.map((tutorial, index) => (
                <Card key={index} className="glass-card overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white" />
                    </div>
                    <Badge className="absolute top-3 left-3 bg-black/60 text-white">
                      {tutorial.level}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{tutorial.title}</h3>
                    <p className="text-sm text-foreground/60 mb-3">by {tutorial.instructor}</p>
                    
                    <div className="flex items-center justify-between text-sm text-foreground/70 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-gold-400" />
                        {tutorial.rating}
                      </div>
                    </div>
                    
                    <div className="text-xs text-foreground/60 mb-4">
                      {tutorial.students.toLocaleString()} students enrolled
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Watch Tutorial
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Live Workshops */}
          <TabsContent value="workshops" className="space-y-6">
            {workshops.map((workshop, index) => (
              <Card key={index} className={`glass-card p-6 ${workshop.featured ? 'border-gold-500/50' : ''}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{workshop.title}</h3>
                      {workshop.featured && (
                        <Badge className="bg-gold-500 text-black">Featured</Badge>
                      )}
                    </div>
                    <p className="text-sm text-foreground/60 mb-2">Instructor: {workshop.instructor}</p>
                    <div className="flex items-center gap-4 text-sm text-foreground/70">
                      <span>{workshop.date}</span>
                      <span>{workshop.spots}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gold-400">{workshop.price}</div>
                    </div>
                    <Button 
                      className={workshop.featured ? 
                        "bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500" : 
                        ""
                      }
                    >
                      {workshop.price === "Free" ? "Join Session" : "Reserve Spot"}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Resource Library */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold mb-2">Prompt Templates</h3>
                <p className="text-sm text-foreground/70 mb-4">Professional-grade prompts for every style and use case</p>
                <Button variant="outline" size="sm">Browse Library</Button>
              </Card>

              <Card className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold mb-2">Style Guides</h3>
                <p className="text-sm text-foreground/70 mb-4">Comprehensive references for artistic styles and techniques</p>
                <Button variant="outline" size="sm">Explore Styles</Button>
              </Card>

              <Card className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <p className="text-sm text-foreground/70 mb-4">Industry standards and professional workflows</p>
                <Button variant="outline" size="sm">Read Guidelines</Button>
              </Card>

              <Card className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold mb-2">Case Studies</h3>
                <p className="text-sm text-foreground/70 mb-4">Real-world applications and success stories</p>
                <Button variant="outline" size="sm">View Cases</Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
