import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import studioKeys from "@/assets/gallery-studio-keys.jpg";
import duoPortrait from "@/assets/gallery-two-duo.jpg";
import liveCrowd from "@/assets/gallery-live-crowd.jpg";
import acousticSession from "@/assets/gallery-acoustic-session.jpg";
import backstage from "@/assets/gallery-backstage.jpg";
import dj from "@/assets/gallery-dj.jpg";
import stagePerformance from "@/assets/gallery-stage-performance.jpg";
import studioPortrait from "@/assets/gallery-studio-portrait.jpg";
import akcentEarly from "@/assets/gallery-akcent-early.jpg";

interface PressPhotosModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const pressPhotos = [
  { src: studioKeys, title: "Mihai Gruia - In The Studio", category: "Studio" },
  { src: duoPortrait, title: "Mihai Gruia - TWO", category: "Portrait" },
  { src: liveCrowd, title: "Mihai Gruia - Live Performance with Crowd", category: "Live" },
  { src: acousticSession, title: "Mihai Gruia - Acoustic Session", category: "Studio" },
  { src: backstage, title: "Mihai Gruia - Backstage Moment", category: "Backstage" },
  { src: dj, title: "Mihai Gruia - DJ Performance", category: "Live" },
  { src: stagePerformance, title: "Mihai Gruia - On Stage", category: "Live" },
  { src: studioPortrait, title: "Mihai Gruia - Studio Portrait", category: "Portrait" },
  { src: akcentEarly, title: "Akcent - Early Days", category: "Archive" },
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
