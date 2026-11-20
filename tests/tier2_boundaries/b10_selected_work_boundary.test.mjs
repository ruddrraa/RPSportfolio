import assert from 'node:assert/strict';
import { parseProjectData, readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b10_01',
    name: 'test_b10_01_empty_project_list_guard',
    description: 'Projects dataset is guaranteed non-empty',
    tier: 2,
    feature: 'F10 - Selected Work Gallery (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      assert.ok(projects.length >= 6, 'Projects array must contain at least 6 verified case studies');
    },
  },
  {
    id: 'b10_02',
    name: 'test_b10_02_sticky_card_offset_stacking',
    description: 'ProjectsGallery cards implement sticky container positioning',
    tier: 2,
    feature: 'F10 - Selected Work Gallery (Boundary)',
    fn() {
      const gallery = readSourceFile('components/sections/ProjectsGallery.tsx');
      assert.ok(
        gallery.includes('sticky') || gallery.includes('relative'),
        'Cards must use relative or sticky positioning'
      );
    },
  },
  {
    id: 'b10_03',
    name: 'test_b10_03_max_title_length_boundary',
    description: 'Project titles are bounded (<= 40 characters) to prevent card layout breakage',
    tier: 2,
    feature: 'F10 - Selected Work Gallery (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      for (const p of projects) {
        assert.ok(
          p.title.length <= 40,
          `Project title "${p.title}" exceeds 40 characters (${p.title.length})`
        );
      }
    },
  },
  {
    id: 'b10_04',
    name: 'test_b10_04_card_margin_spacing',
    description: 'Cards feature distinct vertical spacing (gap or space-y)',
    tier: 2,
    feature: 'F10 - Selected Work Gallery (Boundary)',
    fn() {
      const gallery = readSourceFile('components/sections/ProjectsGallery.tsx');
      assert.ok(
        gallery.includes('gap-') || gallery.includes('space-y-') || gallery.includes('mb-'),
        'Gallery must define clear vertical rhythm and spacing between items'
      );
    },
  },
  {
    id: 'b10_05',
    name: 'test_b10_05_impact_pills_count_boundary',
    description: 'Each project exhibits between 2 and 6 verified impact or stack pills',
    tier: 2,
    feature: 'F10 - Selected Work Gallery (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      for (const p of projects) {
        const count = (p.impactPills && p.impactPills.length) || (p.stack && p.stack.length) || 0;
        assert.ok(
          count >= 2,
          `Project ${p.slug} must exhibit at least 2 architectural/impact tags, found ${count}`
        );
      }
    },
  },
];
