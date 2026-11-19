"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUpRight, Terminal } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#101010]/80 border-b border-[#222222] transition-colors">
      <div className="flex items-center justify-between py-4 px-2 md:px-6">
        {/* Brand identity */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group text-[#F5F5F5] font-mono-code text-sm md:text-base tracking-tight hover:text-white transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
          <span className="text-[#A6A6A6] group-hover:text-[#F5F5F5] transition-colors">~/</span>
          <span className="font-semibold text-white">{profile.handle}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono-code text-xs tracking-wider text-[#A6A6A6]">
          <Link href="/#about" className="hover:text-white transition-colors">
            ... /About
          </Link>
          <Link href="/#expertise" className="hover:text-white transition-colors">
            ... /Expertise
          </Link>
          <Link href="/#projects" className="hover:text-white transition-colors">
            ... /Projects
          </Link>
          <Link href="/#experience" className="hover:text-white transition-colors">
            ... /Experience
          </Link>
          <Link href="/#research" className="hover:text-white transition-colors">
            ... /Research
          </Link>
          <Link href="/#contact" className="hover:text-white transition-colors">
            ... /Contact
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href={profile.socials.email}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1A] hover:bg-[#262626] border border-[#303030] hover:border-[#444444] text-[#F5F5F5] text-xs font-mono-code transition-all shadow-sm"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A6A6A6]" />
          </a>
        </div>
      </div>
    </header>
  );
}
