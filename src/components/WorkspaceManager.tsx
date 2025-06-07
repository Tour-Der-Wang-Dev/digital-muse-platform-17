
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { 
  Layout, 
  Grid, 
  Maximize2, 
  Settings, 
  Keyboard, 
  Monitor,
  Tablet,
  Smartphone,
  Accessibility,
  Zap,
  Save,
  RotateCcw
} from "lucide-react";

interface WorkspaceLayout {
  id: string;
  name: string;
  description: string;
  components: string[];
  isActive: boolean;
}

interface UXSettings {
  animations: boolean;
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  keyboardNavigation: boolean;
  autoSave: boolean;
  backgroundProcessing: boolean;
  performanceMode: boolean;
}

export const WorkspaceManager = () => {
  const [activeLayout, setActiveLayout] = useState<string>('creative-studio');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [uxSettings, setUxSettings] = useState<UXSettings>({
    animations: true,
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    keyboardNavigation: true,
    autoSave: true,
    backgroundProcessing: true,
    performanceMode: false
  });

  const workspaceLayouts: WorkspaceLayout[] = [
    {
      id: 'creative-studio',
      name: 'Creative Studio',
      description: 'Optimized for image generation and editing',
      components: ['prompt-editor', 'style-panel', 'preview-canvas', 'history'],
      isActive: true
    },
    {
      id: 'gallery-curator',
      name: 'Gallery Curator',
      description: 'Perfect for browsing and organizing artwork',
      components: ['gallery-grid', 'filters', 'metadata-panel', 'collections'],
      isActive: false
    },
    {
      id: 'professional-review',
      name: 'Professional Review',
      description: 'Detailed analysis and quality assessment',
      components: ['large-preview', 'quality-metrics', 'comparison-view', 'annotations'],
      isActive: false
    },
    {
      id: 'learning-workspace',
      name: 'Learning Workspace',
      description: 'Educational content and tutorials',
      components: ['tutorial-panel', 'practice-area', 'progress-tracker', 'resources'],
      isActive: false
    }
  ];

  const keyboardShortcuts = [
    { key: 'Ctrl + N', action: 'New Generation', category: 'Creation' },
    { key: 'Ctrl + S', action: 'Save Project', category: 'File' },
    { key: 'Ctrl + Z', action: 'Undo', category: 'Edit' },
    { key: 'Ctrl + Y', action: 'Redo', category: 'Edit' },
    { key: 'Space', action: 'Play/Pause Generation', category: 'Control' },
    { key: 'Ctrl + 1-4', action: 'Switch Workspace Layout', category: 'Navigation' },
    { key: 'F', action: 'Toggle Fullscreen', category: 'View' },
    { key: 'G', action: 'Open Gallery', category: 'Navigation' },
    { key: 'H', action: 'Show/Hide Help', category: 'Help' },
    { key: '?', action: 'Keyboard Shortcuts', category: 'Help' }
  ];

  useEffect(() => {
    // Apply accessibility settings
    if (uxSettings.reducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0s');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
    }

    if (uxSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (uxSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }
  }, [uxSettings]);

  const handleLayoutChange = (layoutId: string) => {
    setActiveLayout(layoutId);
    // Trigger layout reorganization
    console.log(`Switching to ${layoutId} layout`);
  };

  const handleSettingChange = (setting: keyof UXSettings) => {
    setUxSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const getViewportIcon = () => {
    switch (viewportMode) {
      case 'desktop': return Monitor;
      case 'tablet': return Tablet;
      case 'mobile': return Smartphone;
      default: return Monitor;
    }
  };

  return (
    <section id="workspace" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Professional Workspace
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Customize your creative environment for maximum productivity and accessibility
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Workspace Layouts */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout className="w-5 h-5" />
                Workspace Layouts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {workspaceLayouts.map((layout) => (
                <div
                  key={layout.id}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    activeLayout === layout.id
                      ? 'border-gold-500 bg-gold-500/10'
                      : 'border-border hover:border-gold-500/50'
                  }`}
                  onClick={() => handleLayoutChange(layout.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{layout.name}</h4>
                    {activeLayout === layout.id && (
                      <Badge variant="secondary" className="bg-gold-500/20 text-gold-400">
                        Active
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">{layout.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {layout.components.map((component) => (
                      <Badge key={component} variant="outline" className="text-xs">
                        {component}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Responsive Design */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grid className="w-5 h-5" />
                Responsive Design
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-3 block">Viewport Preview</label>
                <div className="flex space-x-2">
                  {(['desktop', 'tablet', 'mobile'] as const).map((mode) => {
                    const Icon = mode === 'desktop' ? Monitor : mode === 'tablet' ? Tablet : Smartphone;
                    return (
                      <Button
                        key={mode}
                        variant={viewportMode === mode ? "default" : "outline"}
                        size="sm"
                        onClick={() => setViewportMode(mode)}
                        className="flex items-center gap-2"
                      >
                        <Icon className="w-4 h-4" />
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Touch Optimization</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Touch-friendly buttons</span>
                    <Switch checked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Gesture navigation</span>
                    <Switch checked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Haptic feedback</span>
                    <Switch checked={false} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Progressive Enhancement</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Offline capabilities</span>
                    <Switch checked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Background sync</span>
                    <Switch checked={uxSettings.backgroundProcessing} onChange={() => handleSettingChange('backgroundProcessing')} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility & Performance */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Accessibility className="w-5 h-5" />
                Accessibility & Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Accessibility (WCAG 2.1 AA)</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Reduced motion</span>
                    <Switch 
                      checked={uxSettings.reducedMotion} 
                      onCheckedChange={() => handleSettingChange('reducedMotion')} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">High contrast</span>
                    <Switch 
                      checked={uxSettings.highContrast} 
                      onCheckedChange={() => handleSettingChange('highContrast')} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Large text</span>
                    <Switch 
                      checked={uxSettings.largeText} 
                      onCheckedChange={() => handleSettingChange('largeText')} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Keyboard navigation</span>
                    <Switch 
                      checked={uxSettings.keyboardNavigation} 
                      onCheckedChange={() => handleSettingChange('keyboardNavigation')} 
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Performance</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Smooth animations</span>
                    <Switch 
                      checked={uxSettings.animations} 
                      onCheckedChange={() => handleSettingChange('animations')} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Performance mode</span>
                    <Switch 
                      checked={uxSettings.performanceMode} 
                      onCheckedChange={() => handleSettingChange('performanceMode')} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Auto-save</span>
                    <Switch 
                      checked={uxSettings.autoSave} 
                      onCheckedChange={() => handleSettingChange('autoSave')} 
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keyboard Shortcuts */}
        <Card className="glass-card mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Keyboard className="w-5 h-5" />
              Keyboard Shortcuts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(
                keyboardShortcuts.reduce((acc, shortcut) => {
                  if (!acc[shortcut.category]) acc[shortcut.category] = [];
                  acc[shortcut.category].push(shortcut);
                  return acc;
                }, {} as Record<string, typeof keyboardShortcuts>)
              ).map(([category, shortcuts]) => (
                <div key={category}>
                  <h4 className="font-medium mb-3 text-gold-400">{category}</h4>
                  <div className="space-y-2">
                    {shortcuts.map((shortcut, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{shortcut.action}</span>
                        <Badge variant="outline" className="font-mono text-xs">
                          {shortcut.key}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
            <Save className="w-4 h-4 mr-2" />
            Save Workspace
          </Button>
          <Button variant="outline" className="border-gold-500/30 text-gold-400">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset to Default
          </Button>
        </div>
      </div>
    </section>
  );
};
