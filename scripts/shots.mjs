// Screenshots for a human design review: node scripts/shots.mjs <outdir>
import { chromium } from "@playwright/test";
const out = process.argv[2];
const b = await chromium.launch();
for (const [name, vp] of [["desktop", { width: 1280, height: 900 }], ["phone", { width: 375, height: 800 }]]) {
  const p = await b.newPage({ viewport: vp });
  for (const path of ["/", "/guides/challenge-property-assessment-alberta/"]) {
    await p.goto(`http://127.0.0.1:4321${path}`);
    await p.screenshot({ path: `${out}/${name}${path.replace(/\//g, "_")}.png`, fullPage: name === "phone" ? false : true });
  }
}
await b.close();
