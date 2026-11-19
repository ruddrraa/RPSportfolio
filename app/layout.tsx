import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.role}. ${profile.tagline}`,
  keywords: [
    "Rudra Pratap Singh",
    "Full-Stack Developer",
    "AI Product Engineer",
    "Computer Vision",
    "RT-DETR",
    "React 19",
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS v4",
    "Creative Developer",
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
      <head>
        {/* Service Worker Cleanup Script to unregister stale service workers and clear cache storage on localhost */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (var i = 0; i < registrations.length; i++) {
                    registrations[i].unregister();
                  }
                });
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (var j = 0; j < names.length; j++) {
                      caches.delete(names[j]);
                    }
                  });
                }
              }
            `,
          }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased min-h-screen selection:bg-white/20 selection:text-white film-grain overflow-x-hidden">
        <SmoothScroll>
          {/* Outer Rounded Architectural Frame (Design 2 Signature) */}
          <div className="relative mx-auto my-2 sm:my-4 md:my-6 max-w-[1440px] min-h-[calc(100vh-16px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] rounded-[20px] sm:rounded-[28px] md:rounded-[36px] border border-[#222222] bg-[#101010] p-4 sm:p-7 md:p-10 lg:p-12 overflow-hidden shadow-2xl">
            {/* Background Geometric Line Arcs (Design 2 Signature) */}
            <div className="absolute top-0 right-0 w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full border border-white/[0.03] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute top-1/3 left-0 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full border border-white/[0.02] pointer-events-none -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-0 w-[450px] md:w-[650px] h-[450px] md:h-[650px] rounded-full border border-white/[0.025] pointer-events-none translate-x-1/2" />

            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
