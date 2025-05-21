
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import IngredientsSection from "@/components/IngredientsSection";
import SafetySection from "@/components/SafetySection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SecuritySection from "@/components/SecuritySection";
import UsageSection from "@/components/UsageSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HeroSection />
        <BenefitsSection />
        <IngredientsSection />
        <SafetySection />
        <PricingSection />
        <TestimonialsSection />
        <SecuritySection />
        <UsageSection />
        <FaqSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
