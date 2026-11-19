"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import { Briefcase, ChevronDown, CheckCircle2, Terminal } from "lucide-react";

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 border-t border-[#222222] relative">
      {/* Section Index Marker */}
      <div className="flex items-center justify-between mb-12 border-b border-[#222222]/60 pb-4">
        <div className="font-mono-code text-xs text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
          <span>... /Chronology • [04] Verified Roles</span>
        </div>
        <div className="font-mono-code text-xs text-[#777777]">
          // Chronological Roles
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5] font-editorial">
            Engineering Roles & Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A6A6A6] max-w-2xl leading-relaxed">
            Verified software engineering positions, development internships, and client-facing product delivery.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono-code text-xs text-[#777777]">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>VERIFIED CHRONOLOGY</span>
        </div>
      </div>

      {/* Editorial Table (Design 2 format) */}
      <div className="rounded-3xl border border-[#242424] overflow-hidden bg-[#141414] shadow-xl">
        {/* Table Header (Desktop) */}
        <div className="hidden md:grid grid-cols-12 py-4 px-8 border-b border-[#222222] bg-[#161616] font-mono-code text-xs uppercase tracking-wider text-[#777777]">
          <div className="col-span-3">Timeline</div>
          <div className="col-span-3">Organization</div>
          <div className="col-span-3">Role</div>
          <div className="col-span-3">Focus / Technologies</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#222222]">
          {experiences.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="transition-colors hover:bg-[#181818]/60"
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
                  <div className="md:col-span-3 font-bold text-lg text-[#F5F5F5] group-hover:text-white transition-colors font-editorial">
                    {item.organization}
                  </div>

                  {/* Role */}
                  <div className="md:col-span-3 text-sm text-[#CCCCCC] font-medium font-sans">
                    {item.role}
                  </div>

                  {/* Focus / Technologies */}
                  <div className="md:col-span-3 text-xs text-[#888888] leading-relaxed flex items-center justify-between">
                    <span>{item.focus}</span>
                    <span className="hidden md:inline-block text-[#555555] group-hover:text-[#A6A6A6] transition-colors ml-2">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </div>
                </div>

                {/* Expanded Details Panel */}
                {isExpanded && (
                  <div className="px-6 md:px-8 pb-6 pt-1 bg-[#121212]/80 border-t border-[#1E1E1E] space-y-3">
                    <div className="text-[11px] font-mono-code text-[#777777] uppercase tracking-wider">
                      Verified Accomplishments:
                    </div>
                    <div className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-[#CCCCCC]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
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
    </section>
  );
}
