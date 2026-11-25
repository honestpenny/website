// Interaction + accessibility behaviour axe can't see (patterns from Code To Cloud's a11y/mobile suites).
import { test, expect } from "@playwright/test";
import { sitemapPaths } from "./helpers";

const isPhone = () => test.info().project.name === "phone";

test("menu: disclosure on phone (Escape closes, focus returns); plain nav on desktop", async ({ page }) => {
  await page.goto("/");
  const btn = page.locator(".menu-btn");
  const nav = page.locator("#site-nav");
  if (!isPhone()) {
    await expect(btn).toBeHidden();
    await expect(nav.getByRole("link", { name: "All guides" })).toBeVisible();
    return;
  }
  await expect(btn).toBeVisible();
  await expect(btn).toHaveAttribute("aria-expanded", "false");
  await expect(nav).toBeHidden();
  await btn.click();
  await expect(btn).toHaveAttribute("aria-expanded", "true");
  for (const link of await nav.getByRole("link").all()) {
    const box = (await link.boundingBox())!;
    expect(box.height, await link.innerText()).toBeGreaterThanOrEqual(44);
  }
  await page.keyboard.press("Escape");
  await expect(nav).toBeHidden();
  await expect(btn).toBeFocused();
});

test("skip link is the first Tab stop, shows a focus ring and moves to main", async ({ page }) => {
  test.skip(isPhone());
  await page.goto("/guides/");
  await page.keyboard.press("Tab");
  const skip = page.locator("a.skip");
  await expect(skip).toBeFocused();
  const outline = await skip.evaluate((el) => getComputedStyle(el).outlineStyle + " " + getComputedStyle(el).outlineWidth);
  expect(outline).not.toMatch(/^none|0px$/);
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

test("reflow at 320px (WCAG 1.4.10): no page-level sideways scroll anywhere", async ({ browser, request }) => {
  test.skip(isPhone());
  test.setTimeout(120_000);
  const page = await browser.newPage({ viewport: { width: 320, height: 640 } });
  const problems: string[] = [];
  for (const p of await sitemapPaths(request)) {
    await page.goto(p);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (over > 1) problems.push(`${p}: ${over}px`);
  }
  await page.close();
  expect(problems, problems.join("\n")).toEqual([]);
});

test("guides: tables sit in focusable scroll regions, contents links all resolve", async ({ page, request }) => {
  test.skip(isPhone());
  for (const p of (await sitemapPaths(request)).filter((p) => /^\/guides\/.+\//.test(p))) {
    await page.goto(p);
    const bare = await page.locator("article table").evaluateAll((ts) => ts.filter((t) => !t.closest(".table-wrap[tabindex='0']")).length);
    expect(bare, `${p}: table not in a focusable .table-wrap`).toBe(0);
    const broken = await page.locator(".toc-side a, .toc-inline a").evaluateAll((as) =>
      as.map((a) => a.getAttribute("href")!.slice(1)).filter((id) => !document.getElementById(id)));
    expect(broken, `${p}: contents links to missing ids`).toEqual([]);
  }
});
