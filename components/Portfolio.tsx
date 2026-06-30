import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { Container, Reveal } from "./ui/primitives";

export function Portfolio() {
  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-28">
      <Container>
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Recent projects.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-fg sm:inline-flex"
          >
            Work with us <ArrowUpRight size={15} />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 90}>
              <a href="#contact" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    placeholder="blur"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="m-4 inline-flex items-center gap-1 rounded-full bg-bg/90 px-3 py-1 text-xs font-medium text-fg">
                      View case <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted">{project.year}</span>
                </div>
                <p className="text-sm text-muted">{project.category}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
