"use client";

import { GraduationCap, BookOpen, Compass, Sparkles } from "lucide-react";

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
    <section id="perspective" className="py-24 sm:py-32 w-full bg-[#F2F0EA] border-t border-[rgba(23,23,23,0.08)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-20">
        {/* Section Header & Index */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(23,23,23,0.08)]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-[#171717] font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
              <span>EDITORIAL MANIFESTO // [01]</span>
            </div>
            <h2 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl text-[#171717] font-semibold leading-[0.95] tracking-tight">
              A Perspective on <br />
              <span>Architecture </span>
              <span className="font-serif-editorial italic font-normal text-[#171717]">&amp; Utility</span>
            </h2>
          </div>

          <div className="text-xs font-mono-code text-[#77736C]">
            // HUMAN CRAFT &bull; TECHNICAL RIGOR
          </div>
        </div>

        {/* Large Editorial Manifesto Statement (High-Impact Typography matching Image 1) */}
        <div className="max-w-4xl space-y-6">
          <blockquote className="font-serif-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#77736C] leading-[1.3] font-normal">
            &ldquo;I do not view engineering as merely assembling generic templates. Every system is a synthesis of architectural discipline, data integrity, and tactile human interaction.&rdquo;
          </blockquote>
          <p className="text-base sm:text-lg text-[#77736C] leading-relaxed font-sans max-w-3xl">
            Whether fine-tuning an RT-DETR transformer for fine-grained vehicle localization or deploying multi-tenant RBAC permissions for enterprise clients, the objective is constant: durable software that solves real problems with clarity and verifiable performance.
          </p>
        </div>

        {/* 4 Pillars Laid Out as an Architectural Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(23,23,23,0.08)] border-y border-[rgba(23,23,23,0.08)] py-8 md:py-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.roman}
              className="py-8 md:py-0 px-0 md:px-8 first:pl-0 last:pr-0 space-y-4 group"
            >
              <div className="flex items-center justify-between text-xs font-mono-code text-[#77736C]">
                <span className="font-serif-editorial text-2xl text-[#171717] font-bold">
                  {pillar.roman}
                </span>
                <span className="text-[10px] tracking-widest text-[#9E998F] uppercase">
                  {pillar.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#171717] font-sans group-hover:text-[#444444] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#77736C] font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Academic Foundation & Peer-Reviewed Strip */}
        <div className="p-8 sm:p-12 rounded-[28px] sm:rounded-[36px] bg-[#E7E4DC] border border-[rgba(23,23,23,0.12)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#171717]">
              <GraduationCap className="w-4 h-4" />
              <span className="font-semibold uppercase tracking-wider">
                ACADEMIC FOUNDATION &bull; SISTER NIVEDITA UNIVERSITY
              </span>
            </div>
            <h4 className="font-serif-editorial text-2xl sm:text-3xl text-[#171717] font-bold">
              Bachelor of Technology in Computer Science &amp; Business Systems (CSBS)
            </h4>
            <p className="text-sm text-[#77736C] font-sans leading-relaxed max-w-2xl">
              Sister Nivedita University, Kolkata (2024–2028). Synthesizing core computer science algorithms, deep learning vision models, and distributed systems with enterprise business workflow analysis and product strategy.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 font-mono-code text-xs">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)] space-y-1">
              <div className="text-[10px] text-[#77736C] uppercase tracking-wider">Research Acceptance</div>
              <div className="text-[#171717] font-semibold">Q-Sentry: CIIR 2026 (Second Author)</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)] space-y-1">
              <div className="text-[10px] text-[#77736C] uppercase tracking-wider">International Delegation</div>
              <div className="text-[#171717] font-semibold">IoT Student Exchange &bull; Sichuan, China</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
