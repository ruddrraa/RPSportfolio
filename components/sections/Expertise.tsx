"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { skillGroups } from "@/data/skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cpu,
  Layout,
  Server,
  Database,
  Box,
  ArrowRight,
  ArrowLeft,
  Terminal,
  Code2,
  Layers,
} from "lucide-react";

export function Expertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCategoryCodeSnippet = (id: string) => {
    switch (id) {
      case "ai-vision":
        return `// RT-DETR Detection Transformer & PyTorch Inference Pipeline (Computer Vision)
import torch
from transformers import RTDetrForObjectDetection, RTDetrImageProcessor

processor = RTDetrImageProcessor.from_pretrained("PekingU/rtdetr_r50vd")
model = RTDetrForObjectDetection.from_pretrained("PekingU/rtdetr_r50vd")

def detect_and_classify_vehicles(image_tensor):
    inputs = processor(images=image_tensor, return_tensors="pt")
    with torch.no_grad():
        outputs = model(**inputs)
    results = processor.post_process_object_detection(
        outputs, target_sizes=[image_tensor.size[::-1]], threshold=0.75
    )
    return results`;
      case "frontend-arch":
        return `// React 19 Async Action & Optimistic State Pipeline (Frontend Architecture)
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
        return `// Express 5 JWT Middleware & Role-Based Isolation (Backend Systems)
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
        return `// Three.js Halftone Relief Sculptural System
import * as THREE from "three";

const scene = new THREE.Scene();
const circleGeometry = new THREE.CircleGeometry(0.038, 12);
const alabasterMaterial = new THREE.MeshStandardMaterial({
  color: 0xF2F0EA,
  roughness: 0.35,
  metalness: 0.05,
});
const instancedMesh = new THREE.InstancedMesh(circleGeometry, alabasterMaterial, 12000);
scene.add(instancedMesh);`;
      default:
        return "";
    }
  };

  const domainIcons = [Cpu, Layout, Server, Database, Box];

  const scrollToScene = (index: number) => {
    const targetIdx = Math.max(0, Math.min(skillGroups.length - 1, index));
    setCurrentIndex(targetIdx);

    if (typeof window !== "undefined" && sectionRef.current) {
      const triggers = ScrollTrigger.getAll();
      const trigger = triggers.find(
        (t) => t.vars.trigger === sectionRef.current || t.trigger === sectionRef.current
      );
      if (trigger) {
        const totalDistance = trigger.end - trigger.start;
        const targetScroll = trigger.start + (targetIdx / (skillGroups.length - 1)) * totalDistance;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
        return;
      }

      if (trackRef.current) {
        const card = trackRef.current.children[targetIdx] as HTMLElement;
        if (card) {
          card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pinnedContainer = pinnedContainerRef.current;
    const track = trackRef.current;
    if (!section || !pinnedContainer || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () =>
        track.scrollWidth - window.innerWidth + (window.innerWidth < 768 ? 48 : 140);

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: pinnedContainer,
          start: "top top",
          end: () => `+=${getScrollAmount() * 1.25}`,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const scrollRatioVal = (self as unknown as Record<string, number>)["pro" + "gress"] || 0;
            setScrollRatio(scrollRatioVal);
            const active = Math.min(
              skillGroups.length - 1,
              Math.floor(scrollRatioVal * skillGroups.length)
            );
            setCurrentIndex(active);
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative w-full bg-[#F2F0EA] border-t border-[rgba(23,23,23,0.08)]"
    >
      {/* Pinned Viewport Container with clean, comfortable clearance below floating navbar */}
      <div
        ref={pinnedContainerRef}
        className="h-screen w-full flex flex-col justify-between pt-16 sm:pt-24 lg:pt-26 pb-3 sm:pb-5 px-2.5 sm:px-6 overflow-hidden select-none"
      >
        {/* Pinned Header Bar: Sits cleanly with 30px+ clearance below floating pill navbar */}
        <div className="w-full max-w-7xl mx-auto shrink-0 pb-2.5 sm:pb-3 border-b border-[rgba(23,23,23,0.08)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-3">
            <div className="space-y-1">
              <div className="text-[10px] sm:text-[11px] font-mono-code text-[#171717] font-semibold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                <span>TECHNICAL DISCIPLINES</span>
              </div>
              <h2 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#171717] font-bold leading-[1.0] tracking-tight">
                <span className="block text-[#77736C] font-normal">Architectural Capabilities</span>
                <span className="block text-[#171717] italic font-normal tracking-[-0.015em]">&amp; Verified Tooling</span>
              </h2>
            </div>

            {/* Interactive Scene Navigation for A11y & Keyboard Users */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <div className="text-xs font-mono-code text-[#77736C]">
                FIVE SPECIALIZED DOMAINS
              </div>
              <div className="text-xs font-mono-code text-[#77736C]">
                SCENE:{" "}
                <span className="text-[#171717] font-bold">
                  0{currentIndex + 1}
                </span>{" "}
                / 0{skillGroups.length}
              </div>

              {/* Accessible Navigation Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollToScene(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  aria-label="Previous domain scene"
                  className="w-8 h-8 rounded-full border border-[#171717]/15 bg-[#E7E4DC] hover:bg-[#171717] text-[#171717] hover:text-[#FAF8F5] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToScene(currentIndex + 1)}
                  disabled={currentIndex === skillGroups.length - 1}
                  aria-label="Next domain scene"
                  className="w-8 h-8 rounded-full border border-[#171717]/15 bg-[#E7E4DC] hover:bg-[#171717] text-[#171717] hover:text-[#FAF8F5] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Horizontal Storytelling Track with Symmetrical Viewport Centering & Generous Gutter */}
        <div className="w-full flex-1 min-h-0 flex items-center overflow-hidden my-auto py-1 sm:py-2">
          <div
            ref={trackRef}
            className="flex items-stretch gap-4 sm:gap-7 w-max will-change-transform"
            style={{
              paddingLeft: "calc((100vw - min(92vw, 1360px)) / 2)",
              paddingRight: "calc((100vw - min(92vw, 1360px)) / 2)",
            }}
          >
            {skillGroups.map((group, index) => {
              const IconComponent = domainIcons[index % domainIcons.length];
              const codeSnippet = getCategoryCodeSnippet(group.id);
              const isActive = currentIndex === index;

              return (
                <div
                  key={group.id}
                  className={`w-[92vw] max-w-6xl h-[68vh] sm:h-[55vh] max-h-[600px] sm:max-h-[490px] min-h-[460px] sm:min-h-[380px] shrink-0 rounded-[24px] sm:rounded-[36px] bg-[#E7E4DC] border border-[rgba(23,23,23,0.12)] p-4 sm:p-8 flex flex-col justify-between shadow-sm relative group overflow-hidden transition-all duration-500 will-change-transform ${
                    isActive
                      ? "scale-100 opacity-100 border-[rgba(23,23,23,0.28)] shadow-lg"
                      : "scale-[0.97] opacity-80"
                  }`}
                >
                  {/* Scene Top Index */}
                  <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-[rgba(23,23,23,0.08)] shrink-0">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FAF8F5] border border-[rgba(23,23,23,0.1)] flex items-center justify-center text-[#171717] shrink-0 shadow-2xs">
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div>
                        <div className="text-[9px] sm:text-[10px] font-mono-code text-[#77736C] uppercase tracking-wider">
                          DOMAIN 0{index + 1} &bull; {group.id === "ai-vision" ? "Vision & Intelligence" : group.id === "frontend-arch" ? "Frontend Architecture" : group.id === "backend-systems" ? "Backend & Systems" : group.id === "database-cloud" ? "Databases & Cloud" : "Creative Development"}
                        </div>
                        <h3 className="font-serif-editorial text-lg sm:text-2xl text-[#171717] font-bold leading-tight">
                          {group.category}
                        </h3>
                      </div>
                    </div>

                    <Link
                      href={`/projects/${group.verifiedSlug}`}
                      className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#171717] hover:text-[#FAF8F5] text-[#171717] border border-[rgba(23,23,23,0.1)] text-[11px] font-mono-code transition-colors shrink-0 shadow-2xs cursor-pointer pointer-events-auto"
                    >
                      <span>Verified in {group.verifiedProject}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Subtitle Statement */}
                  <p className="text-xs sm:text-sm text-[#4A4742] font-sans leading-relaxed line-clamp-2 my-1.5 sm:my-2 shrink-0">
                    {group.subtitle}
                  </p>

                  {/* Central Dual Architecture & Code Staging */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-4 flex-1 min-h-0 items-stretch my-1">
                    {/* Left: Architecture Data Flow */}
                    <div className="lg:col-span-5 flex flex-col justify-between p-3 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)] shadow-2xs overflow-hidden shrink-0 max-h-[115px] sm:max-h-none">
                      <div className="text-[10px] font-mono-code text-[#171717] font-semibold uppercase tracking-wider flex items-center gap-1.5 pb-1 sm:pb-2 border-b border-[rgba(23,23,23,0.06)] shrink-0">
                        <Layers className="w-3.5 h-3.5 text-[#171717]" />
                        <span>Execution Pipeline</span>
                      </div>

                      <div className="space-y-1 sm:space-y-1.5 flex-1 min-h-0 overflow-y-auto py-0.5 sm:py-1 scrollbar-none">
                        {group.architectureDiagram.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="text-[10px] sm:text-[11px] font-mono-code text-[#171717] flex items-start gap-1.5 py-0.5 border-b border-[rgba(23,23,23,0.03)] last:border-b-0"
                          >
                            <span className="text-[#77736C] shrink-0 font-bold">0{sIdx + 1}</span>
                            <span className="leading-tight line-clamp-1">{step}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-[9px] font-mono-code text-[#77736C] uppercase pt-1 border-t border-[rgba(23,23,23,0.06)] shrink-0 hidden sm:block">
                        Verified Execution Pipeline
                      </div>
                    </div>

                    {/* Right: Real Implementation Code Snippet (Black Box - Guaranteed generous height on mobile) */}
                    <div className="lg:col-span-7 flex flex-col justify-between p-3 sm:p-4 rounded-xl bg-[#151515] text-[#FAF8F5] font-mono-code shadow-2xl border border-white/10 overflow-hidden flex-1 min-h-[180px] sm:min-h-0">
                      <div className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider flex items-center justify-between pb-1.5 sm:pb-2 border-b border-white/10 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <Code2 className="w-3.5 h-3.5 text-zinc-300" />
                          <span>Implementation Evidence</span>
                        </div>
                        <span className="text-[9px] text-zinc-500">Source Excerpt</span>
                      </div>

                      <div className="flex-1 min-h-0 overflow-auto py-1 text-[10px] sm:text-[11px] leading-relaxed scrollbar-none">
                        <pre className="text-zinc-200">
                          <code>{codeSnippet}</code>
                        </pre>
                      </div>

                      <div className="text-[9px] text-zinc-400 uppercase pt-1 border-t border-white/10 flex items-center justify-between shrink-0">
                        <span>Production Verified</span>
                        <span>Type Safe</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Verified Skill Pills - Single sleek horizontal strip on mobile to conserve full height for code box */}
                  <div className="pt-2 sm:pt-2.5 border-t border-[rgba(23,23,23,0.08)] flex items-center justify-between gap-2 shrink-0">
                    <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none max-w-full pb-0.5">
                      <span className="text-[9px] sm:text-[10px] font-mono-code text-[#77736C] uppercase tracking-wider mr-1 shrink-0">
                        Verified Tooling:
                      </span>
                      {group.skills.slice(0, 5).map((skill) => (
                        <div
                          key={skill.name}
                          className="px-2 sm:px-2.5 py-0.5 rounded-md bg-[#FAF8F5] border border-[rgba(23,23,23,0.08)] text-[9px] sm:text-[10px] font-mono-code text-[#171717] flex items-center gap-1 shadow-2xs shrink-0 whitespace-nowrap"
                        >
                          <span className="font-semibold">{skill.name}</span>
                          <span className="text-[8px] sm:text-[9px] text-[#77736C]">
                            [{skill.level}]
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Status Track */}
        <div className="w-full max-w-7xl mx-auto shrink-0 pt-2 border-t border-[rgba(23,23,23,0.08)] flex items-center justify-between text-[11px] font-mono-code text-[#77736C]">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#171717]" />
            <span>SCROLL VERTICALLY TO TRAVERSE CAPABILITY DOMAINS</span>
          </div>
          <div className="hidden sm:block uppercase tracking-wider">
            05 Systems Disciplines &bull; High-Throughput Engineering
          </div>
        </div>
      </div>
    </section>
  );
}
