// IndexNow: tells Bing (which feeds Copilot, DuckDuckGo and ChatGPT search), Yandex, Seznam, Naver and Yep that pages
// changed, instead of waiting for a crawl. Copied from Code To Cloud (scripts/indexnow.mjs), adapted for Astro's
// sitemap-index. Runs from .github/workflows/indexnow.yml after a push to main:
//   1. if honestpenny.ca isn't serving yet, exits cleanly (pre-launch),
//   2. waits until /build.txt shows the pushed commit (EXPECT_SHA) and the key file is served,
//   3. submits sitemap URLs whose <lastmod> is in the last RECENT_DAYS days (plus the home page), or all with --all.
// Usage: node scripts/indexnow.mjs [--all] [--dry-run]
const HOST = "honestpenny.ca";
const KEY = "62802af011c923f252f2b225032e5f2d"; // public by design: must match public/<key>.txt
const RECENT_DAYS = 3;
const all = process.argv.includes("--all");
const dryRun = process.argv.includes("--dry-run");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const get = async (path) => (await fetch(`https://${HOST}${path}`, { cache: "no-store" })).text();

try { await fetch(`https://${HOST}/build.txt`, { cache: "no-store" }); }
catch { console.log(`${HOST} is not serving yet (pre-launch); nothing to submit.`); process.exit(0); }

if (process.env.EXPECT_SHA) {
  for (let i = 0; ; i++) {
    const live = (await get("/build.txt").catch(() => "")).split("\n")[0];
    if (live === process.env.EXPECT_SHA) break;
    if (i >= 60) throw new Error(`commit ${process.env.EXPECT_SHA} never went live; check Workers Builds`);
    console.log(`live build is ${live.slice(0, 7) || "?"}, waiting (${i + 1}/60)`);
    await sleep(30_000);
  }
}
for (let i = 0; (await get(`/${KEY}.txt`).catch(() => "")).trim() !== KEY; i++) {
  if (i >= 20) throw new Error("IndexNow key file never became reachable");
  await sleep(30_000);
}

const index = await get("/sitemap-index.xml");
const entries = [];
for (const [, loc] of index.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const xml = await (await fetch(loc, { cache: "no-store" })).text();
  for (const m of xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>(?:\s*<lastmod>([^<]+)<\/lastmod>)?/g))
    entries.push({ loc: m[1], lastmod: m[2] ? Date.parse(m[2]) : 0 });
}
const cutoff = Date.now() - RECENT_DAYS * 864e5;
const urlList = all ? entries.map((e) => e.loc) : [...new Set([`https://${HOST}/`, ...entries.filter((e) => e.lastmod >= cutoff).map((e) => e.loc)])];
console.log(`submitting ${urlList.length} URL(s):\n${urlList.join("\n")}`);
if (dryRun) process.exit(0);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow responded ${res.status} ${res.statusText}`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
