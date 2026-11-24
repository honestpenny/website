// Every published guide must show where it applies, when it was checked, and its sources.
import { test, expect } from "@playwright/test";
import { MAX_GUIDE_AGE_DAYS } from "../src/lib/site";
import { sitemapPaths } from "./helpers";

test("every guide shows applies-to, checked date (fresh), and linked sources", async ({ request }) => {
  test.skip(test.info().project.name !== "desktop");
  const guides = (await sitemapPaths(request)).filter((p) => /^\/guides\/.+\//.test(p));
  expect(guides.length, "at least one published guide").toBeGreaterThan(0);
  const problems: string[] = [];
  for (const p of guides) {
    const html = await (await request.get(p)).text();
    if (!html.includes('data-testid="applies-to"')) problems.push(`${p}: no "applies to" line`);
    const checked = html.match(/<time data-testid="last-checked" datetime="([^"]+)"/)?.[1];
    if (!checked) problems.push(`${p}: no last-checked date`);
    else if ((Date.now() - Date.parse(checked)) / 864e5 > MAX_GUIDE_AGE_DAYS) problems.push(`${p}: last checked ${checked}, overdue`);
    const sources = [...html.matchAll(/<li data-testid="source"[\s\S]*?href="([^"]+)"/g)].map((m) => m[1]);
    if (sources.length < 2) problems.push(`${p}: fewer than 2 sources`);
    for (const s of sources) if (!s.startsWith("https://")) problems.push(`${p}: source not https: ${s}`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});
