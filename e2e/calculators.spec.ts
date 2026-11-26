// Calculators: correct maths, live results, work with no network calls.
import { test, expect } from "@playwright/test";

test("property tax calculator: $30k cut on $550k, $3,600 bill ≈ $196/yr", async ({ page, baseURL }) => {
  // "Outbound" = any request to another origin (works locally and with TEST_URL against the live site).
  const origin = new URL(baseURL!).origin;
  const outbound: string[] = [];
  // Cloudflare Web Analytics (page views only, disclosed on /privacy/) is allowed; anything else is a leak.
  page.on("request", (r) => { const u = r.url(); if (!u.startsWith(origin) && !u.startsWith("data:") && !/^https:\/\/(static\.)?cloudflareinsights\.com\//.test(u)) outbound.push(u); if (/cloudflareinsights/.test(u) && /ptc-|income|assess/i.test(r.postData() ?? "")) outbound.push("analytics carried form data: " + u); });
  await page.goto("/guides/challenge-property-assessment-alberta/");
  const out = page.locator('[data-calc="property-tax"] [data-out]');
  await expect(out).toContainText("$196 less a year");
  await page.fill("#ptc-fair", "560000");
  await expect(out).toContainText("not lower than your assessment");
  expect(outbound, "calculators must not send data anywhere").toEqual([]);
});

test("electricity calculator: 600 kWh, 12.06 vs 11.50 ≈ $40/yr saving", async ({ page }) => {
  await page.goto("/guides/alberta-electricity-rate-2027/");
  const out = page.locator('[data-calc="electricity"] [data-out]');
  await expect(out).toContainText("save about $40 a year");
  await page.fill("#ec-admin", "5");
  await expect(out).toContainText("cost about $20 more a year");
});

test("tax calculator: $70,000 Alberta 2026 ≈ $12,197; $5,000 RRSP saves ≈ $1,525", async ({ page }) => {
  await page.goto("/guides/alberta-income-tax-brackets-2026/");
  const out = page.locator('[data-calc="tax"] [data-out]');
  await expect(out).toContainText("$12,197");
  await expect(out).toContainText("30.5%");
  await expect(out).toContainText("cut your tax by about $1,525");
});

test("tax calculator 2027: $70,000 Alberta ≈ $11,978 (indexed brackets)", async ({ page }) => {
  await page.goto("/guides/alberta-income-tax-brackets-2027/");
  await expect(page.locator('[data-calc="tax"] [data-out]')).toContainText("$11,978");
});

test("RRSP withdrawal calculator: $10,000 on $70,000 → $2,000 withheld, ≈ $1,050 more at filing, keep ≈ $6,950", async ({ page }) => {
  await page.goto("/guides/rrsp-tfsa-non-registered-withdrawals/");
  const out = page.locator('[data-calc="withdrawal"] [data-out]');
  await expect(out).toContainText("$2,000");
  await expect(out).toContainText("$1,050 more");
  await expect(out).toContainText("$6,950");
});

test("budget planner: mixed frequencies convert to monthly and split into three accounts; saved on reload", async ({ page }) => {
  await page.goto("/budget/");
  await page.fill("#income-0", "2000");
  await page.getByLabel("How often: Take-home pay").selectOption("2weeks");
  await page.fill("#fixed-0", "1500");
  await page.fill("#variable-0", "150");
  await page.getByLabel("How often: Groceries").selectOption("week");
  await page.fill("#irregular-0", "102");
  await expect(page.locator('[data-t="income"]')).toHaveText("$4,333");
  await expect(page.locator('[data-t="left"]')).toHaveText("$2,175");
  await expect(page.locator('[data-a="bills"]')).toHaveText("$1,509");
  await expect(page.locator('[data-a="spending"]')).toHaveText("$650");
  await page.reload();
  await expect(page.locator("#income-0")).toHaveValue("2000");
  await expect(page.locator('[data-t="left"]')).toHaveText("$2,175");
});
