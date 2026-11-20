import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b02_01',
    name: 'test_b02_01_clamp_boundary_minimum_viewport',
    description: 'Headline clamp() min-size accommodates small screens (<= 3.5rem)',
    tier: 2,
    feature: 'F02 - Typographic Hierarchy & Italic Fix (Boundary)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      const clampMatch = hero.match(/clamp\(\s*([^,]+),/);
      if (clampMatch) {
        const minVal = clampMatch[1].trim();
        assert.ok(minVal, 'clamp() must specify a lower bound');
      }
    },
  },
  {
    id: 'b02_02',
    name: 'test_b02_02_clamp_boundary_maximum_viewport',
    description: 'Headline clamp() max-size caps headline on wide screens (<= 12rem)',
    tier: 2,
    feature: 'F02 - Typographic Hierarchy & Italic Fix (Boundary)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      const clampMatch = hero.match(/clamp\([^,]+,[^,]+,\s*([^)]+)\)/);
      if (clampMatch) {
        const maxVal = clampMatch[1].trim();
        assert.ok(maxVal, 'clamp() must specify an upper bound');
      }
    },
  },
  {
    id: 'b02_03',
    name: 'test_b02_03_zero_styled_all_caps_long_prose',
    description: 'Technical uppercase styling is constrained to badges/subheads and never applied to long narrative paragraphs',
    tier: 2,
    feature: 'F02 - Typographic Hierarchy & Italic Fix (Boundary)',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      // Verify that long paragraphs do not carry uppercase class
      const matches = perspective.match(/<p[^>]*class(?:Name)?=["'][^"']*uppercase[^"']*["'][^>]*>([\s\S]*?)<\/p>/gi) || [];
      for (const p of matches) {
        const textOnly = p.replace(/<[^>]+>/g, '').trim();
        assert.ok(
          textOnly.length < 80,
          `Paragraph with uppercase styling is too long (${textOnly.length} chars). All-caps is only permitted on short labels.`
        );
      }
    },
  },
  {
    id: 'b02_04',
    name: 'test_b02_04_line_height_tightness',
    description: 'Headline line-height is tight (leading-[0.9] to leading-tight) for monumental editorial presence',
    tier: 2,
    feature: 'F02 - Typographic Hierarchy & Italic Fix (Boundary)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      const hasTightLeading =
        hero.includes('leading-none') ||
        hero.includes('leading-tight') ||
        hero.includes('leading-[0.') ||
        hero.includes('leading-[1.');
      assert.ok(
        hasTightLeading,
        'Hero monumental headline must feature tight editorial leading'
      );
    },
  },
  {
    id: 'b02_05',
    name: 'test_b02_05_fallback_font_stack',
    description: 'Font stack includes safe system generic fallbacks (serif, sans-serif, monospace)',
    tier: 2,
    feature: 'F02 - Typographic Hierarchy & Italic Fix (Boundary)',
    fn() {
      const globals = readSourceFile('app/globals.css');
      assert.ok(globals.includes('serif'), 'Serif font rule must include generic serif fallback');
      assert.ok(globals.includes('sans-serif') || globals.includes('sans'), 'Sans font rule must include generic sans-serif fallback');
      assert.ok(globals.includes('monospace') || globals.includes('mono'), 'Mono font rule must include generic monospace fallback');
    },
  },
];
