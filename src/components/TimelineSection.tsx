import live2 from "@/assets/reborn-live-2.jpg";
import portrait2 from "@/assets/reborn-portrait-2.jpg";

const TimelineSection = () => {
  const timelineEvents = [
    { year: "2001", title: "Akcent begins.", text: "The first chapter of a long journey." },
    { year: "2004–2010", title: "World tours.", text: "A global audience across Europe, Asia and Latin America." },
    { year: "2014", title: "Producer chapter.", text: "Writing, producing and shaping sound behind the scenes." },
    { year: "2024", title: '"Reborn" is written.', text: "A new sound. A new direction." },
    { year: "2025", title: "This is GRUIA.", text: "Reborn as an independent artist." },
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-wide">
            THE JOURNEY
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Timeline */}
          <div className="space-y-8 animate-fade-in">
            <div className="relative pl-8 border-l-2 border-gold/40 space-y-10">
              {timelineEvents.map((item, index) => (
                <div key={index} className="relative">
                  {/* Gold Dot */}
                  <div className="absolute -left-[calc(2rem+3px)] top-0 w-3 h-3 rounded-full bg-primary border-2 border-black" />
                  
                  {/* Content */}
                  <div className="space-y-1">
                    <div className="text-xs text-foreground/60">
                      {item.year}
                    </div>
                    <div className="text-sm sm:text-base text-foreground">
                      <span className="font-semibold">{item.title}</span>{" "}
                      {item.text && <span className="text-foreground/80">{item.text}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Images */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative border border-gold/40">
              <img
                src={live2}
                alt="Live Performance"
                className="w-full h-auto"
              />
            </div>
            <div className="relative border border-gold/40">
              <img
                src={portrait2}
                alt="Artist Portrait"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
