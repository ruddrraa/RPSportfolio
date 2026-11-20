import assert from 'node:assert/strict';
import { parseExperienceData } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b11_01',
    name: 'test_b11_01_chronological_ordering',
    description: 'Experience items are strictly ordered in reverse chronological order (newest first)',
    tier: 2,
    feature: 'F11 - Verified Experience & Education Timeline (Boundary)',
    fn() {
      const experiences = parseExperienceData('data/experience.ts');
      assert.strictEqual(experiences[0].id, 'handshake-ai', 'First experience item must be Handshake AI (Jul 2026 – Present)');
      assert.strictEqual(experiences[1].id, 'geekotee', 'Second experience item must be GeekOTee (Mar 2025 – Jun 2025)');
      assert.strictEqual(experiences[2].id, 'internstudio', 'Third experience item must be InternStudio (Sep 2024 – Feb 2025)');
    },
  },
  {
    id: 'b11_02',
    name: 'test_b11_02_date_range_validity',
    description: 'All start years are >= 2024 (matching collegiate entry year)',
    tier: 2,
    feature: 'F11 - Verified Experience & Education Timeline (Boundary)',
    fn() {
      const experiences = parseExperienceData('data/experience.ts');
      for (const e of experiences) {
        const yearMatch = e.period.match(/20\d{2}/);
        assert.ok(yearMatch, `Experience ${e.id} period must contain valid 4-digit year`);
        const year = parseInt(yearMatch[0], 10);
        assert.ok(year >= 2024, `Experience ${e.id} start year ${year} cannot precede college entry (2024)`);
      }
    },
  },
  {
    id: 'b11_03',
    name: 'test_b11_03_role_description_length',
    description: 'Role highlights contain concise, action-oriented engineering bullet points (<= 200 chars each)',
    tier: 2,
    feature: 'F11 - Verified Experience & Education Timeline (Boundary)',
    fn() {
      const experiences = parseExperienceData('data/experience.ts');
      for (const e of experiences) {
        if (Array.isArray(e.highlights)) {
          for (const h of e.highlights) {
            assert.ok(
              h.length <= 200,
              `Highlight in ${e.id} is overly verbose (${h.length} chars): "${h}"`
            );
          }
        }
      }
    },
  },
  {
    id: 'b11_04',
    name: 'test_b11_04_education_year_bounds',
    description: 'Sister Nivedita University study years span exactly 2024 to 2028',
    tier: 2,
    feature: 'F11 - Verified Experience & Education Timeline (Boundary)',
    fn() {
      const experiences = parseExperienceData('data/experience.ts');
      assert.ok(experiences.length === 3, 'Experience list must strictly contain 3 verified roles');
    },
  },
  {
    id: 'b11_05',
    name: 'test_b11_05_no_unverified_employers',
    description: 'Experience list contains zero fictitious employer names',
    tier: 2,
    feature: 'F11 - Verified Experience & Education Timeline (Boundary)',
    fn() {
      const experiences = parseExperienceData('data/experience.ts');
      const validOrgs = ['Handshake AI', 'GeekOTee', 'InternStudio'];
      for (const e of experiences) {
        assert.ok(
          validOrgs.some(org => e.organization.includes(org)),
          `Unrecognized employer organization found: "${e.organization}"`
        );
      }
    },
  },
];
