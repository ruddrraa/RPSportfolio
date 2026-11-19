"use client";

import { achievements } from "@/data/achievements";
import { Award, FileText, Globe, Trophy, Sparkles, ExternalLink } from "lucide-react";

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

  const researchItem = achievements.find((a) => a.category === "Research");
  const otherAchievements = achievements.filter((a) => a.category !== "Research");

  return (
    <section id="research" className="py-24 border-t border-[#222222] relative">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between mb-12 border-b border-[#222222]/60 pb-4">
        <div className="font-mono-code text-xs text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
          <span>CHAPTER 06 // RESEARCH PUBLICATIONS & HONORS</span>
        </div>
        <div className="font-mono-code text-xs text-[#777777]">
          // Peer-Reviewed Literature & Awards
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5] font-editorial">
            Research & Honors
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A6A6A6] max-w-2xl leading-relaxed">
            Peer-reviewed research publication accepted at CIIR 2026, competitive hackathon championship titles, and international academic representation.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono-code text-xs text-[#777777]">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>VERIFIED CITATIONS</span>
        </div>
      </div>

      {/* Featured Research Publication Banner */}
      {researchItem && (
        <div className="mb-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#161616] via-[#141414] to-[#121212] border border-[#2A2A2A] relative overflow-hidden group shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="font-mono-code text-xs text-emerald-400 font-semibold bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                  PEER-REVIEWED PUBLICATION &bull; CIIR 2026
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-editorial">
                Q-Sentry: A Semantic-Quantum Ensemble for Ethical Classification
              </h3>

              <div className="text-xs sm:text-sm font-mono-code text-[#A6A6A6] flex flex-wrap gap-x-4 gap-y-1">
                <span className="text-white font-semibold">Author Role: Second Author (Co-Author)</span>
                <span>Conference: CIIR 2026</span>
                <span>Track: Intelligent &amp; Innovative Research</span>
              </div>

              <p className="text-sm text-[#888888] leading-relaxed pt-1">
                {researchItem.description}
              </p>
            </div>

            <div className="shrink-0">
              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2C2C2C] space-y-1 text-center font-mono-code text-xs">
                <div className="text-emerald-400 font-bold text-sm">STATUS: ACCEPTED</div>
                <div className="text-[#888888]">CIIR 2026 Proceedings</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Competitive Honors & International Exchange */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherAchievements.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-7 rounded-3xl bg-[#141414] border border-[#242424] hover:border-[#383838] transition-all duration-300 flex flex-col justify-between space-y-5 group shadow-lg"
          >
            <div className="space-y-4">
              {/* Category Icon and Badge */}
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-[#1C1C1C] border border-[#2B2B2B]">
                  {getCategoryIcon(item.category)}
                </span>
                <span className="font-mono-code text-[11px] text-emerald-400 bg-emerald-400/10 px-3 py-0.5 rounded-full border border-emerald-400/20 font-semibold">
                  {item.badge}
                </span>
              </div>

              {/* Title & Organization */}
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-editorial">
                  {item.title}
                </h3>
                <div className="text-xs font-mono-code text-[#A6A6A6] mt-1">
                  {item.role} &bull; {item.year}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Organization Footer */}
            <div className="pt-4 border-t border-[#1F1F1F] text-[11px] font-mono-code text-[#666666]">
              {item.organization}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
