import HeroSection from "@/components/home/HeroSection";
import IndusriesSection from "@/components/home/IndusriesSection";
import ServicesSection from "@/components/home/ServicesSection";
import StandardsSection from "@/components/home/StandardsSection";
import WhySection from "@/components/home/WhySection";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <WhySection/>
      <ServicesSection/>
      <IndusriesSection/>
      <StandardsSection/>
    </main>
  );
}
