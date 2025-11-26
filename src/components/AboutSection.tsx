import gruiaPortrait from "@/assets/gruia-portrait-about.jpg";
import { Music, Mic2, User, Sparkles } from "lucide-react";
const AboutSection = () => {
  return <section className="relative w-full overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-[1fr,1fr] gap-0 items-center">
          {/* Left - Portrait Image (mirrored from hero) */}
          <div className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] animate-fade-in overflow-hidden">
            <img src={gruiaPortrait} alt="Mihai Gruia Portrait" className="absolute inset-0 w-full h-full object-cover object-[30%_30%]" />
            <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10" />
          </div>

          {/* Right - Text Content */}
          <div className="animate-fade-in space-y-4 sm:space-y-6 py-8 sm:py-12 md:py-0 md:pl-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em] sm:tracking-[0.15em] text-primary uppercase leading-[1.1]">
              THIS IS GRUIA
            </h2>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-foreground/90 max-w-md leading-relaxed">
              <p>
                I've lived my whole life inside the music industry — with its rights, its limits, and everything in between. Reborn is the album where I finally tell my story without filters.
              </p>
              <p>
                I found myself again — as an artist, and as a human being.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] sm:text-xs text-primary tracking-widest uppercase">25+ YEARS</p>
                  <p className="text-[10px] sm:text-xs text-foreground/60 tracking-wide">Of Music</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <Music className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] sm:text-xs text-primary tracking-widest uppercase">Music</p>
                  <p className="text-[10px] sm:text-xs text-foreground/60 tracking-wide">Producer</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] sm:text-xs text-primary tracking-widest uppercase">Former Member</p>
                  <p className="text-[10px] sm:text-xs text-foreground/60 tracking-wide">Of Akcent</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <Mic2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] sm:text-xs text-primary tracking-widest uppercase">Independent</p>
                  <p className="text-[10px] sm:text-xs text-foreground/60 tracking-wide">Artist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;