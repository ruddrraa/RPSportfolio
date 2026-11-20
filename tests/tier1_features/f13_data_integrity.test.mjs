import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

function getAllPortfolioSource() {
  const files = [
    'data/projects.ts',
    'data/achievements.ts',
    'data/experience.ts',
    'components/sections/ProjectsGallery.tsx',
    'components/sections/Hero.tsx',
    'components/sections/Research.tsx',
    'components/sections/Expertise.tsx',
    'components/ui/ProjectInterfacePreview.tsx',
    'app/projects/[slug]/page.tsx',
  ];
  let combined = '';
  for (const f of files) {
    try {
      combined += '\n' + readSourceFile(f);
    } catch {
      // ignore missing optional file
    }
  }
  return combined;
}

export const tests = [
  {
    id: 'f13_01',
    name: 'test_f13_01_purge_cardeca_latency_fps',
    description: 'Asserts absence of "24ms LATENCY" and "FPS: 42.6"',
    tier: 1,
    feature: 'F13 - Data Integrity Purge',
    fn() {
      const source = getAllPortfolioSource();
      assert.ok(!/24\s*ms\s*(latency)?/i.test(source), 'Blacklisted "24ms LATENCY" must be purged from codebase');
      assert.ok(!/42\.6\s*fps/i.test(source), 'Blacklisted "FPS: 42.6" must be purged from codebase');
    },
  },
  {
    id: 'f13_02',
    name: 'test_f13_02_purge_etechcrm_fake_counts',
    description: 'Asserts absence of "1,420 Active Client Accounts" and "28 Logged Field Visits Today"',
    tier: 1,
    feature: 'F13 - Data Integrity Purge',
    fn() {
      const source = getAllPortfolioSource();
      assert.ok(!/1,?420\s*active/i.test(source), 'Blacklisted "1,420 Active Client Accounts" must be purged');
      assert.ok(!/28\s*logged\s*field\s*visits/i.test(source), 'Blacklisted "28 Logged Field Visits Today" must be purged');
    },
  },
  {
    id: 'f13_03',
    name: 'test_f13_03_purge_ethos_fake_attendance',
    description: 'Asserts absence of "94% Attendance" and "LATENCY: 120ms"',
    tier: 1,
    feature: 'F13 - Data Integrity Purge',
    fn() {
      const source = getAllPortfolioSource();
      assert.ok(!/94%\s*attendance/i.test(source), 'Blacklisted "94% Attendance" must be purged');
      assert.ok(!/120\s*ms/i.test(source), 'Blacklisted "LATENCY: 120ms" must be purged');
    },
  },
  {
    id: 'f13_04',
    name: 'test_f13_04_purge_vayrin_fake_vitals',
    description: 'Asserts absence of fake patient vitals (SpO2: 97%, Heart Rate: 78 bpm, ICU Beds: 4)',
    tier: 1,
    feature: 'F13 - Data Integrity Purge',
    fn() {
      const source = getAllPortfolioSource();
      assert.ok(!/spo2/i.test(source), 'Blacklisted fake patient telemetry ("SpO2") must be purged');
      assert.ok(!/heart\s*rate/i.test(source), 'Blacklisted fake patient telemetry ("Heart Rate") must be purged');
      assert.ok(!/icu\s*beds/i.test(source), 'Blacklisted fake hospital telemetry ("ICU Beds") must be purged');
      assert.ok(!/emg-902/i.test(source), 'Blacklisted emergency vehicle code ("EMG-902") must be purged');
    },
  },
  {
    id: 'f13_05',
    name: 'test_f13_05_purge_fake_client_accounts',
    description: 'Asserts absence of unverified client accounts ("Excel Industrial Logistics (Howrah Hub)", "Apex Digital Solutions")',
    tier: 1,
    feature: 'F13 - Data Integrity Purge',
    fn() {
      const source = getAllPortfolioSource();
      assert.ok(
        !/excel\s*industrial\s*logistics/i.test(source),
        'Blacklisted fake client "Excel Industrial Logistics (Howrah Hub)" must be purged'
      );
      assert.ok(
        !/apex\s*digital\s*solutions/i.test(source),
        'Blacklisted fake client "Apex Digital Solutions" must be purged'
      );
    },
  },
];
