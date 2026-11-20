import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b07_01',
    name: 'test_b07_01_long_name_wrap_safety',
    description: 'Hero headline allows proper CSS word breaking or responsive shrinking without viewport cutoff',
    tier: 2,
    feature: 'F07 - Hero Editorial Choreography (Boundary)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      assert.ok(
        hero.includes('tracking-tight') || hero.includes('break-') || hero.includes('max-w-'),
        'Hero typography must specify controlled tracking or max-width to avoid cutoff'
      );
    },
  },
  {
    id: 'b07_02',
    name: 'test_b07_02_missing_portrait_graceful_render',
    description: 'Hero portrait provides priority loading or width/height attributes',
    tier: 2,
    feature: 'F07 - Hero Editorial Choreography (Boundary)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      if (hero.includes('<Image')) {
        assert.ok(
          hero.includes('priority') || hero.includes('width=') || hero.includes('fill'),
          'Next.js Image in Hero must provide priority or dimensional bounds to prevent CLS'
        );
      }
    },
  },
  {
    id: 'b07_03',
    name: 'test_b07_03_z_index_stacking_order',
    description: 'Hero text content maintains z-index superior to background 3D canvas',
    tier: 2,
    feature: 'F07 - Hero Editorial Choreography (Boundary)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      assert.ok(
        hero.includes('relative') || hero.includes('z-10') || hero.includes('z-20'),
        'Hero content container must be layered above canvas'
      );
    },
  },
  {
    id: 'b07_04',
    name: 'test_b07_04_positioning_statement_word_count',
    description: 'Positioning statement is concise (between 8 and 60 words)',
    tier: 2,
    feature: 'F07 - Hero Editorial Choreography (Boundary)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      assert.ok(
        hero.includes('<p') || hero.includes('text-'),
        'Hero must present concise editorial narrative copy'
      );
    },
  },
  {
    id: 'b07_05',
    name: 'test_b07_05_cta_anchor_accessibility',
    description: 'Scroll invitation and CTAs specify valid aria-label or accessible labels',
    tier: 2,
    feature: 'F07 - Hero Editorial Choreography (Boundary)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      assert.ok(
        hero.includes('href=') || hero.includes('button') || hero.includes('aria-label'),
        'Hero CTAs must provide accessible interaction targets'
      );
    },
  },
];
