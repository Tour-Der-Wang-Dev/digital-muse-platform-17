
import { PremiumHeader } from "@/components/PremiumHeader";
import { HeroSection } from "@/components/HeroSection";
import { CreativeStudio } from "@/components/CreativeStudio";
import { StyleShowcase } from "@/components/StyleShowcase";
import { StyleSystem } from "@/components/StyleSystem";
import { ArtistGallery } from "@/components/ArtistGallery";
import { LearningCenter } from "@/components/LearningCenter";
import { SkillDevelopment } from "@/components/SkillDevelopment";
import { CommunityLearning } from "@/components/CommunityLearning";
import { CommercialLicensing } from "@/components/CommercialLicensing";
import { ProfessionalFeatures } from "@/components/ProfessionalFeatures";
import { QualityEthics } from "@/components/QualityEthics";
import { MarketingSection } from "@/components/MarketingSection";
import { EnterprisePlanning } from "@/components/EnterprisePlanning";
import { PremiumFooter } from "@/components/PremiumFooter";
import { WorkspaceManager } from "@/components/WorkspaceManager";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PremiumHeader />
      <main>
        <HeroSection />
        <CreativeStudio />
        <WorkspaceManager />
        <StyleShowcase />
        <StyleSystem />
        <LearningCenter />
        <SkillDevelopment />
        <CommunityLearning />
        <ArtistGallery />
        <MarketingSection />
        <CommercialLicensing />
        <ProfessionalFeatures />
        <EnterprisePlanning />
        <QualityEthics />
      </main>
      <PremiumFooter />
      <PerformanceMonitor />
    </div>
  );
};

export default Index;
