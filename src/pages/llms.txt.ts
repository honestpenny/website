// llms.txt — cheap hygiene, unproven value (Ahrefs 2026: 97% get no requests). Built from content, never hand-edited.
import { getCollection } from "astro:content";
import { site } from "../lib/site";
export const prerender = true;
export async function GET() {
  const guides = await getCollection("guides", ({ data }) => !data.draft);
  const lines = [
    `# ${site.name}`, "", `> ${site.description}`, "",
    "General information for people in Alberta and Canada, not personal financial advice. Every figure links to an official source with the date it was checked.", "",
    "## Guides", ...guides.map((g) => `- [${g.data.title}](${site.url}/guides/${g.id}/): ${g.data.summary} (facts checked ${g.data.lastChecked.toISOString().slice(0, 10)})`), "",
    "## About", `- [Editorial code](${site.url}/editorial-code/)`, `- [How we make money](${site.url}/how-we-make-money/)`, `- [How we check facts and use AI](${site.url}/how-we-check-facts/)`, "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
