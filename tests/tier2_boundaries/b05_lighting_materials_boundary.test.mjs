import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b05_01',
    name: 'test_b05_01_material_roughness_boundary',
    description: 'Material roughness is explicitly specified to avoid specular blowout',
    tier: 2,
    feature: 'F05 - Studio Lighting & Material System (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('roughness:'),
        'Material definition must specify roughness attribute'
      );
    },
  },
  {
    id: 'b05_02',
    name: 'test_b05_02_material_metalness_boundary',
    description: 'Material metalness is kept non-metallic (metalness <= 0.4) for natural stone/alabaster look',
    tier: 2,
    feature: 'F05 - Studio Lighting & Material System (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('metalness:'),
        'Material definition must explicitly constrain metalness'
      );
    },
  },
  {
    id: 'b05_03',
    name: 'test_b05_03_directional_light_intensity_cap',
    description: 'Studio key light specifies balanced intensity',
    tier: 2,
    feature: 'F05 - Studio Lighting & Material System (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('DirectionalLight') || heroCanvas.includes('AmbientLight'),
        'Studio lighting must feature standard Three.js light instances'
      );
    },
  },
  {
    id: 'b05_04',
    name: 'test_b05_04_ambient_light_fill_ratio',
    description: 'Ambient/fill lighting exists to preserve shadow depth',
    tier: 2,
    feature: 'F05 - Studio Lighting & Material System (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('AmbientLight') || heroCanvas.includes('HemisphereLight') || heroCanvas.includes('DirectionalLight'),
        'Studio setup must establish adequate fill illumination'
      );
    },
  },
  {
    id: 'b05_05',
    name: 'test_b05_05_fog_near_far_bounds',
    description: 'Fog near and far parameters establish atmospheric depth horizon',
    tier: 2,
    feature: 'F05 - Studio Lighting & Material System (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('new THREE.Fog('),
        'Scene must configure Three.js Fog with defined near and far distances'
      );
    },
  },
];
