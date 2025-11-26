import portraitImage from "@/assets/reborn-portrait.jpg";
import { Music, Mic2, User, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Portrait */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={portraitImage}
                alt="Mihai Gruia Portrait"
                className="w-full h-auto border border-gold/40 shadow-2xl"
              />
              <div className="absolute inset-0 border border-gold/20 -translate-x-3 -translate-y-3 -z-10" />
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-8 animate-fade-in">
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
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 text-foreground">
                <Music className="h-5 w-5 text-primary" />
                <span className="text-sm tracking-wide">20+ years in music</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <User className="h-5 w-5 text-primary" />
                <span className="text-sm tracking-wide">Former member of Akcent</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Mic2 className="h-5 w-5 text-primary" />
                <span className="text-sm tracking-wide">Music producer & songwriter</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm tracking-wide">Independent artist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
