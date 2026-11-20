"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sections = ["projects", "perspective", "expertise", "experience", "research", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const progress = (scrollY / totalScrollable) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
      setScrolled(scrollY > 20);

      // Detect active section for cinematic section tracking
      let current = "hero";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 260;
          if (scrollY >= top) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
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
    { href: "/#projects", label: "Work", id: "projects" },
    { href: "/#perspective", label: "Perspective", id: "perspective" },
    { href: "/#expertise", label: "Capabilities", id: "expertise" },
    { href: "/#experience", label: "Chronology", id: "experience" },
    { href: "/#research", label: "Publications", id: "research" },
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
        {/* Brand identity: Elevated editorial wordmark */}
        <Link
          href="/"
          className="flex items-baseline gap-1.5 text-[#171717] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] rounded-full py-0.5 group"
          aria-label="Home — Rudra Pratap Singh"
        >
          <span className="font-serif-editorial font-bold text-base sm:text-[17px] text-[#171717] tracking-tight leading-none">
            Rudra
          </span>
          <span className="font-instrument-cursive italic font-normal text-base sm:text-[17px] text-[#77736C] leading-none px-0.5">
            Pratap
          </span>
          <span className="font-serif-editorial font-bold text-base sm:text-[17px] text-[#171717] tracking-tight leading-none">
            Singh
          </span>
        </Link>

        {/* Desktop Navigation Links with Real-Time Active Section Feedback */}
        <nav
          className="hidden md:flex items-center gap-2 text-xs font-sans font-medium"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] ${
                  isActive
                    ? "text-[#171717] font-semibold bg-black/[0.06]"
                    : "text-[#77736C] hover:text-[#171717]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] bg-[#171717] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Subtle scroll reading coverage indicator */}
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono-code text-[#77736C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717]/40" />
            <span>{Math.round(scrollProgress)}%</span>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#171717] hover:bg-[#2E2E2E] text-[#F2F0EA] text-xs font-sans font-medium transition-colors shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-[#171717] md:hidden hover:bg-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Scroll Progress Bar at the absolute bottom rim */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-[#171717] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 rounded-3xl bg-[#F2F0EA]/95 border border-[#171717]/15 backdrop-blur-2xl shadow-xl space-y-3 animate-fade-in">
          <nav className="flex flex-col space-y-2 text-sm font-sans" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    isActive
                      ? "bg-black/[0.08] text-[#171717] font-semibold"
                      : "text-[#77736C] hover:text-[#171717] hover:bg-black/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-[#171717]/10 flex items-center justify-between text-xs font-mono-code text-[#77736C]">
              <span>Coverage</span>
              <span>{Math.round(scrollProgress)}%</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
