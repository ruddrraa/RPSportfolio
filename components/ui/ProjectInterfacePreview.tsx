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
  // 1. EtechCRM 2D Interface Presentation (Purged & Verified)
  if (slug === "etechcrm") {
    return (
      <div className="w-full rounded-2xl bg-[#141414] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Prominent Illustrative Header */}
        <div className="px-4 py-3 bg-[#1A1A1A] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-[#888888]">[ILLUSTRATIVE ENTERPRISE WORKFLOW]</span>
            <span className="text-[#555555]">&bull;</span>
            <span className="text-white font-medium">VERIFIED SYSTEM ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-2 text-white text-[10px] bg-white/[0.08] px-2.5 py-0.5 rounded border border-white/[0.15]">
            <span>ROLE-BASED ACCESS CONTROL (RBAC)</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Architecture Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl bg-[#181818] border border-white/[0.06]">
              <div className="text-[10px] text-[#888888]">Client Management</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                Role-Based Client Management (Super Admin, Head, Executive)
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#181818] border border-white/[0.06]">
              <div className="text-[10px] text-[#888888]">Field Operations</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                GPS &amp; Timestamp Field Visit Logging
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#181818] border border-white/[0.06]">
              <div className="text-[10px] text-[#888888]">Data Isolation</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                Workspace Tenant Isolation via Express Middleware
              </div>
            </div>
          </div>

          {/* Verified Schema Definition */}
          <div className="p-3.5 rounded-xl bg-[#101010] border border-white/[0.06] space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-white font-semibold">
                Client Directory &amp; Account Profiles (Data Isolation by Workspace)
              </span>
              <span className="text-stone-300 text-[10px]">Mongoose Schema</span>
            </div>

            <div className="text-[11px] text-[#A6A6A6] space-y-1 bg-[#161616] p-3 rounded-lg border border-white/[0.04]">
              <div className="text-[#888888] text-[10px] uppercase tracking-wider">Field Visit Record Contract:</div>
              <div className="text-[#D4D0C8] font-mono-code text-[10px] space-y-0.5 pt-1">
                <div>coordinates: &#123; lat: Float, lng: Float &#125;</div>
                <div>timestamp: ISODate (System Verified)</div>
                <div>remarks: &quot;Scheduled client hardware inspection and maintenance review&quot;</div>
                <div>followUpRequired: true</div>
                <div>photoUrl: &quot;https://res.cloudinary.com/.../signed-field-log.webp&quot;</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#77736C] pt-1">
            <span>Stack: React 19 &bull; Vite &bull; Node.js Express 5 &bull; MongoDB Atlas</span>
            <span className="text-[#D4D0C8] font-medium">Production Client System &bull; Excel Technologies</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. MunshiJi AI 2D Interface Presentation (Purged & Verified)
  if (slug === "munshiji-ai") {
    return (
      <div className="w-full rounded-2xl bg-[#141414] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Prominent Illustrative Header */}
        <div className="px-4 py-3 bg-[#1A1A1A] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-[#888888]">[ILLUSTRATIVE OCR WORKFLOW]</span>
            <span className="text-[#555555]">&bull;</span>
            <span className="text-white font-medium">GROQ VISION &amp; OCR INGESTION FLOW</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 text-[10px] bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            <Volume2 className="w-3 h-3" />
            <span>VOICE &amp; RECEIPT PARSER</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Sample Voice / Text Prompt Simulation */}
          <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-1.5">
            <div className="text-[10px] text-amber-400 flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3 h-3" />
              <span>[Illustrative Sample Natural Language Voice Query]</span>
            </div>
            <div className="text-xs text-[#E5E5E5] italic">
              &quot;Record 20 units industrial coupling and 15 brass valve fittings to client credit ledger&quot;
            </div>
          </div>

          {/* Structured OCR Extraction Mockup */}
          <div className="rounded-xl bg-[#181818] border border-white/[0.06] p-3 space-y-2">
            <div className="flex justify-between items-center text-[10px] border-b border-white/[0.06] pb-1.5 text-[#888888]">
              <span>[ILLUSTRATIVE OCR EXTRACTION MOCKUP]</span>
              <span>PARSED TAX &amp; TOTALS</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between text-[#D4D0C8]">
                <span>Industrial Coupling Components (20 units)</span>
                <span>Structured Line Item</span>
              </div>
              <div className="flex justify-between text-[#D4D0C8]">
                <span>Brass Valve Fittings (15 units)</span>
                <span>Structured Line Item</span>
              </div>
              <div className="flex justify-between text-[10px] text-white pt-1 border-t border-white/[0.06]">
                <span>Automated GST Calculation (CGST 9% + SGST 9%)</span>
                <span>Verified Tax Aggregator</span>
              </div>
            </div>
          </div>

          {/* Ledger Workflow Schema */}
          <div className="p-2.5 rounded-lg bg-[#101010] border border-white/[0.06] flex justify-between items-center text-[10px]">
            <span className="text-[#888888]">Chronological Credit Ledger:</span>
            <span className="text-[#E7E4DC] font-semibold">Customer Ledger Audit Trail &bull; Thermal ESC/POS Export</span>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#77736C]">
            <span>Pipeline: Physical Invoice &rarr; OCR Text &rarr; Groq Structured JSON &rarr; Ledger</span>
            <span className="text-amber-400">Live Active Prototype</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. CardecaAlgo 2D Interface Presentation (Purged & Verified)
  if (slug === "cardeca-algo") {
    return (
      <div className="w-full rounded-2xl bg-[#141414] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Prominent Illustrative Header */}
        <div className="px-4 py-3 bg-[#1A1A1A] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-[#888888]">[ILLUSTRATIVE OBJECT DETECTION CANVAS]</span>
            <span className="text-[#555555]">&bull;</span>
            <span className="text-white font-medium">RT-DETR-R50vd + PyTorch EfficientNet-B4</span>
          </div>
          <div className="flex items-center gap-1.5 text-blue-400 text-[10px] bg-blue-400/10 px-2 py-0.5 rounded border border-blue-400/20">
            <Cpu className="w-3 h-3" />
            <span>DEEP LEARNING PIPELINE</span>
          </div>
        </div>

        {/* Visual Computer Vision Bounding Box Canvas Simulation */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Simulated Camera Viewport with Bounding Box Overlay */}
          <div className="relative aspect-[16/9] w-full rounded-xl bg-[#0D0D0D] border border-white/[0.08] overflow-hidden flex flex-col justify-between p-3 sm:p-4">
            {/* Grid Scan Lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

            {/* Top Viewport Header */}
            <div className="relative z-10 flex justify-between text-[10px] text-[#888888]">
              <span>SAMPLE_STREAM: VEHICLE_INSPECTION_BENCHMARK</span>
              <span className="text-blue-400">
                Real-Time Object Localization &amp; Interactive Bounding Box Inspection
              </span>
            </div>

            {/* Detected Vehicle Bounding Box Overlay (Pure CSS Precision) */}
            <div className="relative z-10 mx-auto w-4/5 sm:w-3/4 h-28 sm:h-36 rounded-lg border-2 border-blue-400/90 bg-blue-500/10 p-2 flex flex-col justify-between shadow-[0_0_20px_rgba(59,130,246,0.25)]">
              {/* Bounding Box Reticles */}
              <div className="flex justify-between items-start">
                <span className="bg-blue-600 text-white font-bold text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded shadow">
                  RT-DETR: VEHICLE_DETECTION [CONF: 0.96]
                </span>
                <span className="text-[9px] text-blue-300 font-bold bg-black/60 px-1 rounded">
                  SAMPLE #0842
                </span>
              </div>

              <div className="space-y-0.5 bg-black/80 backdrop-blur-md p-1.5 rounded border border-blue-400/30 text-[9px] sm:text-[10px] text-white">
                <div className="font-semibold text-blue-300">
                  PyTorch EfficientNet-B4 Multi-Attribute Classifier
                </div>
                <div className="text-[#CCCCCC]">Classification: Sedan &bull; Class: Mid-Size &bull; Color: Grey</div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="relative z-10 flex justify-between items-center text-[10px] text-[#A6A6A6]">
              <span>Konva Canvas 2D Vector Layer</span>
              <span className="text-blue-400 font-semibold">jsPDF Inspection Certificate Export Ready</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#77736C]">
            <span>Model: RT-DETR-R50vd + EfficientNet-B4 &bull; Konva 2D</span>
            <span className="text-[#E7E4DC]">Interactive Engineering Demo</span>
          </div>
        </div>
      </div>
    );
  }

  // 4. ETHOS 2D Interface Presentation (Purged & Verified)
  if (slug === "ethos") {
    return (
      <div className="w-full rounded-2xl bg-[#141414] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Prominent Illustrative Header */}
        <div className="px-4 py-3 bg-[#1A1A1A] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-[#888888]">[ILLUSTRATIVE HRMS WORKFLOW]</span>
            <span className="text-[#555555]">&bull;</span>
            <span className="text-white font-medium">ENTERPRISE SYSTEM ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-1.5 text-purple-400 text-[10px] bg-purple-400/10 px-2 py-0.5 rounded border border-purple-400/20">
            <Users className="w-3 h-3" />
            <span>ROLE: HR_ADMINISTRATOR</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Groq AI Assistant Chat Simulation */}
          <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 space-y-2">
            <div className="flex items-center justify-between text-[10px] text-purple-400 font-bold">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>GROQ LLAMA-3 API POLICY ASSISTANT</span>
              </span>
              <span className="text-[#888888]">RAG POLICY COPILOT</span>
            </div>
            <div className="text-[11px] text-[#DDDDDD] leading-relaxed bg-[#101010] p-2.5 rounded-lg border border-white/[0.06]">
              &quot;Sample HR Query: Under Section 4.2 of Company Policy, maternity leave allows 26 paid weeks. Verified automated manager sign-off workflow active.&quot;
            </div>
          </div>

          {/* Attendance & Shift Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 rounded-xl bg-[#181818] border border-white/[0.06]">
              <div className="text-[10px] text-[#888888]">Shift Scheduling &amp; Leaves</div>
              <div className="text-[#E7E4DC] font-medium text-xs mt-0.5">
                Interactive Shift Scheduling &amp; Leave Tracking via FullCalendar
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#181818] border border-white/[0.06]">
              <div className="text-[10px] text-[#888888]">Database Engine</div>
              <div className="text-purple-300 font-medium text-xs mt-0.5">
                Prisma ORM &bull; PostgreSQL ACID Relational Model
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#77736C]">
            <span>Next.js 15 App Router &bull; Prisma &bull; PostgreSQL &bull; Groq AI SDK</span>
            <span className="text-[#D4D0C8]">Verified GitHub Repository</span>
          </div>
        </div>
      </div>
    );
  }

  // 5. RelancePay 2D Interface Presentation (Purged & Verified)
  if (slug === "relancepay") {
    return (
      <div className="w-full rounded-2xl bg-[#141414] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Prominent Illustrative Header */}
        <div className="px-4 py-3 bg-[#1A1A1A] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-[#888888]">[ILLUSTRATIVE INVOICE PREVIEW]</span>
            <span className="text-[#555555]">&bull;</span>
            <span className="text-white font-medium">MULTI-CURRENCY BILLING ENGINE</span>
          </div>
          <div className="flex items-center gap-1.5 text-cyan-400 text-[10px] bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
            <DollarSign className="w-3 h-3" />
            <span>DUAL TAX ARCHITECTURE</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Dual Tax Mode Switcher Simulation */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#181818] border border-white/[0.06]">
            <span className="text-[11px] text-[#A6A6A6]">Billing Configuration Mode:</span>
            <div className="flex gap-1.5">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                Domestic GST (18%)
              </span>
              <span className="px-2 py-0.5 rounded bg-[#101010] text-[#888888] text-[10px]">
                Global USD / EUR (Flat)
              </span>
            </div>
          </div>

          {/* Sample Invoice Structure */}
          <div className="p-3.5 rounded-xl bg-[#101010] border border-white/[0.06] space-y-2">
            <div className="flex justify-between items-center text-[11px] text-white">
              <span>Client Profile: Verified Client Account (Sample Invoicing Structure)</span>
              <span className="text-[10px] text-[#888888]">Invoice Template Schema</span>
            </div>
            <div className="space-y-1 text-[10px] text-[#888888] pt-1 border-t border-white/[0.06]">
              <div className="flex justify-between">
                <span>Core Engineering &amp; UI Architecture Services</span>
                <span className="text-[#D4D0C8]">Dynamic Unit Calculation</span>
              </div>
              <div className="flex justify-between text-cyan-400">
                <span>Calculated Tax Mode (Dual: Domestic GST vs Foreign Remittance)</span>
                <span>Automated Tax Rules</span>
              </div>
              <div className="flex justify-between font-bold text-white text-[11px] pt-1 border-t border-white/[0.06]">
                <span>Total Invoice Due</span>
                <span className="text-cyan-300">Dynamic Multi-Currency Total</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#77736C]">
            <span>Dynamic Client-Side PDF &bull; Cloudinary Signed Attachments &bull; Resend Dispatch</span>
            <span className="text-[#E7E4DC]">Live Web Application</span>
          </div>
        </div>
      </div>
    );
  }

  // 6. VAYRIN 2D Interface Presentation (Purged & Replaced with Clean Architectural Node Coordination Diagram)
  return (
    <div className="w-full rounded-2xl bg-[#141414] border border-white/[0.08] overflow-hidden shadow-2xl font-mono-code text-xs">
      {/* Prominent Architectural Header */}
      <div className="px-4 py-3 bg-[#1A1A1A] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-white font-bold">[PLATFORM CONCEPT &amp; ARCHITECTURAL SPECIFICATION]</span>
        </div>
        <div className="flex items-center gap-1.5 text-stone-300 text-[10px] bg-white/[0.06] px-2 py-0.5 rounded border border-white/[0.08]">
          <Radio className="w-3 h-3 text-white" />
          <span>WebSocket Event Architecture (Concept)</span>
        </div>
      </div>

      {/* Content: Architectural Node Coordination Flow */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Coordination Pipeline Banner */}
        <div className="p-3.5 rounded-xl bg-stone-900/60 border border-white/[0.06] space-y-2">
          <div className="text-[10px] text-[#888888] uppercase tracking-wider">
            Multi-Node Emergency Dispatch Coordination Pipeline
          </div>
          <div className="flex items-center gap-2 text-[11px] text-[#E7E4DC] overflow-x-auto pb-1 no-scrollbar">
            <span className="px-2.5 py-1 rounded-md bg-[#222222] border border-white/[0.08] whitespace-nowrap">
              Dispatcher Intake
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white/60 shrink-0" />
            <span className="px-2.5 py-1 rounded-md bg-[#222222] border border-white/[0.08] whitespace-nowrap">
              WebSocket Event Bus
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white/60 shrink-0" />
            <span className="px-2.5 py-1 rounded-md bg-[#222222] border border-white/[0.08] whitespace-nowrap">
              In-Transit Transit Units
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white/60 shrink-0" />
            <span className="px-2.5 py-1 rounded-md bg-[#222222] border border-white/[0.08] whitespace-nowrap">
              Trauma Center Reception
            </span>
          </div>
        </div>

        {/* 3 Architectural Nodes Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px]">
          <div className="p-3 rounded-xl bg-[#181818] border border-white/[0.06] space-y-1">
            <div className="text-[10px] text-white font-semibold">Node 01: Dispatch Console</div>
            <div className="text-[#D4D0C8] text-[10px] leading-relaxed">
              Caller intake, priority triage categorization, dynamic ambulance unit assignment.
            </div>
          </div>
          <div className="p-3 rounded-xl bg-[#181818] border border-white/[0.06] space-y-1">
            <div className="text-[10px] text-white font-semibold">Node 02: Transit Navigation</div>
            <div className="text-[#D4D0C8] text-[10px] leading-relaxed">
              Location updates, transit state synchronization, and dynamic ETA estimation.
            </div>
          </div>
          <div className="p-3 rounded-xl bg-[#181818] border border-white/[0.06] space-y-1">
            <div className="text-[10px] text-white font-semibold">Node 03: Trauma Reception</div>
            <div className="text-[#D4D0C8] text-[10px] leading-relaxed">
              Advance clinical notification, bed availability coordination, trauma intake readiness.
            </div>
          </div>
        </div>

        {/* Platform Data Schema Specification */}
        <div className="p-2.5 rounded-lg bg-[#101010] border border-white/[0.06] text-[10px] text-[#888888] space-y-1">
          <div>Conceptual Event Schema:</div>
          <div className="text-[#CCCCCC] font-mono-code text-[10px]">
            &#123; incidentId: UUID, priorityLevel: Enum, unitState: String, facilityTarget: String, timestamp: ISO &#125;
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#77736C]">
          <span>Architecture: Next.js &bull; Supabase Realtime (WebSockets) &bull; PostgreSQL Data Models</span>
          <span className="text-zinc-300 font-medium">Concept Specification (Not Live Deployed)</span>
        </div>
      </div>
    </div>
  );
}
