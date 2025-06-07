
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Video, 
  Heart, 
  Eye,
  Share2,
  Award,
  Clock,
  Star
} from "lucide-react";

export const CommunityLearning = () => {
  const studyGroups = [
    {
      name: "Portrait Masters",
      members: 24,
      focus: "Portrait Photography & Art",
      nextSession: "Tomorrow, 3:00 PM",
      level: "Intermediate",
      active: true
    },
    {
      name: "Concept Art Collective", 
      members: 18,
      focus: "Fantasy & Sci-Fi Concepts",
      nextSession: "Dec 15, 7:00 PM",
      level: "Advanced",
      active: true
    },
    {
      name: "Beginner's Circle",
      members: 31,
      focus: "Fundamentals & Basics",
      nextSession: "Every Tuesday, 6:00 PM",
      level: "Beginner", 
      active: true
    }
  ];

  const liveEvents = [
    {
      title: "Expert Q&A: Professional Workflow Tips",
      expert: "Sarah Chen",
      date: "Today, 4:00 PM PST",
      duration: "1 hour",
      attendees: 156,
      topic: "Commercial Photography"
    },
    {
      title: "Live Demo: Advanced Lighting Techniques",
      expert: "Marcus Rivera",
      date: "Tomorrow, 2:00 PM PST", 
      duration: "45 minutes",
      attendees: 89,
      topic: "Studio Lighting"
    },
    {
      title: "Community Showcase: December Winners",
      expert: "Community Team",
      date: "Dec 20, 6:00 PM PST",
      duration: "2 hours", 
      attendees: 234,
      topic: "Art Showcase"
    }
  ];

  const showcaseArtworks = [
    {
      title: "Ethereal Portrait Study",
      artist: "Elena M.",
      likes: 342,
      views: 1247,
      comments: 28,
      image: "https://i.postimg.cc/MGvX0j5n/LINE-ALBUM-2025-5-30-250607-1.jpg",
      featured: true
    },
    {
      title: "Cyberpunk Cityscape",
      artist: "David K.",
      likes: 289,
      views: 956,
      comments: 19,
      image: "https://i.postimg.cc/SNksTPVF/LINE-ALBUM-2025-5-30-250607-3.jpg",
      featured: false
    },
    {
      title: "Classical Renaissance Study",
      artist: "Maria S.",
      likes: 198,
      views: 743,
      comments: 15,
      image: "https://i.postimg.cc/Y0fS2Nrs/LINE-ALBUM-2025-5-30-250607-2.jpg",
      featured: false
    }
  ];

  const discussions = [
    {
      title: "Best practices for commercial portrait lighting?",
      author: "Alex_Designer",
      replies: 12,
      lastActive: "2 hours ago",
      category: "Lighting",
      solved: false
    },
    {
      title: "How to achieve consistent style across a portfolio?",
      author: "CreativeJen",
      replies: 8,
      lastActive: "4 hours ago", 
      category: "Portfolio",
      solved: true
    },
    {
      title: "Prompt engineering for architectural visualization",
      author: "ArchViz_Pro",
      replies: 15,
      lastActive: "1 day ago",
      category: "Architecture", 
      solved: false
    }
  ];

  return (
    <section id="community" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Community <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Connect, collaborate, and grow with fellow artists in our vibrant learning community
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Study Groups & Events */}
          <div className="space-y-8">
            
            {/* Study Groups */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-playfair font-semibold gradient-text">Study Groups</h3>
                <Button variant="outline" size="sm" className="border-gold-500/30">
                  Create Group
                </Button>
              </div>
              
              <div className="space-y-4">
                {studyGroups.map((group, index) => (
                  <Card key={index} className="p-4 border border-gold-500/20 bg-black/20">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{group.name}</h4>
                        <p className="text-xs text-foreground/60 mb-2">{group.focus}</p>
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                            {group.level}
                          </Badge>
                          <span className="text-foreground/60">{group.members} members</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-foreground/60 mb-3">
                      Next: {group.nextSession}
                    </div>
                    <Button size="sm" className="w-full">
                      Join Group
                    </Button>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Live Events */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Live Events</h3>
              <div className="space-y-4">
                {liveEvents.map((event, index) => (
                  <Card key={index} className="p-4 border border-gold-500/20 bg-black/20">
                    <h4 className="font-semibold text-sm mb-2">{event.title}</h4>
                    <p className="text-xs text-foreground/60 mb-2">with {event.expert}</p>
                    <div className="flex items-center gap-2 text-xs text-foreground/60 mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                      <Clock className="w-3 h-3 ml-2" />
                      <span>{event.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/60">{event.attendees} attending</span>
                      <Button size="sm" variant="outline">
                        Join Event
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Center Column - Student Showcase */}
          <div className="space-y-8">
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-playfair font-semibold gradient-text">Student Showcase</h3>
                <Button variant="outline" size="sm" className="border-gold-500/30">
                  Submit Work
                </Button>
              </div>
              
              <div className="space-y-4">
                {showcaseArtworks.map((artwork, index) => (
                  <Card key={index} className={`overflow-hidden ${artwork.featured ? 'border-gold-500/50' : 'border-white/10'}`}>
                    <div className="relative">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        className="w-full h-48 object-cover"
                      />
                      {artwork.featured && (
                        <Badge className="absolute top-3 left-3 bg-gold-500 text-black">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-sm mb-1">{artwork.title}</h4>
                      <p className="text-xs text-foreground/60 mb-3">by {artwork.artist}</p>
                      <div className="flex items-center justify-between text-xs text-foreground/60">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            {artwork.likes}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {artwork.views}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            {artwork.comments}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Discussions & Resources */}
          <div className="space-y-8">
            
            {/* Community Discussions */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-playfair font-semibold gradient-text">Discussions</h3>
                <Button variant="outline" size="sm" className="border-gold-500/30">
                  New Topic
                </Button>
              </div>
              
              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <Card key={index} className="p-4 border border-gold-500/20 bg-black/20">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm flex-1 mr-2">{discussion.title}</h4>
                      {discussion.solved && (
                        <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                          Solved
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-foreground/60 mb-2">by {discussion.author}</p>
                    <div className="flex items-center justify-between text-xs text-foreground/60">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                          {discussion.category}
                        </Badge>
                        <span>{discussion.replies} replies</span>
                      </div>
                      <span>{discussion.lastActive}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Professional Development */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Pro Development</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gold-500/20 bg-black/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-gold-400" />
                    <h4 className="font-semibold text-sm">Certification Program</h4>
                  </div>
                  <p className="text-xs text-foreground/70 mb-3">
                    Earn professional certifications recognized by industry leaders
                  </p>
                  <Button size="sm" className="w-full">
                    View Programs
                  </Button>
                </div>
                
                <div className="p-4 border border-gold-500/20 bg-black/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Video className="w-5 h-5 text-gold-400" />
                    <h4 className="font-semibold text-sm">Career Workshops</h4>
                  </div>
                  <p className="text-xs text-foreground/70 mb-3">
                    Monthly workshops on freelancing, portfolio building, and client relations
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Schedule
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
