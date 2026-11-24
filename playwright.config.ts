import { defineConfig, devices } from "@playwright/test";

// Tests run against the PRODUCTION build served by `astro preview` (what we deploy),
// or against the live site with TEST_URL=https://honestpenny.ca.
// CI = Chromium only (desktop + phone); locally the same two projects. Kevin's
// efficient-testing rule: real prod build, no browser matrix we don't need.
const baseURL = process.env.TEST_URL ?? "http://127.0.0.1:4321";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: { baseURL, trace: "on-first-retry", reducedMotion: "reduce" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "phone", use: { ...devices["Pixel 7"], viewport: { width: 375, height: 740 } } },
  ],
  ...(process.env.TEST_URL
    ? {}
    : {
        webServer: {
          // wrangler dev = Cloudflare's own runtime locally, so _headers and 404 handling apply (unlike astro preview).
          command: "npm run build && npx wrangler dev --port 4321 --ip 127.0.0.1",
          url: "http://127.0.0.1:4321/",
          reuseExistingServer: !process.env.CI,
          timeout: 180_000,
        },
      }),
});
