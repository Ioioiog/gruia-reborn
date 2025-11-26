import { Mail, FileText, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PressSection = () => {
  return (
    <section className="py-24 px-6 bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary tracking-[0.15em] uppercase">
            PRESS & BOOKINGS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          {/* Contact Card */}
          <div className="border border-gold/20 bg-card p-8 space-y-6 text-center hover:border-gold/40 transition-colors">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 uppercase tracking-wider">Contact</h3>
              <a 
                href="mailto:booking@mihaigruia.com"
                className="text-foreground/80 hover:text-primary transition-colors text-sm"
              >
                booking@mihaigruia.com
              </a>
            </div>
          </div>

          {/* Press Kit Card */}
          <div className="border border-gold/20 bg-card p-8 space-y-6 text-center hover:border-gold/40 transition-colors">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 uppercase tracking-wider">Press kit</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Artist bio, photos and assets available on request.
              </p>
            </div>
          </div>

          {/* Follow Card */}
          <div className="border border-gold/20 bg-card p-8 space-y-6 text-center hover:border-gold/40 transition-colors">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Music2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 uppercase tracking-wider">Follow</h3>
              <div className="flex flex-col gap-2">
                <Button variant="link" className="text-sm" asChild>
                  <a href="https://open.spotify.com/artist/6phLlgPzHgj6RxT3Jz4UEu?si=nrLnycUcRL6KyX5UwpgEVw" target="_blank" rel="noopener noreferrer">
                    Spotify
                  </a>
                </Button>
                <Button variant="link" className="text-sm" asChild>
                  <a href="https://music.apple.com/us/artist/mihai-gruia/1847803390" target="_blank" rel="noopener noreferrer">
                    Apple Music
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;
