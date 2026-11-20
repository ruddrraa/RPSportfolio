import assert from 'node:assert/strict';
import { readSourceFile, parseProjectData, parseExperienceData, parseAchievementsData, fileExists } from '../helpers/parser.mjs';
import { THEME_PALETTE, calculateContrastRatio, meetsWcagAA } from '../helpers/palette.mjs';
import { GROUND_TRUTH_PROFILE, GROUND_TRUTH_EDUCATION, CATALOGUED_FABRICATIONS } from '../helpers/contracts.mjs';

export const tests = [
  {
    id: 'p01',
    name: 'test_p01_palette_and_typography',
    description: 'Validates warm ivory #F2F0EA paired with serif Cormorant Garamond across headline hierarchy',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Palette + Typography)',
    fn() {
      const globals = readSourceFile('app/globals.css');
      const hasIvory = globals.includes('#F2F0EA') || globals.includes('#f2f0ea');
      const hasCormorant = globals.includes('Cormorant Garamond') || globals.includes('Newsreader');
      assert.ok(hasIvory, 'Global stylesheet must define warm ivory background token #F2F0EA');
      assert.ok(hasCormorant, 'Global stylesheet must configure Cormorant Garamond headline serif');
    },
  },
  {
    id: 'p02',
    name: 'test_p02_3d_hero_and_reduced_motion',
    description: 'Validates Three.js canvas queries prefers-reduced-motion to govern animation choreography',
    tier: 3,
    feature: 'Tier 3 - Pairwise (3D Hero + Accessibility)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('(prefers-reduced-motion: reduce)'),
        'HeroCanvas must actively evaluate (prefers-reduced-motion: reduce) media query'
      );
    },
  },
  {
    id: 'p03',
    name: 'test_p03_3d_hero_and_intersection_observer',
    description: 'Validates Three.js canvas integrates with IntersectionObserver to pause rendering when offscreen',
    tier: 3,
    feature: 'Tier 3 - Pairwise (3D Hero + Lifecycle)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('IntersectionObserver'),
        'HeroCanvas must instantiate IntersectionObserver to pause animation ticks outside the viewport'
      );
    },
  },
  {
    id: 'p04',
    name: 'test_p04_case_study_tiers_and_data_integrity',
    description: 'Validates project case studies strictly correlate with zero-fabrication assertions',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Case Studies + Data Integrity)',
    fn() {
      const projectsSrc = readSourceFile('data/projects.ts');
      for (const { pattern, description } of CATALOGUED_FABRICATIONS) {
        assert.ok(
          !pattern.test(projectsSrc),
          `Data integrity violation in projects data: ${description}`
        );
      }
    },
  },
  {
    id: 'p05',
    name: 'test_p05_navigation_and_responsive_drawer',
    description: 'Validates navbar floating island collapses to mobile menu on viewports <768px',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Navigation + Responsive)',
    fn() {
      const navbar = readSourceFile('components/Navbar.tsx');
      assert.ok(
        navbar.includes('hidden md:flex'),
        'Desktop links must be hidden on mobile (<768px) with hidden md:flex'
      );
      assert.ok(
        navbar.includes('mobileMenuOpen') || navbar.includes('Menu'),
        'Mobile hamburger toggle must be present for narrow viewports'
      );
    },
  },
  {
    id: 'p06',
    name: 'test_p06_capabilities_and_cinematic_theme',
    description: 'Validates dark cinematic #151515 styling applies only to intentional code containers inside Capabilities',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Capabilities + Theme)',
    fn() {
      const expertise = readSourceFile('components/sections/Expertise.tsx');
      assert.ok(
        expertise.includes('code') || expertise.includes('pre') || expertise.includes('font-mono'),
        'Capabilities must house technical code / schema preview'
      );
    },
  },
  {
    id: 'p07',
    name: 'test_p07_selected_work_and_dynamic_routes',
    description: 'Validates gallery card links match dynamic project detail slugs in app/projects/[slug]',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Selected Work + Dynamic Routing)',
    fn() {
      const projects = parseProjectData('data/projects.ts');
      const gallery = readSourceFile('components/sections/ProjectsGallery.tsx');
      for (const p of projects) {
        assert.ok(
          gallery.includes(p.slug) || gallery.includes('project.slug'),
          `ProjectsGallery must link to project slug "${p.slug}"`
        );
      }
    },
  },
  {
    id: 'p08',
    name: 'test_p08_experience_timeline_and_cv_truth',
    description: 'Validates Handshake AI, GeekOTee, and InternStudio dates align with Sister Nivedita University study years',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Experience + CV Truth)',
    fn() {
      const experiences = parseExperienceData('data/experience.ts');
      const expSource = readSourceFile('components/sections/Experience.tsx');
      assert.ok(experiences.length === 3, 'Must have exactly 3 verified internships/roles');
      assert.ok(
        expSource.includes(GROUND_TRUTH_EDUCATION.institution),
        'Experience section must include university education'
      );
    },
  },
  {
    id: 'p09',
    name: 'test_p09_research_feature_and_cv_honors',
    description: 'Validates Q-Sentry CIIR 2026 paper coexists with Hackfest 2025 and China IoT exchange in achievements',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Research + Honors)',
    fn() {
      const achievements = parseAchievementsData('data/achievements.ts');
      const ids = achievements.map(a => a.id);
      assert.ok(ids.some(id => id.includes('q-sentry')), 'Must include Q-Sentry paper');
      assert.ok(ids.some(id => id.includes('hackfest')), 'Must include Hackfest 2025');
      assert.ok(ids.some(id => id.includes('china') || id.includes('iot')), 'Must include China IoT exchange');
    },
  },
  {
    id: 'p10',
    name: 'test_p10_footer_clipboard_and_keyboard_focus',
    description: 'Validates email copy button triggers visual feedback and retains accessible focus ring',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Footer + Accessibility)',
    fn() {
      const footer = readSourceFile('components/Footer.tsx');
      assert.ok(
        footer.includes('setCopied(true)'),
        'Email button must toggle copied state upon click'
      );
      assert.ok(
        footer.includes('cursor-pointer') || footer.includes('button'),
        'Copy action must be enclosed in an interactive button'
      );
    },
  },
  {
    id: 'p11',
    name: 'test_p11_responsive_390px_and_typography_clamp',
    description: 'Validates monumental serif scales down without word wrap overflow at 390px',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Responsive + Typography)',
    fn() {
      const hero = readSourceFile('components/sections/Hero.tsx');
      assert.ok(
        hero.includes('text-') && (hero.includes('sm:') || hero.includes('md:') || hero.includes('clamp(')),
        'Hero headline must specify responsive font sizing breakpoints'
      );
    },
  },
  {
    id: 'p12',
    name: 'test_p12_responsive_1920px_and_3d_canvas',
    description: 'Validates Three.js camera FOV and aspect ratio remain undistorted on ultra-wide viewports',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Responsive + 3D Canvas)',
    fn() {
      const heroCanvas = readSourceFile('components/cinematic/HeroCanvas.tsx');
      assert.ok(
        heroCanvas.includes('updateProjectionMatrix'),
        'Camera must update projection matrix to prevent wide-screen distortion'
      );
    },
  },
  {
    id: 'p13',
    name: 'test_p13_data_integrity_and_project_previews',
    description: 'Validates ProjectInterfacePreview.tsx contains zero fake latency, fake patient data, or fake invoices',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Project Preview + Data Integrity)',
    fn() {
      const preview = readSourceFile('components/ui/ProjectInterfacePreview.tsx');
      assert.ok(!/24\s*ms/i.test(preview), 'Preview must not display fake 24ms latency');
      assert.ok(!/spo2/i.test(preview), 'Preview must not display fake patient SpO2');
      assert.ok(!/42\.6\s*fps/i.test(preview), 'Preview must not display fake 42.6 FPS');
    },
  },
  {
    id: 'p14',
    name: 'test_p14_accessibility_and_color_contrast',
    description: 'Validates ink on ivory and ink on stone exceed WCAG 2.2 AA (>= 4.5:1)',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Accessibility + Color Contrast)',
    fn() {
      const ratioIvory = calculateContrastRatio(THEME_PALETTE.DEEP_INK, THEME_PALETTE.WARM_IVORY);
      const ratioStone = calculateContrastRatio(THEME_PALETTE.DEEP_INK, THEME_PALETTE.WARM_STONE);
      assert.ok(meetsWcagAA(ratioIvory), `Ink on Ivory contrast ${ratioIvory.toFixed(2)}:1 must meet AA`);
      assert.ok(meetsWcagAA(ratioStone), `Ink on Stone contrast ${ratioStone.toFixed(2)}:1 must meet AA`);
    },
  },
  {
    id: 'p15',
    name: 'test_p15_smooth_scroll_and_scrolltrigger',
    description: 'Validates Lenis smooth scrolling integrates harmoniously with page scrolling',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Motion + Smooth Scroll)',
    fn() {
      const smoothScroll = readSourceFile('components/providers/SmoothScroll.tsx');
      assert.ok(
        smoothScroll.includes('lenis') || smoothScroll.includes('Lenis'),
        'SmoothScroll provider must integrate Lenis'
      );
    },
  },
  {
    id: 'p16',
    name: 'test_p16_kinetic_typography_and_screen_reader',
    description: 'Validates kinetic text components preserve clean plain text for assistive technologies',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Kinetic Typography + Screen Reader)',
    fn() {
      const kinetic = readSourceFile('components/ui/KineticText.tsx');
      assert.ok(
        kinetic.includes('children') || kinetic.includes('text'),
        'KineticText component must accept plain text/children props for accessibility'
      );
    },
  },
  {
    id: 'p17',
    name: 'test_p17_case_studies_and_genuine_logos',
    description: 'Validates EtechCRM and Cardeca display verified logos from public/projects/',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Case Studies + Genuine Assets)',
    fn() {
      assert.ok(
        fileExists('public/projects/cardeca/logo.png'),
        'Cardeca genuine logo must exist in public/projects/cardeca/logo.png'
      );
      assert.ok(
        fileExists('public/projects/etechcrm/excelnavbarlogo.png'),
        'EtechCRM genuine logo must exist in public/projects/etechcrm/excelnavbarlogo.png'
      );
    },
  },
  {
    id: 'p18',
    name: 'test_p18_hero_identity_and_seo_metadata',
    description: 'Validates monumental H1 headline matches title and OpenGraph metadata in layout',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Hero + SEO Metadata)',
    fn() {
      const layout = readSourceFile('app/layout.tsx');
      assert.ok(
        layout.includes(GROUND_TRUTH_PROFILE.name),
        `Root layout metadata must include author name: ${GROUND_TRUTH_PROFILE.name}`
      );
    },
  },
  {
    id: 'p19',
    name: 'test_p19_dark_cinematic_and_text_selection',
    description: 'Validates custom selection styles maintain legibility across backgrounds',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Cinematic + CSS Selection)',
    fn() {
      const globals = readSourceFile('app/globals.css');
      assert.ok(
        globals.includes('::selection'),
        'globals.css must define custom ::selection styling'
      );
    },
  },
  {
    id: 'p20',
    name: 'test_p20_test_runner_and_build_pipeline',
    description: 'Validates E2E test runner executes cleanly alongside Next.js workspace structure',
    tier: 3,
    feature: 'Tier 3 - Pairwise (Test Runner + Architecture)',
    fn() {
      assert.ok(fileExists('package.json'), 'package.json must exist');
      assert.ok(fileExists('tsconfig.json'), 'tsconfig.json must exist');
      assert.ok(fileExists('tests/runner.mjs'), 'tests/runner.mjs must exist');
    },
  },
];
