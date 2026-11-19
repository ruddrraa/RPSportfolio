export interface AchievementItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  year: string;
  category: "Research" | "Hackathon" | "AI Competition" | "International Program";
  description: string;
  badge: string;
}

export const achievements: AchievementItem[] = [
  {
    id: "q-sentry-ciir",
    title: "Q-Sentry: Research Publication",
    role: "Second Author",
    organization: "CIIR 2026 (Conference on Intelligent and Innovative Research)",
    year: "2026",
    category: "Research",
    description: "Peer-reviewed research publication accepted at CIIR 2026, investigating autonomous threat detection architectures, defensive verification protocols, and intelligent security frameworks.",
    badge: "CIIR 2026 Paper",
  },
  {
    id: "hackfest-2025",
    title: "Hackfest 2025",
    role: "Regional & State Winner",
    organization: "Hackfest State Championship",
    year: "2025",
    category: "Hackathon",
    description: "Secured first place champion titles across both regional and state championship rounds for innovative software architecture, robust implementation, and high-impact product execution.",
    badge: "1st Place Winner",
  },
  {
    id: "gdg-apl-kolkata",
    title: "GDG APL Kolkata",
    role: "Runner-Up",
    organization: "Google Developer Groups",
    year: "2025",
    category: "Hackathon",
    description: "Awarded runner-up honor for developing Clean Room RAG—a dual-mode research intelligence platform that indexes academic literature (arXiv) and private documents using local LLMs.",
    badge: "Runner-Up",
  },
  {
    id: "openai-outskill",
    title: "OpenAI x Outskill AI Builders",
    role: "National Finalist",
    organization: "OpenAI & Outskill",
    year: "2025",
    category: "AI Competition",
    description: "Selected as a national finalist among competitive engineering teams for developing intelligent AI-native product prototypes utilizing cutting-edge LLM APIs and agentic workflows.",
    badge: "National Finalist",
  },
  {
    id: "level-supermind",
    title: "Level Supermind Hackathon",
    role: "Finalist",
    organization: "Level Supermind",
    year: "2025",
    category: "Hackathon",
    description: "Earned finalist standing for building real-time data analysis workflows and automated insights dashboards under strict hackathon evaluation criteria.",
    badge: "Finalist",
  },
  {
    id: "iot-exchange-china",
    title: "International IoT Student Exchange Program",
    role: "Academic Delegate",
    organization: "Sister Nivedita University & Partner Institutions",
    year: "2025",
    category: "International Program",
    description: "Selected as an academic delegate representing university engineering for an intensive international exchange program in China, focusing on embedded IoT protocols, hardware interfacing, and distributed systems.",
    badge: "International Delegate",
  },
];
