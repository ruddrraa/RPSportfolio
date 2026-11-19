---
name: portfolio-visual-qa
description: Visual quality assurance, multi-breakpoint screenshot verification, accessibility auditing, and iterative refinement workflow to ensure portfolio implementations match reference design standards.
---

# Portfolio Visual QA & Verification Protocol

This skill provides an automated and iterative visual quality assurance methodology for verifying that the implemented portfolio adheres to the reference designs (`design1.pdf` and `design2.pdf`) across all responsive breakpoints.

---

## 1. Multi-Breakpoint Verification Standards

Every page and case study must be validated across 3 standard viewports:

| Device Target | Viewport Dimensions | Key Visual Checks |
| :--- | :--- | :--- |
| **Desktop** | `1440 x 900` / `1920 x 1080` | Editorial typography balance, outer container border radius, circular line accents, asymmetric card alignment, hover states. |
| **Tablet** | `768 x 1024` (iPad / Portrait) | Graceful grid collapse (2-column to 1-column), navigation adaptivity, touch target clearances, typography scaling. |
| **Mobile** | `390 x 844` (iPhone 14/15) | Bespoke mobile layout (from Design 2 Page 7), sticky bottom contact bar / docked actions, legible font scale, full-width device mockups. |

---

## 2. Comprehensive QA Checklist

1. **Visual Fidelity & Typography**:
   - Verify `Fira Code` is applied correctly to headers, tags, and section indicators.
   - Verify `Inter` / `Open Sans` is used for body copy with adequate line height (`leading-relaxed`).
   - Check contrast ratios for `#F5F5F5` and `#A6A6A6` against `#101010` and `#1A1A1A` (minimum 4.5:1 for body text, 3:1 for large display text).
2. **Device Mockups & Media**:
   - Ensure device frames render with crisp borders, realistic shadows, and zero image distortion.
   - Verify responsive image optimization (`next/image`) with proper aspect ratios and fallback states.
3. **Motion & Interactivity**:
   - Smooth scrolling via Lenis without scroll-jacking or jitter.
   - Hover and tap interactions feel tactile and instantaneous (<100ms response).
   - View transitions animate smoothly without layout shifts (CLS < 0.05).
4. **Console & Link Hygiene**:
   - Zero console errors, unhandled rejections, or React hydration mismatches.
   - All external links (GitHub, LinkedIn, live demo URLs) open securely in a new tab (`target="_blank" rel="noopener noreferrer"`).
   - Internal case study routes resolve correctly.
5. **Accessibility (WCAG 2.2 AA)**:
   - Full keyboard navigability with visible focus indicators (`focus-visible:ring-2`).
   - Screen-reader accessible landmarks (`<main>`, `<header>`, `<nav>`, `<section aria-labelledby="...">`).
   - All interactive icons have descriptive `aria-label`s.

---

## 3. Iterative Refinement Cycle

```text
[Deploy/Serve Localhost] 
        ↓
[Capture Multi-Viewport Screenshots via Browser Agent] 
        ↓
[Compare against Design 1 & 2 Guidelines] 
        ↓
[Identify Layout/Contrast/Spacing Deltas] 
        ↓
[Apply Precision CSS / Component Fixes] 
        ↓
[Re-verify until Reference Quality is Met]
```
