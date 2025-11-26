import studioKeys from "@/assets/gallery-studio-keys.jpg";
import duoPortrait from "@/assets/gallery-duo-portrait.jpg";
import liveCrowd from "@/assets/gallery-live-crowd.jpg";
import acousticSession from "@/assets/gallery-acoustic-session.jpg";
import backstage from "@/assets/gallery-backstage.jpg";
import dj from "@/assets/gallery-dj.jpg";
import stagePerformance from "@/assets/gallery-stage-performance.jpg";
import studioPortrait from "@/assets/gallery-studio-portrait.jpg";
import akcentEarly from "@/assets/gallery-akcent-early.jpg";

const GallerySection = () => {
  const galleryImages = [
    { src: studioKeys, alt: "In the studio creating music", span: "md:col-span-2 md:row-span-2" },
    { src: stagePerformance, alt: "On stage", span: "md:col-span-1 md:row-span-2" },
    { src: liveCrowd, alt: "Live performance with crowd", span: "md:col-span-3 md:row-span-1" },
    { src: duoPortrait, alt: "Artist portrait", span: "md:col-span-2 md:row-span-1" },
    { src: backstage, alt: "Backstage moment", span: "md:col-span-1 md:row-span-1" },
    { src: acousticSession, alt: "Acoustic session", span: "md:col-span-2 md:row-span-1" },
    { src: dj, alt: "DJ performance", span: "md:col-span-1 md:row-span-1" },
    { src: studioPortrait, alt: "Studio portrait", span: "md:col-span-2 md:row-span-1" },
    { src: akcentEarly, alt: "Early days", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[180px] gap-2 sm:gap-3">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden animate-fade-in ${image.span}`}
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

        <div className="space-y-2 sm:space-y-4 text-center">
          <p className="text-base sm:text-lg text-foreground/80 font-light leading-relaxed">
            Inside the studio. On the stage.
          </p>
          <p className="text-sm sm:text-base text-primary/90 italic font-serif">
            Behind every song, there is a moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
