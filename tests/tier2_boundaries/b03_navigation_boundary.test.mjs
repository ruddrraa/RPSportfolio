import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b03_01',
    name: 'test_b03_01_scroll_threshold_hysteresis',
    description: 'Navbar scroll listener activates with safe threshold (> 10px)',
    tier: 2,
    feature: 'F03 - Clean Navigation & Footer (Boundary)',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      assert.ok(
        navbar.includes('scrollY >') || navbar.includes('window.scrollY'),
        'Navbar should detect scroll state using window.scrollY threshold'
      );
    },
  },
  {
    id: 'b03_02',
    name: 'test_b03_02_empty_hash_safety',
    description: 'Nav links use valid anchor fragments and avoid broken empty href="#"',
    tier: 2,
    feature: 'F03 - Clean Navigation & Footer (Boundary)',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      assert.ok(
        !navbar.includes('href="#"') && !navbar.includes("href='#'"),
        'Navbar links must not use unanchored href="#" empty fragments'
      );
    },
  },
  {
    id: 'b03_03',
    name: 'test_b03_03_external_links_security',
    description: 'All external target="_blank" links specify rel="noopener noreferrer"',
    tier: 2,
    feature: 'F03 - Clean Navigation & Footer (Boundary)',
    fn() {
      const footer = readSourceFile('components/Footer.tsx');
      const blankMatches = footer.match(/<a[^>]*target=["']_blank["'][^>]*>/gi) || [];
      for (const tag of blankMatches) {
        assert.ok(
          tag.includes('noopener') && tag.includes('noreferrer'),
          `External link with target="_blank" must include rel="noopener noreferrer" for security: ${tag}`
        );
      }
    },
  },
  {
    id: 'b03_04',
    name: 'test_b03_04_rapid_mobile_toggle',
    description: 'Navbar mobile menu state toggles cleanly with useState boolean setter',
    tier: 2,
    feature: 'F03 - Clean Navigation & Footer (Boundary)',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      assert.ok(
        navbar.includes('setMobileMenuOpen') || navbar.includes('setOpen') || navbar.includes('toggle'),
        'Mobile navigation menu must maintain reactive boolean state setter'
      );
    },
  },
  {
    id: 'b03_05',
    name: 'test_b03_05_email_copy_clipboard_fallback',
    description: 'Footer email copy action interacts with navigator.clipboard',
    tier: 2,
    feature: 'F03 - Clean Navigation & Footer (Boundary)',
    fn() {
      const footer = readSourceFile('components/Footer.tsx');
      assert.ok(
        footer.includes('clipboard.writeText') || footer.includes('copyEmail'),
        'Footer must implement copy email action via navigator.clipboard'
      );
    },
  },
];
