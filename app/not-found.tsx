import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Rudra Pratap Singh",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-[#F2F0EA] text-[#171717]">
      <div className="space-y-6 max-w-md mx-auto">
        <div className="font-mono-code text-xs text-[#77736C] uppercase tracking-widest">
          ERROR 404 &bull; PAGE NOT FOUND
        </div>
        <h1 className="font-serif-editorial text-5xl sm:text-7xl font-bold leading-tight">
          Page Not Found
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#4A4742] leading-relaxed">
          The requested route or project case study could not be located.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-[#FAF8F5] font-sans text-xs font-semibold hover:bg-[#2A2A2A] transition-all shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
