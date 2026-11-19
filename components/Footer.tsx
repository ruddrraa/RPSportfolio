"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Copy, Check, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="mt-24 pt-16 pb-24 md:pb-12 border-t border-[#222222] relative overflow-hidden">
      {/* Background Arc Accent */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full border border-white/[0.03] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Headline */}
        <div className="lg:col-span-7 space-y-6">
          <div className="font-mono-code text-xs text-emerald-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>... /Contacts ...</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
            Let’s build something <br className="hidden md:inline" />
            <span className="text-[#A6A6A6]">remarkable</span> together.
          </h2>

          <p className="text-sm md:text-base text-[#A6A6A6] max-w-lg leading-relaxed">
            Interested in collaborating on intelligent AI systems, enterprise full-stack applications, or high-impact digital products? Feel free to reach out.
          </p>

          {/* Interactive Email Copy Pill */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#2E2E2E] hover:border-[#444444] transition-all cursor-pointer"
              title="Click to copy email address"
            >
              <Mail className="w-4 h-4 text-[#A6A6A6] group-hover:text-white transition-colors" />
              <span className="font-mono-code text-xs md:text-sm text-[#F5F5F5]">
                {profile.email}
              </span>
              <span className="p-1 rounded-full bg-[#262626] text-[#A6A6A6] group-hover:text-white transition-colors">
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </span>
            </button>

            {copied && (
              <span className="font-mono-code text-xs text-emerald-400 animate-fade-in">
                Copied to clipboard!
              </span>
            )}
          </div>
        </div>

        {/* Right Links & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 h-full">
          <div className="space-y-4">
            <div className="font-mono-code text-xs text-[#A6A6A6] uppercase tracking-wider">
              Connect Channels
            </div>
            <div className="flex flex-col gap-2.5 font-mono-code text-sm">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#161616] hover:bg-[#1E1E1E] border border-[#262626] hover:border-[#383838] text-[#F5F5F5] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#A6A6A6] group-hover:text-white" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white transition-colors" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#161616] hover:bg-[#1E1E1E] border border-[#262626] hover:border-[#383838] text-[#F5F5F5] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover:text-white" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white transition-colors" />
              </a>

              <a
                href={profile.socials.email}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#161616] hover:bg-[#1E1E1E] border border-[#262626] hover:border-[#383838] text-[#F5F5F5] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#A6A6A6] group-hover:text-white" />
                  <span>Send Direct Email</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Colophon */}
          <div className="pt-6 border-t border-[#222222] text-xs font-mono-code text-[#666666] space-y-1">
            <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
            <div className="text-[#555555]">
              Handcrafted with Next.js 15, React 19 & Tailwind CSS v4.
            </div>
          </div>
        </div>
      </div>

      {/* Docked Mobile Navigation Bar */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-50">
        <div className="flex items-center justify-around py-3 px-4 rounded-full bg-[#1A1A1A]/95 backdrop-blur-lg border border-[#333333] shadow-2xl font-mono-code text-xs text-[#A6A6A6]">
          <a href="/#about" className="hover:text-white transition-colors">About</a>
          <a href="/#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="/#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="/#contact" className="text-white font-medium bg-[#2B2B2B] px-3 py-1 rounded-full">Contact</a>
        </div>
      </div>
    </footer>
  );
}
