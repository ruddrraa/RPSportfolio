import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';
import { GROUND_TRUTH_EDUCATION } from '../helpers/contracts.mjs';

export const tests = [
  {
    id: 'f08_01',
    name: 'test_f08_01_manifesto_pull_quote',
    description: 'Asserts presence of verified editorial quote on engineering discipline',
    tier: 1,
    feature: 'F08 - Perspective Editorial Manifesto',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      assert.ok(
        perspective.includes('font-serif-editorial') || perspective.includes('font-serif'),
        'Perspective manifesto must use editorial serif styling for high-impact philosophical pull-quotes'
      );
    },
  },
  {
    id: 'f08_02',
    name: 'test_f08_02_four_architectural_pillars',
    description: 'Asserts 4 distinct pillars in the editorial perspective',
    tier: 1,
    feature: 'F08 - Perspective Editorial Manifesto',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      const hasFourPillars =
        perspective.includes('System Cohesion') ||
        perspective.includes('Pillars') ||
        perspective.includes('pillars') ||
        (perspective.includes('01') && perspective.includes('02') && perspective.includes('03') && perspective.includes('04'));
      assert.ok(
        hasFourPillars,
        'Perspective section must structure engineering principles into four distinct architectural pillars'
      );
    },
  },
  {
    id: 'f08_03',
    name: 'test_f08_03_hairline_divider_grid',
    description: 'Asserts architectural hairline border dividers (border-subtle / hairline)',
    tier: 1,
    feature: 'F08 - Perspective Editorial Manifesto',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      const hasBorders =
        perspective.includes('border') ||
        perspective.includes('hairline-divider') ||
        perspective.includes('divide-');
      assert.ok(
        hasBorders,
        'Perspective layout must structure text blocks using architectural hairline border dividers'
      );
    },
  },
  {
    id: 'f08_04',
    name: 'test_f08_04_academic_foundation_strip',
    description: 'Asserts Sister Nivedita University B.Tech CSBS (2024–2028) citation',
    tier: 1,
    feature: 'F08 - Perspective Editorial Manifesto',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      const hasEducationCitation =
        perspective.includes(GROUND_TRUTH_EDUCATION.institution) ||
        perspective.includes('CSBS') ||
        perspective.includes('Computer Science and Business Systems');
      assert.ok(
        hasEducationCitation,
        `Perspective manifesto should reference academic foundation at ${GROUND_TRUTH_EDUCATION.institution}`
      );
    },
  },
  {
    id: 'f08_05',
    name: 'test_f08_05_editorial_roman_numerals',
    description: 'Asserts roman numerals (I, II, III, IV) or indexed identifiers for pillars',
    tier: 1,
    feature: 'F08 - Perspective Editorial Manifesto',
    fn() {
      const perspective = readSourceFile('components/sections/Perspective.tsx');
      const hasPillarIndices =
        (perspective.includes('I') && perspective.includes('II') && perspective.includes('III')) ||
        (perspective.includes('01') && perspective.includes('02') && perspective.includes('03'));
      assert.ok(
        hasPillarIndices,
        'Perspective pillars must feature elegant indices (e.g. Roman numerals I-IV or editorial numbering)'
      );
    },
  },
];
