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
          <p className="text-lg font-semibold text-primary">
            Singer • Producer • Songwriter • Former Member of Akcent
          </p>
          
          <p>
            <span className="text-primary font-semibold">Mihai Gruia</span> is a Romanian singer, producer, and songwriter whose career spans more than two decades of shaping modern pop and dance music.
          </p>
          
          <p>
            He first rose to fame in 2001 as a founding member of <span className="text-primary">Akcent</span>, one of Eastern Europe's most influential pop groups. Alongside Adrian, Marius, and Sorin, Gruia helped craft a sound that defined an era and reached millions of listeners around the world.
          </p>
          
          <p>
            With Akcent, he contributed to major hits including "Ți-am Promis," "Prima Iubire," "Buchet de Trandafiri," "Kylie," "Jokero," "King of Disco," "That's My Name," "My Passion," "Feelings On Fire," "Love Stoned," and many more — songs that dominated Romanian charts and earned international recognition.
          </p>
          
          <p>
            After Akcent disbanded in 2013, Mihai and Sorin continued their musical journey by forming <span className="text-primary">TWO</span>, releasing successful singles such as "Vinovat (Guilty)," "Spre Soare," "Fall in Love," "C'est la Vie," "Bora Bora," "Angel," "Linda," "Once in a Lifetime," and others, while collaborating with international artists including Kaya Jones (The Pussycat Dolls) and Shahzoda.
          </p>
          
          <p>
            Mihai is also the co-founder of <span className="text-primary">Mango Records</span>, a music label dedicated to supporting Romanian and international artists in developing a fresh, modern, forward-thinking sound.
          </p>
          
          <p>
            As a composer and co-writer, he has created and contributed to tracks for top Romanian artists such as Alina Eremia, Lora, Puya, Mellina, DJ Project, CRBL, Pitt Leffer, Shahzoda, and many more.
          </p>
          
          <p>
            In 2024, Mihai Gruia launched his solo project <span className="text-primary">GRUIA</span>, beginning a new artistic chapter built on authenticity, emotional depth, and creative freedom.
          </p>
          
          <p>
            His debut album <span className="italic">"Reborn"</span> marks his transition from group member to independent artist, exploring themes of liberation, identity, mental health, and personal rebirth through a mix of melodic deep house, cinematic pop, and organic electronic fusion.
          </p>
          
          <div className="pt-6 border-t border-primary/20 space-y-6">
            <div>
              <h3 className="text-primary font-serif text-2xl mb-4 tracking-wide">DISCOGRAPHY</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-primary font-semibold text-lg mb-2">AKCENT (2001–2013)</h4>
                  <p className="text-sm text-foreground/60 mb-2">Hit Singles & Releases</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li>• Ți-am Promis (I Promised You)</li>
                    <li>• Prima Iubire (First Love)</li>
                    <li>• În Culori (In Color)</li>
                    <li>• Buchet de Trandafiri</li>
                    <li>• Dragoste de Închiriat</li>
                    <li>• Kylie</li>
                    <li>• Jokero</li>
                    <li>• French Kiss</li>
                    <li>• King of Disco</li>
                    <li>• Let's Talk About It</li>
                    <li>• Umbrela Ta (Your Umbrella)</li>
                    <li>• Stay With Me</li>
                    <li>• That's My Name</li>
                    <li>• How Deep Is Your Love</li>
                    <li>• Love Stoned</li>
                    <li>• My Passion</li>
                    <li>• Feelings on Fire</li>
                    <li>• I'm Sorry</li>
                    <li>• Chimie Între Noi</li>
                    <li>• Poveste de Viață</li>
                    <li>• Spune-mi Hey Baby</li>
                    <li>• Suflet Pereche (Soul Mate)</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-primary/10">
                  <h4 className="text-primary font-semibold text-lg mb-2">TWO (2013–2021)</h4>
                  <p className="text-sm text-foreground/60 mb-2">Singles and Collaborations</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li>• Spre Soare (To the Sun)</li>
                    <li>• Fall in Love</li>
                    <li>• Bora Bora</li>
                    <li>• C'est la Vie (feat. Lora)</li>
                    <li>• Vinovat / Guilty (feat. Mellina)</li>
                    <li>• Angel (feat. Kaya Jones)</li>
                    <li>• Linda (feat. Shahzoda)</li>
                    <li>• Once in a Lifetime</li>
                    <li>• Yalla Habibti</li>
                    <li>• Turn It Up</li>
                    <li>• Lady Lady</li>
                    <li>• I'm OK</li>
                    <li>• Doare Atât de Bine</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-primary/10">
                  <h4 className="text-primary font-semibold text-lg mb-2">As Composer & Co-Writer</h4>
                  <p className="text-sm text-foreground/60 mb-2">Selected Works for Top Artists</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Alina Eremia – A Fost o Nebunie, Vorbe pe Dos</li>
                    <li>• Lora – Floare la Ureche</li>
                    <li>• Puya – Mâine e o Nouă Zi</li>
                    <li>• DJ Project – O Secundă</li>
                    <li>• CRBL – Plânge Sufletul Meu</li>
                    <li>• Mircea Eremia – Interzis, Ilegal</li>
                    <li>• Pitt Leffer – No Lies, Mi Pasión, Cherry Lady</li>
                    <li>• TWO & Kaya Jones – Angel</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-primary/10">
                  <h4 className="text-primary font-semibold text-lg mb-2">As Solo Artist & Producer (GRUIA)</h4>
                  <p className="text-sm text-foreground/60 mb-2">Own Releases / Writing</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Be Real</li>
                    <li>• Reborn (album)</li>
                    <li>• Ai Grijă Cui Îi Deschizi</li>
                    <li>• GRUIA – Re:Akcent (No More Chains)</li>
                    <li>• LIGHT MY WAY – DOMG</li>
                    <li>• MY WAY – DOMG</li>
                    <li>• TWO – Tonight</li>
                    <li>• TWO – Bora Bora (writing)</li>
                    <li>• TWO – Fall in Love (writing)</li>
                    <li>• AZA – Doar Tu</li>
                    <li>• Shahzoda – Mon Cheri</li>
                    <li>• Mellina & Dong – You Broke My Heart</li>
                    <li>• DOMG feat. Alina Eremia – Don't Worry About It</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-primary/20">
              <h3 className="text-primary font-serif text-2xl mb-3 tracking-wide">AWARDS</h3>
              <ul className="space-y-1 text-sm">
                <li>• 2014 – Celebrity Award</li>
                <li>• 2013 – VIP Magazine Award (Most Ambitious Project)</li>
                <li>• Andra Award – Music Ambassador</li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-primary font-semibold text-lg pt-6 border-t border-primary/20">
            This is GRUIA.<br />
            Reborn as an independent artist/Producer/DJ
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtistBioModal;
