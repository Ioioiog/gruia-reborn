const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-black border-t border-gold/20">
      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
        <p className="text-foreground/80 text-base sm:text-lg leading-relaxed italic tracking-wide">
          Thank you for being part of this new beginning.{" "}
          <span className="font-medium">This is GRUIA. Reborn.</span>
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm tracking-widest">
          © 2025 MIHAI GRUIA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
