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
  return <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-black flex items-center min-h-full">
      <div className="max-w-3xl mx-auto w-full space-y-8 sm:space-y-12 md:space-y-16">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-primary tracking-[0.1em] sm:tracking-[0.15em] uppercase">
          BEHIND THE REBorn
        </h2>

        <div className="relative max-w-2xl mx-auto pl-8 sm:pl-10 md:pl-12">
          {/* Timeline vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-primary/20" />
          
          {/* Timeline events */}
          <div className="space-y-6 sm:space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative space-y-1 sm:space-y-2 animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                {/* Timeline dot */}
                <div className="absolute -left-8 sm:-left-10 md:-left-12 top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-primary bg-background" />
                
                <p className="text-2xl sm:text-3xl font-serif text-primary tracking-wide">{event.year}</p>
                <p className="text-sm sm:text-base text-foreground/90 font-light">{event.title}</p>
                <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">{event.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>;
};
export default TimelineSection;