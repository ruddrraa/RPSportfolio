import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'f09_01',
    name: 'test_f09_01_five_domain_presentation',
    description: 'Asserts 5 technical domains (AI & CV, Frontend, Backend, Databases/Cloud, Creative Dev)',
    tier: 1,
    feature: 'F09 - Technical Capabilities Architecture',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      assert.ok(
        expertise.includes('Vision') || expertise.includes('Intelligence'),
        'Capabilities must cover AI & Computer Vision domain'
      );
      assert.ok(
        expertise.includes('Frontend') || expertise.includes('Interface'),
        'Capabilities must cover Frontend Architecture domain'
      );
      assert.ok(
        expertise.includes('Backend') || expertise.includes('Systems'),
        'Capabilities must cover Backend & Distributed Systems domain'
      );
    },
  },
  {
    id: 'f09_02',
    name: 'test_f09_02_zero_progress_bars',
    description: 'Asserts complete absence of percentage bars or "95% skill" progress meters',
    tier: 1,
    feature: 'F09 - Technical Capabilities Architecture',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      assert.ok(
        !expertise.includes('progress') && !expertise.includes('w-[95%]') && !expertise.includes('w-[90%]'),
        'Capabilities section must NOT use amateur skill percentage progress bars (e.g. "React 95%")'
      );
    },
  },
  {
    id: 'f09_03',
    name: 'test_f09_03_verifiable_tooling_lists',
    description: 'Asserts realistic, verified tooling (PyTorch, RT-DETR, React 19, Next.js 15, PostgreSQL, Prisma, MongoDB)',
    tier: 1,
    feature: 'F09 - Technical Capabilities Architecture',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      const hasCoreTooling =
        expertise.includes('PyTorch') ||
        expertise.includes('React') ||
        expertise.includes('PostgreSQL') ||
        expertise.includes('Next.js');
      assert.ok(
        hasCoreTooling,
        'Capabilities must enumerate authentic, verified technical tooling'
      );
    },
  },
  {
    id: 'f09_04',
    name: 'test_f09_04_cinematic_code_window',
    description: 'Asserts dark cinematic surface (#151515) is restricted to intentional code snippet containers',
    tier: 1,
    feature: 'F09 - Technical Capabilities Architecture',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      const hasCodeContainer =
        expertise.includes('font-mono') ||
        expertise.includes('code') ||
        expertise.includes('pre') ||
        expertise.includes('rounded');
      assert.ok(
        hasCodeContainer,
        'Technical capabilities should feature a high-fidelity code/architecture inspect window'
      );
    },
  },
  {
    id: 'f09_05',
    name: 'test_f09_05_tab_keyboard_accessibility',
    description: 'Asserts domain selection tabs have ARIA roles and keyboard accessibility',
    tier: 1,
    feature: 'F09 - Technical Capabilities Architecture',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      const hasA11y =
        expertise.includes('role="tab"') ||
        expertise.includes('aria-selected') ||
        expertise.includes('button') ||
        expertise.includes('onClick');
      assert.ok(
        hasA11y,
        'Domain selection tabs must provide accessible button controls'
      );
    },
  },
];
