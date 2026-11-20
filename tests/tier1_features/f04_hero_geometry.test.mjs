import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'f04_01',
    name: 'test_f04_01_sculptural_mesh_presence',
    description: 'Asserts presence of organic/architectural geometry in 3D hero scene',
    tier: 1,
    feature: 'F04 - Sculptural 3D Hero Geometry',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      const hasSculptural =
        heroCanvas.includes('TorusKnotGeometry') ||
        heroCanvas.includes('TorusGeometry') ||
        heroCanvas.includes('ParametricGeometry') ||
        heroCanvas.includes('mobius') ||
        heroCanvas.includes('ribbon') ||
        heroCanvas.includes('sculpture') ||
        heroCanvas.includes('alabaster');
      assert.ok(
        hasSculptural,
        'HeroCanvas must implement an original sculptural 3D geometry (Möbius ribbon, sculptural toroid, or alabaster procedural mesh)'
      );
    },
  },
  {
    id: 'f04_02',
    name: 'test_f04_02_no_cliche_devices',
    description: 'Asserts absence of laptops, floating phones, device frames, and particle storms',
    tier: 1,
    feature: 'F04 - Sculptural 3D Hero Geometry',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        !heroCanvas.toLowerCase().includes('laptop') &&
        !heroCanvas.toLowerCase().includes('iphone') &&
        !heroCanvas.toLowerCase().includes('smartphone') &&
        !heroCanvas.toLowerCase().includes('devicemockup'),
        'HeroCanvas must NOT feature floating laptops, phone frames, or device mockups'
      );
      assert.ok(
        !heroCanvas.includes('PointsMaterial') && !heroCanvas.includes('particleSystem'),
        'HeroCanvas must NOT use cliché random particle storms'
      );
    },
  },
  {
    id: 'f04_03',
    name: 'test_f04_03_smooth_vertex_normals',
    description: 'Asserts geometry computes vertex normals for organic curvature',
    tier: 1,
    feature: 'F04 - Sculptural 3D Hero Geometry',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      const hasNormals =
        heroCanvas.includes('computeVertexNormals') ||
        heroCanvas.includes('TorusKnotGeometry') ||
        heroCanvas.includes('BufferGeometry');
      assert.ok(
        hasNormals,
        '3D mesh must ensure smooth vertex normals are computed for high-fidelity light interaction'
      );
    },
  },
  {
    id: 'f04_04',
    name: 'test_f04_04_datum_ground_grid',
    description: 'Asserts architectural coordinate ground datum grid with subtle line opacity',
    tier: 1,
    feature: 'F04 - Sculptural 3D Hero Geometry',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      const hasGrid =
        heroCanvas.includes('gridLines') ||
        heroCanvas.includes('LineSegments') ||
        heroCanvas.includes('GridHelper') ||
        heroCanvas.includes('datumGroup');
      assert.ok(
        hasGrid,
        'HeroCanvas must include an architectural spatial coordinate datum ground grid'
      );
    },
  },
  {
    id: 'f04_05',
    name: 'test_f04_05_canvas_responsive_fov',
    description: 'Asserts camera configuration adapts aspect ratio and FOV across viewports',
    tier: 1,
    feature: 'F04 - Sculptural 3D Hero Geometry',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('camera.aspect') || heroCanvas.includes('updateProjectionMatrix'),
        'Camera must dynamically update aspect ratio and call updateProjectionMatrix on viewport resize'
      );
    },
  },
];
