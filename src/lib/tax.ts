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
export function marginalRate(income: number) {
  const r = (b: [number, number][]) => b.find(([top]) => income < top)![1];
  return r(FEDERAL.brackets) + r(ALBERTA.brackets);
}
export function estimate(income: number) {
  const fed = Math.max(0, bracketTax(income, FEDERAL.brackets) - FEDERAL.bpa * FEDERAL.lowRate);
  const ab = Math.max(0, bracketTax(income, ALBERTA.brackets) - ALBERTA.bpa * ALBERTA.lowRate);
  const total = fed + ab;
  return { fed, ab, total, average: income > 0 ? total / income : 0, marginal: marginalRate(income) };
}
