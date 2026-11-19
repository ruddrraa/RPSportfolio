"use client";

import { skillGroups } from "@/data/skills";
import { Cpu, Layout, Server, Database } from "lucide-react";

export function Expertise() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "ai-vision":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case "frontend-arch":
        return <Layout className="w-4 h-4 text-blue-400" />;
      case "backend-systems":
        return <Server className="w-4 h-4 text-purple-400" />;
      case "database-cloud":
        return <Database className="w-4 h-4 text-amber-400" />;
      default:
        return <Cpu className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="expertise" className="py-20 border-t border-[#222222]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="font-mono-code text-xs text-[#A6A6A6] mb-3 flex items-center gap-2">
            <span className="text-emerald-400">#</span>
            <span>... /Technical Expertise ...</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F5F5]">
            Engineering Stack & Capabilities
          </h2>
        </div>
        <p className="text-xs md:text-sm font-mono-code text-[#777777] max-w-sm">
          // Production-verified tooling across full-stack development, vision pipelines & cloud infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="p-6 md:p-8 rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#333333] transition-all space-y-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#1D1D1D] border border-[#2B2B2B]">
                {getCategoryIcon(group.id)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                <p className="text-xs text-[#888888]">{group.subtitle}</p>
              </div>
            </div>

            {/* Pill Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#444444] transition-all"
                >
                  <span className="text-xs md:text-sm text-[#E5E5E5] font-medium">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono-code text-[#777777] bg-[#222222] px-1.5 py-0.5 rounded">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
