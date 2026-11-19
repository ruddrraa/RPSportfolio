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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased min-h-screen selection:bg-white/20 selection:text-white overflow-x-hidden">
        <SmoothScroll>
          <div className="relative min-h-screen bg-[#0A0A0A] w-full">
            <Navbar />
            <main className="relative z-10 w-full">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
