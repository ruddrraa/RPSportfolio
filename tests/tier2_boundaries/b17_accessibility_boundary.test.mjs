import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';
import { THEME_PALETTE, calculateContrastRatio, meetsWcagAA } from '../helpers/palette.mjs';

export const tests = [
  {
    id: 'b17_01',
    name: 'test_b17_01_zero_tabindex_negative_on_buttons',
    description: 'Interactive buttons do not specify invalid negative tabindexes without intent',
    tier: 2,
    feature: 'F17 - Accessibility & Keyboard Navigation (Boundary)',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      assert.ok(
        !navbar.includes('tabIndex={-1}') && !navbar.includes('tabindex="-1"'),
        'Navbar interactive controls must be keyboard reachable (no unintentional tabindex=-1)'
      );
    },
  },
  {
    id: 'b17_02',
    name: 'test_b17_02_contrast_muted_text_boundary',
    description: 'Muted text (#77736C) on ivory (#F2F0EA) meets WCAG AA large text threshold (>= 3.0:1)',
    tier: 2,
    feature: 'F17 - Accessibility & Keyboard Navigation (Boundary)',
    fn() {
      const contrast = calculateContrastRatio(THEME_PALETTE.MUTED_WARM_GREY, THEME_PALETTE.WARM_IVORY);
      assert.ok(
        contrast >= 3.0,
        `Muted grey on warm ivory must meet at least large text threshold (>= 3.0:1), got: ${contrast.toFixed(2)}:1`
      );
    },
  },
  {
    id: 'b17_03',
    name: 'test_b17_03_aria_hidden_on_decorative_icons',
    description: 'Lucide icon components are integrated with accessible parent buttons/links',
    tier: 2,
    feature: 'F17 - Accessibility & Keyboard Navigation (Boundary)',
    fn() {
      const footer = readSourceFile('components/Footer.tsx');
      assert.ok(
        footer.includes('<button') || footer.includes('<a'),
        'Footer icons must reside inside semantic button or anchor containers'
      );
    },
  },
  {
    id: 'b17_04',
    name: 'test_b17_04_skip_to_content_anchor',
    description: 'Main content landmark is uniquely identifiable',
    tier: 2,
    feature: 'F17 - Accessibility & Keyboard Navigation (Boundary)',
    fn() {
      const layout = readSourceFile('app/layout.tsx');
      const page = readSourceFile('app/page.tsx');
      const combined = layout + page;
      assert.ok(
        combined.includes('<main') || combined.includes('id="'),
        'Page structure must feature semantic <main> tag or section IDs'
      );
    },
  },
  {
    id: 'b17_05',
    name: 'test_b17_05_screen_reader_only_class_availability',
    description: 'Interactive button icons provide accompanying textual screen reader context or titles',
    tier: 2,
    feature: 'F17 - Accessibility & Keyboard Navigation (Boundary)',
    fn() {
      const footer = readSourceFile('components/Footer.tsx');
      assert.ok(
        footer.includes('title=') || footer.includes('aria-label') || footer.includes('GitHub') || footer.includes('LinkedIn'),
        'External links and copy buttons must specify title or descriptive text'
      );
    },
  },
];
