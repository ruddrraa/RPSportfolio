"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Shield,
  Activity,
  MapPin,
  Clock,
  CheckCircle,
  FileText,
  DollarSign,
  AlertTriangle,
  Cpu,
  Terminal,
  Volume2,
  Calendar,
  Sparkles,
  Search,
  Sliders,
  Send,
  Users,
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
  // State for interactive elements in the preview
  const [activeTab, setActiveTab] = useState<string>("default");

  // 1. EtechCRM 2D Interface Presentation
  if (slug === "etechcrm") {
    return (
      <div className="w-full rounded-2xl bg-[#0D0D0D] border border-[#262626] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Window Topbar */}
        <div className="px-4 py-3 bg-[#141414] border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[#777777] text-[11px]">
              excel-credlecrm-three.vercel.app / portal
            </span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 text-[10px] bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
            <span>GPS ACTIVE</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Header Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
              <div className="text-[10px] text-[#777777]">Client Accounts</div>
              <div className="text-sm sm:text-base font-bold text-white">1,420 Active</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
              <div className="text-[10px] text-[#777777]">Field Visits Today</div>
              <div className="text-sm sm:text-base font-bold text-emerald-400">28 Logged</div>
            </div>
            <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
              <div className="text-[10px] text-[#777777]">Data Isolation</div>
              <div className="text-sm sm:text-base font-bold text-white">RBAC Team-Scoped</div>
            </div>
          </div>

          {/* Active Field Visit Log */}
          <div className="p-3.5 rounded-xl bg-[#121212] border border-[#242424] space-y-2.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-white font-semibold">Latest Field Verification</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>Verified GPS</span>
              </span>
            </div>

            <div className="text-[11px] text-[#A6A6A6] space-y-1 bg-[#161616] p-2.5 rounded-lg border border-[#222222]">
              <div className="text-white">Account: Excel Metro Distribution Hub</div>
              <div className="text-[10px] text-[#777777] flex flex-wrap gap-x-3 gap-y-1">
                <span>Coord: 22.5726° N, 88.3639° E</span>
                <span>Time: 14:32 IST</span>
                <span>Executive: EX-04</span>
              </div>
              <div className="text-[10px] text-emerald-400/90 pt-0.5">
                Remarks: Annual SLA audit complete. Follow-up scheduled 2026-12-05.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#666666] pt-1">
            <span>Stack: React 19 &bull; Vite &bull; MongoDB Atlas</span>
            <span className="text-white font-medium">Status: Production Live</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. MunshiJi AI 2D Interface Presentation
  if (slug === "munshiji-ai") {
    return (
      <div className="w-full rounded-2xl bg-[#0D0D0D] border border-[#262626] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Window Topbar */}
        <div className="px-4 py-3 bg-[#141414] border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-amber-400 text-[11px] font-semibold">
              MunshiJi AI &bull; Smart POS & MSME Ledger
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 text-[10px] bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            <Volume2 className="w-3 h-3" />
            <span>VOICE OS ONLINE</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Voice Prompt Simulation */}
          <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-1.5">
            <div className="text-[10px] text-amber-400 flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3 h-3" />
              <span>NATURAL LANGUAGE VOICE QUERY PARSED</span>
            </div>
            <div className="text-xs text-[#E5E5E5] italic">
              &quot;Add 12 bags basmati rice 10kg and 5 sunflower oil canisters to Ramesh Kirana udhaar ledger&quot;
            </div>
          </div>

          {/* Structured Invoice Line Items */}
          <div className="rounded-xl bg-[#141414] border border-[#222222] p-3 space-y-2">
            <div className="flex justify-between text-[11px] border-b border-[#262626] pb-1.5 text-[#888888]">
              <span>ITEM DESCRIPTION</span>
              <span>TOTAL (INC. GST)</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between text-white">
                <span>Basmati Rice (10kg &times; 12)</span>
                <span>₹10,800.00</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Sunflower Oil (5L &times; 5)</span>
                <span>₹3,450.00</span>
              </div>
              <div className="flex justify-between text-[10px] text-emerald-400 pt-1 border-t border-[#1F1F1F]">
                <span>Calculated CGST (9%) + SGST (9%)</span>
                <span>₹2,173.72</span>
              </div>
            </div>
          </div>

          {/* Ledger Update Pill */}
          <div className="p-2.5 rounded-lg bg-[#161616] border border-[#282828] flex justify-between items-center text-[10px]">
            <span className="text-[#888888]">Customer Udhaar Ledger:</span>
            <span className="text-white font-semibold">Updated Balance: ₹14,250.00</span>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#666666]">
            <span>Groq AI OCR &bull; Fast GST Invoicing</span>
            <span className="text-amber-400">Thermal Print Ready</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. CardecaAlgo 2D Interface Presentation
  if (slug === "cardeca-algo") {
    return (
      <div className="w-full rounded-2xl bg-[#0D0D0D] border border-[#262626] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Window Topbar */}
        <div className="px-4 py-3 bg-[#141414] border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-blue-400 text-[11px] font-semibold">
              cardecalgo.vercel.app / inference
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-blue-400 text-[10px] bg-blue-400/10 px-2 py-0.5 rounded border border-blue-400/20">
            <Cpu className="w-3 h-3" />
            <span>RT-DETR ONLINE (24ms)</span>
          </div>
        </div>

        {/* Visual Computer Vision Bounding Box Canvas Simulation */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Simulated Camera Viewport with Bounding Box Overlay */}
          <div className="relative aspect-[16/9] w-full rounded-xl bg-[#111111] border border-[#2B2B2B] overflow-hidden flex flex-col justify-between p-3 sm:p-4">
            {/* Grid Scan Lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

            {/* Top Viewport Header */}
            <div className="relative z-10 flex justify-between text-[10px] text-[#777777]">
              <span>FEED: CAM_01_FRONTAL</span>
              <span className="text-emerald-400">FPS: 42.6 &bull; RES: 1920&times;1080</span>
            </div>

            {/* Detected Vehicle Bounding Box Overlay (Pure CSS Precision) */}
            <div className="relative z-10 mx-auto w-4/5 sm:w-3/4 h-28 sm:h-36 rounded-lg border-2 border-blue-400/90 bg-blue-500/10 p-2 flex flex-col justify-between shadow-[0_0_20px_rgba(59,130,246,0.25)]">
              {/* Bounding Box Corner Reticles */}
              <div className="flex justify-between items-start">
                <span className="bg-blue-600 text-white font-bold text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded shadow">
                  RT-DETR: VEHICLE [0.96]
                </span>
                <span className="text-[9px] text-blue-300 font-bold bg-black/60 px-1 rounded">
                  ID #0842
                </span>
              </div>

              <div className="space-y-0.5 bg-black/80 backdrop-blur-md p-1.5 rounded border border-blue-400/30 text-[9px] sm:text-[10px] text-white">
                <div className="font-semibold text-emerald-400">
                  Classifier: PyTorch EfficientNet
                </div>
                <div className="text-[#CCCCCC]">Make: Sedan &bull; Class: Mid-Size &bull; Color: Grey</div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="relative z-10 flex justify-between items-center text-[10px] text-[#A6A6A6]">
              <span>Konva Canvas 2D Overlay</span>
              <span className="text-blue-400 font-semibold">jsPDF Report Ready</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#666666]">
            <span>Model: RT-DETR + EfficientNet</span>
            <span className="text-emerald-400">Live Web App Deployed</span>
          </div>
        </div>
      </div>
    );
  }

  // 4. ETHOS 2D Interface Presentation
  if (slug === "ethos") {
    return (
      <div className="w-full rounded-2xl bg-[#0D0D0D] border border-[#262626] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Topbar */}
        <div className="px-4 py-3 bg-[#141414] border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-purple-400 text-[11px] font-semibold">
              ETHOS &bull; Enterprise HR & AI Copilot
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-purple-400 text-[10px] bg-purple-400/10 px-2 py-0.5 rounded border border-purple-400/20">
            <Users className="w-3 h-3" />
            <span>ROLE: ADMIN</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Groq AI Assistant Chat Simulation */}
          <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 space-y-2">
            <div className="flex items-center justify-between text-[10px] text-purple-400 font-bold">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>GROQ AI HR POLICY ASSISTANT</span>
              </span>
              <span>LATENCY: 120ms</span>
            </div>
            <div className="text-[11px] text-[#DDDDDD] leading-relaxed bg-[#141414] p-2.5 rounded-lg border border-[#222222]">
              &quot;Under Section 4.2 of Company Policy, maternity leave allows 26 paid weeks. Employee #109 is fully eligible with automated manager approval.&quot;
            </div>
          </div>

          {/* Attendance & Shift Summary */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 rounded-xl bg-[#141414] border border-[#242424]">
              <div className="text-[10px] text-[#777777]">FullCalendar Shifts</div>
              <div className="text-white font-semibold mt-0.5">94% Attendance</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#141414] border border-[#242424]">
              <div className="text-[10px] text-[#777777]">Prisma ORM</div>
              <div className="text-emerald-400 font-semibold mt-0.5">PostgreSQL Synced</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#666666]">
            <span>Next.js 15 App Router &bull; Prisma</span>
            <span className="text-white">Multi-Tier RBAC</span>
          </div>
        </div>
      </div>
    );
  }

  // 5. RelancePay 2D Interface Presentation
  if (slug === "relancepay") {
    return (
      <div className="w-full rounded-2xl bg-[#0D0D0D] border border-[#262626] overflow-hidden shadow-2xl font-mono-code text-xs">
        {/* Topbar */}
        <div className="px-4 py-3 bg-[#141414] border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-cyan-400 text-[11px] font-semibold">
              relancepay.vercel.app / invoice-builder
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-cyan-400 text-[10px] bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
            <DollarSign className="w-3 h-3" />
            <span>INR / USD ENGINE</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Dual Tax & Multi-Currency Switcher Simulation */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#141414] border border-[#242424]">
            <span className="text-[11px] text-[#A6A6A6]">Billing Mode:</span>
            <div className="flex gap-1.5">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                INR (GST 18%)
              </span>
              <span className="px-2 py-0.5 rounded bg-[#1C1C1C] text-[#888888] text-[10px]">
                USD Global (Flat)
              </span>
            </div>
          </div>

          {/* Invoice Summary Box */}
          <div className="p-3.5 rounded-xl bg-[#121212] border border-[#242424] space-y-2">
            <div className="flex justify-between text-[11px] text-white">
              <span>Client: FinTech Labs Global</span>
              <span>Invoice #RP-2026-089</span>
            </div>
            <div className="space-y-1 text-[10px] text-[#888888] pt-1 border-t border-[#1F1F1F]">
              <div className="flex justify-between">
                <span>Subtotal (Consulting & Dev)</span>
                <span className="text-white">₹85,000.00</span>
              </div>
              <div className="flex justify-between text-cyan-400">
                <span>Calculated GST (18%)</span>
                <span>₹15,300.00</span>
              </div>
              <div className="flex justify-between font-bold text-white text-[11px] pt-1 border-t border-[#222222]">
                <span>Total Due</span>
                <span className="text-emerald-400">₹100,300.00</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#666666]">
            <span>Dynamic PDF &bull; Cloudinary Signed</span>
            <span className="text-cyan-400">Resend Email Automated</span>
          </div>
        </div>
      </div>
    );
  }

  // 6. VAYRIN 2D Interface Presentation
  return (
    <div className="w-full rounded-2xl bg-[#0D0D0D] border border-[#262626] overflow-hidden shadow-2xl font-mono-code text-xs">
      {/* Topbar */}
      <div className="px-4 py-3 bg-[#141414] border-b border-[#222222] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-red-400 text-[11px] font-semibold">
            VAYRIN &bull; Emergency Dispatch Telemetry
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-red-400 text-[10px] bg-red-400/10 px-2 py-0.5 rounded border border-red-400/20">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>REAL-TIME DISPATCH</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Active Incident Dispatch Alert */}
        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-red-400 font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>INCIDENT #EMG-902 IN TRANSIT</span>
            </span>
            <span className="text-white font-mono-code">ETA: 04m 20s</span>
          </div>
          <div className="text-[10px] text-[#CCCCCC]">
            Destination: Trauma Care Unit 3 &bull; Route: EM Bypass Express
          </div>
        </div>

        {/* Live Patient Telemetry & Hospital Capacity */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#242424] space-y-1">
            <div className="text-[#777777]">Patient Telemetry</div>
            <div className="text-emerald-400 font-bold text-xs">Heart Rate: 82 bpm</div>
            <div className="text-white">SpO2: 98% Normal</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#242424] space-y-1">
            <div className="text-[#777777]">Hospital Capacity</div>
            <div className="text-white font-bold text-xs">ICU Beds: 3 Available</div>
            <div className="text-emerald-400">Blood Bank: O+ Ready</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#666666]">
          <span>Supabase Realtime WebSockets</span>
          <span className="text-red-400">Audit Logs Encrypted</span>
        </div>
      </div>
    </div>
  );
}

