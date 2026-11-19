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
      case "creative-dev":
        return <Sparkles className="w-4 h-4 text-rose-400" />;
      default:
        return <Cpu className="w-4 h-4 text-emerald-400" />;
    }
  };

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
        return `// Three.js High-Performance Particle Engine
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  color: 0xf5f5f5,
  size: 0.18,
  transparent: true,
  opacity: 0.45,
  blending: THREE.AdditiveBlending,
});`;
      default:
        return `// Technical Capabilities`;
    }
  };

  return (
    <section id="expertise" className="py-24 border-t border-[#222222] relative">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between mb-12 border-b border-[#222222]/60 pb-4">
        <div className="font-mono-code text-xs text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
          <span>CHAPTER 03 // TECHNICAL EXPERTISE & ARCHITECTURE</span>
        </div>
        <div className="font-mono-code text-xs text-[#777777]">
          // 05 Specialized Domains
        </div>
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5] font-editorial">
            Engineered Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A6A6A6] max-w-2xl leading-relaxed">
            Interactive breakdown of verified technical proficiency spanning deep learning computer vision, modern React architecture, secure backend services, and creative WebGL development.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono-code text-xs text-[#777777]">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>PRODUCTION-VERIFIED</span>
        </div>
      </div>

      {/* Category Tabs Switcher (Design 2 & Cosmos Studio inspired) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {skillGroups.map((group) => {
          const isActive = group.id === activeGroupId;
          return (
            <button
              key={group.id}
              onClick={() => setActiveGroupId(group.id)}
              className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full font-mono-code text-xs transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "bg-[#161616] hover:bg-[#202020] border border-[#262626] text-[#A6A6A6] hover:text-white"
              }`}
            >
              <span>{getCategoryIcon(group.id)}</span>
              <span>{group.category}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Presentation Box */}
      <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#141414] border border-[#262626] space-y-8">
        {/* Category Header Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#222222] pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-400 uppercase tracking-wider">
              {getCategoryIcon(activeGroup.id)}
              <span>Domain Focus</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {activeGroup.category}
            </h3>
            <p className="text-sm text-[#888888]">{activeGroup.subtitle}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-code text-[#777777]">Applied in:</span>
            <Link
              href={`/projects/${activeGroup.verifiedSlug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C1C1C] hover:bg-[#262626] border border-[#2F2F2F] text-xs font-mono-code text-white transition-all group"
            >
              <span>{activeGroup.verifiedProject}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-emerald-400" />
            </Link>
          </div>
        </div>

        {/* Technical Architecture Flow Diagram */}
        <div className="p-5 rounded-2xl bg-[#0F0F0F] border border-[#222222] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono-code text-[#777777]">
            <span className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>SYSTEM ARCHITECTURE & PIPELINE DATA FLOW</span>
            </span>
            <span className="text-[10px] text-emerald-400">ACTIVE PIPELINE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {activeGroup.architectureDiagram.map((step, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#161616] border border-[#242424] font-mono-code text-xs text-[#CCCCCC] space-y-1"
              >
                <div className="text-[10px] text-emerald-400 font-bold">
                  STAGE 0{idx + 1}
                </div>
                <div className="leading-snug">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid for Active Category */}
        <div className="space-y-3">
          <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
            Verified Stack Components ({activeGroup.skills.length})
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeGroup.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-[#171717] border border-[#262626] hover:border-[#383838] transition-all duration-200 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-sm group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-[#888888] leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Code Implementation Preview */}
        <div className="rounded-2xl bg-[#0D0D0D] border border-[#222222] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#141414] border-b border-[#222222] text-xs font-mono-code text-[#777777]">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>pipeline_implementation.{activeGroup.id === "ai-vision" ? "py" : "ts"}</span>
            </div>
            <span>READ-ONLY VIEW</span>
          </div>

          <pre className="p-4 sm:p-6 overflow-x-auto font-mono-code text-xs text-[#A6A6A6] leading-relaxed">
            <code>{getCategoryCodeSnippet(activeGroup.id)}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
