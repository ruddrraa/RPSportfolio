"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectInterfacePreview } from "@/components/ui/ProjectInterfacePreview";
import { TechStackIcon } from "@/components/ui/TechStackIcon";
import { KineticFallingMetadata } from "@/components/ui/KineticFallingMetadata";
import { ArrowUpRight, ArrowRight, Github, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ProjectCardProps {
  project: (typeof projects)[0];
  idx: number;
  year: string;
  niche: string;
}

function ProjectCard({ project, idx, year, niche }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="sticky top-20 sm:top-24 lg:top-28 mb-28 sm:mb-36 lg:mb-48 transition-transform duration-300 will-change-transform"
      style={{
        zIndex: idx + 10,
      }}
    >
      {/* Cosmos Studio Monolithic Viewport Stage */}
      <div className="w-full max-w-5xl lg:max-w-6xl mx-auto rounded-[24px] sm:rounded-[32px] md:rounded-[36px] bg-[#E7E4DC] border border-[rgba(23,23,23,0.12)] shadow-2xl shadow-black/8 relative group hover:border-[rgba(23,23,23,0.24)] transition-all duration-500 overflow-hidden">
        {/* Cosmos Studio Floating Pill Header (With Kinetic Falling Physics) */}
        <div className="sticky top-0 z-20 px-5 sm:px-7 py-3.5 sm:py-4 border-b border-[rgba(23,23,23,0.08)] flex flex-wrap items-center justify-between gap-3 bg-[#FAF8F5]/95 backdrop-blur-md">
          {/* Floating Left Pill */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#E7E4DC] hover:bg-[#171717] text-[#171717] hover:text-[#FAF8F5] border border-[rgba(23,23,23,0.1)] transition-all duration-300 text-xs font-sans font-medium group/pill shadow-2xs pointer-events-auto cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717] group-hover/pill:bg-[#FAF8F5] transition-colors" />
            <span className="font-semibold text-[#171717] group-hover/pill:text-[#FAF8F5] transition-colors">
              {project.title}
            </span>
            <span className="text-[#77736C] group-hover/pill:text-[#FAF8F5]/60">&bull;</span>
            <span>See case study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#77736C] group-hover/pill:text-[#FAF8F5] group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Right Self-Contained Metadata Cluster with Kinetic Falling Letters */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-xs font-mono-code text-[#77736C]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#E7E4DC] border border-[rgba(23,23,23,0.08)] text-[#171717] font-semibold text-[11px]">
              {project.number} / 06
            </span>
            <KineticFallingMetadata
              text={year}
              triggerRef={cardRef}
              className="text-[#171717] font-semibold tracking-wide"
              isYear
            />
            <span className="text-[#9E998F]">&bull;</span>
            <span className="text-[11px] sm:text-xs text-[#77736C] uppercase tracking-wider hidden sm:inline font-mono-code">
              <KineticFallingMetadata text={niche} triggerRef={cardRef} />
            </span>
          </div>
        </div>

        {/* Viewport Content Area */}
        <div className="p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
          {/* High-Impact Capability Badges */}
          <div className="flex flex-wrap gap-2">
            {project.impactPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[rgba(23,23,23,0.1)] text-[#171717] text-[11px] font-mono-code font-medium shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                <span>{pill}</span>
              </span>
            ))}
          </div>

          {/* Editorial Headline & Narrative */}
          <div className="space-y-3 max-w-3xl">
            <h3 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#171717] font-semibold leading-[1.04] tracking-tight hover:text-[#333333] transition-colors">
              {project.subtitle}
            </h3>
            {project.client && (
              <div className="text-xs font-mono-code text-[#171717] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                <span>Enterprise Client: {project.client}</span>
              </div>
            )}
            <p className="text-sm sm:text-base text-[#77736C] font-sans leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Integrated Domain Interface Preview */}
          <div className="pt-2">
            <ProjectInterfacePreview
              slug={project.slug}
              title={project.title}
              accentColor={project.accentColor}
            />
          </div>

          {/* Dedicated Tech Stack Logo Cluster & Action Bar */}
          <div className="pt-6 border-t border-[rgba(23,23,23,0.08)] flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-30 pointer-events-auto">
            {/* Authentic Tech Stack Strip with SVG Brand Logos */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono-code text-[#77736C] uppercase tracking-wider">
                TECH STACK &bull; VERIFIED LOGOS &amp; PROTOCOLS
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.stack.slice(0, 6).map((tech) => (
                  <div
                    key={tech}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[rgba(23,23,23,0.1)] text-[#171717] text-xs font-sans font-medium shadow-2xs hover:border-[rgba(23,23,23,0.25)] transition-all"
                  >
                    <TechStackIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px] font-mono-code">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Links (100% Clickable, High z-index, Verified Links) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 font-sans text-xs shrink-0 relative z-30 pointer-events-auto">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-white font-medium hover:bg-[#2A2A2A] transition-all cursor-pointer shadow-sm hover:scale-102 active:scale-95 pointer-events-auto"
              >
                <span>Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#E7E4DC] border border-[rgba(23,23,23,0.1)] text-[#171717] font-mono-code text-xs transition-all hover:scale-102 active:scale-95 pointer-events-auto cursor-pointer"
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
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#E7E4DC] border border-[rgba(23,23,23,0.1)] text-[#171717] font-mono-code text-xs transition-all hover:scale-102 active:scale-95 pointer-events-auto cursor-pointer"
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

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section || !headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="pt-28 sm:pt-36 pb-24 sm:pb-32 w-full relative bg-[#F2F0EA] border-t border-[rgba(23,23,23,0.08)]"
    >
      {/* Editorial Section Header (Matching Sarthak Sharma Typography: "Ideas are a start. This is the work.") */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-16 md:mb-24">
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(23,23,23,0.08)] will-change-transform"
        >
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-[#171717] font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#171717] inline-block" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#171717] font-bold leading-[0.92] tracking-tight">
              <span className="block">Ideas are a start.</span>
              <span className="block font-serif-editorial italic font-normal text-[#171717] tracking-[-0.015em]">
                This is the work.
              </span>
            </h2>
          </div>

          <div className="space-y-3 md:text-right max-w-sm">
            <div className="text-[10px] sm:text-[11px] font-mono-code text-[#77736C] uppercase tracking-widest">
              BUILT, DEPLOYED &amp; TESTED
            </div>
            <p className="text-xs sm:text-sm text-[#77736C] font-sans leading-relaxed">
              Curated case studies covering full-stack enterprise systems, deep learning computer vision pipelines, and production web applications.
            </p>
          </div>
        </div>
      </div>

      {/* Clean Stacking Viewports Container (Cosmos Studio Vertical Stacking) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
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
