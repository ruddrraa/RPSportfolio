export interface ProjectCaseStudy {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  tier?: 'production_client' | 'engineering_demo' | 'platform_concept';
  tierLabel?: string;
  client?: string;
  summary: string;
  challenge: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  impactPills: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  accentColor: string;
  deviceType: "laptop" | "tablet" | "mobile" | "kiosk";
  image?: string;
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: "etechcrm",
    number: "01",
    title: "EtechCRM",
    subtitle: "Client Management & Field Visit Tracking Platform",
    tier: "production_client",
    tierLabel: "Production Client System",
    client: "Excel Technologies & Services",
    summary: "A production client management and field operations tracking platform built for Excel Technologies & Services, architected as a modular Single Page Application backed by Node.js serverless functions.",
    challenge: "Excel Technologies & Services required a centralized system to coordinate field visits, log client interactions, and manage account documentation without latency or sync errors across distributed field teams.",
    solution: "Engineered a responsive web portal utilizing React 19, TypeScript, and Vite with route-level code splitting. Implemented Zod schema validation for data integrity and TanStack Query for background state synchronization with MongoDB Atlas M0.",
    architecture: "Vite SPA with route code-splitting and ErrorBoundary isolation; Express 5 API deployed on Vercel Serverless Functions; MongoDB Atlas M0 with Mongoose schemas; Cloudinary signed image uploads for field documentation.",
    keyFeatures: [
      "Field visit scheduling, tracking, and visit report submission.",
      "Comprehensive client profile management with historical engagement records.",
      "Client-side form validation using React Hook Form paired with Zod.",
      "Asynchronous server state caching, pagination, and optimistic updates via TanStack Query.",
      "Responsive analytics dashboards visualized with Recharts."
    ],
    impactPills: [
      "Client Management",
      "Field Visit Tracking",
      "TanStack Query & Zod",
      "Vercel Serverless"
    ],
    stack: ["React 19", "TypeScript", "Vite", "Express 5", "MongoDB Atlas", "Cloudinary", "TanStack Query", "Zod", "Recharts", "Tailwind CSS v4"],
    githubUrl: "https://github.com/ruddrraa/EtechCRM",
    liveUrl: "https://excel-credlecrm-three.vercel.app",
    category: "Full-Stack Enterprise System",
    accentColor: "#171717",
    deviceType: "laptop",
    image: "/projects/etechcrm/excelnavbarlogo.png",
  },
  {
    slug: "munshiji-ai",
    number: "02",
    title: "MunshiJi AI",
    subtitle: "Intelligent Retail Billing & Store Ledger Platform",
    tier: "engineering_demo",
    tierLabel: "Live Demo / Prototype",
    summary: "An AI-powered billing, inventory management, and credit accounting platform designed to streamline store operations for retail businesses and shop owners through voice assistance and automated invoicing.",
    challenge: "Traditional Indian retail and small business owners often struggle with manual bookkeeping, tedious GST invoicing, and language barriers in complex desktop accounting software.",
    solution: "Designed an intuitive store management platform combining natural language voice queries, automated GST calculation, credit ledger (udhaar) tracking, and real-time inventory monitoring.",
    architecture: "Next.js App Router frontend with real-time UI components; Express API microservice handling document OCR and Groq API natural language invoice extraction; MongoDB Atlas for ledger transactions and customer records.",
    keyFeatures: [
      "Voice-assisted natural language lookup for fast product and ledger updates.",
      "Instant digital billing with automatic multi-tier GST tax breakdowns.",
      "Customer credit ledger (udhaar) tracking with chronological audit logs.",
      "Live stock alerts and low-inventory notifications.",
      "Thermal-printer friendly receipt formatting and digital invoice sharing."
    ],
    impactPills: [
      "Voice-Assisted Operations",
      "Automated GST Invoicing",
      "Credit Ledger Tracking",
      "Inventory Management"
    ],
    stack: ["Next.js App Router", "TypeScript", "Node.js", "Express", "MongoDB", "Groq API", "OCR Engine", "Tailwind CSS v4"],
    category: "AI & Retail Systems",
    accentColor: "#171717",
    deviceType: "kiosk",
  },
  {
    slug: "cardeca-algo",
    number: "03",
    title: "CardecaAlgo",
    subtitle: "RT-DETR & EfficientNet Vehicle Intelligence",
    tier: "engineering_demo",
    tierLabel: "Interactive Engineering Demo",
    summary: "A research-driven computer vision platform pairing Real-Time Detection Transformers (RT-DETR) with a custom PyTorch EfficientNet classifier for real-time vehicle localization and fine-grained classification.",
    challenge: "Standard vehicle recognition systems either sacrifice inference speed for accuracy or lack fine-grained classification capabilities when inspecting varied vehicle makes, models, and orientations.",
    solution: "Implemented a two-tier deep learning inference architecture. An RT-DETR model detects and localizes vehicles in real-time, while a tailored PyTorch EfficientNet classifier determines detailed vehicle attributes, rendered interactively on an HTML5 Konva canvas.",
    architecture: "Next.js App Router frontend; PyTorch inference service deploying RT-DETR and EfficientNet weights; interactive Konva canvas for client-side bounding box visualization and annotation; client-side jsPDF report generation.",
    keyFeatures: [
      "Real-time object localization using RT-DETR detection transformers.",
      "Fine-grained model and attribute classification via PyTorch EfficientNet.",
      "Interactive Konva canvas enabling zooming, panning, and bounding-box inspection.",
      "One-click inspection report export in PDF format via jsPDF.",
      "Modern dark-mode interface with Framer Motion visual state transitions."
    ],
    impactPills: [
      "RT-DETR Detection Transformer",
      "PyTorch EfficientNet",
      "Interactive Konva Canvas",
      "Exportable Inspection Reports"
    ],
    stack: ["Next.js App Router", "TypeScript", "PyTorch", "RT-DETR", "EfficientNet-B4", "Konva", "jsPDF", "Framer Motion", "Tailwind CSS v4"],
    githubUrl: "https://github.com/ruddrraa/CardecaAlgo",
    liveUrl: "https://cardecalgo.vercel.app",
    category: "Computer Vision & Deep Learning",
    accentColor: "#3b82f6",
    deviceType: "laptop",
    image: "/projects/cardeca/logo.png",
  },
  {
    slug: "ethos",
    number: "04",
    title: "ETHOS",
    subtitle: "AI-Assisted Human Resource Management System",
    tier: "engineering_demo",
    tierLabel: "Verified GitHub Repository",
    summary: "A comprehensive Human Resource Management System featuring an integrated Groq AI assistant, multi-tenant role-based access control, attendance tracking, and interactive scheduling.",
    challenge: "Growing teams struggle with fragmented HR tools where employee records, leave approvals, attendance logging, and company policy inquiries live in separate silos.",
    solution: "Engineered a centralized HR platform built on Next.js App Router and Prisma ORM, integrating the Groq AI SDK to answer employee questions on internal guidelines while enforcing strict multi-tier role authorization.",
    architecture: "Next.js 15 App Router with Server Actions; Prisma ORM with relational PostgreSQL modeling; `@ai-sdk/groq` for high-throughput AI copilot responses; FullCalendar integration for enterprise schedule visualization.",
    keyFeatures: [
      "Multi-tenant Role-Based Access Control (Admin, Manager, and Employee tiers).",
      "AI-powered HR assistant utilizing the Groq AI SDK for real-time policy guidance.",
      "Interactive company-wide attendance and shift calendar using FullCalendar.",
      "Centralized leave request workflow with automated manager approvals.",
      "Structured payroll and employee profile directory management."
    ],
    impactPills: [
      "Groq AI SDK Assistant",
      "Prisma ORM",
      "Multi-Tier RBAC",
      "FullCalendar Scheduling"
    ],
    stack: ["Next.js App Router", "TypeScript", "@ai-sdk/groq", "Prisma ORM", "PostgreSQL", "FullCalendar", "Radix UI", "Tailwind CSS v4"],
    githubUrl: "https://github.com/ruddrraa/ETHOS",
    category: "Enterprise AI & Management",
    accentColor: "#8b5cf6",
    deviceType: "laptop",
  },
  {
    slug: "relancepay",
    number: "05",
    title: "RelancePay",
    subtitle: "Freelance Multi-Currency Invoicing SaaS",
    tier: "engineering_demo",
    tierLabel: "Engineering Demo & SaaS",
    summary: "A production-grade invoicing SaaS engineered for independent freelancers and consultants to handle domestic compliance (INR with GST) alongside international multi-currency client billing (USD).",
    challenge: "Indian freelancers working with both local and global clients face cumbersome tax calculation rules, dual-currency formatting requirements, and disjointed payment tracking tools.",
    solution: "Developed a focused invoice platform featuring automated GST calculation, multi-currency ledger conversions, signed client asset attachments, and dynamic PDF invoice generation.",
    architecture: "Next.js App Router with secure Next.js API route handlers; MongoDB Atlas database modeled with Mongoose; HTTP-only cookie JWT session management; Cloudinary signed uploads; transactional email alerts via Resend.",
    keyFeatures: [
      "Dual tax engine calculating domestic GST compliance and global flat-rate invoicing.",
      "Dynamic client-side and server-side PDF invoice generation with custom branding.",
      "Secure JWT authentication stored safely in HTTP-only cookies.",
      "Cloudinary integration for signed contract and receipt attachments.",
      "Automated client payment reminders and invoice status dispatch via Resend."
    ],
    impactPills: [
      "Multi-Currency & GST",
      "Dynamic PDF Generation",
      "JWT Cookie Auth",
      "Resend Email Integration"
    ],
    stack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "shadcn/ui", "MongoDB Atlas", "Mongoose", "JWT Cookie Auth", "Resend"],
    githubUrl: "https://github.com/ruddrraa/freelancer-invoice",
    liveUrl: "https://relancepay.vercel.app",
    category: "Fintech SaaS",
    accentColor: "#06b6d4",
    deviceType: "tablet",
  },
  {
    slug: "vayrin",
    number: "06",
    title: "VAYRIN",
    subtitle: "Emergency Healthcare Coordination Platform Concept",
    tier: "platform_concept",
    tierLabel: "Platform Concept & Architecture",
    summary: "An architectural platform concept and system specification designed to coordinate multi-node emergency healthcare dispatch between ambulances, emergency call centers, and hospital trauma units.",
    challenge: "Emergency healthcare response times and triage outcomes are constrained when dispatch centers, in-transit paramedics, and receiving trauma hospitals lack a coordinated real-time event architecture.",
    solution: "Designed an architectural platform concept and multi-node coordination system utilizing real-time event buses to synchronize dispatch alerts, route navigation, and trauma reception intake readiness.",
    architecture: "Next.js frontend with responsive emergency control viewports; Supabase Realtime with WebSocket channels for instant dispatch updates; PostgreSQL database storing hospital resource availability.",
    keyFeatures: [
      "Live incident logging and emergency call dispatch coordination.",
      "Real-time status synchronization between dispatchers and transit units via Supabase.",
      "Hospital emergency department capacity tracking and route optimization.",
      "Role-tailored dashboards for dispatchers, paramedics, and hospital personnel."
    ],
    impactPills: [
      "Emergency Dispatch Engine",
      "Supabase Real-Time",
      "Trauma Center Routing",
      "Healthcare Coordination"
    ],
    stack: ["Next.js", "TypeScript", "Supabase Realtime", "PostgreSQL", "Tailwind CSS v4"],
    githubUrl: "https://github.com/ruddrraa/Vayrin",
    category: "HealthTech & System Concept",
    accentColor: "#171717",
    deviceType: "mobile",
  },
];
