import { readFileSync } from 'node:fs';
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

const text = readFileSync(oraclePath, 'utf8');
const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);

let failures = 0;
const ids = new Set();

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

  if (typeof item.primary_law !== 'string' || !item.primary_law.startsWith('laws/')) {
    console.error(`line ${lineNo}: primary_law must point to laws/`);
    failures += 1;
  }
}

if (failures > 0) {
  console.error(`oracle check failed: ${failures} issue(s)`);
  process.exit(1);
}

console.log(`oracle check passed: ${lines.length} case(s)`);
