import type { Metadata, Viewport } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SmoothScroll } from "../components/providers/SmoothScroll";
import { profile } from "../data/profile";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F2F0EA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rudra Pratap Singh — Creative Developer & AI Product Engineer",
  description:
    "Portfolio of Rudra Pratap Singh — Creative Developer & AI Product Engineer specializing in full-stack architecture, applied deep learning computer vision pipelines, and tactile human interfaces.",
  keywords: [
    "Rudra Pratap Singh",
    "Creative Developer",
    "AI Product Engineer",
    "Full-Stack Developer",
    "Computer Vision",
    "RT-DETR",
    "React 19",
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS v4",
    "Kolkata",
  ],
  authors: [{ name: profile.name, url: profile.socials.github }],
  openGraph: {
    title: "Rudra Pratap Singh — Creative Developer & AI Product Engineer",
    description: profile.tagline,
    url: "https://ruddrraa.github.io",
    siteName: "Rudra Pratap Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Pratap Singh — Creative Developer & AI Product Engineer",
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F2F0EA] text-[#171717] antialiased min-h-screen selection:bg-[#171717] selection:text-[#F2F0EA] overflow-x-hidden font-sans">
        <SmoothScroll>
          <div className="relative min-h-screen bg-[#F2F0EA] w-full flex flex-col">
            <Navbar />
            <main className="relative z-10 w-full flex-grow">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
