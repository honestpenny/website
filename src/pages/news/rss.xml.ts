// RSS for "What's new": lets readers (and AI tools) follow announcements. Generated from src/data/news.ts.
import { newsSorted, STATUS_LABEL } from "../../data/news";
import { site } from "../../lib/site";
export const prerender = true;
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export function GET() {
  const items = newsSorted().map((n) => `<item><title>${esc(n.title)}</title><link>${site.url}/news/#${n.id}</link><guid isPermaLink="false">${n.id}</guid><pubDate>${new Date(n.date + "T12:00:00Z").toUTCString()}</pubDate><description>${esc(`${n.status ? STATUS_LABEL[n.status] + ". " : ""}${n.summary}${n.todo ? " What to do: " + n.todo : ""} Source: ${n.source.publisher}, ${n.source.url}`)}</description></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Honest Penny: what's new</title><link>${site.url}/news/</link><description>Official money announcements for Albertans and Canadians, in plain language.</description><language>en-ca</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
