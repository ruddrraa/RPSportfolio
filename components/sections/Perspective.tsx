"use client";

import { profile } from "@/data/profile";
import {
  GraduationCap,
  Layers,
  Cpu,
  Sparkles,
  Terminal,
  ShieldCheck,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export function Perspective() {
  const pillars = [
    {
      roman: "I",
      tag: "SYSTEM COHESION",
      title: "Full-Stack System Cohesion",
      description:
        "Architecting clean, type-safe workflows from PostgreSQL relational models and MongoDB aggregations to high-throughput REST API handlers and React 19 server components.",
    },
    {
      roman: "II",
      tag: "DEEP LEARNING",
      title: "Applied Computer Vision & AI",
      description:
        "Building verifiable machine learning pipelines—from RT-DETR detection transformers and PyTorch classification models to high-speed LLM assistants using the Groq SDK.",
    },
    {
      roman: "III",
      tag: "CRAFTSMANSHIP",
      title: "Editorial Interaction Design",
      description:
        "Crafting responsive interfaces with architectural grids, accessible design tokens (WCAG AA), smooth Lenis inertia, and tactile micro-interactions that feel immediate.",
    },
    {
      roman: "IV",
      tag: "PRAGMATISM",
      title: "Real-World Operational Delivery",
      description:
        "Shipping practical tools for real businesses—from enterprise field tracking for Excel Technologies to voice-assisted MSME store accounting with MunshiJi AI.",
    },
  ];

  return (
    <section id="perspective" className="py-24 sm:py-32 w-full bg-[#0A0A0A] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-20">
        {/* Section Header & Index */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>EDITORIAL MANIFESTO &bull; [01]</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-white font-normal leading-[0.98]">
              A Perspective on <br />
              <span className="text-[#888888]">Architecture &amp; Utility</span>
            </h2>
          </div>

          <div className="text-xs font-mono-code text-[#777777]">
            // HUMAN CRAFT &bull; TECHNICAL RIGOR
          </div>
        </div>

        {/* Large Editorial Manifesto Statement (Sarthak + Noth Signature) */}
        <div className="max-w-4xl space-y-6">
          <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#E5E5E5] leading-[1.25] font-normal">
            &ldquo;I do not view engineering as merely assembling generic templates. Every system is a synthesis of architectural discipline, data integrity, and tactile human interaction.&rdquo;
          </p>
          <p className="text-base sm:text-lg text-[#999999] leading-relaxed font-sans max-w-3xl">
            Whether fine-tuning an RT-DETR transformer for fine-grained vehicle localization or deploying multi-tenant RBAC permissions for enterprise clients, the objective is constant: durable software that solves real problems with clarity and verifiable performance.
          </p>
        </div>

        {/* 4 Pillars Laid Out as an Architectural Hairline Grid (Design 2 Signature - No Boxy Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-y border-white/[0.08] py-8 md:py-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.roman}
              className="py-8 md:py-0 px-0 md:px-8 first:pl-0 last:pr-0 space-y-4 group"
            >
              <div className="flex items-center justify-between text-xs font-mono-code text-[#777777]">
                <span className="font-serif-editorial text-xl text-white font-normal group-hover:text-emerald-400 transition-colors">
                  {pillar.roman}
                </span>
                <span className="text-[10px] tracking-widest text-[#555555] uppercase">
                  {pillar.tag}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white font-sans group-hover:text-emerald-400 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#888888] font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Academic Foundation & Peer-Reviewed Strip */}
        <div className="p-8 sm:p-12 rounded-[28px] bg-[#121212] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 font-mono-code text-xs text-emerald-400">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC FOUNDATION &bull; SISTER NIVEDITA UNIVERSITY</span>
            </div>
            <h4 className="font-serif-editorial text-2xl sm:text-3xl text-white font-normal">
              Bachelor of Technology in Computer Science &amp; Business Systems (CSBS)
            </h4>
            <p className="text-sm text-[#999999] font-sans leading-relaxed max-w-2xl">
              Sister Nivedita University, Kolkata (2024–2028). Synthesizing core computer science algorithms, deep learning vision models, and distributed systems with enterprise business workflow analysis and product strategy.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 font-mono-code text-xs">
            <div className="p-4 rounded-2xl bg-[#181818] border border-white/[0.08] space-y-1">
              <div className="text-[10px] text-[#777777] uppercase tracking-wider">Research Acceptance</div>
              <div className="text-white font-medium">Q-Sentry: CIIR 2026 (Second Author)</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#181818] border border-white/[0.08] space-y-1">
              <div className="text-[10px] text-[#777777] uppercase tracking-wider">International Delegation</div>
              <div className="text-emerald-400 font-medium">IoT Student Exchange &bull; Sichuan, China</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
