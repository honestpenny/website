// Ledger & Patina signature features: quiz, calendar files, steps tracker, stamp, guess-then-reveal, house style.
import { test, expect } from "@playwright/test";
import { BENEFITS, matches, REVIEW_BY } from "../src/data/benefits";
import { sitemapPaths } from "./helpers";

const desktopOnly = () => test.skip(test.info().project.name !== "desktop", "behaviour check runs once");

test("quiz rules: Alberta-only items hidden outside Alberta, kids unlock child benefits, 'not sure' never hides", () => {
  const ids = (a: Record<string, string>) => BENEFITS.filter((b) => matches(b, a) && !(b.alberta && a.where === "other")).map((b) => b.id);
  const ab = ids({ where: "ab", age: "19to64", kids: "yes", work: "yes", income: "low", disability: "no", dental: "no" });
  expect(ab[0]).toBe("file");
  for (const id of ["ccb", "acfb", "cwb", "clb", "cdcp", "cgeb"]) expect(ab, id).toContain(id);
  for (const id of ["oas", "gis", "asb", "dtc"]) expect(ab, id).not.toContain(id);
  const other = ids({ where: "other", age: "65plus", kids: "no", work: "no", income: "low", disability: "no", dental: "yes" });
  for (const id of ["oas", "gis", "connecting"]) expect(other, id).toContain(id);
  for (const id of ["asb", "sptdp", "acfb", "cdcp"]) expect(other, id).not.toContain(id);
  const unsure = ids({ where: "ab", age: "19to64", kids: "no", work: "no", income: "notsure", disability: "notsure", dental: "notsure" });
  for (const id of ["dtc", "cdcp", "cgeb", "clinic"]) expect(unsure, id).toContain(id);
  expect(new Date().toISOString().slice(0, 10) <= REVIEW_BY, `benefits list overdue for re-check (review by ${REVIEW_BY})`).toBe(true);
  for (const b of BENEFITS) expect(b.url, b.id).toMatch(/^https:\/\/(www\.)?(canada\.ca|alberta\.ca|ised-isde\.canada\.ca)\//);
});

test("quiz flow: one question at a time, focus on the question, back works, results first, answers kept", async ({ page }) => {
  await page.goto("/check/");
  await expect(page.locator("[data-all]")).toBeHidden();
  await page.getByRole("button", { name: /Start now/ }).click();
  await expect(page.locator("[data-q]")).toBeFocused();
  await expect(page.locator("[data-progress]")).toHaveText("Question 1 of 7");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.locator("[data-err]")).toBeVisible();
  const pick = async (label: string) => { await page.getByLabel(label, { exact: true }).check(); await page.getByRole("button", { name: "Continue" }).click(); };
  await pick("Alberta"); await pick("19 to 64");
  await page.getByRole("button", { name: /Back/ }).click();
  await expect(page.locator("[data-progress]")).toHaveText("Question 2 of 7");
  await expect(page.getByLabel("19 to 64", { exact: true })).toBeChecked();
  await page.getByRole("button", { name: "Continue" }).click();
  await pick("Yes"); await pick("Yes"); await pick("Under $40,000"); await pick("No"); await pick("No");
  await expect(page.locator("#res-h")).toBeFocused();
  const items = page.locator("[data-list] li");
  await expect(items.first()).toContainText("File a tax return");
  await expect(page.locator("[data-list]")).toContainText("Alberta Child and Family Benefit");
  await expect(page.locator("[data-list]")).not.toContainText("Old Age Security");
  await page.reload();
  await expect(page.locator("[data-resume]")).toBeVisible();
});

test("key dates: every upcoming date has a valid all-day calendar file with a reminder", async ({ page, request }) => {
  desktopOnly();
  await page.goto("/dates/");
  const links = await page.locator("a[href$='.ics']").evaluateAll((as) => as.map((a) => a.getAttribute("href")!));
  expect(links.length).toBeGreaterThan(2);
  for (const href of links) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
    expect(res.headers()["content-type"], href).toContain("text/calendar");
    const ics = await res.text();
    const day = href.match(/\/(\d{4})-(\d{2})-(\d{2})-/)!;
    expect(ics, href).toContain(`DTSTART;VALUE=DATE:${day[1]}${day[2]}${day[3]}`);
    for (const line of ["BEGIN:VCALENDAR", "BEGIN:VEVENT", "UID:", "DTSTAMP:", "SUMMARY:", "TRIGGER:-P3D", "END:VCALENDAR"]) expect(ics, `${href} ${line}`).toContain(line);
    expect(ics.split("\r\n").every((l) => l.length <= 75), `${href} lines folded`).toBe(true);
  }
});

test("8 Steps tracker: ticks persist across reloads, status updates, clear works", async ({ page }) => {
  await page.goto("/guides/honest-penny-steps/");
  await page.getByLabel(/Build a small cushion/).check();
  await expect(page.locator("[data-tracker] [role=status]")).toHaveText("1 of 8 done.");
  await page.reload();
  await expect(page.getByLabel(/Build a small cushion/)).toBeChecked();
  await page.getByRole("button", { name: "Clear my ticks" }).click();
  await expect(page.locator("[data-tracker] [role=status]")).toHaveText("0 of 8 done.");
});

test("guess then reveal: typed guess (no dragging), real answer from the tax code", async ({ page }) => {
  await page.goto("/guides/alberta-income-tax-brackets-2026/");
  await page.getByLabel("Your guess, in dollars").fill("500");
  await page.getByRole("button", { name: "Show me" }).click();
  await expect(page.locator("[data-guess] [data-out]")).toContainText("$695");
  await expect(page.locator("[data-guess] [data-out]")).toContainText("You keep more than you guessed");
});

test("house style: every guide has the Checked stamp; no all-caps text anywhere; Get help in the header on every page", async ({ page, request }) => {
  desktopOnly();
  test.setTimeout(120_000);
  const problems: string[] = [];
  for (const p of await sitemapPaths(request)) {
    await page.goto(p);
    if (/^\/guides\/.+\//.test(p) && !(await page.locator("[data-testid=stamp]").count())) problems.push(`${p}: no Checked stamp`);
    if (!(await page.locator("header a[href='/get-help/']").count())) problems.push(`${p}: no Get help link in header`);
    const caps = await page.evaluate(() => [...document.querySelectorAll("body *")].filter((e) => getComputedStyle(e).textTransform === "uppercase" && e.textContent!.trim()).map((e) => e.textContent!.trim().slice(0, 30)));
    for (const c of caps) problems.push(`${p}: all-caps text "${c}"`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

test("8 Steps page: find your step, tick earlier steps, progress shared with the guide tracker", async ({ page }) => {
  await page.goto("/steps/");
  await page.locator("[data-f-begin]").click();
  await expect(page.locator("[data-f-q]")).toBeFocused();
  const answer = async (v: string) => { await page.locator("[data-f-opts]").getByLabel(v, { exact: true }).check(); await page.locator("[data-f-step]").getByRole("button", { name: "Continue" }).click(); };
  await answer("Yes"); await answer("Yes"); await answer("Yes"); await answer("No");
  await expect(page.locator("[data-f-res]")).toHaveText(/You're on Step 4/);
  await expect(page.locator("[data-f-res]")).toBeFocused();
  await page.locator("[data-f-tick]").click();
  await expect(page.locator("[data-done]")).toHaveText("3");
  await expect(page.locator("[data-next]")).toContainText("Step 4");
  await page.goto("/guides/honest-penny-steps/");
  await expect(page.locator("[data-tracker] [role=status]")).toHaveText("3 of 8 done.");
});

test("Care-First renewal check: late-2026 car → rewrite tip (same insurer); motorcycle → told not to rewrite; 2027 → no cap promise", async ({ page }) => {
  await page.goto("/car-insurance-renewal-check/");
  const out = page.locator("[data-rc-out]");
  await page.fill("#rc-old", "2000"); await page.fill("#rc-new", "2200");
  await page.getByLabel("Between September 1 and December 31, 2026").check();
  await expect(out).toContainText("same insurer");
  await page.getByLabel("Yes, this renewal is for a motorcycle").check();
  await expect(out).toContainText("Don't ask for a Care-First rewrite on a motorcycle");
  await page.getByLabel("No", { exact: true }).check();
  await page.getByLabel("In 2027 (on or after January 1)").check();
  await expect(out).toContainText("does not limit the change from your 2026 to your 2027 premium");
  await page.getByLabel("Before September 1, 2026").check();
  await expect(out).toContainText("prorated rewrite doesn't apply");
});

test("Phone fee letter: no letter or copy until the fee looks banned and the provider is covered", async ({ page }) => {
  await page.goto("/phone-fee-letter/");
  const copy = page.getByRole("button", { name: "Copy the letter" });
  await expect(copy).toBeDisabled();
  const pick = async (name: string, v: string) => page.locator(`input[name=${name}][value=${v}]`).check();
  await pick("q0", "yes"); await pick("q1", "yes"); await pick("q2", "yes"); await pick("q3", "yes");
  await expect(page.locator("[data-verdict]")).toContainText("may be allowed");
  await expect(copy).toBeDisabled();
  await pick("q2", "no");
  await expect(page.locator("[data-verdict]")).toContainText("likely not allowed");
  await expect(copy).toBeEnabled();
  await page.fill("#fl-provider", "Example Mobile");
  await expect(page.locator("[data-letter]")).toContainText("To Example Mobile");
  await pick("q0", "no");
  await expect(page.locator("[data-verdict]")).toContainText("may not cover your provider");
  await expect(copy).toBeDisabled();
});
