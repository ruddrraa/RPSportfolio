"use client";

import React from "react";
import {
  Shield,
  Activity,
  CheckCircle,
  FileText,
  DollarSign,
  Cpu,
  Terminal,
  Volume2,
  Calendar,
  Sparkles,
  Search,
  Sliders,
  Send,
  Users,
  Radio,
  ArrowRight,
  GitBranch,
  Layers,
  Code2,
  MapPin,
  Clock,
  Compass,
} from "lucide-react";

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
  // 1. EtechCRM — Enterprise Logistics & Client Management
  if (slug === "etechcrm") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Cinematic Studio Window Bar */}
        <div className="px-4 py-3 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
            </div>
            <span className="text-[11px] text-zinc-400 font-semibold ml-2">
              etechcrm // logistics-workspace.ts
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider hidden sm:inline">
              Excel Technologies
            </span>
            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Production Client System
            </span>
          </div>
        </div>

        {/* Console Viewport */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Active Field Operations Staging */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Left: Live Field Visit Telematics */}
            <div className="md:col-span-7 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between text-[11px] border-b border-white/[0.06] pb-2">
                <span className="text-zinc-300 font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Field Visit Verification Protocol</span>
                </span>
                <span className="text-emerald-400 text-[10px] font-mono">STATUS: SYNCED</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Assigned Client:</span>
                  <span className="text-zinc-200 font-semibold">Technocraft Engineering Ltd</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>GPS Telematics:</span>
                  <span className="text-zinc-200 font-mono">22.5726° N, 88.3639° E (Kolkata)</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Visit Authentication:</span>
                  <span className="text-zinc-200">Executive Self-Assignment + Cloudinary Log</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-white/[0.04] text-[10px] text-zinc-400 leading-relaxed font-mono">
                &gt; MongoDB Pipeline: $match &#123; tenantId, role: &quot;EXECUTIVE&quot; &#125; &rarr; $lookup clientHistory &rarr; $sort &#123; visitDate: -1 &#125;
              </div>
            </div>

            {/* Right: RBAC Permission Architecture */}
            <div className="md:col-span-5 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3 flex flex-col justify-between">
              <div className="text-[11px] font-semibold text-zinc-300 flex items-center gap-1.5 border-b border-white/[0.06] pb-2">
                <Shield className="w-3.5 h-3.5 text-zinc-400" />
                <span>Multi-Tenant Access Isolation</span>
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between p-1.5 rounded bg-[#1A1A1A] text-zinc-300">
                  <span>Super Admin</span>
                  <span className="text-[10px] text-zinc-400">Global Org Scope</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-[#1A1A1A] text-zinc-300">
                  <span>Marketing Head</span>
                  <span className="text-[10px] text-zinc-400">Team Assignment</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-[#1A1A1A] text-zinc-300">
                  <span>Field Executive</span>
                  <span className="text-[10px] text-zinc-400">Scoped Visit Logs</span>
                </div>
              </div>

              <div className="text-[10px] text-zinc-500 pt-1">
                JWT HTTP-Only Cookies &bull; Bcrypt &bull; Express 5
              </div>
            </div>
          </div>

          {/* Bottom Tooling Indicator */}
          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/[0.04]">
            <span>Architecture: React 19 &bull; Vite &bull; Node.js Express 5 &bull; MongoDB Atlas</span>
            <span className="text-zinc-400">Deployed for Excel Technologies &amp; Services</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. MunshiJi AI — AI-Powered MSME Finance OS
  if (slug === "munshiji-ai") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Cinematic Studio Window Bar */}
        <div className="px-4 py-3 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
            </div>
            <span className="text-[11px] text-zinc-400 font-semibold ml-2">
              munshiji // ocr-stream-parser.ts
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
              Live Demo / Prototype
            </span>
          </div>
        </div>

        {/* Console Viewport */}
        <div className="p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Left: Voice Assistant Query & Waveform */}
            <div className="md:col-span-6 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between text-[11px] border-b border-white/[0.06] pb-2 text-zinc-300">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Natural Voice Query Ingestion</span>
                </span>
                <span className="text-[10px] text-amber-400">AUDIO INGESTION</span>
              </div>

              {/* Synthetic Voice Waveform */}
              <div className="h-8 flex items-center justify-center gap-1 px-2 bg-[#0A0A0A] rounded-lg border border-white/[0.04]">
                {[4, 12, 18, 24, 14, 8, 20, 28, 16, 10, 22, 15, 7, 19, 25, 12, 6, 18, 22, 9, 14, 8, 5, 11].map(
                  (h, i) => (
                    <span
                      key={i}
                      className="w-1 bg-amber-400/80 rounded-full"
                      style={{ height: `${h}px` }}
                    />
                  )
                )}
              </div>

              <div className="p-2.5 rounded-lg bg-[#181818] text-[11px] text-zinc-300 italic border border-white/[0.04]">
                &quot;Record 20 units industrial coupling and 15 brass valve fittings to client credit ledger&quot;
              </div>

              <div className="text-[10px] text-zinc-500">
                LLM Engine: Groq LLaMA-3 SDK &bull; Real-time Structured Entity Mapping
              </div>
            </div>

            {/* Right: OCR Structured Extraction Matrix */}
            <div className="md:col-span-6 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between text-[11px] border-b border-white/[0.06] pb-2 text-zinc-300">
                <span className="font-semibold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Structured Tax &amp; GST Entity Ledger</span>
                </span>
                <span className="text-[10px] text-zinc-400">OCR PARSED</span>
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between p-1.5 rounded bg-[#181818] text-zinc-300">
                  <span>Vendor Identified</span>
                  <span className="font-semibold text-zinc-100">Shree Durga Traders</span>
                </div>
                <div className="flex justify-between p-1.5 rounded bg-[#181818] text-zinc-300">
                  <span>GSTIN Number</span>
                  <span className="font-mono text-zinc-100">19AAACD4567M1Z2</span>
                </div>
                <div className="flex justify-between p-1.5 rounded bg-[#181818] text-zinc-300">
                  <span>Tax Formulation</span>
                  <span className="font-semibold text-amber-300">CGST (9%) + SGST (9%)</span>
                </div>
              </div>

              <div className="p-2 rounded bg-[#0A0A0A] border border-white/[0.04] flex justify-between items-center text-[10px]">
                <span className="text-zinc-400">ESC/POS Output:</span>
                <span className="text-zinc-200 font-semibold">Thermal Receipt Print Ready</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/[0.04]">
            <span>Pipeline: Physical Invoice &rarr; Tesseract OCR &rarr; Groq Structured Extraction &rarr; Ledger</span>
            <span className="text-amber-400">Next.js &bull; Node.js &bull; MongoDB</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. CardecaAlgo — Real-Time Computer Vision & Detection Transformer
  if (slug === "cardeca-algo") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Cinematic Studio Window Bar */}
        <div className="px-4 py-3 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
            </div>
            <span className="text-[11px] text-zinc-400 font-semibold ml-2">
              cardeca // rtdetr-inference-stream.py
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
              Interactive Engineering Demo
            </span>
          </div>
        </div>

        {/* Viewport: Computer Vision Viewport */}
        <div className="p-4 sm:p-6 space-y-4">
          <div className="relative aspect-[16/9] w-full rounded-xl bg-[#0A0A0A] border border-white/[0.08] overflow-hidden flex flex-col justify-between p-4">
            {/* Coordinate scan grid */}
            <div
              className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Coordinate Bar */}
            <div className="relative z-10 flex justify-between items-center text-[10px] text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>INSPECTION_STREAM: MULTI_ATTRIBUTE_CLASSIFICATION</span>
              </span>
              <span className="text-cyan-400 font-mono">RT-DETR-R50vd &bull; PyTorch Inference</span>
            </div>

            {/* Live Bounding Box Staging Frame */}
            <div className="relative z-10 mx-auto w-4/5 sm:w-3/4 h-28 sm:h-36 rounded-lg border-2 border-cyan-400/80 bg-cyan-500/10 p-2.5 flex flex-col justify-between shadow-[0_0_24px_rgba(6,182,212,0.2)]">
              <div className="flex justify-between items-start">
                <span className="bg-cyan-500 text-black font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded shadow-sm">
                  RT-DETR: VEHICLE_LOCALIZATION [CONF: 0.984]
                </span>
                <span className="text-[9px] text-cyan-300 font-mono bg-black/70 px-1.5 py-0.5 rounded border border-cyan-400/30">
                  BBOX: [48, 112, 320, 160]
                </span>
              </div>

              <div className="space-y-0.5 bg-black/85 backdrop-blur-md p-2 rounded border border-cyan-400/25 text-[10px] text-zinc-200">
                <div className="font-semibold text-cyan-300">
                  PyTorch EfficientNet-B4 Attribute Inspector
                </div>
                <div className="text-zinc-400">
                  Make: Hyundai &bull; Model: Sedan &bull; Color: Polar White &bull; Angle: 3/4 Frontal
                </div>
              </div>
            </div>

            {/* Bottom Stream Status */}
            <div className="relative z-10 flex justify-between items-center text-[10px] text-zinc-400">
              <span>Konva Canvas 2D Vector Layer</span>
              <span className="text-cyan-300">jsPDF Formal Inspection Report Export Ready</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/[0.04]">
            <span>Model: RT-DETR-R50vd &bull; EfficientNet-B4 &bull; Konva 2D &bull; jsPDF</span>
            <span className="text-zinc-300">Sister Nivedita University &bull; Vehicle Intelligence</span>
          </div>
        </div>
      </div>
    );
  }

  // 4. ETHOS — Enterprise Human Resource Management System
  if (slug === "ethos") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Cinematic Studio Window Bar */}
        <div className="px-4 py-3 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
            </div>
            <span className="text-[11px] text-zinc-400 font-semibold ml-2">
              ethos // policy-rag-copilot.tsx
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
              Verified GitHub Repository
            </span>
          </div>
        </div>

        {/* Console Viewport */}
        <div className="p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Left: RAG Policy Query Simulation */}
            <div className="md:col-span-7 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between text-[11px] border-b border-white/[0.06] pb-2 text-zinc-300">
                <span className="font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>RAG Policy Retrieval Assistant</span>
                </span>
                <span className="text-[10px] text-purple-400 font-mono">GROQ LLAMA-3</span>
              </div>

              <div className="p-3 rounded-lg bg-[#0A0A0A] border border-white/[0.04] text-[11px] text-zinc-300 space-y-1.5">
                <div className="text-[10px] text-zinc-500">Query: &quot;What are leave accrual rules for maternity?&quot;</div>
                <div className="leading-relaxed text-zinc-200">
                  &gt; Policy §4.2: &quot;Full-time employees receive 26 paid weeks. Direct automated sign-off submitted to department manager queue.&quot;
                </div>
              </div>

              <div className="text-[10px] text-zinc-500">
                Vector Retrieval: pgvector Cosine Distance &bull; Context Window Augmented
              </div>
            </div>

            {/* Right: Employee Shift & Attendance Model */}
            <div className="md:col-span-5 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3 flex flex-col justify-between">
              <div className="text-[11px] font-semibold text-zinc-300 border-b border-white/[0.06] pb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-zinc-400" />
                <span>Prisma Relational Schema</span>
              </div>

              <div className="space-y-1 text-[11px]">
                <div className="p-1.5 rounded bg-[#181818] flex justify-between text-zinc-300">
                  <span>Shift Scheduling</span>
                  <span className="text-[10px] text-zinc-400">FullCalendar UI</span>
                </div>
                <div className="p-1.5 rounded bg-[#181818] flex justify-between text-zinc-300">
                  <span>Database Engine</span>
                  <span className="text-[10px] text-purple-300">PostgreSQL ACID</span>
                </div>
                <div className="p-1.5 rounded bg-[#181818] flex justify-between text-zinc-300">
                  <span>Role Dashboards</span>
                  <span className="text-[10px] text-zinc-400">Admin/Manager/Staff</span>
                </div>
              </div>

              <div className="text-[10px] text-zinc-500 pt-1">
                Zod Schema Validation &bull; Tailwind CSS &bull; shadcn/ui
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/[0.04]">
            <span>Stack: Next.js 15 App Router &bull; Prisma &bull; PostgreSQL &bull; Groq AI SDK</span>
            <span className="text-zinc-300">Production Ready HR Architecture</span>
          </div>
        </div>
      </div>
    );
  }

  // 5. RelancePay — Multi-Currency SaaS Billing Platform
  if (slug === "relancepay") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        <div className="px-4 py-3 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
            </div>
            <span className="text-[11px] text-zinc-400 font-semibold ml-2">
              relancepay // currency-router.ts
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
              SaaS Platform Architecture
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-6 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between text-[11px] border-b border-white/[0.06] pb-2 text-zinc-300">
                <span className="font-semibold flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Multi-Currency Routing Matrix</span>
                </span>
                <span className="text-[10px] text-cyan-400">IDEMPOTENT</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-[#181818] border border-white/[0.04]">
                  <div className="text-[10px] text-zinc-500">Tier 1 Currencies</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">USD &bull; EUR &bull; INR &bull; GBP</div>
                </div>
                <div className="p-2 rounded bg-[#181818] border border-white/[0.04]">
                  <div className="text-[10px] text-zinc-500">Tax Engines</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">Automated GST &amp; VAT</div>
                </div>
              </div>

              <div className="text-[10px] text-zinc-500">
                Webhook Verification &bull; Idempotency Keys &bull; Signed Payloads
              </div>
            </div>

            <div className="md:col-span-6 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between text-[11px] border-b border-white/[0.06] pb-2 text-zinc-300">
                <span className="font-semibold">Invoice Generation &amp; Thermal Print</span>
                <span className="text-[10px] text-zinc-400">PDF RENDER</span>
              </div>

              <div className="space-y-1.5 text-[11px] text-zinc-300">
                <div className="p-1.5 rounded bg-[#181818] flex justify-between">
                  <span>Custom Watermark Stamping</span>
                  <span className="text-zinc-400">Enterprise Ready</span>
                </div>
                <div className="p-1.5 rounded bg-[#181818] flex justify-between">
                  <span>Dual Tax Mode Switching</span>
                  <span className="text-zinc-400">Configurable</span>
                </div>
              </div>

              <div className="text-[10px] text-zinc-500">
                jsPDF Engine &bull; Auto-Pagination &bull; Base64 Serialization
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/[0.04]">
            <span>Stack: React &bull; Tailwind CSS &bull; Node.js &bull; jsPDF Engine</span>
            <span className="text-zinc-300">Full-Stack SaaS Architecture</span>
          </div>
        </div>
      </div>
    );
  }

  // 6. VAYRIN — Emergency Healthcare Coordination Network
  if (slug === "vayrin") {
    return (
      <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        <div className="px-4 py-3 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
            </div>
            <span className="text-[11px] text-zinc-400 font-semibold ml-2">
              vayrin // emergency-dispatch-router.ts
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
              Platform Concept &amp; Architecture
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-7 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between text-[11px] border-b border-white/[0.06] pb-2 text-zinc-300">
                <span className="font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-rose-400" />
                  <span>Ambulance Telematics &amp; Fleet Coordination</span>
                </span>
                <span className="text-[10px] text-rose-400 font-mono">DISPATCH ACTIVE</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-white/[0.04] space-y-1.5 text-[11px] text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Dispatched Fleet Unit:</span>
                  <span className="text-zinc-200 font-semibold">Trauma Ambulance #104</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Routing Destination:</span>
                  <span className="text-zinc-200">Central Medical Trauma Hub</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Status Verification:</span>
                  <span className="text-rose-400 font-semibold">Live Route Optimization Active</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 p-4 rounded-xl bg-[#141414] border border-white/[0.06] space-y-3 flex flex-col justify-between">
              <div className="text-[11px] font-semibold text-zinc-300 border-b border-white/[0.06] pb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-zinc-400" />
                <span>Hospital Tri-Node Coordination</span>
              </div>

              <div className="space-y-1 text-[11px]">
                <div className="p-1.5 rounded bg-[#181818] flex justify-between text-zinc-300">
                  <span>Hospital ER Queue</span>
                  <span className="text-[10px] text-zinc-400">Direct Ingest</span>
                </div>
                <div className="p-1.5 rounded bg-[#181818] flex justify-between text-zinc-300">
                  <span>Blood Bank Protocol</span>
                  <span className="text-[10px] text-zinc-400">Cross-Match Node</span>
                </div>
              </div>

              <div className="text-[10px] text-zinc-500 pt-1">
                Role-Based Audit Logging &bull; MongoDB Clusters
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/[0.04]">
            <span>Stack: React &bull; Node.js Express &bull; MongoDB &bull; REST APIs</span>
            <span className="text-zinc-300">Healthcare Infrastructure Architecture</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback Viewport
  return (
    <div className="w-full rounded-2xl bg-[#0F0F0F] border border-white/[0.08] p-6 text-zinc-300 font-mono-code text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <span className="font-semibold">{title}</span>
        <span className="text-[10px] text-zinc-500">System Architecture</span>
      </div>
      <p className="mt-4 text-zinc-400 leading-relaxed font-sans">
        Verified full-stack implementation with strictly isolated business logic, scalable database architecture, and accessible frontend interfaces.
      </p>
    </div>
  );
}
