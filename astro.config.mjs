// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Static output only. Every page and calculator is plain HTML (+ tiny vanilla JS),
// so Cloudflare serves it as free, unlimited static assets. See CLAUDE.md "Hosting".
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
    }),
  ],
});
