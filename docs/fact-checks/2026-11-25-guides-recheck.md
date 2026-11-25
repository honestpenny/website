# Guides and fact registry re-check (time-sensitive claims)

Date: 2026-11-25. Checker: independent agent, read-only on site code.
Scope: the 8 guides in `src/content/guides/*.mdx` and all 36 entries in `src/data/facts.yaml`, re-checked against official sources after the research notes in `~/research_notes/MSE value adds for Alberta/` raised questions.

Method: every source below was fetched on 2026-11-25 (curl, or WebFetch where it worked). Two exceptions. The CRTC site (crtc.gc.ca) returns 403 to automated clients, so Telecom Regulatory Policy CRTC 2026-43 was read from the Internet Archive copy dated 2026-09-24 (`web.archive.org/web/20260924095644/https://crtc.gc.ca/eng/archive/2026/2026-43.htm`). The Edmonton ARB fee was confirmed from a search summary of City Bylaw 18308 (consolidated 2026-04-28), not from a fetched page.

## Summary

- **Non-CONFIRMED: 4.** All are wording problems. No registry value is wrong.
  1. Phone guide: the fee ban is stated more broadly than the rule (WRONG, too broad).
  2. Property guide: the seniors deferral "(usually by May 31)" reads as if May 31 were the tax deadline (WRONG, ambiguous).
  3. Property guide: Edmonton fee "reported as $50" (UNSUPPORTED as written: the fee is right, the source isn't named).
  4. Connecting Families end date "March 2027" (research notes only). It is UNSUPPORTED: no ISED page states an end date. The guide makes no claim, so nothing needs fixing.
- **Suggested additions, not errors:**
  - The phone guide could say that wireless contracts without a discounted phone now have **no** early cancellation fee.
  - The tax guide can now publish the official 2027 tables (below).
- **Research-note questions settled:**
  - **Internet early cancellation fees:** 2026-43 only amended Wireless Code G3, so fixed-term internet early cancellation fees are still allowed. CCTS says so explicitly.
  - **Criminal rate:** the s.347 "version change" is a consolidation date. The text is unchanged: still more than 35% APR.
  - **RoLR 2027–2028:** no approved rates published yet. Filings are due by about 2026-12-02.
  - **TFSA 2027:** limit not announced yet.

## Official 2027 figures (for the tax and TFSA/RRSP guides)

| Item | 2027 value | Source |
|---|---|---|
| Federal brackets 2027 | 14% to $60,044; 20.5% to $120,088; 26% to $186,157; 29% to $265,203; 33% above | CRA T4127-JAN 2027 (124th ed., updated 2026-11-19), Table 8.1 / CSV `rtsncmtrshldcnstnt-01-27e.csv` |
| Federal indexation 2027 | 2.6% | T4127 Table 8.2 (Federal index rate 0.026) |
| Federal basic personal amount 2027 | $16,879 (net income up to $186,157), falling to $15,214 at $265,203 and above | T4127 "Federal Basic Personal Amount (BPAF) Formula" |
| Alberta brackets 2027 | 8% to $62,424; 10% to $157,344; 12% to $188,813; 13% to $251,750; 14% to $377,625; 15% above | T4127 Table 8.1 |
| Alberta indexation 2027 | 2.0% ("lower of the CPI and 2.0%, as per the Alberta escalator") | T4127 Table 8.2 note |
| Alberta basic personal amount 2027 | $23,225 | T4127 Table 8.2 / Table 8.10 claim code 1 |
| TFSA dollar limit 2027 | **Not announced.** The CRA limits table stops at 2026 ($7,000). CRA's "What's new" page has no 2027 TFSA notice. | https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html ; https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/whats-new.html |
| RRSP dollar limit 2027 | $35,390 | same CRA limits table |
| RRSP dollar limit 2028 | $36,390 | same CRA limits table (2028 row) and What's new ("2027 money purchase (MP) limit will be $36,390") |
| YMPE 2027 / YAMPE 2027 | $76,700 / $87,400 | same CRA limits table and What's new |

Note: CRA's main "current year" tax-rate page still shows 2026 and says "The current year tax rates will be available on January [XX], 2027". Its indexation page still shows 2026 columns. For 2027, T4127 is the only official CRA source so far.

## Claims table

Files: phone = `cut-phone-internet-bills-alberta.mdx`; insurance = `alberta-car-home-insurance.mdx`; electricity = `alberta-electricity-rate-2027.mdx`; gas = `alberta-natural-gas-fixed-or-default.mdx`; tax = `alberta-income-tax-brackets-2026.mdx`; savings = `tfsa-rrsp-fhsa-compared.mdx`; property = `challenge-property-assessment-alberta.mdx`; steps = `honest-penny-steps.mdx`; facts = `src/data/facts.yaml`.

### Telecom (CRTC 2026-43, Wireless Code, Connecting Families, Satellite Rebate)

| Claim | File | Verdict | Evidence quote | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| `telecom-fee-ban-start` = June 12, 2026; ban on activation, set-up and plan-change fees | facts, phone L62 | CONFIRMED (date) | 2026-43: "These new consumer protections will come into effect on 12 June 2026." CCTS: "As of June 12, 2026, most service providers are generally not allowed to charge fees for the activation of internet and wireless services or for modifying an existing service plan." | https://www.ccts-cprst.ca/which-fees-are-allowed/ ; 2026-43 (archive copy above) | — |
| "Since June 12, 2026, providers can't charge you activation, set-up or plan-change fees" | phone L62 (QuickAnswer) | WRONG (too broad) | 2026-43: applies to "individual and small business customers of mobile wireless services offered by all wireless service providers; and individual customers of home Internet services offered by Internet service providers that are subject to the Internet Code". Exceptions: "reasonable fees related to the physical installation of a telecommunications service at a customer's premises or fees related to additional products or services the customer has explicitly chosen to purchase." | 2026-43 (archive copy) | "Since <Fact id="telecom-fee-ban-start" />, cellphone providers and the larger internet providers can't charge you **activation, set-up or plan-change fees**, unless a technician has to install something at your home or you choose an optional extra." |
| Wireless vs internet: what 2026-43 changed on early cancellation fees | phone L106–108, L113 | CONFIRMED (and note) | 2026-43 amends Wireless Code G3: "When a subsidized device is not provided as part of the contract, a service provider must not charge an early cancellation fee." No equivalent Internet Code amendment. CCTS still lists "early cancellation for Internet services for a fixed term contract" as allowed. | 2026-43 (archive copy); https://www.ccts-cprst.ca/which-fees-are-allowed/ | Optional addition to the "Cancel any time" bullet (L113): "If your contract didn't come with a discounted phone, there's no cancellation fee at all (since June 12, 2026)." |
| "Fees that are still allowed": financed phone balance, unreturned equipment, technician visit, early cancellation on some fixed-term internet contracts, reconnection after missed payments; SIM/set-up charges under CRTC review | phone L106–108 | CONFIRMED | CCTS: "reconnection fee after disconnection for non-payment … equipment non-return charges, unpaid balance for device financing, and early cancellation for Internet services for a fixed term contract". "Activation and modification fees can be charged if they relate to the physical installation of a service at your home." Under CRTC review: "Bell's device-handling charge, TELUS' SIM purchase and eSIM purchase fee, and Rogers' device set-up charge, shipping charge … and SIM fee". | https://www.ccts-cprst.ca/which-fees-are-allowed/ | — (CCTS also lists bill-reprint and 3G maintenance fees; adding them is optional) |
| `wireless-data-overage-cap` $50 per month | facts, phone L112 | CONFIRMED | Wireless Code E: "A service provider must suspend data overage charges once they reach $50 within a single monthly billing cycle" (unless the account holder agrees). CRTC's April 13, 2026 release adds a notice at $50 of international roaming use but does not change the caps. | https://www.ccts-cprst.ca/wp-content/uploads/2026/05/Annotated-Guide-to-the-Wireless-Code-2026.pdf ; https://www.canada.ca/en/radio-television-telecommunications/news/2026/04/crtc-takes-action-to-prevent-bill-shock-and-help-canadians-understand-their-options.html | — |
| `wireless-roaming-cap` $100 data roaming per billing cycle | facts, phone L112 | CONFIRMED | "…data roaming charges once they reach $100 within a single monthly billing cycle, unless the account holder or authorized user expressly consents". Applies per account. | Annotated Wireless Code 2026 (E2) | — |
| Trial period: 15 days (30 days and double usage with a disability), only if there's an early cancellation fee, usage limit at least half the monthly allowance, device returned near-new with packaging | phone L103 | CONFIRMED | G4: "When a customer agrees to a contract through which they are subject to an early cancellation fee … minimum of 15 calendar days"; "at least half of the permitted monthly usage"; "extended trial period lasting a minimum of 30 calendar days … at least double"; "returned any device … in near-new condition, including original packaging." | Annotated Wireless Code 2026 (G4) | — (after 2026-43, an ECF, and so a trial period, normally exists only on contracts with a discounted phone) |
| Cancellation fee can't exceed the phone discount and is $0 by 24 months | phone L113 | CONFIRMED | Wireless Code G2 (device subsidy reduces in equal monthly amounts over at most 24 months) | Annotated Wireless Code 2026 (G2) | — |
| CCTS is free and handles billing errors, contract disputes, service problems | phone L129 | CONFIRMED | CCTS: "The CCTS cannot change the dollar ($) amount(s) of fees or prices … We are here to help if the fee(s) charged are against the terms of service, your contract, or other CRTC rules." | https://www.ccts-cprst.ca/which-fees-are-allowed/ | — |
| `connecting-families-plans` $10 or $20 a month | facts, phone L65, L120 | CONFIRMED | "Plan 1 $10 per month (plus tax) … Plan 2 $20 per month (plus tax)" (modified 2026-07-20) | https://ised-isde.canada.ca/site/ised/en/programs-and-initiatives/connecting-families-initiative/low-cost-plans | — |
| Connecting Families eligibility: maximum CCB, or at least 80% of maximum GIS; invitation letter needed | phone L120 | CONFIRMED | "Families are eligible if they receive the maximum amount of the Canada Child Benefit"; seniors "must receive at least 80% of the maximum amount of Guaranteed Income Supplement"; "you will receive a letter" | https://ised-isde.canada.ca/site/ised/en/programs-and-initiatives/connecting-families-initiative/eligibility | — |
| Connecting Families end date (research notes: "Runs until March 2027") | not in guide | UNSUPPORTED | Neither the ISED main, eligibility nor plans page gives an end date (main page modified 2026-01-12) | https://ised-isde.canada.ca/site/ised/en/programs-and-initiatives/connecting-families-initiative | Don't add an end date until ISED publishes one. Keep `reviewBy: 2027-03-01`. |
| `alberta-satellite-rebate` up to $1,000; buy and apply August 11, 2026 to March 31, 2027 | facts, phone L13, L121 | CONFIRMED | "one-time rebate per household of up to $1,000 … apply for the rebate through the program portal between August 11, 2026 and March 31, 2027"; eligible expenses are "purchases made between August 11, 2026 and March 31, 2027" | https://www.alberta.ca/alberta-satellite-rebate-program | — |

### Insurance (Care-First, rate caps, condo)

| Claim | File | Verdict | Evidence quote | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| `care-first-start` January 1, 2027; date of collision decides | facts, insurance L12, L66, L74, L81 | CONFIRMED | "Starting January 1, 2027, if you are injured in a car accident, you will have access to improved care and recovery benefits, regardless of who is at fault" | https://www.alberta.ca/care-first-auto-insurance | — |
| Claim from your own insurer whoever was at fault; suing limited (e.g. driver convicted of certain offences) | insurance L66, L76, L79 | CONFIRMED | "regardless of who is at fault"; "At-fault drivers could also face litigation if they are convicted of serious or criminal driving offences"; "access these enhanced benefits without the need to sue" | https://www.alberta.ca/care-first-auto-insurance ; https://www.alberta.ca/automobile-insurance-reform | — |
| Today: $50,000 over 2 years; Care-First: no lifetime limit; income replacement to 65 | insurance L74, L77–78 | CONFIRMED | "Up to $50,000 for 2 years … No maximum or time limit for treatment that provides a measurable benefit." Fact sheet: income replacement to "age of 65" | https://www.alberta.ca/automobile-insurance-reform ; fact sheet PDF (below) | — |
| `care-first-avg-saving` 13.7% lower (about $297); young male −$3,094 (30%); middle-aged about −$525 (about 14%); motorcycles up at least 37% | facts, insurance L67, L89–92 | CONFIRMED | AIRB (Sep 8, 2026): "average premium reduction of 13.7%, or about $297 per vehicle"; "$3,094, or 30.0%"; "approximately $525, around 14.0%"; "all three profiles increase by at least 37.0%" | https://www.airbfordrivers.ca/newsroom/care-first-premium-impacts/ | — |
| `auto-renewal-cap-2027` 10%; insurer average 5%; cap doesn't cover your own changes | facts, insurance L68, L99 | CONFIRMED | "insurers will not be able to raise average rates by more than 5% and all average drivers will see their auto insurance premiums capped at 10% at renewal". AIRB: "The 10% cap only applies to increases driven by your insurer's overall rate change." | https://www.alberta.ca/automobile-insurance-reform ; https://www.airbfordrivers.ca/articles/understanding-albertas-auto-insurance-rate-caps-what-it-means-for-you/ | — |
| `good-driver-cap-2026` 7.5%; criteria; can lose the cap by switching insurers, moving, adding a driver, changing vehicles | facts, insurance L98 | CONFIRMED | "rates for those who qualify are capped at 7.5% in 2026"; good driver = no "at-fault accident in the last 6 years … criminal code traffic conviction in the last 4 years … major … minor traffic conviction in the last 3 years". AIRB: "moving to a higher-risk area, adding a higher-risk driver, changing vehicles, or switching insurers" | same two URLs | Optional precision: "move to a higher-risk area, add a higher-risk driver" |
| Grid ends January 1, 2027 with no replacement | insurance L100 | CONFIRMED | "the Grid would be repealed effective January 1, 2027 and there will be no replacement" | https://www.airbfordrivers.ca/albertas-insurance-system/grid-rating-system/ | — |
| `auto-liability-minimum` $200,000 | facts, insurance L108 | CONFIRMED | Fact sheet: drivers must "hold a minimum of $200,000 in third-party liability" | https://open.alberta.ca/dataset/05d7b6b1-ed14-40f6-8044-87f050b521b1/resource/a89fb33a-e4d2-4118-a982-2ee2cf465ac6/download/tbf-care-first-auto-insurance-2025-08.pdf | — |
| `condo-deductible-chargeback-max` $50,000, lesser of cost or deductible, since February 26, 2026; actions or inaction of owner, tenant or guest | facts, insurance L118 | CONFIRMED | "Condominium Property Regulation … came into force on February 26, 2026"; "the actual costs … or the corporation's insurance deductible amount (up to $50,000)"; "actions, or inaction, of an owner, their tenant or a guest" | https://www.alberta.ca/supporting-albertas-condominium-communities | — |

### Electricity (Rate of Last Resort)

| Claim | File | Verdict | Evidence quote | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| `rolr-enmax-2025-2026` 12.06¢; `rolr-epcor-2025-2026` 12.01¢ (EPCOR and FortisAlberta); `rolr-direct-energy-2025-2026` 12.02¢ (ATCO Electric area) | facts, electricity L64–68, L91 | CONFIRMED | UCA table "January 1, 2025 – December 31, 2026 - Rate of Last Resort in ¢/kWh": EPCOR Distribution 12.01, FortisAlberta 12.01, ENMAX Power 12.06, ATCO Electric 12.02. ENMAX: "In Calgary, Cardston, Ponoka, and Red Deer, the Rate of Last Resort is 12.06¢ per kWh." (EPCOR's own page shows an "Average RoLR rate" of 12.025¢, which is an average, not the tariff.) | https://ucahelps.alberta.ca/utility-choices/current-rates-and-pricing/default-rates/ ; https://www.enmax.com/customer-support/understanding-the-rate-of-last-resort | — |
| 2027–2028 RoLR not yet approved; MSA forecast 12.82¢ (ENMAX); filings due at least 30 days before Jan 1, 2027 | electricity L78 | CONFIRMED (as of 2026-11-25) | UCA still shows only the 2025–2026 table: "The RoLR will be in place until December 31, 2026." No AUC approval found in search. The AUC decision requires 2027–2028 rates to be filed at least 30 days before January 1, 2027. | UCA default rates (above); https://www.albertamsa.ca/assets/Documents/Rate-of-Last-Resort-Report-2025.pdf | Update the date to "As of November 25, 2026". `reviewBy: 2026-12-03` is right (filings are due around 2026-12-02). |
| Reset normally capped at 10%; about 13.3¢ maximum in ENMAX area | electricity L53, L76, L84 | CONFIRMED | UCA: "Any proposed rate adjustments cannot normally exceed 10% of the existing rate." 12.06 × 1.10 = 13.27 | https://ucahelps.alberta.ca/utility-choices/current-rates-and-pricing/rate-of-last-resort/ | — |
| Leave the RoLR any time with no penalty; about 26% of homes on it | electricity L54 | CONFIRMED | UCA RoLR page ("approximately 26 per cent of residential consumers") | same | — |

### Natural gas

| Claim | File | Verdict | Evidence quote | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| Default Rate Tariff changes monthly, approved by AUC | gas L49, L68 | CONFIRMED | "The Default Rate Tariff (DRT) is the default rate for natural gas. This rate is reviewed and approved by the AUC and can change monthly." | https://ucahelps.alberta.ca/utility-choices/current-rates-and-pricing/default-rates/ | — |
| `gas-rebate-ceiling` $6.50/GJ, rebated automatically; prices low now | facts, gas L71, L97 | CONFIRMED | "goes above $6.50 per gigajoule … November 2026 Alberta price: $1.99 per gigajoule. No rebate will be credited for the November 2026 billing period." | https://www.alberta.ca/natural-gas-rebate-program | — |
| `energy-contract-cooling-off` 10 days; phone sign-up cancellable within 60 days of first bill; auto-renewal up to 1 year | facts, gas L52, L83–85 | CONFIRMED | EMR: "may cancel … without cost or penalty within 10 days"; "within 60 days after receiving the first billing statement"; "automatically be renewed for one year" | https://kings-printer.alberta.ca/documents/Regs/2005_246.pdf | — |
| `energy-door-to-door-ban` since January 1, 2017 | facts, gas L88 | CONFIRMED | "selling household energy products unsolicited door-to-door is prohibited as of January 1, 2017"; line 1-877-427-4088 | https://www.alberta.ca/door-to-door-sales-ban | — |
| No winter gas disconnection November 1 to mid-April | gas L101 | CONFIRMED | "natural gas services can't be disconnected between November 1st and April 14th" | https://ucahelps.alberta.ca/residential/utilities-disconnection/winter-rules/ | — |

### Tax

| Claim | File | Verdict | Evidence quote | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| 2026 federal brackets ($58,523 / $117,045 / $181,440 / $258,482; 14–33%); `federal-lowest-rate-2026` 14% | facts, tax tables | CONFIRMED | CRA "Federal rate: 2026" table, exact match | https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html | — |
| 2026 Alberta brackets ($61,200 / $154,259 / $185,111 / $246,813 / $370,220; 8–15%); `alberta-lowest-bracket-2026` | facts, tax tables | CONFIRMED | Alberta.ca Table 1 and CRA table, exact match | https://www.alberta.ca/personal-income-tax | — |
| BPA 2026: federal $16,452, Alberta $22,769 | tax | CONFIRMED | CRA indexation page: "$16,452". Alberta: 2027 BPA $23,225 ÷ 1.02 = $22,769 (T4127), consistent with the 2.0% indexation of $22,323 | https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html ; T4127 Jan 2027 | — |
| Combined marginal rates and the about 0.3-point BPA phase-out note | tax | CONFIRMED (arithmetic) | Sums of the official rates. Phase-out: (16,452 − 14,829) ÷ 77,042 × 14% ≈ 0.29 points | — | — |
| 2027: federal +2.6%, Alberta +2.0%, lowest federal bracket to $60,044, Alberta 8% to $62,424 | tax "What's coming for 2027" | CONFIRMED | T4127-JAN 2027 Table 8.1: "Federal,A,0,60,044,…"; "AB,A,,62,424,…"; Table 8.2: Federal index 0.026, AB 0.020 | https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan.html | Optional: add the full 2027 tables from the "Official 2027 figures" section above, citing T4127 |
| `filing-deadline-2026-returns` April 30, 2027 (self-employed June 15, pay by April 30) | facts, tax | CONFIRMED | ITA s.150 (April 30 / June 15). CRA's important-dates page still shows 2026 dates ("April 30, 2026 : Deadline to file your taxes"), so the registry source (ITA) is the right one. | https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-150.html | — |
| Late-filing penalty 5% + 1% per full month, up to 12 months | tax Warning | CONFIRMED | "5% of your 2025 balance owing, plus 1% … for each full month late (up to 12 months)" | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/interest-penalties/late-filing-penalty.html | — |

### TFSA / RRSP / FHSA / RESP

| Claim | File | Verdict | Evidence quote | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| `tfsa-limit-2026` $7,000; 2027 limit | facts, savings, steps | CONFIRMED (2026); 2027 not announced | CRA table: 2026 $7,000. No 2027 row yet. | CRA limits page (above) | When CRA announces it (usually late November), add `tfsa-limit-2027` and `tfsa-cumulative-room-2027` |
| `tfsa-cumulative-room-2026` $109,000 | facts, savings | CONFIRMED (arithmetic) | Sum of the official annual limits 2009–2026 = $109,000 | CRA limits page | — |
| `rrsp-limit-2026` $33,810; `rrsp-limit-2027` $35,390 | facts, savings, steps | CONFIRMED | CRA table: 2026 RRSP $33,810; 2027 $35,390 (2028 $36,390) | CRA limits page | — |
| `fhsa-annual-limit` $8,000; `fhsa-lifetime-limit` $40,000 | facts | CONFIRMED | "Your FHSA participation room in the first year … is $8,000" | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html | — |
| `cesg-lifetime` $7,200; 20% on the first $2,500 | facts, savings, steps | CONFIRMED | "The CESG provides up to $7,200 maximum per eligible child"; "20% of the first $2,500" | https://www.canada.ca/en/services/benefits/education/education-savings/estimating-amounts.html | — |
| `hbp-limit` $60,000; repayment starts in the fifth year for first withdrawals 2022–2028 | facts, savings | CONFIRMED | "the maximum you can withdraw is $60,000"; relief "extended for … first HBP withdrawal between January 1, 2026, and December 31, 2028 … deferred to the fifth year", plus 2022–2025 under Budget 2024 | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan/participate-home-buyers-plan.html ; https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html | — |
| `rrsp-withholding-rates` 10% / 20% / 30% | facts, savings | CONFIRMED | "10% … up to $5,000; 20% … exceeding $5,000, up to and including $15,000; 30% … over $15,000" | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/making-withdrawals/tax-rates-on-withdrawals.html | — |
| `oas-clawback-threshold` $93,454 (2025 income; July 2026–June 2027) | facts, savings | CONFIRMED | Table: "July 2026 to June 2027 | 2025 | $93,454" | https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html | — |
| CGEB named among benefits a TFSA withdrawal doesn't reduce | savings L76 | CONFIRMED (name) | "The Canada Groceries and Essentials Benefit (CGEB) replaced the GST/HST credit in July 2026." Eligibility is unchanged and income-tested. | https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit.html | — |

### Property assessment

| Claim | File | Verdict | Evidence quote | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| Calgary ARB fee $50, or $40 if received before January 31; $650 for 4+ dwellings or non-residential; refunded if you win or settle | property | CONFIRMED (current bylaw) | "$50 (reduced to $40 if received before January 31) … $650" | https://www.calgaryarb.ca/file-complaint.html ; https://www.calgaryarb.ca/faq.html | — (labelled "2026 fees". The 2027 notice is still to be confirmed; deadline item 2027-01-30 is marked approximate, which is fine.) |
| Calgary: file online, in person or by mail; not email or fax | property | CONFIRMED | "Complaint Forms can't be faxed or emailed." | https://www.calgaryarb.ca/file-complaint.html | — |
| Withdraw in writing at least 3 days before the hearing | property | CONFIRMED | "withdraw your complaint by contacting the ARB in writing (via ePortal, email, or paper copy) at least 3 days in advance" | https://www.calgaryarb.ca/faq.html | — |
| Window about 60 to 67 days; 2026 deadlines March 23 | property | CONFIRMED | Calgary: "The Customer Review Period lasts 67 days after your assessment notice is mailed". Edmonton: "60 days"; "In 2026, the customer review period is open from January 12 - March 23." | https://www.calgary.ca/property-owners/assessment/review-period.html ; https://www.edmonton.ca/residential_neighbourhoods/property-assessment | — |
| "Edmonton's residential fee was reported as $50 in 2026" | property | UNSUPPORTED (as worded) | The value is right, but the guide gives no official source. City of Edmonton Bylaw 18308 (Assessment Review Boards Bylaw, consolidated 2026-04-28) sets "Residential, 3 or fewer dwellings and farmland … $50". Taken from a search summary, not a fetched page. | https://www.edmonton.ca/sites/default/files/public-files/documents/bl18308.pdf | "Edmonton's fee for a house or condo is $50 under its Assessment Review Boards Bylaw (as of 2026). Check your 2027 notice." (cite the bylaw PDF) |
| `seniors-tax-deferral-rate` 4.45% simple, reviewed April and October; 65+, 25% equity, no income test; surviving spouse 55+ | facts, property | CONFIRMED | "The current interest rate is 4.45%. It is reviewed, and may be adjusted, every 6 months in April and October."; "Eligibility is not based on your income"; spouse "is 55 years of age or older" | https://www.alberta.ca/seniors-property-tax-deferral-program | — |
| "Apply at least 30 days before your city's tax deadline (usually by May 31)" | property | WRONG (ambiguous) | "you must apply at least 30 days before the municipal property tax deadline (usually June 30th of each year)". The parenthesis reads as if the tax deadline were May 31. | same | "Apply at least 30 days before your city's property tax deadline. That deadline is usually June 30, so apply by about May 31." |

### Steps guide and debt

| Claim | File | Verdict | Evidence quote | Source URL | Suggested exact fix |
|---|---|---|---|---|---|
| `payday-max-cost-alberta` $14 per $100 since January 1, 2025; about 365% a year on a two-week loan | facts, steps L92 | CONFIRMED | "Effective January 1, 2025 the maximum fee a payday lender can charge is $14 per $100 … The term of the loan cannot exceed 62 days." 14% × 26 = 364% | https://www.alberta.ca/payday-loans | — |
| Federal criminal rate 35% APR from 2025-01-01, and the "change around 2026-09-21" | steps (sources list cites SOR/2024-114) | CONFIRMED (no substantive change) | Current s.347: criminal rate "exceeds 35 per cent" APR. The prior version is now labelled "from 2025-01-01 to 2026-10-29" (Act "current to 2026-10-29 and last amended on 2026-07-18"). A sentence-by-sentence diff of the two s.347 texts finds no substantive change, so the label is a consolidation date, not an amendment. Payday exemption is still "14% of the amount of money advanced" (CIRR s.3). | https://laws-lois.justice.gc.ca/eng/acts/C-46/section-347.html ; https://laws-lois.justice.gc.ca/eng/acts/C-46/section-347-20250101.html ; https://laws-lois.justice.gc.ca/eng/regulations/SOR-2024-114/FullText.html | — |
| CGEB "replaced the GST/HST credit in July 2026" | steps L70 | CONFIRMED | "The Canada Groceries and Essentials Benefit (CGEB) replaced the GST/HST credit in July 2026." | https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit.html | — |
| `fpcanada-cdn-equity-return` 6.3% | facts, steps | CONFIRMED | "Projection Assumption Guidelines for 2026 … Canadian equities 6,30%" | https://institutpf.org/en/projection-assumption-guidelines | — |
| `penny-distribution-ended` February 4, 2013 | facts | CONFIRMED | "the Royal Canadian Mint stopped distributing pennies on February 4, 2013" | https://www.mint.ca/en/faq | — |

## facts.yaml: sources and `reviewBy`

All 36 source URLs resolved (HTTP 200) on 2026-11-25, and every value matches its source as shown above. The one URL not re-fetched this pass is `https://www.ccts-cprst.ca/` (not in the registry). All `reviewBy` dates are sensible. Notes:

| Fact id | reviewBy | Comment |
|---|---|---|
| rolr-enmax / rolr-epcor / rolr-direct-energy-2025-2026 | 2026-12-03 | Good: 2027–28 filings are due about 2026-12-02. Add `rolr-*-2027-2028` facts once the AUC approves them. |
| tfsa-limit-2026, tfsa-cumulative-room-2026 | 2027-01-15 | Good. Watch for the CRA 2027 TFSA announcement, expected late November or early December 2026. |
| federal-lowest-rate-2026, alberta-lowest-bracket-2026, filing-deadline-2026-returns | 2027-01-31 | Good. The 2027 figures are already in T4127 if you want `*-2027` facts now. |
| good-driver-cap-2026 | 2027-01-15 | Good (expires with 2026). |
| seniors-tax-deferral-rate | 2027-04-15 | Fine. The rate is reviewed in April, so 2027-04-30 would catch a mid-April change. Optional. |
| connecting-families-plans | 2027-03-01 | Good, given the unconfirmed March 2027 end date mentioned in research notes. |
| alberta-satellite-rebate | 2027-02-01 | Good (program ends 2027-03-31). |
| All others | various | Sensible. |
