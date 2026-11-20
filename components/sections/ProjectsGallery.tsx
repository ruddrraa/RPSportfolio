"use client";

import { useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectInterfacePreview } from "@/components/ui/ProjectInterfacePreview";
import { KineticFallingMetadata } from "@/components/ui/KineticFallingMetadata";
import { ArrowUpRight, ArrowRight, Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: (typeof projects)[0];
  idx: number;
  year: string;
  niche: string;
}

function ProjectCard({ project, idx, year, niche }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const stickyTop = 88 + idx * 14;

  return (
    <div
      ref={cardRef}
      className="sticky transition-transform duration-300"
      style={{
        top: `${stickyTop}px`,
        zIndex: idx + 10,
      }}
    >
      {/* Outer Wrapper with Side Margins (Cosmos Studio Signature) */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Margin: Year Identifier (Desktop) with Noth.in Falling Typography */}
        <div className="hidden lg:flex lg:col-span-1 flex-col pt-8 text-[11px] font-mono-code text-[#77736C] uppercase tracking-wider space-y-1">
          <span className="text-[#9E998F]">YEAR</span>
          <KineticFallingMetadata
            text={year}
            triggerRef={cardRef}
            className="text-[#171717] font-bold text-xs"
            isYear
          />
          <span className="text-[10px] text-[#77736C] pt-2 font-mono">
            {project.number} / 06
          </span>
        </div>

        {/* Center Stage: Dominant Massive Rounded Viewport (Cosmos Studio Signature) */}
        <div className="lg:col-span-10 w-full rounded-[28px] sm:rounded-[36px] bg-[#E7E4DC] border border-[rgba(23,23,23,0.12)] overflow-hidden shadow-lg shadow-black/[0.04] relative group hover:border-[rgba(23,23,23,0.24)] transition-all duration-500">
          {/* Subtle Background Accent Glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.08] blur-3xl pointer-events-none transition-opacity group-hover:opacity-[0.14]"
            style={{ backgroundColor: project.accentColor }}
          />

          {/* Cosmos Studio Floating Pill Header */}
          <div className="px-6 py-4 border-b border-[rgba(23,23,23,0.08)] flex items-center justify-between bg-[#FAF8F5]/85 backdrop-blur-md">
            {/* Floating Center/Left Pill */}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E7E4DC] hover:bg-[#171717] text-[#171717] hover:text-white border border-[rgba(23,23,23,0.1)] transition-all duration-300 text-xs font-sans font-medium group/pill shadow-xs"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              <span className="font-semibold text-[#171717] group-hover/pill:text-white transition-colors">
                {project.title}
              </span>
              <span className="text-[#77736C] group-hover/pill:text-white/60">&bull;</span>
              <span>See case study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#77736C] group-hover/pill:text-white group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Right Tag (Mobile Year + Niche) */}
            <div className="flex items-center gap-3 text-xs font-mono-code text-[#77736C]">
              <span className="lg:hidden text-[#171717] font-semibold">{year}</span>
              <span className="hidden sm:inline-block text-[#9E998F]">/</span>
              <span className="text-xs text-[#77736C] uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>

          {/* Viewport Content Area */}
          <div className="p-6 sm:p-8 md:p-10 space-y-8">
            {/* Editorial Headline & Narrative */}
            <div className="space-y-3 max-w-3xl">
              <h3 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#171717] font-bold leading-[1.08] hover:text-[#333333] transition-colors">
                {project.subtitle}
              </h3>
              {project.client && (
                <div className="text-xs font-mono-code text-[#171717] font-semibold">
                  Enterprise Client: {project.client}
                </div>
              )}
              <p className="text-sm sm:text-base text-[#77736C] font-sans leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Integrated 2D Interface Preview (Clean Illustrative Architecture) */}
            <div className="pt-2">
              <ProjectInterfacePreview
                slug={project.slug}
                title={project.title}
                accentColor={project.accentColor}
              />
            </div>

            {/* Bottom Metadata & Direct Action Bar */}
            <div className="pt-6 border-t border-[rgba(23,23,23,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Stack Tags */}
              <div className="flex flex-wrap gap-1.5 text-xs font-mono-code text-[#77736C]">
                {project.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)] text-[#171717]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Direct Links */}
              <div className="flex items-center gap-3 font-sans text-xs">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-white font-medium hover:bg-[#2A2A2A] transition-all cursor-pointer shadow-sm"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#E7E4DC] border border-[rgba(23,23,23,0.1)] text-[#171717] font-mono-code text-xs transition-all"
                  >
                    <span>Live</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#77736C]" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#E7E4DC] border border-[rgba(23,23,23,0.1)] text-[#171717] font-mono-code text-xs transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-[#77736C]" />
                    <span>Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#77736C]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Margin: Niche Identifier (Desktop) with Noth.in Falling Typography */}
        <div className="hidden lg:flex lg:col-span-1 flex-col pt-8 text-[11px] font-mono-code text-[#77736C] uppercase tracking-wider space-y-1">
          <span className="text-[#9E998F]">NICHE</span>
          <KineticFallingMetadata
            text={niche}
            triggerRef={cardRef}
            className="text-[#171717] leading-tight font-semibold text-xs"
          />
        </div>
      </div>
    </div>
  );
}

export function ProjectsGallery() {
  const projectYears: Record<string, string> = {
    etechcrm: "2025",
    "munshiji-ai": "2025",
    "cardeca-algo": "2025",
    ethos: "2025",
    relancepay: "2024",
    vayrin: "2024",
  };

  const projectNiches: Record<string, string> = {
    etechcrm: "Enterprise Logistics & CRM",
    "munshiji-ai": "MSME Retail & Voice AI",
    "cardeca-algo": "RT-DETR & Computer Vision",
    ethos: "HRMS & Enterprise Copilot",
    relancepay: "Fintech & Multi-Currency SaaS",
    vayrin: "Emergency Healthcare Architecture",
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 w-full relative bg-[#F2F0EA] border-t border-[rgba(23,23,23,0.08)]"
    >
      {/* Editorial Section Header (Matching Image 3 Sarthak Sharma Typography) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(23,23,23,0.08)]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-[#171717] font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#171717] inline-block" />
              <span>02 / SELECTED WORK</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#171717] font-bold leading-[0.92] tracking-tight">
              <span className="block">Ideas are a start.</span>
              <span className="block font-serif-editorial italic font-normal text-[#171717]">
                This is the work.
              </span>
            </h2>
          </div>

          <div className="space-y-3 md:text-right max-w-sm">
            <div className="text-[10px] sm:text-[11px] font-mono-code text-[#77736C] uppercase tracking-widest">
              BUILT. TAUGHT. PUT INTO THE WORLD.
            </div>
            <p className="text-xs sm:text-sm text-[#77736C] font-sans leading-relaxed">
              From the platforms users scale on to the systems they trust. A curated collection of production applications and AI architectures.
            </p>
          </div>
        </div>
      </div>

      {/* Cosmos Studio Staggered / Stacked Viewports Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 space-y-24 md:space-y-32">
        {projects.map((project, idx) => {
          const year = projectYears[project.slug] || "2025";
          const niche = projectNiches[project.slug] || project.category;

          return (
            <ProjectCard
              key={project.slug}
              project={project}
              idx={idx}
              year={year}
              niche={niche}
            />
          );
        })}
      </div>
    </section>
  );
}
