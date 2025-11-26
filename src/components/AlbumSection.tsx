import { Button } from "@/components/ui/button";
import albumCover from "@/assets/reborn-cover.jpg";

const AlbumSection = () => {
  const tracks = [
    { number: "01", title: "Be Real" },
    { number: "02", title: "REBORN" },
    { number: "03", title: "Track Name" },
  ];

  return (
    <section className="py-24 px-6 bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-20 items-start">
          {/* Left - Album Cover & Tracklist */}
          <div className="animate-fade-in space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary tracking-[0.15em] uppercase mb-8">
                THE REBORN ALBUM
              </h2>
              
              <div className="relative">
                <img
                  src={albumCover}
                  alt="REBORN Album Cover"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Tracklist */}
            <div className="space-y-3">
              {tracks.map((track) => (
                <div 
                  key={track.number}
                  className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors py-2 border-b border-gold/10"
                >
                  <span className="text-primary font-mono text-sm">{track.number}</span>
                  <span className="text-sm tracking-wide">· {track.title}</span>
                </div>
              ))}
            </div>

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
          </div>

          {/* Right - Empty space or can add content later */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;
