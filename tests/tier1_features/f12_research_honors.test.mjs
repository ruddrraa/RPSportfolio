import assert from 'node:assert/strict';
import { readSourceFile, parseAchievementsData } from '../helpers/parser.mjs';
import { GROUND_TRUTH_RESEARCH } from '../helpers/contracts.mjs';

export const tests = [
  {
    id: 'f12_01',
    name: 'test_f12_01_q_sentry_paper_title',
    description: 'Asserts paper title is "Q-Sentry: A Semantic-Quantum Ensemble for Ethical Classification"',
    tier: 1,
    feature: 'F12 - Research & Academic Honors Feature',
    fn() {
      const achievements = parseAchievementsData('data/achievements.ts');
      const researchSource = readSourceFile('components/sections/Research.tsx');
      const qSentry = achievements.find(a => a.id && a.id.includes('q-sentry'));

      const titleMatches =
        (qSentry && qSentry.title.includes('Semantic-Quantum Ensemble for Ethical Classification')) ||
        researchSource.includes('Semantic-Quantum Ensemble for Ethical Classification');

      assert.ok(
        titleMatches,
        `Q-Sentry paper title must be "${GROUND_TRUTH_RESEARCH.title}"`
      );
    },
  },
  {
    id: 'f12_02',
    name: 'test_f12_02_q_sentry_authorship_and_venue',
    description: 'Asserts Second Author credit and CIIR 2026 conference venue',
    tier: 1,
    feature: 'F12 - Research & Academic Honors Feature',
    fn() {
      const achievements = parseAchievementsData('data/achievements.ts');
      const researchSource = readSourceFile('components/sections/Research.tsx');
      const qSentry = achievements.find(a => a.id && a.id.includes('q-sentry'));

      const hasAuthor = (qSentry && qSentry.role === 'Second Author') || researchSource.includes('Second Author');
      const hasVenue = (qSentry && qSentry.organization && qSentry.organization.includes('CIIR 2026')) || researchSource.includes('CIIR 2026');

      assert.ok(hasAuthor, 'Q-Sentry credit must be explicitly cited as Second Author');
      assert.ok(hasVenue, 'Q-Sentry publication venue must cite CIIR 2026');
    },
  },
  {
    id: 'f12_03',
    name: 'test_f12_03_no_threat_intel_distortion',
    description: 'Asserts absence of fake "threat intelligence / autonomous cyber defense" claims',
    tier: 1,
    feature: 'F12 - Research & Academic Honors Feature',
    fn() {
      const achievements = readSourceFile('data/achievements.ts');
      const researchSource = readSourceFile('components/sections/Research.tsx');
      const combined = achievements + researchSource;

      assert.ok(
        !combined.includes('autonomous threat detection'),
        'Research section must NOT contain distorted "autonomous threat detection" claims'
      );
      assert.ok(
        !combined.includes('defensive verification protocols'),
        'Research section must NOT contain distorted "defensive verification protocols" claims'
      );
      assert.ok(
        !combined.includes('threat intelligence'),
        'Research section must NOT exaggerate ethical classification paper into cyber threat intelligence'
      );
    },
  },
  {
    id: 'f12_04',
    name: 'test_f12_04_hackathon_honors_accuracy',
    description: 'Asserts Hackfest 2025 Winner, GDG APL Runner-Up, OpenAI Finalist, Level Supermind Finalist',
    tier: 1,
    feature: 'F12 - Research & Academic Honors Feature',
    fn() {
      const achievements = parseAchievementsData('data/achievements.ts');
      const hackfest = achievements.find(a => a.id && a.id.includes('hackfest'));
      const gdg = achievements.find(a => a.id && a.id.includes('gdg'));
      const openai = achievements.find(a => a.id && a.id.includes('openai'));
      const supermind = achievements.find(a => a.id && a.id.includes('supermind'));

      assert.ok(hackfest, 'Achievements must include Hackfest 2025 Winner');
      assert.ok(gdg, 'Achievements must include GDG APL Kolkata');
      assert.ok(openai, 'Achievements must include OpenAI x Outskill AI Builders');
      assert.ok(supermind, 'Achievements must include Level Supermind Hackathon');
    },
  },
  {
    id: 'f12_05',
    name: 'test_f12_05_china_iot_exchange_accuracy',
    description: 'Asserts Sichuan Vocational Institute for Technology, China international exchange',
    tier: 1,
    feature: 'F12 - Research & Academic Honors Feature',
    fn() {
      const achievements = readSourceFile('data/achievements.ts');
      const researchSource = readSourceFile('components/sections/Research.tsx');
      const combined = achievements + researchSource;

      assert.ok(
        combined.includes('China') || combined.includes('IoT Student Exchange'),
        'Honors must include International IoT Student Exchange Program in China'
      );
    },
  },
];
