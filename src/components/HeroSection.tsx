import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-portrait.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen w-full overflow-hidden bg-black border-l border-r border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-0">
        <div className="grid md:grid-cols-[1fr,1fr] gap-0 min-h-screen items-center">
          {/* Left - Text Content */}
          <div className="animate-fade-in space-y-6 py-20 md:py-0 md:pr-12">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.15em] text-primary uppercase leading-[1.1] lg:text-6xl">MIHAI GRUIA
REBORN
            </h1>
            
            <p className="text-base md:text-lg text-foreground/90 max-w-md leading-relaxed">
              The most personal project<br />of my career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="goldOutline" size="lg" className="min-w-[180px]" asChild>
                <a href="https://open.spotify.com/album/4dnUXGfC2sFXLmAMalo8Bs" target="_blank" rel="noopener noreferrer">
                  LISTEN ON SPOTIFY
                </a>
              </Button>
              <Button variant="goldOutline" size="lg" className="min-w-[180px]" asChild>
                <a href="http://itunes.apple.com/album/id1852252958?ls=1&app=itunes" target="_blank" rel="noopener noreferrer">
                  LISTEN ON APPLE MUSIC
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Portrait Image */}
          <div className="relative h-[60vh] md:h-screen animate-fade-in overflow-hidden">
            <img src={heroImage} alt="Mihai Gruia" className="absolute inset-0 w-full h-full object-cover object-[70%_30%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;