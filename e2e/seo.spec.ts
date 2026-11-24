// Search + AI visibility. The decided policy: search/answer bots in, training bots out.
import { test, expect } from "@playwright/test";
import { sitemapPaths } from "./helpers";

test.describe("Search and AI visibility", () => {
  test.beforeEach(() => test.skip(test.info().project.name !== "desktop", "HTTP-only checks run once"));

  test("robots.txt: search and answer bots allowed, training bots disallowed", async ({ request }) => {
    // Fetch raw text (not page.goto, which tests the browser's viewer — C2C LESSONS §21).
    const robots = await (await request.get("/robots.txt")).text();
    expect(robots).toContain("ai-input=yes");
    expect(robots).toContain("ai-train=no");
    const group = (bot: string) => {
      const i = robots.indexOf(`User-agent: ${bot}\n`);
      expect(i, `${bot} named in robots.txt`).toBeGreaterThan(-1);
      return robots.slice(i).split(/\n\n/)[0];
    };
    for (const bot of ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot"])
      expect(group(bot), bot).toMatch(/\nAllow: \//);
    for (const bot of ["GPTBot", "ClaudeBot", "Google-Extended", "CCBot"]) expect(group(bot), bot).toMatch(/\nDisallow: \/\n?/);
    expect(robots).toContain("Sitemap: https://honestpenny.ca/sitemap-index.xml");
  });

  test("llms.txt and build.txt exist", async ({ request }) => {
    const llms = await request.get("/llms.txt");
    expect(llms.status()).toBe(200);
    expect(await llms.text()).toMatch(/^# Honest Penny/);
    const build = await request.get("/build.txt");
    expect(build.status()).toBe(200);
  });

  test("structured data: Organization on home, Article with author on every guide", async ({ request }) => {
    const home = await (await request.get("/")).text();
    expect(home).toContain('"@type":"Organization"');
    for (const p of (await sitemapPaths(request)).filter((p) => /^\/guides\/.+\//.test(p))) {
      const html = await (await request.get(p)).text();
      expect(html, p).toContain('"@type":"Article"');
      expect(html, p).toMatch(/"author":\{"@type":"(Person|Organization)","name":"[^"]+"/);
      expect(html, p).toContain('"dateModified"');
    }
  });

  test("404 page returns 404 status", async ({ request }) => {
    const res = await request.get("/this-page-does-not-exist/");
    expect(res.status()).toBe(404);
  });
});
