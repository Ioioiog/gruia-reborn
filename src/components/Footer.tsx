const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-black border-t border-gold/20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-foreground/80 text-lg leading-relaxed italic tracking-wide">
          Thank you for being part of this new beginning.{" "}
          <span className="font-medium">This is GRUIA. Reborn.</span>
        </p>
        <p className="text-muted-foreground text-sm tracking-widest">
          © {new Date().getFullYear()} Mihai Gruia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
