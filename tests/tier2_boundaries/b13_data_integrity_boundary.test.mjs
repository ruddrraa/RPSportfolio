import assert from 'node:assert/strict';
import { CATALOGUED_FABRICATIONS } from '../helpers/contracts.mjs';

export const tests = [
  {
    id: 'b13_01',
    name: 'test_b13_01_regex_scan_boundary_cases',
    description: 'Boundary variations of forbidden latency strings (e.g. "24 ms", "24ms", "24MS") are all caught',
    tier: 2,
    feature: 'F13 - Data Integrity Purge (Boundary)',
    fn() {
      const latPattern = CATALOGUED_FABRICATIONS.find(f => f.description.includes('24ms')).pattern;
      assert.ok(latPattern.test('24ms latency'), 'Must match "24ms latency"');
      assert.ok(latPattern.test('24 ms LATENCY'), 'Must match "24 ms LATENCY"');
      assert.ok(latPattern.test('24ms'), 'Must match "24ms"');
    },
  },
  {
    id: 'b13_02',
    name: 'test_b13_02_regex_scan_fps_variations',
    description: 'Boundary variations of forbidden FPS claims ("42.6 FPS", "42.6fps") are all caught',
    tier: 2,
    feature: 'F13 - Data Integrity Purge (Boundary)',
    fn() {
      const fpsPattern = CATALOGUED_FABRICATIONS.find(f => f.description.includes('FPS')).pattern;
      assert.ok(fpsPattern.test('42.6 FPS'), 'Must match "42.6 FPS"');
      assert.ok(fpsPattern.test('42.6fps'), 'Must match "42.6fps"');
    },
  },
  {
    id: 'b13_03',
    name: 'test_b13_03_regex_scan_fake_accounts_variations',
    description: 'Boundary search for "Howrah Hub" or "Apex Digital" catches substrings',
    tier: 2,
    feature: 'F13 - Data Integrity Purge (Boundary)',
    fn() {
      const howrahPattern = CATALOGUED_FABRICATIONS.find(f => f.description.includes('Howrah Hub')).pattern;
      assert.ok(
        howrahPattern.test('Excel Industrial Logistics (Howrah Hub)'),
        'Must match exact Howrah Hub account string'
      );
    },
  },
  {
    id: 'b13_04',
    name: 'test_b13_04_regex_scan_telemetry_vitals_variations',
    description: 'Boundary search for SpO2 / EMG-902 catches uppercase and lowercase',
    tier: 2,
    feature: 'F13 - Data Integrity Purge (Boundary)',
    fn() {
      const emgPattern = CATALOGUED_FABRICATIONS.find(f => f.description.includes('EMG-902')).pattern;
      assert.ok(emgPattern.test('emg-902'), 'Must match "emg-902"');
      assert.ok(emgPattern.test('EMG-902'), 'Must match "EMG-902"');
    },
  },
  {
    id: 'b13_05',
    name: 'test_b13_05_regex_scan_fabricated_attendance',
    description: 'Boundary search for 94% attendance catches permutations',
    tier: 2,
    feature: 'F13 - Data Integrity Purge (Boundary)',
    fn() {
      const attPattern = CATALOGUED_FABRICATIONS.find(f => f.description.includes('94%')).pattern;
      assert.ok(attPattern.test('94% Attendance'), 'Must match "94% Attendance"');
      assert.ok(attPattern.test('94% attendance'), 'Must match "94% attendance"');
    },
  },
];
