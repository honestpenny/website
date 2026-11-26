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
    "## Tools", `- [The 8 Steps](${site.url}/steps/): a Canadian money plan from struggling to building wealth, with a "find your step" checker`,
    `- [Check what you're owed](${site.url}/check/): seven questions, then a checklist of federal and Alberta benefits you might be able to claim, each linked to the official page`,
    `- [Key money dates for Albertans](${site.url}/dates/): every deadline from our guides, with add-to-calendar files`,
    `- [Get help](${site.url}/get-help/): free crisis lines, 211 Alberta, non-profit credit counselling and complaint services`,
    `- [Budget planner](${site.url}/budget/): build a monthly budget and split it across bills, spending and savings accounts; stays on your device`,
    `- [Car insurance renewal check](${site.url}/car-insurance-renewal-check/): how Care-First and the rate caps apply to your Alberta renewal, and what to ask`,
    `- [Phone or internet fee complaint letter](${site.url}/phone-fee-letter/): check a fee against the June 2026 CRTC rules and get a letter to send`,
    `- [Weekly email](${site.url}/email/): what the free weekly email covers`, "",
    "## About", `- [Editorial code](${site.url}/editorial-code/)`, `- [How we make money](${site.url}/how-we-make-money/)`, `- [How we check facts and use AI](${site.url}/how-we-check-facts/)`, `- [Corrections](${site.url}/corrections/)`, "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
