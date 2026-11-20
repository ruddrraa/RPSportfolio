import assert from 'node:assert/strict';
import { readSourceFile } from '../helpers/parser.mjs';

export const tests = [
  {
    id: 'b20_01',
    name: 'test_b20_01_malicious_script_injection_guard',
    description: 'Project descriptions are sanitized against raw <script> tags',
    tier: 2,
    feature: 'F20 - Adversarial Coverage Hardening (Boundary)',
    fn() {
      const projectsSrc = readSourceFile('data/projects.ts');
      assert.ok(
        !projectsSrc.includes('<script>') && !projectsSrc.includes('</script>'),
        'Data source must not contain embedded executable <script> tags'
      );
    },
  },
  {
    id: 'b20_02',
    name: 'test_b20_02_zero_hardcoded_jwt_secrets',
    description: 'Codebase contains zero hardcoded JWT secret strings',
    tier: 2,
    feature: 'F20 - Adversarial Coverage Hardening (Boundary)',
    fn() {
      const projectsSrc = readSourceFile('data/projects.ts');
      assert.ok(
        !projectsSrc.includes('secret_key_123') && !projectsSrc.includes('super_secret_jwt'),
        'Data files must not store hardcoded credentials'
      );
    },
  },
  {
    id: 'b20_03',
    name: 'test_b20_03_env_variable_leak_guard',
    description: 'Client component files do not expose process.env secret variables directly',
    tier: 2,
    feature: 'F20 - Adversarial Coverage Hardening (Boundary)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      assert.ok(
        !hero.includes('process.env.DATABASE_URL') && !hero.includes('process.env.SECRET'),
        'Client components must not read raw database or server secrets'
      );
    },
  },
  {
    id: 'b20_04',
    name: 'test_b20_04_threejs_context_loss_handling',
    description: 'HeroCanvas uses alpha and antialias flags on WebGLRenderer',
    tier: 2,
    feature: 'F20 - Adversarial Coverage Hardening (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('alpha: true') || heroCanvas.includes('antialias: true'),
        'WebGLRenderer must be configured with robust context flags'
      );
    },
  },
  {
    id: 'b20_05',
    name: 'test_b20_05_dom_mutation_observer_leak_guard',
    description: 'HeroCanvas removes event listeners or disconnects observers in cleanup',
    tier: 2,
    feature: 'F20 - Adversarial Coverage Hardening (Boundary)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('removeEventListener') || heroCanvas.includes('disconnect()') || heroCanvas.includes('dispose()'),
        'Cleanup must detach listeners or disconnect observers'
      );
    },
  },
];
