import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-portrait.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Mobile: Full background image with overlay - fills entire section */}
      <div className="md:hidden absolute inset-0">
        <img src={heroImage} alt="Mihai Gruia" className="w-full h-full object-cover object-[65%_30%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 min-h-screen flex items-end md:items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-0 w-full">
          <div className="grid md:grid-cols-[1fr,1fr] gap-0 md:min-h-screen md:items-center">
            {/* Text Content - overlaid on mobile, left column on desktop */}
            <div className="animate-fade-in space-y-4 sm:space-y-6 py-12 pb-16 md:py-0 md:pr-12">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] sm:tracking-[0.15em] text-primary uppercase leading-[1.1]">MIHAI GRUIA
REBORN
              </h1>
              
              <p className="text-sm sm:text-base text-foreground/90 max-w-md leading-relaxed md:text-2xl">
                The most personal project of my career. <br />​
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 pt-2">
                <Button variant="goldOutline" size="lg" className="w-full sm:min-w-[180px]" asChild>
                  <a href="https://open.spotify.com/album/4dnUXGfC2sFXLmAMalo8Bs" target="_blank" rel="noopener noreferrer">
                    LISTEN ON SPOTIFY
                  </a>
                </Button>
                <Button variant="goldOutline" size="lg" className="w-full sm:min-w-[180px]" asChild>
                  <a href="http://itunes.apple.com/album/id1852252958?ls=1&app=itunes" target="_blank" rel="noopener noreferrer">
                    LISTEN ON APPLE MUSIC
                  </a>
                </Button>
              </div>
            </div>

            {/* Desktop: Portrait Image (hidden on mobile) */}
            <div className="relative h-screen animate-fade-in overflow-hidden hidden md:block">
              <img src={heroImage} alt="Mihai Gruia" className="absolute inset-0 w-full h-full object-cover object-[70%_30%]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;