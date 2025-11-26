import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ArtistBioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ArtistBioModal = ({ open, onOpenChange }: ArtistBioModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-black border-primary/40">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl md:text-4xl font-bold text-primary tracking-[0.15em] uppercase text-center mb-6">
            ARTIST BIO
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p className="text-lg">
            <span className="text-primary font-semibold">Mihai Gruia</span> is a Romanian artist, producer, and songwriter who has spent over two decades shaping the sound of modern European pop music.
          </p>
          
          <p>
            From 2001 to 2021, Gruia was a core member of <span className="text-primary">Akcent</span>, one of Europe's most successful dance-pop acts. During this time, the group achieved international recognition with world tours spanning Europe, Asia, and Latin America, reaching millions of fans globally.
          </p>
          
          <p>
            As Akcent's producer and co-writer, Gruia was instrumental in crafting the group's signature sound—blending infectious melodies with contemporary production. His work behind the scenes helped define an era of European dance music.
          </p>
          
          <p>
            In 2024, Gruia embarked on a new chapter: <span className="text-primary">REBORN</span>. This marks his transition from group member to independent solo artist, reclaiming creative freedom and artistic identity.
          </p>
          
          <p>
            <span className="italic">"Reborn"</span> is not just an album—it's a declaration of independence, a return to authenticity, and the beginning of a new artistic journey. With this project, Gruia steps into the spotlight as himself, bringing two decades of experience, emotion, and craft into a sound that is entirely his own.
          </p>
          
          <div className="pt-4 border-t border-primary/20">
            <h3 className="text-primary font-semibold text-lg mb-3">Career Highlights:</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>20+ years as member and producer of Akcent</li>
              <li>International tours across Europe, Asia, and Latin America</li>
              <li>Millions of streams and global fanbase</li>
              <li>Extensive experience in production, songwriting, and performance</li>
              <li>2024: Launch of solo career as GRUIA with debut album "Reborn"</li>
            </ul>
          </div>
          
          <p className="text-center text-primary/70 italic pt-4">
            This is GRUIA. Reborn as an independent artist.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtistBioModal;
