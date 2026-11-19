"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectInterfacePreview } from "@/components/ui/ProjectInterfacePreview";
import { ArrowUpRight, ArrowRight, Github, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

export function ProjectsGallery() {
  return (
    <section id="projects" className="py-24 border-t border-[#222222] relative">
      {/* Section Index Marker */}
      <div className="flex items-center justify-between mb-12 border-b border-[#222222]/60 pb-4">
        <div className="font-mono-code text-xs text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
          <span>... /Selected Work • [03] Case Studies (06)</span>
        </div>
        <div className="font-mono-code text-xs text-[#777777]">
          // Production Implementations
        </div>
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5] font-editorial">
            Selected Engineering Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A6A6A6] max-w-2xl leading-relaxed">
            Verifiable full-stack applications, real-time computer vision inference models, and multi-tenant enterprise platforms engineered for real-world impact.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono-code text-xs text-[#777777]">
          <span>INDEX: 01 &rarr; 06</span>
        </div>
      </div>

      {/* Project Showcase List (Editorial Asymmetric Layout) */}
      <div className="space-y-16 md:space-y-24">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <article
              key={project.slug}
              className="p-6 sm:p-8 md:p-12 rounded-3xl bg-[#141414] border border-[#242424] hover:border-[#383838] transition-all duration-300 relative overflow-hidden group shadow-xl"
            >
              {/* Subtle background ambient hue */}
              <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.035] pointer-events-none blur-3xl transition-opacity group-hover:opacity-[0.07]"
                style={{ backgroundColor: project.accentColor }}
              />

              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Project Narrative & Details */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "" : "lg:col-start-6"
                  }`}
                >
                  {/* Number & Category */}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-5xl font-extrabold font-mono-code text-white">
                      {project.number}
                    </span>
                    <span className="h-5 w-[1px] bg-[#333333]" />
                    <span className="text-xs font-mono-code text-[#A6A6A6] tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors font-editorial">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-[#A6A6A6] mt-1.5 font-sans">
                      {project.subtitle}
                    </p>
                    {project.client && (
                      <div className="mt-2 text-xs font-mono-code text-emerald-400">
                        Client: {project.client}
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#888888] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Impact Pills (Design 1 Signature) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.impactPills.map((pill) => (
                      <span
                        key={pill}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-[#282828] text-xs font-mono-code text-[#E5E5E5]"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{pill}</span>
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono-code text-[#777777] bg-[#161616] px-2.5 py-1 rounded-md border border-[#222222]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#222222]">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#E5E5E5] transition-all cursor-pointer shadow-md"
                    >
                      <span>Read Deep-Dive Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#2E2E2E] text-[#F5F5F5] font-mono-code text-xs transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#A6A6A6]" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#2E2E2E] text-[#F5F5F5] font-mono-code text-xs transition-all"
                      >
                        <Github className="w-3.5 h-3.5 text-[#A6A6A6]" />
                        <span>Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual Interface Preview Presentation (No 3D Laptops!) */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "" : "lg:col-start-1"
                  }`}
                >
                  <ProjectInterfacePreview
                    slug={project.slug}
                    title={project.title}
                    accentColor={project.accentColor}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
