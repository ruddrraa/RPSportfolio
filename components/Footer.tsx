"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Copy, Check, ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="mt-24 pt-16 pb-28 md:pb-12 border-t border-[#222222] relative overflow-hidden">
      {/* Background Arc Accent (Design 2 Signature) */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full border border-white/[0.03] pointer-events-none translate-x-1/3 translate-y-1/3" />

      {/* Chapter Marker */}
      <div className="flex items-center justify-between mb-12 border-b border-[#222222]/60 pb-4">
        <div className="font-mono-code text-xs text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
          <span>CHAPTER 07 // CONTACT & COLLABORATION</span>
        </div>
        <div className="font-mono-code text-xs text-[#777777]">
          // Connect Channels
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Headline & Direct Communication */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F5] font-editorial leading-[1.08]">
            Let’s build something <br />
            <span className="text-[#A6A6A6]">exceptional</span> together.
          </h2>

          <p className="text-sm sm:text-base text-[#A6A6A6] max-w-lg leading-relaxed">
            Available for select software engineering roles, computer vision pipelines, full-stack systems architecture, and AI product collaboration.
          </p>

          {/* Interactive Email Copy Pill */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[#161616] hover:bg-[#202020] border border-[#2B2B2B] hover:border-[#444444] transition-all cursor-pointer shadow-lg"
              title="Click to copy email address"
            >
              <Mail className="w-4 h-4 text-[#A6A6A6] group-hover:text-white transition-colors" />
              <span className="font-mono-code text-xs sm:text-sm text-[#F5F5F5]">
                {profile.email}
              </span>
              <span className="p-1 rounded-full bg-[#242424] text-[#A6A6A6] group-hover:text-white transition-colors">
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </span>
            </button>

            {copied && (
              <span className="font-mono-code text-xs text-emerald-400">
                &bull; Copied to clipboard!
              </span>
            )}
          </div>

          {/* Location & Metadata Note */}
          <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono-code text-[#777777]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#A6A6A6]" />
              <span>{profile.location}</span>
            </span>
            <span className="text-[#333333]">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#A6A6A6]" />
              <span>+91-8240005142</span>
            </span>
          </div>
        </div>

        {/* Right Links & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 h-full">
          <div className="space-y-4">
            <div className="font-mono-code text-xs text-[#777777] uppercase tracking-wider">
              Verified Profiles &amp; Direct Channels
            </div>
            <div className="flex flex-col gap-2.5 font-mono-code text-sm">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#242424] hover:border-[#383838] text-[#F5F5F5] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#A6A6A6] group-hover:text-white transition-colors" />
                  <span className="font-medium">GitHub</span>
                  <span className="text-xs text-[#777777]">/ruddrraa</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#242424] hover:border-[#383838] text-[#F5F5F5] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover:text-white transition-colors" />
                  <span className="font-medium">LinkedIn</span>
                  <span className="text-xs text-[#777777]">/in/rudrraaa</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={profile.socials.email}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#242424] hover:border-[#383838] text-[#F5F5F5] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                  <span className="font-medium">Direct Proton Email</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Colophon */}
          <div className="pt-6 border-t border-[#222222] text-xs font-mono-code text-[#666666] space-y-1">
            <div className="text-white font-medium">
              &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
            </div>
            <div>
              Handcrafted with Next.js 15, React 19, TypeScript, Tailwind CSS v4, Lenis &amp; Vanilla Three.js.
            </div>
          </div>
        </div>
      </div>

      {/* Docked Mobile Navigation Bar */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-50">
        <div className="flex items-center justify-around py-3 px-4 rounded-full bg-[#161616]/95 backdrop-blur-xl border border-[#333333] shadow-2xl font-mono-code text-xs text-[#A6A6A6]">
          <a href="/#perspective" className="hover:text-white transition-colors">
            About
          </a>
          <a href="/#expertise" className="hover:text-white transition-colors">
            Stack
          </a>
          <a href="/#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="/#experience" className="hover:text-white transition-colors">
            Exp
          </a>
          <a
            href="/#contact"
            className="text-black font-semibold bg-white px-3 py-1 rounded-full shadow"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
