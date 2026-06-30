export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Signature: a halftone dot field that fades out toward the content. */}
      <div aria-hidden className="halftone-field" />
      <div aria-hidden className="hero-glow" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:pt-32">
        <p className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Booking projects for Q3
        </p>

        <h1 className="hero-rise max-w-4xl font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-7xl">
          A design &amp; build studio for the web&apos;s{" "}
          <span className="text-accent">sharper corners.</span>
        </h1>

        <p className="hero-rise hero-rise-2 mt-7 max-w-xl text-lg leading-relaxed text-muted">
          Halftone turns half-formed ideas into interfaces people actually finish
          using. Strategy, design, and front-end — under one roof, shipped with
          care.
        </p>

        <div className="hero-rise hero-rise-3 mt-9 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn-primary">
            Start a project
          </a>
          <a href="#work" className="btn-ghost">
            View work
          </a>
        </div>

        <dl className="hero-rise hero-rise-3 mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
          {[
            ["8 yrs", "in practice"],
            ["40+", "products shipped"],
            ["12", "design awards"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-2xl font-bold text-fg">{value}</dt>
              <dd className="mt-1 text-sm text-muted">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
