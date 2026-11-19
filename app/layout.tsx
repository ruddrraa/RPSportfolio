import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "Rudra Pratap Singh",
    "Full-Stack Developer",
    "AI Product Engineer",
    "Computer Vision",
    "RT-DETR",
    "React 19",
    "Next.js 15",
    "TypeScript",
    "Portfolio",
    "Kolkata",
  ],
  authors: [{ name: profile.name, url: profile.socials.github }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    url: "https://ruddrraa.github.io",
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased min-h-screen selection:bg-white/20 selection:text-white">
        <SmoothScroll>
          {/* Outer Rounded Architectural Frame (Design 2 Signature) */}
          <div className="relative mx-auto my-2 sm:my-4 md:my-6 max-w-[1440px] min-h-[calc(100vh-16px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] rounded-[20px] sm:rounded-[28px] md:rounded-[36px] border border-[#222222] bg-[#101010] p-4 sm:p-8 md:p-12 overflow-hidden shadow-2xl">
            {/* Background Geometric Line Arcs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-white/[0.03] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-1/3 left-0 w-[800px] h-[800px] rounded-full border border-white/[0.02] pointer-events-none -translate-x-1/2" />
            
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
