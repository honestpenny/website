// Honest Penny — single source of truth for identity and messaging.
// Every page and llms.txt is tested against this file (e2e/messaging.spec.ts).
// Change copy HERE on purpose, never by editing one page (C2C LESSONS §47/§49: drift).

export const site = {
  name: "Honest Penny",
  url: "https://honestpenny.ca",
  locale: "en-CA",
  region: "Alberta, Canada",
  // DECISION PENDING (Kevin): the one-line promise. Draft:
  tagline: "Honest money help for Albertans. No paid placements. Every number sourced.",
  description:
    "Free, plain-language guides that help Albertans cut bills, claim benefits they're owed and build savings, with every figure linked to its official source.",
  // Decided 2026-11-24: team byline, no personal name, no link to the founder's other business.
  // Never invent a named persona (Google treats fake authors as deceptive). To add a real named
  // writer or a qualified reviewer (e.g. CFP/QAFP), set `reviewer` and add them to /about/.
  author: {
    name: "Honest Penny team",
    role: "Editorial team",
    url: "/about/",
  },
  reviewer: null as null | { name: string; credential: string },
  contactEmail: "hello@honestpenny.ca",
  // CASL: every commercial email must include a valid mailing address. DECISION PENDING before the
  // first email: use a PO box or virtual mailbox, NOT the founder's other business address.
  legalAddress: "Alberta, Canada",
} as const;

/**
 * Phrases (regular expressions, matched case-insensitively on word boundaries) that must never appear in visible copy or llms.txt.
 * Each has a reason so nobody "fixes" the test by deleting the rule.
 */
export const BANNED_PHRASES: { phrase: string; why: string }[] = [
  { phrase: "guaranteed(?! income supplement)", why: "No money outcome is guaranteed; regulators treat this as misleading. (The program name Guaranteed Income Supplement is allowed.)" },
  { phrase: "risk-free", why: "Nothing that earns a return is risk-free." },
  { phrase: "best rate in canada", why: "Unprovable superlative; rates change daily." },
  { phrase: "you should buy", why: "Tailored security recommendations need registration (NI 31-103 s.8.25). Explain options instead." },
  { phrase: "unlock (your|the|a|new)(?! (phone|device))", why: "AI-template filler ('unlock your potential'). Unlocking a phone is fine." },
  { phrase: "empower", why: "AI-template filler." },
  { phrase: "seamless", why: "AI-template filler." },
  { phrase: "elevate", why: "AI-template filler." },
  { phrase: "delve", why: "AI-template filler." },
  { phrase: "your financial journey", why: "AI-template filler." },
  { phrase: "game-changer", why: "Hype." },
  { phrase: "experts say", why: "Name the source or don't say it." },
  { phrase: "lorem ipsum", why: "Placeholder text shipped." },
  { phrase: "todo", why: "Unfinished copy shipped." },
  { phrase: "carbon rebate", why: "Ended April 2025. Only mention inside an explicitly dated historical note via the 'history' component (exempt)." },
];

/** Guides older than this (days since lastChecked) fail the freshness test. */
export const MAX_GUIDE_AGE_DAYS = 120;
