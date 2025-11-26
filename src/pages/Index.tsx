import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AlbumSection from "@/components/AlbumSection";
import GallerySection from "@/components/GallerySection";
import TimelineSection from "@/components/TimelineSection";
import FeaturedSingleSection from "@/components/FeaturedSingleSection";
import PressSection from "@/components/PressSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Grid Container with Vertical Borders */}
      <div className="relative border-l border-r border-gold/20">
        <HeroSection />
        {/* Second Row: Album (left) + About (right) */}
        <AlbumSection />
        <AboutSection />
        {/* Third Row: Behind the Rebirth title (left) + Cinematic text (right) */}
        <GallerySection />
        <TimelineSection />
        <FeaturedSingleSection />
        <PressSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
