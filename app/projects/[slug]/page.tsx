import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { ArrowLeft, ExternalLink, Github, ShieldCheck, CheckCircle2 } from "lucide-react";
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

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Rudra Pratap Singh`,
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

  return (
    <div className="py-8 md:py-16 space-y-16 max-w-5xl mx-auto">
      {/* Back navigation */}
      <div>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#2B2B2B] font-mono-code text-xs text-[#A6A6A6] hover:text-white transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-3xl md:text-5xl font-extrabold text-white">
            {project.number}
          </span>
          <span className="h-6 w-[1px] bg-[#333333]" />
          <span className="font-mono-code text-xs text-[#A6A6A6] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <div>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-[#F5F5F5]">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-[#A6A6A6] mt-2 font-medium">
            {project.subtitle}
          </p>
          {project.client && (
            <div className="mt-3 text-sm font-mono-code text-emerald-400">
              Client: {project.client}
            </div>
          )}
        </div>

        {/* Impact Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.impactPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-mono-code text-[#E5E5E5]"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#E5E5E5] transition-all"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#222222] border border-[#2B2B2B] text-white font-mono-code text-xs transition-all"
            >
              <Github className="w-4 h-4 text-[#A6A6A6]" />
              <span>View Repository</span>
            </a>
          )}
        </div>
      </div>

      {/* Visual Mockup Staging */}
      <div className="p-6 md:p-12 rounded-3xl bg-[#141414] border border-[#222222] flex justify-center">
        <DeviceFrame
          type={project.deviceType}
          title={project.title}
          image={project.image}
          accentColor={project.accentColor}
        />
      </div>

      {/* Deep-Dive Case Study Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Challenge */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#141414] border border-[#222222] space-y-3">
          <div className="font-mono-code text-xs text-amber-400 uppercase tracking-wider">
            01 • The Problem & Challenge
          </div>
          <h3 className="text-xl font-bold text-white">Operational Requirements</h3>
          <p className="text-sm text-[#A6A6A6] leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#141414] border border-[#222222] space-y-3">
          <div className="font-mono-code text-xs text-emerald-400 uppercase tracking-wider">
            02 • The Architectural Solution
          </div>
          <h3 className="text-xl font-bold text-white">System Design & Delivery</h3>
          <p className="text-sm text-[#A6A6A6] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Architecture Deep Dive */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#141414] border border-[#222222] space-y-4">
        <div className="font-mono-code text-xs text-blue-400 uppercase tracking-wider">
          03 • System Architecture & Data Flow
        </div>
        <h3 className="text-xl font-bold text-white">Technical Implementation Details</h3>
        <p className="text-sm text-[#A6A6A6] leading-relaxed">
          {project.architecture}
        </p>

        {/* Key Features List */}
        <div className="pt-4 space-y-2.5">
          <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
            Key Verified Capabilities:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#E5E5E5]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#141414] border border-[#222222] space-y-4">
        <div className="font-mono-code text-xs text-[#A6A6A6] uppercase tracking-wider">
          04 • Technologies & Libraries
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono-code text-[#E5E5E5]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-[#222222]">
        <Link
          href="/#projects"
          className="text-xs font-mono-code text-[#A6A6A6] hover:text-white transition-colors"
        >
          ← Return to all projects
        </Link>
        <a
          href="/#contact"
          className="text-xs font-mono-code text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Discuss this project →
        </a>
      </div>
    </div>
  );
}
