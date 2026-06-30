import { services } from "@/lib/services";
import { Container, Reveal } from "./ui/primitives";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-28">
      <Container>
        <Reveal>
          <p className="section-label">What we do</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Four disciplines, one team that actually talks to each other.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="group h-full bg-bg p-7 transition-colors hover:bg-surface sm:p-9">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                  <service.Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-fg">
                  {service.title}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
                  {service.blurb}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {service.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
