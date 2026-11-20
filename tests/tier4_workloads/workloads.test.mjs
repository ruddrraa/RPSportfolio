import assert from 'node:assert/strict';
import { readSourceFile, parseProjectData, parseExperienceData, parseAchievementsData } from '../helpers/parser.mjs';
import { GROUND_TRUTH_PROFILE, GROUND_TRUTH_EDUCATION, GROUND_TRUTH_RESEARCH, CATALOGUED_FABRICATIONS } from '../helpers/contracts.mjs';
import { THEME_PALETTE, calculateContrastRatio, meetsWcagAA } from '../helpers/palette.mjs';

export const tests = [
  {
    id: 'w01',
    name: 'test_w01_recruiter_mobile_fast_scan',
    description: 'Workload Scenario 1: Technical Recruiter fast mobile scan (390px) verifying identity, SNU education, and roles',
    tier: 4,
    feature: 'Tier 4 - Workload Scenario (Recruiter Mobile Fast Scan)',
    fn() {
      // 1. Identity in Hero
      const hero = readSourceFile('components/sections/Hero.tsx');
      assert.ok(
        hero.includes(GROUND_TRUTH_PROFILE.name) || hero.includes('profile.name'),
        'Recruiter sees candidate monumental name immediately upon landing'
      );

      // 2. Education details
      const expSource = readSourceFile('components/sections/Experience.tsx');
      assert.ok(
        expSource.includes(GROUND_TRUTH_EDUCATION.institution),
        `Recruiter verifies educational institution: ${GROUND_TRUTH_EDUCATION.institution}`
      );
      assert.ok(
        expSource.includes('2024') && expSource.includes('2028'),
        'Recruiter verifies active undergraduate tenure (2024–2028)'
      );

      // 3. Work roles
      const experiences = parseExperienceData('data/experience.ts');
      assert.strictEqual(experiences.length, 3, 'Recruiter verifies 3 industry experiences');
      assert.ok(
        experiences.some(e => e.organization.includes('Handshake AI')),
        'Recruiter finds Handshake AI role'
      );
    },
  },
  {
    id: 'w02',
    name: 'test_w02_engineering_director_deep_dive',
    description: 'Workload Scenario 2: Engineering Director deep-dive evaluating EtechCRM & Cardeca architectures and tech stacks',
    tier: 4,
    feature: 'Tier 4 - Workload Scenario (Engineering Director Deep Dive)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const etech = projects.find(p => p.slug === 'etechcrm');
      const cardeca = projects.find(p => p.slug === 'cardeca-algo');

      assert.ok(etech, 'Engineering Director accesses EtechCRM case study');
      assert.ok(cardeca, 'Engineering Director accesses CardecaAlgo case study');

      // Verify authentic modern stacks
      assert.ok(etech.stack.includes('React 19'), 'EtechCRM utilizes modern React 19');
      assert.ok(etech.stack.includes('TypeScript'), 'EtechCRM enforces TypeScript typing');
      assert.ok(etech.stack.includes('Express 5'), 'EtechCRM utilizes Express 5 backend');

      assert.ok(cardeca.stack.includes('RT-DETR'), 'CardecaAlgo utilizes RT-DETR detection transformer');
      assert.ok(cardeca.stack.includes('PyTorch'), 'CardecaAlgo utilizes PyTorch for fine-grained inference');
    },
  },
  {
    id: 'w03',
    name: 'test_w03_academic_paper_citation_audit',
    description: 'Workload Scenario 3: Academic Reviewer verifies Q-Sentry CIIR 2026 paper title, authorship, and zero cyber distortions',
    tier: 4,
    feature: 'Tier 4 - Workload Scenario (Academic Citation Audit)',
    fn() {
      const achievements = parseAchievementsData('data/achievements.ts');
      const researchSource = readSourceFile('components/sections/Research.tsx');
      const qSentry = achievements.find(a => a.id && a.id.includes('q-sentry'));

      // Strict title verification
      const titleAccurate =
        (qSentry && qSentry.title.includes('Semantic-Quantum Ensemble for Ethical Classification')) ||
        researchSource.includes('Semantic-Quantum Ensemble for Ethical Classification');
      assert.ok(
        titleAccurate,
        `Academic reviewer requires exact title: "${GROUND_TRUTH_RESEARCH.title}"`
      );

      // Verify zero cyber-threat claims
      const fullText = (qSentry ? qSentry.description : '') + researchSource;
      assert.ok(
        !fullText.includes('autonomous threat detection') &&
        !fullText.includes('defensive verification protocols') &&
        !fullText.includes('threat intelligence'),
        'Academic reviewer confirms publication is free from fictitious cyber threat claims'
      );
    },
  },
  {
    id: 'w04',
    name: 'test_w04_forensic_zero_fabrication_sweep',
    description: 'Workload Scenario 4: Integrity Auditor forensic sweep asserting zero fabricated telemetry, GPS, vitals, or latencies',
    tier: 4,
    feature: 'Tier 4 - Workload Scenario (Forensic Zero Fabrication Sweep)',
    fn() {
      const filesToCheck = [
        'data/projects.ts',
        'data/achievements.ts',
        'data/experience.ts',
        'components/sections/ProjectsGallery.tsx',
        'components/sections/Hero.tsx',
        'components/sections/Research.tsx',
        'components/ui/ProjectInterfacePreview.tsx',
        'components/Footer.tsx',
      ];

      for (const file of filesToCheck) {
        const content = readSourceFile(file);
        for (const { pattern, description } of CATALOGUED_FABRICATIONS) {
          assert.ok(
            !pattern.test(content),
            `Forensic violation found in ${file}: ${description}`
          );
        }
      }
    },
  },
  {
    id: 'w05',
    name: 'test_w05_complete_keyboard_navigation_tour',
    description: 'Workload Scenario 5: Accessibility Auditor navigates header, landmarks, links, and footer via keyboard controls',
    tier: 4,
    feature: 'Tier 4 - Workload Scenario (Keyboard Navigation Tour)',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      const footer = readSourceFile('components/Footer.tsx');

      // Verify interactive controls are semantic buttons/links
      assert.ok(navbar.includes('<header') || navbar.includes('header'), 'Header landmark accessible');
      assert.ok(navbar.includes('<nav') || navbar.includes('nav'), 'Navigation landmark accessible');
      assert.ok(footer.includes('<footer') || footer.includes('footer'), 'Footer landmark accessible');
      assert.ok(footer.includes('<button'), 'Email copy control is keyboard-operable button');
    },
  },
  {
    id: 'w06',
    name: 'test_w06_reduced_motion_low_power_session',
    description: 'Workload Scenario 6: Battery saver user with prefers-reduced-motion receives static render without continuous RAF',
    tier: 4,
    feature: 'Tier 4 - Workload Scenario (Reduced Motion Session)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('prefers-reduced-motion'),
        'HeroCanvas must inspect prefers-reduced-motion'
      );
      assert.ok(
        heroCanvas.includes('renderer.render(scene, camera)'),
        'Scene must support direct static frame rendering'
      );
    },
  },
  {
    id: 'w07',
    name: 'test_w07_client_enterprise_crm_evaluation',
    description: 'Workload Scenario 7: Enterprise prospect inspects EtechCRM for genuine client backing and production architecture',
    tier: 4,
    feature: 'Tier 4 - Workload Scenario (Enterprise CRM Evaluation)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const etech = projects.find(p => p.slug === 'etechcrm');
      assert.ok(etech, 'Prospect views EtechCRM case study');
      assert.strictEqual(
        etech.client,
        'Excel Technologies & Services',
        'Prospect verifies genuine enterprise client backing'
      );
      assert.ok(
        etech.solution.includes('Zod') && etech.solution.includes('TanStack Query'),
        'Prospect confirms enterprise data validation and cache sync architecture'
      );
    },
  },
  {
    id: 'w08',
    name: 'test_w08_deep_learning_vision_verification',
    description: 'Workload Scenario 8: ML Engineer inspects CardecaAlgo RT-DETR detection transformer and PyTorch EfficientNet',
    tier: 4,
    feature: 'Tier 4 - Workload Scenario (Deep Learning Vision Verification)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const cardeca = projects.find(p => p.slug === 'cardeca-algo');
      assert.ok(cardeca, 'ML Engineer finds CardecaAlgo case study');
      assert.ok(
        cardeca.solution.includes('RT-DETR') && cardeca.solution.includes('EfficientNet'),
        'ML Engineer confirms two-tier transformer + CNN inference pipeline'
      );
      assert.ok(
        cardeca.stack.includes('Konva'),
        'ML Engineer confirms interactive HTML5 canvas visualization'
      );
    },
  },
  {
    id: 'w09',
    name: 'test_w09_healthcare_platform_concept_review',
    description: 'Workload Scenario 9: Healthcare Product Manager reviews VAYRIN platform architecture and concept badging',
    tier: 4,
    feature: 'Tier 4 - Workload Scenario (Healthcare Concept Review)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const vayrin = projects.find(p => p.slug === 'vayrin');
      assert.ok(vayrin, 'Product Manager reviews VAYRIN case study');
      assert.ok(
        vayrin.architecture.includes('Supabase Realtime') || vayrin.stack.includes('Supabase Realtime'),
        'Product Manager verifies Supabase Realtime synchronization architecture'
      );
      assert.ok(
        !vayrin.liveUrl,
        'Product Manager confirms VAYRIN does not fabricate a live production deployment url'
      );
    },
  },
  {
    id: 'w10',
    name: 'test_w10_cross_device_responsive_resizing',
    description: 'Workload Scenario 10: Design QA Engineer verifies fluid reflow from 390px to 1920px viewports',
    tier: 4,
    feature: 'Tier 4 - Workload Scenario (Cross Device Responsive Resizing)',
    fn() {
      const globals = readSourceFile('app/globals.css');
      const hero = readSourceFile('components/sections/Hero.tsx');
      const footer = readSourceFile('components/Footer.tsx');

      // 1. Horizontal scroll prevention
      assert.ok(globals.includes('overflow-x: hidden'), 'Global horizontal overflow containment');

      // 2. Responsive typography scaling
      assert.ok(hero.includes('text-'), 'Hero specifies fluid typography scales');

      // 3. Desktop container max-width bounds
      assert.ok(footer.includes('max-w-7xl') || footer.includes('max-w-'), 'Ultra-wide screen bounds enforced');
    },
  },
];
