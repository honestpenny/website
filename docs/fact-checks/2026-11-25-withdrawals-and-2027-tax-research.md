# Research: withdrawing money (RRSP vs TFSA vs non-registered) + official 2027 tax figures

Date: 2026-11-25. Researcher: research agent (read-only on site code).
Method: every source was fetched on 2026-11-25 with curl (text extracted locally) or WebFetch. The T4127 January 2027 PDF and its CSVs were downloaded from canada.ca and read directly. Official sources only: canada.ca (CRA, ESDC, Finance), pm.gc.ca, laws-lois.justice.gc.ca, alberta.ca, bankofcanada.ca, and the FP Canada / Institute of Financial Planning (IFP) guidelines PDF.

Status key:
- **CONFIRMED**: an official page states it, quoted.
- **DERIVED**: worked out from confirmed official numbers (the arithmetic is shown). Not itself an official figure.
- **UNCONFIRMED**: no official page found that states it. Leave it out of guides or say it's unconfirmed.

## Summary of what is NOT confirmed (read first)

1. **TFSA 2027 dollar limit: UNCONFIRMED.** The CRA limits table stops at 2026 (page updated 2026-10-28). CRA usually announces in late November. My estimate of the indexed amount is about $7,372, which would round to **$7,500**. That is an estimate only. Do not publish it as fact.
2. **OAS recovery-tax threshold for the 2027 income year: UNCONFIRMED.** Not published yet. 2026 is $95,323 (CONFIRMED). $95,323 × 1.026 ≈ $97,800 is an estimate only.
3. **CRA "Adjustment of personal income tax and benefit amounts" page has no 2027 column yet.** It still shows 2023–2026. The 2027 brackets, basic personal amount and Canada employment amount below come from CRA's T4127 payroll formulas (124th ed., effective 2027-01-01, updated 2026-11-19). Those are CRA-published, but T4127 says its figures reflect changes "which, if enacted as proposed, would be effective January 1, 2027". The CRA "Tax rates and income brackets" page still shows 2026 only.
4. **"RRSP contribution room is lost permanently after a withdrawal": not stated in so many words on any CRA page I could find.** CRA says HBP/LLP withdrawals must be repaid, says an RRSP-to-FHSA transfer "will not restore your unused RRSP deduction room", and only restores room through a pension adjustment reversal (PAR). The general rule follows from how the deduction limit is calculated, but I found no official one-line quote. Suggested wording: "Taking money out doesn't give you the contribution room back (unlike a TFSA)." Mark as unconfirmed or link the T4040 deduction-limit section.
5. **Pension income amount for 2026/2027**: the CRA line 31400 page shows tax year 2025 ($2,000). I didn't find a 2026 or 2027 version, and I didn't check whether it is indexed. Re-check before publishing it as a 2026/2027 figure.
6. **"Future tax rates might rise"**: no official forecast exists. See A7.

---

## Part A — Withdrawing money

### A1. RRSP withdrawals before retirement

| Fact | Value | Exact quote | URL | Status |
|---|---|---|---|---|
| Withholding tax rates (outside Quebec) | 10% up to $5,000; 20% over $5,000 to $15,000; 30% over $15,000 | "10% (5% in Quebec) on amounts up to $5,000" / "20% (10% in Quebec) on amounts exceeding $5,000, up to and including $15,000" / "30% (15% in Quebec) on amounts over $15,000" | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/making-withdrawals/tax-rates-on-withdrawals.html | CONFIRMED |
| Withholding is a prepayment, not the final tax | You may owe more when you file | "The tax that was withheld may not always be enough to account for the tax you owe." | same URL | CONFIRMED |
| Withdrawal is added to your income for the year | Reported on line 12900; tax withheld is claimed back on line 43700 | "report your RRSP income on line 12900 of your income tax and benefit return for the year the RRSPs are withdrawn" / "claim the tax deducted from box 30 of your T4RSP slip on line 43700" | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/making-withdrawals/withdrawing-your-rrsps.html | CONFIRMED |
| Taxed at your marginal rate | Follows from income inclusion + progressive brackets (see Part B) | No single CRA sentence says "marginal rate" | — | DERIVED |
| Contribution room not restored after a withdrawal | — | Nearest official quotes: "The transfer of property from your RRSPs to your FHSAs will not restore your unused RRSP deduction room." and "A PAR restores your RRSP deduction limit when you end your membership in an RPP or a DPSP in certain circumstances." | https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4040/rrsps-other-registered-plans-retirement.html | UNCONFIRMED as a general statement (see summary item 4) |
| HBP withdrawal limit | $60,000 | "Currently, the HBP withdrawal limit is $60,000." / "You cannot withdraw more than $60,000 in total under the HBP." | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html ; https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan/withdraw-funds-rrsp-s-under-home-buyers-plan.html | CONFIRMED |
| HBP over-limit amount is taxable | Excess over $60,000 is income, tax withheld | "Any portion of the withdrawals from your RRSPs under the HBP that exceed $60,000 will have to be reported as income ... your RRSP issuer will have to withhold tax on the amount in excess" | withdraw-funds URL above | CONFIRMED |
| HBP repayment period | Up to 15 years | "You have up to 15 years to repay to your registered retirement savings plan (RRSP)" | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan/repay-funds-withdrawn-rrsp-s-under-home-buyers-plan.html | CONFIRMED |
| HBP grace period (normal) | Repayments start the 2nd year after the first withdrawal | "your repayment period started the second year after the year you made your first withdrawal" | repay URL above | CONFIRMED |
| HBP grace period (temporary relief) | First withdrawal 2022-01-01 to **2028-12-31**: repayments start the 5th year after | "the 15-year repayment period would start the fifth year following the year in which a first withdrawal was made"; relief "has been extended" "for individuals making a first HBP withdrawal between January 1, 2026, and December 31, 2028" (extends relief for withdrawals "between January 1, 2022, and December 31, 2025"). CRA example: first withdrawal in 2026 → repayments start 2031. | what-home-buyers-plan URL + repay URL above | CONFIRMED (note: the extension to 2028 is new; older guides say 2025) |
| HBP missed repayment | Missed amount is added to income | "If you do not make the minimum required repayment to your RRSPs, PRPPs, or SPP, you have to include it as RRSP income" | repay URL above | CONFIRMED |
| LLP limits | $10,000 a year; $20,000 total per participation | "you can withdraw up to $10,000 from your RRSPs in a calendar year. This is your annual LLP limit." / "You cannot withdraw more than $20,000 each time you participate in the LLP. This is your total LLP limit." | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/lifelong-learning-plan/participate.html | CONFIRMED |
| LLP repayment | 10 years, usually starting the 5th year after the first withdrawal | "Over a period of 10 years, you must repay your registered retirement savings plan (RRSP)" / "your repayment period starts in the fifth year after your first LLP withdrawal" (earlier if not a qualifying student 2 years in a row) | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/lifelong-learning-plan/repayments-your-rrsp-under.html | CONFIRMED |

### A2. RRSP → RRIF, RRIF minimums, credits, splitting, death

| Fact | Value | Exact quote | URL | Status |
|---|---|---|---|---|
| Convert by end of year you turn 71 | Cash out, RRIF or annuity | "Generally, an RRSP must mature by the last day of the year in which you turn 71. On maturity, the funds must be withdrawn, transferred to a RRIF, or used to purchase an annuity. There are no immediate tax implications when amounts are transferred to a RRIF or used to purchase an annuity." | T4040 (URL in A1) | CONFIRMED |
| Last year to contribute | Year you turn 71 | "December 31 of the year you turn 71 years old is the last day that you can contribute to your RRSPs." | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/rrsp-options-when-you-turn-71.html | CONFIRMED |
| RRIF minimum formula, age 70 and under | 1 ÷ (90 − age) | "If the age is 70 years or younger, the prescribed factor is calculated as follows: 1 divided by (90 minus the age)." | https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/completing-slips-summaries/t4rsp-t4rif-information-returns/payments/chart-prescribed-factors.html (page dated 2025-10-01) | CONFIRMED |
| Minimum = factor × RRIF value at Jan 1 | Factor can use spouse's age | Table header: "Age of the RRIF annuitant or spouse or common-law partner" | same URL | CONFIRMED (spouse option implied by header) |
| No withholding on the minimum | Withholding only on the excess | "Do not withhold income tax from the minimum amount." / "You have to withhold tax from the excess amount (amount reported in box 24)" | https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4079/t4rsp-t4rif-guide.html | CONFIRMED (minimum is still taxable income at filing) |

**RRIF minimum withdrawal factors** ("All other RRIFs" column, which applies to most RRIFs; ages 65–70 DERIVED from the official 1/(90−age) formula; 71+ CONFIRMED from the CRA chart):

| Age | Factor | Age | Factor | Age | Factor |
|---|---|---|---|---|---|
| 65 | 4.00% (derived) | 76 | 5.98% | 87 | 9.55% |
| 66 | 4.17% (derived) | 77 | 6.17% | 88 | 10.21% |
| 67 | 4.35% (derived) | 78 | 6.36% | 89 | 10.99% |
| 68 | 4.55% (derived) | 79 | 6.58% | 90 | 11.92% |
| 69 | 4.76% (derived) | 80 | 6.82% | 91 | 13.06% |
| 70 | 5.00% (derived) | 81 | 7.08% | 92 | 14.49% |
| 71 | 5.28% | 82 | 7.38% | 93 | 16.34% |
| 72 | 5.40% | 83 | 7.71% | 94 | 18.79% |
| 73 | 5.53% | 84 | 8.08% | 95 or older | 20.00% |
| 74 | 5.67% | 85 | 8.51% | | |
| 75 | 5.82% | 86 | 8.99% | | |

Note: "Qualifying RRIFs" (older plans, set up before 1993 or transferred from one) differ only at 71 (5.26%). Pre-March-1986 RRIFs use a different column. For a consumer guide, use the "All other RRIFs" column and say "most RRIFs".

| Fact | Value | Exact quote | URL | Status |
|---|---|---|---|---|
| Pension income amount | Up to $2,000 (federal); RRIF income qualifies at 65+ | Federal amount for 2025 is "$2,000" or the amount from the line 31400 chart, "whichever is less"; RRIF income under 65 qualifies only if "Received upon the death of your spouse or common-law partner." | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html | CONFIRMED for 2025 page; credit value = $2,000 × 14% = $280 federal in 2026 (DERIVED) |
| Pension income splitting | Up to 50% of eligible pension income; RRIF counts if transferring spouse is 65+ | "You can allocate up to 50% of your eligible pension income to your spouse or common-law partner." RRIF/annuity payments qualify if "the transferring spouse or common-law partner is 65 years of age or older at the end of the year." OAS and CPP/QPP "are not eligible for pension income splitting". | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/pension-income-splitting.html | CONFIRMED |
| RRIF at death: general rule | Full value counted as the deceased's income | "we consider that the annuitant received, immediately before death, an amount equal to the FMV of all the property" held in the RRIF | https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4178/death-a-rrif-annuitant.html | CONFIRMED |
| RRIF at death: spouse exception | Successor annuitant, or rollover to spouse's RRSP/RRIF | No amount is deemed received if the contract or will "designates their spouse or common-law partner as the successor annuitant of the RRIF"; or spouse as sole beneficiary transfers "by December 31 of the year following the year of death". Financially dependent child/grandchild rules also exist. | RC4178 URL above | CONFIRMED |
| RRSP at death | Same idea: FMV included in the deceased's final return unless it goes to a qualifying survivor (refund of premiums) | T4040 example: "the FMV of his unmatured RRSP was $185,000. The RRSP contract named Jacques's estate as the sole beneficiary ... This amount was included in income on line 12900 of Jacques's 2026 final income tax and benefit return." Spouse example: transfer reported as "Refund of premiums" with an offsetting RRSP receipt. | T4040 (URL in A1); see also RC4177 | CONFIRMED |

### A3. TFSA

| Fact | Value | Exact quote | URL | Status |
|---|---|---|---|---|
| Growth and withdrawals tax-free | — | "Any contribution you make to your TFSA and any income you earn through interest, dividends or capital gains are generally tax-free, even when you make a withdrawal." | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/what.html (dated 2026-09-17) | CONFIRMED |
| Room comes back Jan 1 next year | — | "When you withdraw from your TFSA, you will regain the same amount as new available contribution room on January 1 of the following year." / "do not re-contribute funds in the same year you take them out" | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/calculate-room.html ; https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/withdraw.html | CONFIRMED |
| Over-contribution penalty | 1% per month on the highest excess | "any excess amount in your TFSA is taxable at 1% per month for as long as it remains in your account" | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/overcontribute.html | CONFIRMED |
| No effect on benefits | OAS, GIS, EI, CCB, CWB, GST credit | "Any income that you earn in your TFSA will not impact your federal income-tested benefits and credits. You can also withdraw funds from your TFSA at any time, for any reason, without affecting your eligibility for federal benefits and credits." Lists OAS, GIS, EI; and CCB, CWB, "Good and services tax (GST) credit". | what.html URL above | CONFIRMED (page says GST credit; it doesn't name the new Canada Groceries and Essentials Benefit, so say "GST/HST credit" or confirm CGEB separately) |
| 2026 dollar limit | $7,000 | "The TFSA dollar limit for 2026 is $7,000." | calculate-room URL above; https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html | CONFIRMED |
| 2027 dollar limit | Not announced | Limits table has no 2027 row (page dated 2026-10-28); "What's new" 2026-10-28 item lists 2027 MP/DB/DPSP/YMPE/YAMPE and 2028 RRSP, no TFSA. | limits URL above; https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/whats-new.html | **UNCONFIRMED**. Estimate: $5,000 indexed since 2009 ≈ $7,185 for 2026; × 1.026 ≈ $7,372 → rounds to nearest $500 = $7,500. Estimate only. |
| Cumulative room 2009–2026 | $109,000 (if 18+ and resident since 2009, never contributed) | Sum of CRA table: 2009–12 $5,000 ×4; 2013–14 $5,500 ×2; 2015 $10,000; 2016–18 $5,500 ×3; 2019–22 $6,000 ×4; 2023 $6,500; 2024–26 $7,000 ×3 | limits URL above | DERIVED from CONFIRMED table (no CRA page states $109,000) |

### A4. Non-registered accounts

| Fact | Value | Exact quote | URL | Status |
|---|---|---|---|---|
| Interest taxed every year | Fully taxable as earned, even if not paid out (e.g., compound GIC) | "For most investments made in 1990 or later, you must report the interest each year as it is earned." / compound GIC interest "is paid only when the investment is cashed or matures, and not annually." | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12100-interest-other-investment-income.html | CONFIRMED |
| Eligible dividends: gross-up | 38% | "The taxable gross-up amount is equal to 38% of the amount of dividends reported in box 24 that were paid in 2012 and subsequent tax years." | https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4015/t5-guide-return-investment-income.html | CONFIRMED |
| Eligible dividends: federal dividend tax credit | 15.0198% of the grossed-up dividend (= 6/11 of the gross-up) | "the amount you enter is 15.0198% of the amount entered in box 25 or 6/11 of the taxable gross-up amount" | T5 Guide URL above | CONFIRMED (Alberta has its own provincial dividend credit; not researched here) |
| Capital gains inclusion rate | 1/2 (50%) for individuals | ITA s.38(a): "a taxpayer's taxable capital gain for a taxation year from the disposition of any property is ½ of the taxpayer's capital gain" (Act current to 2026-10-29). PM release 2025-03-21: the government "will cancel the proposed hike in the capital gains inclusion rate." Finance release 2026-09-15 lists "cancelling the proposed increase in the capital gains inclusion rate". CRA capital-losses page: "The inclusion rate for 2025 is 50%." | https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-38.html ; https://www.pm.gc.ca/en/news/news-releases/2025/03/21/prime-minister-mark-carney-cancels-proposed-capital-gains-tax-increase ; https://www.canada.ca/en/department-finance/news/2026/09/government-of-canada-introduces-new-productivity-mega-deduction-to-boost-canadas-advantage-as-the-most-competitive-g7-country-for-new-business-inve.html | CONFIRMED (still 50%) |
| Capital losses | Offset capital gains only; carry back 3 years or forward indefinitely | "You can use a net capital loss to reduce your taxable capital gain in any of the three previous years or in any future year." / "Usually, you can apply net capital losses of other years only against taxable capital gains." | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/capital-losses-deductions.html | CONFIRMED |
| Adjusted cost base (ACB) | Gain = proceeds − (ACB + selling costs) | "To calculate your capital gain or loss, subtract the total of your property's ACB, and any outlays and expenses incurred to sell your property, from the proceeds of disposition." | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/calculating-reporting-your-capital-gains-losses.html | CONFIRMED |
| Taking cash out isn't taxed; selling is what triggers a gain | — | Follows from the ACB/disposition rule above (tax arises on "disposition") | — | DERIVED (no single CRA sentence) |

### A5. Benefits interactions

| Fact | Value | Exact quote | URL | Status |
|---|---|---|---|---|
| OAS recovery tax ("clawback") rate | 15% of net income above the threshold | "You must repay 15% of that amount." | https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/recovery-tax.html | CONFIRMED |
| OAS threshold, 2025 income year (affects July 2026–June 2027) | $93,454 | Table row: "July 2026 to June 2027 | 2025 | $93,454 | $152,062 | $157,923" (min threshold; full clawback 65–74; 75+) | same URL | CONFIRMED |
| OAS threshold, 2026 income year (affects July 2027–June 2028) | $95,323 | Table row "July 2027 to June 2028 | 2026 | $95,323 | $155,320 | $161,320" (max figures are estimates until Oct). CRA indexation page: "Old age security repayment threshold | $95,323" | same URL; https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html | CONFIRMED |
| OAS threshold, 2027 income year | Not published | — | — | **UNCONFIRMED** (≈ $97,800 if indexed 2.6%: estimate only) |
| GIS counts RRSP/RRIF income but not TFSA | RRSP withdrawals and pensions are in GIS income; TFSA has no effect | GIS income includes "private and public pensions" and "RRSP withdrawals". TFSAs "have no effect on" OAS and GIS. | https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/guaranteed-income-supplement/eligibility.html ; TFSA what.html (A3) | CONFIRMED (RRIF not named on the GIS page; it falls under pensions/RRSP-type income. Low risk, but say "RRSP and RRIF withdrawals count" only with that caveat) |
| GIS income thresholds (current) | Single < $23,112; couple, spouse gets full OAS < $30,528 combined | "Less than $23,112" / "Less than $30,528 (combined annual income of couple)" | GIS eligibility URL above | CONFIRMED (changes each July) |
| GIS recalculated each July | Based on prior-year income | "your benefit amount will be re-calculated each July based on your net income in the previous calendar year" | https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/payments.html | CONFIRMED |
| OAS indexed quarterly to CPI | Jan–Mar 2027: +0.4% | "Old Age Security payment amounts are reviewed each year in January, April, July and October" / "OAS benefits will increase by 0.4% for the January to March 2027 quarter, for an increase of 3.1% over the past year" | OAS payments URL above | CONFIRMED |
| CPP indexed yearly to CPI | +2.7% for 2027; never decreases | "Based on changes in the CPI, CPP benefits paid in 2026 will increase by 2.7% for 2027." / "if there is a decrease in the cost of living, benefit amounts do not decrease." | https://www.canada.ca/en/services/benefits/publicpensions/cpp/receive-benefits/consumer-price-index.html | CONFIRMED |

### A6. Inflation and projection assumptions

| Fact | Value | Exact quote | URL | Status |
|---|---|---|---|---|
| Bank of Canada inflation target | 2% midpoint of 1%–3% | "The target aims to keep total CPI inflation at the 2% midpoint of an inflation-control range of 1% to 3% over the medium term." | https://www.bankofcanada.ca/rates/indicators/key-variables/inflation-control-target/ | CONFIRMED |
| FP Canada / IFP 2026 Projection Assumption Guidelines | Inflation 2.1%; borrowing 4.4%; short-term 2.4%; fixed income 3.2%; **Canadian equities 6.3%**; U.S. equities 6.4%; international developed 6.6%; emerging markets 7.5%; YMPE growth 3.1%; shelter 3.1% (inflation + 1%). Before fees. | "Financial assumptions (before any adjustments for administrative and investment management fees)" ... "Inflation rate 2.1%", "Borrowing rate 4.4%", "Short-term 2.4%", "Fixed income 3.2%", "Canadian equities: 6.3%", "U.S. equities: 6.4%", "International developed-market equities: 6.6%", "Emerging market equities 7.5%". Also: "the administrative and investment management fees paid by clients ... must be subtracted to obtain the net return." Intended for "long-term (10+ years) financial projections". | https://institutpf.org/assets/Documents/Normes-projection/InstituteFP-PAG2026.pdf (dated April 2026); summary sheet https://institutpf.org/assets/Documents/Normes-projection/InstituteFP-PAG2026-sheet.pdf | CONFIRMED. Warning: some trade-press summaries say Canadian equities 6.4% / U.S. 6.6%. The PDF says 6.3% / 6.4%. Use the PDF. |
| Tax brackets and most credits indexed to CPI | ITA s.117.1 lists the bracket amounts in s.117(2) and credit amounts in s.118 | ITA 117.1(2)(d) "each of the amounts expressed in dollars in subsection 117(2)"; Finance: "bracket thresholds are indexed to inflation to keep up with the cost of living" | https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-117.1.html ; https://www.canada.ca/en/department-finance/services/publications/report-impact-reducing-lowest-marginal-personal-income-tax-rate-non-refundable-tax-credits.html | CONFIRMED |
| TFSA limit indexing | Indexed, rounded to nearest $500 | Not quoted from an official page in this pass | — | UNCONFIRMED wording (well-known rule; cite the ITA definition of "TFSA dollar limit" in s.207.01 if used) |
| Alberta indexing | Lower of CPI and 2% | T4127 Table 8.2 note: "The index rate reflects the lower of the CPI and 2.0%, as per the Alberta escalator introduced in 2024." alberta.ca: "In 2026, thresholds and credit amounts will rise by 2%." | T4127 PDF (Part B); https://www.alberta.ca/personal-income-tax | CONFIRMED |

### A7. "Future tax rates might rise"

There is **no official forecast** of future tax rates. Known facts only:

| Fact | Value | Exact quote | URL | Status |
|---|---|---|---|---|
| Federal lowest rate cut | 15% → 14.5% (2025) → 14% (2026 on) | "Bill C-4 reduced the lowest marginal personal income tax rate from 15 per cent to 14.5 per cent for the 2025 taxation year and to 14 per cent for the 2026 and subsequent taxation years. ... Bill C-4 received Royal Assent on March 12, 2026." | https://www.canada.ca/en/department-finance/services/publications/report-impact-reducing-lowest-marginal-personal-income-tax-rate-non-refundable-tax-credits.html ; ITA s.117(2)(a) "14% of the amount taxable" https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-117.html | CONFIRMED |
| Federal rates range | 14% to 33% | "There are five income tax brackets with tax rates ranging from 14 per cent to 33 per cent" | Finance report above | CONFIRMED |
| Alberta 8% bracket | From 2025-01-01, on first $60,000 (2025) / $61,200 (2026) | "Effective January 1, 2025, we introduced a new personal income tax bracket of 8% on the first $60,000 of income." | https://www.alberta.ca/personal-income-tax | CONFIRMED |

Framing for the guide (general principle, no prediction): rates and rules change by law, sometimes down (2025–26) and sometimes up. Holding some savings in each type of account (taxed now, taxed later, never taxed) gives you choices later, whatever happens. Don't say rates "will" rise.

---

## Part B — Official 2027 figures

Main source: **CRA T4127-JAN, Payroll Deductions Formulas, 124th Edition, Effective January 1, 2027** (page last updated 2026-11-19). Page: https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan.html ; PDF: https://www.canada.ca/content/dam/cra-arc/formspubs/pub/t4127-jan/t4127-01-27e.pdf ; CSVs in the same folder (`rtsncmtrshldcnstnt-01-27e.csv`, `thrrtsmnts-01-27e.csv`, `cpp-qpp-ttl-01-27e.csv`, `ei-01-27e.csv`). T4127 states: "This guide reflects some income tax changes recently announced which, if enacted as proposed, would be effective January 1, 2027."

| Item | 2027 value | Exact source text | URL | Status |
|---|---|---|---|---|
| Federal indexation factor | 2.6% | Table 8.2: "Federal, BPAF, 0.026" (Index rate) | T4127 | CONFIRMED (CRA indexation FAQ page not yet updated; shows 2.0% for 2026) |
| Federal brackets | 14% on $0–$60,044; 20.5% $60,044–$120,088; 26% $120,088–$186,157; 29% $186,157–$265,203; 33% over $265,203 | Table 8.1: "Federal, A, 0, 60,044, 120,088, 186,157, 265,203" / "R, 0.14, 0.205, 0.26, 0.29, 0.33" | T4127 CSV `rtsncmtrshldcnstnt-01-27e.csv` | CONFIRMED (CRA "Tax rates and income brackets" page still shows 2026 only) |
| Federal basic personal amount | Max $16,879 (net income ≤ $186,157); min $15,214 (≥ $265,203); phased down between | "Where NI* ≤ $186,157, BPAF = $16,879" / "Where NI* ≥ $265,203, BPAF = $15,214" | T4127 PDF, "Federal Basic Personal Amount (BPAF) Formula" | CONFIRMED |
| Canada employment amount | $1,540 | Table 8.2 CEA "1,540" (2026: 1,501) | T4127 | CONFIRMED |
| Alberta brackets | 8% $0–$62,424; 10% $62,424–$157,344; 12% $157,344–$188,813; 13% $188,813–$251,750; 14% $251,750–$377,625; 15% over $377,625 | Table 8.1: "AB, A, , 62,424, 157,344, 188,813, 251,750, 377,625" / "V, 0.08, 0.1, 0.12, 0.13, 0.14, 0.15" | T4127 CSV | CONFIRMED (alberta.ca still shows 2025/2026 only) |
| Alberta basic personal amount | $23,225 (2026: $22,769) | Table 8.2: "AB, 23,225, 0.020*" | T4127 | CONFIRMED |
| Alberta indexation | 2.0% | "*The index rate reflects the lower of the CPI and 2.0%, as per the Alberta escalator introduced in 2024." | T4127 | CONFIRMED |
| CPP base rate cut | Base rate 9.90% → 9.50% from 2027-01-01 (employee 4.95% → 4.75%) | "On April 28, 2026, the Government of Canada announced the reduction of the base CPP contribution rate from 9.90% to 9.50%, effective January 1, 2027. ... The first additional contribution rate and second additional contribution rate will not be impacted." | T4127 PDF "What's new" | CONFIRMED (as published by CRA) |
| CPP YMPE | $76,700 (2026: $74,600) | Table 8.3: "CPP (Canada except QC), 76,700.00, 3,500.00, 73,200.00, 0.0575, 4,209.00"; CRA What's new 2026-10-28: "2027 year's maximum pensionable earnings (YMPE) will be $76,700" | T4127; https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/whats-new.html | CONFIRMED |
| CPP basic exemption | $3,500 | Table 8.3 (above) | T4127 | CONFIRMED |
| CPP employee rate (total) and max | 5.75% (base 4.75% + first additional 1.00%); max $4,209.00 each for employee and employer (2026: 5.95%, $4,230.45). Self-employed pays both shares (2 × $4,209 = $8,418, DERIVED). | Table 8.3; Table 8.4 base "0.0475, 3,477.00"; Table 8.5 first additional "0.0100, 732.00" | T4127 | CONFIRMED |
| CPP2 (second additional) | YAMPE $87,400; rate 4%; earnings band $10,700; max $428.00 each (2026: $85,000, $416) | Table 8.6: "76,700.00, 87,400.00, 10,700.00, 0.0400, 428.00"; What's new: "2027 year's additional maximum pensionable earnings (YAMPE) will be $87,400" | T4127; What's new | CONFIRMED |
| EI | Max insurable earnings $70,800; employee rate 1.64%; max employee premium $1,161.12; employer rate 2.296% (1.4×), max $1,625.57 (2026: $68,900, 1.63%, $1,123.07). Quebec: 1.29%, $913.32. | Table 8.7: "Canada except QC, 70,800.00, 0.0164, 0.02296, 1,161.12, 1,625.57" | T4127 CSV `ei-01-27e.csv` | CONFIRMED |
| RRSP dollar limit 2027 | $35,390 | Limits table: "2027 | $36,390 | $4,043.33 | $35,390 | $18,195 | $76,700 | $87,400" (columns: Year, MP limit, DB limit, RRSP dollar limit, DPSP limit, YMPE, YAMPE) | https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html (dated 2026-10-28) | CONFIRMED |
| RRSP dollar limit 2028 | $36,390 | "2028 registered retirement savings plan (RRSP) limit will be $36,390." | What's new (2026-10-28) | CONFIRMED |
| RRSP dollar limit 2026 (for reference) | $33,810 | Limits table row 2026 | limits URL | CONFIRMED |
| Other 2027 pension limits | MP $36,390; DB $4,043.33; DPSP $18,195 | What's new 2026-10-28 | What's new | CONFIRMED |
| TFSA 2027 | Not announced | — | — | **UNCONFIRMED** (estimate $7,500; see A3) |
| OAS recovery threshold, 2027 income year | Not announced | — | — | **UNCONFIRMED** (2026: $95,323 CONFIRMED) |

Reminder for the site: the CRA indexation FAQ page should be re-checked for a 2027 column before the tax guide is updated (it will likely also give the 2027 OAS threshold, age amount, etc.).
