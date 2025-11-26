import { Button } from "@/components/ui/button";
import berealCover from "@/assets/bereal-cover.jpg";
import { Play } from "lucide-react";

const FeaturedSingleSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Single Cover */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={berealCover}
                alt="Be Real Single Cover"
                className="w-full h-auto border border-gold/40 shadow-2xl"
              />
              <div className="absolute inset-0 border border-gold/20 translate-x-3 translate-y-3 -z-10" />
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-block px-4 py-1 border border-primary text-primary text-sm tracking-widest mb-4">
                OUT NOW
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground tracking-wide">
                Be Real
              </h2>
              <div className="w-24 h-px bg-primary mt-4" />
            </div>

            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              A song about dropping the masks and coming back to who you really are.
            </p>

            <Button 
              variant="gold" 
              size="lg"
              asChild
            >
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-5 w-5" />
                WATCH ON YOUTUBE
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSingleSection;
