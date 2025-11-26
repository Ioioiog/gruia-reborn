import { Button } from "@/components/ui/button";
import albumCover from "@/assets/reborn-cover.jpg";

const AlbumSection = () => {
  const tracks = [
    { number: "01", name: "Be Real" },
    { number: "02", name: "REBORN" },
    { number: "03", name: "Track Name" },
    { number: "04", name: "Track Name" },
    { number: "05", name: "Track Name" },
  ];

  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary tracking-[0.15em] uppercase">
          THE REBORN ALBUM
        </h2>

        <div className="flex gap-8 items-start">
          <div className="w-48 h-48 flex-shrink-0">
            <img
              src={albumCover}
              alt="REBORN Album Cover"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-3">
            {tracks.map((track) => (
              <div key={track.number} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                <span className="text-primary font-mono text-sm">{track.number}</span>
                <span className="text-sm tracking-wide">· {track.name}</span>
              </div>
            ))}
          </div>
        </div>

        <Button 
          variant="goldOutline" 
          size="lg"
          className="w-full max-w-xs"
          asChild
        >
          <a href="https://open.spotify.com/album/4dnUXGfC2sFXLmAMalo8Bs" target="_blank" rel="noopener noreferrer">
            LISTEN ON SPOTIFY
          </a>
        </Button>
      </div>
    </div>
  );
};

export default AlbumSection;
