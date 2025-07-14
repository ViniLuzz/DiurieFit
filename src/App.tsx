import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import IngredientsSection from "@/components/IngredientsSection";
import SafetySection from "@/components/SafetySection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SecuritySection from "@/components/SecuritySection";
import UsageSection from "@/components/UsageSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import { scrollToElement } from "@/lib/scrollUtils";

const App = () => {
  // Apply smooth scrolling to all #comprar links
  useEffect(() => {
    // This handles any links that might be added dynamically
    document.body.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.getAttribute('href') === '#comprar') {
        e.preventDefault();
        scrollToElement('comprar');
      }
    });
    
    return () => {
      document.body.removeEventListener("click", () => {});
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HeroSection />
        <BenefitsSection />
        <IngredientsSection />
        <SafetySection />
        <BeforeAfterSection />
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

export default App;