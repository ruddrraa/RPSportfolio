---
name: github-project-audit
description: Audits, evaluates, and ranks public GitHub repositories for portfolio presentation based on verifiable code evidence, architectural complexity, live deployment status, and real feature implementation.
---

# GitHub Project Audit & Evidence Verification

This skill establishes the methodology for systematically auditing developer repositories on GitHub to curate an authentic, evidence-backed project showcase for engineering portfolios.

---

## 1. Audit Dimensions & Evaluation Criteria

Every repository undergoes evaluation across 5 core pillars (scored 1 to 5):

1. **Architectural Complexity & Depth (Weight: 25%)**:
   - Evaluates system design, state management, backend service orchestration, API patterns, and database modeling.
   - High: Custom deep learning pipeline, multi-tenant RBAC, real-time sync, distributed caching.
   - Low: Basic static website or simple CRUD without validation.
2. **Implementation Completeness & Production Readiness (Weight: 25%)**:
   - Verifies whether core user flows are functional, error boundaries exist, input validation (e.g. Zod) is implemented, and edge cases are handled.
   - High: Full end-to-end user journeys (auth, CRUD, analytics, export, notifications).
3. **Live Deployment & Verification (Weight: 20%)**:
   - Checks for working live production URLs (Vercel, Railway, custom domains), HTTPS status, responsive behavior, and functional interactive demos.
4. **Code Quality & Modern Stack (Weight: 15%)**:
   - Checks for strict TypeScript typing, modern framework versions (Next.js 15, React 19, Tailwind v4), modular directory structures, and clean Git history.
5. **Documentation & Visual Assets (Weight: 15%)**:
   - Comprehensive README, architecture diagrams, PRD/spec files, and authentic product UI screenshots.

---

## 2. Audit Workflow Protocol

1. **Inventory & Fetching**:
   - Pull repository metadata via GitHub API (`/users/{username}/repos`).
   - Extract `package.json`, `README.md`, dependencies, and directory tree.
2. **Deep Code Inspection**:
   - Examine route handlers, API endpoints, database schemas (Prisma, Mongoose, SQL), and complex frontend state.
3. **Live Site Verification**:
   - Probe deployed URLs (`curl -I`, browser navigation).
   - Check console errors, responsive layout, and interactive workflows.
4. **Ranking & Categorization**:
   - Rank projects into **Tier 1 (Flagship / Case Studies)**, **Tier 2 (Selected Engineering Highlights)**, and **Tier 3 (Supporting / Experiments)**.
5. **Artifact Generation**:
   - Output evidence tables with tech stack, verifiable features, live URLs, repository links, and impact bullet points.
