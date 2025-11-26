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
    <section className="relative py-24 px-6 bg-background overflow-hidden border-t border-gold/20">
      {/* Vertical divider for grid */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gold/20 hidden md:block -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center min-h-[600px]">
          {/* Left - Title */}
          <div className="flex items-center justify-center md:justify-end animate-fade-in">
            <div className="text-center md:text-right md:pr-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-primary tracking-[0.2em] uppercase">
                Behind the<br />Rebirth
              </h2>
              <div className="w-12 h-[1px] bg-primary/40 mx-auto md:ml-auto mt-6" />
            </div>
          </div>

          {/* Right - Cinematic Script */}
          <div className="relative md:pl-12">
            <div className="space-y-20 md:space-y-24">
              {scenes.map((scene, index) => (
                <div
                  key={index}
                  className="min-h-[120px] md:min-h-[140px] flex items-center justify-start opacity-0 animate-fade-in"
                  style={{ 
                    animationDelay: scene.delay,
                    animationDuration: '1.5s',
                    animationFillMode: 'forwards'
                  }}
                >
                  <p
                    className={`whitespace-pre-line transition-all duration-700 ${
                      scene.final
                        ? "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-[0.15em] uppercase"
                        : scene.penultimate
                        ? "font-serif text-xl md:text-2xl lg:text-3xl font-normal text-foreground tracking-[0.1em]"
                        : "text-base md:text-lg text-muted-foreground font-light tracking-wide leading-relaxed max-w-xl"
                    }`}
                  >
                    {scene.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
