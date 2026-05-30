import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const answerArg = process.argv[2];
const requireAll = !process.argv.includes('--partial');

if (!answerArg) {
  console.error('usage: node eval/run-answer-check.mjs <answers.jsonl> [--partial]');
  console.error('answer line schema: {"case_id":"...","answer":"..."}');
  process.exit(2);
}

function readJsonl(path) {
  const text = readFileSync(resolve(process.cwd(), path), 'utf8');
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(`${path} line ${index + 1}: invalid JSON: ${error.message}`);
      }
    });
}

const oracleItems = readJsonl('eval/oracle-cases.jsonl');
const oracleById = new Map(oracleItems.map((item) => [item.id, item]));
const answerItems = readJsonl(answerArg);
const seen = new Set();
let failures = 0;

for (let i = 0; i < answerItems.length; i += 1) {
  const lineNo = i + 1;
  const answerItem = answerItems[i];
  const caseId = answerItem.case_id ?? answerItem.id;
  const answer = answerItem.answer;

  if (typeof caseId !== 'string' || caseId.length === 0) {
    console.error(`line ${lineNo}: missing case_id`);
    failures += 1;
    continue;
  }
  if (seen.has(caseId)) {
    console.error(`line ${lineNo}: duplicate answer for ${caseId}`);
    failures += 1;
  }
  seen.add(caseId);

  const oracle = oracleById.get(caseId);
  if (!oracle) {
    console.error(`line ${lineNo}: unknown case_id ${caseId}`);
    failures += 1;
    continue;
  }
  if (typeof answer !== 'string' || answer.trim().length === 0) {
    console.error(`line ${lineNo}: answer must be non-empty text`);
    failures += 1;
    continue;
  }

  const mustMatch = oracle.must_match ?? [];
  const forbidMatch = oracle.forbid_match ?? [];

  if (mustMatch.length === 0 || forbidMatch.length === 0) {
    console.error(`line ${lineNo}: oracle ${caseId} lacks must_match or forbid_match patterns`);
    failures += 1;
    continue;
  }

  for (const pattern of mustMatch) {
    const regex = new RegExp(pattern, 'i');
    if (!regex.test(answer)) {
      console.error(`line ${lineNo}: ${caseId} missing required pattern /${pattern}/i`);
      failures += 1;
    }
  }

  for (const pattern of forbidMatch) {
    const regex = new RegExp(pattern, 'i');
    if (regex.test(answer)) {
      console.error(`line ${lineNo}: ${caseId} matched forbidden pattern /${pattern}/i`);
      failures += 1;
    }
  }
}

if (requireAll) {
  for (const oracle of oracleItems) {
    if (!seen.has(oracle.id)) {
      console.error(`missing answer for oracle ${oracle.id}`);
      failures += 1;
    }
  }
}

if (failures > 0) {
  console.error(`answer check failed: ${failures} issue(s)`);
  process.exit(1);
}

const coverage = requireAll ? ` covering ${oracleItems.length} oracle case(s)` : '';
console.log(`answer check passed: ${answerItems.length} answer(s)${coverage}`);
