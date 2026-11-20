export interface SkillItem {
  name: string;
  level: string;
  description: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  subtitle: string;
  architectureDiagram: string[];
  verifiedProject: string;
  verifiedSlug: string;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-vision",
    category: "AI & Computer Vision",
    subtitle: "Deep learning models, computer vision pipelines, and agentic LLM orchestration",
    verifiedProject: "CardecaAlgo & MunshiJi AI",
    verifiedSlug: "cardeca-algo",
    architectureDiagram: [
      "Image Ingestion [Camera / File]",
      "→ RT-DETR Detection Transformer [Localization]",
      "→ EfficientNet PyTorch Classifier [Attribute Inference]",
      "→ HTML5 Konva Canvas [Interactive Visual Bounding Boxes]",
    ],
    skills: [
      { name: "PyTorch", level: "Production", description: "Deep learning model construction, fine-tuning, and inference pipelines." },
      { name: "RT-DETR", level: "Computer Vision", description: "Real-time Detection Transformers for fast, high-accuracy object localization." },
      { name: "EfficientNet", level: "Classification", description: "Tailored convolutional networks for multi-attribute vehicle identification." },
      { name: "Groq AI SDK", level: "LLM Orchestration", description: "Ultra-fast inference integration for HR copilot & conversational queries." },
      { name: "RAG Systems", level: "Retrieval", description: "Vector search over organizational documents and academic papers (Clean Room RAG)." },
      { name: "Ollama / Llama 3", level: "Local Inference", description: "Offline local model hosting and structured JSON response generation." },
      { name: "FastAPI", level: "Python Services", description: "High-throughput asynchronous model serving endpoints with Pydantic validation." },
    ],
  },
  {
    id: "frontend-arch",
    category: "Frontend Architecture",
    subtitle: "Component systems, responsive editorial layouts, and high-performance client state",
    verifiedProject: "EtechCRM & ETHOS",
    verifiedSlug: "etechcrm",
    architectureDiagram: [
      "Server Components (RSC) / Vite SPA",
      "→ TanStack Query [Async Cache & Deduplication]",
      "→ Zod Schema Validation [Form State Integrity]",
      "→ Tailwind v4 + Radix UI [Accessible Design System]",
    ],
    skills: [
      { name: "React 19", level: "Modern Patterns", description: "Async transitions, Actions, Server Components, and concurrent rendering." },
      { name: "Next.js 15 (App Router)", level: "Production", description: "SSR, SSG, Route Handlers, Server Actions, and Turbopack optimization." },
      { name: "TypeScript", level: "Strict Typing", description: "Exhaustive type checking, strict nulls, generics, and API contract safety." },
      { name: "Tailwind CSS v4", level: "Design Tokens", description: "Zero-runtime utility engine with custom CSS variables and responsive rules." },
      { name: "TanStack Query", level: "Async State", description: "Background synchronization, stale-while-revalidate caching, and optimistic updates." },
      { name: "Radix UI / shadcn", level: "Accessible UI", description: "Unstyled, accessible primitives complying with WCAG 2.2 AA standards." },
      { name: "Zustand", level: "Client State", description: "Minimalist, unopinionated global state management without boilerplate." },
    ],
  },
  {
    id: "backend-systems",
    category: "Backend & Systems",
    subtitle: "REST API design, serverless microservices, security protocols, and state synchronization",
    verifiedProject: "EtechCRM & RelancePay",
    verifiedSlug: "etechcrm",
    architectureDiagram: [
      "Client Request [Bearer / HTTP-only Cookie]",
      "→ Express 5 / Vercel Serverless Function",
      "→ JWT Verification & Team-Scoped RBAC Middleware",
      "→ MongoDB Atlas Mongoose / PostgreSQL Transactions",
    ],
    skills: [
      { name: "Node.js", level: "Runtime", description: "Event-driven asynchronous execution and serverless function handlers." },
      { name: "Express 5", level: "Server Architecture", description: "Robust REST APIs with modular middleware, routing, and error handlers." },
      { name: "Next.js API Handlers", level: "Serverless", description: "Edge and Node-runtime route handlers with typed responses." },
      { name: "JWT Cookie Auth", level: "Security", description: "Stateless authentication secured inside HTTP-only, SameSite cookies." },
      { name: "Zod", level: "Schema Validation", description: "Runtime boundary validation parsing and validating incoming payloads." },
      { name: "RESTful Architecture", level: "API Design", description: "Predictable resource naming, status codes, and JSON error structures." },
      { name: "Transactional Email", level: "Resend", description: "Automated invoice delivery, receipts, and alert dispatches." },
    ],
  },
  {
    id: "database-cloud",
    category: "Cloud, Database & Tooling",
    subtitle: "Data modeling, multi-tenant databases, cloud storage, and automated deployment",
    verifiedProject: "RelancePay, ETHOS & VAYRIN",
    verifiedSlug: "relancepay",
    architectureDiagram: [
      "Application Queries",
      "→ Prisma ORM / Mongoose ODM",
      "→ PostgreSQL / MongoDB Atlas Managed Cluster",
      "→ Cloudinary Signed Media & AWS S3 Object Storage",
    ],
    skills: [
      { name: "MongoDB Atlas", level: "NoSQL Modeling", description: "Aggregation pipelines, multi-document transactions, and Atlas search." },
      { name: "PostgreSQL", level: "Relational Data", description: "Normalized schemas, indexed foreign keys, and ACID-compliant records." },
      { name: "Prisma ORM", level: "Data Access", description: "Type-safe database client and automated declarative migrations." },
      { name: "Supabase Realtime", level: "WebSockets", description: "Live incident dispatch subscriptions and database change listening." },
      { name: "Cloudinary", level: "Media Pipeline", description: "Secure signed uploads for field visit logs, receipts, and avatars." },
      { name: "Git / GitHub", level: "VCS & Workflows", description: "Trunk-based development, semantic commits, and branch management." },
      { name: "Vercel", level: "Edge Deployment", description: "Continuous integration, edge network caching, and serverless compute." },
    ],
  },
  {
    id: "creative-dev",
    category: "Creative Development & Interaction",
    subtitle: "WebGL shaders, kinetic typography, smooth physics motion, and responsive micro-interactions",
    verifiedProject: "Interactive Portfolio",
    verifiedSlug: "cardeca-algo",
    architectureDiagram: [
      "User Input [Pointer & Scroll]",
      "→ Lenis Inertia Engine + GSAP ScrollTrigger",
      "→ Vanilla Three.js WebGL Spatial Scene [Pavilion Datum & Camera Lerp]",
      "→ React 19 View Transitions [Hardware-Accelerated 60fps]",
    ],
    skills: [
      { name: "Vanilla Three.js", level: "WebGL Graphics", description: "Architectural 3D environments, camera projection, buffer geometries, and spatial depth." },
      { name: "GSAP & ScrollTrigger", level: "Motion Choreography", description: "Scroll-linked animation timelines, staggered reveals, and spatial continuity." },
      { name: "Lenis", level: "Smooth Scroll", description: "Inertial scrolling with delta clamping and mobile touch synchronization." },
      { name: "Kinetic Typography", level: "Character Physics", description: "Character splitting, hover-driven displacement, and letter reassembly." },
      { name: "Framer Motion", level: "Micro-interactions", description: "Gesture-based transitions, spring physics, and layout animations." },
      { name: "GLSL Shaders", level: "GPU Shading", description: "Fragment and vertex shaders for custom atmospheric depth and light dispersion." },
    ],
  },
];
