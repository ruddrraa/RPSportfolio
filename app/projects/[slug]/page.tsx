import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectInterfacePreview } from "@/components/ui/ProjectInterfacePreview";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Layers,
} from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found — Rudra Pratap Singh" };

  return {
    title: `${project.title} (${project.number}) — ${project.subtitle} | Rudra Pratap Singh`,
    description: project.summary,
  };
}

function getTierStatusBadge(slug: string): string {
  switch (slug) {
    case "etechcrm":
      return "PRODUCTION CLIENT APPLICATION";
    case "ethos":
      return "VERIFIED GITHUB REPOSITORY";
    case "vayrin":
      return "PLATFORM CONCEPT & ARCHITECTURE";
    case "munshiji-ai":
    case "cardeca-algo":
    case "relancepay":
    default:
      return "LIVE INTERACTIVE DEPLOYMENT";
  }
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-6xl mx-auto space-y-16">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex items-center justify-between border-b border-[rgba(23,23,23,0.08)] pb-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E7E4DC] hover:bg-[#DDD9CF] border border-[rgba(23,23,23,0.1)] font-mono-code text-xs text-[#171717] transition-all shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        <div className="font-mono-code text-xs text-[#77736C]">
          ... /Case Study &bull; [03.{project.number}]
        </div>
      </div>

      {/* Case Study Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-serif-editorial text-4xl md:text-7xl font-normal text-[#171717]">
            {project.number}
          </span>
          <span className="h-8 w-[1px] bg-[rgba(23,23,23,0.12)]" />
          <span className="font-mono-code text-xs text-[#77736C] uppercase tracking-wider">
            {project.category}
          </span>
          {project.tierLabel && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171717]/5 border border-[#171717]/15 text-xs font-mono-code text-[#171717]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
              <span>{project.tierLabel}</span>
            </span>
          )}
        </div>

        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#171717] font-serif-editorial leading-[0.95]">
            {project.title}
          </h1>
          <p className="text-xl md:text-3xl text-[#171717] mt-3 font-serif-editorial italic font-normal leading-tight">
            {project.subtitle}
          </p>
          {project.client && (
            <div className="mt-3 text-xs sm:text-sm font-mono-code text-[#77736C] font-semibold">
              Client &bull; {project.client}
            </div>
          )}
        </div>

        {/* Impact Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.impactPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E7E4DC] border border-[rgba(23,23,23,0.1)] text-xs font-mono-code text-[#171717]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#171717]" />
              <span>{pill}</span>
            </span>
          ))}
        </div>

        {/* Live and GitHub Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-[#F2F0EA] font-sans font-medium text-xs hover:bg-[#2A2A2A] transition-all shadow-sm"
            >
              <span>Launch Live Deployment</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#E7E4DC] border border-[rgba(23,23,23,0.12)] text-[#171717] font-mono-code text-xs transition-all shadow-xs"
            >
              <Github className="w-4 h-4 text-[#77736C]" />
              <span>View Verified Repository</span>
            </a>
          )}
        </div>
      </div>

      {/* Visual 2D Interface Staging (No 3D laptops!) */}
      <div className="p-6 md:p-10 rounded-3xl bg-[#151515] border border-white/[0.08] shadow-2xl">
        <div className="text-xs font-mono-code text-[#77736C] mb-4 flex flex-wrap items-center justify-between gap-2">
          <span>SYSTEM ARCHITECTURE &amp; VERIFIED WORKFLOW</span>
          <span className="text-white font-medium tracking-wider">
            {getTierStatusBadge(project.slug)}
          </span>
        </div>
        <ProjectInterfacePreview
          slug={project.slug}
          title={project.title}
          accentColor={project.accentColor}
        />
      </div>

      {/* Deep-Dive Case Study Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Challenge */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#E7E4DC] border border-[rgba(23,23,23,0.1)] space-y-4 shadow-xs">
          <div className="font-mono-code text-xs text-[#171717] font-semibold uppercase tracking-wider flex items-center gap-2">
            <span>01 &bull; Operational Challenge</span>
          </div>
          <h3 className="text-2xl font-bold text-[#171717] font-serif-editorial">
            The Problem &amp; Requirements
          </h3>
          <p className="text-sm sm:text-base text-[#77736C] font-sans leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#E7E4DC] border border-[rgba(23,23,23,0.1)] space-y-4 shadow-xs">
          <div className="font-mono-code text-xs text-[#171717] font-semibold uppercase tracking-wider flex items-center gap-2">
            <span>02 &bull; Architectural Solution</span>
          </div>
          <h3 className="text-2xl font-bold text-[#171717] font-serif-editorial">
            System Design &amp; Delivery
          </h3>
          <p className="text-sm sm:text-base text-[#77736C] font-sans leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Architecture Deep Dive & Key Capabilities */}
      <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#151515] border border-white/[0.08] shadow-2xl space-y-6 text-white">
        <div className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4 text-white" />
          <span>03 &bull; System Architecture &amp; Implementation Details</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] font-serif-editorial">
          Technical Pipeline &amp; Data Flow
        </h3>
        <p className="text-sm sm:text-base text-[#A6A6A6] font-sans leading-relaxed">
          {project.architecture}
        </p>

        {/* Key Features List */}
        <div className="pt-4 border-t border-white/[0.08] space-y-3">
          <div className="text-xs font-mono-code text-[#77736C] uppercase tracking-wider">
            Verified Production Features:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#1F1F1F] border border-white/[0.06] text-xs text-[#E5E5E5] font-mono-code"
              >
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#E7E4DC] border border-[rgba(23,23,23,0.1)] space-y-4 shadow-xs">
        <div className="font-mono-code text-xs text-[#77736C] uppercase tracking-wider flex items-center gap-2">
          <Code2 className="w-4 h-4 text-[#171717]" />
          <span>04 &bull; Verified Technologies &amp; Tooling</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-lg bg-[#FAF8F5] border border-[rgba(23,23,23,0.1)] text-xs font-mono-code text-[#171717]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Next / Previous Project Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[rgba(23,23,23,0.12)]">
        <Link
          href={`/projects/${prevProject.slug}`}
          className="p-5 rounded-2xl bg-[#E7E4DC] hover:bg-[#DDD9CF] border border-[rgba(23,23,23,0.1)] hover:border-[rgba(23,23,23,0.2)] transition-all flex flex-col justify-between space-y-2 group shadow-xs"
        >
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#77736C]">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>PREVIOUS PROJECT ({prevProject.number})</span>
          </div>
          <div className="text-base font-serif-editorial text-[#171717] font-bold group-hover:text-[#444444] transition-colors">
            {prevProject.title}
          </div>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="p-5 rounded-2xl bg-[#E7E4DC] hover:bg-[#DDD9CF] border border-[rgba(23,23,23,0.1)] hover:border-[rgba(23,23,23,0.2)] transition-all flex flex-col justify-between space-y-2 sm:items-end text-left sm:text-right group shadow-xs"
        >
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#77736C]">
            <span>NEXT PROJECT ({nextProject.number})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-base font-serif-editorial text-[#171717] font-bold group-hover:text-[#444444] transition-colors">
            {nextProject.title}
          </div>
        </Link>
      </div>

      {/* Bottom Return Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-[rgba(23,23,23,0.1)] text-xs font-mono-code text-[#77736C]">
        <Link href="/#projects" className="hover:text-[#171717] transition-colors">
          &larr; Return to All Projects
        </Link>
        <a
          href="/#contact"
          className="text-[#171717] hover:underline transition-colors font-semibold"
        >
          Discuss Project Deployment &rarr;
        </a>
      </div>
    </div>
  );
}
