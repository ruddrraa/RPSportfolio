"use client";

import { achievements } from "@/data/achievements";
import { Award, FileText, Globe, Trophy, Sparkles } from "lucide-react";

export function Research() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Research":
        return <FileText className="w-4 h-4 text-[#171717]" />;
      case "Hackathon":
        return <Trophy className="w-4 h-4 text-[#171717]" />;
      case "AI Competition":
        return <Sparkles className="w-4 h-4 text-[#171717]" />;
      case "International Program":
        return <Globe className="w-4 h-4 text-[#171717]" />;
      default:
        return <Award className="w-4 h-4 text-[#171717]" />;
    }
  };

  const researchItem = achievements.find((a) => a.category === "Research");
  const otherAchievements = achievements.filter((a) => a.category !== "Research");

  return (
    <section id="research" className="pt-28 sm:pt-36 pb-24 sm:pb-32 w-full bg-[#F2F0EA] border-t border-[rgba(23,23,23,0.08)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(23,23,23,0.08)]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-[#171717] font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
              <span>RESEARCH &amp; HONORS</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#171717] font-bold leading-[0.98]">
              Peer-Reviewed Research <br />
              <span className="font-serif-editorial italic font-normal text-[#171717]">&amp; Competitive Honors</span>
            </h2>
          </div>

          <div className="text-xs font-mono-code text-[#77736C]">
            PEER-REVIEWED PUBLICATION &bull; CIIR 2026
          </div>
        </div>

        {/* Featured Research Publication Card */}
        {researchItem && (
          <div className="p-8 sm:p-12 rounded-[28px] sm:rounded-[36px] bg-[#E7E4DC] border border-[rgba(23,23,23,0.12)] relative overflow-hidden shadow-sm space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="p-2 rounded-xl bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)] text-[#171717]">
                    <FileText className="w-5 h-5" />
                  </span>
                  <span className="font-mono-code text-xs text-[#171717] font-semibold bg-[#FAF8F5] px-3.5 py-1 rounded-full border border-[rgba(23,23,23,0.08)]">
                    PEER-REVIEWED PUBLICATION &bull; CIIR 2026
                  </span>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-4xl text-[#171717] font-bold leading-[1.1]">
                  Q-Sentry: A Semantic-Quantum Ensemble for Ethical Classification
                </h3>

                <p className="text-sm sm:text-base text-[#77736C] font-sans leading-relaxed">
                  {researchItem.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-[#77736C] pt-2">
                  <span>
                    Author Role: <strong className="text-[#171717] font-semibold">Second Author</strong>
                  </span>
                  <span className="text-[#171717]/20">&bull;</span>
                  <span>
                    Conference: <strong className="text-[#171717] font-semibold">CIIR 2026</strong>
                  </span>
                  <span className="text-[#171717]/20">&bull;</span>
                  <span>
                    Domain: <strong className="text-[#171717] font-semibold">Ethical Classification &amp; Quantum Machine Learning</strong>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 font-mono-code text-xs lg:w-80 shrink-0">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)] space-y-1">
                  <div className="text-[10px] text-[#77736C] uppercase tracking-wider">ACCEPTANCE STATUS</div>
                  <div className="text-[#171717] font-semibold">
                    Peer-Reviewed Paper Accepted, CIIR 2026 (Second Author)
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)] space-y-1">
                  <div className="text-[10px] text-[#77736C] uppercase tracking-wider">PRIMARY FOCUS</div>
                  <div className="text-[#171717] font-semibold">
                    Semantic-Quantum Ensemble Modeling
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Competitive Honors Grid */}
        <div className="space-y-6">
          <div className="text-xs font-mono-code text-[#77736C] uppercase tracking-wider">
            Verified Competitive Honors &amp; International Programs:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherAchievements.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#E7E4DC] border border-[rgba(23,23,23,0.08)] hover:border-[rgba(23,23,23,0.2)] transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(item.category)}
                    <span className="text-xs font-mono-code text-[#77736C]">
                      {item.organization} &bull; {item.year}
                    </span>
                  </div>
                  <span className="text-xs font-mono-code text-[#171717] px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)] font-semibold">
                    {item.badge}
                  </span>
                </div>

                <h4 className="font-serif-editorial text-2xl text-[#171717] font-bold group-hover:text-[#444444] transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#77736C] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
