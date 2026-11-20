import assert from 'node:assert/strict';
import { readSourceFile, parseExperienceData } from '../helpers/parser.mjs';
import { GROUND_TRUTH_EDUCATION, GROUND_TRUTH_EXPERIENCE } from '../helpers/contracts.mjs';

export const tests = [
  {
    id: 'f11_01',
    name: 'test_f11_01_handshake_ai_role',
    description: 'Asserts Handshake AI Freelance Software Engineer role and timeline (Jul 2026 – Present)',
    tier: 1,
    feature: 'F11 - Verified Experience & Education Timeline',
    fn() {
      const experiences = parseExperienceData('data/experience.ts');
      const handshake = experiences.find(e => e.id === 'handshake-ai' || (e.organization && e.organization.includes('Handshake AI')));
      assert.ok(handshake, 'Experience list must include Handshake AI');
      assert.strictEqual(handshake.role, 'Freelance Software Engineer', 'Handshake AI role must be Freelance Software Engineer');
      assert.ok(handshake.period.includes('Jul 2026'), 'Handshake AI timeline must start Jul 2026');
    },
  },
  {
    id: 'f11_02',
    name: 'test_f11_02_geekotee_internship',
    description: 'Asserts GeekOTee Development Intern role and timeline (Mar 2025 – Jun 2025)',
    tier: 1,
    feature: 'F11 - Verified Experience & Education Timeline',
    fn() {
      const experiences = parseExperienceData('data/experience.ts');
      const geekotee = experiences.find(e => e.id === 'geekotee' || (e.organization && e.organization.includes('GeekOTee')));
      assert.ok(geekotee, 'Experience list must include GeekOTee');
      assert.strictEqual(geekotee.role, 'Development Intern', 'GeekOTee role must be Development Intern');
      assert.ok(geekotee.period.includes('Mar 2025'), 'GeekOTee timeline must reflect Mar 2025 start');
    },
  },
  {
    id: 'f11_03',
    name: 'test_f11_03_internstudio_internship',
    description: 'Asserts InternStudio Software Engineering Intern role and timeline (Sep 2024 – Feb 2025)',
    tier: 1,
    feature: 'F11 - Verified Experience & Education Timeline',
    fn() {
      const experiences = parseExperienceData('data/experience.ts');
      const internstudio = experiences.find(e => e.id === 'internstudio' || (e.organization && e.organization.includes('InternStudio')));
      assert.ok(internstudio, 'Experience list must include InternStudio');
      assert.strictEqual(internstudio.role, 'Software Engineering Intern', 'InternStudio role must be Software Engineering Intern');
      assert.ok(internstudio.period.includes('Sep 2024'), 'InternStudio timeline must reflect Sep 2024 start');
    },
  },
  {
    id: 'f11_04',
    name: 'test_f11_04_sister_nivedita_education',
    description: 'Asserts B.Tech CSBS (2024–2028) at Sister Nivedita University, Kolkata',
    tier: 1,
    feature: 'F11 - Verified Experience & Education Timeline',
    fn() {
      const expSource = readSourceFile('components/sections/Experience.tsx');
      assert.ok(
        expSource.includes(GROUND_TRUTH_EDUCATION.institution),
        `Education section must present verified institution: ${GROUND_TRUTH_EDUCATION.institution}`
      );
      assert.ok(
        expSource.includes('CSBS') || expSource.includes('Computer Science and Business Systems'),
        'Education section must specify B.Tech CSBS degree'
      );
      assert.ok(
        expSource.includes('2024') && expSource.includes('2028'),
        'Education section must state 2024–2028 study duration'
      );
    },
  },
  {
    id: 'f11_05',
    name: 'test_f11_05_editorial_table_layout',
    description: 'Asserts clean tabular/drawer layout without generic vertical bullet timeline line',
    tier: 1,
    feature: 'F11 - Verified Experience & Education Timeline',
    fn() {
      const expSource = readSourceFile('components/sections/Experience.tsx');
      assert.ok(
        !expSource.includes('border-l-2 border-emerald-500') && !expSource.includes('timeline-line'),
        'Experience section must avoid generic vertical bullet timeline clichés'
      );
    },
  },
];
