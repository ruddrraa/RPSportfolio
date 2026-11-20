import assert from 'node:assert/strict';
import { extractCssVariables, readSourceFile } from '../helpers/parser.mjs';
import { THEME_PALETTE, BLACKLISTED_TELEMETRY_TOKENS, normalizeHex } from '../helpers/palette.mjs';

export const tests = [
  {
    id: 'f01_01',
    name: 'test_f01_01_ivory_background',
    description: 'Asserts primary canvas background token evaluates to #F2F0EA',
    tier: 1,
    feature: 'F01 - Warm Editorial Color System',
    fn() {
      const vars = extractCssVariables('app/globals.css');
      const bg = vars['--background'];
      assert.ok(bg, 'CSS variable --background must be defined in app/globals.css');
      assert.strictEqual(
        normalizeHex(bg),
        normalizeHex(THEME_PALETTE.WARM_IVORY),
        `--background must be ${THEME_PALETTE.WARM_IVORY} (warm ivory), got ${bg}`
      );
    },
  },
  {
    id: 'f01_02',
    name: 'test_f01_02_stone_surface',
    description: 'Asserts secondary surface / card token evaluates to #E7E4DC',
    tier: 1,
    feature: 'F01 - Warm Editorial Color System',
    fn() {
      const vars = extractCssVariables('app/globals.css');
      const surface = vars['--surface-card'] || vars['--surface-stone'] || vars['--surface'];
      assert.ok(surface, 'CSS variable for warm stone surface must be defined in app/globals.css');
      assert.strictEqual(
        normalizeHex(surface),
        normalizeHex(THEME_PALETTE.WARM_STONE),
        `Secondary surface must evaluate to ${THEME_PALETTE.WARM_STONE} (warm stone), got ${surface}`
      );
    },
  },
  {
    id: 'f01_03',
    name: 'test_f01_03_ink_text',
    description: 'Asserts primary text token evaluates to #171717',
    tier: 1,
    feature: 'F01 - Warm Editorial Color System',
    fn() {
      const vars = extractCssVariables('app/globals.css');
      const textPrimary = vars['--text-primary'] || vars['--foreground'];
      assert.ok(textPrimary, 'CSS variable for primary text must be defined in app/globals.css');
      assert.strictEqual(
        normalizeHex(textPrimary),
        normalizeHex(THEME_PALETTE.DEEP_INK),
        `Primary text must evaluate to ${THEME_PALETTE.DEEP_INK} (deep ink), got ${textPrimary}`
      );
    },
  },
  {
    id: 'f01_04',
    name: 'test_f01_04_muted_grey_text',
    description: 'Asserts secondary text token evaluates to #77736C',
    tier: 1,
    feature: 'F01 - Warm Editorial Color System',
    fn() {
      const vars = extractCssVariables('app/globals.css');
      const textSecondary = vars['--text-secondary'] || vars['--muted'];
      assert.ok(textSecondary, 'CSS variable for secondary text must be defined in app/globals.css');
      assert.strictEqual(
        normalizeHex(textSecondary),
        normalizeHex(THEME_PALETTE.MUTED_WARM_GREY),
        `Secondary text must evaluate to ${THEME_PALETTE.MUTED_WARM_GREY} (muted warm grey), got ${textSecondary}`
      );
    },
  },
  {
    id: 'f01_05',
    name: 'test_f01_05_terracotta_accent',
    description: 'Asserts primary accent evaluates to #B45D3E and emerald telemetry tokens are absent from theme variables',
    tier: 1,
    feature: 'F01 - Warm Editorial Color System',
    fn() {
      const vars = extractCssVariables('app/globals.css');
      const accent = vars['--accent-terracotta'] || vars['--accent'];
      assert.ok(accent, 'CSS variable for accent must be defined in app/globals.css');
      assert.strictEqual(
        normalizeHex(accent),
        normalizeHex(THEME_PALETTE.RESTRAINED_TERRACOTTA),
        `Primary accent must evaluate to ${THEME_PALETTE.RESTRAINED_TERRACOTTA} (restrained terracotta), got ${accent}`
      );

      // Verify absence of emerald telemetry tokens in CSS variables
      const rawCss = readSourceFile('app/globals.css');
      for (const token of ['#10b981', 'emerald-400', 'animate-status-pulse']) {
        assert.ok(
          !rawCss.includes(token),
          `Blacklisted emerald telemetry token "${token}" must be completely purged from globals.css`
        );
      }
    },
  },
];
