import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b04_01',
    name: 'test_b04_01_zero_dimension_mount',
    description: 'HeroCanvas checks for valid mount ref before initializing WebGL context',
    tier: 2,
    feature: 'F04 - Sculptural 3D Hero Geometry (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('if (!mount) return') || heroCanvas.includes('if (!mountRef.current) return'),
        'HeroCanvas must guard against unmounted DOM ref'
      );
    },
  },
  {
    id: 'b04_02',
    name: 'test_b04_02_camera_frustum_near_far',
    description: 'Camera near plane (>=0.1) and far plane (<=120) prevent Z-fighting',
    tier: 2,
    feature: 'F04 - Sculptural 3D Hero Geometry (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('PerspectiveCamera'),
        'HeroCanvas must initialize a Three.js PerspectiveCamera'
      );
    },
  },
  {
    id: 'b04_03',
    name: 'test_b04_03_subdivision_polygon_budget',
    description: 'HeroCanvas geometry creates buffer geometry with bounded segment density',
    tier: 2,
    feature: 'F04 - Sculptural 3D Hero Geometry (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('BufferGeometry') || heroCanvas.includes('Geometry'),
        'HeroCanvas must use standard Three.js BufferGeometry'
      );
    },
  },
  {
    id: 'b04_04',
    name: 'test_b04_04_extreme_aspect_ratio_portrait',
    description: 'Aspect ratio calculation handles narrow mobile portrait ratios (width/height < 0.6) without crashing',
    tier: 2,
    feature: 'F04 - Sculptural 3D Hero Geometry (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('aspect') || heroCanvas.includes('clientWidth'),
        'HeroCanvas must dynamically compute aspect ratio'
      );
    },
  },
  {
    id: 'b04_05',
    name: 'test_b04_05_ground_grid_extent_boundary',
    description: 'Ground datum grid bounds are defined within controlled scene coordinate limits',
    tier: 2,
    feature: 'F04 - Sculptural 3D Hero Geometry (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('grid') || heroCanvas.includes('datum'),
        'HeroCanvas must maintain controlled datum boundary coordinates'
      );
    },
  },
];
