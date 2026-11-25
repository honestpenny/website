// "Check what you're owed": questions and the benefits they point to.
// EVERY item must be confirmed against its official page (docs/fact-checks/2026-11-25-quiz-and-help.md) and
// re-checked by `checked` + `reviewBy` like a fact. Wording is always "you might be able to": we never promise
// eligibility or amounts. Conditions are declarative so the browser can evaluate them without our servers.

/** Whole list checked against official pages on this date; tests fail after REVIEW_BY. */
export const CHECKED = "2026-11-25";
export const REVIEW_BY = "2027-05-25";

export type Answers = Partial<Record<QuestionId, string>>;
export type QuestionId = "where" | "age" | "kids" | "work" | "income" | "disability" | "dental";

export const QUESTIONS: { id: QuestionId; q: string; hint?: string; options: { v: string; label: string }[] }[] = [
  { id: "where", q: "Where do you live?", options: [{ v: "ab", label: "Alberta" }, { v: "other", label: "Somewhere else in Canada" }] },
  { id: "age", q: "How old are you?", options: [{ v: "u19", label: "Under 19" }, { v: "19to64", label: "19 to 64" }, { v: "65plus", label: "65 or older" }] },
  { id: "kids", q: "Do any children under 18 live with you?", options: [{ v: "yes", label: "Yes" }, { v: "no", label: "No" }] },
  { id: "work", q: "Did you earn money from a job or self-employment last year?", options: [{ v: "yes", label: "Yes" }, { v: "no", label: "No" }] },
  { id: "income", q: "Roughly, what was your household's income before tax last year?", hint: "Your income plus your spouse's or partner's, if you have one. A rough guess is fine.",
    options: [{ v: "low", label: "Under $40,000" }, { v: "mid", label: "$40,000 to $90,000" }, { v: "high", label: "Over $90,000" }, { v: "notsure", label: "Not sure" }] },
  { id: "disability", q: "Do you, your partner or a child you support have a disability or long-term health condition that makes everyday tasks much harder?",
    options: [{ v: "yes", label: "Yes" }, { v: "no", label: "No" }, { v: "notsure", label: "Not sure" }] },
  { id: "dental", q: "Do you have dental insurance, for example through work or a family member's plan?",
    options: [{ v: "yes", label: "Yes" }, { v: "no", label: "No" }, { v: "notsure", label: "Not sure" }] },
];

type Cond = Partial<Record<QuestionId, string[]>>;
export interface Benefit {
  id: string; title: string; who: string; how: string; url: string; by: string;
  when: Cond[]; // shown if ANY condition set matches; inside a set, every listed answer must match ("notsure" always matches)
  alberta?: boolean;
}

const LOWMID = ["low", "mid", "notsure"], LOW = ["low", "notsure"];

export const BENEFITS: Benefit[] = [
  { id: "file", title: "File a tax return, even with little or no income", by: "Canada Revenue Agency",
    who: "Most federal and Alberta benefits are worked out from your tax return. If you don't file, they can't reach you.",
    how: "File every spring, on time, even if you earned little or nothing.",
    url: "https://www.canada.ca/en/services/taxes/child-and-family-benefits.html", when: [{}] },
  { id: "clinic", title: "Free tax clinics", by: "Canada Revenue Agency",
    who: "Volunteers file returns for free for people with a modest income and a simple tax situation.",
    how: "Find a clinic near you on the CRA's page, in person or virtual.",
    url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/community-volunteer-income-tax-program/need-a-hand-complete-your-tax-return.html", when: [{ income: LOW }] },
  { id: "ccb", title: "Canada Child Benefit", by: "Canada Revenue Agency",
    who: "A tax-free monthly payment for families raising children under 18. The amount depends on family income.",
    how: "Apply when a child is born or comes to live with you, and file a return every year to keep it coming.",
    url: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html", when: [{ kids: ["yes"] }] },
  { id: "cgeb", title: "Canada Groceries and Essentials Benefit", by: "Canada Revenue Agency",
    who: "Tax-free payments for people with low and modest incomes who are 19 or older, or have a partner or child. It replaced the GST/HST credit in July 2026.",
    how: "You don't apply separately: filing your tax return is how the CRA checks if you qualify.",
    url: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit.html", when: [{ income: LOWMID, age: ["19to64", "65plus"] }, { income: LOWMID, kids: ["yes"] }] },
  { id: "acfb", title: "Alberta Child and Family Benefit", by: "Government of Alberta", alberta: true,
    who: "Payments for Alberta families with children under 18 and a lower income, with extra for working families.",
    how: "No separate application: file your tax return and the CRA works it out for Alberta.",
    url: "https://www.alberta.ca/alberta-child-and-family-benefit", when: [{ where: ["ab"], kids: ["yes"], income: LOWMID }] },
  { id: "cwb", title: "Canada Workers Benefit", by: "Canada Revenue Agency",
    who: "A refundable tax credit for people working on a low income who are 19 or older, or live with a partner or child. There's extra if you have the Disability Tax Credit.",
    how: "Claim it on your tax return. If the CRA gets your return before November 1, advance payments start automatically.",
    url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-45300-canada-workers-benefit-cwb/who-is-eligible.html", when: [{ work: ["yes"], income: LOW, age: ["19to64", "65plus"] }, { work: ["yes"], income: LOW, kids: ["yes"] }] },
  { id: "clb", title: "Canada Learning Bond", by: "Government of Canada",
    who: "Up to $2,000 put into an RESP for children born in 2004 or later from lower-income families. You don't have to put in any money yourself.",
    how: "Open an RESP for your child and ask the provider to apply for the bond.",
    url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-education-savings-plans-resps/canada-education-savings-programs-cesp/canada-learning-bond.html", when: [{ kids: ["yes"], income: LOW }] },
  { id: "cdcp", title: "Canadian Dental Care Plan", by: "Government of Canada",
    who: "Help with dental costs for people who have no access to dental insurance and an adjusted family net income under $90,000.",
    how: "Apply online or by phone. You must have filed your tax return.",
    url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan/qualify.html", when: [{ dental: ["no", "notsure"], income: LOWMID }] },
  { id: "dtc", title: "Disability Tax Credit", by: "Canada Revenue Agency",
    who: "A tax credit for people with a severe and prolonged impairment. It also opens the door to other benefits.",
    how: "A medical practitioner fills in part of form T2201, then you send it to the CRA.",
    url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit/how-apply-dtc.html",
    when: [{ disability: ["yes", "notsure"] }] },
  { id: "cdb", title: "Canada Disability Benefit", by: "Government of Canada",
    who: "Monthly payments for working-age adults who have the Disability Tax Credit and a low income.",
    how: "Get the Disability Tax Credit first, file your taxes, then apply.",
    url: "https://www.canada.ca/en/services/benefits/disability/canada-disability-benefit.html", when: [{ disability: ["yes", "notsure"], age: ["19to64"], income: LOWMID }] },
  { id: "rdsp", title: "Registered Disability Savings Plan grants and bonds", by: "Government of Canada",
    who: "The government adds money to an RDSP for people who have the Disability Tax Credit. Lower-income families can get a bond without putting anything in.",
    how: "Get the Disability Tax Credit, then open an RDSP at a bank or credit union.",
    url: "https://www.canada.ca/en/employment-social-development/programs/disability/savings/apply.html", when: [{ disability: ["yes", "notsure"], age: ["u19", "19to64"] }] },
  { id: "oas", title: "Old Age Security", by: "Government of Canada",
    who: "A monthly pension for people 65 and older who have lived in Canada for at least 10 years since age 18.",
    how: "Many people are enrolled automatically and get a letter around their 64th birthday. If you don't, apply. File a tax return every year to keep it.",
    url: "https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/eligibility.html", when: [{ age: ["65plus"] }] },
  { id: "gis", title: "Guaranteed Income Supplement", by: "Government of Canada",
    who: "Extra monthly money on top of Old Age Security for seniors with a low income.",
    how: "File your taxes every year; you may be enrolled automatically, or you can apply.",
    url: "https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/guaranteed-income-supplement/eligibility.html", when: [{ age: ["65plus"], income: LOW }] },
  { id: "asb", title: "Alberta Seniors Benefit", by: "Government of Alberta", alberta: true,
    who: "Monthly payments for Alberta seniors with a low income.",
    how: "Apply to the Government of Alberta; you need to have filed your taxes.",
    url: "https://www.alberta.ca/alberta-seniors-benefit", when: [{ where: ["ab"], age: ["65plus"], income: LOW }] },
  { id: "sptdp", title: "Seniors Property Tax Deferral Program", by: "Government of Alberta", alberta: true,
    who: "Lets Alberta homeowners 65 and older defer their property tax through a low-interest home equity loan from the province.",
    how: "Apply to the Government of Alberta before your city's tax deadline. Read our property tax guide first.",
    url: "https://www.alberta.ca/seniors-property-tax-deferral-program", when: [{ where: ["ab"], age: ["65plus"] }] },
  { id: "connecting", title: "Connecting Families: low-cost home internet", by: "Government of Canada",
    who: "$10 or $20 a month home internet for families getting the maximum Canada Child Benefit, and seniors getting at least 80% of the maximum Guaranteed Income Supplement.",
    how: "Eligible households get an invitation letter from the government with a code to sign up.",
    url: "https://ised-isde.canada.ca/site/ised/en/programs-and-initiatives/connecting-families-initiative/eligibility",
    when: [{ kids: ["yes"], income: ["low"] }, { age: ["65plus"], income: ["low"] }] },
];

/** Same logic the browser runs (tested): which benefits to show for a set of answers. */
export function matches(b: Benefit, a: Answers) {
  return b.when.some((cond) => Object.entries(cond).every(([q, ok]) => {
    const v = a[q as QuestionId];
    return v === undefined || v === "notsure" || (ok as string[]).includes(v);
  }));
}
