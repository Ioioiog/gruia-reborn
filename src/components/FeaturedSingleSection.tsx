import { Button } from "@/components/ui/button";
import berealCover from "@/assets/be-real-cover.png";

const FeaturedSingleSection = () => {
  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary tracking-[0.15em] uppercase">
          FEATURED SINGLE
        </h2>

        <div className="flex gap-8 items-start">
          <div className="w-48 h-48 flex-shrink-0">
            <img
              src={berealCover}
              alt="Be Real Single Cover"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h3 className="font-serif text-3xl font-bold text-primary tracking-wider uppercase">
                BE REAL
              </h3>
              <div className="text-primary text-sm tracking-widest mt-2 italic">
                OUT NOW
              </div>
            </div>

            <p className="text-foreground/90 text-base leading-relaxed">
              A song about dropping the masks and coming back to who you really are.
            </p>
          </div>
        </div>

        <Button variant="goldOutline" size="lg" className="w-full max-w-xs" asChild>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            WATCH ON YOUTUBE
          </a>
        </Button>
      </div>
    </section>
  );
};
export default FeaturedSingleSection;