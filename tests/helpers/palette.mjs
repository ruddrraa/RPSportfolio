/**
 * Design Tokens & Palette Validators
 * Derived from ORIGINAL_REQUEST.md §R1 and PROJECT.md §Design Tokens & Palette
 */

export const THEME_PALETTE = {
  WARM_IVORY: '#F2F0EA',
  WARM_STONE: '#E7E4DC',
  DEEP_INK: '#171717',
  MUTED_WARM_GREY: '#77736C',
  RESTRAINED_TERRACOTTA: '#B45D3E',
  DARK_CINEMATIC: '#151515',
  BORDER_SUBTLE: 'rgba(23, 23, 23, 0.08)',
  BORDER_STONE: 'rgba(23, 23, 23, 0.12)',
};

export const BLACKLISTED_TELEMETRY_TOKENS = [
  '#10b981',
  '#059669',
  '#34d399',
  'emerald-400',
  'emerald-500',
  'animate-status-pulse',
  'STATUS: PRODUCTION LIVE',
];

/**
 * Normalizes hex string into standard 6-character uppercase format (e.g. #F2F0EA)
 */
export function normalizeHex(hex) {
  if (!hex || typeof hex !== 'string') return '';
  let clean = hex.trim().replace(/^#/, '');
  if (clean.length === 3) {
    clean = clean.split('').map(c => c + c).join('');
  }
  return '#' + clean.toUpperCase();
}

/**
 * Parses hex color string into { r, g, b }
 */
export function hexToRgb(hex) {
  const norm = normalizeHex(hex);
  if (!norm || norm.length !== 7) {
    throw new Error(`Invalid hex color string: ${hex}`);
  }
  const r = parseInt(norm.slice(1, 3), 16);
  const g = parseInt(norm.slice(3, 5), 16);
  const b = parseInt(norm.slice(5, 7), 16);
  return { r, g, b };
}

/**
 * Calculates WCAG 2.1 relative luminance for an RGB object
 */
export function getRelativeLuminance({ r, g, b }) {
  const srgb = [r, g, b].map(val => {
    const channel = val / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

/**
 * Calculates contrast ratio between two hex colors (e.g. 1.0 to 21.0)
 */
export function calculateContrastRatio(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const l1 = getRelativeLuminance(rgb1);
  const l2 = getRelativeLuminance(rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Evaluates whether contrast ratio meets WCAG AA (>= 4.5 for normal text, >= 3.0 for large text)
 */
export function meetsWcagAA(contrast, isLargeText = false) {
  const threshold = isLargeText ? 3.0 : 4.5;
  return contrast >= threshold;
}

/**
 * Evaluates whether contrast ratio meets WCAG AAA (>= 7.0 for normal text, >= 4.5 for large text)
 */
export function meetsWcagAAA(contrast, isLargeText = false) {
  const threshold = isLargeText ? 4.5 : 7.0;
  return contrast >= threshold;
}
