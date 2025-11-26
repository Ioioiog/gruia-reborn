import { Button } from "@/components/ui/button";
import berealCover from "@/assets/bereal-cover.jpg";
const FeaturedSingleSection = () => {
  return <section className="relative py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 animate-fade-in">
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
      </div>
    </section>;
};
export default FeaturedSingleSection;