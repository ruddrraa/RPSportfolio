"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { HeroCanvas } from "@/components/cinematic/HeroCanvas";
import { KineticText } from "@/components/ui/KineticText";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 1200) {
        setScrollProgress(scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const metrics = [
    {
      value: "CIIR 2026",
      label: "Second Author, Q-Sentry Paper",
      sub: "Semantic-Quantum Ethical AI Model",
    },
    {
      value: "1st Place",
      label: "Hackfest 2025 Winner",
      sub: "Sister Nivedita University",
    },
    {
      value: "Handshake AI",
      label: "Freelance Software Engineer",
      sub: "Frontend Architecture & Features",
    },
    {
      value: "2024–2028",
      label: "B.Tech Undergrad (CSBS)",
      sub: "Sister Nivedita University, Kolkata",
    },
  ];

  // Calculate dynamic 3D depth perspective scaling on scroll (Smooth dive-in transition)
  const depthScale = Math.max(0.92, 1 - scrollProgress * 0.00015);
  const depthTranslateY = scrollProgress * 0.18;
  const depthOpacity = Math.max(0.2, 1 - scrollProgress * 0.0012);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-0 px-4 sm:px-8 md:px-12 w-full max-w-full overflow-hidden bg-[#0A0A0A] text-[#F2F0EA]">
      {/* 3D Image Depth Particle Portrait Canvas Layer with Cursor Repulsion Physics */}
      <HeroCanvas />

      {/* Top Editorial Margin Metadata */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between text-[11px] font-mono-code text-zinc-400 border-b border-white/[0.1] pb-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-mono font-bold">+</span>
          <span className="tracking-wider uppercase">
            FULL-STACK DEVELOPMENT &bull; COMPUTER VISION &bull; WEB PLATFORMS
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-zinc-400">
          <span>KOLKATA, IN</span>
          <span className="text-white/20">&bull;</span>
          <span className="text-white font-semibold">CIIR 2026 AUTHOR</span>
        </div>
      </div>

      {/* Main Central Cinematic Staging with Hardware-Accelerated Scroll Depth Effect */}
      <div
        className="relative z-20 my-auto py-8 sm:py-14 flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full transition-transform ease-out will-change-transform"
        style={{
          transform: `scale(${depthScale}) translateY(${depthTranslateY}px)`,
          opacity: depthOpacity,
        }}
      >
        {/* Eyebrow Label (Authentic Grounded English) */}
        <div className="mb-4 sm:mb-6 text-[11px] sm:text-xs tracking-[0.25em] font-mono-code text-zinc-400 uppercase">
          Full-Stack Developer &bull; Computer Science Student
        </div>

        {/* Central Monumental Cursive Typography (Single Line Editorial Composition) */}
        <div className="relative w-full flex flex-col items-center justify-center my-2">
          <div className="relative z-20 space-y-0 select-none">
            <h1 className="font-instrument-cursive font-serif-editorial text-[clamp(2.85rem,8.5vw,9.6rem)] text-[#F2F0EA] leading-[0.90] tracking-[-0.02em] drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)] flex flex-wrap items-baseline justify-center gap-x-3 sm:gap-x-5">
              <span className="sr-only">Rudra Pratap Singh</span>
              <span className="text-[#F2F0EA] inline-block">
                <KineticText text="Rudra" letterClassName="text-[#F2F0EA]" />
              </span>
              <span className="text-[#E7E4DC] inline-block">
                <KineticText text="Pratap" letterClassName="text-[#E7E4DC]" />
              </span>
              <span className="text-[#F2F0EA] inline-block">
                <KineticText text="Singh" letterClassName="text-[#F2F0EA]" />
              </span>
            </h1>
          </div>
        </div>

        {/* Real Grounded Profile Statement from CV */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-sans font-normal leading-relaxed">
          Building responsive web applications, role-based business platforms, and applied computer vision systems. Currently pursuing B.Tech in Computer Science &amp; Business Systems at Sister Nivedita University, Kolkata.
        </p>

        {/* Action Buttons (Tactile Pill CTAs) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-sans text-xs sm:text-sm">
          <a
            href="#projects"
            aria-label="Explore Selected Work"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F2F0EA] text-[#0A0A0A] font-semibold hover:bg-white hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <span>Explore Selected Work (06)</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={profile.socials.email}
            aria-label="Start a conversation via email"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] hover:-translate-y-0.5 hover:shadow-lg active:scale-95 text-[#F2F0EA] border border-white/20 transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* Sarthak-style Verified Metrics Band (Exact Typography Matching Image 6) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-6 border-t border-b border-white/[0.1] my-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.1]">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col space-y-1 ${
                idx > 0 ? "md:pl-6" : ""
              } ${idx > 1 ? "pt-4 md:pt-0" : ""}`}
            >
              {/* Exact Light Italic Typography Matching Pasted Image 6 */}
              <div className="font-serif-editorial italic text-3xl sm:text-4xl text-[#F2F0EA] font-normal leading-none">
                {item.value}
              </div>
              <div className="text-xs font-sans font-semibold text-white">
                {item.label}
              </div>
              <div className="text-[11px] font-mono-code text-zinc-400">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className="relative z-20 w-full flex justify-center py-2">
        <a
          href="#perspective"
          aria-label="Scroll to discover perspective"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-sans group cursor-pointer"
        >
          <span>Scroll to discover</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-white animate-bounce" />
        </a>
      </div>

      {/* Sculptural Curved Horizon Plate (True 3D Spatial Transition without AI Badges) */}
      <div className="w-full relative h-20 sm:h-28 md:h-36 overflow-hidden pointer-events-none mt-2">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full text-[#F2F0EA] block filter drop-shadow-[0_-35px_60px_rgba(0,0,0,0.85)]"
        >
          <path
            d="M0,120 C420,15 1020,15 1440,120 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
