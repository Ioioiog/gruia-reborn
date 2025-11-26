import portrait2 from "@/assets/reborn-portrait-2.jpg";
const TimelineSection = () => {
  const timelineEvents = [{
    year: "2001",
    title: "Akcent begins.",
    text: "First international chapter."
  }, {
    year: "2004–2010",
    title: "World tours.",
    text: "A global audience across Europe, Asia and Latin America."
  }, {
    year: "2014",
    title: "Producer chapter.",
    text: "Writing, producing and shaping sound behind the scenes."
  }, {
    year: "2024",
    title: '"Reborn" is written.',
    text: "A new sound. A new direction."
  }, {
    year: "2025",
    title: "This is GRUIA.",
    text: "Reborn as an independent artist."
  }];
  return <section className="py-24 px-6 bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary tracking-[0.15em] uppercase">
            THE JOURNEY
          </h2>
        </div>

        <div className="grid md:grid-cols-[1.3fr,1fr] gap-12 md:gap-16 items-start">
          {/* Left - Timeline */}
          <div className="space-y-8 animate-fade-in order-2 md:order-1">
            <div className="space-y-10 relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30 hidden md:block" />
              
              {timelineEvents.map((item, index) => <div key={index} className="space-y-2 relative pl-0 md:pl-8">
                  {/* Gold dot */}
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary hidden md:block -translate-x-[4.5px]" />
                  
                  <div className="text-2xl font-serif text-primary font-bold tracking-wider">
                    {item.year}
                  </div>
                  <div className="space-y-1">
                    <div className="text-base text-foreground font-semibold">
                      {item.title}
                    </div>
                    {item.text && <div className="text-sm text-foreground/70">
                        {item.text}
                      </div>}
                  </div>
                </div>)}
            </div>
          </div>

          {/* Right - Images */}
          <div className="animate-fade-in space-y-6 order-1 md:order-2">
            <div className="relative">
              <img alt="Artist Portrait" className="w-full h-auto" src="/lovable-uploads/5cd5beef-d249-4ea8-83e6-808908eb214b.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TimelineSection;