# Fact-check: accounts guide + trust pages — 2026-11-24

Checked by: fact-checker agent, 2026-11-24. Read-only; no content files edited.

Scope:
- `src/content/guides/tfsa-rrsp-fhsa-compared.mdx`
- `src/data/facts.yaml` entries it uses: tfsa-limit-2026, tfsa-cumulative-room-2026, rrsp-limit-2026, fhsa-annual-limit, fhsa-lifetime-limit, cesg-lifetime, hbp-limit, rrsp-withholding-rates, oas-clawback-threshold
- Trust pages: about, editorial-code, how-we-make-money, how-we-check-facts, corrections, privacy, terms

Summary: 38 CONFIRMED; 1 WRONG (wording); 1 redirected URL; 10 trust-page risks (legal-claim or only-Kevin-can-confirm). The live site (honestpenny.ca) did not respond, so cookie and header claims could not be tested live.

## Guide: tfsa-rrsp-fhsa-compared.mdx

| # | Claim | Verdict | Correct value / note | Source URL |
|---|---|---|---|---|
| 1 | TFSA annual limit 2026 `$7,000` (fact tfsa-limit-2026) | CONFIRMED | $7,000 | https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html |
| 2 | Total TFSA room `$109,000` if eligible since 2009 (fact tfsa-cumulative-room-2026) | CONFIRMED | Sum of 2009–2026 limits = 20,000+11,000+10,000+16,500+24,000+6,500+21,000 = $109,000 | same |
| 3 | RRSP: 18% of last year's earned income up to `$33,810` (fact rrsp-limit-2026) | CONFIRMED | $33,810 for 2026 (less PA etc.) | same; https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html |
| 4 | FHSA `$8,000` a year (fact fhsa-annual-limit) | CONFIRMED | $8,000 | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html |
| 5 | FHSA `$40,000` lifetime (fact fhsa-lifetime-limit) | CONFIRMED | $40,000 | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/contributing-your-fhsa.html |
| 6 | CESG up to `$7,200` per child (fact cesg-lifetime) | CONFIRMED | $7,200 lifetime | https://www.canada.ca/en/services/benefits/education/education-savings/estimating-amounts.html |
| 7 | TFSA: no deduction; growth and withdrawals tax-free | CONFIRMED | | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/what.html |
| 8 | TFSA withdrawals added back as room on January 1 of next year | CONFIRMED | | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/withdraw.html |
| 9 | TFSA withdrawals don't reduce federal income-tested benefits like CCB and GIS | CONFIRMED | CRA lists OAS, GIS, EI, CCB, CWB, GST credit | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/what.html |
| 10 | ...and the Canada Groceries and Essentials Benefit | CONFIRMED | CGEB replaced the GST/HST credit from July 2026 with the same rules; the CRA TFSA page still says "GST credit" | https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit.html |
| 11 | TFSA over-contributions taxed at 1% a month | CONFIRMED | | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/overcontribute.html |
| 12 | $70,000 Alberta income, $5,000 RRSP saves about $1,525 at 30.5% marginal rate (2026) | CONFIRMED | $65k–$70k falls in federal 20.5% (>$58,523) + Alberta 10% (>$61,200) = 30.5%; 0.305 × 5,000 = $1,525 | https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html ; https://www.alberta.ca/personal-income-tax |
| 13 | RRSP growth not taxed while it stays in the plan | CONFIRMED | | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/making-withdrawals.html |
| 14 | HBP up to `$60,000` (fact hbp-limit) | CONFIRMED | $60,000 | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan/participate-home-buyers-plan.html |
| 15 | HBP repaid over 15 years | CONFIRMED | Note: for first withdrawals 2022–2028, the 15-year repayment starts in the 5th year after the withdrawal (e.g. 2026 → first repayment 2031). Worth adding. | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html |
| 16 | RRSP withholding `10% / 20% / 30%` (fact rrsp-withholding-rates) | CONFIRMED | ≤$5,000 10%; $5,000.01–$15,000 20%; >$15,000 30% (outside Quebec, residents) | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/making-withdrawals/tax-rates-on-withdrawals.html |
| 17 | Alberta actual rate 22% to 48% | CONFIRMED | Lowest combined 14%+8%=22%; top 33%+15%=48% (2026). Income under the basic personal amount pays 0%, and withholding can also lead to a refund; "owe more" is not always the outcome. | CRA current-year rates; alberta.ca/personal-income-tax |
| 18 | RRSP room gone for good on withdrawal (except HBP/LLP) | CONFIRMED | Deduction limit formula has no add-back for withdrawals; HBP/LLP are repaid. No single current CRA sentence states it; indirect sources. | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html ; https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/lifelong-learning-plan.html |
| 19 | LLP is a repayable RRSP withdrawal (exception) | CONFIRMED | Repaid generally over 10 years | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/lifelong-learning-plan.html |
| 20 | RRSP/RRIF withdrawals count as income and can reduce GIS | CONFIRMED | GIS eligibility page counts RRSP withdrawals in net income | https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/guaranteed-income-supplement/eligibility.html |
| 21 | OAS clawback above `$93,454` (fact oas-clawback-threshold) | CONFIRMED | $93,454 is the threshold for 2025 income (July 2026–June 2027). 2026 income: $95,323. Guide gives no year; suggest "($93,454 on 2025 income)". | https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html |
| 22 | Must close RRSP by end of year you turn 71, usually into RRIF with minimum yearly withdrawals | CONFIRMED | Dec 31 of year you turn 71; RRIF minimum each year | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/rrsp-options-when-you-turn-71.html ; https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/minimum-amount-a-rrif.html |
| 23 | Alberta lowest band: deduction saves only about 22% | CONFIRMED | 14% + 8% | as #17 |
| 24 | FHSA deductible in, tax-free out for a first home | CONFIRMED | | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html |
| 25 | Combine FHSA with HBP for same home; FHSA not repaid | CONFIRMED | | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/withdrawals-transfers-out-your-fhsas.html |
| 26 | FHSA can move to RRSP without using RRSP room | CONFIRMED | Only by direct transfer (Form RC721); a withdraw-and-recontribute is taxable and uses room. Suggest "by direct transfer". | same |
| 27 | FHSA room only starts once you open the account | CONFIRMED | Carryforward is capped at $8,000 | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/contributing-your-fhsa.html |
| 28 | FHSA only for first-time buyers | CONFIRMED | | FHSA main page |
| 29 | CESG 20% on first $2,500 a year per child | CONFIRMED | Basic CESG $500/yr; extra for lower incomes on first $500 | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-education-savings-plans-resps/canada-education-savings-programs-cesp/canada-education-savings-grant-cesg.html |
| 30 | Canada Learning Bond for lower-income families with no contribution | CONFIRMED | Up to $2,000 | https://www.canada.ca/en/services/benefits/education/education-savings/estimating-amounts.html |
| 31 | RDSP for people eligible for the DTC | CONFIRMED | | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-disability-savings-plan-rdsp/eligibility-contributions.html |
| 32 | RDSP withdrawals within 10 years of grant/bond can mean paying some back | CONFIRMED | Assistance holdback = grants/bonds of prior 10 years; proportional $3 per $1 withdrawn (since 2014) | https://www.canada.ca/en/employment-social-development/programs/disability/savings/issuers/aha.html |
| 33 | RDSP: grants and bonds can add far more than you put in; partly taxable | CONFIRMED | Up to 300% grant match; $1,000/yr bond with no contribution; contributions not taxable on withdrawal | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-disability-savings-plan-rdsp/canada-disability-savings-grant-canada-disability-savings-bond.html |
| 34 | RESP: no deduction; growth and grants taxed in student's hands | CONFIRMED | EAPs included in beneficiary's income | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-education-savings-plans-resps/resp-works.html |
| 35 | Pension contributions reduce RRSP room via pension adjustment, shown on notice of assessment | CONFIRMED | | contributions-affect deduction limit page (#3); https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/where-you-find-your-rrsp-prpp-deduction-limit.html |
| 36 | Table: non-registered, "You pay tax on interest, dividends and capital gains each year" | WRONG (wording) | Capital gains are taxed only when you sell (or are deemed to sell), not each year. Interest and dividends are taxed yearly. Body text is close but also implies yearly. Suggest: "You pay tax on interest and dividends each year, and on capital gains when you sell." | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains.html |
| 37 | Canadian dividends and capital gains taxed more lightly than interest | CONFIRMED | Dividend tax credit; partial inclusion of gains | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-40425-federal-dividend-tax-credit.html |
| 38 | "No other account does both" (FHSA) | CONFIRMED | True of registered accounts; wording OK | FHSA main page |
| 39 | `<Official>` CRA My Account URL | REDIRECTED (301) | `.../e-services/digital-services-individuals/account-individuals.html` → https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html | |

Frontmatter `sources[].url`: all 8 returned HTTP 200 and support the claims they're cited for. facts.yaml `source.url` for the 9 facts used: all 200.

Wording notes (not errors): "Take every dollar of match" and "Always contribute enough to get the full employer match" read as general advice; acceptable but borders on personal advice. `fhsa-lifetime-limit` is used once with `nosource`, and many figures in the guide are plain text without a linked source (18%, 20%, $2,500, 1% a month, 15 years, 22%–48%, 30.5%). That conflicts with the how-we-check-facts claim "Every rate, limit, deadline and dollar figure in a guide links to its source" (see T7).

## Trust pages

| # | Page | Claim | Verdict | Note / correct position | Source URL |
|---|---|---|---|---|---|
| T1 | privacy | "This site doesn't set cookies" | UNVERIFIABLE (site not live) | No first-party cookies in code. But Cloudflare can set `__cf_bm`/`cf_clearance` if Bot Fight Mode, bot management or a challenge is on for the zone. After a Kit sign-up the browser goes to app.kit.com, which may set its own cookies. Run `curl -sI` and a browser check on production before launch. | — |
| T2 | privacy (meta description) | "No cookies, no tracking" | RISK | The CSP allows Cloudflare Web Analytics (static.cloudflareinsights.com). If it's on, "no tracking" is untrue (it's cookieless analytics). Kit emails track opens and clicks by default. The body text says only "no ad tracking"; the description goes further. Make them match, and disclose analytics and email tracking or turn them off. | public/_headers |
| T3 | privacy | No mention of the email provider (Kit, a US company) | RISK (likely non-compliant) | Alberta PIPA s.6(2) requires policies to state the countries outside Canada where a service provider collects or stores data, and why. s.13.1 requires notice when a service provider outside Canada collects personal information with consent. Name Kit, the US, and the purpose. | https://kings-printer.alberta.ca/documents/Acts/P06P5.pdf |
| T4 | privacy | "we keep your email address and the date you agreed, only to send you that email" | RISK | Kit also records IP address, sign-up source and open/click data. Either list these or configure Kit not to collect them. | — |
| T5 | privacy (description) | "your rights under Canadian privacy law" | RISK (thin) | The page doesn't name PIPA, the person who answers privacy questions (PIPA s.6), or the right to complain to the OIPC Alberta. Add them. | PIPA (above) |
| T6 | Signup / CASL (linked from privacy) | Consent request | RISK | CASL regulations s.4 require a consent request to include the name of who is asking, a **mailing address**, and a phone, email or web address, plus a statement that consent can be withdrawn. The form has the withdrawal line but no mailing address; `site.legalAddress` is "Alberta, Canada", which is not a mailing address. Every email also needs a mailing address (s.2(1)(d)). Already a pending to-do in CLAUDE.md; it blocks launch of the sign-up. | https://laws-lois.justice.gc.ca/eng/regulations/SOR-2012-36/page-1.html |
| T7 | how-we-check-facts | "Every rate, limit, deadline and dollar figure in a guide links to its source" | WRONG as written | Not literally true in this guide (see wording notes). Soften to "is sourced on the page" or link every figure. | — |
| T8 | how-we-check-facts / editorial-code | "A person on our team reads every page, checks every figure against its source, and signs off"; "A person on our team signs off every guide" | UNVERIFIABLE (only Kevin can confirm) | Process claim. True only if a human really does sign off each guide. | — |
| T9 | about | "independently owned and run in Alberta by a small editorial team"; "no company can pay to be listed" | UNVERIFIABLE (only Kevin can confirm) | Ownership and team claims. | — |
| T10 | how-we-make-money | "earns nothing from any company... paid for by the people who run it" | UNVERIFIABLE (only Kevin can confirm) | True as of today per the code (no affiliate links found). Recheck before any Kit sponsor or affiliate goes live. | — |
| T11 | about | "The UK has had sites like this for twenty years" | UNVERIFIABLE (unsourced, low risk) | MoneySavingExpert dates from 2003, about 23 years. Fine as an approximation; no official source. | — |
| T12 | terms | Whole page | NOTE | Marked DRAFT for review by an Alberta lawyer. Nothing false found. The liability limit is standard, but whether it can be enforced is a question for the lawyer. | — |
| T13 | privacy | "Numbers you type into a calculator are never sent to us" | CONFIRMED (code review) | No fetch/XHR/beacon calls in calculator scripts or layouts. | src/components/calculators/* |
| T14 | corrections | "check every report within two working days" | NOTE | A promise, not a fact. Keep it only if it can be met. | — |

## Broken / redirected URLs
- `https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html` → 301 to `https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html` (guide `<Official>` link).
- None broken. honestpenny.ca did not respond (not live), so production headers and cookies weren't tested.
