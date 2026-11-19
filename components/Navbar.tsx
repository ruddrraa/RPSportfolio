"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUpRight, Menu, X, Terminal, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#perspective", label: "... /Perspective" },
    { href: "/#expertise", label: "... /Capabilities" },
    { href: "/#projects", label: "... /Work" },
    { href: "/#experience", label: "... /Chronology" },
    { href: "/#research", label: "... /Publications" },
    { href: "/#contact", label: "... /Channels" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#101010]/90 border-b border-[#222222] py-3.5"
          : "bg-transparent border-b border-[#222222]/60 py-4"
      }`}
    >
      <div className="flex items-center justify-between px-2 sm:px-4 md:px-6">
        {/* Brand identity */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group text-[#F5F5F5] font-mono-code text-sm md:text-base tracking-tight hover:text-white transition-colors"
          aria-label="Home — Rudra Pratap Singh"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-status-pulse inline-block" />
          <span className="text-[#777777] group-hover:text-[#A6A6A6] transition-colors">~/</span>
          <span className="font-semibold text-white tracking-normal">{profile.handle}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 font-mono-code text-xs tracking-wider text-[#A6A6A6]"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161616] border border-[#262626] text-[11px] font-mono-code text-[#888888]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            <span>Open for roles</span>
          </div>

          <a
            href={profile.socials.email}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#2E2E2E] hover:border-[#444444] text-[#F5F5F5] text-xs font-mono-code transition-all shadow-sm group"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A6A6A6] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#181818] border border-[#2A2A2A] text-[#A6A6A6] hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-3 py-4 rounded-2xl bg-[#141414] border border-[#262626] shadow-2xl animate-fade-in font-mono-code text-xs space-y-3">
          <div className="text-[10px] text-[#666666] uppercase tracking-wider px-2">Navigation</div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#1E1E1E] text-[#A6A6A6] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-[#222222] px-2 flex justify-between items-center text-[11px] text-[#777777]">
            <span>{profile.location}</span>
            <span className="text-emerald-400">Available</span>
          </div>
        </div>
      )}
    </header>
  );
}
