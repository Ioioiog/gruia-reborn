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
          <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-wider text-foreground">
            GRUIA — REBORN
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            The most personal project of my career.
          </p>
          
          <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed">
            From the stages of Akcent to the freedom of independence, REBORN is a journey through sound, 
            emotion, and evolution. This is where it all begins again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="gold" 
              size="lg"
              className="min-w-[200px]"
              asChild
            >
              <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
                <Music2 className="mr-2 h-5 w-5" />
                SPOTIFY
              </a>
            </Button>
            <Button 
              variant="goldOutline" 
              size="lg"
              className="min-w-[200px]"
              asChild
            >
              <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer">
                <Music2 className="mr-2 h-5 w-5" />
                APPLE MUSIC
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
