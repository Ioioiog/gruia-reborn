import studioImage from "@/assets/reborn-studio.jpg";
import liveImage1 from "@/assets/reborn-live-1.jpg";
import liveImage2 from "@/assets/reborn-live-2.jpg";
import portraitImage from "@/assets/reborn-portrait-2.jpg";
import bwPortrait from "@/assets/reborn-portrait-bw.png";
import liveBw from "@/assets/live-performance-bw.jpg";

const GallerySection = () => {
  const galleryImages = [
    { src: studioImage, alt: "In the studio" },
    { src: liveImage1, alt: "Live performance" },
    { src: portraitImage, alt: "Portrait" },
    { src: liveBw, alt: "Live performance black and white" },
    { src: liveImage2, alt: "On stage" },
    { src: bwPortrait, alt: "Black and white portrait" },
  ];

  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="space-y-4 text-center">
          <p className="text-lg text-foreground/80 font-light leading-relaxed">
            Inside the studio. On the stage.
          </p>
          <p className="text-base text-primary/90 italic font-serif">
            Behind every song, there is a moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
