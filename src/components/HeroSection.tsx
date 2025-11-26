import { Button } from "@/components/ui/button";
import heroImage from "@/assets/reborn-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-0">
        <div className="grid md:grid-cols-2 gap-0 min-h-screen items-center">
          {/* Left - Text Content */}
          <div className="animate-fade-in space-y-8 py-20 md:py-0">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.15em] text-primary uppercase leading-tight">
              GRUIA —<br />REBORN
            </h1>
            
            <p className="text-base md:text-lg text-foreground/80 max-w-md">
              The most personal project of my career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="goldOutline" 
                size="lg"
                asChild
              >
                <a href="https://open.spotify.com/album/4dnUXGfC2sFXLmAMalo8Bs" target="_blank" rel="noopener noreferrer">
                  LISTEN ON SPOTIFY
                </a>
              </Button>
              <Button 
                variant="goldOutline" 
                size="lg"
                asChild
              >
                <a href="http://itunes.apple.com/album/id1852252958?ls=1&app=itunes" target="_blank" rel="noopener noreferrer">
                  LISTEN ON APPLE MUSIC
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Portrait Image */}
          <div className="relative h-[60vh] md:h-screen animate-fade-in">
            <img
              src={heroImage}
              alt="Mihai Gruia"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
