// 2026 federal + Alberta income tax brackets for the estimator. Simplified on purpose: brackets and basic
// personal amounts only (no CPP/EI credits, other credits, or the federal BPA phase-out above $181,440).
// Sources (checked 2026-11-24): CRA "Tax rates and income brackets for individuals – current year"
//   https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html
// Alberta BPA: TD1AB 2026. Update each January via /newsroom; e2e/calculators.spec.ts pins $70,000 → $12,197.
export const TAX_YEAR = 2026;
export const FEDERAL = { brackets: [[58523, 0.14], [117045, 0.205], [181440, 0.26], [258482, 0.29], [Infinity, 0.33]] as [number, number][], bpa: 16452, lowRate: 0.14 };
export const ALBERTA = { brackets: [[61200, 0.08], [154259, 0.1], [185111, 0.12], [246813, 0.13], [370220, 0.14], [Infinity, 0.15]] as [number, number][], bpa: 22769, lowRate: 0.08 };

function bracketTax(income: number, brackets: [number, number][]) {
  let tax = 0, prev = 0;
  for (const [top, rate] of brackets) {
    if (income <= prev) break;
    tax += (Math.min(income, top) - prev) * rate;
    prev = top;
  }
  return tax;
}
// 2027 (indexed): CRA T4127 Payroll Deductions Formulas, January 2027 edition (updated 2026-11-19); checked 2026-11-25.
//   https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan.html
// Federal indexation 2.6%, Alberta 2.0%. 2027 federal BPA phases down from $16,879 to $15,214 between $186,157 and $265,203 (not modelled). CRA's main rates page will show 2027 in January 2027: re-check then.
export const YEARS = {
  2026: { federal: FEDERAL, alberta: ALBERTA },
  2027: {
    federal: { brackets: [[60044, 0.14], [120088, 0.205], [186157, 0.26], [265203, 0.29], [Infinity, 0.33]] as [number, number][], bpa: 16879, lowRate: 0.14 },
    alberta: { brackets: [[62424, 0.08], [157344, 0.1], [188813, 0.12], [251750, 0.13], [377625, 0.14], [Infinity, 0.15]] as [number, number][], bpa: 23225, lowRate: 0.08 },
  },
} as const;
export type TaxYear = keyof typeof YEARS;
/** Same simplified estimate for any supported year (brackets + basic personal amounts only). */
export function estimateFor(year: TaxYear, income: number) {
  const { federal: F, alberta: A } = YEARS[year];
  const fed = Math.max(0, bracketTax(income, F.brackets as [number, number][]) - F.bpa * F.lowRate);
  const ab = Math.max(0, bracketTax(income, A.brackets as [number, number][]) - A.bpa * A.lowRate);
  const r = (b: readonly (readonly [number, number])[]) => b.find(([top]) => income <= top)![1];
  return { fed, ab, total: fed + ab, marginal: r(F.brackets) + r(A.brackets) };
}

export function marginalRate(income: number) {
  const r = (b: [number, number][]) => b.find(([top]) => income <= top)![1];
  return r(FEDERAL.brackets) + r(ALBERTA.brackets);
}
export function estimate(income: number) {
  const fed = Math.max(0, bracketTax(income, FEDERAL.brackets) - FEDERAL.bpa * FEDERAL.lowRate);
  const ab = Math.max(0, bracketTax(income, ALBERTA.brackets) - ALBERTA.bpa * ALBERTA.lowRate);
  const total = fed + ab;
  return { fed, ab, total, average: income > 0 ? total / income : 0, marginal: marginalRate(income) };
}
