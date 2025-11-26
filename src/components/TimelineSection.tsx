import rebornPortraitBw from "@/assets/reborn-portrait-bw.png";

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2001",
      title: "Akcent begins.",
      text: "First international chapter."
    },
    {
      year: "2004–2010",
      title: "World tours.",
      text: "A global audience across Europe, Asia and Latin America."
    },
    {
      year: "2014",
      title: "Producer chapter.",
      text: "Writing, producing and shaping sound behind the scenes."
    },
    {
      year: "2024",
      title: '"Reborn" is written.',
      text: "A new sound. A new direction."
    },
    {
      year: "2025",
      title: "This is GRUIA.",
      text: "Reborn as an independent artist."
    }
  ];

  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto space-y-16">
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary tracking-[0.15em] uppercase">
          BEHIND THE REBIRTH
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-56 h-80 flex-shrink-0">
            <img
              src={rebornPortraitBw}
              alt="Mihai Gruia Portrait"
              className="w-full h-full object-cover grayscale"
            />
            <p className="text-xs text-foreground/40 mt-2 text-center">Mihai Gruia Portrait</p>
          </div>

          <div className="space-y-10 flex-1">
            {timelineEvents.map((event, index) => (
              <div key={index} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-3xl font-serif text-primary tracking-wide">{event.year}</p>
                <p className="text-base text-foreground/90 font-light">{event.title}</p>
                <p className="text-sm text-foreground/60 leading-relaxed">{event.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimelineSection;