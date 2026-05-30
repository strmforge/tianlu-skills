import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const codexHome = process.env.CODEX_HOME
  ? resolve(process.env.CODEX_HOME)
  : resolve(process.env.USERPROFILE ?? process.env.HOME ?? '.', '.codex');
const skillsRoot = resolve(codexHome, 'skills');
const showMissing = process.argv.includes('--show-missing');

function readRepo(path) {
  return readFileSync(resolve(repoRoot, path), 'utf8');
}

function walk(dir, results = []) {
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const fullPath = resolve(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, results);
    } else if (entry === 'SKILL.md') {
      results.push(fullPath);
    }
  }
  return results;
}

function normalizeId(path) {
  return path.replaceAll('\\', '/').replace(/\/SKILL\.md$/, '');
}

function isDocumented(text, id) {
  return text.includes(`\`${id}\``) || text.includes(`| ${id} |`);
}

const docsText = [
  readRepo('docs/local-skill-inventory.md'),
  readRepo('docs/skill-role-catalog.md'),
].join('\n');

const privateCountMatch = docsText.match(/Private\/local-only exclusions:\s*(\d+)/i);
const declaredPrivateExclusions = privateCountMatch ? Number(privateCountMatch[1]) : 0;

const skillFiles = walk(skillsRoot);
const discovered = skillFiles.map((file) => {
  const rel = normalizeId(relative(skillsRoot, file));
  if (rel.startsWith('.system/')) {
    return { group: 'system', id: rel.replace(/^\.system\//, '') };
  }
  return { group: 'user', id: rel };
});

const userSkills = discovered.filter((item) => item.group === 'user');
const systemSkills = discovered.filter((item) => item.group === 'system');

const missingUser = userSkills.filter((item) => !isDocumented(docsText, item.id));
const missingSystem = systemSkills.filter((item) => !isDocumented(docsText, item.id));
let failures = 0;

if (missingSystem.length > 0) {
  failures += missingSystem.length;
  console.error(`system skill inventory missing ${missingSystem.length} skill(s):`);
  for (const item of missingSystem) {
    console.error(`  - ${item.id}`);
  }
}

if (missingUser.length !== declaredPrivateExclusions) {
  failures += Math.abs(missingUser.length - declaredPrivateExclusions) || 1;
  console.error(
    `user skill inventory mismatch: ${missingUser.length} undocumented user skill(s), docs declare ${declaredPrivateExclusions} private/local-only exclusion(s)`,
  );
  if (showMissing) {
    for (const item of missingUser) {
      console.error(`  - ${item.id}`);
    }
  } else {
    console.error('  rerun with --show-missing for local debugging; do not commit private names to neutral docs');
  }
}

if (failures > 0) {
  console.error(`local skill inventory check failed: ${failures} issue(s)`);
  process.exit(1);
}

console.log(
  `local skill inventory check passed: ${userSkills.length - declaredPrivateExclusions} documented user skill(s), ${systemSkills.length} system skill(s), ${declaredPrivateExclusions} private/local-only exclusion(s)`,
);
