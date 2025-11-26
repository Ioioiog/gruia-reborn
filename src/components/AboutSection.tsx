import gruiaPortrait from "@/assets/gruia-portrait-about-transparent.png";
import { Music, Mic2, User, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Portrait Image */}
          <div className="relative w-full max-w-md mx-auto aspect-square overflow-hidden rounded-sm border border-primary/20">
            <img 
              src={gruiaPortrait} 
              alt="Mihai Gruia Portrait" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary tracking-[0.15em] uppercase">
              THIS IS GRUIA
            </h2>

            <div className="space-y-6 text-foreground/80 leading-relaxed text-sm">
              <p>
                I've lived my whole life inside the music industry — with its rights, its limits, and everything in between. Reborn is the album where I finally tell my story without filters.
              </p>
              <p>
                I found myself again — as an artist, and as a human being.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-primary tracking-widest uppercase">30+ Years</p>
                  <p className="text-xs text-foreground/60 tracking-wide">Of Music</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-primary tracking-widest uppercase">Music</p>
                  <p className="text-xs text-foreground/60 tracking-wide">Producer</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-primary tracking-widest uppercase">Former Member</p>
                  <p className="text-xs text-foreground/60 tracking-wide">Of Akcent</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mic2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-primary tracking-widest uppercase">Independent</p>
                  <p className="text-xs text-foreground/60 tracking-wide">Artist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;