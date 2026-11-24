// Accessibility + calm layout on every page, desktop and 375px phone, reduced motion forced.
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { sitemapPaths } from "./helpers";

test("axe WCAG 2.2 AA, no horizontal scroll, tap targets >= 24px", async ({ page, request }) => {
  test.setTimeout(180_000);
  const problems: string[] = [];
  for (const p of await sitemapPaths(request)) {
    await page.goto(p);
    const r = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    for (const v of r.violations) problems.push(`${p}: ${v.id} (${v.nodes.length}) ${v.help}`);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 1) problems.push(`${p}: horizontal overflow ${overflow}px`);
    const small = await page.evaluate(() =>
      [...document.querySelectorAll("button, input, select, nav a, .button")]
        .filter((el) => {
          const b = el.getBoundingClientRect();
          return b.width > 0 && (b.height < 24 || b.width < 24);
        })
        .map((el) => el.outerHTML.slice(0, 60)),
    );
    for (const s of small) problems.push(`${p}: target under 24px: ${s}`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

test("dark mode passes colour contrast", async ({ page, request }) => {
  test.skip(test.info().project.name !== "desktop");
  await page.emulateMedia({ colorScheme: "dark" });
  const problems: string[] = [];
  for (const p of ["/", "/guides/challenge-property-assessment-alberta/", "/guides/alberta-electricity-rate-2027/", "/guides/honest-penny-steps/"]) {
    await page.goto(p);
    const r = await new AxeBuilder({ page }).withRules(["color-contrast"]).analyze();
    for (const v of r.violations) problems.push(`${p}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});
