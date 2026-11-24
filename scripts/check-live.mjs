#!/usr/bin/env node
// Production check, run after EVERY merge (C2C lessons: green CI ≠ deployed; mocked tests hide live failures).
//   node scripts/check-live.mjs [https://honestpenny.ca]
// 1. /build.txt commit == origin/main   2. security headers live   3. robots.txt live has our policy
// 4. search + answer bots get 200 (not a Cloudflare 403)   5. preview host noindex (if PREVIEW_URL set)
import { execSync } from "node:child_process";

const base = process.argv[2] ?? "https://honestpenny.ca";
let failed = 0;
const ok = (cond, msg) => { console.log(`${cond ? "PASS" : "FAIL"}  ${msg}`); if (!cond) failed++; };

const main = execSync("git rev-parse origin/main").toString().trim();
const live = (await (await fetch(`${base}/build.txt`, { cache: "no-store" })).text()).split("\n")[0];
ok(live === main, `build.txt ${live.slice(0, 7)} == origin/main ${main.slice(0, 7)}`);

const home = await fetch(`${base}/`);
for (const h of ["content-security-policy", "strict-transport-security", "x-content-type-options", "referrer-policy"])
  ok(home.headers.get(h), `header ${h}`);
ok(home.headers.get("referrer-policy") === "strict-origin-when-cross-origin", "Referrer-Policy not tightened");

const robots = await (await fetch(`${base}/robots.txt`)).text();
ok(robots.includes("ai-input=yes") && robots.includes("User-agent: OAI-SearchBot"), "live robots.txt has our policy");
ok(!/User-agent: \*\s*\nDisallow: \/\s*\n/.test(robots), "Cloudflare did not prepend a blanket Disallow");

const bots = {
  Googlebot: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  Bingbot: "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
  "OAI-SearchBot": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot",
  "Claude-SearchBot": "Mozilla/5.0 (compatible; Claude-SearchBot/1.0; +https://www.anthropic.com)",
  PerplexityBot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)",
};
// Note: Cloudflare verifies real bots by IP, so a spoofed UA proves only that we don't block by UA string.
// Confirm real bot 200s in Cloudflare → AI Crawl Control.
for (const [name, ua] of Object.entries(bots)) {
  const r = await fetch(`${base}/`, { headers: { "user-agent": ua } });
  ok(r.status === 200, `${name} UA gets ${r.status}`);
}

if (process.env.PREVIEW_URL) {
  const r = await fetch(process.env.PREVIEW_URL);
  ok(r.headers.get("x-robots-tag") === "noindex", "preview host sends X-Robots-Tag: noindex");
}
console.log(failed ? `\n${failed} check(s) failed` : "\nAll live checks passed");
process.exit(failed ? 1 : 0);
