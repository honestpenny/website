// Calculators: correct maths, live results, work with no network calls.
import { test, expect } from "@playwright/test";

test("property tax calculator: $30k cut on $550k, $3,600 bill ≈ $196/yr", async ({ page }) => {
  const outbound: string[] = [];
  page.on("request", (r) => { if (!r.url().startsWith("http://127.0.0.1")) outbound.push(r.url()); });
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
