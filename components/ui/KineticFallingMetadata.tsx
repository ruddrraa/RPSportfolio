"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface KineticFallingMetadataProps {
  text: string;
  className?: string;
  triggerRef: React.RefObject<HTMLDivElement | null>;
  isYear?: boolean;
}

export function KineticFallingMetadata({
  text,
  className = "",
  triggerRef,
  isYear = false,
}: KineticFallingMetadataProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const triggerEl = triggerRef.current;
    const containerEl = containerRef.current;
    if (!triggerEl || !containerEl) return;

    const chars = containerEl.querySelectorAll<HTMLSpanElement>(".falling-char");
    if (!chars.length) return;

    const ctx = gsap.context(() => {
      // Start perfectly visible and structured
      gsap.set(chars, {
        y: 0,
        x: 0,
        rotation: 0,
        opacity: 1,
      });

      // Dramatic gravity tumble as the card pins and gets stacked over
      gsap.to(chars, {
        y: (i) => 42 + (i % 5) * 14 + Math.random() * 12,
        x: (i) => ((i % 2 === 0 ? 1 : -1) * (8 + (i % 4) * 4)),
        rotation: (i) => ((i % 2 === 0 ? 1 : -1) * (22 + (i % 3) * 8)),
        opacity: 0,
        stagger: {
          each: 0.02,
          from: "random",
        },
        ease: "power2.in",
        scrollTrigger: {
          trigger: triggerEl,
          start: () => (window.innerWidth < 640 ? "top top+=80" : "top top+=110"),
          end: () => (window.innerWidth < 640 ? "bottom top+=40" : "bottom top+=60"),
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    }, containerEl);

    return () => ctx.revert();
  }, [triggerRef, text]);

  const words = text.split(" ");

  return (
    <span
      ref={containerRef}
      className={`inline-block select-none ${className}`}
      aria-label={text}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-1">
          {word.split("").map((char, cIdx) => (
            <span
              key={cIdx}
              aria-hidden="true"
              className="falling-char inline-block will-change-transform font-mono-code"
              style={{
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
