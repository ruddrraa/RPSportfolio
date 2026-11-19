---
name: portfolio-art-direction
description: Art direction and visual design synthesis for Rudra Pratap Singh's portfolio. Combines Design 2's editorial layout, typography, and dark monochromatic aesthetic with Design 1's device mockups, visual storytelling, and project depth. Enforces strict design tokens and rules to prevent generic AI-generated templates.
---

# Portfolio Art Direction & Visual Identity

This skill governs the art direction, aesthetic harmony, layout composition, and visual storytelling for Rudra Pratap Singh's portfolio. It blends the editorial elegance of **Design 2 (Nikita Khvatov)** with the impactful project showcase and device staging of **Design 1 (Muh Zulfiqor)**.

---

## 1. Visual Foundation & Heritage (Design 2 Synthesis)

- **Palette Discipline**:
  - Primary Background: `#101010` (True Deep Carbon)
  - Primary Surface / Card: `#1A1A1A` (Elevated Charcoal)
  - Card Stroke / Sub-surfaces: `#2A2A2A` to `#303030` (Hairline definition)
  - Muted Text / Meta: `#A6A6A6` (Cool Gray)
  - Primary Text / Headings: `#F5F5F5` (Crisp Off-White)
  - Accent / State Highlight: `#FFFFFF` (Pure White for active pills, hover glows, and contrast indicators)
- **Typographic System**:
  - **Display & Monospace**: `Fira Code` — used for structural technical tags, code markers (`... /About me ...`, `... /Projects ...`), numbered labels (`01`, `02`), terminal prompts (`>_`), and meta chips.
  - **Body & Sans**: `Inter` or `Open Sans` — used for high-readability paragraphs, case study narratives, and metric descriptions.
- **Architectural Framing**:
  - A subtle outer website viewport border (`border border-[#262626] rounded-[28px] md:rounded-[36px]`) with responsive padding.
  - Thin circular geometric arcs and orbital curves (`stroke-[#222222]` / `opacity-40`) layered behind hero and section transitions to add depth without clutter.
  - Monospace breadcrumbs and ellipsis navigation markers (`...`, `... /Contacts ...`).

---

## 2. Project Presentation & Storytelling (Design 1 Synthesis)

- **Numbered Case Study Headers**:
  - Each major project is introduced with an oversized serif/mono index (e.g., `01 EtechCRM.`, `02 CardecaAlgo.`, `03 RelancePay.`, `04 ETHOS.`).
- **Device & Product Mockups**:
  - Do not use flat generic rectangles. Frame projects inside realistic, sleek device viewports (MacBook Pro displays, mobile screens, or floating multi-layer UI canvas layers).
  - High-impact compositions: Angled device perspective, layered UI floating widgets, and subtle shadow cascades (`shadow-2xl shadow-black/80`).
- **Feature & Impact Pill Badges**:
  - Every project features concise bullet pills highlighting engineering achievements (e.g., `Architected Real-Time RT-DETR Inference`, `Role-Based RBAC Workflow`, `Offline-First Sync Engine`).
- **Technology Badges**:
  - Clear tech stack tags featuring clean icon pills (Next.js, TypeScript, PyTorch, MongoDB Atlas, Tailwind CSS).

---

## 3. Strict Rules: Preventing "Generic AI" Portfolio Output

1. **No Cliché Gradients**: Never use arbitrary purple-to-pink or blue-to-cyan neon gradient blobs. Use pure monochromatic lighting, subtle radial vignettes (`radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)`), and deliberate contrast.
2. **No Generic Glassmorphism**: Cards must be crisp and grounded in `#1A1A1A` with sharp 1px borders (`border-[#2A2A2A]`), not muddy, blurry frosted-glass panels.
3. **Asymmetric Rhythm**: Avoid identical repeated 3-column grid cards. Alternate between full-width editorial feature cards, split 60/40 layouts, and interactive horizontal drawers.
4. **Purposeful Motion**:
   - Micro-interactions on buttons and project cards (subtle border illumination, magnetic cursor attraction, smooth image parallax).
   - Smooth inertia scrolling via Lenis.
   - Zero distracting infinite spinning or bouncy animations.
5. **Real Evidence First**: Always show genuine screenshots, actual architecture flows, and verifiable metrics rather than decorative placeholder graphics.
