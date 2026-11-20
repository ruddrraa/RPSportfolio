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
      // Create scroll-driven character gravity tumble as the card stacks & recedes
      gsap.fromTo(
        chars,
        {
          y: 0,
          x: 0,
          rotation: 0,
          opacity: 1,
        },
        {
          y: (i) => 40 + (i % 5) * 12 + Math.random() * 15,
          x: (i) => ((i % 2 === 0 ? 1 : -1) * (6 + (i % 4) * 3)),
          rotation: (i) => (i % 2 === 0 ? 1 : -1) * (12 + (i % 3) * 6),
          opacity: 0,
          stagger: {
            each: 0.02,
            from: "random",
          },
          ease: "power2.in",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top top+=120",
            end: "bottom top+=80",
            scrub: 0.6,
          },
        }
      );
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
              className="falling-char inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

