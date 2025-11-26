import { Button } from "@/components/ui/button";
import albumCover from "@/assets/reborn-cover.jpg";

const AlbumSection = () => {
  return (
    <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-primary tracking-[0.1em] sm:tracking-[0.15em] uppercase">
          THE REBORN ALBUM
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          <div className="w-full sm:w-40 md:w-48 h-auto sm:h-40 md:h-48 flex-shrink-0 mx-auto sm:mx-0 max-w-[240px] sm:max-w-none">
            <img
              src={albumCover}
              alt="REBORN Album Cover"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-4 sm:space-y-6 text-center sm:text-left">
            <p className="text-foreground/90 text-base sm:text-lg leading-relaxed">
              "Reborn" is not just an album.
            </p>
            <p className="text-foreground/90 text-base sm:text-lg leading-relaxed">
              It is the moment I found myself again as an artist, and as a human being.
            </p>
            <p className="text-primary text-base sm:text-lg font-serif tracking-wider">
              This is GRUIA. Reborn.
            </p>
          </div>
        </div>

        <Button 
          variant="goldOutline" 
          size="lg"
          className="w-full sm:max-w-xs mx-auto sm:mx-0"
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
