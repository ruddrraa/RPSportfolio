/**
 * Contract Schemas & CV Ground Truth Assertions
 * Derived from ORIGINAL_REQUEST.md, PROJECT.md, and Authoritative CV documentation
 */

export const GROUND_TRUTH_PROFILE = {
  name: "Rudra Pratap Singh",
  email: "rudrraaa@proton.me",
  github: "https://github.com/ruddrraa",
  linkedin: "https://www.linkedin.com/in/rudrraaa/",
};

export const GROUND_TRUTH_EDUCATION = {
  institution: "Sister Nivedita University",
  degree: "B.Tech CSBS",
  period: "2024–2028",
  periodAlt: "2024-2028",
  location: "Kolkata",
};

export const GROUND_TRUTH_EXPERIENCE = [
  {
    id: "handshake-ai",
    organization: "Handshake AI",
    role: "Freelance Software Engineer",
    period: "Jul 2026 — Present",
  },
  {
    id: "geekotee",
    organization: "GeekOTee",
    role: "Development Intern",
    period: "Mar 2025 — Jun 2025",
  },
  {
    id: "internstudio",
    organization: "InternStudio",
    role: "Software Engineering Intern",
    period: "Sep 2024 — Feb 2025",
  },
];

export const GROUND_TRUTH_RESEARCH = {
  title: "Q-Sentry: A Semantic-Quantum Ensemble for Ethical Classification",
  role: "Second Author",
  venue: "CIIR 2026",
};

export const GROUND_TRUTH_ACHIEVEMENTS = [
  {
    id: "hackfest-2025",
    title: "Hackfest 2025",
    recognition: "Winner",
  },
  {
    id: "gdg-apl-kolkata",
    title: "GDG APL Kolkata",
    recognition: "Runner-Up",
  },
  {
    id: "openai-outskill",
    title: "OpenAI x Outskill AI Builders",
    recognition: "Finalist",
  },
  {
    id: "level-supermind",
    title: "Level Supermind Hackathon",
    recognition: "Finalist",
  },
  {
    id: "iot-exchange-china",
    title: "International IoT Student Exchange Program",
    institution: "Sichuan Vocational Institute for Technology",
  },
];

export const GROUND_TRUTH_PROJECTS = [
  {
    slug: "etechcrm",
    title: "EtechCRM",
    tier: "production_client",
    tierLabel: "Production Client System",
    client: "Excel Technologies & Services",
  },
  {
    slug: "munshiji-ai",
    title: "MunshiJi AI",
    tier: "engineering_demo",
    tierLabel: "Live Demo / Prototype",
  },
  {
    slug: "cardeca-algo",
    title: "CardecaAlgo",
    tier: "engineering_demo",
    tierLabel: "Interactive Engineering Demo",
  },
  {
    slug: "ethos",
    title: "ETHOS",
    tier: "engineering_demo",
    tierLabel: "Verified GitHub Repository",
  },
  {
    slug: "relancepay",
    title: "RelancePay",
    tier: "production_client",
    tierLabel: "Freelance Multi-Currency Invoicing SaaS",
  },
  {
    slug: "vayrin",
    title: "VAYRIN",
    tier: "platform_concept",
    tierLabel: "Platform Concept & Architecture",
  },
];

/**
 * Catalogued fabrications that MUST NOT appear anywhere in real portfolio evidence
 */
export const CATALOGUED_FABRICATIONS = [
  {
    pattern: /24\s*ms\s*(latency)?/i,
    description: "Fake Cardeca inference latency claim ('24ms LATENCY')",
  },
  {
    pattern: /42\.6\s*fps/i,
    description: "Fake Cardeca FPS benchmark ('FPS: 42.6')",
  },
  {
    pattern: /1,?420\s*active\s*(client\s*accounts)?/i,
    description: "Fake EtechCRM active client accounts count ('1,420 Active Client Accounts')",
  },
  {
    pattern: /28\s*logged\s*field\s*visits/i,
    description: "Fake EtechCRM field visit telemetry ('28 Logged Field Visits Today')",
  },
  {
    pattern: /94%\s*attendance/i,
    description: "Fake ETHOS attendance metric ('94% Attendance')",
  },
  {
    pattern: /120\s*ms\s*(latency)?/i,
    description: "Fake ETHOS latency claim ('LATENCY: 120ms')",
  },
  {
    pattern: /spo2\s*:\s*97%/i,
    description: "Fake VAYRIN patient vitals telemetry ('SpO2: 97%')",
  },
  {
    pattern: /heart\s*rate\s*:\s*78/i,
    description: "Fake VAYRIN patient heart rate telemetry ('Heart Rate: 78 bpm')",
  },
  {
    pattern: /icu\s*beds\s*:\s*4/i,
    description: "Fake VAYRIN ICU bed capacity telemetry ('ICU Beds: 4')",
  },
  {
    pattern: /emg-902/i,
    description: "Fake VAYRIN emergency unit telemetry code ('EMG-902')",
  },
  {
    pattern: /excel\s*industrial\s*logistics\s*\(howrah\s*hub\)/i,
    description: "Unverified client account ('Excel Industrial Logistics (Howrah Hub)')",
  },
  {
    pattern: /apex\s*digital\s*solutions/i,
    description: "Unverified client account ('Apex Digital Solutions')",
  },
  {
    pattern: /\+?06\+\s*production\s*systems/i,
    description: "Exaggerated metric claim ('06+ production systems')",
  },
  {
    pattern: /autonomous\s*threat\s*detection/i,
    description: "Distorted Q-Sentry cyber-threat claim ('autonomous threat detection')",
  },
  {
    pattern: /defensive\s*verification\s*protocols/i,
    description: "Distorted Q-Sentry cyber-threat claim ('defensive verification protocols')",
  },
  {
    pattern: /threat\s*intelligence/i,
    description: "Distorted Q-Sentry cyber-threat claim ('threat intelligence')",
  },
];

/**
 * Validates a project object conforms to the Project interface contract
 */
export function validateProjectContract(project) {
  const errors = [];
  if (!project.slug) errors.push('Missing slug');
  if (!project.title) errors.push('Missing title');
  if (!project.summary && !project.tagline && !project.subtitle) errors.push('Missing summary/tagline/subtitle');
  if (!project.architecture) errors.push('Missing architecture description');
  if (!Array.isArray(project.stack) || project.stack.length === 0) errors.push('Missing stack array');
  if (!Array.isArray(project.keyFeatures) && !Array.isArray(project.verifiedHighlights)) {
    errors.push('Missing keyFeatures or verifiedHighlights');
  }
  return {
    valid: errors.length === 0,
    errors,
  };
}
