export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-base font-bold text-fg">Halftone</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
        <p className="text-sm text-muted">
          © {year} Halftone Studio. Built with Next.js.
        </p>
        <div className="flex gap-5 text-sm text-muted">
          <a href="#work" className="transition-colors hover:text-fg">
            Work
          </a>
          <a href="#services" className="transition-colors hover:text-fg">
            Services
          </a>
          <a href="#contact" className="transition-colors hover:text-fg">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
