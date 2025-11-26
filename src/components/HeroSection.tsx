import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-portrait.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-0">
        <div className="grid md:grid-cols-[1fr,1fr] gap-0 min-h-screen items-center">
          {/* Left - Text Content */}
          <div className="animate-fade-in space-y-4 sm:space-y-6 py-12 sm:py-16 md:py-0 md:pr-12">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] sm:tracking-[0.15em] text-primary uppercase leading-[1.1]">MIHAI GRUIA
REBORN
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-foreground/90 max-w-md leading-relaxed">
              The most personal project<br />of my career.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button variant="goldOutline" size="lg" className="w-full sm:min-w-[180px] sm:w-auto" asChild>
                <a href="https://open.spotify.com/album/4dnUXGfC2sFXLmAMalo8Bs" target="_blank" rel="noopener noreferrer">
                  LISTEN ON SPOTIFY
                </a>
              </Button>
              <Button variant="goldOutline" size="lg" className="w-full sm:min-w-[180px] sm:w-auto" asChild>
                <a href="http://itunes.apple.com/album/id1852252958?ls=1&app=itunes" target="_blank" rel="noopener noreferrer">
                  LISTEN ON APPLE MUSIC
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Portrait Image */}
          <div className="relative h-[50vh] sm:h-[60vh] md:h-screen animate-fade-in overflow-hidden">
            <img src={heroImage} alt="Mihai Gruia" className="absolute inset-0 w-full h-full object-cover object-[70%_30%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;