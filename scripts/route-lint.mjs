import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, normalize, relative, resolve } from 'node:path';

const root = process.cwd();
const lawsDir = resolve(root, 'laws');
const playbooksDir = resolve(root, 'playbooks');
const failures = [];
const warnings = [];
const lintRoots = [
  'README.md',
  'docs',
  'eval',
  'tiandao',
  'laws',
  'playbooks',
  'index',
  'adapters',
  'overlays',
  'incubator',
  'scripts',
];

function read(path) {
  return readFileSync(resolve(root, path), 'utf8');
}

function normalizeRepoPath(path) {
  return normalize(path).replaceAll('\\', '/');
}

function cleanCell(cell) {
  return cell.trim().replace(/^`|`$/g, '');
}

function tableRows(sectionText) {
  return sectionText
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith('|'))
    .map((line) => line.split('|').slice(1, -1).map(cleanCell))
    .filter((cells) => cells.length > 0)
    .filter((cells) => !cells.every((cell) => /^-+$/.test(cell)));
}

function sectionAfter(text, heading) {
  const start = text.indexOf(heading);
  if (start < 0) return '';
  const rest = text.slice(start + heading.length);
  const next = rest.search(/\n## /);
  return next < 0 ? rest : rest.slice(0, next);
}

function addDuplicateAware(map, key, value, label) {
  if (!map.has(key)) {
    map.set(key, []);
  }
  map.get(key).push(value);
  if (map.get(key).length > 1) {
    failures.push(`${label} duplicates "${key}"`);
  }
}

function collectFiles(path) {
  const fullPath = resolve(root, path);
  if (!existsSync(fullPath)) return [];
  const entries = readdirSync(fullPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = `${path}/${entry.name}`;
    if (entry.isDirectory()) {
      files.push(...collectFiles(child));
    } else if (entry.isFile()) {
      files.push(child);
    }
  }
  return files;
}

function lintTiandaoNaming() {
  if (existsSync(resolve(root, 'dao'))) {
    failures.push('top-level legacy source directory is not allowed; use tiandao/');
  }

  const allowedHistoricalFiles = new Set(['docs/tiandao-naming-decision.md']);
  const legacyPathPattern = new RegExp(`\\b${'d' + 'ao'}/`);
  const files = lintRoots.flatMap((path) => {
    const fullPath = resolve(root, path);
    if (!existsSync(fullPath)) return [];
    if (statSync(fullPath).isFile()) return [path];
    return collectFiles(path);
  });

  for (const file of files) {
    const repoPath = normalizeRepoPath(file);
    if (allowedHistoricalFiles.has(repoPath)) continue;
    const text = read(repoPath);
    const lines = text.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (legacyPathPattern.test(line)) {
        failures.push(`${repoPath}:${index + 1} references legacy source path; use tiandao/`);
      }
    });
  }
}

lintTiandaoNaming();

const lawFiles = readdirSync(lawsDir)
  .filter((name) => name.endsWith('.md') && name !== 'index.md')
  .sort();

const lawHeadings = new Map();
const lawFileLineCounts = [];

for (const file of lawFiles) {
  const repoPath = `laws/${file}`;
  const text = read(repoPath);
  const lines = text.split(/\r?\n/);
  lawFileLineCounts.push({ file: repoPath, lines: lines.length });

  for (const line of lines) {
    const match = line.match(/^## Law:\s+(.+?)\s*$/);
    if (match) {
      addDuplicateAware(lawHeadings, match[1], repoPath, 'law heading');
    }
  }
}

const lawsIndex = read('laws/index.md');
const familyRows = tableRows(sectionAfter(lawsIndex, '## Current Law Families'))
  .filter((cells) => cells[0] !== 'Family' && cells.length >= 4);
const lawRows = tableRows(sectionAfter(lawsIndex, '## Current Laws'))
  .filter((cells) => cells[0] !== 'Law' && cells.length >= 3);

const familyFiles = new Set(familyRows.map((cells) => cells[1]));
const indexedLaws = new Map();
for (const cells of lawRows) {
  addDuplicateAware(indexedLaws, cells[0], cells, 'laws/index.md');
}

const scopeMap = read('index/scope-map.md');
const scopeRows = tableRows(scopeMap).filter((cells) => cells[0] !== 'Method' && cells.length >= 4);
const scopedMethods = new Map();
for (const cells of scopeRows) {
  addDuplicateAware(scopedMethods, cells[0], cells, 'index/scope-map.md');
}

const surfaceRegistry = read('index/surface-registry.md');
const registryRows = tableRows(surfaceRegistry)
  .filter((cells) => cells[0] !== 'Surface' && cells.length >= 4);
const playbookRegistry = read('index/playbook-registry.md');
const playbookRows = tableRows(playbookRegistry)
  .filter((cells) => cells[0] !== 'Playbook' && cells.length >= 5);

for (const file of lawFiles) {
  const repoPath = `laws/${file}`;
  if (!familyFiles.has(file)) {
    failures.push(`laws/index.md Current Law Families missing ${repoPath}`);
  }
}

for (const file of familyFiles) {
  if (!existsSync(resolve(root, 'laws', file))) {
    failures.push(`laws/index.md Current Law Families references missing laws/${file}`);
  }
}

for (const [law, locations] of lawHeadings.entries()) {
  if (!indexedLaws.has(law)) {
    failures.push(`laws/index.md Current Laws missing "${law}" from ${locations.join(', ')}`);
  }
  if (!scopedMethods.has(law)) {
    failures.push(`index/scope-map.md missing "${law}"`);
  }
}

for (const law of indexedLaws.keys()) {
  if (!lawHeadings.has(law)) {
    failures.push(`laws/index.md Current Laws lists "${law}" but no matching law heading exists`);
  }
}

for (const method of scopedMethods.keys()) {
  if (!lawHeadings.has(method)) {
    warnings.push(`index/scope-map.md has non-law method "${method}"`);
  }
}

for (const cells of registryRows) {
  const rawPath = cells[1];
  const registryFile = resolve(root, 'index/surface-registry.md');
  const target = resolve(dirname(registryFile), rawPath);
  const repoTarget = normalizeRepoPath(relative(root, target));
  if (!existsSync(target)) {
    failures.push(`index/surface-registry.md references missing ${rawPath}`);
  }
  const basename = repoTarget.replace(/^laws\//, '');
  if (!familyFiles.has(basename)) {
    failures.push(`surface registry primary ${repoTarget} is not listed in laws/index.md families`);
  }
}

const registryPrimaryFiles = new Set(
  registryRows.map((cells) => normalizeRepoPath(relative(root, resolve(root, 'index', cells[1]))).replace(/^laws\//, '')),
);
for (const file of familyFiles) {
  if (!registryPrimaryFiles.has(file)) {
    failures.push(`laws/index.md family laws/${file} is not registered in index/surface-registry.md`);
  }
}

const playbookFiles = readdirSync(playbooksDir)
  .filter((name) => name.endsWith('.md') && name !== 'README.md' && name !== 'template.md')
  .sort();

const registeredPlaybooks = new Set();
for (const cells of playbookRows) {
  const rawPath = cells[0].match(/\]\((.+?)\)/)?.[1] ?? '';
  if (!rawPath) {
    failures.push(`index/playbook-registry.md has a playbook row without a markdown link: ${cells[0]}`);
    continue;
  }
  const registryFile = resolve(root, 'index/playbook-registry.md');
  const target = resolve(dirname(registryFile), rawPath);
  const repoTarget = normalizeRepoPath(relative(root, target));
  if (!existsSync(target)) {
    failures.push(`index/playbook-registry.md references missing ${rawPath}`);
  }
  if (!repoTarget.startsWith('playbooks/')) {
    failures.push(`index/playbook-registry.md playbook target is outside playbooks/: ${repoTarget}`);
  }
  registeredPlaybooks.add(repoTarget.replace(/^playbooks\//, ''));
}

for (const file of playbookFiles) {
  if (!registeredPlaybooks.has(file)) {
    failures.push(`index/playbook-registry.md missing playbooks/${file}`);
  }
}

for (const file of registeredPlaybooks) {
  if (!existsSync(resolve(root, 'playbooks', file))) {
    failures.push(`index/playbook-registry.md lists missing playbooks/${file}`);
  }
}

const fanInAudit = read('docs/fan-in-audit.md');
const auditMatch = fanInAudit.match(/Current inventory:\s+(\d+)\s+laws/i);
if (auditMatch) {
  const auditCount = Number(auditMatch[1]);
  const currentCount = lawHeadings.size;
  const drift = Math.abs(currentCount - auditCount);
  if (drift > 3) {
    failures.push(`law count drift is ${drift}; re-run docs/fan-in-audit.md before continuing`);
  } else if (drift > 0) {
    warnings.push(`law count drift is ${drift}; consider updating docs/fan-in-audit.md`);
  }
} else {
  warnings.push('docs/fan-in-audit.md does not state a current inventory count');
}

const sortedCounts = [...lawFileLineCounts].sort((a, b) => a.lines - b.lines);
const median = sortedCounts[Math.floor(sortedCounts.length / 2)]?.lines ?? 0;
const longThreshold = Math.max(220, median * 2);
for (const item of lawFileLineCounts) {
  if (item.lines > longThreshold) {
    warnings.push(`${item.file} is ${item.lines} lines; consider a fan-in or split review`);
  }
}

for (const warning of warnings) {
  console.warn(`warning: ${warning}`);
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`error: ${failure}`);
  }
  console.error(`route lint failed: ${failures.length} issue(s)`);
  process.exit(1);
}

console.log(
  `route lint passed: ${lawHeadings.size} law(s), ${familyFiles.size} family file(s), ${registryRows.length} registry surface(s), ${registeredPlaybooks.size} playbook(s)`,
);
