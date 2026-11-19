"use client";

import React, { useState } from "react";

interface KineticTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  scatterOnHover?: boolean;
}

export function KineticText({
  text,
  className = "",
  letterClassName = "",
  scatterOnHover = true,
}: KineticTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const letters = text.split("");

  return (
    <span
      className={`inline-block select-none ${className}`}
      aria-label={text}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {letters.map((char, index) => {
        const isSpace = char === " ";
        const isHovered = hoveredIndex === index;
        const isNeighbor =
          hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;

        let transformStyle = "translateY(0px)";
        if (scatterOnHover) {
          if (isHovered) {
            transformStyle = "translateY(-4px) scale(1.04)";
          } else if (isNeighbor) {
            transformStyle = "translateY(-2px)";
          }
        }

        return (
          <span
            key={index}
            aria-hidden="true"
            onMouseEnter={() => setHoveredIndex(index)}
            className={`inline-block transition-transform duration-200 ease-out ${
              isSpace ? "w-2 sm:w-3 md:w-4" : ""
            } ${letterClassName}`}
            style={{
              transform: transformStyle,
              transitionDelay: `${Math.min(index * 8, 80)}ms`,
            }}
          >
            {isSpace ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}

