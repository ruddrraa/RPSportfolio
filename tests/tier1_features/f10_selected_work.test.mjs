import assert from 'node:assert/strict';
import { readSourceFile, parseProjectData } from '../helpers/parser.mjs';
import { GROUND_TRUTH_PROJECTS } from '../helpers/contracts.mjs';

export const tests = [
  {
    id: 'f10_01',
    name: 'test_f10_01_six_project_showcase',
    description: 'Asserts showcase presents all 6 core projects (EtechCRM, MunshiJi AI, CardecaAlgo, ETHOS, RelancePay, VAYRIN)',
    tier: 1,
    feature: 'F10 - Selected Work Gallery',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      assert.strictEqual(
        projects.length,
        6,
        `Expected exactly 6 projects in data/projects.ts, found ${projects.length}`
      );
      for (const expected of GROUND_TRUTH_PROJECTS) {
        const found = projects.find(p => p.slug === expected.slug);
        assert.ok(
          found,
          `Project with slug "${expected.slug}" (${expected.title}) must exist in projects dataset`
        );
      }
    },
  },
  {
    id: 'f10_02',
    name: 'test_f10_02_cosmos_stacked_scroll_layout',
    description: 'Asserts stacked card styling with sticky top offsets in ProjectsGallery',
    tier: 1,
    feature: 'F10 - Selected Work Gallery',
    fn() {
      const gallery = readSourceFile('components/sections/ProjectsGallery.tsx');
      assert.ok(
        gallery.includes('sticky') || gallery.includes('top-'),
        'ProjectsGallery cards must use sticky stacking layout inspired by Cosmos Studio'
      );
    },
  },
  {
    id: 'f10_03',
    name: 'test_f10_03_individual_project_identities',
    description: 'Asserts distinct tags and metadata per project card',
    tier: 1,
    feature: 'F10 - Selected Work Gallery',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const slugs = new Set(projects.map(p => p.slug));
      assert.strictEqual(slugs.size, projects.length, 'Each project must have a distinct unique slug');

      for (const p of projects) {
        assert.ok(p.title && p.title.length > 0, `Project ${p.slug} must have a valid title`);
        assert.ok(Array.isArray(p.stack) && p.stack.length > 0, `Project ${p.slug} must list tech stack items`);
      }
    },
  },
  {
    id: 'f10_04',
    name: 'test_f10_04_case_study_navigation_links',
    description: 'Asserts valid anchor links to /projects/[slug] detail routes',
    tier: 1,
    feature: 'F10 - Selected Work Gallery',
    fn() {
      const gallery = readSourceFile('components/sections/ProjectsGallery.tsx');
      assert.ok(
        gallery.includes('/projects/') || gallery.includes('project.slug'),
        'ProjectsGallery cards must provide links routing to /projects/[slug]'
      );
    },
  },
  {
    id: 'f10_05',
    name: 'test_f10_05_no_telemetry_status_badges',
    description: 'Asserts absence of fake green status pills in gallery cards',
    tier: 1,
    feature: 'F10 - Selected Work Gallery',
    fn() {
      const gallery = readSourceFile('components/sections/ProjectsGallery.tsx');
      assert.ok(
        !gallery.includes('animate-status-pulse'),
        'Gallery cards must NOT include pulsing green telemetry dots'
      );
      assert.ok(
        !gallery.includes('LIVE TELEMETRY') && !gallery.includes('STATUS: ONLINE'),
        'Gallery cards must NOT display fabricated live telemetry status pills'
      );
    },
  },
];
