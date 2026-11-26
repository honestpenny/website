// "What's new": dated, plain-language money news for Albertans. Official sources only. Every item says what it means
// and what to do, and whether it's law yet. Newest first. Add items via /newsroom; never invent or round up facts.
export interface NewsItem {
  id: string; date: string; title: string; summary: string; todo?: string;
  status?: "proposed" | "passed-not-in-force" | "in-force" | "announcement";
  source: { title: string; publisher: string; url: string }; related?: { href: string; label: string }[];
}

export const NEWS: NewsItem[] = [
  { id: "alberta-bill-41-care-first", date: "2026-11-25", status: "passed-not-in-force",
    title: "Final Care-First insurance changes pass third reading in Alberta, and the rate board answers premium questions",
    summary: "Bill 41, which makes the last law changes needed for Care-First car insurance to start on January 1, 2027, passed third reading on November 25 (Royal Assent wasn't recorded yet). The same day, the Automobile Insurance Rate Board published answers on premiums: your policy's start date decides which pricing applies, renewal notices usually come 45 to 60 days ahead, the average car premium is expected to fall about 13.7%, and the new 10% renewal cap doesn't limit the change from 2026 to 2027.",
    todo: "Renewed or bought car insurance between September 1 and December 31, 2026? The rate board expects insurers to offer a prorated Care-First rewrite if you ask the same insurer between January 1 and March 31, 2027 (Bulletin 07-2026). Ask for the price first. Motorcycle premiums are expected to rise under Care-First, so riders shouldn't ask.",
    source: { title: "Care-First: your premium questions answered", publisher: "Automobile Insurance Rate Board", url: "https://www.airbfordrivers.ca/care-first-your-premium-questions-answered/" },
    related: [{ href: "/car-insurance-renewal-check/", label: "Check your renewal" }, { href: "/guides/alberta-car-home-insurance/", label: "Car and home insurance guide" }] },
  { id: "red-seal-completion-bonus", date: "2026-11-24", status: "in-force",
    title: "$5,000 Red Seal Completion Bonus: first payments in early December",
    summary: "The federal government says approved applicants will start receiving the $5,000 Red Seal Completion Bonus in early December. It's for apprentices who earned Red Seal certification on or after April 1, 2025 (trade qualifiers can apply from July 2027). Applications opened November 16.",
    todo: "Certified between April 1, 2025 and November 15, 2026? Apply by May 31, 2027. Certified later? Apply within 12 months.",
    source: { title: "$5,000 Red Seal Completion Bonus payments to start landing in early December", publisher: "Employment and Social Development Canada", url: "https://www.canada.ca/en/employment-social-development/news/2026/11/5000-team-canada-strong-red-seal-completion-bonus-payments-to-start-landing-in-bank-accounts-of-approved-applicants-in-early-december.html" } },
  { id: "bill-c-42-groceries-top-up", date: "2026-11-16", status: "proposed",
    title: "Proposed one-time top-up to the Canada Groceries and Essentials Benefit",
    summary: "Bill C-42 would add a one-time payment worth 50% of the 2026-27 Canada Groceries and Essentials Benefit: up to $339 for a single person and up to $679 for a couple with two children, paid in early 2027. It passed the House of Commons on November 20 and is now in the Senate, so it isn't law yet. The regular payment is still scheduled for January 5, 2027. No date has been set for the top-up.",
    todo: "Nothing to apply for: if it passes, it goes to people who already get the benefit. Make sure your 2025 tax return is filed.",
    source: { title: "Government of Canada tables plan to ease grocery costs", publisher: "Department of Finance Canada", url: "https://www.canada.ca/en/department-finance/news/2026/11/government-of-canada-tables-plan-to-ease-grocery-costs-support-homeownership-and-encourage-new-home-construction.html" },
    related: [{ href: "/check/", label: "Check what you're owed" }] },
  { id: "alberta-bill-34-consumer", date: "2026-11-18", status: "passed-not-in-force",
    title: "Alberta passes lemon law, credit freezes and right-to-repair (not in force yet)",
    summary: "Bill 34 passed third reading on November 18 (Royal Assent wasn't recorded yet). It adds a vehicle lemon law (covering 3 years or 60,000 km, for defects that fail repair repeatedly or keep a vehicle in the shop for more than 30 days), lets Albertans freeze their credit files, adds right-to-repair rules, and requires all-in prices for resale tickets. None of it applies until it's proclaimed, and no date has been set. The details will come in regulations after consultation.",
    todo: "Buying a vehicle now? Today's rules still apply: there's no cooling-off period.",
    source: { title: "Protecting consumers and property rights", publisher: "Government of Alberta", url: "https://www.alberta.ca/protecting-consumers-and-property-rights" },
    related: [{ href: "/guides/negotiate-car-price-alberta-ai/", label: "How to negotiate a car price" }] },
  { id: "competition-bureau-fake-urgency", date: "2026-11-18", status: "announcement",
    title: "Black Friday warning: the Competition Bureau is investigating \"sale\" prices and urgency claims at Old Navy and Gap",
    summary: "A court ordered Old Navy and Gap to hand over records in a Competition Bureau investigation into whether \"regular\" prices were real, and into countdown timers, \"only a few left\" and \"people are viewing this\" claims. There's no finding of wrongdoing yet, but it's a useful reminder for Black Friday.",
    todo: "Compare the sale price with what the item actually sold for recently, and ignore countdown timers.",
    source: { title: "Old Navy and Gap marketing practices investigation to advance", publisher: "Competition Bureau Canada", url: "https://www.canada.ca/en/competition-bureau/news/2026/11/old-navy-and-gap-marketing-practices-investigation-to-advance-upon-court-order.html" } },
  { id: "october-2026-cpi", date: "2026-11-16", status: "announcement",
    title: "Inflation was 3.1% in October (Canada-wide); cell plans got cheaper",
    summary: "Prices were 3.1% higher than a year earlier in October, the same as in September (2.0% without energy). Gasoline was up 30.9% and groceries 2.0%, while cellular plans were down 6.2%.",
    todo: "If your phone bill hasn't fallen, check whether a cheaper plan or brand fits you.",
    source: { title: "Consumer Price Index, October 2026", publisher: "Statistics Canada", url: "https://www150.statcan.gc.ca/n1/daily-quotidien/261116/dq261116a-eng.htm" },
    related: [{ href: "/guides/cut-phone-internet-bills-alberta/", label: "Cut your phone and internet bills" }] },
  { id: "calgary-2027-budget", date: "2026-11-10", status: "proposed",
    title: "Calgary's proposed 2027 budget would raise a typical home's municipal property tax by about $37 a month",
    summary: "The City of Calgary's proposed 2027 budget would raise municipal property tax revenue by 15%. For a typical home, the City estimates about $37 a month more in municipal property tax and $16 more for water, waste and recycling. Council debates it in late November and approves it in December. 2027 assessment notices go out in January.",
    todo: "When your assessment notice arrives in January, check it: you get 67 days to question it.",
    source: { title: "The City releases proposed 2027-2030 budget", publisher: "City of Calgary", url: "https://newsroom.calgary.ca/the-city-releases-proposed-20272030-budget-focused-on-calgarians-priorities/" },
    related: [{ href: "/guides/challenge-property-assessment-alberta/", label: "Challenge your property assessment" }, { href: "/guides/how-to-build-a-budget/", label: "Build a budget" }] },
  { id: "alberta-energy-rebate-ends", date: "2026-11-25", status: "announcement",
    title: "Reminder: no Alberta Energy Rebate payments after November 30",
    summary: "The Government of Alberta's program page (checked November 25) says no Alberta Energy Rebate payments will be made after November 30, 2026. Separately, the natural gas rebate isn't paying out for November: the Alberta price was $1.99 per GJ, well below the $6.50 trigger.",
    source: { title: "Alberta Energy Rebate", publisher: "Government of Alberta", url: "https://www.alberta.ca/alberta-energy-rebate" },
    related: [{ href: "/guides/alberta-natural-gas-fixed-or-default/", label: "Natural gas guide" }, { href: "https://www.alberta.ca/natural-gas-rebate-program", label: "Natural gas rebate program" }] },
];

export const STATUS_LABEL: Record<string, string> = {
  proposed: "Proposed, not law yet", "passed-not-in-force": "Passed, not in force yet", "in-force": "In effect", announcement: "Announcement",
};
export const newsSorted = () => [...NEWS].sort((a, b) => b.date.localeCompare(a.date));
