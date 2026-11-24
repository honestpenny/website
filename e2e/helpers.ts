import { expect, type APIRequestContext } from "@playwright/test";

export const decode = (s: string) =>
  s
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

/** Visible text plus meta description; scripts, styles and elements marked data-history removed. */
export function visibleText(html: string): string {
  const meta = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const body = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]*data-history[^>]*>[\s\S]*?<\/aside>/g, " ")
    .replace(/<[^>]+>/g, " ");
  return decode(`${meta} ${body}`).replace(/\s+/g, " ");
}

/** Every page path in the built sitemap (self-referring: new pages are covered automatically). */
export async function sitemapPaths(request: APIRequestContext): Promise<string[]> {
  const index = await (await request.get("/sitemap-index.xml")).text();
  const maps = [...index.matchAll(/<loc>https:\/\/honestpenny\.ca([^<]*)<\/loc>/g)].map((m) => m[1]);
  const paths: string[] = [];
  for (const m of maps) {
    const xml = await (await request.get(m)).text();
    paths.push(...[...xml.matchAll(/<loc>https:\/\/honestpenny\.ca([^<]*)<\/loc>/g)].map((x) => x[1] || "/"));
  }
  expect(paths.length, "sitemap lists pages").toBeGreaterThan(5);
  return paths;
}
