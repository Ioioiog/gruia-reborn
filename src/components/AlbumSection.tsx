import { Button } from "@/components/ui/button";
import albumCover from "@/assets/reborn-cover.jpg";

const AlbumSection = () => {
  return (
    <section className="py-24 px-6 bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 md:gap-16 items-center">
          {/* Left - Album Cover */}
          <div className="animate-fade-in order-2 md:order-1">
            <div className="relative">
              <img
                src={albumCover}
                alt="REBORN Album Cover"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right - Story & Buttons */}
          <div className="space-y-8 animate-fade-in order-1 md:order-2">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary tracking-[0.15em] uppercase">
                THE REBORN ALBUM
              </h2>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                "Reborn" is the sound of starting over with everything I've learned along the way.
              </p>
              <p>
                It's the moment I stopped chasing expectations and started telling my own truth.
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                variant="goldOutline" 
                size="lg"
                className="w-full"
                asChild
              >
                <a href="https://open.spotify.com/album/4dnUXGfC2sFXLmAMalo8Bs" target="_blank" rel="noopener noreferrer">
                  LISTEN ON SPOTIFY
                </a>
              </Button>
              
              <p className="text-xs text-foreground/60 text-center tracking-wide">
                Also available on Apple Music, iTunes and all major platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;
