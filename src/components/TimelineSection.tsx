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

        <div className="space-y-10 max-w-2xl mx-auto">
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
  );
};
export default TimelineSection;