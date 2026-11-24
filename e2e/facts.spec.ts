// Fact registry: every number is official-sourced, fresh, and links to its source wherever it's shown.
import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { sitemapPaths } from "./helpers";

// Minimal YAML read: ids, source urls and reviewBy dates (the build's zod schema validates the full shape).
const yaml = readFileSync("src/data/facts.yaml", "utf8");
const facts = [...yaml.matchAll(/^([a-z0-9-]+):\n([\s\S]*?)(?=^\S|$(?![\s\S]))/gm)].map((m) => ({
  id: m[1],
  url: m[2].match(/url: "([^"]+)"/)?.[1] ?? "",
  reviewBy: m[2].match(/reviewBy: (\S+)/)?.[1] ?? "",
}));
const OFFICIAL = /^https:\/\/(www\.)?([a-z0-9-]+\.)*(canada\.ca|gc\.ca|alberta\.ca|calgary\.ca|edmonton\.ca|institutpf\.org|fpcanada\.ca)\//;

test("every fact is from an official source and not past its review date", () => {
  test.skip(test.info().project.name !== "desktop");
  expect(facts.length).toBeGreaterThan(5);
  const problems: string[] = [];
  const today = new Date().toISOString().slice(0, 10);
  for (const f of facts) {
    if (!OFFICIAL.test(f.url)) problems.push(`${f.id}: source is not an official domain: ${f.url}`);
    if (!f.reviewBy || f.reviewBy < today) problems.push(`${f.id}: review overdue (reviewBy ${f.reviewBy}). Re-check at source, update checked/reviewBy.`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

test("every fact shown on a page links to its official source", async ({ request }) => {
  test.skip(test.info().project.name !== "desktop");
  const problems: string[] = [];
  for (const p of await sitemapPaths(request)) {
    const html = await (await request.get(p)).text();
    for (const m of html.matchAll(/<span class="fact[^"]*" data-fact="([^"]+)"[^>]*>([\s\S]*?)<\/span>/g)) {
      const f = facts.find((x) => x.id === m[1]);
      if (!f) problems.push(`${p}: unknown fact ${m[1]}`);
      else if (!m[2].includes(`href="${f.url}"`)) problems.push(`${p}: fact ${m[1]} shown without its source link`);
    }
    for (const m of html.matchAll(/<a href="([^"]+)"[^>]*data-official/g))
      if (!m[1].startsWith("https://")) problems.push(`${p}: official link not https: ${m[1]}`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});
