import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="contacts">
          <CTASection />
        </div>
      </main>
    </div>
  );
};

export default Index;
