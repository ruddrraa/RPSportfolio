import type { Metadata, Viewport } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SmoothScroll } from "../components/providers/SmoothScroll";
import { JsonLd } from "../components/seo/JsonLd";
import { profile } from "../data/profile";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rudrapratapsingh.tech"),
  title: {
    default: "Rudra Pratap Singh | Full-Stack Developer & AI Product Engineer",
    template: "%s | Rudra Pratap Singh",
  },
  description:
    "Official portfolio of Rudra Pratap Singh, a Full-Stack Developer and AI Product Engineer from Kolkata, India. Explore software engineering projects, AI systems, computer vision research and professional experience.",
  keywords: [
    "Rudra Pratap Singh",
    "Rudra Pratap Singh portfolio",
    "Rudra Pratap Singh developer",
    "Rudra Pratap Singh full stack developer",
    "Rudra Pratap Singh software engineer",
    "Rudra Pratap Singh AI engineer",
    "Rudra Pratap Singh Kolkata",
    "Rudra Pratap Singh Sister Nivedita University",
    "Rudra Pratap Singh Q-Sentry",
    "Rudra Pratap Singh projects",
    "Full-Stack Developer",
    "AI Product Engineer",
    "Computer Vision",
    "RT-DETR",
    "React 19",
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS v4",
    "PyTorch",
    "Kolkata",
  ],
  authors: [{ name: "Rudra Pratap Singh", url: "https://rudrapratapsingh.tech" }],
  creator: "Rudra Pratap Singh",
  publisher: "Rudra Pratap Singh",
  alternates: {
    canonical: "https://rudrapratapsingh.tech",
  },
  openGraph: {
    title: "Rudra Pratap Singh | Full-Stack Developer & AI Product Engineer",
    description:
      "Official portfolio of Rudra Pratap Singh, a Full-Stack Developer and AI Product Engineer from Kolkata, India. Explore software engineering projects, AI systems, computer vision research and professional experience.",
    url: "https://rudrapratapsingh.tech",
    siteName: "Rudra Pratap Singh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rudra Pratap Singh — Full-Stack Developer & AI Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Pratap Singh | Full-Stack Developer & AI Product Engineer",
    description:
      "Official portfolio of Rudra Pratap Singh, a Full-Stack Developer and AI Product Engineer from Kolkata, India. Explore software engineering projects, AI systems, computer vision research and professional experience.",
    creator: "@RudraPrSing",
    site: "@RudraPrSing",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/profile/portfolioicon.png", type: "image/png" },
    ],
    shortcut: "/profile/portfolioicon.png",
    apple: "/profile/portfolioicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/profile/portfolioicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/profile/portfolioicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
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
