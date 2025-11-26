const GallerySection = () => {
  const scenes = [
    { text: "Every artist has a beginning…", delay: "0s" },
    { text: "A journey shaped by highs, lows, and everything in between.", delay: "1s" },
    { text: "Twenty five years of music.\nTwenty five years of evolution.", delay: "3s" },
    { text: "But true creation starts\nwhen you stop being who you were…", delay: "5s" },
    { text: "…and become who you are meant to be.", delay: "6s" },
    { text: "No filters. No expectations.", delay: "8s" },
    { text: "Just truth.\nJust sound.\nJust soul.", delay: "10S" },
    { text: "This is MIHAI GRUIA.\nREBORN.", delay: "11s", final: true },
  ];

  return (
    <section className="py-24 px-6 bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary tracking-[0.15em] uppercase">
            BEHIND THE REBIRTH
          </h2>
        </div>

        {/* Cinematic Script */}
        <div className="max-w-4xl mx-auto space-y-12 py-12">
          {scenes.map((scene, index) => (
            <div
              key={index}
              className="text-center min-h-[120px] flex items-center justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: scene.delay }}
            >
              <p
                className={`whitespace-pre-line leading-relaxed ${
                  scene.final
                    ? "font-serif text-3xl md:text-5xl font-bold text-primary tracking-[0.15em] uppercase"
                    : "text-xl md:text-2xl text-foreground/90 font-light tracking-wide"
                }`}
              >
                {scene.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
