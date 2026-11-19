"use client";

import React from "react";

interface KineticTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
}

export function KineticText({
  text,
  className = "",
  letterClassName = "",
}: KineticTextProps) {
  const letters = text.split("");

  return (
    <span
      className={`inline-block select-none group/kinetic cursor-default ${className}`}
      aria-label={text}
    >
      {letters.map((char, index) => {
        const isSpace = char === " ";
        return (
          <span
            key={index}
            aria-hidden="true"
            className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 hover:scale-[1.04] hover:text-white ${
              isSpace ? "w-2 sm:w-3 md:w-4" : ""
            } ${letterClassName}`}
            style={{
              transitionDelay: `${(index % 5) * 20}ms`,
              willChange: "transform",
            }}
          >
            {isSpace ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}

