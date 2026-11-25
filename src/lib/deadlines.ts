// Every dated deadline on the site comes from guide front matter (one source of truth, already fact-checked).
// Used by the home page, /dates/ and the add-to-calendar files (/dates/<id>.ics).
import { getCollection } from "astro:content";
import { isoDate } from "./format";
import { site } from "./site";

export interface Deadline { id: string; date: Date; label: string; short?: string; approximate: boolean; guideId: string; guideTitle: string; topic: string }

export async function allDeadlines(): Promise<Deadline[]> {
  const guides = await getCollection("guides", ({ data }) => !data.draft);
  return guides
    .flatMap((g) => g.data.deadlines.map((d) => ({
      id: `${isoDate(d.date)}-${g.id}`.slice(0, 80),
      date: d.date, label: d.label.replace(/\.?$/, "."), short: d.short, approximate: d.approximate,
      guideId: g.id, guideTitle: g.data.title, topic: g.data.topic,
    })))
    .sort((a, b) => +a.date - +b.date);
}

export const isPast = (d: Date, now = new Date()) => isoDate(d) < isoDate(now);

const ymd = (d: Date) => isoDate(d).replaceAll("-", "");
const nextDay = (d: Date) => new Date(+d + 864e5);
/** Calendar title: the label's first sentence, without brackets, cut at a word boundary to about 60 characters. */
export const calTitle = (d: Deadline) => {
  if (d.short) return d.short;
  const first = d.label.split(/\.\s/)[0].replace(/\s*\([^)]*\)/g, "").replace(/\.$/, "").trim();
  return first.length <= 64 ? first : first.slice(0, 60).replace(/\s+\S*$/, "") + "…";
};

export function googleLink(d: Deadline) {
  const p = new URLSearchParams({ action: "TEMPLATE", text: calTitle(d), dates: `${ymd(d.date)}/${ymd(nextDay(d.date))}`,
    details: `${d.label}\n\nGuide: ${site.url}/guides/${d.guideId}/` });
  return `https://calendar.google.com/calendar/render?${p}`;
}
export function outlookLink(d: Deadline) {
  const p = new URLSearchParams({ path: "/calendar/action/compose", rru: "addevent", subject: calTitle(d), allday: "true",
    startdt: isoDate(d.date), enddt: isoDate(nextDay(d.date)), body: `${d.label}\n\nGuide: ${site.url}/guides/${d.guideId}/` });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${p}`;
}

/** RFC 5545 all-day event with a reminder 3 days before. Lines folded at 75 octets, CRLF endings. */
export function ics(d: Deadline, now = new Date()) {
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/;/g, "\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
  const fold = (line: string) => { const out: string[] = []; let s = line; while (s.length > 74) { out.push(s.slice(0, 74)); s = " " + s.slice(74); } out.push(s); return out.join("\r\n"); };
  const stamp = now.toISOString().replace(/[-:]/g, "").replace(/\.\d+Z$/, "Z");
  return [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Honest Penny//Key dates//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
    "BEGIN:VEVENT", `UID:${d.id}@honestpenny.ca`, `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${ymd(d.date)}`, `DTEND;VALUE=DATE:${ymd(nextDay(d.date))}`,
    `SUMMARY:${esc(calTitle(d))}`,
    `DESCRIPTION:${esc(`${d.approximate ? "Approximate date. " : ""}${d.label} Check the official source before you act. Guide: ${site.url}/guides/${d.guideId}/`)}`,
    `URL:${site.url}/guides/${d.guideId}/`, "TRANSP:TRANSPARENT",
    "BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${esc(calTitle(d))}`, "TRIGGER:-P3D", "END:VALARM",
    "END:VEVENT", "END:VCALENDAR", "",
  ].map(fold).join("\r\n");
}
