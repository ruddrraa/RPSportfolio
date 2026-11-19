export interface SkillGroup {
  id: string;
  category: string;
  subtitle: string;
  skills: {
    name: string;
    level: string;
    iconName?: string;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-vision",
    category: "AI & Computer Vision",
    subtitle: "Deep learning models, computer vision pipelines, and LLM integrations",
    skills: [
      { name: "PyTorch", level: "Production" },
      { name: "RT-DETR", level: "Computer Vision" },
      { name: "EfficientNet", level: "Classification" },
      { name: "Groq AI SDK", level: "LLM Orchestration" },
      { name: "RAG Systems", level: "Retrieval" },
      { name: "Ollama / Llama 3", level: "Local Inference" },
      { name: "FastAPI", level: "Python Services" },
    ],
  },
  {
    id: "frontend-arch",
    category: "Frontend Architecture",
    subtitle: "Modern component architectures, design systems, and responsive layouts",
    skills: [
      { name: "React 19", level: "Modern Patterns" },
      { name: "Next.js 15 (App Router)", level: "Production" },
      { name: "TypeScript", level: "Strict Typing" },
      { name: "Tailwind CSS v4", level: "Design Tokens" },
      { name: "Framer Motion", level: "Micro-interactions" },
      { name: "Lenis / GSAP", level: "Smooth Motion" },
      { name: "Radix UI / shadcn", level: "Accessible UI" },
      { name: "TanStack Query", level: "Async State" },
    ],
  },
  {
    id: "backend-systems",
    category: "Backend & Systems",
    subtitle: "API design, serverless microservices, and secure authentication",
    skills: [
      { name: "Node.js", level: "Runtime" },
      { name: "Express 5", level: "Server Architecture" },
      { name: "Next.js API Handlers", level: "Serverless" },
      { name: "RESTful APIs", level: "Design & Specs" },
      { name: "JWT Cookie Auth", level: "Security" },
      { name: "Zod", level: "Schema Validation" },
      { name: "Webhooks & Resend", level: "Integrations" },
    ],
  },
  {
    id: "database-cloud",
    category: "Cloud, Database & Tooling",
    subtitle: "Database modeling, cloud storage pipelines, and deployment automation",
    skills: [
      { name: "MongoDB Atlas", level: "NoSQL Modeling" },
      { name: "PostgreSQL", level: "Relational Data" },
      { name: "Prisma ORM", level: "Data Access" },
      { name: "Supabase", level: "Realtime Data" },
      { name: "Cloudinary", level: "Media Pipeline" },
      { name: "AWS S3", level: "Storage" },
      { name: "Git / GitHub", level: "VCS & Workflows" },
      { name: "Vercel", level: "Edge Deployment" },
    ],
  },
];
