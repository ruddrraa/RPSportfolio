"use client";

import { useState } from "react";
import Link from "next/link";
import { skillGroups, SkillGroup } from "@/data/skills";
import {
  Cpu,
  Layout,
  Server,
  Database,
  Sparkles,
  ArrowRight,
  Terminal,
  CheckCircle2,
  Code2,
} from "lucide-react";

export function Expertise() {
  const [activeGroupId, setActiveGroupId] = useState<string>(skillGroups[0].id);

  const activeGroup =
    skillGroups.find((g) => g.id === activeGroupId) || skillGroups[0];

  const getCategoryCodeSnippet = (id: string) => {
    switch (id) {
      case "ai-vision":
        return `// RT-DETR Detection Transformer Inference Pipeline
import torch
from transformers import RTDetrForObjectDetection, RTDetrImageProcessor

processor = RTDetrImageProcessor.from_pretrained("PekingU/rtdetr_r50vd")
model = RTDetrForObjectDetection.from_pretrained("PekingU/rtdetr_r50vd")

def detect_vehicles(image_tensor):
    inputs = processor(images=image_tensor, return_tensors="pt")
    with torch.no_grad():
        outputs = model(**inputs)
    results = processor.post_process_object_detection(
        outputs, target_sizes=[image_tensor.size[::-1]], threshold=0.75
    )
    return results`;
      case "frontend-arch":
        return `// React 19 Async Action & Optimistic State Pipeline
"use client";
import { useOptimistic, useTransition } from "react";
import { updateClientRecordAction } from "@/app/actions/crm";

export function ClientWorkflowEditor({ client, onSync }) {
  const [isPending, startTransition] = useTransition();
  const [optimisticState, setOptimisticState] = useOptimistic(
    client,
    (state, update) => ({ ...state, ...update, syncStatus: "optimistic" })
  );

  const handleUpdate = (formData) => {
    startTransition(async () => {
      setOptimisticState(formData);
      await updateClientRecordAction(formData);
    });
  };
}`;
      case "backend-systems":
        return `// Express 5 JWT Middleware & Role-Based Isolation
import jwt from "jsonwebtoken";

export const requireTeamAuth = (allowedRoles = []) => {
  return async (req, res, next) => {
    const token = req.cookies.auth_token;
    if (!token) return res.status(401).json({ error: "Unauthorized session" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
      return res.status(403).json({ error: "Insufficient privilege" });
    }
    req.user = decoded;
    next();
  };
};`;
      case "database-cloud":
        return `// Prisma Data Access & PostgreSQL Transaction Isolation
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model OrganizationEmployee {
  id           String   @id @default(uuid())
  email        String   @unique
  role         Role     @default(EMPLOYEE)
  shifts       Shift[]
  leaveAudits  Leave[]
  createdAt    DateTime @default(now())
}`;
      case "creative-dev":
        return `// Vanilla Three.js Architectural Spatial Installation (Pavilion Datum)
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x0a0a0a, 8, 34);

// Monolithic carbon slabs with hairline architectural edges
const slabGeometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
const slabMaterial = new THREE.MeshStandardMaterial({
  color: 0x121212,
  roughness: 0.88,
  metalness: 0.12,
});
const mesh = new THREE.Mesh(slabGeometry, slabMaterial);
const edges = new THREE.LineSegments(
  new THREE.EdgesGeometry(slabGeometry),
  new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.85 })
);
group.add(mesh, edges);`;
      default:
        return `// Technical Capabilities`;
    }
  };

  return (
    <section id="expertise" className="py-24 sm:py-32 w-full bg-[#0A0A0A] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono-code text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>DISCIPLINES &bull; [02]</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-white font-normal leading-[0.98]">
              Architectural Capabilities <br />
              <span className="text-[#888888]">&amp; Verified Tooling</span>
            </h2>
          </div>

          <div className="text-xs font-mono-code text-[#777777]">
            // 05 SPECIALIZED DOMAINS
          </div>
        </div>

        {/* Cosmos Studio-style Clean Underlined Domain Tabs */}
        <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-4 border-b border-white/[0.08] no-scrollbar">
          {skillGroups.map((group, idx) => {
            const isActive = group.id === activeGroupId;
            return (
              <button
                key={group.id}
                onClick={() => setActiveGroupId(group.id)}
                className={`group py-3 text-left whitespace-nowrap cursor-pointer relative transition-colors ${
                  isActive ? "text-white" : "text-[#777777] hover:text-[#CCCCCC]"
                }`}
              >
                <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#555555] group-hover:text-emerald-400 transition-colors">
                  [0{idx + 1}]
                </div>
                <div className="text-sm sm:text-base font-sans font-medium mt-0.5">
                  {group.category}
                </div>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Domain Presentation */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#121212] border border-white/10 p-6 sm:p-10 md:p-12 space-y-10 shadow-2xl">
          {/* Header Strip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-xs font-mono-code text-emerald-400 uppercase tracking-widest">
                Domain Specification
              </span>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-white font-normal">
                {activeGroup.category}
              </h3>
              <p className="text-sm text-[#999999] font-sans max-w-2xl">{activeGroup.subtitle}</p>
            </div>

            <div className="flex items-center gap-3 font-mono-code text-xs">
              <span className="text-[#666666]">Applied in:</span>
              <Link
                href={`/projects/${activeGroup.verifiedSlug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 transition-all font-sans"
              >
                <span>{activeGroup.verifiedProject}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/[0.06] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-code text-[#777777]">
              <span className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>DATA FLOW &bull; EXECUTION PIPELINE</span>
              </span>
              <span className="text-emerald-400">PRODUCTION VERIFIED</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {activeGroup.architectureDiagram.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#141414] border border-white/[0.06] text-xs font-mono-code text-[#E5E5E5] space-y-1"
                >
                  <div className="text-[10px] text-[#666666]">STAGE 0{idx + 1}</div>
                  <div className="font-medium text-white">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Proof & Concrete Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Code Snippet Box */}
            <div className="lg:col-span-6 rounded-2xl bg-[#0B0B0B] border border-white/[0.08] overflow-hidden">
              <div className="px-4 py-3 bg-[#141414] border-b border-white/[0.06] flex items-center justify-between text-xs font-mono-code text-[#777777]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>pipeline.ts</span>
                </div>
                <span>SOURCE EXCERPT</span>
              </div>
              <pre className="p-5 overflow-x-auto text-xs font-mono-code text-[#CCCCCC] leading-relaxed">
                <code>{getCategoryCodeSnippet(activeGroup.id)}</code>
              </pre>
            </div>

            {/* Verified Capabilities List */}
            <div className="lg:col-span-6 space-y-3">
              <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider pb-1">
                Verified Tooling &amp; Implementations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-[#161616] border border-white/[0.06] space-y-1 group hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white text-xs font-sans">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono-code text-emerald-400">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#888888] font-sans leading-snug">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
