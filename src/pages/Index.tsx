import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import MissionSection from "@/components/ui/mission-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default Index;
