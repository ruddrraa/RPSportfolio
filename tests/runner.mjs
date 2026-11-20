import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Parse command line arguments
const args = process.argv.slice(2);
const tierArg = args.find(a => a.startsWith('--tier='));
const featureArg = args.find(a => a.startsWith('--feature='));
const selectedTier = tierArg ? tierArg.split('=')[1] : null;
const selectedFeature = featureArg ? featureArg.split('=')[1].toLowerCase() : null;

const TESTS_ROOT = path.resolve('tests');

async function discoverTestFiles() {
  const testFiles = [];

  // Tier 1 files
  const tier1Dir = path.join(TESTS_ROOT, 'tier1_features');
  if (fs.existsSync(tier1Dir)) {
    const files = fs.readdirSync(tier1Dir).filter(f => f.endsWith('.test.mjs') || f.endsWith('.mjs'));
    for (const f of files.sort()) {
      testFiles.push({
        tier: 1,
        path: path.join(tier1Dir, f),
        fileName: f,
      });
    }
  }

  // Tier 2 files
  const tier2Dir = path.join(TESTS_ROOT, 'tier2_boundaries');
  if (fs.existsSync(tier2Dir)) {
    const files = fs.readdirSync(tier2Dir).filter(f => f.endsWith('.test.mjs') || f.endsWith('.mjs'));
    for (const f of files.sort()) {
      testFiles.push({
        tier: 2,
        path: path.join(tier2Dir, f),
        fileName: f,
      });
    }
  }

  // Tier 3 files
  const tier3Dir = path.join(TESTS_ROOT, 'tier3_pairwise');
  if (fs.existsSync(tier3Dir)) {
    const files = fs.readdirSync(tier3Dir).filter(f => f.endsWith('.test.mjs') || f.endsWith('.mjs'));
    for (const f of files.sort()) {
      testFiles.push({
        tier: 3,
        path: path.join(tier3Dir, f),
        fileName: f,
      });
    }
  }

  // Tier 4 files
  const tier4Dir = path.join(TESTS_ROOT, 'tier4_workloads');
  if (fs.existsSync(tier4Dir)) {
    const files = fs.readdirSync(tier4Dir).filter(f => f.endsWith('.test.mjs') || f.endsWith('.mjs'));
    for (const f of files.sort()) {
      testFiles.push({
        tier: 4,
        path: path.join(tier4Dir, f),
        fileName: f,
      });
    }
  }

  return testFiles;
}

async function runTests() {
  const startTime = Date.now();
  console.log('================================================================================');
  console.log('        RUDRA PRATAP SINGH PORTFOLIO — AUTOMATED E2E TEST RUNNER');
  console.log('================================================================================');
  console.log(`Execution Mode : Native Node.js ESM (${process.version})`);
  console.log(`Filter Tier    : ${selectedTier ? `Tier ${selectedTier}` : 'All Tiers (1-4)'}`);
  if (selectedFeature) {
    console.log(`Filter Feature : ${selectedFeature}`);
  }
  console.log('--------------------------------------------------------------------------------\n');

  const files = await discoverTestFiles();
  let totalTestsLoaded = 0;
  const results = [];
  const tierStats = {
    1: { total: 0, passed: 0, failed: 0 },
    2: { total: 0, passed: 0, failed: 0 },
    3: { total: 0, passed: 0, failed: 0 },
    4: { total: 0, passed: 0, failed: 0 },
  };

  for (const file of files) {
    if (selectedTier && selectedTier !== 'all' && parseInt(selectedTier, 10) !== file.tier) {
      continue;
    }

    const fileUrl = pathToFileURL(file.path).href;
    let module;
    try {
      module = await import(fileUrl);
    } catch (err) {
      console.error(`[MODULE LOAD ERROR] Failed to load ${file.fileName}:`, err.message);
      results.push({
        id: file.fileName,
        name: `Load ${file.fileName}`,
        tier: file.tier,
        feature: 'Module Import',
        status: 'FAIL',
        error: err,
        duration: 0,
      });
      tierStats[file.tier].total++;
      tierStats[file.tier].failed++;
      continue;
    }

    const tests = module.tests || [];
    for (const test of tests) {
      if (selectedFeature && !test.name.toLowerCase().includes(selectedFeature) && !test.id.toLowerCase().includes(selectedFeature)) {
        continue;
      }

      totalTestsLoaded++;
      const tTier = test.tier || file.tier;
      if (!tierStats[tTier]) {
        tierStats[tTier] = { total: 0, passed: 0, failed: 0 };
      }
      tierStats[tTier].total++;

      const testStart = Date.now();
      try {
        await test.fn();
        const duration = Date.now() - testStart;
        tierStats[tTier].passed++;
        results.push({
          id: test.id,
          name: test.name,
          tier: tTier,
          feature: test.feature || file.fileName,
          status: 'PASS',
          duration,
        });
      } catch (err) {
        const duration = Date.now() - testStart;
        tierStats[tTier].failed++;
        results.push({
          id: test.id,
          name: test.name,
          tier: tTier,
          feature: test.feature || file.fileName,
          status: 'FAIL',
          duration,
          error: err,
        });
      }
    }
  }

  const totalDuration = Date.now() - startTime;
  const totalPassed = results.filter(r => r.status === 'PASS').length;
  const totalFailed = results.filter(r => r.status === 'FAIL').length;

  // Print results grouped by tier
  console.log('--------------------------------------------------------------------------------');
  console.log('TEST SUITE EXECUTION SUMMARY');
  console.log('--------------------------------------------------------------------------------');
  console.log('| Tier   | Scope                                    | Total | Passed | Failed |');
  console.log('|--------|------------------------------------------|-------|--------|--------|');
  console.log(`| Tier 1 | Feature Isolation (Category-Partition)   | ${String(tierStats[1].total).padStart(5)} | ${String(tierStats[1].passed).padStart(6)} | ${String(tierStats[1].failed).padStart(6)} |`);
  console.log(`| Tier 2 | Boundary Analysis & Negative Testing     | ${String(tierStats[2].total).padStart(5)} | ${String(tierStats[2].passed).padStart(6)} | ${String(tierStats[2].failed).padStart(6)} |`);
  console.log(`| Tier 3 | Cross-Feature Pairwise Combinations      | ${String(tierStats[3].total).padStart(5)} | ${String(tierStats[3].passed).padStart(6)} | ${String(tierStats[3].failed).padStart(6)} |`);
  console.log(`| Tier 4 | Real-World Application Workload Scenarios| ${String(tierStats[4].total).padStart(5)} | ${String(tierStats[4].passed).padStart(6)} | ${String(tierStats[4].failed).padStart(6)} |`);
  console.log('|--------|------------------------------------------|-------|--------|--------|');
  console.log(`| TOTAL  | All Executed Test Tiers                  | ${String(results.length).padStart(5)} | ${String(totalPassed).padStart(6)} | ${String(totalFailed).padStart(6)} |`);
  console.log('--------------------------------------------------------------------------------');
  console.log(`Total Duration: ${totalDuration}ms`);
  console.log(`Pass Rate: ${results.length > 0 ? ((totalPassed / results.length) * 100).toFixed(1) : 0}%\n`);

  if (totalFailed > 0) {
    console.log('--------------------------------------------------------------------------------');
    console.log(`DETAILED FAILURE REPORT (${totalFailed} failures)`);
    console.log('--------------------------------------------------------------------------------');
    results
      .filter(r => r.status === 'FAIL')
      .forEach((fail, idx) => {
        console.log(`\n[#${idx + 1}] [Tier ${fail.tier}] ${fail.id}: ${fail.name}`);
        console.log(`     Feature: ${fail.feature}`);
        console.log(`     Error  : ${fail.error?.message || fail.error}`);
        if (fail.error?.expected !== undefined && fail.error?.actual !== undefined) {
          console.log(`     Expected: ${JSON.stringify(fail.error.expected)}`);
          console.log(`     Actual  : ${JSON.stringify(fail.error.actual)}`);
        }
      });
    console.log('\n================================================================================');
    console.log('RESULT: FAILED (Tests detected non-compliant requirements or uncompleted milestones)');
    console.log('================================================================================');
    process.exit(1);
  } else {
    console.log('================================================================================');
    console.log('RESULT: SUCCESS — ALL TESTS PASSED (100% SPECIFICATION CONFORMANCE)');
    console.log('================================================================================');
    process.exit(0);
  }
}

runTests().catch(err => {
  console.error('Fatal Runner Exception:', err);
  process.exit(1);
});
