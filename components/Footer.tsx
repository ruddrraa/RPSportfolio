"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { Copy, Check, ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Footer() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      if (headerRef.current) gsap.set(headerRef.current, { opacity: 1, y: 0 });
      if (contentRef.current) gsap.set(contentRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      // AOS-style smooth scroll reveal that triggers as soon as footer enters viewport and stays permanently visible
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 95%",
              once: true,
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 95%",
              once: true,
            },
          }
        );
      }
    }, footer);

    // Guaranteed visibility safety fallback: ensure contact channels are never stuck hidden across route transitions
    const safetyTimer = setTimeout(() => {
      if (headerRef.current) gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.3 });
      if (contentRef.current) gsap.to(contentRef.current, { opacity: 1, y: 0, duration: 0.3 });
    }, 900);

    return () => {
      clearTimeout(safetyTimer);
      ctx.revert();
    };
  }, [pathname]);

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
    <footer
      id="contact"
      ref={footerRef}
      className="py-20 sm:py-28 md:py-32 border-t border-[#171717]/10 relative overflow-hidden bg-[#F2F0EA] text-[#171717] w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#171717]/10 will-change-transform opacity-100"
        >
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-[#171717] font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" aria-hidden="true" />
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#171717] font-bold leading-[0.95]">
              Let’s build something <br />
              <span className="font-serif-editorial italic font-normal text-[#171717]">durable together.</span>
            </h2>
          </div>

          <div className="text-xs font-mono-code text-[#77736C]">
            DIRECT CONTACT CHANNELS
          </div>
        </div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start will-change-transform opacity-100"
        >
          {/* Left Column: Direct Communication & Pitch */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-lg text-[#4A4742] max-w-xl font-sans leading-relaxed">
              Available for select software engineering roles, applied deep learning computer vision pipelines, full-stack systems architecture, and AI product collaboration.
            </p>

            {/* Interactive Email Copy Pill */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#171717] hover:bg-[#2A2A2A] text-[#FAF8F5] transition-all cursor-pointer shadow-md font-sans min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2F0EA]"
                title="Click to copy email address"
                aria-label="Copy email address rudrraaa@proton.me"
              >
                <Mail className="w-4 h-4 text-[#FAF8F5]" aria-hidden="true" />
                <span className="font-mono-code text-xs sm:text-sm font-medium tracking-wide">
                  {profile.email}
                </span>
                <span className="p-1 rounded-full bg-white/20 text-[#FAF8F5] transition-colors">
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
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono-code text-[#4A4742] pt-2">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#171717]" aria-hidden="true" />
                <span className="text-[#171717] font-medium">Kolkata, West Bengal</span>
              </span>
              <span className="text-[#171717]/20" aria-hidden="true">&bull;</span>
              <a
                href="tel:+918240005142"
                className="flex items-center gap-2 text-[#171717] hover:text-[#444444] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] rounded py-1"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#E7E4DC] hover:bg-[#DDD9CF] text-[#171717] border border-[#171717]/10 hover:border-[#171717]/25 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] min-h-[48px]"
                aria-label="GitHub profile /ruddrraa"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#171717] transition-colors" />
                  <div>
                    <div className="font-medium text-xs text-[#171717]">GitHub</div>
                    <div className="text-[11px] text-[#77736C] font-mono-code">/ruddrraa</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#77736C] group-hover:text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#E7E4DC] hover:bg-[#DDD9CF] text-[#171717] border border-[#171717]/10 hover:border-[#171717]/25 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] min-h-[48px]"
                aria-label="LinkedIn profile /in/rudrraaa"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#171717] transition-colors" />
                  <div>
                    <div className="font-medium text-xs text-[#171717]">LinkedIn</div>
                    <div className="text-[11px] text-[#77736C] font-mono-code">/in/rudrraaa</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#77736C] group-hover:text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={profile.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#E7E4DC] hover:bg-[#DDD9CF] text-[#171717] border border-[#171717]/10 hover:border-[#171717]/25 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] min-h-[48px]"
                aria-label="X profile @RudraPrSing"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current text-[#171717]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <div>
                    <div className="font-medium text-xs text-[#171717]">X / Twitter</div>
                    <div className="text-[11px] text-[#77736C] font-mono-code">@RudraPrSing</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#77736C] group-hover:text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#E7E4DC] hover:bg-[#DDD9CF] text-[#171717] border border-[#171717]/10 hover:border-[#171717]/25 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] min-h-[48px]"
                aria-label="Instagram profile @_rudrraa"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-[#171717] transition-colors" />
                  <div>
                    <div className="font-medium text-xs text-[#171717]">Instagram</div>
                    <div className="text-[11px] text-[#77736C] font-mono-code">@_rudrraa</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#77736C] group-hover:text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Signature & Baseline */}
        <div className="pt-10 sm:pt-16 border-t border-[#171717]/10 space-y-6">
          {/* Monumental Editorial Signature matching Hero composition */}
          <div className="select-none overflow-visible">
            <div className="font-instrument-cursive font-serif-editorial text-[clamp(2.4rem,7vw,6.5rem)] text-[#171717] leading-[0.92] tracking-[-0.02em] flex flex-nowrap items-baseline gap-x-2 sm:gap-x-4 whitespace-nowrap">
              <span className="text-[#171717] inline-block">Rudra</span>
              <span className="text-[#77736C] inline-block font-instrument-cursive italic">Pratap</span>
              <span className="text-[#171717] inline-block">Singh</span>
            </div>
          </div>

          {/* Minimal Baseline */}
          <div className="pt-6 border-t border-[#171717]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code text-[#77736C]">
            <div>
              &copy; {new Date().getFullYear()} Rudra Pratap Singh.
            </div>
            <div className="flex items-center gap-1.5 text-[#77736C]">
              <MapPin className="w-3.5 h-3.5 text-[#171717]" aria-hidden="true" />
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
