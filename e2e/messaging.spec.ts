// Messaging + trust integrity: walks EVERY sitemap URL and llms.txt.
// If this fails, fix the page, or change src/lib/site.ts on purpose.
import { test, expect } from "@playwright/test";
import { BANNED_PHRASES, site } from "../src/lib/site";
import { sitemapPaths, visibleText } from "./helpers";

test.describe("Messaging and trust", () => {
  test.beforeEach(() => test.skip(test.info().project.name !== "desktop", "HTTP-only checks run once"));

  test("no banned phrase on any page or in llms.txt", async ({ request }) => {
    const problems: string[] = [];
    const llms = await (await request.get("/llms.txt")).text();
    const sources: [string, string][] = [["/llms.txt", llms.toLowerCase()]];
    for (const p of await sitemapPaths(request)) {
      const res = await request.get(p);
      expect(res.status(), p).toBe(200);
      sources.push([p, visibleText(await res.text()).toLowerCase()]);
    }
    for (const [p, text] of sources)
      for (const { phrase, why } of BANNED_PHRASES)
        if (new RegExp(`\\b${phrase.replace(/[-]/g, "\\-")}\\b`).test(text)) problems.push(`${p}: "${phrase}" — ${why}`);
    expect(problems, problems.join("\n")).toEqual([]);
  });

  test("every page: one h1, description, canonical, en-CA, footer trust links", async ({ request }) => {
    const problems: string[] = [];
    for (const p of await sitemapPaths(request)) {
      const html = await (await request.get(p)).text();
      if ((html.match(/<h1[\s>]/g) ?? []).length !== 1) problems.push(`${p}: needs exactly one <h1>`);
      if (!/<meta name="description" content="[^"]{50,}"/.test(html)) problems.push(`${p}: description missing or < 50 chars`);
      if (!html.includes(`<link rel="canonical" href="${site.url}${p}"`)) problems.push(`${p}: canonical wrong`);
      if (!/<html lang="en-CA"/.test(html)) problems.push(`${p}: lang must be en-CA`);
      for (const href of ["/editorial-code/", "/how-we-make-money/", "/corrections/", "/terms/", "/privacy/"])
        if (!html.includes(`href="${href}"`)) problems.push(`${p}: footer missing ${href}`);
    }
    expect(problems, problems.join("\n")).toEqual([]);
  });
});
