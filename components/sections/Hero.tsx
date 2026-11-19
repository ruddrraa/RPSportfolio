"use client";

import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Terminal, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-28 overflow-hidden">
      {/* Subtle Circular Line Accent (Design 2 Signature) */}
      <div className="absolute top-1/2 -right-48 md:-right-24 -translate-y-1/2 w-[420px] md:w-[650px] h-[420px] md:h-[650px] rounded-full border border-white/[0.04] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 md:-right-8 -translate-y-1/2 w-[300px] md:w-[480px] h-[300px] md:h-[480px] rounded-full border border-white/[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-5xl">
        {/* Monospace Code Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2A2A2A] text-xs font-mono-code text-[#A6A6A6]">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[#F5F5F5]">{profile.name}</span>
            <span className="text-[#555555]">|</span>
            <span className="text-emerald-400 text-[11px] font-sans">Kolkata, IN</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141414] border border-[#222222] text-xs font-mono-code text-[#777777]">
            <span>// CSBS Engineer</span>
          </div>
        </div>

        {/* Large Editorial Headline */}
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.05]">
            Full-stack
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-mono-code text-[#A6A6A6] hover:text-white transition-colors leading-[1.05]">
            Developer.
          </h1>
        </div>

        {/* Positioning Subheading */}
        <div className="mt-8 flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-mono-code text-white">
          <span className="text-emerald-400">&gt;_</span>
          <span>AI Product Engineer & Systems Builder</span>
        </div>

        {/* Core Value Statement */}
        <p className="mt-4 text-base sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed font-sans">
          {profile.tagline} Focused on shipping verifiable full-stack applications, real-time computer vision inference pipelines, and scalable enterprise architectures.
        </p>

        {/* Action Buttons & Social Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#E5E5E5] transition-all shadow-lg shadow-white/5"
          >
            <span>Explore Projects (06)</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#2A2A2A] hover:border-[#3D3D3D] text-[#F5F5F5] text-sm font-mono-code transition-all"
          >
            <Github className="w-4 h-4 text-[#A6A6A6]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
          </a>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#2A2A2A] hover:border-[#3D3D3D] text-[#F5F5F5] text-sm font-mono-code transition-all"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
          </a>
        </div>
      </div>
    </section>
  );
}
