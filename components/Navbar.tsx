"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const progress = (scrollY / totalScrollable) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
      setScrolled(scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/#projects", label: "Work" },
    { href: "/#perspective", label: "Perspective" },
    { href: "/#expertise", label: "Capabilities" },
    { href: "/#experience", label: "Chronology" },
    { href: "/#research", label: "Publications" },
  ];

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-300">
      <div
        className={`relative flex items-center justify-between px-5 sm:px-6 py-2.5 rounded-full border transition-all duration-300 overflow-hidden ${
          scrolled
            ? "backdrop-blur-xl bg-[#F2F0EA]/92 border-[#171717]/15 shadow-md shadow-[#171717]/5"
            : "backdrop-blur-md bg-[#E7E4DC]/85 border-[#171717]/10 shadow-sm"
        }`}
      >
        {/* Brand identity: Elevated editorial wordmark (No awkward black dot) */}
        <Link
          href="/"
          className="flex items-baseline gap-1.5 text-[#171717] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] rounded-full py-0.5 group"
          aria-label="Home — Rudra Pratap Singh"
        >
          <span className="font-serif-editorial font-bold text-base sm:text-[17px] text-[#171717] tracking-tight leading-none">
            Rudra
          </span>
          <span className="font-serif-editorial italic font-normal text-sm sm:text-base text-[#77736C] leading-none">
            Pratap
          </span>
          <span className="font-serif-editorial font-bold text-base sm:text-[17px] text-[#171717] tracking-tight leading-none">
            Singh
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-xs text-[#77736C] font-sans font-medium"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#171717] transition-colors relative py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] rounded"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#171717] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Subtle scroll reading coverage indicator */}
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono-code text-[#77736C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717]/30" />
            <span>{Math.round(scrollProgress)}%</span>
          </div>

          <Link
            href="/#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#171717] hover:bg-[#2E2E2E] text-[#F2F0EA] text-xs font-sans font-medium transition-colors shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#E7E4DC] border border-[#171717]/10 text-[#171717] hover:bg-[#DDD9CF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Sleek Hairline Scroll Coverage Track across Navbar Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#171717]/8 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="h-full bg-[#171717] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          role="region"
          aria-label="Mobile Navigation Menu"
          className="md:hidden mt-2 p-4 rounded-3xl bg-[#E7E4DC]/95 backdrop-blur-2xl border border-[#171717]/10 shadow-xl space-y-3 font-sans"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center px-4 py-2.5 rounded-xl hover:bg-[#DDD9CF] text-[#171717] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-[#171717]/10 px-3 flex justify-between items-center text-[11px] text-[#77736C] font-mono-code">
            <span>{profile.location}</span>
            <span className="text-[#171717] font-medium">Available for select roles</span>
          </div>
        </div>
      )}
    </header>
  );
}
