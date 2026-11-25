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

  test("share cards: every page has og:image that serves a PNG; guides get their own card", async ({ request }) => {
    for (const p of await sitemapPaths(request)) {
      const html = await (await request.get(p)).text();
      const img = html.match(/<meta property="og:image" content="https:\/\/honestpenny\.ca([^"]+)"/)?.[1];
      expect(img, `${p}: og:image`).toBeTruthy();
      if (/^\/guides\/.+\//.test(p)) expect(img, p).toBe(`/og/${p.split("/")[2]}.png`);
      const res = await request.get(img!);
      expect(res.status(), img).toBe(200);
      expect(res.headers()["content-type"], img).toContain("image/png");
    }
  });

  test("sitemap lastmod for each guide equals the 'facts checked' date on the page", async ({ request }) => {
    const xml = await (await request.get("/sitemap-0.xml")).text();
    for (const [, loc, lastmod] of xml.matchAll(/<loc>https:\/\/honestpenny\.ca(\/guides\/[^<]+\/)<\/loc>\s*<lastmod>([^<]+)</g)) {
      const html = await (await request.get(loc)).text();
      const shown = html.match(/<time data-testid="last-checked" datetime="([^"]+)"/)?.[1];
      expect(lastmod.slice(0, 10), loc).toBe(shown);
    }
  });

  test("entity graph: guides point author and publisher at the one #org id; IndexNow key served", async ({ request }) => {
    const home = await (await request.get("/")).text();
    expect(home).toContain('"@id":"https://honestpenny.ca/#org"');
    for (const p of (await sitemapPaths(request)).filter((p) => /^\/guides\/.+\//.test(p))) {
      const html = await (await request.get(p)).text();
      expect(html, p).toContain('"publisher":{"@id":"https://honestpenny.ca/#org"}');
      expect(html, p).toMatch(/"author":\{[^}]*"@id":"https:\/\/honestpenny\.ca\/#org"/);
    }
    const key = (await import("node:fs")).readFileSync("scripts/indexnow.mjs", "utf8").match(/const KEY = "([0-9a-f]+)"/)![1];
    const res = await request.get(`/${key}.txt`);
    expect(res.status()).toBe(200);
    expect((await res.text()).trim()).toBe(key);
  });

  test("brand: favicon.ico, SVG favicon, apple touch icon and web manifest icons are all served", async ({ request }) => {
    const home = await (await request.get("/")).text();
    for (const tag of ['rel="icon" href="/favicon.ico"', 'rel="icon" href="/favicon.svg"', 'rel="apple-touch-icon"', 'rel="manifest"']) expect(home, tag).toContain(tag);
    const ico = await request.get("/favicon.ico");
    expect(ico.status()).toBe(200);
    expect((await ico.body()).subarray(0, 4).toString("hex"), "ICO header").toBe("00000100");
    const manifest = await (await request.get("/site.webmanifest")).json();
    expect(manifest.name).toBe("Honest Penny");
    for (const i of manifest.icons) expect((await request.get(i.src)).status(), i.src).toBe(200);
    for (const f of ["/apple-touch-icon.png", "/brand/honest-penny-logo.svg", "/brand/honest-penny-mark.png"]) expect((await request.get(f)).status(), f).toBe(200);
  });

  test("404 page returns 404 status", async ({ request }) => {
    const res = await request.get("/this-page-does-not-exist/");
    expect(res.status()).toBe(404);
  });
});
