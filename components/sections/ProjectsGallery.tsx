"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { ArrowUpRight, ArrowRight, Github, ExternalLink, ShieldCheck } from "lucide-react";

export function ProjectsGallery() {
  return (
    <section id="projects" className="py-20 border-t border-[#222222]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="font-mono-code text-xs text-[#A6A6A6] mb-3 flex items-center gap-2">
            <span className="text-emerald-400">#</span>
            <span>... /Projects ...</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F5F5]">
            Featured Engineering Work
          </h2>
        </div>
        <p className="text-xs md:text-sm font-mono-code text-[#777777] max-w-sm">
          // 6 production applications, computer vision models & enterprise platforms.
        </p>
      </div>

      {/* Project Showcase List (Editorial Asymmetric Layout) */}
      <div className="space-y-20 md:space-y-28">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <article
              key={project.slug}
              className="p-6 md:p-10 rounded-3xl bg-[#141414] border border-[#222222] hover:border-[#333333] transition-all relative overflow-hidden group"
            >
              {/* Subtle background glow */}
              <div 
                className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none blur-3xl"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                {/* Project Narrative & Details */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:col-start-6"}`}>
                  {/* Number & Category */}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl font-extrabold font-mono-code text-white">
                      {project.number}
                    </span>
                    <span className="h-4 w-[1px] bg-[#333333]" />
                    <span className="text-xs font-mono-code text-[#A6A6A6] tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-[#A6A6A6] mt-1">
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
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#2B2B2B] text-xs font-mono-code text-[#E5E5E5]"
                      >
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>{pill}</span>
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono-code text-[#666666] bg-[#181818] px-2 py-0.5 rounded border border-[#222222]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#222222]">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#E5E5E5] transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1D1D1D] hover:bg-[#262626] border border-[#2E2E2E] text-[#F5F5F5] font-mono-code text-xs transition-all"
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1D1D1D] hover:bg-[#262626] border border-[#2E2E2E] text-[#F5F5F5] font-mono-code text-xs transition-all"
                      >
                        <Github className="w-3.5 h-3.5 text-[#A6A6A6]" />
                        <span>Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Device Frame Visual Presentation */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:col-start-1"}`}>
                  <DeviceFrame
                    type={project.deviceType}
                    title={project.title}
                    image={project.image}
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
