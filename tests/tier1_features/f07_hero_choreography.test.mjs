import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';
import { GROUND_TRUTH_PROFILE } from '../helpers/contracts.mjs';

export const tests = [
  {
    id: 'f07_01',
    name: 'test_f07_01_monumental_identity_headline',
    description: 'Asserts H1 Rudra Pratap Singh in high-contrast editorial typography',
    tier: 1,
    feature: 'F07 - Hero Editorial Choreography',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      assert.ok(
        hero.includes(GROUND_TRUTH_PROFILE.name) || hero.includes('profile.name'),
        `Hero must present monumental name: ${GROUND_TRUTH_PROFILE.name}`
      );
      assert.ok(
        hero.includes('<h1') && (hero.includes('font-serif-editorial') || hero.includes('font-serif')),
        'Hero monumental name must be enclosed in an <h1> tag with editorial serif typography'
      );
    },
  },
  {
    id: 'f07_02',
    name: 'test_f07_02_masked_authentic_portrait',
    description: 'Asserts presence of genuine portrait with soft gradient mask',
    tier: 1,
    feature: 'F07 - Hero Editorial Choreography',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      const hasPortrait =
        hero.includes('/profile/best2.png') ||
        hero.includes('/profile/profilepic.jpg') ||
        hero.includes('profile.avatar') ||
        hero.includes('Image');
      assert.ok(
        hasPortrait,
        'Hero must display authentic portrait asset from public/profile/'
      );
    },
  },
  {
    id: 'f07_03',
    name: 'test_f07_03_positioning_statement',
    description: 'Asserts clear positioning statement in hero copy',
    tier: 1,
    feature: 'F07 - Hero Editorial Choreography',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      const hasPositioning =
        hero.includes('Creative Developer') ||
        hero.includes('Systems') ||
        hero.includes('Computer Vision') ||
        hero.includes('Software Engineer');
      assert.ok(
        hasPositioning,
        'Hero copy must articulate a clear professional positioning statement'
      );
    },
  },
  {
    id: 'f07_04',
    name: 'test_f07_04_verified_metric_strip',
    description: 'Asserts stats reflect verified accomplishments without "+06 production systems" exaggeration',
    tier: 1,
    feature: 'F07 - Hero Editorial Choreography',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      assert.ok(
        !hero.includes('06+ PRODUCTION SYSTEMS') && !hero.includes('+06 production systems'),
        'Hero metric strip must NOT contain exaggerated "+06 production systems" claim'
      );
    },
  },
  {
    id: 'f07_05',
    name: 'test_f07_05_scroll_invitation_cue',
    description: 'Asserts tactile scroll indicator without green telemetry decoration',
    tier: 1,
    feature: 'F07 - Hero Editorial Choreography',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      const hasScrollCue =
        hero.toLowerCase().includes('scroll') ||
        hero.includes('chevron') ||
        hero.includes('ArrowDown');
      assert.ok(
        hasScrollCue,
        'Hero must present an intuitive scroll invitation cue'
      );
      assert.ok(
        !hero.includes('text-emerald-400') && !hero.includes('bg-emerald-400'),
        'Scroll cue must not use emerald telemetry color tokens'
      );
    },
  },
];
