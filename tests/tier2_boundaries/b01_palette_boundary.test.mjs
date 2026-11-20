import assert from 'node:assert/strict';
import { THEME_PALETTE, normalizeHex, calculateContrastRatio, hexToRgb, getRelativeLuminance } from '../helpers/palette.mjs';

export const tests = [
  {
    id: 'b01_01',
    name: 'test_b01_01_extreme_light_contrast',
    description: 'Contrast between white #FFFFFF and ivory #F2F0EA is subtle and non-glaring (ratio < 1.3)',
    tier: 2,
    feature: 'F01 - Warm Editorial Color System (Boundary)',
    fn() {
      const contrast = calculateContrastRatio('#FFFFFF', THEME_PALETTE.WARM_IVORY);
      assert.ok(
        contrast < 1.3,
        `White on warm ivory contrast should be gentle and non-jarring (< 1.3:1), calculated: ${contrast.toFixed(2)}:1`
      );
    },
  },
  {
    id: 'b01_02',
    name: 'test_b01_02_extreme_dark_contrast',
    description: 'Contrast between pure black #000000 and deep ink #171717 is tight (ink is warmer than raw black)',
    tier: 2,
    feature: 'F01 - Warm Editorial Color System (Boundary)',
    fn() {
      const inkRgb = hexToRgb(THEME_PALETTE.DEEP_INK);
      assert.ok(
        inkRgb.r > 0 && inkRgb.g > 0 && inkRgb.b > 0,
        'Deep ink must not be harsh pure digital black #000000'
      );
      assert.strictEqual(inkRgb.r, 23, 'Ink red channel should be 23');
      assert.strictEqual(inkRgb.g, 23, 'Ink green channel should be 23');
      assert.strictEqual(inkRgb.b, 23, 'Ink blue channel should be 23');
    },
  },
  {
    id: 'b01_03',
    name: 'test_b01_03_terracotta_luminance_boundary',
    description: 'Terracotta accent #B45D3E relative luminance falls strictly in restrained range [0.10, 0.25]',
    tier: 2,
    feature: 'F01 - Warm Editorial Color System (Boundary)',
    fn() {
      const lum = getRelativeLuminance(hexToRgb(THEME_PALETTE.RESTRAINED_TERRACOTTA));
      assert.ok(
        lum >= 0.10 && lum <= 0.25,
        `Terracotta luminance must be restrained [0.10, 0.25] to avoid neon saturation, calculated: ${lum.toFixed(3)}`
      );
    },
  },
  {
    id: 'b01_04',
    name: 'test_b01_04_hex_normalizer_malformed_inputs',
    description: 'Palette helper handles leading whitespace, hash variations, and 3-digit shorthand gracefully',
    tier: 2,
    feature: 'F01 - Warm Editorial Color System (Boundary)',
    fn() {
      assert.strictEqual(normalizeHex('  #fff  '), '#FFFFFF');
      assert.strictEqual(normalizeHex('171717'), '#171717');
      assert.strictEqual(normalizeHex('#f2f0ea'), '#F2F0EA');
      assert.strictEqual(normalizeHex(''), '');
      assert.strictEqual(normalizeHex(null), '');
    },
  },
  {
    id: 'b01_05',
    name: 'test_b01_05_alpha_border_boundary',
    description: 'Subtle warm grey border opacity is capped between 0.05 and 0.15 to avoid heavy borders',
    tier: 2,
    feature: 'F01 - Warm Editorial Color System (Boundary)',
    fn() {
      const match = THEME_PALETTE.BORDER_SUBTLE.match(/rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([0-9.]+)\s*\)/);
      assert.ok(match, 'Border token must be valid rgba format');
      const opacity = parseFloat(match[1]);
      assert.ok(
        opacity >= 0.05 && opacity <= 0.15,
        `Subtle border opacity must be between 0.05 and 0.15, found: ${opacity}`
      );
    },
  },
];
