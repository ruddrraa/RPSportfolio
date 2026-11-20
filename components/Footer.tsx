"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Copy, Check, ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch {
      // Graceful fallback to direct mailto trigger
      if (typeof window !== "undefined") {
        window.location.href = `mailto:${profile.email}`;
      }
    }
  };

  return (
    <footer id="contact" className="py-24 sm:py-32 border-t border-[#171717]/10 relative overflow-hidden bg-[#F2F0EA] text-[#171717] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#171717]/10">
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-[#171717] font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" aria-hidden="true" />
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl text-[#171717] font-bold leading-[0.95]">
              Let’s build something <br />
              <span className="font-serif-editorial italic font-normal text-[#171717]">durable together.</span>
            </h2>
          </div>

          <div className="text-xs font-mono-code text-[#77736C]">
            DIRECT CONTACT CHANNELS
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication & Pitch */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-lg text-[#77736C] max-w-xl font-sans leading-relaxed">
              Available for select software engineering roles, applied deep learning computer vision pipelines, full-stack systems architecture, and AI product collaboration.
            </p>

            {/* Interactive Email Copy Pill */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 px-7 py-4 rounded-full bg-[#171717] hover:bg-[#2A2A2A] text-[#F2F0EA] transition-all cursor-pointer shadow-md font-sans min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2F0EA]"
                title="Click to copy email address"
                aria-label="Copy email address rudrraaa@proton.me"
              >
                <Mail className="w-4 h-4 text-[#E7E4DC] group-hover:text-[#F2F0EA] transition-colors" aria-hidden="true" />
                <span className="font-mono-code text-xs sm:text-sm font-medium tracking-wide">
                  {profile.email}
                </span>
                <span className="p-1 rounded-full bg-white/15 text-[#F2F0EA] transition-colors">
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  )}
                </span>
              </button>

              {copied && (
                <span
                  className="font-mono-code text-xs text-[#171717] font-semibold flex items-center gap-1.5 animate-fade-in"
                  role="status"
                  aria-live="polite"
                >
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  Address copied to clipboard
                </span>
              )}
            </div>

            {/* Direct Phone & Location Strip */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono-code text-[#77736C] pt-2">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#171717]" aria-hidden="true" />
                <span>Kolkata, West Bengal</span>
              </span>
              <span className="text-[#171717]/20" aria-hidden="true">&bull;</span>
              <a
                href="tel:+918240005142"
                className="flex items-center gap-2 hover:text-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] rounded py-1"
                aria-label="Call +91 8240005142"
              >
                <Phone className="w-3.5 h-3.5 text-[#171717]" aria-hidden="true" />
                <span>+91-8240005142</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified Profiles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono-code text-xs text-[#77736C] uppercase tracking-wider pb-1">
              Verified Profiles &amp; Direct Channels
            </div>

            <div className="flex flex-col gap-3 font-sans">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-[#E7E4DC] hover:bg-[#DDD9CF] text-[#171717] border border-[#171717]/10 hover:border-[#171717]/25 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] min-h-[48px]"
                aria-label="GitHub profile /ruddrraa"
              >
                <div className="flex items-center gap-3.5">
                  <Github className="w-5 h-5 text-[#171717] transition-colors" />
                  <div>
                    <div className="font-medium text-sm text-[#171717]">GitHub</div>
                    <div className="text-xs text-[#77736C] font-mono-code">/ruddrraa</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#77736C] group-hover:text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-[#E7E4DC] hover:bg-[#DDD9CF] text-[#171717] border border-[#171717]/10 hover:border-[#171717]/25 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] min-h-[48px]"
                aria-label="LinkedIn profile /in/rudrraaa"
              >
                <div className="flex items-center gap-3.5">
                  <Linkedin className="w-5 h-5 text-[#0A66C2] transition-colors" />
                  <div>
                    <div className="font-medium text-sm text-[#171717]">LinkedIn</div>
                    <div className="text-xs text-[#77736C] font-mono-code">/in/rudrraaa</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#77736C] group-hover:text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Baseline */}
        <div className="pt-8 border-t border-[#171717]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#77736C]">
          <div>
            &copy; {new Date().getFullYear()} Rudra Pratap Singh. Crafted with Next.js 15, React 19 &amp; Three.js.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#77736C]">
            <span>Typography: Cormorant Garamond &bull; Plus Jakarta Sans &bull; JetBrains Mono</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
