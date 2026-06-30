import { Compass, Code2, Sparkles, LineChart, type LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  blurb: string;
  detail: string;
  Icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "UI/UX Design",
    blurb: "Interfaces people finish using",
    detail:
      "Research, flows, and high-fidelity screens. We prototype the hard parts early so the build has no surprises.",
    Icon: Compass,
  },
  {
    title: "Web Development",
    blurb: "Fast, accessible front ends",
    detail:
      "Production React and Next.js with a real eye on performance, semantics, and the details that survive launch day.",
    Icon: Code2,
  },
  {
    title: "Branding",
    blurb: "An identity that holds up",
    detail:
      "Marks, type systems, and the rules that keep everything consistent from a business card to a 4K hero.",
    Icon: Sparkles,
  },
  {
    title: "Digital Marketing",
    blurb: "Growth without the noise",
    detail:
      "Landing pages, SEO foundations, and measurement set up so you can tell what actually moved the numbers.",
    Icon: LineChart,
  },
];
