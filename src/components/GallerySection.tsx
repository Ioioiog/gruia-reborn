import live1 from "@/assets/reborn-live-1.jpg";
import bereal from "@/assets/reborn-bereal.jpg";
import studio from "@/assets/reborn-studio.jpg";
import liveBw from "@/assets/live-performance-bw.jpg";
import portraitBw from "@/assets/reborn-portrait-bw.png";
import live2 from "@/assets/reborn-live-2.jpg";

const GallerySection = () => {
  return (
    <section className="py-24 px-6 bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary tracking-[0.15em] uppercase">
            BEHIND THE REBIRTH
          </h2>
        </div>

        {/* Image Grid - 3x2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
          <div className="group relative overflow-hidden aspect-square">
            <img
              src={liveBw}
              alt="Live performance on stage"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="group relative overflow-hidden aspect-square">
            <img
              src={portraitBw}
              alt="Reborn portrait"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="group relative overflow-hidden aspect-square">
            <img
              src={bereal}
              alt="Be Real cover"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="group relative overflow-hidden aspect-square">
            <img
              src={studio}
              alt="Studio session"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="group relative overflow-hidden aspect-square">
            <img
              src={live1}
              alt="Live performance"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="group relative overflow-hidden aspect-square">
            <img
              src={live2}
              alt="Concert moment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        <p className="text-center text-sm sm:text-base text-muted-foreground italic tracking-wide">
          Inside the studio. On the stage. Behind every song, there is a moment.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
