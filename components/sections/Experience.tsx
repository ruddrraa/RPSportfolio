"use client";

import { useState, useEffect, useRef } from "react";
import { experiences } from "@/data/experience";
import { ChevronDown, CheckCircle2, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id);
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const academicGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
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
      }

      if (academicGroupRef.current) {
        gsap.from(academicGroupRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: academicGroupRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (timelineRef.current) {
        Array.from(timelineRef.current.children).forEach((child, i) => {
          gsap.from(child, {
            y: 35,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: child,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      className="pt-28 sm:pt-36 pb-24 sm:pb-32 w-full bg-[#F2F0EA] border-t border-[rgba(23,23,23,0.08)] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-16">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(23,23,23,0.08)] will-change-transform"
        >
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-[#171717] font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
              <span>CAREER CHRONOLOGY</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#171717] font-bold leading-[0.98]">
              Engineering Roles <br />
              <span className="font-serif-editorial italic font-normal text-[#171717]">&amp; Academic Foundation</span>
            </h2>
          </div>

          <div className="text-xs font-mono-code text-[#77736C]">
            PROFESSIONAL ROLES &bull; 2024–2028
          </div>
        </div>

        {/* Academic Foundation Feature Strip (University & School Education Chronology) */}
        <div ref={academicGroupRef} className="space-y-4 will-change-transform">
          {/* Main Undergraduate Degree Card */}
          <div className="p-8 sm:p-10 rounded-[28px] sm:rounded-[36px] bg-[#E7E4DC] border border-[rgba(23,23,23,0.12)] space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2 font-mono-code text-xs text-[#171717]">
                  <GraduationCap className="w-4 h-4" />
                  <span className="tracking-wider uppercase font-semibold">HIGHER EDUCATION &bull; 2024–2028</span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#171717] font-bold">
                  Bachelor of Technology in Computer Science &amp; Business Systems (B.Tech CSBS)
                </h3>
                <p className="text-sm text-[#77736C] font-sans leading-relaxed">
                  Sister Nivedita University, Kolkata (2024–2028). Comprehensive curriculum bridging core computing algorithms, computer vision pipelines, and distributed databases with corporate technology management and enterprise business strategy.
                </p>
              </div>

              <div className="flex flex-col gap-2 font-mono-code text-xs lg:w-72 shrink-0">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)]">
                  <div className="text-[10px] text-[#77736C] uppercase">Institution</div>
                  <div className="text-[#171717] font-semibold mt-0.5">Sister Nivedita University, Kolkata</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)]">
                  <div className="text-[10px] text-[#77736C] uppercase">Tenure &bull; Status</div>
                  <div className="text-[#171717] font-semibold mt-0.5">2024–2028 (Undergraduate CSBS)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary & High School Education Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Higher Secondary (10+2) */}
            <div className="p-6 sm:p-7 rounded-[24px] sm:rounded-[28px] bg-[#E7E4DC] border border-[rgba(23,23,23,0.1)] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-code text-[#77736C]">
                <span className="uppercase tracking-wider font-semibold text-[#171717]">HIGHER SECONDARY (CLASS XII)</span>
                <span>2022–2024</span>
              </div>
              <h4 className="font-serif-editorial text-xl sm:text-2xl text-[#171717] font-bold">
                Senior Secondary &bull; Science (PCM &amp; CS)
              </h4>
              <p className="text-xs sm:text-sm text-[#77736C] font-sans leading-relaxed">
                Physics, Chemistry, Mathematics, and Computer Science. Rigorous academic foundation in mathematical reasoning, advanced calculus, and algorithm design.
              </p>
              <div className="pt-2 text-[11px] font-mono-code text-[#171717] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                <span>Kolkata, WB &bull; Pure Science Stream</span>
              </div>
            </div>

            {/* Secondary Examination (10th) */}
            <div className="p-6 sm:p-7 rounded-[24px] sm:rounded-[28px] bg-[#E7E4DC] border border-[rgba(23,23,23,0.1)] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-code text-[#77736C]">
                <span className="uppercase tracking-wider font-semibold text-[#171717]">SECONDARY EDUCATION (CLASS X)</span>
                <span>Completed 2022</span>
              </div>
              <h4 className="font-serif-editorial text-xl sm:text-2xl text-[#171717] font-bold">
                Secondary School Board Examination
              </h4>
              <p className="text-xs sm:text-sm text-[#77736C] font-sans leading-relaxed">
                Comprehensive curriculum across sciences, advanced mathematics, social sciences, and computer applications. Graduated with academic excellence.
              </p>
              <div className="pt-2 text-[11px] font-mono-code text-[#171717] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                <span>Kolkata, WB &bull; Foundational Sciences</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Chronology Table */}
        <div className="rounded-[28px] sm:rounded-[36px] border border-[rgba(23,23,23,0.12)] overflow-hidden bg-[#E7E4DC] shadow-sm">
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-12 py-4 px-8 border-b border-[rgba(23,23,23,0.08)] bg-[#DDD9CF]/50 font-mono-code text-xs uppercase tracking-wider text-[#77736C]">
            <div className="col-span-3">Timeline</div>
            <div className="col-span-3">Organization</div>
            <div className="col-span-3">Role</div>
            <div className="col-span-3">Focus / Technologies</div>
          </div>

          {/* Rows */}
          <div ref={timelineRef} className="divide-y divide-[rgba(23,23,23,0.08)]">
            {experiences.map((item) => {
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className="transition-colors hover:bg-[#FAF8F5]/50"
                >
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-6 md:px-8 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center cursor-pointer group"
                  >
                    {/* Timeline */}
                    <div className="md:col-span-3 font-mono-code text-xs text-[#171717] font-bold flex items-center justify-between md:justify-start gap-2">
                      <span>{item.period}</span>
                      <span className="md:hidden text-[#77736C]">
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </div>

                    {/* Organization */}
                    <div className="md:col-span-3 font-serif-editorial text-xl sm:text-2xl text-[#171717] font-bold group-hover:text-[#444444] transition-colors">
                      {item.organization}
                    </div>

                    {/* Role */}
                    <div className="md:col-span-3 text-sm text-[#171717] font-medium font-sans">
                      {item.role}
                    </div>

                    {/* Focus / Technologies */}
                    <div className="md:col-span-3 text-xs text-[#77736C] font-sans leading-relaxed flex items-center justify-between">
                      <span>{item.focus}</span>
                      <span className="hidden md:inline-block text-[#9E998F] group-hover:text-[#171717] transition-colors ml-2">
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </div>
                  </div>

                  {/* Expanded Detail Drawer */}
                  {isExpanded && (
                    <div className="px-6 pb-6 md:px-8 md:pb-6 pt-2 border-t border-[rgba(23,23,23,0.06)] bg-[#FAF8F5]/80 space-y-3 font-sans">
                      <div className="text-xs font-mono-code text-[#77736C] uppercase tracking-wider">
                        Core Contributions &amp; Verified Delivery:
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {item.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-xl bg-[#E7E4DC] border border-[rgba(23,23,23,0.06)] text-xs text-[#171717] leading-relaxed flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#171717] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
