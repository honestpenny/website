# Honest Penny fact check: insurance and natural gas, 2026-11-24

Scope: `src/content/guides/alberta-car-home-insurance.mdx`, `src/content/guides/alberta-natural-gas-fixed-or-default.mdx`, and the 9 `facts.yaml` entries they use. Every source was fetched on 2026-11-24. No content files were edited.

## URL status

All 14 front-matter `sources[].url`, all `<Official href>` links and all 9 fact `source.url` values were fetched.

| URL | Status | Note |
|---|---|---|
| https://airb-applications.alberta.ca/ (insurance `<Official>` "comparison tool") | **HTTP 500** (root, and /Grid/Calculator too) | Broken right now. The AIRB home page https://www.airbfordrivers.ca/ still links to it, so it may be a server outage. Re-test before publishing. Until it works, link https://www.airbfordrivers.ca/resources/ instead. |
| Every other URL (alberta.ca x7, airbfordrivers.ca x2, giocanada.org, open.alberta.ca PDF, albertamsa.ca PDF, ucahelps.alberta.ca x3, kings-printer.alberta.ca PDF, auc.ab.ca) | 200, no redirects | |

Notes on sources:
- The alberta.ca Care-First page has no benefit amounts. Those figures come from the open.alberta.ca fact sheet (Aug 2025) and https://www.alberta.ca/system/files/tbf-care-first-auto-insurance-comparison-of-accident-benefits.pdf. Add the comparison PDF as a source.
- The good-driver ineligibility triggers and the "own risk isn't covered" rule come from https://www.airbfordrivers.ca/articles/understanding-albertas-auto-insurance-rate-caps-what-it-means-for-you/. That page isn't in front matter. Add it.
- The NRCan pages (thermostat tip) returned HTTP 202 with no content to automated fetches, so they couldn't be read.

## Claims: alberta-car-home-insurance.mdx

| File | Claim | Verdict | Correct value / note | Source URL |
|---|---|---|---|---|
| insurance | Care-First starts January 1, 2027 (and the front-matter deadline) | CONFIRMED | | https://www.alberta.ca/care-first-auto-insurance |
| insurance | After a crash you claim from your own insurer, whoever was at fault | CONFIRMED | Fact sheet: "each driver's insurance company pays for their medical care ... regardless of who caused the accident" | open.alberta.ca fact sheet (Aug 2025) |
| insurance | Injury benefits are much bigger | CONFIRMED | | https://www.alberta.ca/system/files/tbf-care-first-auto-insurance-comparison-of-accident-benefits.pdf |
| insurance | Average private car premium down 13.7% (about $297) | CONFIRMED | AIRB, Sept 8, 2026, from approved filings | https://www.airbfordrivers.ca/newsroom/care-first-premium-impacts/ |
| insurance | "Renewals issued from November 1, 2026 already use the new prices" | UNVERIFIABLE | Only IBC (industry) and trade press say this. No alberta.ca or AIRB page does. | lead: https://www.newswire.ca/news-releases/care-first-auto-insurance-savings-are-now-here-835450119.html |
| insurance | From 2027 a rate change can't raise your premium more than 10% at renewal | CONFIRMED | | https://www.alberta.ca/automobile-insurance-reform ; AIRB rate-caps article |
| insurance | The cap doesn't cover your own changes (claim, ticket, new car, new driver) | CONFIRMED | AIRB: "It does not limit increases caused by changes to your personal risk profile" (changing coverage is also listed) | https://www.airbfordrivers.ca/articles/understanding-albertas-auto-insurance-rate-caps-what-it-means-for-you/ |
| insurance | Government comparison tool at airb-applications.alberta.ca | UNVERIFIABLE | URL returns HTTP 500 (see URL table) | https://airb-applications.alberta.ca/ |
| insurance | "Today, if someone else causes a crash, you claim against their insurance and may sue" | WRONG (imprecise) | Today you already claim accident benefits (Section B, $50,000 over 2 years) from **your own** insurer first, then you can sue the at-fault driver (paid by their liability coverage). Suggested wording: "Today you get limited accident benefits from your own insurer, and if someone else caused the crash you can sue them for more." | https://www.airbfordrivers.ca/albertas-insurance-system/ ; fact sheet |
| insurance | Medical and rehab: no lifetime limit, instead of $50,000 over two years | CONFIRMED | "no overall monetary or time limits", with conditions | fact sheet; comparison PDF |
| insurance | Income replacement much higher, can last to age 65 | CONFIRMED | 90% of net income, gross income up to $125,000 (2025), payable to 65 | fact sheet; comparison PDF |
| insurance | Suing limited, e.g. other driver convicted of certain offences | CONFIRMED | Criminal Code driving, murder-related or vehicle-theft offences, or impaired driving / failing to stop under the Traffic Safety Act | fact sheet; https://www.airbfordrivers.ca/albertas-insurance-system/ |
| insurance | The system that applies depends on the collision date, not the policy date | CONFIRMED | AIRB: "All auto insurance policies in Alberta will automatically switch to Care-First on January 1, 2027." The explicit collision-date wording is only in broker sources (Gallagher, Desjardins). | https://www.airbfordrivers.ca/albertas-insurance-system/ |
| insurance | Young male profile down about $3,094 (30%) | CONFIRMED | | AIRB premium impacts |
| insurance | Middle-aged profiles down about $525 (about 14%) | CONFIRMED | | AIRB premium impacts |
| insurance | Motorcycles up at least 37% | CONFIRMED | | AIRB premium impacts |
| insurance | 2026 good-driver cap 7.5% | CONFIRMED | | https://www.alberta.ca/automobile-insurance-reform |
| insurance | Good driver: no at-fault claims in 6 years, no serious or minor convictions recently | CONFIRMED | Full rule: no at-fault claim in 6 years, no Criminal Code conviction in 4 years, no major or minor conviction in 3 years | alberta.ca reform page; https://www.airbfordrivers.ca/faq/ |
| insurance | You can lose the cap if you switch insurers, move, add a driver or change vehicles | CONFIRMED | AIRB says "moving to a higher-risk area" and "adding a higher-risk driver". Small wording tweak. | AIRB rate-caps article |
| insurance | From 2027 an insurer can't raise average rates more than 5% a year | CONFIRMED | | alberta.ca reform page |
| insurance | The grid ends January 1, 2027, no replacement, mostly helped newer drivers | CONFIRMED | Fewer than 10% of drivers, mostly those with under 8 years' experience | https://www.airbfordrivers.ca/albertas-insurance-system/grid-rating-system/ |
| insurance | Discounts: bundling, winter tires, anti-theft, alumni or professional groups | CONFIRMED | | https://www.airbfordrivers.ca/how-rates-are-calculated/ |
| insurance | Discounts: multiple vehicles, claims-free | UNVERIFIABLE | Not on the AIRB page. Low risk, but no official source. | https://www.airbfordrivers.ca/how-rates-are-calculated/ |
| insurance | Legal minimum liability $200,000 | CONFIRMED | | fact sheet (open.alberta.ca) |
| insurance | Most drivers choose $1 million or $2 million | CONFIRMED | | fact sheet |
| insurance | Calgary's August 2024 hailstorm was "one of the costliest insured disasters in Canadian history" | UNVERIFIABLE | AIRB gives $2.9B insured but doesn't rank it. The ranking comes from IBC (industry). Say "$2.9 billion in insured damage (AIRB)" instead. | https://www.airbfordrivers.ca/articles/hail-damage-and-how-to-reduce-it/ |
| insurance | Overland flood and sewer backup are separate add-ons with their own limits | UNVERIFIABLE | IBC only (industry). alberta.ca says many insurers now offer overland flood coverage. | lead: https://www.ibc.ca/insurance-basics/home/types-of-home-insurance-coverage ; https://www.alberta.ca/floods-wildfires-voluntary-sector-property-insurance |
| insurance | Impact-resistant roofing and siding can lower premiums | UNVERIFIABLE | Only the MNP study for IBC (industry). The wording is already hedged ("ask your insurer"). | lead: IBC 2026-09-28 release |
| insurance | Tenant insurance covers belongings and liability | UNVERIFIABLE | General description, IBC only. Low risk. | lead: IBC |
| insurance | Condo chargeback rule "since February 15, 2026" (also facts.yaml `condo-deductible-chargeback-max.effective`) | OUTDATED / WRONG | The Act came into force Feb 15, 2026, but alberta.ca says the chargeback rules are in the **Condominium Property Regulation amendments, in force February 26, 2026** | https://www.alberta.ca/supporting-albertas-condominium-communities |
| insurance | Lesser of repair cost or corporation's deductible, up to $50,000 | CONFIRMED | "regardless of whether an insurance claim is made" | same |
| insurance | Chargeback is "for damage that starts in your unit" | WRONG | alberta.ca says a chargeback is for costs caused by "the actions, or inaction, of an owner, their tenant or a guest". The notice must give the incident and the unit number. "Starts in your unit" was the old Reg s.62.4 wording (per LawNow, not official). | same |
| insurance | Driving uninsured is illegal | CONFIRMED | | fact sheet |
| insurance | A gap in coverage can make future insurance more expensive | UNVERIFIABLE | No official source found. Soften or drop. | |
| insurance | Complaints: broker/agent, then insurer's complaints officer or ombudsperson; get a final position letter | CONFIRMED | Every insurer must have a complaint process with an ombudsperson or liaison officer. GIO reviews only after a final position letter. | https://www.alberta.ca/insurance-consumer-complaints ; https://giocanada.org/how-the-process-works/ |
| insurance | GIO is free and doesn't handle price disputes | CONFIRMED | Excludes "the cost of insurance and rates" | https://giocanada.org/how-the-process-works/ |
| insurance | Superintendent for insurer conduct; Alberta Insurance Council for agents, brokers, adjusters | CONFIRMED | AIC covers independent adjusters | https://www.alberta.ca/insurance-consumer-complaints |
| insurance | "Care-First is the biggest change to Alberta car insurance in decades" (HonestTake) | UNVERIFIABLE (wording) | Unsourced superlative. Try "a major change". | |

## Claims: alberta-natural-gas-fixed-or-default.mdx

| File | Claim | Verdict | Correct value / note | Source URL |
|---|---|---|---|---|
| gas | With no contract you're on the default gas rate (Default Rate Tariff) | CONFIRMED | | https://ucahelps.alberta.ca/utility-choices/current-rates-and-pricing/default-rates/ |
| gas | It changes every month | CONFIRMED | "can change monthly" | same |
| gas | Default rate has "no contract and no exit fee" | UNVERIFIABLE | Neither UCA page says so. True by nature of a tariff, but not stated. Low risk. | |
| gas | MSA: in 2024 the default gas rate was lower than competitive fixed and variable offers | CONFIRMED | "DRT rates were lower than competitive fixed and variable rates in 2024" | https://www.albertamsa.ca/assets/Documents/Quarterly-Report-for-Q4-2024.pdf |
| gas | "Recent fixed offers have been well above the default rate" | UNVERIFIABLE | The newest official comparison found is 2024. No 2025–26 MSA gas fixed-vs-DRT figure was found. | |
| gas | Summary: "Since 2024, Alberta's default gas rate has usually beaten fixed contracts" | UNVERIFIABLE | Confirmed for 2024 only. Say "In 2024 ..." or find a newer MSA report. | MSA Q4 2024 |
| gas | "Most of a gas bill is delivery and fixed charges" | UNVERIFIABLE | Plausible at about $1–3/GJ, but no official source states the share | |
| gas | Delivery and fees are the same whichever retailer; switching changes only energy | CONFIRMED | UCA: transmission and distribution "are the same for all consumers in the area, regardless of retailer" | https://ucahelps.alberta.ca/utility-choices/shop-for-utilities/how-to-choose-a-retailer/ |
| gas | Energy priced in $/GJ, the only part a retailer sets | CONFIRMED | | UCA default rates |
| gas | Gas prices low since 2024 | CONFIRMED | 2024 average $1.69/GJ. 2026 monthly DRT $0.94–$3.42/GJ (Nov 2026: 1.893 / 1.993). 2025 not checked. | MSA Q4 2024; UCA default rates |
| gas | Default rate approved by the AUC | CONFIRMED | | UCA default rates |
| gas | Fixed contracts up to 5 years | CONFIRMED | EMR s.14 (renewable for further periods of up to 5 years) | https://kings-printer.alberta.ca/documents/Regs/2005_246.pdf |
| gas | Alberta has no cap on exit fees | CONFIRMED | AR 246/2005 requires disclosure but sets no cap. Other statutes weren't checked. | same |
| gas | Rebate program automatically rebates above $6.50/GJ | CONFIRMED | Automatic on most connected customers' bills. Nov 2026 Alberta price $1.99, so no rebate. | https://www.alberta.ca/natural-gas-rebate-program |
| gas | Default rate averaged $6.09 (2022), $3.18 (2023), $1.69 (2024) | CONFIRMED | MSA Figure 83 | MSA Q4 2024 |
| gas | Dual-fuel bundles: "the gas part is usually a fixed price" | UNVERIFIABLE | MSA mentions dual-fuel contracts but not their price type | MSA Q4 2024 |
| gas | You can pick a competitive electricity plan and stay on the default gas rate | CONFIRMED | UCA treats each fuel separately | UCA how-to-choose-a-utility-rate |
| gas | 10-day cooling-off for written or online contracts | CONFIRMED | s.11 and s.12: 10 days after the marketer (written, online) or the consumer (phone) receives the copy | EMR AR 246/2005 (current as of Aug 17, 2026) |
| gas | Phone sign-ups: cancel within 60 days of the first bill | CONFIRMED | | EMR |
| gas | Exit fees must be disclosed before signing | CONFIRMED | | EMR |
| gas | Automatic renewals up to a year; retailer must warn first | CONFIRMED | s.17: notice 30 days to 6 months before expiry | EMR |
| gas | Door-to-door ban since January 1, 2017, covering energy contracts, furnaces, water heaters, windows and more | CONFIRMED | Also air conditioners and energy audits | https://www.alberta.ca/door-to-door-sales-ban |
| gas | Consumer protection line 1-877-427-4088 | CONFIRMED | | same |
| gas | NRCan: 1°C lower for 8 hours saves about 2% | UNVERIFIABLE | The NRCan page wouldn't load (HTTP 202, empty). A search snippet shows the NRCan "Keeping the Heat, section 9" page says this. Not in sources; add it once it's readable. | https://natural-resources.canada.ca/energy-efficiency/home-energy-efficiency/keeping-heat-section-9-operating-your-house-thermostats-water-heaters-furnaces-other-heatingcooling-systems |
| gas | Don't go below 17°C | UNVERIFIABLE | No source found | |
| gas | Air sealing is "the most effective" efficiency fix | UNVERIFIABLE | Unsourced superlative | |
| gas | Change your furnace filter about every three months | UNVERIFIABLE | No official source checked | |
| gas | Savings are "tens of dollars a year" | UNVERIFIABLE | Unsourced estimate. Plausible at about $2/GJ. | |
| gas | No winter disconnection, Nov 1 to mid-April | CONFIRMED | UCA says to April 14; AUC Rule 003 says to April 15 | https://ucahelps.alberta.ca/residential/utilities-disconnection/winter-rules/ ; https://www.auc.ab.ca/winter-utility-reconnection-program/ |
| gas | The debt doesn't go away | CONFIRMED | | UCA winter rules |
| gas | Winter Utility Reconnection Program helps reconnect; call UCA 310-4822 | CONFIRMED | The UCA runs it on the AUC's behalf | AUC WURP page |
| gas | UCA Cost Comparison Tool | CONFIRMED | URL 200 | https://ucahelps.alberta.ca/cost-comparison-tool/ |
| gas | HonestTake: "stay on the default gas rate" | UNVERIFIABLE (wording risk) | Reads close to personal advice. Frame it conditionally ("for many households ... the default rate has been the cheaper choice"). | |

## facts.yaml entries

| Fact id | Value | Verdict | Note | Source URL |
|---|---|---|---|---|
| care-first-start | January 1, 2027 | CONFIRMED | | https://www.alberta.ca/care-first-auto-insurance |
| care-first-avg-saving | 13.7% lower (about $297 a year) | CONFIRMED | | https://www.airbfordrivers.ca/newsroom/care-first-premium-impacts/ |
| auto-renewal-cap-2027 | 10% | CONFIRMED | | https://www.alberta.ca/automobile-insurance-reform |
| good-driver-cap-2026 | 7.5% | CONFIRMED | | same |
| auto-liability-minimum | $200,000 | CONFIRMED | | open.alberta.ca fact sheet |
| condo-deductible-chargeback-max | $50,000 | CONFIRMED (value) / OUTDATED (`effective`) | `effective` should be "since February 26, 2026" (Condominium Property Regulation amendments) | https://www.alberta.ca/supporting-albertas-condominium-communities |
| energy-contract-cooling-off | 10 days | CONFIRMED | | https://kings-printer.alberta.ca/documents/Regs/2005_246.pdf |
| gas-rebate-ceiling | $6.50 per GJ | CONFIRMED | | https://www.alberta.ca/natural-gas-rebate-program |
| energy-door-to-door-ban | since January 1, 2017 | CONFIRMED | | https://www.alberta.ca/door-to-door-sales-ban |

## Totals

- CONFIRMED: 56 (insurance 26, gas 22, facts.yaml 8)
- Not confirmed: insurance 12, gas 11, facts.yaml 1 (condo `effective` date)
- Broken URLs: 1 (airb-applications.alberta.ca, HTTP 500). Redirects: none.
