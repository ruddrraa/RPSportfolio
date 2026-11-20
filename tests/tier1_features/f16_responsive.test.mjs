import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'f16_01',
    name: 'test_f16_01_mobile_390px_no_horizontal_overflow',
    description: 'Asserts layout sets max-w-full and prevents horizontal scrollbar on 390px viewport',
    tier: 1,
    feature: 'F16 - Responsive Recomposition (390px-1920px)',
    fn() {
      const globals = readSourceFile('app/globals.css');
      const layout = readSourceFile('app/layout.tsx');
      const hasOverflowGuard =
        globals.includes('overflow-x: hidden') ||
        layout.includes('overflow-x-hidden');
      assert.ok(
        hasOverflowGuard,
        'Root layout or globals.css must enforce overflow-x: hidden to prevent horizontal scroll on mobile (390px)'
      );
    },
  },
  {
    id: 'f16_02',
    name: 'test_f16_02_tablet_768px_reflow',
    description: 'Asserts multi-column grids collapse gracefully at md: (768px) breakpoint',
    tier: 1,
    feature: 'F16 - Responsive Recomposition (390px-1920px)',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      const combined = perspective + expertise;
      assert.ok(
        combined.includes('grid-cols-1') && (combined.includes('md:grid-cols-') || combined.includes('lg:grid-cols-')),
        'Component layouts must reflow from single-column on mobile to multi-column at tablet/desktop breakpoints'
      );
    },
  },
  {
    id: 'f16_03',
    name: 'test_f16_03_desktop_1440px_container_padding',
    description: 'Asserts proper margins and max-widths at 1440px desktop (max-w-7xl / container padding)',
    tier: 1,
    feature: 'F16 - Responsive Recomposition (390px-1920px)',
    fn() {
      const footer = readSourceFile('components/Footer.tsx');
      const gallery = readSourceFile('components/sections/ProjectsGallery.tsx');
      const combined = footer + gallery;
      assert.ok(
        combined.includes('max-w-7xl') || combined.includes('max-w-6xl') || combined.includes('max-w-5xl'),
        'Major sections must be bounded by responsive max-width containers to preserve layout integrity at 1440px'
      );
    },
  },
  {
    id: 'f16_04',
    name: 'test_f16_04_ultrawide_1920px_typography_capping',
    description: 'Asserts max width bounds prevent excessive headline distortion at 1920px',
    tier: 1,
    feature: 'F16 - Responsive Recomposition (390px-1920px)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      assert.ok(
        hero.includes('max-w-') || hero.includes('mx-auto'),
        'Hero section content must be centered and bounded by max-width constraints on ultra-wide 1920px screens'
      );
    },
  },
  {
    id: 'f16_05',
    name: 'test_f16_05_touch_target_sizes_mobile',
    description: 'Asserts interactive CTA buttons provide sufficient touch target heights on mobile',
    tier: 1,
    feature: 'F16 - Responsive Recomposition (390px-1920px)',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      const footer = readSourceFile('components/Footer.tsx');
      const combined = navbar + footer;
      const hasTouchPadding =
        combined.includes('py-2') ||
        combined.includes('py-3') ||
        combined.includes('py-4') ||
        combined.includes('p-4') ||
        combined.includes('min-h-');
      assert.ok(
        hasTouchPadding,
        'Interactive CTA elements must have touch padding satisfying mobile touch target guidelines (min ~44px)'
      );
    },
  },
];
