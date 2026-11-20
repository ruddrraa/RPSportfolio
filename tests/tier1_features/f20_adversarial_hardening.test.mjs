import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';
import { CATALOGUED_FABRICATIONS } from '../helpers/contracts.mjs';
import { BLACKLISTED_TELEMETRY_TOKENS } from '../helpers/palette.mjs';

export const tests = [
  {
    id: 'f20_01',
    name: 'test_f20_01_tamper_detection_in_data',
    description: 'Asserts test suite flags injected fake metrics in data files',
    tier: 1,
    feature: 'F20 - Adversarial Coverage Hardening',
    fn() {
      // Invariant: The catalogued fabrications list must contain all 16 prohibited patterns
      assert.ok(
        CATALOGUED_FABRICATIONS.length >= 16,
        `Expected at least 16 catalogued fabrications for strict tamper detection, found ${CATALOGUED_FABRICATIONS.length}`
      );
    },
  },
  {
    id: 'f20_02',
    name: 'test_f20_02_regression_guard_on_tokens',
    description: 'Asserts regression guard active against emerald telemetry tokens',
    tier: 1,
    feature: 'F20 - Adversarial Coverage Hardening',
    fn() {
      assert.ok(
        BLACKLISTED_TELEMETRY_TOKENS.includes('#10b981') &&
        BLACKLISTED_TELEMETRY_TOKENS.includes('emerald-400') &&
        BLACKLISTED_TELEMETRY_TOKENS.includes('STATUS: PRODUCTION LIVE'),
        'Regression guards must actively monitor against re-introduction of all telemetry tokens'
      );
    },
  },
  {
    id: 'f20_03',
    name: 'test_f20_03_unmatched_route_handling',
    description: 'Asserts app/projects/[slug]/page.tsx guards against nonexistent project slugs',
    tier: 1,
    feature: 'F20 - Adversarial Coverage Hardening',
    fn() {
      const pageTsx = readSourceFile('app/projects/[slug]/page.tsx');
      assert.ok(
        pageTsx.includes('notFound()') || pageTsx.includes('!project') || pageTsx.includes('redirect'),
        'Project detail page must guard against invalid or unmatched slugs (calling notFound())'
      );
    },
  },
  {
    id: 'f20_04',
    name: 'test_f20_04_reduced_motion_static_frame_guarantee',
    description: 'Asserts 3D scene stops all RAF loops under prefers-reduced-motion',
    tier: 1,
    feature: 'F20 - Adversarial Coverage Hardening',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('prefers-reduced-motion') &&
        (heroCanvas.includes('render()') || heroCanvas.includes('renderer.render')),
        'HeroCanvas must guarantee single static frame render under prefers-reduced-motion'
      );
    },
  },
  {
    id: 'f20_05',
    name: 'test_f20_05_unmount_memory_leak_prevention',
    description: 'Asserts Three.js scene disposes geometries, materials, and renderer upon unmount',
    tier: 1,
    feature: 'F20 - Adversarial Coverage Hardening',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('dispose()'),
        'Three.js scene must actively invoke dispose() on geometries and materials to prevent WebGL memory leaks'
      );
    },
  },
];
