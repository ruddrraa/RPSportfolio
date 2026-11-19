"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { KineticText } from "@/components/ui/KineticText";
import {
  GraduationCap,
  Layers,
  Cpu,
  Sparkles,
  Terminal,
  ShieldCheck,
  Compass,
} from "lucide-react";

export function Perspective() {
  const pillars = [
    {
      number: "01",
      title: "Full-Stack System Cohesion",
      description:
        "Architecting clean, type-safe workflows from PostgreSQL models and MongoDB aggregations to high-throughput REST API handlers and React 19 server components.",
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      tag: "ARCHITECTURE",
    },
    {
      number: "02",
      title: "Applied AI & Computer Vision",
      description:
        "Building verifiable machine learning pipelines—from RT-DETR detection transformers and PyTorch classification models to high-speed LLM assistants using the Groq SDK.",
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
      tag: "DEEP LEARNING",
    },
    {
      number: "03",
      title: "Frontend Craftsmanship",
      description:
        "Crafting editorial interfaces with responsive grids, accessible design tokens (WCAG AA), smooth Lenis inertia, and tactile micro-interactions that feel immediate.",
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      tag: "CRAFTSMANSHIP",
    },
    {
      number: "04",
      title: "Real-World Operational Delivery",
      description:
        "Shipping practical tools for real businesses—from enterprise field tracking for Excel Technologies to voice-assisted MSME store accounting with MunshiJi AI.",
      icon: <Compass className="w-4 h-4 text-amber-400" />,
      tag: "PRAGMATISM",
    },
  ];

  return (
    <section id="perspective" className="py-24 border-t border-[#222222] relative">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between mb-12 border-b border-[#222222]/60 pb-4">
        <div className="font-mono-code text-xs text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
          <span>CHAPTER 02 // PERSONAL PERSPECTIVE</span>
        </div>
        <div className="font-mono-code text-xs text-[#777777]">
          // Philosophy & Approach
        </div>
      </div>

      {/* Editorial Headline */}
      <div className="max-w-4xl space-y-6 mb-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F5F5] font-editorial leading-[1.1]">
          Software engineered with <br />
          <span className="text-[#A6A6A6] font-mono-code">technical depth</span> and{" "}
          <span className="text-white underline decoration-white/20 underline-offset-8">
            product purpose.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#A6A6A6] leading-relaxed max-w-3xl">
          I do not view engineering as merely typing syntax or assembling templates. Every product is a synthesis of architectural discipline, data integrity, and human interaction. Whether calibrating an RT-DETR transformer for fine-grained vehicle localization or deploying multi-tenant RBAC permissions for enterprise clients, the objective is constant: durable software that solves real problems with clarity.
        </p>
      </div>

      {/* 4 Pillars Grid (Design 2 & Cosmos Studio inspired) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {pillars.map((pillar) => (
          <div
            key={pillar.number}
            className="p-8 rounded-3xl bg-[#141414] border border-[#222222] hover:border-[#383838] transition-all duration-300 space-y-4 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono-code text-xl font-bold text-white">
                  {pillar.number}
                </span>
                <span className="h-3 w-[1px] bg-[#333333]" />
                <span className="font-mono-code text-[11px] text-[#A6A6A6] tracking-wider">
                  {pillar.tag}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#1C1C1C] border border-[#2B2B2B]">
                {pillar.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
              {pillar.title}
            </h3>

            <p className="text-sm text-[#888888] leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Academic Foundation & Background Strip */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141414] via-[#161616] to-[#121212] border border-[#262626] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center gap-2 font-mono-code text-xs text-emerald-400">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC FOUNDATION & RESEARCH FOCUS</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            {profile.education.degree} in {profile.education.field}
          </h4>
          <p className="text-sm text-[#A6A6A6] leading-relaxed max-w-2xl">
            Sister Nivedita University, Kolkata (2024–2028). Combining computer science fundamentals—algorithms, distributed computing, and computer vision—with business systems analysis, financial modeling, and product engineering.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 font-mono-code text-xs">
          <div className="p-3.5 rounded-xl bg-[#1A1A1A] border border-[#2C2C2C] space-y-1">
            <div className="text-[10px] text-[#777777]">PUBLICATIONS</div>
            <div className="text-white font-medium">Q-Sentry: CIIR 2026 (2nd Author)</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#1A1A1A] border border-[#2C2C2C] space-y-1">
            <div className="text-[10px] text-[#777777]">INTERNATIONAL EXCHANGE</div>
            <div className="text-emerald-400 font-medium">IoT Delegate &bull; Sichuan, China</div>
          </div>
        </div>
      </div>
    </section>
  );
}

