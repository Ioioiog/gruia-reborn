import { Button } from "@/components/ui/button";
import albumCover from "@/assets/reborn-cover.jpg";

const AlbumSection = () => {
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

          <div className="flex-1 space-y-6">
            <p className="text-foreground/90 text-lg leading-relaxed">
              "Reborn" is not just an album.
            </p>
            <p className="text-foreground/90 text-lg leading-relaxed">
              It is the moment I found myself again as an artist, and as a human being.
            </p>
            <p className="text-primary text-lg font-serif tracking-wider">
              This is GRUIA. Reborn.
            </p>
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
