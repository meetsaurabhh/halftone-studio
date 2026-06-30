# Halftone — Design & Build Studio

A single-page marketing site for a fictional design agency, built for the Next.js
developer internship task. It has four sections — hero, services, portfolio, and
contact — plus a dark-mode toggle, scroll animations, and a working contact form
with validation.

**Live demo:** https://halftone-studio-pink.vercel.app/
**Repo:** https://github.com/meetsaurabhh/halftone-studio

---

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 3** — theming done with CSS variables so light/dark is a single
  source of truth
- **lucide-react** for icons
- **geist** + **@fontsource/space-grotesk** — self-hosted fonts (no runtime
  request to Google), so the build is fully offline and there's no font flash

---

## Getting started

```bash
# 1. install
npm install

# 2. run the dev server
npm run dev
# open http://localhost:3000

# 3. production build
npm run build
npm start
```

Node 18.18+ is recommended (anything that runs Next 14 is fine).

---

## Project structure

```
app/
  layout.tsx        # fonts, SEO metadata, theme provider, no-flash script
  page.tsx          # composes the four sections
  globals.css       # design tokens, theme variables, the halftone motif
  icon.svg          # favicon
components/
  Header.tsx        # sticky nav + mobile menu
  Hero.tsx          # headline, CTAs, the signature dot field
  Services.tsx      # four service cards
  Portfolio.tsx     # project grid with hover effects + next/image
  Contact.tsx       # form with validation + success state
  Footer.tsx
  ThemeToggle.tsx
  ui/primitives.tsx # Container + Reveal (scroll animation wrapper)
lib/
  services.ts       # service content
  projects.ts       # portfolio content
  theme-provider.tsx
  use-in-view.ts     # IntersectionObserver hook for scroll reveals
public/work/         # locally generated thumbnails
scripts/gen_thumbs.py # one-off script that produced those thumbnails (dev only)
```

Each section is its own component and the content (services, projects) lives in
`lib/` rather than being hard-coded in JSX, so the markup stays about layout and
the data is easy to edit in one place.

---

## Decisions & assumptions

- **No backend.** The brief didn't ask for one, so the contact form validates on
  the client and shows a success state instead of posting anywhere. Swapping in a
  route handler or a service like Formspree later is a small change — the submit
  handler is the only place that would touch.
- **Theming via CSS variables.** Colors are declared once on `:root` and overridden
  under `.dark`. Tailwind reads those variables, so I never write a color literal
  in a component and dark mode needs zero conditional classes.
- **Self-hosted fonts on purpose.** `next/font/google` works, but self-hosting
  removes a network dependency at build time and avoids a flash of the wrong font.
- **The portfolio images are generated, not borrowed.** `scripts/gen_thumbs.py`
  draws the abstract halftone thumbnails so nothing is lifted from a real project
  or a template. You don't need to run it — the images are already in `public/work/`.
- **Motion respects `prefers-reduced-motion`.** Scroll reveals and the hero
  animation are skipped for anyone who's asked their OS to reduce motion.
- **Accessibility basics:** semantic landmarks, labeled form fields with inline
  errors, visible keyboard focus, and `aria-label`s on icon-only buttons.

---

## What's included from the bonus list

- [x] Tailwind CSS
- [x] Animations (hero entrance, scroll reveals, hover micro-interactions)
- [x] SEO metadata (App Router `metadata`, Open Graph, Twitter card)
- [x] Dark mode toggle (persisted to `localStorage`, defaults to system preference)
- [x] `next/image` with static imports, so each thumbnail gets an automatic blur
      placeholder and responsive `sizes`

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it on [vercel.com](https://vercel.com/new) — it auto-detects Next.js, no
   config needed.
3. Update the live URL in `siteUrl` inside
   `app/layout.tsx` so the Open Graph tags point at the real domain.
