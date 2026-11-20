import assert from 'node:assert/strict';
import { parseAchievementsData } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b12_01',
    name: 'test_b12_01_q_sentry_single_venue',
    description: 'CIIR 2026 is cited as the exact conference venue without fictitious multiple venue claims',
    tier: 2,
    feature: 'F12 - Research & Academic Honors Feature (Boundary)',
    fn() {
      const achievements = parseAchievementsData('data/achievements.ts');
      const qSentry = achievements.find(a => a.id && a.id.includes('q-sentry'));
      assert.ok(qSentry, 'Q-Sentry achievement must exist');
      assert.ok(
        qSentry.organization && qSentry.organization.includes('CIIR 2026'),
        'Q-Sentry must cite CIIR 2026 venue'
      );
    },
  },
  {
    id: 'b12_02',
    name: 'test_b12_02_honors_category_types',
    description: 'All achievements belong to recognized categories (Research, Hackathon, AI Competition, International Program)',
    tier: 2,
    feature: 'F12 - Research & Academic Honors Feature (Boundary)',
    fn() {
      const achievements = parseAchievementsData('data/achievements.ts');
      const allowedCategories = ['Research', 'Hackathon', 'AI Competition', 'International Program'];
      for (const a of achievements) {
        assert.ok(
          allowedCategories.includes(a.category),
          `Achievement ${a.id} has invalid category: ${a.category}`
        );
      }
    },
  },
  {
    id: 'b12_03',
    name: 'test_b12_03_year_boundaries',
    description: 'All recorded hackathons and awards occurred in 2025 or 2026',
    tier: 2,
    feature: 'F12 - Research & Academic Honors Feature (Boundary)',
    fn() {
      const achievements = parseAchievementsData('data/achievements.ts');
      for (const a of achievements) {
        assert.ok(
          a.year === '2025' || a.year === '2026',
          `Achievement ${a.id} year must be 2025 or 2026, got: ${a.year}`
        );
      }
    },
  },
  {
    id: 'b12_04',
    name: 'test_b12_04_empty_description_guard',
    description: 'Each honor item provides non-empty verified context',
    tier: 2,
    feature: 'F12 - Research & Academic Honors Feature (Boundary)',
    fn() {
      const achievements = parseAchievementsData('data/achievements.ts');
      for (const a of achievements) {
        assert.ok(
          a.description && a.description.length > 20,
          `Achievement ${a.id} must provide detailed verified description`
        );
      }
    },
  },
  {
    id: 'b12_05',
    name: 'test_b12_05_international_program_location',
    description: 'IoT program correctly specifies China as destination',
    tier: 2,
    feature: 'F12 - Research & Academic Honors Feature (Boundary)',
    fn() {
      const achievements = parseAchievementsData('data/achievements.ts');
      const chinaProg = achievements.find(a => a.id && a.id.includes('china'));
      assert.ok(chinaProg, 'International exchange program must exist in achievements');
      assert.ok(
        chinaProg.description.includes('China'),
        'Program description must cite China destination'
      );
    },
  },
];
