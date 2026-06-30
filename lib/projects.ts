import type { StaticImageData } from "next/image";

import northwind from "@/public/work/northwind.jpg";
import verdant from "@/public/work/verdant.jpg";
import cassette from "@/public/work/cassette.jpg";
import meridian from "@/public/work/meridian.jpg";
import ploom from "@/public/work/ploom.jpg";
import atlas from "@/public/work/atlas-co.jpg";

export type Project = {
  title: string;
  category: string;
  year: string;
  image: StaticImageData;
};

export const projects: Project[] = [
  { title: "Northwind", category: "Brand + Web", year: "2025", image: northwind },
  { title: "Verdant", category: "Product UI", year: "2025", image: verdant },
  { title: "Cassette", category: "Identity", year: "2024", image: cassette },
  { title: "Meridian", category: "Design System", year: "2024", image: meridian },
  { title: "Ploom", category: "Marketing Site", year: "2024", image: ploom },
  { title: "Atlas & Co.", category: "Brand + Web", year: "2023", image: atlas },
];
