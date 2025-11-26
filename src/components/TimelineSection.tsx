import portrait2 from "@/assets/reborn-portrait-2.jpg";
import rebornHero from "@/assets/reborn-hero.jpg";
import rebornLive1 from "@/assets/reborn-live-1.jpg";
import rebornPortraitBw from "@/assets/reborn-portrait-bw.png";

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
  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary tracking-[0.15em] uppercase">
          BEHIND THE REBIRTH
        </h2>

        <div className="flex gap-12">
          <div className="w-48 h-96 flex-shrink-0">
            <img
              src={rebornPortraitBw}
              alt="Mihai Gruia Portrait"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="space-y-8 flex-1">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-8 border-l border-gold/30">
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                <div className="space-y-2">
                  <p className="text-2xl font-serif text-primary tracking-wide">{event.year}</p>
                  <p className="text-sm text-foreground/80">{event.title}</p>
                  <p className="text-xs text-foreground/60 leading-relaxed">{event.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimelineSection;