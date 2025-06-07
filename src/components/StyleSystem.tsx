
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Camera, Palette, Lightbulb, Grid3X3, Save, Share2, Star, Download } from "lucide-react";
import { useState } from "react";

interface StylePreset {
  id: string;
  name: string;
  category: string;
  description: string;
  intensity: number;
  preview: string;
  tags: string[];
}

interface CustomStyle {
  id: string;
  name: string;
  photography: number;
  artistic: number;
  lighting: number;
  composition: number;
  colorPalette: string;
  texture: string;
  mixed: boolean;
}

export const StyleSystem = () => {
  const [selectedCategory, setSelectedCategory] = useState("photography");
  const [activeStyle, setActiveStyle] = useState<StylePreset | null>(null);
  const [customStyles, setCustomStyles] = useState<CustomStyle[]>([]);
  const [styleIntensity, setStyleIntensity] = useState([75]);
  const [mixingEnabled, setMixingEnabled] = useState(false);

  const photographyStyles: StylePreset[] = [
    {
      id: "fashion-editorial",
      name: "Fashion Editorial",
      category: "Fashion Photography",
      description: "High-end editorial fashion with dramatic lighting and sophisticated styling",
      intensity: 85,
      preview: "https://i.postimg.cc/X7jjcC7n/LINE-ALBUM-2025-5-30-250607-10.jpg",
      tags: ["Editorial", "High Fashion", "Dramatic"]
    },
    {
      id: "fashion-commercial",
      name: "Fashion Commercial",
      category: "Fashion Photography",
      description: "Clean, commercial fashion photography for brands and retail",
      intensity: 70,
      preview: "https://i.postimg.cc/PrSt65PY/LINE-ALBUM-2025-5-30-250607-11.jpg",
      tags: ["Commercial", "Clean", "Brand-focused"]
    },
    {
      id: "fashion-avant-garde",
      name: "Avant-garde Fashion",
      category: "Fashion Photography",
      description: "Experimental and artistic fashion photography pushing creative boundaries",
      intensity: 95,
      preview: "https://i.postimg.cc/L87mpQks/LINE-ALBUM-2025-5-30-250607-12.jpg",
      tags: ["Experimental", "Artistic", "Bold"]
    },
    {
      id: "portrait-headshot",
      name: "Professional Headshots",
      category: "Portrait Photography",
      description: "Clean, professional headshots for corporate and personal branding",
      intensity: 60,
      preview: "https://i.postimg.cc/yxVHPMKL/LINE-ALBUM-2025-5-30-250607-14.jpg",
      tags: ["Professional", "Corporate", "Clean"]
    },
    {
      id: "portrait-environmental",
      name: "Environmental Portraits",
      category: "Portrait Photography",
      description: "Portraits that incorporate the subject's environment and context",
      intensity: 75,
      preview: "https://i.postimg.cc/SN1h61vG/LINE-ALBUM-2025-5-30-250607-15.jpg",
      tags: ["Environmental", "Contextual", "Lifestyle"]
    },
    {
      id: "portrait-artistic",
      name: "Artistic Portraits",
      category: "Portrait Photography",
      description: "Creative and expressive portrait photography with artistic vision",
      intensity: 88,
      preview: "https://i.postimg.cc/dV7K4mMc/LINE-ALBUM-2025-5-30-250607-16.jpg",
      tags: ["Artistic", "Creative", "Expressive"]
    }
  ];

  const artisticStyles: StylePreset[] = [
    {
      id: "renaissance",
      name: "Renaissance",
      category: "Classical Art",
      description: "Rich, detailed artistic style inspired by Renaissance masters",
      intensity: 90,
      preview: "https://i.postimg.cc/LsLFM96y/LINE-ALBUM-2025-5-30-250607-18.jpg",
      tags: ["Classical", "Detailed", "Historical"]
    },
    {
      id: "baroque",
      name: "Baroque",
      category: "Classical Art",
      description: "Dramatic, ornate style with rich colors and dynamic movement",
      intensity: 85,
      preview: "https://i.postimg.cc/B639SrjJ/LINE-ALBUM-2025-5-30-250607-19.jpg",
      tags: ["Dramatic", "Ornate", "Dynamic"]
    },
    {
      id: "impressionism",
      name: "Impressionism",
      category: "Modern Art",
      description: "Soft, light-focused style with visible brushwork and color mixing",
      intensity: 80,
      preview: "https://i.postimg.cc/ydTqkLRc/LINE-ALBUM-2025-5-30-250607-20.jpg",
      tags: ["Soft", "Light-focused", "Painterly"]
    },
    {
      id: "abstract-expressionism",
      name: "Abstract Expressionism",
      category: "Modern Art",
      description: "Bold, emotional abstract style with gestural brushwork",
      intensity: 95,
      preview: "https://i.postimg.cc/br6KRd3v/LINE-ALBUM-2025-5-30-250607-21.jpg",
      tags: ["Abstract", "Emotional", "Bold"]
    }
  ];

  const technicalCategories = {
    lighting: [
      { id: "studio", name: "Studio Lighting", description: "Controlled professional studio setup" },
      { id: "natural", name: "Natural Light", description: "Soft, organic natural lighting" },
      { id: "dramatic", name: "Dramatic Lighting", description: "High contrast, moody lighting" },
      { id: "soft", name: "Soft Lighting", description: "Even, flattering soft illumination" }
    ],
    composition: [
      { id: "minimalist", name: "Minimalist", description: "Clean, simple compositions" },
      { id: "dynamic", name: "Dynamic", description: "Energetic, movement-focused" },
      { id: "classical", name: "Classical", description: "Traditional composition rules" },
      { id: "experimental", name: "Experimental", description: "Innovative, rule-breaking" }
    ],
    colorPalettes: [
      { id: "monochromatic", name: "Monochromatic", colors: ["#2C3E50", "#34495E", "#5D6D7E"] },
      { id: "complementary", name: "Complementary", colors: ["#E74C3C", "#27AE60", "#F39C12"] },
      { id: "analogous", name: "Analogous", colors: ["#3498DB", "#9B59B6", "#E91E63"] },
      { id: "vibrant", name: "Vibrant", colors: ["#FF6B35", "#F7931E", "#FFD23F"] }
    ],
    textures: [
      { id: "smooth", name: "Smooth", description: "Clean, polished surfaces" },
      { id: "textured", name: "Textured", description: "Rich, tactile surface details" },
      { id: "organic", name: "Organic", description: "Natural, flowing textures" },
      { id: "geometric", name: "Geometric", description: "Structured, angular patterns" }
    ]
  };

  const handleStyleSelect = (style: StylePreset) => {
    setActiveStyle(style);
    setStyleIntensity([style.intensity]);
  };

  const saveCustomStyle = () => {
    const newStyle: CustomStyle = {
      id: `custom-${Date.now()}`,
      name: `Custom Style ${customStyles.length + 1}`,
      photography: styleIntensity[0],
      artistic: 75,
      lighting: 80,
      composition: 70,
      colorPalette: "vibrant",
      texture: "smooth",
      mixed: mixingEnabled
    };
    setCustomStyles([...customStyles, newStyle]);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Professional{" "}
            <span className="gradient-text">Style System</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive artistic style management with professional-grade customization and mixing capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Style Categories */}
          <div className="lg:col-span-1">
            <Card className="glass-card p-6 h-fit">
              <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Style Categories</h3>
              
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-black/20 mb-4">
                  <TabsTrigger value="photography" className="text-xs">
                    <Camera className="w-4 h-4 mr-1" />
                    Photo
                  </TabsTrigger>
                  <TabsTrigger value="artistic" className="text-xs">
                    <Palette className="w-4 h-4 mr-1" />
                    Art
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="photography" className="space-y-3">
                  {photographyStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => handleStyleSelect(style)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        activeStyle?.id === style.id
                          ? 'border-gold-500 bg-gold-500/10'
                          : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
                      }`}
                    >
                      <div className="font-semibold text-sm">{style.name}</div>
                      <div className="text-xs text-foreground/60 mb-2">{style.category}</div>
                      <div className="flex flex-wrap gap-1">
                        {style.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-gold-500/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </button>
                  ))}
                </TabsContent>

                <TabsContent value="artistic" className="space-y-3">
                  {artisticStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => handleStyleSelect(style)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        activeStyle?.id === style.id
                          ? 'border-gold-500 bg-gold-500/10'
                          : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
                      }`}
                    >
                      <div className="font-semibold text-sm">{style.name}</div>
                      <div className="text-xs text-foreground/60 mb-2">{style.category}</div>
                      <div className="flex flex-wrap gap-1">
                        {style.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-gold-500/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </button>
                  ))}
                </TabsContent>
              </Tabs>

              {/* Style Mixing Toggle */}
              <div className="mt-6 pt-4 border-t border-gold-500/20">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-gold-400">Style Mixing</label>
                  <Switch
                    checked={mixingEnabled}
                    onCheckedChange={setMixingEnabled}
                  />
                </div>
                <p className="text-xs text-foreground/60">
                  Enable to blend multiple artistic styles
                </p>
              </div>
            </Card>
          </div>

          {/* Main Style Preview & Controls */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Style Preview */}
            {activeStyle && (
              <Card className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-playfair font-semibold gradient-text">
                      {activeStyle.name}
                    </h3>
                    <p className="text-sm text-foreground/60">{activeStyle.category}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-gold-500/30">
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="border-gold-500/30">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="artistic-frame aspect-square">
                    <img
                      src={activeStyle.preview}
                      alt={activeStyle.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">{activeStyle.description}</p>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gold-400">
                        Style Intensity: {styleIntensity[0]}%
                      </label>
                      <Slider
                        value={styleIntensity}
                        onValueChange={setStyleIntensity}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {activeStyle.tags.map((tag) => (
                        <Badge key={tag} className="bg-gold-500/20 text-gold-400 border-gold-500/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Technical Categories */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Technical Controls</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Lighting */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gold-400 flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Lighting Style
                  </label>
                  <Select>
                    <SelectTrigger className="bg-black/30 border-gold-500/20">
                      <SelectValue placeholder="Select lighting style" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 border-gold-500/20">
                      {technicalCategories.lighting.map((lighting) => (
                        <SelectItem key={lighting.id} value={lighting.id}>
                          <div>
                            <div className="font-semibold">{lighting.name}</div>
                            <div className="text-xs text-foreground/60">{lighting.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Composition */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gold-400 flex items-center">
                    <Grid3X3 className="w-4 h-4 mr-2" />
                    Composition
                  </label>
                  <Select>
                    <SelectTrigger className="bg-black/30 border-gold-500/20">
                      <SelectValue placeholder="Select composition style" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 border-gold-500/20">
                      {technicalCategories.composition.map((comp) => (
                        <SelectItem key={comp.id} value={comp.id}>
                          <div>
                            <div className="font-semibold">{comp.name}</div>
                            <div className="text-xs text-foreground/60">{comp.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Color Palettes */}
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2 text-gold-400">Color Palette</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {technicalCategories.colorPalettes.map((palette) => (
                    <button
                      key={palette.id}
                      className="p-3 rounded-lg border border-gold-500/20 bg-black/20 hover:border-gold-500/40 transition-all"
                    >
                      <div className="flex justify-center space-x-1 mb-2">
                        {palette.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <div className="text-xs font-semibold">{palette.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex space-x-3">
                <Button 
                  onClick={saveCustomStyle}
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Custom Style
                </Button>
                <Button variant="outline" className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10">
                  <Download className="w-4 h-4 mr-2" />
                  Export Preset
                </Button>
              </div>
            </Card>

            {/* Custom Styles Library */}
            {customStyles.length > 0 && (
              <Card className="glass-card p-6">
                <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">
                  Your Custom Styles
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {customStyles.map((style) => (
                    <div
                      key={style.id}
                      className="p-4 rounded-lg border border-gold-500/20 bg-black/20 hover:border-gold-500/40 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">{style.name}</h4>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Star className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-xs text-foreground/60 space-y-1">
                        <div>Photography: {style.photography}%</div>
                        <div>Mixed Style: {style.mixed ? 'Yes' : 'No'}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
