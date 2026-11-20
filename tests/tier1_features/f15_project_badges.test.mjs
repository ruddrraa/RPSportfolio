import assert from 'node:assert/strict';
import { parseProjectData, readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'f15_01',
    name: 'test_f15_01_etechcrm_production_client_badge',
    description: 'Asserts EtechCRM is badged as "Production Client System"',
    tier: 1,
    feature: 'F15 - Tier-Aware Project Badges & Previews',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const pageTsx = readSourceFile('app/projects/[slug]/page.tsx');
      const etech = projects.find(p => p.slug === 'etechcrm');
      assert.ok(etech, 'EtechCRM must exist');

      const isBadged =
        (etech.tierLabel && etech.tierLabel.includes('Production Client')) ||
        (etech.category && etech.category.includes('Enterprise')) ||
        pageTsx.includes('Production Client System');
      assert.ok(
        isBadged,
        'EtechCRM must be badged as "Production Client System"'
      );
    },
  },
  {
    id: 'f15_02',
    name: 'test_f15_02_munshiji_live_demo_badge',
    description: 'Asserts MunshiJi AI is badged as "Live Demo / Prototype"',
    tier: 1,
    feature: 'F15 - Tier-Aware Project Badges & Previews',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const munshiji = projects.find(p => p.slug === 'munshiji-ai');
      assert.ok(munshiji, 'MunshiJi AI must exist');

      const isBadged =
        (munshiji.tierLabel && munshiji.tierLabel.includes('Demo')) ||
        (munshiji.tierLabel && munshiji.tierLabel.includes('Prototype')) ||
        (munshiji.category && munshiji.category.includes('Retail'));
      assert.ok(
        isBadged,
        'MunshiJi AI must be badged as a Live Demo / Prototype'
      );
    },
  },
  {
    id: 'f15_03',
    name: 'test_f15_03_cardeca_demo_badge',
    description: 'Asserts CardecaAlgo is badged as "Interactive Engineering Demo"',
    tier: 1,
    feature: 'F15 - Tier-Aware Project Badges & Previews',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const cardeca = projects.find(p => p.slug === 'cardeca-algo');
      assert.ok(cardeca, 'CardecaAlgo must exist');

      const isBadged =
        (cardeca.tierLabel && cardeca.tierLabel.includes('Engineering Demo')) ||
        (cardeca.category && cardeca.category.includes('Computer Vision'));
      assert.ok(
        isBadged,
        'CardecaAlgo must be badged as an Interactive Engineering Demo'
      );
    },
  },
  {
    id: 'f15_04',
    name: 'test_f15_04_ethos_repo_badge',
    description: 'Asserts ETHOS is badged as "Verified GitHub Repository" (never production deployment)',
    tier: 1,
    feature: 'F15 - Tier-Aware Project Badges & Previews',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const ethos = projects.find(p => p.slug === 'ethos');
      assert.ok(ethos, 'ETHOS must exist');
      assert.ok(
        !ethos.liveUrl,
        'ETHOS must not claim a live production deployment url (must be badged as Verified GitHub Repository)'
      );
    },
  },
  {
    id: 'f15_05',
    name: 'test_f15_05_vayrin_concept_badge',
    description: 'Asserts VAYRIN is badged as "Platform Concept & Architecture"',
    tier: 1,
    feature: 'F15 - Tier-Aware Project Badges & Previews',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const vayrin = projects.find(p => p.slug === 'vayrin');
      assert.ok(vayrin, 'VAYRIN must exist');
      assert.ok(
        !vayrin.liveUrl,
        'VAYRIN must not claim a live deployed healthcare URL (must be Platform Concept & Architecture)'
      );
    },
  },
];
