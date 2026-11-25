import type { CollectionEntry } from "astro:content";

export const TOPICS = [
  { id: "bills", label: "Bills", blurb: "Power, gas, phone, internet and insurance." },
  { id: "housing", label: "Property tax", blurb: "Check your assessment and challenge it." },
  { id: "benefits", label: "Benefits and credits", blurb: "Money you're owed for filing a return." },
  { id: "tax", label: "Tax", blurb: "Brackets, deadlines and what a raise really costs." },
  { id: "savings", label: "Savings and accounts", blurb: "TFSA, RRSP, FHSA, RESP and a plan to use them." },
  { id: "debt", label: "Debt", blurb: "Clear expensive debt, one at a time." },
  { id: "investing", label: "Investing", blurb: "Low-fee basics, without the sales pitch." },
  { id: "travel", label: "Travel", blurb: "Flight delays, cancellations and refunds." },
] as const;

export const topicLabel = (id: string) => TOPICS.find((t) => t.id === id)?.label ?? id;

/** Minutes to read, from the MDX body without imports, components or front matter. 220 words a minute. */
export function readingMinutes(g: CollectionEntry<"guides">): number {
  const text = (g.body ?? "")
    .replace(/^import .*$/gm, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#*|>\-_`[\]()]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 220));
}

export const byChecked = (a: CollectionEntry<"guides">, b: CollectionEntry<"guides">) => +b.data.lastChecked - +a.data.lastChecked;
