"use client";

import React from "react";
import {
  MapPin,
  Clock,
  CheckCircle2,
  Volume2,
  FileText,
  Printer,
  Cpu,
  Layers,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  AlertTriangle,
  Radio,
  ExternalLink,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { TechStackIcon } from "./TechStackIcon";

interface ProjectInterfacePreviewProps {
  slug: string;
  title: string;
  accentColor: string;
}

export function ProjectInterfacePreview({
  slug,
  title,
  accentColor,
}: ProjectInterfacePreviewProps) {
  // 1. EtechCRM — Enterprise Logistics & Client Management (Excel Technologies & Services)
  if (slug === "etechcrm") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl text-xs select-none">
        {/* Sleek Studio Header */}
        <div className="px-5 py-3.5 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[11px] font-mono-code text-zinc-300 font-medium">
              Excel Technologies &bull; Field Operations &amp; Client CRM
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-zinc-200 text-[10px] font-mono-code font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              PRODUCTION DEPLOYMENT
            </span>
          </div>
        </div>

        {/* Live Client Operations Workspace */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Top Operational Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-[#141414] border border-white/[0.06]">
              <div className="text-[10px] font-mono-code text-zinc-400 uppercase">
                Active Field Visits
              </div>
              <div className="text-xl font-bold text-white mt-1 font-serif-editorial">
                18 / 20
              </div>
              <div className="text-[10px] text-zinc-300 font-mono-code mt-0.5">
                90% Target Met
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#141414] border border-white/[0.06]">
              <div className="text-[10px] font-mono-code text-zinc-400 uppercase">
                Enterprise Accounts
              </div>
              <div className="text-xl font-bold text-white mt-1 font-serif-editorial">
                142
              </div>
              <div className="text-[10px] text-zinc-400 font-mono-code mt-0.5">
                Multi-Tenant Scoped
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#141414] border border-white/[0.06]">
              <div className="text-[10px] font-mono-code text-zinc-400 uppercase">
                GPS Verification
              </div>
              <div className="text-xl font-bold text-white mt-1 font-serif-editorial">
                100%
              </div>
              <div className="text-[10px] text-zinc-300 font-mono-code mt-0.5">
                Zero Coordinate Drift
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#141414] border border-white/[0.06]">
              <div className="text-[10px] font-mono-code text-zinc-400 uppercase">
                Sync Engine
              </div>
              <div className="text-xl font-bold text-white mt-1 font-serif-editorial">
                TanStack
              </div>
              <div className="text-[10px] text-zinc-400 font-mono-code mt-0.5">
                Optimistic Cache
              </div>
            </div>
          </div>

          {/* Real Field Activity Ledger Table */}
          <div className="rounded-xl bg-[#141414] border border-white/[0.06] overflow-hidden">
            <div className="px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between text-[11px] font-mono-code text-zinc-400">
              <span>REAL-TIME FIELD VISIT AUDIT STREAM</span>
              <span>KOLKATA METROPOLITAN REGION</span>
            </div>

            <div className="divide-y divide-white/[0.04]">
              {/* Row 1 */}
              <div className="px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] transition-colors">
                <div className="space-y-0.5">
                  <div className="text-zinc-200 font-semibold font-sans flex items-center gap-2">
                    <span>Technocraft Engineering Ltd</span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300">
                      Annual Maintenance
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400 flex items-center gap-3 font-mono-code">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-300" />
                      22.5726° N, 88.3639° E
                    </span>
                    <span>&bull;</span>
                    <span>Exec: A. Banerjee</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-semibold bg-white/[0.08] text-zinc-200 border border-white/15">
                    VERIFIED &amp; SYNCED
                  </span>
                  <span className="text-[11px] font-mono-code text-zinc-400">
                    14:32 IST
                  </span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] transition-colors">
                <div className="space-y-0.5">
                  <div className="text-zinc-200 font-semibold font-sans flex items-center gap-2">
                    <span>Eastern Power Systems Corp</span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300">
                      Transformer Audit
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400 flex items-center gap-3 font-mono-code">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-300" />
                      22.5851° N, 88.4124° E
                    </span>
                    <span>&bull;</span>
                    <span>Exec: S. Mukherjee</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-semibold bg-white/[0.06] text-zinc-300 border border-white/10">
                    IN TRANSIT
                  </span>
                  <span className="text-[11px] font-mono-code text-zinc-400">
                    15:10 IST
                  </span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] transition-colors">
                <div className="space-y-0.5">
                  <div className="text-zinc-200 font-semibold font-sans flex items-center gap-2">
                    <span>Metro Rail Logistics Hub</span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300">
                      Field Equipment Check
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400 flex items-center gap-3 font-mono-code">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-300" />
                      22.5697° N, 88.3562° E
                    </span>
                    <span>&bull;</span>
                    <span>Exec: R. Sen</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-semibold bg-white/[0.06] text-zinc-300 border border-white/10">
                    SCHEDULED
                  </span>
                  <span className="text-[11px] font-mono-code text-zinc-400">
                    16:30 IST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. MunshiJi AI — Intelligent Retail Billing & Store Ledger Platform
  if (slug === "munshiji-ai") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl text-xs select-none">
        {/* Sleek Studio Header */}
        <div className="px-5 py-3.5 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[11px] font-mono-code text-zinc-300 font-medium">
              MunshiJi AI &bull; MSME Retail Billing &amp; Voice Ledger Engine
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-zinc-200 text-[10px] font-mono-code font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              VOICE &amp; LEDGER SYNCED
            </span>
          </div>
        </div>

        {/* Dual-Column POS & Voice Staging */}
        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Column: Natural Voice Ingestion Stream */}
          <div className="md:col-span-6 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-zinc-200 font-semibold font-sans flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-zinc-300" />
                  Natural Voice Ingestion Stream
                </span>
                <span className="text-[10px] font-mono-code text-zinc-300 font-semibold">
                  GROQ LPU &bull; 42ms
                </span>
              </div>

              {/* Dynamic Audio Visualizer Waves (Monochrome) */}
              <div className="h-10 flex items-center justify-center gap-1.5 px-3 bg-[#0A0A0A] rounded-lg border border-white/[0.04]">
                {[8, 16, 26, 14, 30, 22, 12, 28, 36, 20, 15, 29, 34, 18, 10, 25, 31, 14, 9, 22, 17, 8].map(
                  (h, i) => (
                    <span
                      key={i}
                      className="w-1 bg-white/70 rounded-full"
                      style={{ height: `${h}px` }}
                    />
                  )
                )}
              </div>

              {/* Natural Query Transcript */}
              <div className="p-3 rounded-lg bg-[#181818] border border-white/[0.04] text-[11px] text-zinc-200 leading-relaxed font-sans">
                &ldquo;Record 25 units heavy brass valve and 12 PVC elbows for Gupta Hardware on 30-day credit ledger&rdquo;
              </div>

              {/* Extracted Entity Tags */}
              <div className="space-y-1.5 text-[10px] font-mono-code">
                <div className="flex justify-between text-zinc-400">
                  <span>Target Account:</span>
                  <span className="text-white font-semibold">Gupta Hardware (Credit Client)</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Line Items:</span>
                  <span className="text-zinc-200 font-semibold">2 SKU Items Parsed &bull; 100% Match</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.04] text-[10px] font-mono-code text-zinc-400 flex items-center justify-between">
              <span>Automatic OCR Ingestion</span>
              <span className="text-zinc-300">Multilingual Hindi/English</span>
            </div>
          </div>

          {/* Right Column: Instant GST Tax Invoice & Ledger Entry */}
          <div className="md:col-span-6 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="text-zinc-200 font-semibold font-sans flex items-center gap-2">
                <FileText className="w-4 h-4 text-zinc-400" />
                Digital GST Tax Invoice
              </span>
              <span className="text-[10px] font-mono-code text-zinc-400">
                INV-2025-0842
              </span>
            </div>

            {/* Itemized Table */}
            <div className="space-y-1.5 text-[11px] font-mono-code">
              <div className="flex justify-between p-2 rounded bg-[#181818] text-zinc-200">
                <span>Heavy Brass Valve (25 @ ₹450)</span>
                <span className="font-semibold text-white">₹11,250.00</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-[#181818] text-zinc-200">
                <span>PVC Industrial Elbows (12 @ ₹250)</span>
                <span className="font-semibold text-white">₹3,000.00</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-[#181818] text-zinc-400 text-[10px]">
                <span>CGST (9%) + SGST (9%)</span>
                <span>₹2,565.00</span>
              </div>
            </div>

            {/* Total Due & Credit Ledger Update */}
            <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-white/[0.04] flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono-code text-zinc-400 uppercase">
                  Total Ledger Debit
                </div>
                <div className="text-lg font-bold text-white font-serif-editorial">
                  ₹16,815.00
                </div>
              </div>

              <div className="text-right">
                <div className="text-[10px] font-mono-code text-zinc-400">
                  ESC/POS Status
                </div>
                <div className="inline-flex items-center gap-1 text-[10px] font-mono-code text-zinc-200 font-semibold">
                  <Printer className="w-3 h-3" />
                  80mm Print Dispatched
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. CardecaAlgo — Real-Time Computer Vision & Detection Transformer
  if (slug === "cardeca-algo") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl text-xs select-none">
        {/* Sleek Studio Header */}
        <div className="px-5 py-3.5 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[11px] font-mono-code text-zinc-300 font-medium">
              CardecaAlgo &bull; RT-DETR Vision Transformer &amp; PyTorch Inference
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-zinc-200 text-[10px] font-mono-code font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              60 FPS INFERENCE &bull; 16.4ms
            </span>
          </div>
        </div>

        {/* Real Vehicle Vision Viewport Staging (Monochrome Precision) */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Cinematic Canvas Simulator */}
          <div className="relative w-full h-56 sm:h-64 rounded-xl bg-[#080808] border border-white/[0.08] overflow-hidden flex items-center justify-center">
            {/* Grid background representing video frame tensor */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Target 1: Luxury SUV Bounding Box (Monochrome Precision) */}
            <div className="absolute left-[15%] top-[20%] w-[38%] h-[60%] border-2 border-white/80 rounded-sm bg-white/[0.04] flex flex-col justify-between p-2">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white text-black text-[10px] font-mono-code font-bold w-fit">
                <span>SUV &bull; 98.7%</span>
              </div>
              <div className="text-[9px] font-mono-code text-zinc-300 bg-black/80 px-1.5 py-0.5 rounded w-fit">
                [124, 76, 492, 340] &bull; IOU: 0.94
              </div>
            </div>

            {/* Target 2: Executive Sedan Bounding Box */}
            <div className="absolute right-[12%] top-[30%] w-[30%] h-[48%] border-2 border-zinc-400 rounded-sm bg-white/[0.03] flex flex-col justify-between p-2">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-200 text-black text-[10px] font-mono-code font-bold w-fit">
                <span>SEDAN &bull; 96.2%</span>
              </div>
              <div className="text-[9px] font-mono-code text-zinc-300 bg-black/80 px-1.5 py-0.5 rounded w-fit">
                [510, 110, 720, 320] &bull; EfficientNet
              </div>
            </div>

            {/* Reticle Overlay */}
            <div className="absolute top-3 left-4 text-[10px] font-mono-code text-zinc-400 flex items-center gap-3">
              <span>STREAM: 1080p60</span>
              <span>RESNET-50 BACKBONE</span>
            </div>

            <div className="absolute bottom-3 right-4 text-[10px] font-mono-code text-zinc-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>HTML5 KONVA CANVAS</span>
            </div>
          </div>

          {/* Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] font-mono-code">
            <div className="p-2.5 rounded-lg bg-[#141414] border border-white/[0.06]">
              <div className="text-[10px] text-zinc-400">LATENCY</div>
              <div className="text-white font-bold mt-0.5">16.4ms / frame</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#141414] border border-white/[0.06]">
              <div className="text-[10px] text-zinc-400">DETECTION HEAD</div>
              <div className="text-white font-bold mt-0.5">RT-DETR Transformer</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#141414] border border-white/[0.06]">
              <div className="text-[10px] text-zinc-400">CLASSIFIER</div>
              <div className="text-zinc-200 font-bold mt-0.5">PyTorch EfficientNet</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#141414] border border-white/[0.06]">
              <div className="text-[10px] text-zinc-400">EXPORT FORMAT</div>
              <div className="text-white font-bold mt-0.5">ONNX &amp; TensorRT</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Ethos — HRMS & Enterprise AI Copilot
  if (slug === "ethos") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl text-xs select-none">
        {/* Sleek Studio Header */}
        <div className="px-5 py-3.5 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[11px] font-mono-code text-zinc-300 font-medium">
              Ethos &bull; Enterprise HRMS &amp; AI Knowledge Copilot
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-zinc-200 text-[10px] font-mono-code font-semibold">
              ORGANIZATION ACTIVE
            </span>
          </div>
        </div>

        {/* HR Operations & Copilot Matrix */}
        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3">
            <div className="text-[11px] font-semibold text-zinc-200 border-b border-white/[0.06] pb-2 font-sans flex items-center justify-between">
              <span>Employee Presence &amp; Shift Ledger</span>
              <span className="text-zinc-300 font-mono-code text-[10px]">98% Synced</span>
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between p-2 rounded bg-[#181818] text-zinc-300 font-mono-code">
                <span>Engineering Lead (Remote)</span>
                <span className="text-white">Clocked In &bull; 09:12 IST</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-[#181818] text-zinc-300 font-mono-code">
                <span>Product Manager (HQ)</span>
                <span className="text-white">Clocked In &bull; 09:30 IST</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-[#181818] text-zinc-300 font-mono-code">
                <span>UI/UX Designer (On Leave)</span>
                <span className="text-zinc-400">Statutory Leave Approved</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3">
            <div className="text-[11px] font-semibold text-zinc-200 border-b border-white/[0.06] pb-2 font-sans flex items-center justify-between">
              <span>Enterprise AI Policy Assistant</span>
              <span className="text-zinc-300 font-mono-code text-[10px]">RAG Engine</span>
            </div>
            <div className="p-2.5 rounded bg-[#181818] text-[11px] text-zinc-200 font-sans italic border border-white/[0.04]">
              &ldquo;What is the statutory annual and sick leave entitlement for full-time engineering staff?&rdquo;
            </div>
            <div className="text-[10px] font-mono-code text-zinc-400 leading-relaxed">
              &gt; Retrieved from <span className="text-white font-semibold">2025_HR_Handbook.pdf</span>: 18 annual days + 12 medical leaves with full rollover.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. RelancePay — Multi-Currency Fintech SaaS
  if (slug === "relancepay") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl text-xs select-none">
        <div className="px-5 py-3.5 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[11px] font-mono-code text-zinc-300 font-medium">
              RelancePay &bull; Multi-Currency Fintech Gateway &amp; Ledger
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-zinc-200 text-[10px] font-mono-code font-semibold">
            IDEMPOTENCY LOCKED
          </span>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono-code">
          <div className="p-3 rounded-xl bg-[#141414] border border-white/[0.06]">
            <div className="text-[10px] text-zinc-400">USD SETTLEMENT</div>
            <div className="text-lg font-bold text-white mt-1 font-serif-editorial">$24,850.00</div>
            <div className="text-[10px] text-zinc-300 mt-0.5">Webhook Verified</div>
          </div>
          <div className="p-3 rounded-xl bg-[#141414] border border-white/[0.06]">
            <div className="text-[10px] text-zinc-400">EUR FX CONVERSION</div>
            <div className="text-lg font-bold text-white mt-1 font-serif-editorial">&euro;18,220.00</div>
            <div className="text-[10px] text-zinc-300 mt-0.5">Real-time Spot Rate</div>
          </div>
          <div className="p-3 rounded-xl bg-[#141414] border border-white/[0.06]">
            <div className="text-[10px] text-zinc-400">INR DOMESTIC ROUTE</div>
            <div className="text-lg font-bold text-white mt-1 font-serif-editorial">&#8377;12,45,000</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">IMPS / NEFT Dual Route</div>
          </div>
        </div>
      </div>
    );
  }

  // 6. Vayrin — Emergency Healthcare Architecture
  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl text-xs select-none">
      <div className="px-5 py-3.5 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-[11px] font-mono-code text-zinc-300 font-medium">
            Vayrin &bull; Emergency Healthcare Routing &amp; Geospatial Triage
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-zinc-200 text-[10px] font-mono-code font-semibold">
          CODE RED DISPATCH
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-3 font-mono-code">
        <div className="p-3 rounded-xl bg-[#141414] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-zinc-200 font-semibold font-sans">
              Critical Ambulance Dispatch &bull; Sector V Trauma Unit
            </div>
            <div className="text-[11px] text-zinc-400 mt-0.5">
              ETA: 6.4 mins &bull; Hospital ICU Bed Reserved &bull; Dijkstra Geospatial Graph
            </div>
          </div>
          <span className="px-3 py-1 rounded bg-white/[0.08] text-white text-[10px] font-semibold border border-white/15 w-fit">
            PRIORITY 1 DISPATCH
          </span>
        </div>
      </div>
    </div>
  );
}
