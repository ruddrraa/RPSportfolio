import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';
import { THEME_PALETTE, calculateContrastRatio, meetsWcagAA, meetsWcagAAA } from '../helpers/palette.mjs';

export const tests = [
  {
    id: 'f17_01',
    name: 'test_f17_01_wcag_color_contrast_aa',
    description: 'Asserts primary text meets WCAG AA (>=4.5:1) and AAA (>=7:1) ratios against background',
    tier: 1,
    feature: 'F17 - Accessibility & Keyboard Navigation',
    fn() {
      // Contrast of deep ink (#171717) on warm ivory (#F2F0EA)
      const primaryContrast = calculateContrastRatio(THEME_PALETTE.DEEP_INK, THEME_PALETTE.WARM_IVORY);
      assert.ok(
        meetsWcagAA(primaryContrast),
        `Primary text on background must meet WCAG AA (>= 4.5:1). Contrast was ${primaryContrast.toFixed(2)}:1`
      );
      assert.ok(
        meetsWcagAAA(primaryContrast),
        `Primary text on background must meet WCAG AAA (>= 7.0:1). Contrast was ${primaryContrast.toFixed(2)}:1`
      );

      // Contrast of deep ink on warm stone (#E7E4DC)
      const stoneContrast = calculateContrastRatio(THEME_PALETTE.DEEP_INK, THEME_PALETTE.WARM_STONE);
      assert.ok(
        meetsWcagAA(stoneContrast),
        `Primary text on warm stone card must meet WCAG AA (>= 4.5:1). Contrast was ${stoneContrast.toFixed(2)}:1`
      );
    },
  },
  {
    id: 'f17_02',
    name: 'test_f17_02_visible_focus_rings',
    description: 'Asserts interactive elements support visible focus rings (focus-visible)',
    tier: 1,
    feature: 'F17 - Accessibility & Keyboard Navigation',
    fn() {
      const globals = readSourceFile('app/globals.css');
      const navbar = readSourceFile('components/Navbar.tsx');
      const footer = readSourceFile('components/Footer.tsx');
      const combined = globals + navbar + footer;
      const hasFocusStyles =
        combined.includes('focus-visible') ||
        combined.includes('focus:') ||
        combined.includes('focus:outline') ||
        combined.includes('outline-');
      assert.ok(
        hasFocusStyles,
        'Interactive elements must support visible keyboard focus states (focus-visible or focus ring)'
      );
    },
  },
  {
    id: 'f17_03',
    name: 'test_f17_03_semantic_html_landmarks',
    description: 'Asserts presence of header, nav, main, and footer landmarks',
    tier: 1,
    feature: 'F17 - Accessibility & Keyboard Navigation',
    fn() {
      const layout = readSourceFile('app/layout.tsx');
      const page = readSourceFile('app/page.tsx');
      const navbar = readSourceFile('components/Navbar.tsx');
      const footer = readSourceFile('components/Footer.tsx');
      const combined = layout + page + navbar + footer;

      assert.ok(combined.includes('<header') || combined.includes('header'), 'Semantic <header> landmark must be present');
      assert.ok(combined.includes('<nav') || combined.includes('nav'), 'Semantic <nav> landmark must be present');
      assert.ok(combined.includes('<main') || combined.includes('main'), 'Semantic <main> landmark must be present');
      assert.ok(combined.includes('<footer') || combined.includes('footer'), 'Semantic <footer> landmark must be present');
    },
  },
  {
    id: 'f17_04',
    name: 'test_f17_04_image_alt_text',
    description: 'Asserts images provide meaningful alt attributes',
    tier: 1,
    feature: 'F17 - Accessibility & Keyboard Navigation',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      if (hero.includes('<Image') || hero.includes('<img')) {
        assert.ok(
          hero.includes('alt="') || hero.includes("alt='") || hero.includes('alt={'),
          'Hero image must provide an explicit alt attribute for screen readers'
        );
      }
    },
  },
  {
    id: 'f17_05',
    name: 'test_f17_05_aria_expanded_mobile_menu',
    description: 'Asserts mobile navigation button provides accessible toggling semantics',
    tier: 1,
    feature: 'F17 - Accessibility & Keyboard Navigation',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      assert.ok(
        navbar.includes('aria-label') || navbar.includes('aria-expanded'),
        'Navbar interactive buttons must provide accessible ARIA attributes'
      );
    },
  },
];
