export interface ExperienceItem {
  id: string;
  period: string;
  organization: string;
  role: string;
  focus: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "handshake-ai",
    period: "Jul 2026 — Present",
    organization: "Handshake AI",
    role: "Freelance Software Engineer",
    focus: "Intelligent systems, full-stack application development, AI integrations",
    highlights: [
      "Architected and deployed responsive full-stack features and AI integrations.",
      "Engineered scalable backend service handlers and optimized client state pipelines.",
      "Developed robust API integrations ensuring secure data handling and high responsiveness."
    ],
  },
  {
    id: "geekotee",
    period: "Mar 2025 — Jun 2025",
    organization: "GeekOTee",
    role: "Development Intern",
    focus: "Frontend architecture, responsive component engineering, state management",
    highlights: [
      "Constructed modular UI components adhering to strict design tokens and accessibility guidelines.",
      "Collaborated on responsive design optimization across mobile, tablet, and desktop viewports.",
      "Maintained component libraries and improved front-end rendering performance."
    ],
  },
  {
    id: "internstudio",
    period: "Sep 2024 — Feb 2025",
    organization: "InternStudio",
    role: "Software Engineering Intern",
    focus: "Web development, UI/UX implementation, cross-platform responsiveness",
    highlights: [
      "Developed modern, interactive web interfaces and optimized cross-browser rendering.",
      "Implemented reusable UI patterns and ensured semantic, accessible markup.",
      "Assisted in prototyping new application features and integrating client-side state logic."
    ],
  },
];
