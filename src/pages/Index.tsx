
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
import { PremiumFooter } from "@/components/PremiumFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PremiumHeader />
      <main>
        <HeroSection />
        <CreativeStudio />
        <StyleShowcase />
        <StyleSystem />
        <LearningCenter />
        <SkillDevelopment />
        <CommunityLearning />
        <ArtistGallery />
        <CommercialLicensing />
        <ProfessionalFeatures />
        <QualityEthics />
      </main>
      <PremiumFooter />
    </div>
  );
};

export default Index;
