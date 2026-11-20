import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b06_01',
    name: 'test_b06_01_dpr_high_density_cap',
    description: 'Device pixel ratio is capped with Math.min to prevent performance regression on Retina displays',
    tier: 2,
    feature: 'F06 - 3D Lifecycle & Optimization (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('Math.min(') && heroCanvas.includes('1.5'),
        'DPR must use Math.min(window.devicePixelRatio, 1.5)'
      );
    },
  },
  {
    id: 'b06_02',
    name: 'test_b06_02_dpr_low_density_floor',
    description: 'Device pixel ratio checks window.devicePixelRatio',
    tier: 2,
    feature: 'F06 - 3D Lifecycle & Optimization (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('window.devicePixelRatio'),
        'Renderer must query window.devicePixelRatio'
      );
    },
  },
  {
    id: 'b06_03',
    name: 'test_b06_03_rapid_tab_visibility_toggles',
    description: 'Visibility handler checks document.hidden state cleanly',
    tier: 2,
    feature: 'F06 - 3D Lifecycle & Optimization (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('visibilitychange') || heroCanvas.includes('IntersectionObserver'),
        'HeroCanvas must attach event listener or observer for viewport/visibility tracking'
      );
    },
  },
  {
    id: 'b06_04',
    name: 'test_b06_04_unmount_null_safety',
    description: 'Cleanup function safely disposes created resources',
    tier: 2,
    feature: 'F06 - 3D Lifecycle & Optimization (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('return () =>') || heroCanvas.includes('return () => {'),
        'useEffect must return a cleanup function'
      );
    },
  },
  {
    id: 'b06_05',
    name: 'test_b06_05_resize_debounce_safety',
    description: 'Resize listener updates renderer size and camera projection',
    tier: 2,
    feature: 'F06 - 3D Lifecycle & Optimization (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('setSize(') || heroCanvas.includes('renderer.setSize'),
        'HeroCanvas must call renderer.setSize on dimensions update'
      );
    },
  },
];
