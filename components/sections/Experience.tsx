"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import { ChevronDown, CheckCircle2 } from "lucide-react";

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 sm:py-32 w-full bg-[#0A0A0A] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>CHRONOLOGY &bull; [03]</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-white font-normal leading-[0.98]">
              Engineering Roles <br />
              <span className="text-[#888888]">&amp; Verified History</span>
            </h2>
          </div>

          <div className="text-xs font-mono-code text-[#777777]">
            // VERIFIED INDUSTRY CHRONOLOGY
          </div>
        </div>

        {/* Editorial Table (Design 2 format) */}
        <div className="rounded-[28px] sm:rounded-[36px] border border-white/10 overflow-hidden bg-[#121212] shadow-2xl">
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-12 py-4 px-8 border-b border-white/[0.08] bg-[#161616] font-mono-code text-xs uppercase tracking-wider text-[#777777]">
            <div className="col-span-3">Timeline</div>
            <div className="col-span-3">Organization</div>
            <div className="col-span-3">Role</div>
            <div className="col-span-3">Focus / Technologies</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/[0.06]">
            {experiences.map((item) => {
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className="transition-colors hover:bg-white/[0.02]"
                >
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-6 md:px-8 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center cursor-pointer group"
                  >
                    {/* Timeline */}
                    <div className="md:col-span-3 font-mono-code text-xs text-emerald-400 font-semibold flex items-center justify-between md:justify-start gap-2">
                      <span>{item.period}</span>
                      <span className="md:hidden text-[#777777]">
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </div>

                    {/* Organization */}
                    <div className="md:col-span-3 font-serif-editorial text-xl sm:text-2xl text-white font-normal group-hover:text-emerald-400 transition-colors">
                      {item.organization}
                    </div>

                    {/* Role */}
                    <div className="md:col-span-3 text-sm text-[#CCCCCC] font-medium font-sans">
                      {item.role}
                    </div>

                    {/* Focus / Technologies */}
                    <div className="md:col-span-3 text-xs text-[#888888] font-sans leading-relaxed flex items-center justify-between">
                      <span>{item.focus}</span>
                      <span className="hidden md:inline-block text-[#555555] group-hover:text-white transition-colors ml-2">
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
                    <div className="px-6 pb-6 md:px-8 md:pb-6 pt-2 border-t border-white/[0.04] bg-[#0E0E0E]/80 space-y-3 font-sans">
                      <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
                        Core Contributions &amp; Verified Delivery:
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {item.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-xl bg-[#141414] border border-white/[0.06] text-xs text-[#CCCCCC] leading-relaxed flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
