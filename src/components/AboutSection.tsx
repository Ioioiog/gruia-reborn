import gruiaPortrait from "@/assets/gruia-portrait-about.jpg";
import { Music, Mic2, User, Sparkles } from "lucide-react";
const AboutSection = () => {
  return <section className="relative w-full overflow-hidden bg-black">
      <div className="relative py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-[40%_1fr] md:grid-cols-[1fr,1fr] gap-4 sm:gap-6 md:gap-0 items-center">
            {/* Portrait Image - visible on all screens, left side on mobile */}
            <div className="relative h-[70vh] sm:h-[60vh] md:h-[70vh] animate-fade-in overflow-hidden">
              <img src={gruiaPortrait} alt="Mihai Gruia Portrait" className="absolute inset-0 w-full h-full object-cover object-[30%_30%]" />
              <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10" />
            </div>

            {/* Text Content - right column on all screens */}
            <div className="animate-fade-in space-y-3 sm:space-y-4 md:space-y-6 py-4 sm:py-8 md:py-0 md:pl-12">
              <h2 className="font-serif text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em] sm:tracking-[0.15em] text-primary uppercase leading-[1.1]">
                THIS IS GRUIA
              </h2>

              <div className="space-y-3 sm:space-y-4 md:space-y-6 text-xs sm:text-sm md:text-base lg:text-lg text-foreground/90 leading-relaxed">
                <p>
                  I've lived my whole life inside the music industry — with its rights, its limits, and everything in between. Reborn is the album where I finally tell my story without filters.
                </p>
                <p>
                  I found myself again — as an artist, and as a human being.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4">
                <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-primary tracking-widest uppercase">25+ YEARS</p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-foreground/60 tracking-wide">Of Music</p>
                  </div>
                </div>

                <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                  <Music className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-primary tracking-widest uppercase">MUSIC</p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-foreground/60 tracking-wide">Producer</p>
                  </div>
                </div>

                <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-primary tracking-widest uppercase">FORMER MEMBER</p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-foreground/60 tracking-wide">Of Akcent</p>
                  </div>
                </div>

                <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                  <Mic2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-primary tracking-widest uppercase">INDEPENDENT</p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-foreground/60 tracking-wide">Artist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;