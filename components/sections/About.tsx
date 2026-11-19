"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { GraduationCap, MapPin, Code2, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 border-t border-[#222222] relative">
      <div className="font-mono-code text-xs text-[#A6A6A6] mb-8 flex items-center gap-2">
        <span className="text-emerald-400">#</span>
        <span>... /About me ...</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Authentic Photography & Bio Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-[340px] md:max-w-none rounded-2xl overflow-hidden bg-[#161616] border border-[#2A2A2A] p-2 shadow-2xl group">
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#121212]">
              <Image
                src="/profile/profilepic.jpg"
                alt={profile.name}
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-4 pt-3 space-y-1.5 font-mono-code">
              <div className="text-xs text-white font-medium flex items-center justify-between">
                <span>{profile.name}</span>
                <span className="text-[11px] text-emerald-400">Full-Stack & AI</span>
              </div>
              <div className="text-[11px] text-[#777777] flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#A6A6A6]" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Education */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] font-sans">
              Engineering systems from deep learning pipelines to production SaaS.
            </h2>
            <p className="text-sm md:text-base text-[#A6A6A6] leading-relaxed">
              I am a software engineer and AI product developer based in Kolkata, India. My engineering focus combines rigorous system architecture with cutting-edge AI—ranging from real-time computer vision inference (RT-DETR & PyTorch) to full-stack multi-tenant enterprise platforms.
            </p>
            <p className="text-sm md:text-base text-[#A6A6A6] leading-relaxed">
              Whether architecting field management solutions for enterprise clients or building decentralized emergency coordination engines, I prioritize verifiable code quality, type safety, low latency, and intuitive interfaces.
            </p>
          </div>

          {/* Education Box */}
          <div className="p-6 rounded-2xl bg-[#161616] border border-[#262626] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-400 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>

            <div className="space-y-1">
              <div className="text-base md:text-lg font-semibold text-white">
                {profile.education.degree} — {profile.education.field}
              </div>
              <div className="text-sm text-[#A6A6A6]">
                {profile.education.institution} • {profile.education.location}
              </div>
              <div className="text-xs font-mono-code text-[#777777] pt-1">
                Timeline: {profile.education.timeline}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
