"use client";

import React from "react";

interface TechStackIconProps {
  name: string;
  className?: string;
}

export function TechStackIcon({ name, className = "w-4 h-4" }: TechStackIconProps) {
  const normalized = name.toLowerCase().trim();

  // 1. React
  if (normalized.includes("react")) {
    return (
      <svg
        viewBox="-11.5 -10.23174 23 20.46348"
        className={className}
        fill="none"
        aria-label="React"
      >
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // 2. Next.js
  if (normalized.includes("next")) {
    return (
      <svg
        viewBox="0 0 180 180"
        className={className}
        fill="none"
        aria-label="Next.js"
      >
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.16 149.508 157.52Z"
          fill="url(#next-grad-icon)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#next-grad-icon-2)" />
        <defs>
          <linearGradient
            id="next-grad-icon"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="next-grad-icon-2"
            x1="121"
            y1="54"
            x2="120.799"
            y2="106.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 3. TypeScript
  if (normalized.includes("typescript") || normalized === "ts") {
    return (
      <svg
        viewBox="0 0 128 128"
        className={className}
        aria-label="TypeScript"
      >
        <path fill="#3178C6" d="M0 0h128v128H0z" rx="20" />
        <path
          fill="#FFF"
          d="M72.8 91.3c0 7.8 5.6 13.5 13.9 13.5 6.3 0 10.7-3.4 12.6-7.8l15.1 8.8c-5.7 9.8-15.5 15.4-27.7 15.4-18.4 0-31.5-11.8-31.5-29.4 0-17.7 12.8-29.6 30.7-29.6 18.2 0 30.1 11.4 30.1 28.5 0 1.6-.2 3.6-.4 5.1H72.8v-4.5zm19-8.4c-.6-7.2-5.4-12-12.7-12-7 0-12 4.7-12.6 12h25.3zM28.4 63.6h42.5v13.5H53.5v43.2H36.9V77.1H28.4V63.6z"
        />
      </svg>
    );
  }

  // 4. PyTorch
  if (normalized.includes("pytorch") || normalized.includes("torch")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-label="PyTorch"
      >
        <path
          d="M12.64 2.05a.75.75 0 0 0-.82.11L5.95 6.94a.75.75 0 0 0 .96 1.15l5.09-4.24 5.09 4.24a.75.75 0 1 0 .96-1.15L12.64 2.05z"
          fill="#EE4C2C"
        />
        <path
          d="M16.95 8.09a.75.75 0 0 0-.96 1.15l1.01.84c-2.4 2.05-5.9 2.05-8.3 0l1.01-.84a.75.75 0 0 0-.96-1.15L3.88 12.18a.75.75 0 0 0 .15 1.15c4.78 3.32 11.16 3.32 15.94 0a.75.75 0 0 0 .15-1.15L16.95 8.09z"
          fill="#EE4C2C"
        />
        <circle cx="17.25" cy="4.75" r="1.25" fill="#EE4C2C" />
      </svg>
    );
  }

  // 5. Node.js
  if (normalized.includes("node")) {
    return (
      <svg
        viewBox="0 0 32 32"
        className={className}
        fill="none"
        aria-label="Node.js"
      >
        <path d="M16 2l13 7.5v15L16 32 3 24.5v-15L16 2z" fill="#339933" />
        <path
          d="M16 4.5l11 6.35v12.7L16 29.9 5 23.55v-12.7L16 4.5z"
          fill="#026E00"
        />
        <path
          d="M11 18c0-2.5 1.8-4.5 4.5-4.5 1.5 0 2.8.6 3.6 1.7l-1.5 1.2c-.5-.7-1.2-1.1-2.1-1.1-1.5 0-2.5 1.1-2.5 2.7s1 2.7 2.5 2.7c.9 0 1.6-.4 2.1-1.1l1.5 1.2c-.8 1.1-2.1 1.7-3.6 1.7-2.7 0-4.5-2-4.5-4.5z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // 6. MongoDB
  if (normalized.includes("mongo")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-label="MongoDB"
      >
        <path
          d="M12 2C11.5 3 7 7.5 7 13c0 3.5 2.5 6.5 5 8 2.5-1.5 5-4.5 5-8 0-5.5-4.5-10-5-11z"
          fill="#47A248"
        />
        <path
          d="M12 2v19c2.5-1.5 5-4.5 5-8 0-5.5-4.5-10-5-11z"
          fill="#499D4A"
        />
        <path
          d="M12 21.5c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0 .3-.2.5-.5.5z"
          fill="#FFF"
        />
      </svg>
    );
  }

  // 7. PostgreSQL
  if (normalized.includes("postgres") || normalized.includes("sql")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-label="PostgreSQL"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
          fill="#336791"
        />
        <circle cx="12" cy="12" r="5" fill="#336791" opacity="0.2" />
        <path
          d="M12 7c-2.76 0-5 2.24-5 5 0 2.2 1.43 4.07 3.42 4.72.13.04.28-.06.28-.2v-2.3c0-.28.22-.5.5-.5s.5.22.5.5v2.3c0 .14.15.24.28.2C15.57 16.07 17 14.2 17 12c0-2.76-2.24-5-5-5z"
          fill="#336791"
        />
      </svg>
    );
  }

  // 8. Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-label="Tailwind CSS"
      >
        <path
          d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1.05.26 1.79 1.02 2.62 1.87C14.47 11.75 16.2 13.5 20 13.5c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-1.05-.26-1.79-1.02-2.62-1.87C17.53 7.75 15.8 6 12 6zm-8 7.5c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1.05.26 1.79 1.02 2.62 1.87C6.47 19.25 8.2 21 12 21c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-1.05-.26-1.79-1.02-2.62-1.87C9.53 15.25 7.8 13.5 4 13.5z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // 9. Docker
  if (normalized.includes("docker")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-label="Docker"
      >
        <path
          d="M13.5 8h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm9-3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm12 3h2v2h-2zm4.5 5.5c-.3-.2-1.2-.4-2-.2-.2-.8-.7-1.4-1.3-1.8l-.5-.3-.3.5c-.3.6-.3 1.5.1 2.2-.6.4-1.5.5-2.5.5H3.5C2 14.4 1 15.8 1 17.5 1 20 3 22 5.5 22h13c3 0 5-2 5.4-5 .1-.7 0-1.2-.4-1.5z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  // 10. Vite
  if (normalized.includes("vite")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-label="Vite"
      >
        <path
          d="M21.5 4.5L12.8 21.2a1 1 0 0 1-1.6 0L2.5 4.5a1 1 0 0 1 .9-1.5h17.2a1 1 0 0 1 .9 1.5z"
          fill="url(#vite-grad-icon)"
        />
        <path d="M12.5 2.5l-6 11h5l-1.5 8 7-12h-5l1.5-7z" fill="#FFD62E" />
        <defs>
          <linearGradient
            id="vite-grad-icon"
            x1="2"
            y1="3"
            x2="22"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 11. Python
  if (normalized.includes("python")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-label="Python"
      >
        <path
          d="M11.9 2c-3.1 0-4.9 1.4-4.9 3.2v2.4h5v.8H5.6C3.8 8.4 2 10.2 2 13.3c0 3.2 1.6 4.9 4.6 4.9h1.7v-2.3c0-1.8 1.5-3.3 3.3-3.3h5V11c0-1.8-1.5-3.3-3.3-3.3H11.9V2zm-1.8 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c3.1 0 4.9-1.4 4.9-3.2v-2.4h-5v-.8h6.4c1.8 0 3.6-1.8 3.6-4.9 0-3.2-1.6-4.9-4.6-4.9h-1.7v2.3c0 1.8-1.5 3.3-3.3 3.3h-5V13c0 1.8 1.5 3.3 3.3 3.3h1.4V22zm1.8-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // 12. Express
  if (normalized.includes("express")) {
    return (
      <span className="font-mono font-bold text-[10px] tracking-tight text-[#171717] bg-[#E7E4DC] px-1 py-0.5 rounded border border-[rgba(23,23,23,0.15)]">
        ex
      </span>
    );
  }

  // 13. Groq / AI / LLM
  if (normalized.includes("groq") || normalized.includes("ai") || normalized.includes("llm")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-label="Groq AI"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#F55036" />
        <path d="M7 8h10v2H7V8zm0 3h7v2H7v-2zm0 3h10v2H7v-2z" fill="#FFF" />
      </svg>
    );
  }

  // Default fallback: Clean minimal tag dot
  return (
    <span className="w-2 h-2 rounded-full bg-[#171717]/60 inline-block" />
  );
}

