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
    <footer id="contact" className="py-24 sm:py-32 border-t border-white/[0.08] relative overflow-hidden bg-[#0A0A0A] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>TRANSMISSION &bull; [05]</span>
            </div>
            <h2 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl text-white font-normal leading-[0.95]">
              Let’s build something <br />
              <span className="text-[#888888]">durable together.</span>
            </h2>
          </div>

          <div className="text-xs font-mono-code text-[#777777]">
            // DIRECT TRANSMISSION CHANNEL
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication & Pitch */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-lg text-[#999999] max-w-xl font-sans leading-relaxed">
              Available for select software engineering roles, applied deep learning computer vision pipelines, full-stack systems architecture, and AI product collaboration.
            </p>

            {/* Interactive Email Copy Pill */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 px-6 py-4 rounded-full bg-[#161616] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all cursor-pointer shadow-xl font-sans"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4 text-[#888888] group-hover:text-black transition-colors" />
                <span className="font-mono-code text-xs sm:text-sm">
                  {profile.email}
                </span>
                <span className="p-1 rounded-full bg-white/10 group-hover:bg-black/10 text-white group-hover:text-black transition-colors">
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 group-hover:text-black" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </span>
              </button>

              {copied && (
                <span className="font-mono-code text-xs text-emerald-400 animate-fade-in">
                  &bull; Address copied to clipboard
                </span>
              )}
            </div>

            {/* Direct Phone & Location Strip */}
            <div className="flex flex-wrap gap-6 text-xs font-mono-code text-[#777777] pt-2">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A6A6A6]" />
                <span>{profile.location}</span>
              </span>
              <span className="text-white/20">&bull;</span>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A6A6A6]" />
                <span>+91-8240005142</span>
              </span>
            </div>
          </div>

          {/* Right Column: Verified Profiles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono-code text-xs text-[#777777] uppercase tracking-wider pb-1">
              Verified Profiles &amp; Direct Channels
            </div>

            <div className="flex flex-col gap-3 font-sans">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-[#141414] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <Github className="w-5 h-5 text-[#888888] group-hover:text-black transition-colors" />
                  <div>
                    <div className="font-medium text-sm">GitHub</div>
                    <div className="text-xs text-[#777777] font-mono-code group-hover:text-black/60">/ruddrraa</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-[#141414] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:text-black transition-colors" />
                  <div>
                    <div className="font-medium text-sm">LinkedIn</div>
                    <div className="text-xs text-[#777777] font-mono-code group-hover:text-black/60">/in/rudrraaa</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Baseline */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#666666]">
          <div>
            &copy; {new Date().getFullYear()} Rudra Pratap Singh. Built with Next.js 15 &amp; Vanilla Three.js.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% FACTUAL &bull; ZERO FABRICATED DATA</span>
            <span className="text-emerald-400">STATUS: PRODUCTION LIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
