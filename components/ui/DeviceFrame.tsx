"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { ExternalLink, Terminal, Shield, CheckCircle } from "lucide-react";

interface DeviceFrameProps {
  type: "laptop" | "tablet" | "mobile" | "kiosk";
  title: string;
  image?: string;
  accentColor?: string;
  children?: ReactNode;
}

export function DeviceFrame({ type, title, image, accentColor = "#3b82f6", children }: DeviceFrameProps) {
  if (type === "mobile") {
    return (
      <div className="relative mx-auto w-[240px] sm:w-[280px] rounded-[36px] p-2.5 bg-[#181818] border border-[#2E2E2E] shadow-2xl shadow-black/80">
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-end px-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
        </div>

        {/* Screen */}
        <div className="relative aspect-[9/18] w-full rounded-[28px] overflow-hidden bg-[#111111] border border-white/5 flex flex-col justify-between p-4">
          {image ? (
            <div className="relative w-full h-full flex flex-col justify-center items-center">
              <div className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-xl mx-auto bg-[#222222] border border-[#333333] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <div className="font-mono-code text-xs font-semibold text-white">{title}</div>
                <div className="text-[10px] text-[#888888]">Emergency Healthcare Coordination</div>
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div className="relative mx-auto w-full max-w-[420px] rounded-[28px] p-3 bg-[#181818] border border-[#2E2E2E] shadow-2xl shadow-black/80">
        <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden bg-[#121212] border border-white/5 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#222222] pb-2">
            <span className="font-mono-code text-[11px] text-[#A6A6A6]">RelancePay • Invoice Console</span>
            <span className="text-[10px] text-emerald-400 font-mono-code">Status: Active</span>
          </div>
          <div className="space-y-2 py-4">
            <div className="h-4 bg-[#222222] rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-[#1C1C1C] rounded w-1/2" />
            <div className="h-4 bg-[#1C1C1C] rounded w-5/6" />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono-code text-[#777777]">
            <span>Currency: INR / USD</span>
            <span>GST Engine: Verified</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "kiosk") {
    return (
      <div className="relative mx-auto w-full max-w-[440px] rounded-2xl p-3 bg-[#1C1C1C] border border-[#2E2E2E] shadow-2xl shadow-black/80">
        {/* Kiosk Display Screen */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#111111] border border-white/5 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#222222] pb-2">
            <span className="font-mono-code text-xs font-medium text-amber-400">MunshiJi AI • POS Terminal</span>
            <span className="text-[10px] bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded-full font-mono-code">Voice Ready</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
              <div className="text-[10px] text-[#777777]">Daily Invoices</div>
              <div className="text-sm font-bold text-white font-mono-code">GST Auto-Filed</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
              <div className="text-[10px] text-[#777777]">Credit Ledger</div>
              <div className="text-sm font-bold text-emerald-400 font-mono-code">Synchronized</div>
            </div>
          </div>
          <div className="text-[10px] font-mono-code text-[#666666] flex items-center justify-between">
            <span>Thermal Print Engine</span>
            <span>v2.4 Production</span>
          </div>
        </div>
      </div>
    );
  }

  // Default Laptop
  return (
    <div className="relative mx-auto w-full max-w-[540px] rounded-xl p-2 md:p-3 bg-[#1E1E1E] border border-[#2E2E2E] shadow-2xl shadow-black/80">
      {/* Laptop top bar */}
      <div className="flex items-center justify-between px-2 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]" />
        </div>
        <div className="text-[10px] font-mono-code text-[#777777] truncate max-w-[200px]">
          https://{title.toLowerCase()}.production
        </div>
        <div className="w-4" />
      </div>

      {/* Screen Viewport */}
      <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#111111] border border-white/5 flex flex-col justify-between p-4 md:p-5">
        {image ? (
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <div className="relative w-28 md:w-36 h-12 md:h-16 mb-2">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 200px"
              />
            </div>
            <div className="text-xs font-mono-code text-[#A6A6A6] text-center">
              Verified Production Portal
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-2">
              <div className="h-3 bg-[#262626] rounded w-1/3" />
              <div className="h-2.5 bg-[#1C1C1C] rounded w-2/3" />
            </div>
            <div className="p-3 rounded-lg bg-[#161616] border border-[#222222] font-mono-code text-[11px] text-[#A6A6A6]">
              &gt; RT-DETR Vision Model: Online<br />
              &gt; EfficientNet Classifier: Ready
            </div>
          </div>
        )}
      </div>

      {/* Laptop Bottom Notch Accent */}
      <div className="mx-auto w-24 h-1 bg-[#2C2C2C] rounded-b-md mt-1" />
    </div>
  );
}
