import assert from 'node:assert/strict';
import { parseProjectData } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b14_01',
    name: 'test_b14_01_special_characters_in_slug',
    description: 'Slugs strictly match URL-safe regex ^[a-z0-9-]+$ with zero uppercase or spaces',
    tier: 2,
    feature: 'F14 - Project Case Studies & Detail Pages (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const slugRegex = /^[a-z0-9-]+$/;
      for (const p of projects) {
        assert.ok(
          slugRegex.test(p.slug),
          `Project slug "${p.slug}" is not URL-safe (must be lowercase alphanumeric + hyphens only)`
        );
      }
    },
  },
  {
    id: 'b14_02',
    name: 'test_b14_02_circular_navigation_boundary',
    description: 'Project list contains exactly 6 sequentially indexed case studies',
    tier: 2,
    feature: 'F14 - Project Case Studies & Detail Pages (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      assert.strictEqual(projects.length, 6, 'Must contain exactly 6 projects for circular nav');
    },
  },
  {
    id: 'b14_03',
    name: 'test_b14_03_missing_optional_fields',
    description: 'Projects without client or liveUrl define required core fields safely',
    tier: 2,
    feature: 'F14 - Project Case Studies & Detail Pages (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      for (const p of projects) {
        assert.ok(p.title, `Project ${p.slug} must have title`);
        assert.ok(p.solution, `Project ${p.slug} must have solution`);
      }
    },
  },
  {
    id: 'b14_04',
    name: 'test_b14_04_image_path_sanity',
    description: 'All specified project image paths start with leading / and have image extension',
    tier: 2,
    feature: 'F14 - Project Case Studies & Detail Pages (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      for (const p of projects) {
        if (p.image) {
          assert.ok(
            p.image.startsWith('/'),
            `Image path for ${p.slug} must start with leading /: "${p.image}"`
          );
          assert.ok(
            /\.(png|jpg|jpeg|webp|svg)$/i.test(p.image),
            `Image path for ${p.slug} must end with valid image extension: "${p.image}"`
          );
        }
      }
    },
  },
  {
    id: 'b14_05',
    name: 'test_b14_05_stack_tags_uniqueness',
    description: 'Tech stack array contains unique tags (no duplicates within a project)',
    tier: 2,
    feature: 'F14 - Project Case Studies & Detail Pages (Boundary)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      for (const p of projects) {
        if (Array.isArray(p.stack)) {
          const set = new Set(p.stack);
          assert.strictEqual(
            set.size,
            p.stack.length,
            `Project ${p.slug} contains duplicate tech stack tags`
          );
        }
      }
    },
  },
];
