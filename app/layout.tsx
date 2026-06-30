import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import { ThemeProvider } from "@/lib/theme-provider";
import "./globals.css";

const siteUrl = "https://halftone-studio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Halftone — Design & Build Studio",
    template: "%s · Halftone",
  },
  description:
    "Halftone is a design and build studio. We turn half-formed ideas into interfaces people actually finish using — strategy, design, and front-end under one roof.",
  keywords: [
    "design agency",
    "web development",
    "UI/UX design",
    "branding",
    "Next.js studio",
  ],
  authors: [{ name: "Halftone Studio" }],
  openGraph: {
    title: "Halftone — Design & Build Studio",
    description:
      "Strategy, design, and front-end under one roof. Booking projects for Q3.",
    url: siteUrl,
    siteName: "Halftone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halftone — Design & Build Studio",
    description: "A design and build studio for the web's sharper corners.",
  },
};

// Resolve the theme before paint so there's no flash of the wrong colour scheme.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-fg antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
