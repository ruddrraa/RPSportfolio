"use client";

import { experiences } from "@/data/experience";
import { Briefcase, ArrowUpRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-[#222222]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="font-mono-code text-xs text-[#A6A6A6] mb-3 flex items-center gap-2">
            <span className="text-emerald-400">#</span>
            <span>... /Work Experience ...</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F5F5]">
            Professional Experience
          </h2>
        </div>
        <p className="text-xs md:text-sm font-mono-code text-[#777777] max-w-sm">
          // Chronological engineering roles and internship contributions.
        </p>
      </div>

      {/* Editorial Table (Design 2 format) */}
      <div className="rounded-2xl border border-[#222222] overflow-hidden bg-[#141414]">
        {/* Table Header (Desktop) */}
        <div className="hidden md:grid grid-cols-12 py-3.5 px-6 border-b border-[#222222] bg-[#161616] font-mono-code text-xs uppercase tracking-wider text-[#777777]">
          <div className="col-span-3">Timeline</div>
          <div className="col-span-3">Organization</div>
          <div className="col-span-3">Role</div>
          <div className="col-span-3">Focus / Technologies</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#222222]">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="p-6 md:px-6 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center hover:bg-[#1A1A1A] transition-colors group"
            >
              {/* Timeline */}
              <div className="md:col-span-3 font-mono-code text-xs text-emerald-400 font-medium">
                {item.period}
              </div>

              {/* Organization */}
              <div className="md:col-span-3 font-bold text-base md:text-lg text-[#F5F5F5] group-hover:text-white transition-colors">
                {item.organization}
              </div>

              {/* Role */}
              <div className="md:col-span-3 text-sm text-[#A6A6A6] font-medium">
                {item.role}
              </div>

              {/* Focus / Technologies */}
              <div className="md:col-span-3 text-xs md:text-sm text-[#777777] leading-relaxed">
                {item.focus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
