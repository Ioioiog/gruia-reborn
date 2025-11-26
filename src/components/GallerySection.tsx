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
    <div className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary tracking-[0.15em] uppercase">
          BEHIND THE REBIRTH
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <p className="text-sm text-foreground/60 text-center leading-relaxed">
          Inside the studio. On the stage.<br />
          Behind every song, there is a moment.
        </p>
      </div>
    </div>
  );
};

export default GallerySection;
