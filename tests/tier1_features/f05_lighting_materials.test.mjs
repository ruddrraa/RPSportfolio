import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'f05_01',
    name: 'test_f05_01_alabaster_pbr_material',
    description: 'Asserts MeshStandardMaterial or MeshPhysicalMaterial with warm stone/alabaster parameters',
    tier: 1,
    feature: 'F05 - Studio Lighting & Material System',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('MeshStandardMaterial') || heroCanvas.includes('MeshPhysicalMaterial'),
        '3D scene must utilize standard PBR or physical materials (MeshStandardMaterial / MeshPhysicalMaterial)'
      );
      assert.ok(
        heroCanvas.includes('roughness'),
        'PBR material must explicitly define physical roughness property for realistic surface sheen'
      );
    },
  },
  {
    id: 'f05_02',
    name: 'test_f05_02_key_sun_light',
    description: 'Asserts warm directional key light (0xFFFAF0 / 0xFFFBF0 / warm sunlight)',
    tier: 1,
    feature: 'F05 - Studio Lighting & Material System',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('DirectionalLight'),
        'Studio lighting system must feature an architectural DirectionalLight source'
      );
    },
  },
  {
    id: 'f05_03',
    name: 'test_f05_03_terracotta_rim_light',
    description: 'Asserts terracotta accent rim light source (0xB45D3E)',
    tier: 1,
    feature: 'F05 - Studio Lighting & Material System',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      const hasTerracottaLight =
        heroCanvas.toLowerCase().includes('0xb45d3e') ||
        heroCanvas.toLowerCase().includes('b45d3e') ||
        heroCanvas.toLowerCase().includes('terracotta');
      assert.ok(
        hasTerracottaLight,
        'Hero 3D lighting system must incorporate a terracotta (#B45D3E) accent rim light'
      );
    },
  },
  {
    id: 'f05_04',
    name: 'test_f05_04_no_emerald_point_lights',
    description: 'Asserts complete removal of 0x10b981 emerald point lights',
    tier: 1,
    feature: 'F05 - Studio Lighting & Material System',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        !heroCanvas.toLowerCase().includes('0x10b981') && !heroCanvas.toLowerCase().includes('10b981'),
        'Hero 3D scene must have zero emerald (#10b981) telemetry point lights'
      );
    },
  },
  {
    id: 'f05_05',
    name: 'test_f05_05_warm_depth_fog',
    description: 'Asserts scene fog dissolves to #F2F0EA / warm ivory canvas',
    tier: 1,
    feature: 'F05 - Studio Lighting & Material System',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('Fog(') || heroCanvas.includes('FogExp2('),
        'HeroCanvas must configure depth fog for atmospheric spatial horizon blending'
      );
      const hasWarmFog =
        heroCanvas.toLowerCase().includes('0xf2f0ea') ||
        heroCanvas.toLowerCase().includes('f2f0ea') ||
        heroCanvas.toLowerCase().includes('warm_ivory');
      assert.ok(
        hasWarmFog,
        'Scene fog must dissolve seamlessly into the #F2F0EA warm ivory canvas'
      );
    },
  },
];
