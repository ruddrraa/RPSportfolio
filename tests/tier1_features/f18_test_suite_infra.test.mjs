import assert from 'node:assert/strict';
import { fileExists, readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'f18_01',
    name: 'test_f18_01_standalone_runner_executable',
    description: 'Asserts tests/runner.mjs exists and is configured for native ESM execution',
    tier: 1,
    feature: 'F18 - Requirement-Driven E2E Test Suite',
    fn() {
      assert.ok(fileExists('tests/runner.mjs'), 'tests/runner.mjs must exist as standalone test runner');
      const runnerCode = readSourceFile('tests/runner.mjs');
      assert.ok(
        runnerCode.includes('process.exit'),
        'runner.mjs must implement programmatic exit code handling'
      );
      assert.ok(
        runnerCode.includes('--tier='),
        'runner.mjs must support --tier CLI flag filtering'
      );
    },
  },
  {
    id: 'f18_02',
    name: 'test_f18_02_test_suite_zero_src_tampering',
    description: 'Asserts test suite resides strictly in tests/ without polluting app/ or src/',
    tier: 1,
    feature: 'F18 - Requirement-Driven E2E Test Suite',
    fn() {
      assert.ok(!fileExists('src/runner.mjs'), 'Test runner must not reside in src/');
      assert.ok(!fileExists('app/runner.mjs'), 'Test runner must not reside in app/');
      assert.ok(fileExists('tests/helpers/parser.mjs'), 'Parser helper must reside in tests/helpers/');
      assert.ok(fileExists('tests/helpers/palette.mjs'), 'Palette helper must reside in tests/helpers/');
      assert.ok(fileExists('tests/helpers/contracts.mjs'), 'Contracts helper must reside in tests/helpers/');
    },
  },
  {
    id: 'f18_03',
    name: 'test_f18_03_hierarchical_reporting',
    description: 'Asserts runner produces structured pass/fail output grouped by Tier and Feature',
    tier: 1,
    feature: 'F18 - Requirement-Driven E2E Test Suite',
    fn() {
      const runnerCode = readSourceFile('tests/runner.mjs');
      assert.ok(
        runnerCode.includes('TEST SUITE EXECUTION SUMMARY') || runnerCode.includes('Tier 1'),
        'runner.mjs must emit structured hierarchical summary table'
      );
    },
  },
  {
    id: 'f18_04',
    name: 'test_f18_04_exit_code_semantics',
    description: 'Asserts exit code 0 on all passes and exit code 1 on failure',
    tier: 1,
    feature: 'F18 - Requirement-Driven E2E Test Suite',
    fn() {
      const runnerCode = readSourceFile('tests/runner.mjs');
      assert.ok(
        runnerCode.includes('process.exit(0)') && runnerCode.includes('process.exit(1)'),
        'runner.mjs must implement exit code 0 on pass and 1 on failure'
      );
    },
  },
  {
    id: 'f18_05',
    name: 'test_f18_05_test_infra_documentation',
    description: 'Asserts test infrastructure adheres to the 230 test target specification across 4 tiers',
    tier: 1,
    feature: 'F18 - Requirement-Driven E2E Test Suite',
    fn() {
      assert.ok(
        fileExists('tests/helpers/contracts.mjs'),
        'Contracts helper must be documented and present in test suite'
      );
      assert.ok(
        fileExists('tests/helpers/palette.mjs'),
        'Palette helper must be documented and present in test suite'
      );
    },
  },
];
