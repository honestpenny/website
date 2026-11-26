# Fact-check: news items and new guide paragraphs (2026-11-25)

Scope: every item in `src/data/news.ts`, plus the new paragraphs in `alberta-car-home-insurance.mdx` (Bill 41 / renewal notices), `negotiate-car-price-alberta-ai.mdx` (lemon law warning) and `challenge-property-assessment-alberta.mdx` ("Calgary, 2027" box). I re-read each official page on 2026-11-25, and I extracted the Alberta bill status report (bsr31-2.pdf, "Activity to Wednesday, November 25, 2026") as text.

Verdicts: CONFIRMED / WRONG / UNSUPPORTED / MISLEADING.

## news.ts: alberta-bill-41-care-first (dated 2026-11-25)

| Claim | File/item | Verdict | Evidence | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| Bill 41 passed third reading November 25; Royal Assent not recorded | news.ts / bill-41 | CONFIRMED | The report shows "Third Reading — (Nov. 25, 2026 aft., passed)" and no Royal Assent line. | https://www.assembly.ab.ca/LAO/Bills/bsr31-2.pdf | — |
| Title: "Care-First car insurance law passes in Alberta" and "Bill 41, which makes the legal changes Care-First car insurance needs" | news.ts / bill-41 | MISLEADING | Care-First's law is the Automobile Insurance Act (Bill 47, Royal Assent May 15, 2025). Bill 41 is the Financial Statutes Amendment Act, 2026 (No. 2). Alberta's release says: "Proposed amendments to seven insurance acts would support the implementation of Care-First." The title also says "passes" while Royal Assent is still pending. | https://www.alberta.ca/announcements.cfm?xID=98152307CC832-0497-C4E1-56376B0A4C28F5AD ; https://www.alberta.ca/enabling-better-auto-insurance | Title: "Final Care-First insurance changes pass third reading in Alberta, and the rate board answers premium questions". Summary, first sentence: "Bill 41, which makes the last law changes needed for Care-First car insurance to start on January 1, 2027, passed third reading on November 25 (Royal Assent wasn't recorded yet)." |
| AIRB published the Q&A "the same day" | news.ts / bill-41 | CONFIRMED | The page metadata says "datePublished":"2026-11-25T16:15:46+00:00". The visible page shows no date. | https://www.airbfordrivers.ca/care-first-your-premium-questions-answered/ | — |
| The policy's start date decides which pricing applies | news.ts / bill-41 | CONFIRMED | The page says: "The effective date of your policy is what matters." | same | Optional: "start (effective) date". |
| Renewal notices usually come 45 to 60 days ahead | news.ts / bill-41 | CONFIRMED | The page says: "Insurance companies send renewal notices 45 to 60 days in advance of your policy renewal date." | same | — |
| The average car premium is expected to fall about 13.7% | news.ts / bill-41 | CONFIRMED | The page says private passenger premiums "are expected to decrease by an average of 13.7%" (about $297 a year). | same | — |
| The 10% renewal cap doesn't limit the change from 2026 to 2027 | news.ts / bill-41 | CONFIRMED | The page says: "renewal premiums for 2027 reflect Care-First pricing without a rate cap." | same | — |
| Todo: "Renewing between September and December 2026? You may be able to ask the same insurer for a prorated Care-First rewrite between January 1 and March 31, 2027 (not for motorcycles)." | news.ts / bill-41 | MISLEADING | (1) The cited AIRB Q&A says nothing about rewrites. The rule is in AIRB Bulletin 07-2026, which applies to customers "who renewed or purchased ... between September 1 and December 31, 2026". (2) The bulletin doesn't exclude motorcycles. Riders simply shouldn't ask, because motorcycle premiums are expected to rise about 100%. "(not for motorcycles)" reads as an eligibility rule that doesn't exist. (3) "Renewing" leaves out people who bought a new policy. | https://www.airbfordrivers.ca/wp-content/uploads/2026/09/Bulletin-07-2026.pdf ; AIRB Q&A | Todo: "Renewed or bought car insurance between September 1 and December 31, 2026? The rate board expects insurers to offer a prorated Care-First rewrite if you ask the same insurer between January 1 and March 31, 2027. Ask for the price first. Motorcycle premiums are expected to rise under Care-First, so riders shouldn't ask." Add Bulletin 07-2026 as a source, or link to the renewal check. |

## news.ts: red-seal-completion-bonus (dated 2026-11-24)

| Claim | File/item | Verdict | Evidence | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| Date 2026-11-24; approved applicants get first payments in early December | news.ts / red-seal | CONFIRMED | Release dated "November 24, 2026". It says "first payments to be issued to eligible journeypersons starting the first week of December." | https://www.canada.ca/en/employment-social-development/news/2026/11/5000-team-canada-strong-red-seal-completion-bonus-payments-to-start-landing-in-bank-accounts-of-approved-applicants-in-early-december.html | — |
| Applications opened November 16 | news.ts / red-seal | CONFIRMED | The release says: "Since November 16, 2026, tradespeople have been able to apply." | same | — |
| "It's for people who earned their Red Seal certification between April 1, 2025 and November 15, 2026." | news.ts / red-seal | MISLEADING | Eligibility is certification "on or after April 1, 2025", with no end date. The Nov 15, 2026 cutoff only decides the deadline: those people apply by May 31, 2027, and later certifiers apply within 12 months. It's currently for apprentices. Trade qualifiers can apply from July 2027. The wording suggests anyone certified after Nov 15 is excluded. | same | "It's for apprentices who earned Red Seal certification on or after April 1, 2025 (trade qualifiers can apply from July 2027). Applications opened November 16." |
| Todo: apply by May 31, 2027 if certified in the window | news.ts / red-seal | CONFIRMED | Certified April 1, 2025 to November 15, 2026: "must apply ... by May 31, 2027". | same | Optional addition: "Certified later? Apply within 12 months of certification. Send supporting documents within 28 days of starting." |
| Status "in-force" ("In effect") | news.ts / red-seal | CONFIRMED | The program is open and paying. | same | — |

## news.ts: bill-c-42-groceries-top-up (dated 2026-11-20)

| Claim | File/item | Verdict | Evidence | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| One-time; worth 50% of this year's benefit | news.ts / C-42 | CONFIRMED (minor wording) | Finance calls it a "one-time boost ... equivalent to a 50% increase in their 2026-27 benefit." | https://www.canada.ca/en/department-finance/news/2026/11/government-of-canada-tables-plan-to-ease-grocery-costs-support-homeownership-and-encourage-new-home-construction.html | Optional: "worth 50% of your 2026-27 Canada Groceries and Essentials Benefit". |
| Up to $339 single; up to $679 couple with two children; early 2027 | news.ts / C-42 | CONFIRMED | "up to $339 for a single person without children and up to $679 for a couple with two children", "delivered in early 2027". | same | Optional: "single person without children". |
| Passed the House November 20; now in the Senate; not law | news.ts / C-42 | CONFIRMED | LEGISinfo shows House 2nd reading, Committee of the Whole and 3rd reading all on Nov 20, 2026, and Senate first reading on Nov 24. Status: "At second reading in the Senate". The Senate Committee of the Whole meets Dec 3. | https://www.parl.ca/legisinfo/en/bill/45-1/c-42 | — |
| Item date 2026-11-20 | news.ts / C-42 | MISLEADING (minor) | The cited source is Finance's release of **November 16**. Nov 20 is the House passage date, which comes from LEGISinfo, and LEGISinfo isn't cited. | both | Keep 2026-11-20 and change source to `{ title: "Bill C-42 (LEGISinfo)", publisher: "Parliament of Canada", url: "https://www.parl.ca/legisinfo/en/bill/45-1/c-42" }`. Or keep the Finance source and set date "2026-11-16". |
| "The regular January 5, 2027 payment isn't affected." | news.ts / C-42 | UNSUPPORTED | The CRA calendar confirms the Jan 5, 2027 date. No official page says the top-up leaves it unaffected or is paid separately. The bill deems the supplement paid "during January 2027", the same month, and doesn't address the regular payment. | https://www.canada.ca/en/services/benefits/calendar.html ; https://www.parl.ca/DocumentViewer/en/45-1/bill/C-42/first-reading | "The regular payment is still scheduled for January 5, 2027. No date has been set for the top-up." |
| Todo: nothing to apply for; goes to people who already get the benefit; file your 2025 return | news.ts / C-42 | CONFIRMED | The bill's s. 122.5(3.006)/(4.7) applies to an eligible individual "who files a return of income" for the **2025** taxation year, with the amount deemed paid in January 2027. Finance gives no application process. | Bill C-42 first reading text | Optional: "if it passes, it's paid automatically to people eligible for the benefit who've filed a 2025 tax return." |

## news.ts: alberta-bill-34-consumer (dated 2026-11-18)

| Claim | File/item | Verdict | Evidence | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| Passed third reading November 18 | news.ts / Bill 34 | CONFIRMED | The report shows "Third Reading — 2223-28 (Nov. 18, 2026 aft., passed)". No Royal Assent is recorded yet. | https://www.assembly.ab.ca/LAO/Bills/bsr31-2.pdf | Optional: add "(Royal Assent wasn't recorded yet)". |
| Lemon law covering 3 years or 60,000 km; repeat failed repairs; more than 30 days in the shop | news.ts / Bill 34 | CONFIRMED (simplified) | "first three years from the initial purchase or lease, or 60,000 kilometers whichever comes first". It covers "three unsuccessful attempts to repair the same warranty-covered defect", "at least 12 unsuccessful attempts involving multiple eligible defects", or "more than 30 days while a warranty repair was being attempted". The remedy is a court "right of action". | https://www.alberta.ca/protecting-consumers-and-property-rights | Optional: "(within 3 years of first sale or lease or 60,000 km, whichever comes first, for warranty defects that fail repair repeatedly or keep it in the shop more than 30 days)". |
| Credit freezes; right to repair; all-in resale ticket prices | news.ts / Bill 34 | CONFIRMED | Credit: "freeze or restrict access to their credit reports". Repair: "framework ... parts, tools and information", with products set by regulation. Tickets: "the total price of a ticket, including ... fees, taxes, charges". | same | — |
| "None of it applies until it's proclaimed; the government is aiming for early 2027." | news.ts / Bill 34 | UNSUPPORTED (the early 2027 part) | The page says "All amendments will come into force upon proclamation" and gives no date. The only "early 2027" on the page is about the **lottery tickets in liquor stores pilot**: "Implementation is targeted for early 2027." The page also says regulations need stakeholder engagement first. | same | "None of it applies until it's proclaimed, and no date has been set. The details will come in regulations after consultation." |
| Todo: buying a vehicle now, today's rules apply, no cooling-off period | news.ts / Bill 34 | CONFIRMED | AMVIC's no-cooling-off rule is already cited and checked in the car guide. | (AMVIC, per car guide) | — |

## news.ts: competition-bureau-fake-urgency (dated 2026-11-18)

| Claim | File/item | Verdict | Evidence | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| A court ordered Old Navy and Gap to hand over records; the investigation covers genuine regular prices, countdown timers, "only a few left", "people viewing"; no finding yet | news.ts / CB | CONFIRMED | Release dated Nov 18, 2026. The Federal Court order requires "records and written information". The practices listed match the release. "There has been no finding of wrongdoing at this time." | https://www.canada.ca/en/competition-bureau/news/2026/11/old-navy-and-gap-marketing-practices-investigation-to-advance-upon-court-order.html | — |
| Title: "the Competition Bureau is investigating fake 'sale' urgency" | news.ts / CB | MISLEADING | "fake" assumes the conclusion. The Bureau is examining *whether* the claims are misleading, and has made no finding. Body text and title contradict each other. | same | Title: "Black Friday warning: the Competition Bureau is investigating \"sale\" prices and urgency claims at Old Navy and Gap" |
| Todo: compare with the recent selling price; ignore countdown timers | news.ts / CB | CONFIRMED (general tip) | The release has no tips. This is general shopping guidance, not personal advice. | — | Optional: add "If a claim looks false, you can report it to the Competition Bureau." |

## news.ts: october-2026-cpi (dated 2026-11-16)

| Claim | File/item | Verdict | Evidence | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| 3.1% in October, same as September; 2.0% excluding energy; gasoline +30.9%; groceries +2.0%; cellular −6.2%; date Nov 16 | news.ts / CPI | CONFIRMED | Released 2026-11-16. "rose 3.1% year over year in October, matching its 3.1% increase in September". Ex-energy 2.0%. Gasoline +30.9%. Food from stores +2.0%. "cellular services fell 6.2%". These are national figures. | https://www150.statcan.gc.ca/n1/daily-quotidien/261116/dq261116a-eng.htm | Optional: "(Canada-wide)". |

## news.ts: calgary-2027-budget (dated 2026-11-10)

| Claim | File/item | Verdict | Evidence | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| Proposed; 15% municipal property tax revenue; date Nov 10 | news.ts / Calgary | CONFIRMED | Released Nov 10, 2026: "15 per cent increase in municipal property tax revenue from existing properties". | https://newsroom.calgary.ca/the-city-releases-proposed-20272030-budget-focused-on-calgarians-priorities/ | — |
| Title and summary: "raise a typical home's property tax by about $37 a month" / "$37 a month more in property tax" | news.ts / Calgary | MISLEADING (minor) | The City's figure is **municipal** property tax ($229 to $266 a month), with the median home at $706k in 2026 and $688k in 2027. The provincial education portion isn't included. "Property tax" suggests the whole bill. | https://www.calgary.ca/our-finances/2027-budget.html | Title: "...would raise a typical home's municipal property tax by about $37 a month". Summary: "about $37 a month more in municipal property tax". |
| $16 more for water, waste and recycling | news.ts / Calgary | CONFIRMED | $140 to $156 a month. | same | — |
| Council debates in late November and approves in December | news.ts / Calgary | CONFIRMED | Step 7 is "Nov. 23, 2026: Council deliberates". Step 8 is "December 2026: Council approves". | same | — |
| 2027 assessment notices in January; 67 days to question | news.ts / Calgary | CONFIRMED | "All property owners will receive their 2027 assessment notice in January 2027" (pre-roll page). "The Customer Review Period lasts 67 days after your assessment notice is mailed" (review page). | https://www.calgary.ca/property-owners/taxes/pre-roll-calculator.html ; https://www.calgary.ca/property-owners/assessment/review-period.html | — |

## news.ts: alberta-energy-rebate-ends (dated 2026-11-25)

| Claim | File/item | Verdict | Evidence | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| No Alberta Energy Rebate payments after November 30, 2026 | news.ts / AER | CONFIRMED | "Payments will not be issued after November 30, 2026." | https://www.alberta.ca/alberta-energy-rebate | — |
| Item date 2026-11-25 | news.ts / AER | UNSUPPORTED | This isn't an announcement date. The program page shows no published or updated date, and the 25th is the day we read it. | same | Either reword it as a reminder ("Reminder: ..."), or use a date you can verify. If you keep 2026-11-25, add "(checked November 25)" to the summary so the date isn't read as an announcement. |
| Natural gas rebate not paying; November $1.99/GJ vs $6.50 trigger | news.ts / AER | CONFIRMED (scope) | "November 2026 Alberta price: $1.99 per gigajoule", "goes above $6.50 per gigajoule", "No rebate will be credited for the November 2026 billing period." The item's "isn't paying out" is unlimited in time, but the page only rules out November. | https://www.alberta.ca/natural-gas-rebate-program | "...the natural gas rebate isn't paying out for November: the Alberta price was $1.99 per GJ, well below the $6.50 trigger." Add the gas rebate page as a source or link. |

## Guide paragraphs

| Claim | File/item | Verdict | Evidence | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| "The law behind it, Bill 41, passed third reading in the Legislature on November 25, 2026." | alberta-car-home-insurance.mdx, "What Care-First changes" | MISLEADING | The third-reading date is confirmed. But "the law behind it" is the Automobile Insurance Act (Bill 47, 2025). Bill 41 makes the final supporting amendments, and Royal Assent is pending. | bsr31-2.pdf; https://www.alberta.ca/announcements.cfm?xID=98152307CC832-0497-C4E1-56376B0A4C28F5AD | "Bill 41, which makes the last law changes Care-First needs, passed third reading in the Legislature on November 25, 2026 (Royal Assent is still to come)." |
| "Insurers usually send renewal notices 45 to 60 days before your policy renews, so many Albertans will see their first Care-First price in late 2026 or early 2027." | same | CONFIRMED | AIRB: "45 to 60 days in advance", and the effective date decides the pricing. A renewal on or after Jan 1 means a notice from about early November. | AIRB Q&A | Optional: "...first Care-First price on a renewal notice from November 2026 onward." |
| "Bill 34 passed third reading on November 18, 2026." | negotiate-car-price-alberta-ai.mdx, lemon law warning | CONFIRMED | "Third Reading ... (Nov. 18, 2026 aft., passed)". | bsr31-2.pdf | — |
| "Once it's proclaimed (the government is aiming for early 2027)" | same | UNSUPPORTED | "early 2027" applies only to the liquor-store lottery pilot. The consumer amendments come into force "upon proclamation", with no date. | https://www.alberta.ca/protecting-consumers-and-property-rights | "Once it's proclaimed (no date has been set yet), it adds..." |
| "covering 3 years or 60,000 km for defects that keep failing repair or keep the vehicle in the shop for more than 30 days, plus the right to freeze your credit file. It isn't in force yet" | same | CONFIRMED (simplified) | This matches the alberta.ca page. The 3 years run from the vehicle's *initial* purchase or lease, so a used car may already be outside them. The defects must be warranty-covered. | same | Optional: "covering the first 3 years from the vehicle's first sale or lease or 60,000 km (whichever comes first), for warranty defects that keep failing repair..." |
| "would raise a typical home's property tax by about $37 a month" | challenge-property-assessment-alberta.mdx, "Calgary, 2027" box | MISLEADING (minor) | Same issue as the news item: the figure is municipal property tax only. | https://www.calgary.ca/our-finances/2027-budget.html | "...would raise a typical home's municipal property tax by about $37 a month." |
| "Your 2027 assessment notice arrives in January, and you get 67 days to question it." | same | CONFIRMED | Pre-roll page: "2027 assessment notice in January 2027". The review period is 67 days from mailing. Calgary adds: "Check your notice for your Customer Review Period dates, as they can vary." | Calgary pre-roll and review-period pages | Optional: "67 days from when it's mailed (the exact dates are on your notice)". |
| "(still being debated)"; "A correct assessment matters more when tax rates rise." | same | CONFIRMED | Deliberations began Nov 23, and approval is due in December. The second sentence is a reasonable general statement, not personal advice. | Calgary 2027 budget page | — |

## Dates attached to items

- bill-41 (11-25): CONFIRMED for both the third reading and the AIRB Q&A.
- red-seal (11-24), competition-bureau (11-18), CPI (11-16) and Calgary (11-10): CONFIRMED.
- bill-34 (11-18): CONFIRMED as the third-reading date. The cited alberta.ca page isn't a dated release.
- bill-c-42 (11-20): This is the passage date, but the cited source is dated 11-16. See the fix above.
- energy rebate (11-25): Not an announcement date. See the fix above.

## Not checked

- The AIRB Bulletin 07-2026 PDF wasn't re-fetched today. Its wording comes from the earlier fact-check (docs/fact-checks/2026-11-25-carefirst-checker-phone-letter-research.md) and Insurance Business coverage.
- The AMVIC no-cooling-off statement wasn't re-fetched. It was checked in an earlier guide fact-check.
