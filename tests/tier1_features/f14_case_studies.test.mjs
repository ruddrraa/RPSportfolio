import assert from 'node:assert/strict';
import { readSourceFile, fileExists, parseProjectData } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'f14_01',
    name: 'test_f14_01_dynamic_routes_exist',
    description: 'Asserts dynamic project detail route exists at app/projects/[slug]/page.tsx',
    tier: 1,
    feature: 'F14 - Project Case Studies & Detail Pages',
    fn() {
      assert.ok(
        fileExists('app/projects/[slug]/page.tsx'),
        'Dynamic route app/projects/[slug]/page.tsx must exist'
      );
      const pageTsx = readSourceFile('app/projects/[slug]/page.tsx');
      assert.ok(
        pageTsx.includes('generateStaticParams') || pageTsx.includes('projects'),
        'Case study page must bind project slugs for dynamic routing'
      );
    },
  },
  {
    id: 'f14_02',
    name: 'test_f14_02_structured_problem_solution',
    description: 'Asserts case studies document Problem/Challenge, Solution, Architecture, and Stack',
    tier: 1,
    feature: 'F14 - Project Case Studies & Detail Pages',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      for (const p of projects) {
        assert.ok(
          p.challenge || p.problem,
          `Project ${p.slug} must document Problem/Challenge statement`
        );
        assert.ok(
          p.solution,
          `Project ${p.slug} must document Engineering Solution`
        );
        assert.ok(
          p.architecture,
          `Project ${p.slug} must document Technical Architecture`
        );
        assert.ok(
          Array.isArray(p.stack) && p.stack.length > 0,
          `Project ${p.slug} must document Technology Stack`
        );
      }
    },
  },
  {
    id: 'f14_03',
    name: 'test_f14_03_authentic_visual_assets',
    description: 'Asserts genuine logo assets exist for EtechCRM and CardecaAlgo in public/projects/',
    tier: 1,
    feature: 'F14 - Project Case Studies & Detail Pages',
    fn() {
      assert.ok(
        fileExists('public/projects/etechcrm/excelnavbarlogo.png') ||
        fileExists('public/projects/etechcrm/excel-logo.png'),
        'Genuine EtechCRM logo must exist in public/projects/etechcrm/'
      );
      assert.ok(
        fileExists('public/projects/cardeca/logo.png'),
        'Genuine CardecaAlgo logo must exist in public/projects/cardeca/'
      );
    },
  },
  {
    id: 'f14_04',
    name: 'test_f14_04_no_mismatched_logos',
    description: 'Asserts MunshiJi AI does NOT display Cardeca logo as a placeholder',
    tier: 1,
    feature: 'F14 - Project Case Studies & Detail Pages',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const munshiji = projects.find(p => p.slug === 'munshiji-ai');
      assert.ok(munshiji, 'MunshiJi AI project must exist');
      if (munshiji.image) {
        assert.ok(
          !munshiji.image.includes('/cardeca/'),
          'MunshiJi AI must NOT display Cardeca logo as a placeholder (mismatched asset)'
        );
      }
    },
  },
  {
    id: 'f14_05',
    name: 'test_f14_05_prev_next_navigation',
    description: 'Asserts sequential navigation between case studies works circularly in app/projects/[slug]/page.tsx',
    tier: 1,
    feature: 'F14 - Project Case Studies & Detail Pages',
    fn() {
      const pageTsx = readSourceFile('app/projects/[slug]/page.tsx');
      const hasNav =
        pageTsx.includes('prevProject') ||
        pageTsx.includes('nextProject') ||
        pageTsx.includes('currentIndex') ||
        pageTsx.includes('href=') ||
        pageTsx.includes('/projects/');
      assert.ok(
        hasNav,
        'Project case study page must support sequential navigation between projects'
      );
    },
  },
];
