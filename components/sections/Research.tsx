"use client";

import { achievements } from "@/data/achievements";
import { Award, FileText, Globe, Trophy, Sparkles } from "lucide-react";

export function Research() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Research":
        return <FileText className="w-4 h-4 text-emerald-400" />;
      case "Hackathon":
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case "AI Competition":
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case "International Program":
        return <Globe className="w-4 h-4 text-blue-400" />;
      default:
        return <Award className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="research" className="py-20 border-t border-[#222222]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="font-mono-code text-xs text-[#A6A6A6] mb-3 flex items-center gap-2">
            <span className="text-emerald-400">#</span>
            <span>... /Research & Achievements ...</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F5F5]">
            Research & Honors
          </h2>
        </div>
        <p className="text-xs md:text-sm font-mono-code text-[#777777] max-w-sm">
          // Peer-reviewed publications, competitive hackathons & academic delegations.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#333333] transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-[#1D1D1D] border border-[#2A2A2A]">
                  {getCategoryIcon(item.category)}
                </span>
                <span className="font-mono-code text-[11px] text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
                  {item.badge}
                </span>
              </div>

              {/* Title & Role */}
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-mono-code text-[#A6A6A6] mt-0.5">
                  {item.role} • {item.year}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#888888] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Organization Footer */}
            <div className="pt-3 border-t border-[#1F1F1F] text-[11px] font-mono-code text-[#666666]">
              {item.organization}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
