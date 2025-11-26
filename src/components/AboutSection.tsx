import portraitImage from "@/assets/reborn-portrait.jpg";
import { Music, Mic2, User, Sparkles } from "lucide-react";
const AboutSection = () => {
  return <section className="py-24 px-6 bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 md:gap-16 items-center">
          {/* Left - Portrait */}
          <div className="animate-fade-in order-2 md:order-1">
            <div className="relative">
              <img alt="Mihai Gruia Portrait" className="w-full h-auto" src="/lovable-uploads/3af33372-0907-47f3-9301-3cd91563024b.jpg" />
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-8 animate-fade-in order-1 md:order-2">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-2 tracking-wide">
                THIS IS GRUIA
              </h2>
              <div className="w-24 h-px bg-primary mt-4" />
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                I've lived my whole life inside the music industry — with its lights, its limits, and everything in between.
              </p>
              <p>
                Today, for the first time, I have the freedom to create music exactly the way I feel it.
              </p>
              <p>
                "Reborn" is not just an album. It is the moment I found myself again — as an artist, and as a human being.
              </p>
            </div>

            {/* Icon List */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-3 text-foreground">
                <Music className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-primary">30+ YEARS</div>
                  <div className="text-sm text-foreground/80">OF MUSIC</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-foreground">
                <Mic2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-primary">MUSIC</div>
                  <div className="text-sm text-foreground/80">PRODUCER</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-foreground">
                <User className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-primary">FORMER MEMBER</div>
                  <div className="text-sm text-foreground/80">OF AKCENT</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-foreground">
                <Sparkles className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-primary">INDEPENDENT</div>
                  <div className="text-sm text-foreground/80">ARTIST</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;