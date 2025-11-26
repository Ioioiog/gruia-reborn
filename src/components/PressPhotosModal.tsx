import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import gruiaPortrait from "@/assets/gruia-portrait-about.jpg";
import rebornPortrait from "@/assets/reborn-portrait.jpg";
import rebornPortrait2 from "@/assets/reborn-portrait-2.jpg";
import rebornPortraitBw from "@/assets/reborn-portrait-bw.png";
import livePerformanceBw from "@/assets/live-performance-bw.jpg";
import rebornLive1 from "@/assets/reborn-live-1.jpg";
import rebornLive2 from "@/assets/reborn-live-2.jpg";
import rebornStudio from "@/assets/reborn-studio.jpg";

interface PressPhotosModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const pressPhotos = [
  { src: heroPortrait, title: "Mihai Gruia - Portrait", category: "Portrait" },
  { src: gruiaPortrait, title: "Mihai Gruia - Studio Portrait", category: "Portrait" },
  { src: rebornPortrait, title: "Reborn - Album Portrait", category: "Album" },
  { src: rebornPortrait2, title: "Reborn - Portrait 2", category: "Album" },
  { src: rebornPortraitBw, title: "Reborn - Black & White", category: "Portrait" },
  { src: livePerformanceBw, title: "Live Performance - B&W", category: "Live" },
  { src: rebornLive1, title: "Reborn - Live Performance 1", category: "Live" },
  { src: rebornLive2, title: "Reborn - Live Performance 2", category: "Live" },
  { src: rebornStudio, title: "In The Studio", category: "Studio" },
];

const PressPhotosModal = ({ open, onOpenChange }: PressPhotosModalProps) => {
  const handleDownload = (imageUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto bg-black border-primary/40">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl md:text-4xl font-bold text-primary tracking-[0.15em] uppercase text-center mb-4">
            PRESS PHOTOS
          </DialogTitle>
          <p className="text-foreground/70 text-sm text-center">
            High-resolution images available for press and promotional use
          </p>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {pressPhotos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-muted rounded-sm border border-primary/20 hover:border-primary/60 transition-all"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                  <p className="text-foreground font-semibold text-sm">{photo.title}</p>
                  <p className="text-primary/80 text-xs uppercase tracking-wider">{photo.category}</p>
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => handleDownload(photo.src, photo.title)}
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    DOWNLOAD
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-foreground/60 text-xs pt-4 border-t border-primary/20 mt-4">
          For additional photos or specific requests, contact: me@mihaigruia.com
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PressPhotosModal;
