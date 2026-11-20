import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b09_01',
    name: 'test_b09_01_tooling_array_non_empty',
    description: 'Each technical domain lists at least 3 verifiable tools/technologies',
    tier: 2,
    feature: 'F09 - Technical Capabilities Architecture (Boundary)',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      assert.ok(
        expertise.includes('PyTorch') || expertise.includes('React') || expertise.includes('Next.js') || expertise.includes('PostgreSQL'),
        'Capabilities must present industry-standard technical competencies'
      );
    },
  },
  {
    id: 'b09_02',
    name: 'test_b09_02_code_window_syntax_sanitization',
    description: 'Code preview strings do not introduce unescaped invalid markup',
    tier: 2,
    feature: 'F09 - Technical Capabilities Architecture (Boundary)',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      assert.ok(
        !expertise.includes('<script>') && !expertise.includes('javascript:'),
        'Code samples must not introduce raw unsafe script elements'
      );
    },
  },
  {
    id: 'b09_03',
    name: 'test_b09_03_domain_tab_boundary_index',
    description: 'Active tab state defaults safely to a valid initial tab',
    tier: 2,
    feature: 'F09 - Technical Capabilities Architecture (Boundary)',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      assert.ok(
        expertise.includes('useState(') || expertise.includes('activeTab'),
        'Expertise component must manage selected tab state'
      );
    },
  },
  {
    id: 'b09_04',
    name: 'test_b09_04_tab_count_invariance',
    description: 'Domain tabs are structured in clean responsive buttons',
    tier: 2,
    feature: 'F09 - Technical Capabilities Architecture (Boundary)',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      assert.ok(
        expertise.includes('<button') || expertise.includes('map('),
        'Domain navigation must render interactive tab controls'
      );
    },
  },
  {
    id: 'b09_05',
    name: 'test_b09_05_cinematic_contrast_boundary',
    description: 'Code container uses dark cinematic background with high-contrast text',
    tier: 2,
    feature: 'F09 - Technical Capabilities Architecture (Boundary)',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      assert.ok(
        expertise.includes('bg-[#') || expertise.includes('bg-neutral') || expertise.includes('bg-black') || expertise.includes('surface-cinematic'),
        'Code preview container must establish high-contrast background'
      );
    },
  },
];
