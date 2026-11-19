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
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between pt-8 pb-16 overflow-hidden">
      {/* 3D Atmospheric Canvas Layer */}
      <HeroCanvas />

      {/* Chapter Marker & Monospace Metadata Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#222222]/80 pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs text-emerald-400 font-semibold tracking-wider">
            CHAPTER 01 // IDENTITY
          </span>
          <span className="text-[#333333]">/</span>
          <div className="flex items-center gap-1.5 font-mono-code text-xs text-[#A6A6A6]">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kolkata, IN [22.57° N, 88.36° E]</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3 font-mono-code text-xs text-[#777777]">
          <span className="flex items-center gap-1">
            <GraduationCap className="w-3.5 h-3.5 text-[#A6A6A6]" />
            <span>Sister Nivedita Univ • CSBS</span>
          </span>
          <span className="text-[#333333]">|</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <Award className="w-3.5 h-3.5" />
            <span>CIIR 2026 Author</span>
          </span>
        </div>
      </div>

      {/* Main Hero Body: Asymmetric Grid fusing Typography & Portrait */}
      <div className="relative z-10 my-auto py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typographic Monument */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#262626] text-xs font-mono-code text-[#A6A6A6]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-status-pulse inline-block" />
            <span className="text-white font-medium">Software Engineer & AI Builder</span>
          </div>

          {/* Monumental Name Typography */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#F5F5F5] font-editorial leading-[0.95]">
              <KineticText text="RUDRA" />
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#A6A6A6] hover:text-white transition-colors font-editorial leading-[0.95]">
              <KineticText text="PRATAP" />
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white font-editorial leading-[0.95]">
              <KineticText text="SINGH" />
            </h1>
          </div>

          {/* Positioning Headline */}
          <div className="pt-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-mono-code text-[#E5E5E5] flex items-center gap-2">
              <span className="text-emerald-400">&gt;_</span>
              <span>Full-Stack Developer | AI Product Engineer</span>
            </h2>
          </div>

          {/* Core Philosophy Paragraph */}
          <p className="text-sm sm:text-base text-[#A6A6A6] max-w-xl leading-relaxed">
            Architecting end-to-end applications bridging deep learning vision pipelines (RT-DETR & PyTorch), scalable enterprise SaaS, and refined digital experiences. Focused on verifiable craftsmanship, strict type safety, and real-world utility.
          </p>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F5F5F5] text-black font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-xl shadow-white/5 cursor-pointer"
            >
              <span>Explore Selected Work (06)</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 py-3.5 rounded-full bg-[#161616] hover:bg-[#202020] border border-[#2A2A2A] hover:border-[#3E3E3E] text-[#F5F5F5] text-xs sm:text-sm font-mono-code transition-all"
            >
              <Github className="w-4 h-4 text-[#A6A6A6]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 py-3.5 rounded-full bg-[#161616] hover:bg-[#202020] border border-[#2A2A2A] hover:border-[#3E3E3E] text-[#F5F5F5] text-xs sm:text-sm font-mono-code transition-all"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
            </a>
          </div>
        </div>

        {/* Right Column: Authentic Portrait with Cinematic Staging */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[380px] lg:max-w-[420px] rounded-3xl p-3 bg-gradient-to-b from-[#1C1C1C] to-[#121212] border border-[#2B2B2B] shadow-2xl shadow-black/80 group">
            {/* Outer Accent Indicator */}
            <div className="flex items-center justify-between pb-3 px-2 text-[11px] font-mono-code text-[#777777]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>AUTHENTIC PORTRAIT</span>
              </span>
              <span>REF // 2026.01</span>
            </div>

            {/* Portrait Image Container */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#0D0D0D] border border-white/5">
              <Image
                src="/profile/profilepic.jpg"
                alt="Rudra Pratap Singh — Full-Stack Developer & AI Product Engineer"
                fill
                priority
                className="object-cover object-top grayscale contrast-110 hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-102"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
              />

              {/* Ambient Vignette & Lighting Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-85 pointer-events-none" />

              {/* Monospace Overlay Badge on Portrait */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-white/10 font-mono-code space-y-1">
                <div className="text-xs text-white font-semibold flex items-center justify-between">
                  <span>{profile.name}</span>
                  <span className="text-emerald-400 text-[10px]">VERIFIED</span>
                </div>
                <div className="text-[11px] text-[#A6A6A6]">
                  Full-Stack Dev &bull; AI Product Engineer
                </div>
                <div className="text-[10px] text-[#777777] flex items-center gap-1 pt-0.5">
                  <MapPin className="w-3 h-3 text-[#A6A6A6]" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Base Spec Strip */}
            <div className="mt-3 pt-2 border-t border-[#222222] px-2 flex justify-between items-center text-[10px] font-mono-code text-[#666666]">
              <span>STACK: REACT 19 &bull; NEXT.JS 15</span>
              <span>INFERENCE: PYTORCH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Ticker */}
      <div className="relative z-10 pt-6 border-t border-[#222222]/80 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[#777777]">
        <div className="flex items-center gap-4">
          <span className="text-white font-medium">AVAILABLE FOR:</span>
          <span>Full-Stack Engineering</span>
          <span className="text-[#333333]">&bull;</span>
          <span>AI Product Architecture</span>
          <span className="text-[#333333]">&bull;</span>
          <span>Computer Vision Inference</span>
        </div>

        <div className="flex items-center gap-2 text-emerald-400">
          <span>SCROLL TO CHAPTER 02</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
