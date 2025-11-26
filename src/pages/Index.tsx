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
        
        {/* Second Row: About/This is Gruia (left) + Album + Tracklist (right) */}
        <section className="relative border-t border-gold/20">
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gold/20 hidden md:block -translate-x-1/2" />
          <div className="grid md:grid-cols-2">
            <AboutSection />
            <AlbumSection />
          </div>
        </section>

        {/* Third Row: Timeline (left) + Gallery Grid (right) */}
        <section className="relative border-t border-gold/20">
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gold/20 hidden md:block -translate-x-1/2" />
          <div className="grid md:grid-cols-2">
            <TimelineSection />
            <GallerySection />
          </div>
        </section>

        <FeaturedSingleSection />
        <PressSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
