// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { readdirSync, readFileSync } from "node:fs";

// Static output only. Every page and calculator is plain HTML (+ tiny vanilla JS),
// so Cloudflare serves it as free, unlimited static assets. See CLAUDE.md "Hosting".

// Guide lastmod = the guide's `lastChecked` date, so search engines (and IndexNow) see real freshness.
// e2e/seo.spec.ts checks every guide's sitemap lastmod equals the date shown on the page.
const GUIDE_DIR = new URL("./src/content/guides/", import.meta.url);
const guideLastmod = Object.fromEntries(
  readdirSync(GUIDE_DIR).filter((f) => f.endsWith(".mdx")).map((f) => {
    const fm = readFileSync(new URL(f, GUIDE_DIR), "utf8");
    return [f.replace(/\.mdx$/, ""), fm.match(/^lastChecked:\s*(\S+)/m)?.[1]];
  }),
);

export default defineConfig({
  site: "https://honestpenny.ca",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    mdx(),
    sitemap({
      // Drafts are never built; the 404 page and machine files stay out of the sitemap.
      filter: (page) => !page.includes("/404"),
      serialize(item) {
        const slug = item.url.match(/\/guides\/([^/]+)\/$/)?.[1];
        if (slug && guideLastmod[slug]) item.lastmod = new Date(guideLastmod[slug]).toISOString();
        return item;
      },
    }),
  ],
});
