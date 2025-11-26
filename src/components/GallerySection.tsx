import live1 from "@/assets/reborn-live-1.jpg";
import bereal from "@/assets/reborn-bereal.jpg";
import studio from "@/assets/reborn-studio.jpg";

const GallerySection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary to-black">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-wide">
            BEHIND THE REBIRTH
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          <div className="group relative overflow-hidden border border-gold/40">
            <img
              src={live1}
              alt="Live Performance"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="group relative overflow-hidden border border-gold/40">
            <img
              src={bereal}
              alt="Behind The Scenes"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="group relative overflow-hidden border border-gold/40">
            <img
              src={studio}
              alt="In The Studio"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        <p className="text-center text-lg text-muted-foreground italic tracking-wide">
          Inside the studio. On the stage. Behind every song, there is a moment.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
