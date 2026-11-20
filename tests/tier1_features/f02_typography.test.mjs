import assert from 'node:assert/strict';
import { getCssRule, readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'f02_01',
    name: 'test_f02_01_serif_headline_no_forced_italic',
    description: 'Asserts .font-serif-editorial does NOT enforce font-style: italic',
    tier: 1,
    feature: 'F02 - Typographic Hierarchy & Italic Fix',
    fn() {
      const rule = getCssRule('app/globals.css', '.font-serif-editorial');
      assert.ok(rule, '.font-serif-editorial utility class must exist in app/globals.css');
      assert.ok(
        !rule.includes('font-style: italic'),
        '.font-serif-editorial must NOT enforce font-style: italic (monumental headline must be upright by default)'
      );
    },
  },
  {
    id: 'f02_02',
    name: 'test_f02_02_editorial_serif_font_family',
    description: 'Asserts Cormorant Garamond / Newsreader is configured for display headings',
    tier: 1,
    feature: 'F02 - Typographic Hierarchy & Italic Fix',
    fn() {
      const rule = getCssRule('app/globals.css', '.font-serif-editorial');
      assert.ok(rule, '.font-serif-editorial class must exist in app/globals.css');
      const hasSerif =
        rule.includes('Cormorant Garamond') ||
        rule.includes('Newsreader') ||
        rule.includes('var(--font-serif');
      assert.ok(
        hasSerif,
        'Editorial serif headline must configure Cormorant Garamond or Newsreader'
      );
    },
  },
  {
    id: 'f02_03',
    name: 'test_f02_03_interface_sans_font_family',
    description: 'Asserts Plus Jakarta Sans / Inter is configured for body copy',
    tier: 1,
    feature: 'F02 - Typographic Hierarchy & Italic Fix',
    fn() {
      const css = readSourceFile('app/globals.css');
      const hasSans =
        css.includes('Plus Jakarta Sans') ||
        css.includes('Inter') ||
        css.includes('var(--font-sans');
      assert.ok(
        hasSans,
        'Interface typography must configure Plus Jakarta Sans or Inter'
      );
    },
  },
  {
    id: 'f02_04',
    name: 'test_f02_04_technical_mono_font_family',
    description: 'Asserts JetBrains Mono is configured for technical metadata',
    tier: 1,
    feature: 'F02 - Typographic Hierarchy & Italic Fix',
    fn() {
      const css = readSourceFile('app/globals.css');
      const hasMono =
        css.includes('JetBrains Mono') ||
        css.includes('Geist Mono') ||
        css.includes('var(--font-mono');
      assert.ok(
        hasMono,
        'Technical monospace typography must configure JetBrains Mono or Geist Mono'
      );
    },
  },
  {
    id: 'f02_05',
    name: 'test_f02_05_responsive_clamp_scales',
    description: 'Asserts headline sizes use responsive clamp() CSS scales',
    tier: 1,
    feature: 'F02 - Typographic Hierarchy & Italic Fix',
    fn() {
      const css = readSourceFile('app/globals.css');
      const heroTsx = readSourceFile('components/sections/Hero.tsx');
      const hasClamp = css.includes('clamp(') || heroTsx.includes('clamp(') || heroTsx.includes('text-[clamp(');
      assert.ok(
        hasClamp,
        'Responsive typography scale must utilize clamp() for fluid headline scaling across breakpoints'
      );
    },
  },
];
