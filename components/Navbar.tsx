"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
    { href: "/#projects", label: "Work" },
    { href: "/#perspective", label: "Perspective" },
    { href: "/#expertise", label: "Capabilities" },
    { href: "/#experience", label: "Chronology" },
    { href: "/#research", label: "Publications" },
  ];

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-300">
      <div
        className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#0D0D0D]/90 border-white/15 shadow-2xl shadow-black/80"
            : "backdrop-blur-md bg-[#121212]/80 border-white/10 shadow-lg"
        }`}
      >
        {/* Brand identity */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#F5F5F5] font-editorial text-sm tracking-tight hover:text-white transition-colors"
          aria-label="Home — Rudra Pratap Singh"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-status-pulse inline-block" />
          <span className="font-semibold text-white tracking-normal font-sans text-xs sm:text-sm">
            Rudra Pratap Singh
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-xs text-[#A6A6A6] font-sans font-medium"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={profile.socials.email}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/10 text-xs font-sans font-medium transition-all shadow-sm group"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full bg-white/5 border border-white/10 text-[#A6A6A6] hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-3xl bg-[#121212]/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-fade-in text-xs space-y-3 font-sans">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-white/5 text-[#A6A6A6] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10 px-3 flex justify-between items-center text-[11px] text-[#777777] font-mono-code">
            <span>{profile.location}</span>
            <span className="text-emerald-400">Available for roles</span>
          </div>
        </div>
      )}
    </header>
  );
}
