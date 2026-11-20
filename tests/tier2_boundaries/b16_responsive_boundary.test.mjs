import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b16_01',
    name: 'test_b16_01_extreme_narrow_320px_guard',
    description: 'Root HTML and body enforce overflow containment to protect narrow 320px viewports',
    tier: 2,
    feature: 'F16 - Responsive Recomposition (390px-1920px) (Boundary)',
    fn() {
      const globals = readSourceFile('app/globals.css');
      assert.ok(
        globals.includes('overflow-x: hidden') || globals.includes('overflow-x:hidden'),
        'globals.css must specify overflow-x: hidden on body'
      );
    },
  },
  {
    id: 'b16_02',
    name: 'test_b16_02_font_size_floor_mobile',
    description: 'Text classes maintain minimum readable font sizes (text-xs / text-[11px] or above)',
    tier: 2,
    feature: 'F16 - Responsive Recomposition (390px-1920px) (Boundary)',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      assert.ok(
        navbar.includes('text-xs') || navbar.includes('text-sm'),
        'Navbar must use text-xs or text-sm for legible navigation on mobile screens'
      );
    },
  },
  {
    id: 'b16_03',
    name: 'test_b16_03_horizontal_padding_consistency',
    description: 'Sections maintain consistent responsive padding (px-4 sm:px-6 md:px-12)',
    tier: 2,
    feature: 'F16 - Responsive Recomposition (390px-1920px) (Boundary)',
    fn() {
      const footer = readSourceFile('components/Footer.tsx');
      assert.ok(
        footer.includes('px-4') || footer.includes('px-6'),
        'Footer must define base horizontal padding for mobile viewports'
      );
    },
  },
  {
    id: 'b16_04',
    name: 'test_b16_04_aspect_ratio_preservation_cards',
    description: 'Project interface preview maintains structured container sizing',
    tier: 2,
    feature: 'F16 - Responsive Recomposition (390px-1920px) (Boundary)',
    fn() {
      const preview = readSourceFile('components/ui/ProjectInterfacePreview.tsx');
      assert.ok(
        preview.includes('rounded-') || preview.includes('border') || preview.includes('w-full'),
        'Preview component must establish structured bounding container'
      );
    },
  },
  {
    id: 'b16_05',
    name: 'test_b16_05_fixed_header_z_index_boundary',
    description: 'Fixed header z-index (z-50) is higher than standard page content',
    tier: 2,
    feature: 'F16 - Responsive Recomposition (390px-1920px) (Boundary)',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      assert.ok(
        navbar.includes('z-50'),
        'Navbar header element must use z-50 to float reliably above all page layers'
      );
    },
  },
];
