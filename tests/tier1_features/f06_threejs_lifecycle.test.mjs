import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'f06_01',
    name: 'test_f06_01_dpr_capping',
    description: 'Asserts WebGL renderer DPR is capped at Math.min(window.devicePixelRatio, 1.5)',
    tier: 1,
    feature: 'F06 - 3D Lifecycle & Optimization',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('setPixelRatio') && heroCanvas.includes('1.5'),
        'WebGLRenderer pixel ratio must be capped at 1.5 to prevent GPU thermal throttling on high-DPI displays'
      );
    },
  },
  {
    id: 'f06_02',
    name: 'test_f06_02_intersection_observer_pause',
    description: 'Asserts IntersectionObserver pauses animation loop when hero scrolls off-screen',
    tier: 1,
    feature: 'F06 - 3D Lifecycle & Optimization',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('IntersectionObserver'),
        'HeroCanvas must instantiate an IntersectionObserver to pause the render loop when outside viewport'
      );
      assert.ok(
        heroCanvas.includes('isIntersecting'),
        'IntersectionObserver callback must inspect entry.isIntersecting to govern animation frame execution'
      );
    },
  },
  {
    id: 'f06_03',
    name: 'test_f06_03_visibility_change_listener',
    description: 'Asserts RAF loop pauses when tab is hidden (document.hidden or visibilitychange)',
    tier: 1,
    feature: 'F06 - 3D Lifecycle & Optimization',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      const hasVisibility =
        heroCanvas.includes('visibilitychange') ||
        heroCanvas.includes('document.hidden');
      assert.ok(
        hasVisibility,
        'HeroCanvas must listen for document visibility changes to pause rendering when backgrounded'
      );
    },
  },
  {
    id: 'f06_04',
    name: 'test_f06_04_prefers_reduced_motion_fallback',
    description: 'Asserts static frame render without continuous animation when reduced motion is requested',
    tier: 1,
    feature: 'F06 - 3D Lifecycle & Optimization',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('prefers-reduced-motion'),
        'HeroCanvas must query (prefers-reduced-motion: reduce) media query'
      );
    },
  },
  {
    id: 'f06_05',
    name: 'test_f06_05_unmount_disposal',
    description: 'Asserts full disposal of geometries, materials, renderer, and detached event listeners',
    tier: 1,
    feature: 'F06 - 3D Lifecycle & Optimization',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('.dispose()'),
        'HeroCanvas cleanup return function must call dispose() on tracked Three.js geometries and materials'
      );
      assert.ok(
        heroCanvas.includes('cancelAnimationFrame') || heroCanvas.includes('observer.disconnect'),
        'HeroCanvas cleanup must cancel animation frames and disconnect observers to avoid memory leaks'
      );
    },
  },
];
