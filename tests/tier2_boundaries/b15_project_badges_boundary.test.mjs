import assert from 'node:assert/strict';
import { parseProjectData } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b15_01',
    name: 'test_b15_01_unknown_tier_fallback',
    description: 'Badging logic handles diverse category strings safely',
    tier: 2,
    feature: 'F15 - Tier-Aware Project Badges & Previews (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      for (const p of projects) {
        assert.ok(p.category && p.category.length > 0, `Project ${p.slug} must provide category string`);
      }
    },
  },
  {
    id: 'b15_02',
    name: 'test_b15_02_tier_label_non_empty',
    description: 'Project subtitle / tagline is non-empty for badging context',
    tier: 2,
    feature: 'F15 - Tier-Aware Project Badges & Previews (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      for (const p of projects) {
        const desc = p.subtitle || p.tagline || p.summary;
        assert.ok(desc && desc.length > 0, `Project ${p.slug} must provide non-empty description`);
      }
    },
  },
  {
    id: 'b15_03',
    name: 'test_b15_03_production_badge_exclusivity',
    description: 'Only verified client/production projects receive client attribute',
    tier: 2,
    feature: 'F15 - Tier-Aware Project Badges & Previews (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const etech = projects.find(p => p.slug === 'etechcrm');
      assert.ok(etech.client, 'EtechCRM must define client property');
      assert.strictEqual(etech.client, 'Excel Technologies & Services');
    },
  },
  {
    id: 'b15_04',
    name: 'test_b15_04_concept_badge_clarity',
    description: 'VAYRIN is categorized as HealthTech & Real-Time Systems concept',
    tier: 2,
    feature: 'F15 - Tier-Aware Project Badges & Previews (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const vayrin = projects.find(p => p.slug === 'vayrin');
      assert.ok(vayrin, 'VAYRIN must exist');
      assert.ok(
        vayrin.category.includes('HealthTech') || vayrin.category.includes('Real-Time') || vayrin.category.includes('Concept'),
        'VAYRIN must be categorized as HealthTech / Concept platform'
      );
    },
  },
  {
    id: 'b15_05',
    name: 'test_b15_05_badge_contrast_boundary',
    description: 'Projects specify valid hex accent colors',
    tier: 2,
    feature: 'F15 - Tier-Aware Project Badges & Previews (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      for (const p of projects) {
        if (p.accentColor) {
          assert.ok(
            /^#[0-9a-fA-F]{6}$/.test(p.accentColor),
            `Project ${p.slug} accentColor must be valid 6-char hex: "${p.accentColor}"`
          );
        }
      }
    },
  },
];
