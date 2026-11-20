import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';
import { GROUND_TRUTH_PROFILE } from '../helpers/contracts.mjs';

export const tests = [
  {
    id: 'f03_01',
    name: 'test_f03_01_navbar_island_structure',
    description: 'Asserts floating pill navbar with rounded-full geometry and glass blur',
    tier: 1,
    feature: 'F03 - Clean Navigation & Footer',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      assert.ok(
        navbar.includes('rounded-full'),
        'Navbar must feature refined floating island architecture with rounded-full geometry'
      );
      assert.ok(
        navbar.includes('backdrop-blur'),
        'Navbar must feature translucent glass backdrop-blur styling'
      );
    },
  },
  {
    id: 'f03_02',
    name: 'test_f03_02_no_green_pulse_indicator',
    description: 'Asserts absence of green pulsing dot (animate-status-pulse + bg-emerald-400) in Navbar',
    tier: 1,
    feature: 'F03 - Clean Navigation & Footer',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      assert.ok(
        !navbar.includes('animate-status-pulse'),
        'Navbar must NOT include distracting telemetry status pulse animation ("animate-status-pulse")'
      );
      assert.ok(
        !navbar.includes('bg-emerald-400') && !navbar.includes('text-emerald-400'),
        'Navbar must NOT include emerald/green telemetry status indicators'
      );
    },
  },
  {
    id: 'f03_03',
    name: 'test_f03_03_accessible_nav_anchor_targets',
    description: 'Asserts nav links route to valid section IDs (#projects, #perspective, #expertise, #experience, #research)',
    tier: 1,
    feature: 'F03 - Clean Navigation & Footer',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      const requiredSections = ['#projects', '#perspective', '#expertise', '#experience', '#research'];
      for (const section of requiredSections) {
        assert.ok(
          navbar.includes(section),
          `Navbar must provide navigation link to section anchor: ${section}`
        );
      }
    },
  },
  {
    id: 'f03_04',
    name: 'test_f03_04_footer_contact_channels',
    description: 'Asserts presence of verified email rudrraaa@proton.me, LinkedIn, and GitHub links',
    tier: 1,
    feature: 'F03 - Clean Navigation & Footer',
    fn() {
      const footer = readSourceFile('components/Footer.tsx');
      assert.ok(
        footer.includes(GROUND_TRUTH_PROFILE.email) || footer.includes('profile.email'),
        `Footer must provide verified contact email: ${GROUND_TRUTH_PROFILE.email}`
      );
      assert.ok(
        footer.includes('linkedin.com') || footer.includes('profile.socials.linkedin'),
        'Footer must provide verified LinkedIn profile link'
      );
      assert.ok(
        footer.includes('github.com') || footer.includes('profile.socials.github'),
        'Footer must provide verified GitHub profile link'
      );
    },
  },
  {
    id: 'f03_05',
    name: 'test_f03_05_footer_zero_telemetry',
    description: 'Asserts absence of fake STATUS: PRODUCTION LIVE telemetry badge in Footer',
    tier: 1,
    feature: 'F03 - Clean Navigation & Footer',
    fn() {
      const footer = readSourceFile('components/Footer.tsx');
      assert.ok(
        !footer.includes('STATUS: PRODUCTION LIVE'),
        'Footer must NOT contain fabricated "STATUS: PRODUCTION LIVE" telemetry indicator'
      );
      assert.ok(
        !footer.includes('TRANSMISSION • [05]') && !footer.includes('TRANSMISSION CHANNEL'),
        'Footer must NOT contain simulated military/cyber telemetry headers'
      );
    },
  },
];
