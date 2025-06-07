
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Users, 
  MessageSquare, 
  Award, 
  CheckCircle, 
  Clock,
  Star,
  Target,
  Zap,
  TrendingUp
} from "lucide-react";

export const SkillDevelopment = () => {
  const challenges = [
    {
      title: "Daily Prompt Challenge",
      description: "Create unique artwork using provided prompts",
      difficulty: "Beginner",
      timeLimit: "24 hours",
      participants: 1247,
      reward: "50 XP",
      status: "active"
    },
    {
      title: "Style Mastery: Renaissance",
      description: "Master classical renaissance painting techniques",
      difficulty: "Intermediate", 
      timeLimit: "7 days",
      participants: 543,
      reward: "Renaissance Badge",
      status: "starting"
    },
    {
      title: "Commercial Portfolio",
      description: "Build a professional portfolio piece",
      difficulty: "Advanced",
      timeLimit: "2 weeks", 
      participants: 287,
      reward: "Pro Certification",
      status: "upcoming"
    }
  ];

  const mentors = [
    {
      name: "Alexandra Chen",
      specialty: "Fashion Photography",
      experience: "15+ years",
      rating: 4.9,
      students: 2847,
      avatar: "https://i.postimg.cc/MGvX0j5n/LINE-ALBUM-2025-5-30-250607-1.jpg",
      available: true
    },
    {
      name: "Marcus Rivera",
      specialty: "Concept Art",
      experience: "12+ years", 
      rating: 4.8,
      students: 1923,
      avatar: "https://i.postimg.cc/SNksTPVF/LINE-ALBUM-2025-5-30-250607-3.jpg",
      available: false
    },
    {
      name: "Elena Volkov",
      specialty: "Digital Portraits",
      experience: "10+ years",
      rating: 4.9,
      students: 3156,
      avatar: "https://i.postimg.cc/Y0fS2Nrs/LINE-ALBUM-2025-5-30-250607-2.jpg",
      available: true
    }
  ];

  const achievements = [
    { name: "First Steps", description: "Complete your first artwork", unlocked: true },
    { name: "Style Explorer", description: "Try 5 different art styles", unlocked: true },
    { name: "Community Helper", description: "Give feedback to 10 artworks", unlocked: true },
    { name: "Master Prompter", description: "Create 100 unique prompts", unlocked: false },
    { name: "Style Master", description: "Achieve mastery in any style", unlocked: false },
    { name: "Mentor", description: "Help guide new artists", unlocked: false }
  ];

  const skillProgress = [
    { skill: "Prompt Engineering", level: 7, progress: 75, maxLevel: 10 },
    { skill: "Composition", level: 5, progress: 40, maxLevel: 10 },
    { skill: "Color Theory", level: 6, progress: 60, maxLevel: 10 },
    { skill: "Lighting", level: 4, progress: 30, maxLevel: 10 }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Skill <span className="gradient-text">Development</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Progressive learning system with challenges, mentorship, and professional certification
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Challenges & Progress */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Active Challenges */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-playfair font-semibold gradient-text">Active Challenges</h3>
                <Button variant="outline" size="sm" className="border-gold-500/30">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="p-4 border border-gold-500/20 bg-black/20">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{challenge.title}</h4>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              challenge.difficulty === 'Beginner' ? 'border-green-500/30 text-green-400' :
                              challenge.difficulty === 'Intermediate' ? 'border-blue-500/30 text-blue-400' :
                              'border-purple-500/30 text-purple-400'
                            }`}
                          >
                            {challenge.difficulty}
                          </Badge>
                          <Badge 
                            variant="outline"
                            className={`text-xs ${
                              challenge.status === 'active' ? 'border-gold-500/30 text-gold-400' :
                              challenge.status === 'starting' ? 'border-orange-500/30 text-orange-400' :
                              'border-gray-500/30 text-gray-400'
                            }`}
                          >
                            {challenge.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-foreground/70 mb-3">{challenge.description}</p>
                        <div className="flex items-center gap-4 text-xs text-foreground/60">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {challenge.timeLimit}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {challenge.participants} participants
                          </div>
                          <div className="flex items-center">
                            <Trophy className="w-3 h-3 mr-1" />
                            {challenge.reward}
                          </div>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className={challenge.status === 'active' ? 
                          "bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500" :
                          ""
                        }
                      >
                        {challenge.status === 'active' ? 'Join' : 
                         challenge.status === 'starting' ? 'Register' : 'Notify Me'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Skill Progress */}
            <Card className="glass-card p-6">
              <h3 className="text-xl font-playfair font-semibold mb-6 gradient-text">Skill Progress</h3>
              <div className="space-y-6">
                {skillProgress.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.skill}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-foreground/60">Level {skill.level}</span>
                        <Badge variant="outline" className="border-gold-500/30 text-gold-400 text-xs">
                          {skill.progress}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={skill.progress} className="h-2 mb-1" />
                    <div className="text-xs text-foreground/60 text-right">
                      Next: Level {skill.level + 1}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Mentorship & Achievements */}
          <div className="space-y-8">
            
            {/* Professional Mentors */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Professional Mentors</h3>
              <div className="space-y-4">
                {mentors.map((mentor, index) => (
                  <Card key={index} className="p-4 border border-gold-500/20 bg-black/20">
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={mentor.avatar} 
                        alt={mentor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{mentor.name}</h4>
                        <p className="text-xs text-foreground/60">{mentor.specialty}</p>
                      </div>
                      <Badge 
                        variant={mentor.available ? "default" : "outline"}
                        className={mentor.available ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                      >
                        {mentor.available ? "Available" : "Busy"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-foreground/60 mb-3">
                      <span>{mentor.experience} experience</span>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1 text-gold-400" />
                        {mentor.rating}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full" 
                      variant={mentor.available ? "default" : "outline"}
                      disabled={!mentor.available}
                    >
                      {mentor.available ? "Book Session" : "Join Waitlist"}
                    </Button>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      achievement.unlocked 
                        ? 'border-gold-500/30 bg-gold-500/10' 
                        : 'border-white/10 bg-black/20'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.unlocked 
                        ? 'bg-gold-500 text-black' 
                        : 'bg-white/10 text-white/40'
                    }`}>
                      {achievement.unlocked ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Award className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium text-sm ${
                        achievement.unlocked ? 'text-foreground' : 'text-foreground/50'
                      }`}>
                        {achievement.name}
                      </h4>
                      <p className={`text-xs ${
                        achievement.unlocked ? 'text-foreground/70' : 'text-foreground/40'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
