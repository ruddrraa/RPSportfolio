"use client";

import { achievements } from "@/data/achievements";
import { Award, FileText, Globe, Trophy, Sparkles, ArrowUpRight } from "lucide-react";

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
    <section id="research" className="py-24 sm:py-32 w-full bg-[#0A0A0A] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>LITERATURE &bull; [04]</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-white font-normal leading-[0.98]">
              Peer-Reviewed Research <br />
              <span className="text-[#888888]">&amp; Competitive Honors</span>
            </h2>
          </div>

          <div className="text-xs font-mono-code text-[#777777]">
            // VERIFIED ACADEMIC &amp; COMPETITIVE CITATIONS
          </div>
        </div>

        {/* Featured Research Publication Banner */}
        {researchItem && (
          <div className="p-8 sm:p-12 rounded-[28px] sm:rounded-[36px] bg-[#121212] border border-white/10 relative overflow-hidden shadow-2xl space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <FileText className="w-5 h-5" />
                  </span>
                  <span className="font-mono-code text-xs text-emerald-400 font-semibold bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                    PEER-REVIEWED PUBLICATION &bull; CIIR 2026
                  </span>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-4xl text-white font-normal leading-[1.1]">
                  Q-Sentry: A Semantic-Quantum Ensemble for Ethical Classification
                </h3>

                <p className="text-sm sm:text-base text-[#999999] font-sans leading-relaxed">
                  {researchItem.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-[#777777] pt-1">
                  <span>Author Role: <strong className="text-white font-medium">Second Author</strong></span>
                  <span className="text-white/20">&bull;</span>
                  <span>Conference: <strong className="text-white font-medium">CIIR 2026</strong></span>
                  <span className="text-white/20">&bull;</span>
                  <span>Domain: <strong className="text-emerald-400 font-medium">Threat Intelligence &amp; Autonomous Verification</strong></span>
                </div>
              </div>

              <div className="flex flex-col gap-3 font-mono-code text-xs lg:w-72 shrink-0">
                <div className="p-4 rounded-2xl bg-[#161616] border border-white/[0.08] space-y-1">
                  <div className="text-[10px] text-[#777777]">ACCEPTANCE STATUS</div>
                  <div className="text-emerald-400 font-semibold">Accepted for Oral Presentation</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#161616] border border-white/[0.08] space-y-1">
                  <div className="text-[10px] text-[#777777]">PRIMARY FOCUS</div>
                  <div className="text-white font-medium">LLM Guardrails &bull; Quantum-Safe Protocols</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Competitive Honors Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
            Competitive Hackathon Honors &amp; International Programs:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherAchievements.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-white/[0.08] hover:border-white/20 transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(item.category)}
                    <span className="text-xs font-mono-code text-white/60">
                      {item.organization} &bull; {item.year}
                    </span>
                  </div>
                  <span className="text-xs font-mono-code text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                    {item.badge}
                  </span>
                </div>

                <h4 className="font-serif-editorial text-2xl text-white font-normal group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#888888] font-sans leading-relaxed">
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
