# Fact-check: phones & internet guide, 2026 tax brackets guide, tax calculator

Date of check: 2026-11-24. Checker: fact-checker agent (independent, read-only on content).

Files checked:
- src/content/guides/cut-phone-internet-bills-alberta.mdx
- src/content/guides/alberta-income-tax-brackets-2026.mdx
- src/lib/tax.ts, src/components/calculators/TaxCalculator.astro
- facts.yaml entries: telecom-fee-ban-start, connecting-families-plans, wireless-data-overage-cap, wireless-roaming-cap,
  alberta-satellite-rebate, federal-lowest-rate-2026, alberta-lowest-bracket-2026, filing-deadline-2026-returns

Access notes: crtc.gc.ca returned 403 (2026-43 decision text not read). Fee-ban details come from the CCTS page
https://www.ccts-cprst.ca/which-fees-are-allowed/ (reached via https://www.ccts-cprst.ca/?p=12994). fizz.ca and
quebecor.com refuse automated fetches.

## Summary

- Non-CONFIRMED items: 9 (3 WRONG, 6 UNVERIFIABLE or source/wording issues)
- CONFIRMED: 52
- Broken/redirected URLs: 2 (TELUS brand standards goes to a login page; Rogers "who-we-are" redirects to "our-story")

## Non-CONFIRMED items

| File | Claim | Verdict | Correct value / fix | Source URL |
|---|---|---|---|---|
| cut-phone-internet (line 114) | Connecting Families: "you're a senior getting the Guaranteed Income Supplement" | WRONG | Seniors must get **at least 80% of the maximum GIS** (families: maximum CCB, which is correct) | https://ised-isde.canada.ca/site/ised/en/programs-and-initiatives/connecting-families-initiative/eligibility |
| cut-phone-internet (line 106) + facts.yaml `wireless-roaming-cap` label | "roaming charges at $100" / "cap on roaming charges" | WRONG (too broad) | Wireless Code E2 caps **data** roaming charges (national and international) at $100 per monthly billing cycle, per account. Voice/text roaming isn't covered. Say "data roaming charges". Value $100 is right. | https://www.ccts-cprst.ca/wp-content/uploads/2026/05/Annotated-Guide-to-the-Wireless-Code-2026.pdf (E2, p.37) |
| cut-phone-internet (line 97) | Trial: "at least 15 days to try a new contract ... as long as you've used less than half your monthly allowance" | WRONG (incomplete) | G4: trial applies only to contracts **with an early cancellation fee**; min. 15 calendar days (30 for people who self-identify as having a disability, with double the usage). Provider may set usage limits of **at least half** the monthly allowance; you can cancel if you used less than that limit **and return the device in near-new condition with original packaging**. | same PDF, G4 (p.51) |
| facts.yaml `telecom-fee-ban-start` | "June 12, 2026", source = CRTC March 12 release | Value CONFIRMED, **source does not support it** | The CRTC release (dated 2026-03-12) gives no in-force date. CCTS states "As of June 12, 2026, most service providers are generally not allowed to charge" activation/change fees. Change fact source to the CCTS page (and add it to the guide's sources; it also supports the "Fees that are still allowed" Warning and the SIM/set-up review line). | https://www.ccts-cprst.ca/which-fees-are-allowed/ |
| cut-phone-internet (line 84) | "Phones sold in Canada now come unlocked" | Wording risk (overbroad) | Wireless Code F1: devices **provided by a service provider** must be unlocked; a locked device must be unlocked free on request. Say "Phones from Canadian providers now come unlocked". | Annotated Guide PDF, F1 (p.41) |
| cut-phone-internet (line 80) | Quebecor owns Freedom Mobile and Fizz | UNVERIFIABLE (Fizz part) | freedommobile.ca confirms "Videotron Ltd., doing business as Freedom Mobile". Fizz ownership not confirmed from a primary page (fizz.ca / quebecor.com blocked automated fetch). Check by hand. | https://www.freedommobile.ca/en-CA/about-us |
| cut-phone-internet (lines 58, 73-80) | Cheaper brands "use the same towers" / "run on TELUS's network" etc. | UNVERIFIABLE (network part) | Ownership confirmed (TELUS: Koodo, Public Mobile "part of the same family"; Rogers acquired Fido 2004, launched chatr 2010; BCE lists Bell, Virgin Plus, Lucky Mobile retail). None of the fetched company pages states the brands use the parent's network. Low risk, but either soften ("owned by") or find a company page that says so. | https://www.telus.com/en/about/affordability ; https://about.rogers.com/our-story/ ; https://bce.ca/about-bce |
| cut-phone-internet (line 123) | CCTS "can't change prices" | UNVERIFIABLE | Not stated on the complaints-process, how-we-can-help or home pages. CCTS home page does confirm "completely free to all consumers"; complaints page confirms billing-error fixes and remedies up to $5,000. Drop "can't change prices" or source it. | https://www.ccts-cprst.ca/ ; https://www.ccts-cprst.ca/for-consumers/telecom-complaints/complaints-process-explained/ |
| facts.yaml `filing-deadline-2026-returns` | "April 30, 2027" (June 15 for self-employed, pay by April 30) | CONFIRMED by statute; **cited page stale** | Correct under ITA 150(1)(d) (April 30 of following year; June 15 if you carried on a business). April 30, 2027 is a Friday. But the cited CRA "Important dates" page still shows only the 2025 tax year (April 30 / June 15, 2026). Recheck when CRA posts 2026-year dates. | https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-150.html ; https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals.html |

Other wording notes (not counted as errors):
- Tax guide "A raise always leaves you with more money" / "never makes you worse off": true for income tax brackets, but benefit clawbacks (CCB, GIS, GST credit) can push effective rates much higher. Consider "for income tax alone".
- Combined marginal-rate table and calculator ignore the federal BPA phase-out ($181,440–$258,482), which adds about 0.3 percentage points in that range. tax.ts says so in a comment; the calculator's "your real tax is usually a little lower" is not true above $181,440. Consider a one-line note.
- marginalRate() uses `income < top`, so income exactly at a threshold (e.g. $58,523) shows the next rate up. Cosmetic.
- "Most Albertans can save money on their phone in under an hour" is an unsourced claim; fine as opinion inside HonestTake.

## Broken / redirected URLs

| URL | Result | Fix |
|---|---|---|
| https://telus.com/en/brand-resources/standards/dual-and-tri-brand | 301 → www.telus.com → redirects to https://brc.telus.com/login/ (login wall) | Replace with https://www.telus.com/en/about/affordability ("TELUS brands ... we're all part of the same family") |
| https://about.rogers.com/who-we-are/ | 301 → https://about.rogers.com/our-story/ | Use https://about.rogers.com/our-story/ (Fido 2004, chatr 2010) |

All other URLs returned 200 and support their claims (two CRTC releases, CCTS PDF, CCTS complaints page, ISED eligibility + low-cost plans, Alberta Satellite Rebate, CRA current-year rates, Alberta personal income tax, CRA indexation, CRA important dates [stale year], T4127 Jan 2027, CVITP).

## Full table: CONFIRMED items

| File | Claim | Verdict | Value | Source URL |
|---|---|---|---|---|
| phones | Fee ban: activation, set-up, plan-change fees not allowed since June 12, 2026 (most providers; no-technician) | CONFIRMED | as stated | https://www.ccts-cprst.ca/which-fees-are-allowed/ |
| phones | Still allowed: financed device balance | CONFIRMED | "Unpaid balance for device financing" | same |
| phones | Still allowed: equipment not returned | CONFIRMED | | same |
| phones | Still allowed: technician visit | CONFIRMED | | same |
| phones | Still allowed: early cancellation on fixed-term internet contracts | CONFIRMED | | same |
| phones | Still allowed: reconnection after non-payment | CONFIRMED | | same |
| phones | New SIM/set-up charges under CRTC review | CONFIRMED | Bell device handling, TELUS SIM/eSIM, Rogers set-up/shipping/SIM | same |
| phones | Device balances still due when you cancel | CONFIRMED | | same |
| phones | Source title "CRTC eliminates fees..." (2026-03-12) | CONFIRMED | 200 | https://www.canada.ca/en/radio-television-telecommunications/news/2026/03/crtc-eliminates-fees-to-make-it-easier-to-switch-internet-and-cellphone-plans.html |
| phones | Source "CRTC takes action to help Canadians more easily manage..." (2026-04-24) | CONFIRMED | 200 | https://www.canada.ca/en/radio-television-telecommunications/news/2026/04/crtc-takes-action-to-help-canadians-more-easily-manage-their-internet-and-cellphone-plans.html |
| phones | TELUS brands Koodo, Public Mobile | CONFIRMED (ownership) | | https://www.telus.com/en/about/affordability |
| phones | Rogers brands Fido, chatr | CONFIRMED (ownership) | | https://about.rogers.com/our-story/ |
| phones | Bell brands Virgin Plus, Lucky Mobile | CONFIRMED (ownership) | | https://bce.ca/about-bce |
| phones | Freedom Mobile = Quebecor/Vidéotron | CONFIRMED | Videotron Ltd. d.b.a. Freedom Mobile | https://www.freedommobile.ca/en-CA/about-us |
| phones | Provider must unlock a phone free on request | CONFIRMED | F1(ii) | CCTS Annotated Guide PDF |
| phones | Trial 30 days for people with disabilities | CONFIRMED | G4(iv) | same |
| phones / facts `wireless-data-overage-cap` | $50 data overage cap per month unless account holder agrees | CONFIRMED | $50 per monthly billing cycle, per account (E3) | same |
| facts `wireless-roaming-cap` | value $100 | CONFIRMED (value) | see label fix above | same |
| phones | Cancellation takes effect the day the provider gets notice | CONFIRMED | G5(ii) | same |
| phones | Contract-discount cancellation fee ≤ discount, $0 by 24 months | CONFIRMED | G2 | same |
| phones | Annotated Guide = Wireless Code version as of April 2026 | CONFIRMED | 200 | same |
| phones | Independents can rent big companies' fibre (since Feb 2025, final rates April 2026) | CONFIRMED | | https://www.canada.ca/en/radio-television-telecommunications/news/2026/04/crtc-takes-action-to-help-deliver-more-choice-of-affordable-internet-services.html |
| phones | Connecting Families: families on maximum CCB | CONFIRMED | | https://ised-isde.canada.ca/site/ised/en/programs-and-initiatives/connecting-families-initiative/eligibility |
| phones | Connecting Families: invitation letter needed | CONFIRMED | | same |
| facts `connecting-families-plans` | $10 or $20 a month | CONFIRMED | $10/mo (10/1 Mbps, 100 GB) or $20/mo (50/10 Mbps, 200 GB), plus tax | https://ised-isde.canada.ca/site/ised/en/programs-and-initiatives/connecting-families-initiative/low-cost-plans |
| facts `alberta-satellite-rebate` | up to $1,000, one-time | CONFIRMED | per household | https://www.alberta.ca/alberta-satellite-rebate-program |
| phones | Covers satellite equipment and installation | CONFIRMED | hardware, installation, taxes; not routers/monthly fees | same |
| phones | For homes without high-speed access | CONFIRMED | | same |
| phones + deadline | Buy and apply Aug 11, 2026 – March 31, 2027 | CONFIRMED | | same |
| phones | CCTS free | CONFIRMED | "completely free to all consumers" | https://www.ccts-cprst.ca/ |
| phones | CCTS covers phone, internet, TV; complain to provider first; fixes billing errors | CONFIRMED | | https://www.ccts-cprst.ca/for-consumers/telecom-complaints/complaints-process-explained/ |
| tax | Federal 2026 brackets 14 / 20.5 / 26 / 29 / 33% at $58,523 / $117,045 / $181,440 / $258,482 | CONFIRMED | | https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html |
| facts `federal-lowest-rate-2026` | 14% (14.5% for 2025) | CONFIRMED | | same |
| tax | Alberta 2026 brackets 8/10/12/13/14/15% at $61,200 / $154,259 / $185,111 / $246,813 / $370,220 | CONFIRMED | | https://www.alberta.ca/personal-income-tax ; CRA current-year page |
| facts `alberta-lowest-bracket-2026` | $61,200 | CONFIRMED | | https://www.alberta.ca/personal-income-tax |
| tax | Lowest combined band 22% | CONFIRMED | 14% + 8% | computed |
| tax | Federal BPA 2026 $16,452 | CONFIRMED | max; min $14,829 above $258,482 | https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html |
| tax | Alberta BPA 2026 $22,769 | CONFIRMED | TD1AB 2026 line 1 ($22,323 × 1.02) | https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/td1ab/td1ab-26e.pdf |
| tax | Combined marginal table (10 rows: 22, 28.5, 30.5, 36, 38, 41, 42, 43, 47, 48%) | CONFIRMED | bracket sums correct (BPA phase-out caveat above) | computed |
| tax.ts | Bracket arrays and BPA values match CRA/Alberta | CONFIRMED | | as above |
| tax.ts | Method: bracket tax minus BPA × lowest rate, floored at 0 | CONFIRMED | standard credit method (simplified) | computed |
| tax.ts | $70,000 → $12,197 total | CONFIRMED | federal $8,242.73 + Alberta $3,954.48 = $12,197.21 | computed |
| tax | Average rate at $70,000 about 17% | CONFIRMED | 17.4% | computed |
| tax | Marginal at $70,000 30.5% | CONFIRMED | | computed |
| tax | $5,000 RRSP at $70,000 saves about $1,525 | CONFIRMED | $1,525.00 (stays in 30.5% band) | computed |
| TaxCalculator | Defaults income $70,000, extra $5,000 | CONFIRMED | consistent with guide text | file |
| tax | 2027: federal index 2.6%, Alberta 2.0% | CONFIRMED | T4127 Table 8.2 (Federal 0.026; AB 0.020) | https://www.canada.ca/content/dam/cra-arc/formspubs/pub/t4127-jan/thrrtsmnts-01-27e.csv |
| tax | 2027 lowest federal bracket to $60,044; Alberta 8% to $62,424 | CONFIRMED | T4127 Table 8.1 | https://www.canada.ca/content/dam/cra-arc/formspubs/pub/t4127-jan/rtsncmtrshldcnstnt-01-27e.csv |
| tax | CRA main rates page not yet updated for 2027 | CONFIRMED | page modified 2026-06-25, shows 2026 | CRA current-year page |
| tax | Late-filing penalty 5% + 1%/full month, up to 12 months | CONFIRMED | (repeat: 10% + 2%/month up to 20) | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/interest-penalties/late-filing-penalty.html |
| tax | Self-employed file by June 15, pay by April 30 | CONFIRMED | ITA 150(1)(d)(ii); CRA "pay on or before April 30" | ITA s.150 ; CRA important dates |
| tax | Free tax clinics (CVITP) for modest income, simple taxes; volunteers file | CONFIRMED | 200 | https://www.canada.ca/en/revenue-agency/services/tax/individuals/community-volunteer-income-tax-program.html |
| tax | Source T4127 Jan 2027 (124th ed.) | CONFIRMED | 200 | https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan.html |
