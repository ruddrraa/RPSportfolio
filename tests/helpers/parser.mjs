import fs from 'node:fs';
import path from 'node:path';

const WORKSPACE_ROOT = path.resolve('c:/Users/dell/Desktop/RUDRA/RPSportfolio');

export function getWorkspaceRoot() {
  return WORKSPACE_ROOT;
}

export function resolvePath(relativePath) {
  return path.resolve(WORKSPACE_ROOT, relativePath);
}

export function fileExists(relativePath) {
  try {
    return fs.existsSync(resolvePath(relativePath));
  } catch {
    return false;
  }
}

export function readSourceFile(relativePath) {
  const fullPath = resolvePath(relativePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${relativePath} (resolved to ${fullPath})`);
  }
  return fs.readFileSync(fullPath, 'utf8');
}

/**
 * Extracts CSS variables defined in CSS files (e.g. app/globals.css)
 * Returns an object with key-value pairs (e.g. { '--background': '#F2F0EA' })
 */
export function extractCssVariables(relativePath = 'app/globals.css') {
  const content = readSourceFile(relativePath);
  const vars = {};
  const varRegex = /(--[a-zA-Z0-9_-]+)\s*:\s*([^;]+);/g;
  let match;
  while ((match = varRegex.exec(content)) !== null) {
    vars[match[1].trim()] = match[2].trim();
  }
  return vars;
}

/**
 * Extracts the declaration block for a given CSS selector
 */
export function getCssRule(relativePath, selector) {
  const content = readSourceFile(relativePath);
  // Escaping special characters in selector for regex
  const escapedSelector = selector.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const ruleRegex = new RegExp(`${escapedSelector}\\s*\\{([^}]+)\\}`, 'm');
  const match = content.match(ruleRegex);
  return match ? match[1].trim() : null;
}

/**
 * Searches for a string or regex pattern in a source file
 */
export function findInSource(relativePath, pattern) {
  const content = readSourceFile(relativePath);
  if (pattern instanceof RegExp) {
    return pattern.test(content);
  }
  return content.includes(pattern);
}

/**
 * Returns all matches of a regex in a source file
 */
export function findAllInSource(relativePath, regex) {
  const content = readSourceFile(relativePath);
  const globalRegex = new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : regex.flags + 'g');
  const matches = [];
  let match;
  while ((match = globalRegex.exec(content)) !== null) {
    matches.push(match);
  }
  return matches;
}

/**
 * Helper to safely parse TypeScript objects using regex extraction
 */
function extractObjectsFromTsArray(tsContent, arrayName) {
  // Find array definition e.g. export const projects = [ ... ]
  const arrayStart = tsContent.indexOf(`${arrayName}`);
  if (arrayStart === -1) return [];

  // Find assignment '=' to skip TypeScript type annotations like ProjectCaseStudy[]
  const equalSign = tsContent.indexOf('=', arrayStart);
  if (equalSign === -1) return [];

  const bracketStart = tsContent.indexOf('[', equalSign);
  if (bracketStart === -1) return [];

  // Parse top-level objects inside brackets
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let objStart = -1;
  const rawObjects = [];

  for (let i = bracketStart; i < tsContent.length; i++) {
    const char = tsContent[i];
    const prevChar = i > 0 ? tsContent[i - 1] : '';

    if (inString) {
      if (char === stringChar && prevChar !== '\\') {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      inString = true;
      stringChar = char;
      continue;
    }

    if (char === '[') {
      depth++;
    } else if (char === ']') {
      depth--;
      if (depth === 0) break;
    } else if (char === '{') {
      if (depth === 1) {
        objStart = i;
      }
      depth++;
    } else if (char === '}') {
      depth--;
      if (depth === 1 && objStart !== -1) {
        rawObjects.push(tsContent.slice(objStart, i + 1));
        objStart = -1;
      }
    }
  }

  return rawObjects;
}

/**
 * Parse fields from a raw TypeScript object string
 */
function parseRawFields(rawObjStr) {
  const result = {};
  
  // Parse string properties: key: "value" or 'value' or `value`
  const strPropRegex = /([a-zA-Z0-9_]+)\s*:\s*(["'`])([\s\S]*?)\2(?=[,\n\r}])/g;
  let match;
  while ((match = strPropRegex.exec(rawObjStr)) !== null) {
    result[match[1]] = match[3];
  }

  // Parse array properties: key: [ "item1", "item2" ]
  const arrayPropRegex = /([a-zA-Z0-9_]+)\s*:\s*\[([\s\S]*?)\]/g;
  while ((match = arrayPropRegex.exec(rawObjStr)) !== null) {
    const key = match[1];
    const itemsRaw = match[2];
    const items = [];
    const itemRegex = /(["'`])([\s\S]*?)\1/g;
    let itemMatch;
    while ((itemMatch = itemRegex.exec(itemsRaw)) !== null) {
      items.push(itemMatch[2]);
    }
    result[key] = items;
  }

  // Parse boolean properties: key: true / false
  const boolPropRegex = /([a-zA-Z0-9_]+)\s*:\s*(true|false)/g;
  while ((match = boolPropRegex.exec(rawObjStr)) !== null) {
    result[match[1]] = match[2] === 'true';
  }

  return result;
}

export function parseProjectData(relativePath = 'data/projects.ts') {
  if (!fileExists(relativePath)) return [];
  const content = readSourceFile(relativePath);
  const rawObjs = extractObjectsFromTsArray(content, 'projects');
  return rawObjs.map(parseRawFields);
}

export function parseAchievementsData(relativePath = 'data/achievements.ts') {
  if (!fileExists(relativePath)) return [];
  const content = readSourceFile(relativePath);
  const rawObjs = extractObjectsFromTsArray(content, 'achievements');
  return rawObjs.map(parseRawFields);
}

export function parseExperienceData(relativePath = 'data/experience.ts') {
  if (!fileExists(relativePath)) return [];
  const content = readSourceFile(relativePath);
  const rawObjs = extractObjectsFromTsArray(content, 'experiences');
  return rawObjs.map(parseRawFields);
}

export function parseProfileData(relativePath = 'data/profile.ts') {
  if (!fileExists(relativePath)) return {};
  const content = readSourceFile(relativePath);
  return parseRawFields(content);
}
