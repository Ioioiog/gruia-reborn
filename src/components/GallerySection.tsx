const GallerySection = () => {
  const scenes = [
    { text: "Every artist has a beginning…", delay: "0s" },
    { text: "A journey shaped by highs, lows, and everything in between.", delay: "2s" },
    { text: "Twenty five years of music.\nTwenty five years of evolution.", delay: "4s" },
    { text: "But true creation starts\nwhen you stop being who you were…", delay: "6s" },
    { text: "…and become who you are meant to be.", delay: "8s" },
    { text: "No filters. No expectations.", delay: "10s" },
    { text: "Just truth.\nJust sound.\nJust soul.", delay: "12s" },
    { text: "This is MIHAI GRUIA.", delay: "14s", penultimate: true },
    { text: "REBORN.", delay: "15.5s", final: true },
  ];

  return (
    <section className="relative py-32 md:py-48 px-6 bg-background overflow-hidden border-t border-gold/20">
      {/* Vertical divider for grid */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gold/20 hidden md:block -translate-x-1/2" />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="mb-24 md:mb-32">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary tracking-[0.2em] uppercase text-center">
            Behind the Rebirth
          </h2>
          <div className="w-12 h-[1px] bg-primary/40 mx-auto mt-6" />
        </div>

        {/* Cinematic Script */}
        <div className="space-y-20 md:space-y-28">
          {scenes.map((scene, index) => (
            <div
              key={index}
              className="min-h-[140px] md:min-h-[180px] flex items-center justify-center opacity-0 animate-fade-in"
              style={{ 
                animationDelay: scene.delay,
                animationDuration: '1.5s',
                animationFillMode: 'forwards'
              }}
            >
              <p
                className={`whitespace-pre-line text-center transition-all duration-700 ${
                  scene.final
                    ? "font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary tracking-[0.15em] uppercase"
                    : scene.penultimate
                    ? "font-serif text-2xl md:text-4xl font-normal text-foreground tracking-[0.1em]"
                    : "text-lg md:text-xl lg:text-2xl text-muted-foreground font-light tracking-wide leading-relaxed max-w-3xl"
                }`}
              >
                {scene.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom fade */}
        <div className="mt-32 md:mt-40 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>
  );
};

export default GallerySection;
