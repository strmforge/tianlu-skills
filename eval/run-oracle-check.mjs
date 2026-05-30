import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const oraclePath = resolve(process.cwd(), 'eval/oracle-cases.jsonl');
const required = [
  'id',
  'prompt_ref',
  'primary_law',
  'companions',
  'must',
  'forbid',
  'oracle_status',
];
const optionalRegexFields = ['must_match', 'forbid_match'];

const text = readFileSync(oraclePath, 'utf8');
const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);

let failures = 0;
const ids = new Set();

function slugifyHeading(heading) {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[`*_~]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function checkPromptRef(ref, lineNo) {
  if (typeof ref !== 'string' || ref.length === 0) {
    console.error(`line ${lineNo}: prompt_ref must be a non-empty string`);
    failures += 1;
    return;
  }

  const [filePath, anchor] = ref.split('#');
  const absolute = resolve(process.cwd(), filePath);
  if (!existsSync(absolute)) {
    console.error(`line ${lineNo}: prompt_ref file missing: ${filePath}`);
    failures += 1;
    return;
  }

  if (anchor) {
    const promptText = readFileSync(absolute, 'utf8');
    const slugs = new Set();
    for (const line of promptText.split(/\r?\n/)) {
      const match = line.match(/^#+\s+(.+?)\s*$/);
      if (match) {
        slugs.add(slugifyHeading(match[1]));
      }
    }
    if (!slugs.has(anchor)) {
      console.error(`line ${lineNo}: prompt_ref anchor missing: ${ref}`);
      failures += 1;
    }
  }
}

function checkRepoPath(repoPath, lineNo, label) {
  if (typeof repoPath !== 'string' || repoPath.length === 0) {
    console.error(`line ${lineNo}: ${label} must be a non-empty string`);
    failures += 1;
    return;
  }
  if (!existsSync(resolve(process.cwd(), repoPath))) {
    console.error(`line ${lineNo}: ${label} path missing: ${repoPath}`);
    failures += 1;
  }
}

for (let i = 0; i < lines.length; i += 1) {
  const lineNo = i + 1;
  let item;
  try {
    item = JSON.parse(lines[i]);
  } catch (error) {
    console.error(`line ${lineNo}: invalid JSON: ${error.message}`);
    failures += 1;
    continue;
  }

  for (const key of required) {
    if (!(key in item)) {
      console.error(`line ${lineNo}: missing ${key}`);
      failures += 1;
    }
  }

  if (ids.has(item.id)) {
    console.error(`line ${lineNo}: duplicate id ${item.id}`);
    failures += 1;
  }
  ids.add(item.id);

  for (const key of ['companions', 'must', 'forbid']) {
    if (!Array.isArray(item[key]) || item[key].length === 0) {
      console.error(`line ${lineNo}: ${key} must be a non-empty array`);
      failures += 1;
    }
  }

  checkPromptRef(item.prompt_ref, lineNo);

  for (const key of optionalRegexFields) {
    if (key in item) {
      if (!Array.isArray(item[key]) || item[key].length === 0) {
        console.error(`line ${lineNo}: ${key} must be a non-empty array when present`);
        failures += 1;
        continue;
      }
      for (const pattern of item[key]) {
        try {
          new RegExp(pattern, 'i');
        } catch (error) {
          console.error(`line ${lineNo}: invalid ${key} regex "${pattern}": ${error.message}`);
          failures += 1;
        }
      }
    }
  }

  if (typeof item.primary_law !== 'string' || !item.primary_law.startsWith('laws/')) {
    console.error(`line ${lineNo}: primary_law must point to laws/`);
    failures += 1;
  } else {
    checkRepoPath(item.primary_law, lineNo, 'primary_law');
  }

  if (Array.isArray(item.companions)) {
    for (const companion of item.companions) {
      checkRepoPath(companion, lineNo, 'companion');
    }
  }
}

if (failures > 0) {
  console.error(`oracle check failed: ${failures} issue(s)`);
  process.exit(1);
}

console.log(`oracle check passed: ${lines.length} case(s)`);
