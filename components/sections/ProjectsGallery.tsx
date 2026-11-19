"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectInterfacePreview } from "@/components/ui/ProjectInterfacePreview";
import { ArrowUpRight, ArrowRight, Github, ExternalLink, Layers, Sparkles } from "lucide-react";

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
    vayrin: "Emergency Healthcare Telemetry",
  };

  return (
    <section id="projects" className="py-24 w-full relative bg-[#0A0A0A] border-t border-white/[0.06]">
      {/* Editorial Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>COSMOS-SERIES &bull; SELECTED PRODUCTIONS</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-white font-normal leading-[0.95]">
              Selected Systems <span className="font-sans text-2xl sm:text-3xl font-light text-[#777777]">&amp; Case Studies</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-code text-[#777777]">
            <span>INDEX: 01 &rarr; 06</span>
            <span className="text-white/20">&bull;</span>
            <span className="text-white">STACKED SCROLL VIEWPORTS</span>
          </div>
        </div>
      </div>

      {/* Cosmos Studio Staggered / Stacked Viewports Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 space-y-24 md:space-y-32">
        {projects.map((project, idx) => {
          const year = projectYears[project.slug] || "2025";
          const niche = projectNiches[project.slug] || project.category;
          const stickyTop = 96 + idx * 16; // subtle stacking offset

          return (
            <div
              key={project.slug}
              className="sticky transition-transform duration-300"
              style={{
                top: `${stickyTop}px`,
                zIndex: idx + 10,
              }}
            >
              {/* Outer Wrapper with Side Margins (Cosmos Studio Signature) */}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Margin: Year Identifier (Desktop) */}
                <div className="hidden lg:flex lg:col-span-1 flex-col pt-8 text-[11px] font-mono-code text-[#777777] uppercase tracking-wider space-y-1">
                  <span className="text-[#555555]">YEAR</span>
                  <span className="text-white font-semibold">{year}</span>
                  <span className="text-[10px] text-emerald-400/80 pt-2">{project.number} / 06</span>
                </div>

                {/* Center Stage: Dominant Massive Rounded Viewport (Cosmos Studio Signature) */}
                <div className="lg:col-span-10 w-full rounded-[28px] sm:rounded-[36px] bg-[#121212] border border-white/10 overflow-hidden shadow-2xl shadow-black/95 relative group hover:border-white/20 transition-all duration-500">
                  {/* Subtle Background Glow */}
                  <div
                    className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.06] blur-3xl pointer-events-none transition-opacity group-hover:opacity-[0.12]"
                    style={{ backgroundColor: project.accentColor }}
                  />

                  {/* Cosmos Studio Floating Pill Header */}
                  <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-[#161616]/70 backdrop-blur-md">
                    {/* Floating Center/Left Pill */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#202020] hover:bg-white text-[#CCCCCC] hover:text-black border border-white/10 transition-all duration-300 text-xs font-sans font-medium group/pill shadow-sm"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: project.accentColor }}
                      />
                      <span className="font-semibold text-white group-hover/pill:text-black transition-colors">
                        {project.title}
                      </span>
                      <span className="text-white/40 group-hover/pill:text-black/60">&bull;</span>
                      <span>See case study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover/pill:text-black group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 transition-transform" />
                    </Link>

                    {/* Right Tag (Mobile Year + Niche) */}
                    <div className="flex items-center gap-3 text-xs font-mono-code text-[#777777]">
                      <span className="lg:hidden text-white">{year}</span>
                      <span className="hidden sm:inline-block text-[#555555]">/</span>
                      <span className="text-xs text-[#A6A6A6] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Viewport Content Area */}
                  <div className="p-6 sm:p-8 md:p-10 space-y-8">
                    {/* Editorial Headline & Narrative */}
                    <div className="space-y-3 max-w-3xl">
                      <h3 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#F5F5F5] font-normal leading-[1.08] group-hover:text-white transition-colors">
                        {project.subtitle}
                      </h3>
                      {project.client && (
                        <div className="text-xs font-mono-code text-emerald-400">
                          Enterprise Client: {project.client}
                        </div>
                      )}
                      <p className="text-sm sm:text-base text-[#999999] font-sans leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Integrated 2D Interface Preview (Real telemetry, No fake dots!) */}
                    <div className="pt-2">
                      <ProjectInterfacePreview
                        slug={project.slug}
                        title={project.title}
                        accentColor={project.accentColor}
                      />
                    </div>

                    {/* Bottom Metadata & Direct Action Bar */}
                    <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 text-xs font-mono-code text-[#777777]">
                        {project.stack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#A6A6A6]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Direct Links */}
                      <div className="flex items-center gap-3 font-sans text-xs">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-[#E5E5E5] transition-all cursor-pointer shadow-md"
                        >
                          <span>Deep-Dive Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-code text-xs transition-all"
                          >
                            <span>Live</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#888888]" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-code text-xs transition-all"
                          >
                            <Github className="w-3.5 h-3.5 text-[#888888]" />
                            <span>Code</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#555555]" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Margin: Niche Identifier (Desktop) */}
                <div className="hidden lg:flex lg:col-span-1 flex-col pt-8 text-[11px] font-mono-code text-[#777777] uppercase tracking-wider space-y-1">
                  <span className="text-[#555555]">NICHE</span>
                  <span className="text-[#CCCCCC] leading-tight font-medium">{niche}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
