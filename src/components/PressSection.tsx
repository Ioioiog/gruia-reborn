import { Mail, FileText, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PressSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-wide">
            PRESS & BOOKINGS
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          {/* Contact Card */}
          <div className="border border-gold/40 bg-card p-8 space-y-6 text-center hover:border-gold/60 transition-colors">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Contact</h3>
              <a 
                href="mailto:booking@mihaigruia.com"
                className="text-primary hover:text-primary/80 transition-colors tracking-wide"
              >
                booking@mihaigruia.com
              </a>
            </div>
          </div>

          {/* Press Kit Card */}
          <div className="border border-gold/40 bg-card p-8 space-y-6 text-center hover:border-gold/60 transition-colors">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Press Kit</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Artist bio, photos and assets available on request.
              </p>
            </div>
          </div>

          {/* Follow Card */}
          <div className="border border-gold/40 bg-card p-8 space-y-6 text-center hover:border-gold/60 transition-colors">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Music2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Follow</h3>
              <div className="flex flex-col gap-2">
                <Button variant="link" asChild>
                  <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
                    Spotify
                  </a>
                </Button>
                <Button variant="link" asChild>
                  <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer">
                    Apple Music
                  </a>
                </Button>
                <Button variant="link" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </Button>
                <Button variant="link" asChild>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    YouTube
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
