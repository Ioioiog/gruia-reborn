import { Button } from "@/components/ui/button";
import heroImage from "@/assets/reborn-hero.jpg";
import { Music2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-in space-y-8 max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.25em] text-primary uppercase">
            GRUIA — REBORN
          </h1>
          
          <p className="mt-6 text-lg text-foreground/80">
            The most personal project of my career.
          </p>
          
          <p className="mt-4 text-sm sm:text-base text-foreground/80">
            From my early days as a member of Akcent back in 2001 to my evolution as a producer and independent artist, "Reborn" is the album where I finally tell my story without filters.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button 
              variant="gold" 
              size="lg"
              asChild
            >
              <a href="https://open.spotify.com/album/4dnUXGfC2sFXLmAMalo8Bs" target="_blank" rel="noopener noreferrer">
                <Music2 className="mr-2 h-5 w-5" />
                LISTEN ON SPOTIFY
              </a>
            </Button>
            <Button 
              variant="goldOutline" 
              size="lg"
              asChild
            >
              <a href="http://itunes.apple.com/album/id1852252958?ls=1&app=itunes" target="_blank" rel="noopener noreferrer">
                <Music2 className="mr-2 h-5 w-5" />
                LISTEN ON APPLE MUSIC
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-slow">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
