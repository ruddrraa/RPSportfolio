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
  Sparkles,
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
    <div className="py-8 md:py-16 space-y-16 max-w-5xl mx-auto">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex items-center justify-between border-b border-[#222222]/80 pb-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616] hover:bg-[#202020] border border-[#2B2B2B] font-mono-code text-xs text-[#A6A6A6] hover:text-white transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        <div className="font-mono-code text-xs text-[#777777]">
          ... /Case Study • [03.{project.number}]
        </div>
      </div>

      {/* Case Study Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-3xl md:text-6xl font-extrabold text-white">
            {project.number}
          </span>
          <span className="h-8 w-[1px] bg-[#333333]" />
          <span className="font-mono-code text-xs text-[#A6A6A6] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F5F5] font-editorial">
            {project.title}
          </h1>
          <p className="text-lg md:text-2xl text-[#A6A6A6] mt-2 font-medium">
            {project.subtitle}
          </p>
          {project.client && (
            <div className="mt-3 text-xs sm:text-sm font-mono-code text-emerald-400">
              Enterprise Client: {project.client}
            </div>
          )}
        </div>

        {/* Impact Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.impactPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181818] border border-[#2B2B2B] text-xs font-mono-code text-[#E5E5E5]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#E5E5E5] transition-all shadow-lg shadow-white/5"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#2B2B2B] text-white font-mono-code text-xs transition-all"
            >
              <Github className="w-4 h-4 text-[#A6A6A6]" />
              <span>View Verified Repository</span>
            </a>
          )}
        </div>
      </div>

      {/* Visual 2D Interface Staging (No 3D laptops!) */}
      <div className="p-6 md:p-10 rounded-3xl bg-[#141414] border border-[#222222] shadow-2xl">
        <div className="text-xs font-mono-code text-[#777777] mb-4 flex items-center justify-between">
          <span>SYSTEM ARCHITECTURE & LIVE TELEMETRY</span>
          <span className="text-emerald-400">PRODUCTION DEPLOYMENT</span>
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
        <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-[#222222] space-y-4">
          <div className="font-mono-code text-xs text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span>01 &bull; Operational Challenge</span>
          </div>
          <h3 className="text-xl font-bold text-white font-editorial">
            The Problem & Requirements
          </h3>
          <p className="text-sm text-[#A6A6A6] leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-[#222222] space-y-4">
          <div className="font-mono-code text-xs text-emerald-400 uppercase tracking-wider flex items-center gap-2">
            <span>02 &bull; Architectural Solution</span>
          </div>
          <h3 className="text-xl font-bold text-white font-editorial">
            System Design & Delivery
          </h3>
          <p className="text-sm text-[#A6A6A6] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Architecture Deep Dive & Key Capabilities */}
      <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#141414] border border-[#222222] space-y-6">
        <div className="font-mono-code text-xs text-blue-400 uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4" />
          <span>03 &bull; System Architecture & Implementation Details</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-editorial">
          Technical Pipeline & Data Flow
        </h3>
        <p className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
          {project.architecture}
        </p>

        {/* Key Features List */}
        <div className="pt-4 border-t border-[#222222] space-y-3">
          <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
            Verified Production Features:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#171717] border border-[#262626] text-xs text-[#E5E5E5]"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-[#222222] space-y-4">
        <div className="font-mono-code text-xs text-[#A6A6A6] uppercase tracking-wider flex items-center gap-2">
          <Code2 className="w-4 h-4" />
          <span>04 &bull; Verified Technologies & Tooling</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-xs font-mono-code text-[#E5E5E5]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Next / Previous Project Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#222222]">
        <Link
          href={`/projects/${prevProject.slug}`}
          className="p-5 rounded-2xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] hover:border-[#333333] transition-all flex flex-col justify-between space-y-2 group"
        >
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#777777]">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>PREVIOUS PROJECT ({prevProject.number})</span>
          </div>
          <div className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
            {prevProject.title}
          </div>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="p-5 rounded-2xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] hover:border-[#333333] transition-all flex flex-col justify-between space-y-2 sm:items-end text-left sm:text-right group"
        >
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#777777]">
            <span>NEXT PROJECT ({nextProject.number})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
            {nextProject.title}
          </div>
        </Link>
      </div>

      {/* Bottom Return Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-[#222222]/80 text-xs font-mono-code text-[#777777]">
        <Link href="/#projects" className="hover:text-white transition-colors">
          &larr; Return to All Projects
        </Link>
        <a
          href="/#contact"
          className="text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Discuss Project Deployment &rarr;
        </a>
      </div>
    </div>
  );
}
