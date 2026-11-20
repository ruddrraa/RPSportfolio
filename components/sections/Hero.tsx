"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { HeroCanvas } from "@/components/cinematic/HeroCanvas";
import { KineticText } from "@/components/ui/KineticText";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  const metrics = [
    {
      value: "6+",
      label: "Enterprise Systems Delivered",
      sub: "Production SaaS & AI Platforms",
    },
    {
      value: "CIIR '26",
      label: "Peer-Reviewed Paper Author",
      sub: "Second Author — Q-Sentry Vision",
    },
    {
      value: "Rank 1",
      label: "Hackfest 2025 Champion",
      sub: "Sister Nivedita University",
    },
    {
      value: "CSBS",
      label: "Computer Science & Business",
      sub: "B.Tech Undergraduate (2024–2028)",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-10 px-4 sm:px-8 md:px-12 w-full max-w-full overflow-hidden bg-[#0A0A0A] text-[#F2F0EA]">
      {/* 3D Image Depth Particle Portrait Canvas Layer (Sarthak Sharma / VML Interactive Experience) */}
      <HeroCanvas />

      {/* Top Editorial Margin Metadata */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between text-[11px] font-mono-code text-zinc-400 border-b border-white/[0.1] pb-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-mono font-bold">+</span>
          <span className="tracking-wider uppercase">
            FULL-STACK ARCHITECTURE &bull; COMPUTER VISION &bull; AI SYSTEMS
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-zinc-400">
          <span>KOLKATA, IN</span>
          <span className="text-white/20">&bull;</span>
          <span className="text-white font-semibold">CIIR 2026 AUTHOR</span>
        </div>
      </div>

      {/* Main Central Cinematic Staging */}
      <div className="relative z-20 my-auto py-10 sm:py-16 flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full">
        {/* Eyebrow Label */}
        <div className="mb-4 sm:mb-6 text-[11px] sm:text-xs tracking-[0.28em] font-mono-code text-zinc-400 uppercase">
          A Human Perspective on Intelligent Systems
        </div>

        {/* Central Monumental Editorial Serif Typography */}
        <div className="relative w-full flex flex-col items-center justify-center my-2">
          <div className="relative z-20 space-y-0 select-none">
            <h1 className="font-serif-editorial font-bold text-[clamp(2.75rem,8.5vw,9.5rem)] text-[#F2F0EA] leading-[0.88] tracking-[-0.035em]">
              <span className="sr-only">Rudra Pratap Singh</span>
              <KineticText text="Rudra" letterClassName="text-[#F2F0EA]" />{" "}
              <span className="text-zinc-400 font-normal italic">
                <KineticText text="Pratap" letterClassName="text-zinc-400" />
              </span>{" "}
              <KineticText text="Singh" letterClassName="text-[#F2F0EA]" />
            </h1>
          </div>
        </div>

        {/* Verified Positioning Statement */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-sans font-normal leading-relaxed">
          Architecting high-throughput full-stack platforms, deep learning Computer Vision pipelines (RT-DETR &amp; PyTorch), and verifiable AI products.
        </p>

        {/* Action Buttons (Tactile Pill CTAs) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-sans text-xs sm:text-sm">
          <a
            href="#projects"
            aria-label="Explore Selected Work"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F2F0EA] text-[#0A0A0A] font-semibold hover:bg-white transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <span>Explore Selected Work (06)</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={profile.socials.email}
            aria-label="Start a conversation via email"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-[#F2F0EA] border border-white/20 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Sarthak-style Verified Metrics Band */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-6 border-t border-b border-white/[0.1] my-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.1]">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col space-y-1 ${
                idx > 0 ? "md:pl-6" : ""
              } ${idx > 1 ? "pt-4 md:pt-0" : ""}`}
            >
              <div className="font-serif-editorial text-3xl sm:text-4xl text-[#F2F0EA] font-bold leading-none">
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

      {/* Bottom Editorial Margin & Tactile Discover Marker */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono-code text-zinc-400 pt-2">
        <a
          href="#perspective"
          aria-label="Scroll to discover selected work"
          className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
        >
          <span className="font-medium">SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-white" />
        </a>

        <div className="hidden md:block text-zinc-400 tracking-widest uppercase text-[10px]">
          BUILDING &amp; RESEARCHING &bull; SISTER NIVEDITA UNIV &bull; CSBS
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>AN ONGOING EXPLORATION</span>
        </div>
      </div>

      {/* Seamless Ambient Gradient Transition from Dark Hero into Warm Ivory Background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F2F0EA] pointer-events-none z-10" />
    </section>
  );
}
