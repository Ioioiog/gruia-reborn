import { Button } from "@/components/ui/button";
import albumCover from "@/assets/reborn-cover.jpg";
import { Music2 } from "lucide-react";

const AlbumSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Album Cover */}
          <div className="animate-fade-in order-2 md:order-1">
            <img
              src={albumCover}
              alt="REBORN Album Cover"
              className="w-full h-auto border border-gold/40 shadow-2xl"
            />
          </div>

          {/* Right - Text */}
          <div className="space-y-8 animate-fade-in order-1 md:order-2">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground tracking-wide">
                THE REBORN ALBUM
              </h2>
              <div className="w-24 h-px bg-primary mt-4" />
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed max-w-xl">
              <p>
                "Reborn" is the sound of starting over with everything I've learned along the way. It's the moment I stopped chasing expectations and started telling my own truth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

            <p className="text-sm text-muted-foreground italic pt-4">
              Also available on iTunes and all major streaming platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;
