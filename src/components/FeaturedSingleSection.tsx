import { Button } from "@/components/ui/button";
import berealCover from "@/assets/be-real-cover.png";

const FeaturedSingleSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-primary tracking-[0.1em] sm:tracking-[0.15em] uppercase">
          FEATURED SINGLE
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          <div className="w-full sm:w-40 md:w-48 h-auto sm:h-40 md:h-48 flex-shrink-0 mx-auto sm:mx-0 max-w-[240px] sm:max-w-none">
            <img
              src={berealCover}
              alt="Be Real Single Cover"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-4 sm:space-y-6 text-center sm:text-left">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary tracking-wider uppercase">
                BE REAL
              </h3>
              <div className="text-primary text-xs sm:text-sm tracking-widest mt-2 italic">
                OUT NOW
              </div>
            </div>

            <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
              A song about dropping the masks and coming back to who you really are.
            </p>
          </div>
        </div>

        <Button variant="goldOutline" size="lg" className="w-full sm:max-w-xs mx-auto sm:mx-0" asChild>
          <a href="https://youtu.be/hjTKNiIEGx4?si=S6FcX_XZQRsaAEBQ" target="_blank" rel="noopener noreferrer">
            WATCH ON YOUTUBE
          </a>
        </Button>
      </div>
    </section>
  );
};
export default FeaturedSingleSection;