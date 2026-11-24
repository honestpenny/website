#!/usr/bin/env node
// Lists facts (reviewBy) and guides (nextReview) due within N days. Used by the freshness workflow and /newsroom.
//   node scripts/due.mjs [days=21]
import { readFileSync, readdirSync } from "node:fs";
const days = Number(process.argv[2] ?? 21);
const limit = new Date(Date.now() + days * 864e5).toISOString().slice(0, 10);
const out = [];
const yaml = readFileSync("src/data/facts.yaml", "utf8");
for (const m of yaml.matchAll(/^([a-z0-9-]+):\n[\s\S]*?reviewBy: (\S+)/gm)) if (m[2] <= limit) out.push(`- fact \`${m[1]}\`: review by ${m[2]}`);
for (const f of readdirSync("src/content/guides")) {
  const t = readFileSync(`src/content/guides/${f}`, "utf8");
  const nr = t.match(/^nextReview: (\S+)/m)?.[1];
  if (t.match(/^draft: false/m) && nr && nr <= limit) out.push(`- guide \`${f}\`: next review ${nr}`);
}
console.log(`# Due for review in the next ${days} days (as of ${new Date().toISOString().slice(0, 10)})\n`);
console.log(out.length ? out.join("\n") : "Nothing due.");
console.log("\nFix: run `/newsroom` in Claude Code in this repo, review its pull request, merge, then `npm run check:live`.");
