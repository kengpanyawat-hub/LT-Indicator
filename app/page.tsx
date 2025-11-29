import HeroSection from "@/components/home/HeroSection";
import WhyLongtrade from "@/components/home/WhyLongtrade";
import IndicatorShowcase from "@/components/home/IndicatorShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import LifetimeInclusion from "@/components/home/LifetimeInclusion";
import PricingSection from "@/components/home/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import FinalCTA from "@/components/home/FinalCTA";
import TradingToolkit from "@/components/home/TradingToolkit";
import CommunityWins from "@/components/home/CommunityWins";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CommunityWins />
      <WhyLongtrade />
      <IndicatorShowcase />
      <TradingToolkit />
      <HowItWorks />
      <LifetimeInclusion />
      <PricingSection />
      <Testimonials />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
