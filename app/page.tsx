import HeroSection from "@/components/HeroSection";
import WhyLongtrade from "@/components/home/WhyLongtrade";
import IndicatorShowcase from "@/components/home/IndicatorShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/home/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyLongtrade />
      <IndicatorShowcase />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
