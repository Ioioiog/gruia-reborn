import { Button } from "@/components/ui/button";
import berealCover from "@/assets/bereal-cover.jpg";
const FeaturedSingleSection = () => {
  return <section className="py-24 px-6 bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-12 md:gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8 animate-fade-in order-2 md:order-1">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary tracking-[0.15em] uppercase">
                BE REAL
              </h2>
              <div className="inline-block px-4 py-2 text-primary text-sm tracking-widest mt-4 italic">
                OUT NOW
              </div>
            </div>

            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-lg">
              A song about dropping the masks and coming back to who you really are.
            </p>

            <Button variant="goldOutline" size="lg" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                WATCH ON YOUTUBE
              </a>
            </Button>
          </div>

          {/* Right - Single Cover */}
          <div className="animate-fade-in order-1 md:order-2">
            <div className="relative">
              <img alt="Be Real Single Cover" className="w-full h-auto" src="/lovable-uploads/61551ba7-443c-4a1d-b788-3a16d2d7e6d5.png" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturedSingleSection;