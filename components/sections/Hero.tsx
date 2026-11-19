"use client";

import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { HeroCanvas } from "@/components/cinematic/HeroCanvas";
import { KineticText } from "@/components/ui/KineticText";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Terminal,
  MapPin,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-4 sm:px-8 md:px-12 w-full overflow-hidden bg-[#0A0A0A]">
      {/* 3D Atmospheric Canvas Layer (Pavilion Datum) */}
      <HeroCanvas />

      {/* Top Editorial Margin Metadata (Sarthak Sharma Signature) */}
      <div className="relative z-10 w-full flex items-center justify-between text-[11px] font-mono-code text-[#777777] border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-2">
          <span className="text-[#A6A6A6]">+</span>
          <span className="tracking-wider uppercase">
            FULL-STACK ARCHITECTURE &bull; COMPUTER VISION &bull; AI PRODUCTS
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[#888888]">
          <span>KOLKATA, IN</span>
          <span className="text-white/20">&bull;</span>
          <span className="text-emerald-400">CIIR 2026 AUTHOR</span>
        </div>
      </div>

      {/* Main Central Cinematic Staging (Sarthak Sharma Monumental Hero) */}
      <div className="relative z-20 my-auto py-8 sm:py-12 flex flex-col items-center justify-center text-center">
        {/* Eyebrow Label */}
        <div className="mb-4 sm:mb-6 text-[11px] sm:text-xs tracking-[0.28em] font-mono-code text-[#999999] uppercase">
          A Human Perspective on Intelligent Systems
        </div>

        {/* Central Composition: Portrait Intimately Fused with Monumental Typography */}
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center my-2">
          {/* Authentic Portrait (Blended seamlessly into the dark void - NO BOX, NO CARD) */}
          <div className="relative w-[240px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[4/5] -mb-28 sm:-mb-36 md:-mb-44 z-0 pointer-events-none select-none">
            <Image
              src="/profile/profilepic.jpg"
              alt="Rudra Pratap Singh"
              fill
              priority
              className="object-cover object-top grayscale contrast-125 opacity-70 [mask-image:radial-gradient(ellipse_at_50%_40%,black_45%,transparent_80%)]"
              sizes="(max-width: 768px) 300px, 420px"
            />
            {/* Soft Ambient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
          </div>

          {/* Monumental Editorial Serif Typography (Sarthak Sharma Signature) */}
          <div className="relative z-20 space-y-0 select-none">
            <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[7.8rem] xl:text-[9.2rem] text-[#F5F5F5] leading-[0.88] tracking-tight hover:text-white transition-colors">
              <KineticText text="Rudra" />{" "}
              <span className="text-[#A6A6A6] font-normal">
                <KineticText text="Pratap" />
              </span>{" "}
              <KineticText text="Singh" />
            </h1>
          </div>
        </div>

        {/* Subtitle Statement */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-[#A6A6A6] max-w-2xl font-sans font-normal leading-relaxed">
          I architect high-throughput full-stack platforms, deep learning computer vision pipelines (RT-DETR &amp; PyTorch), and intelligent AI products.
        </p>

        {/* Action Buttons (Sarthak Sharma Pill CTAs) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-sans text-xs sm:text-sm">
          <a
            href="#projects"
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-[#E5E5E5] transition-all shadow-xl shadow-white/5 cursor-pointer"
          >
            <span>Explore Selected Work (06)</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={profile.socials.email}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 transition-all cursor-pointer"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Bottom Editorial Margin & Discover Marker */}
      <div className="relative z-10 w-full flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono-code text-[#777777] border-t border-white/[0.06] pt-4">
        <a
          href="#projects"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-emerald-400" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          <span>BUILDING &amp; SHIPPING SINCE 2024</span>
          <span className="text-white/20">&bull;</span>
          <span>SISTER NIVEDITA UNIV &bull; CSBS</span>
        </div>

        <div className="flex items-center gap-2 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-status-pulse" />
          <span>OPEN FOR SELECT ROLES</span>
        </div>
      </div>

      {/* Sarthak-Inspired 3-Column Key Impact Stat Strip */}
      <div className="relative z-10 w-full mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        <div className="space-y-1">
          <div className="font-serif-editorial text-3xl sm:text-4xl text-white font-normal">
            06<span className="text-emerald-400 text-2xl font-sans">+</span>
          </div>
          <div className="text-xs text-[#888888] font-sans">
            production systems deployed &amp; verifiable in code
          </div>
        </div>

        <div className="space-y-1">
          <div className="font-serif-editorial text-3xl sm:text-4xl text-white font-normal">
            CIIR 2026
          </div>
          <div className="text-xs text-[#888888] font-sans">
            accepted peer-reviewed research publication (Second Author)
          </div>
        </div>

        <div className="space-y-1">
          <div className="font-serif-editorial text-3xl sm:text-4xl text-white font-normal">
            1st Place
          </div>
          <div className="text-xs text-[#888888] font-sans">
            regional &amp; state champion at Hackfest 2025
          </div>
        </div>

        <div className="flex md:justify-end">
          <a
            href="#projects"
            className="flex items-center gap-2 text-xs font-mono-code text-[#A6A6A6] hover:text-white transition-colors uppercase tracking-wider group"
          >
            <span>The Work &bull; The Real-World Impact</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
