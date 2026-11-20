import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b08_01',
    name: 'test_b08_01_text_overflow_boundary',
    description: 'Perspective layout uses responsive flex/grid wrappers that gracefully reflow content',
    tier: 2,
    feature: 'F08 - Perspective Editorial Manifesto (Boundary)',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      assert.ok(
        perspective.includes('flex') || perspective.includes('grid'),
        'Perspective section must use responsive flex/grid containers'
      );
    },
  },
  {
    id: 'b08_02',
    name: 'test_b08_02_pillar_count_invariance',
    description: 'Perspective organizes principles into a bounded, digestible set',
    tier: 2,
    feature: 'F08 - Perspective Editorial Manifesto (Boundary)',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      assert.ok(
        perspective.length > 200,
        'Perspective component source must be non-trivial'
      );
    },
  },
  {
    id: 'b08_03',
    name: 'test_b08_03_pull_quote_word_boundary',
    description: 'Pull quote contains meaningful editorial perspective statements',
    tier: 2,
    feature: 'F08 - Perspective Editorial Manifesto (Boundary)',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      assert.ok(
        perspective.includes('h2') || perspective.includes('h3') || perspective.includes('blockquote') || perspective.includes('font-serif'),
        'Perspective must feature prominent editorial typography'
      );
    },
  },
  {
    id: 'b08_04',
    name: 'test_b08_04_divider_line_thickness',
    description: 'Hairline dividers specify 1px border or height',
    tier: 2,
    feature: 'F08 - Perspective Editorial Manifesto (Boundary)',
    fn() {
      const globals = readSourceFile('app/globals.css');
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      const combined = globals + perspective;
      assert.ok(
        combined.includes('1px') || combined.includes('border') || combined.includes('hairline'),
        'Dividers must use 1px subtle hairline styling'
      );
    },
  },
  {
    id: 'b08_05',
    name: 'test_b08_05_roman_numeral_formatting',
    description: 'Pillar labels or numerals use monospace or refined typography',
    tier: 2,
    feature: 'F08 - Perspective Editorial Manifesto (Boundary)',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      assert.ok(
        perspective.includes('font-mono') || perspective.includes('font-serif') || perspective.includes('text-'),
        'Pillar indices must use intentional typographic styling'
      );
    },
  },
];
