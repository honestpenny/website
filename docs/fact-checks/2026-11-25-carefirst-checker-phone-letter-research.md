# Research: Care-First renewal checker and phone/internet fee complaint letter, 2026-11-25

Scope: research for two planned tools. Only official sources were used: alberta.ca, airbfordrivers.ca (AIRB), kings-printer.alberta.ca, assembly.ab.ca, giocanada.org (the GIO is named by alberta.ca as the independent ombudservice), canada.ca (CRTC news releases), ccts-cprst.ca. Every page was fetched on 2026-11-25. No content files were edited.

Status key: **CONFIRMED** = exact wording read on the official page today. **UNCONFIRMED** = no official page found, or the page couldn't be read. **CONFLICT** = official pages disagree, or an official page contradicts what the site says now.

**Access note:** crtc.gc.ca returns a Cloudflare "Security Check" (HTTP 403) to automated fetches, so the text of CRTC 2026-43, CRTC 2026-155 and the CRTC's own Wireless/Internet Code pages could not be read. Part B uses the CRTC's canada.ca news releases and the CCTS copies of the codes instead. Someone should open the CRTC pages in a browser before the letter tool ships (see B-1.6 and B-1.7).

---

## Headline findings (read these first)

1. **CONFLICT, and it changes the checker's core logic.** The AIRB published a Q&A today (2026-11-25) saying the new 10% cap does **not** apply to the 2026-to-2027 change: *"Unlike the Good Driver Rate Cap, the new Adjusted Rate Cap does not limit the change between your 2026 and 2027 premiums to 10%."* and *"renewal premiums for 2027 reflect Care-First pricing without a rate cap."* (A-1.4). The site's insurance guide currently says "From 2027, an insurer rate change can't raise your premium by more than 10% at renewal", and facts.yaml `auto-renewal-cap-2027` says "Most your premium can rise at renewal in 2027 because of an insurer rate change: 10%". Both are misleading for 2027 renewals and should be reworded. A checker that compares last year's premium with a 2027 renewal must **not** say an increase is "above the cap".
2. **CONFLICT with the site.** The guide says "policies covering 2027 should reflect the new system." The AIRB says the policy's **effective date** decides the pricing: a December 2026 renewal is priced under the current system (A-1.5). AIRB Bulletin 07-2026 says insurers are expected to offer a **prorated** (not short-rate) cancel-and-rewrite to people who renewed or bought between Sept 1 and Dec 31, 2026 and ask the **same insurer** between Jan 1 and Mar 31, 2027 (A-1.6). That is the most useful thing the checker can tell late-2026 renewers.
3. **UNCONFIRMED: no legal renewal-notice period was found.** The AIRB says insurers "send renewal notices 45 to 60 days in advance". That describes current practice. No section of the Insurance Act, the Fair Practices Regulation or the Premiums Regulation sets a notice period (A-2.6).
4. **UNCONFIRMED: no telecom template letter exists** from the CRTC, the CCTS or ISED's Office of Consumer Affairs (B-4). The CCTS does say what to include and what to keep (B-3).

---

## PART A: Care-First renewal checker (Alberta auto insurance)

### A-1. How the 2027 renewal cap works

**A-1.1 The 10% individual cap and the 5% insurer cap start January 1, 2027.**
- Quote (AIRB article, May 21, 2026, updated Jun 5, 2026): "The adjusted rate cap introduces two limits beginning January 1, 2027: 5% cap on insurers: Insurers cannot increase rates by more than 5% per year across their overall book of business (their total customer base). 10% cap on individuals: Your premium cannot increase by more than 10% at renewal due to an insurer's rate increase or other change to your insurer's rating program."
- Quote (alberta.ca): "Under the adjusted rate cap, insurers will not be able to raise average rates by more than 5% and all average drivers will see their auto insurance premiums capped at 10% at renewal."
- Quote (GoA news release, May 14, 2026, "Adjusted rate cap: A good deal for good drivers"): "Ten per cent cap on individuals, where each premium cannot increase by more than 10 per cent at renewal." and "The updated approach replaces the previous Good Driver Rate Cap and extends savings to more Albertans."
- URLs: https://www.airbfordrivers.ca/articles/understanding-albertas-auto-insurance-rate-caps-what-it-means-for-you/ ; https://www.alberta.ca/automobile-insurance-reform ; https://www.alberta.ca/release.cfm?xID=961828789E647-98FD-92B2-11A0BD948F1B4E46
- Status: **CONFIRMED** (but see A-1.4: the start date applies to rate filings, not to the first 2027 renewal).

**A-1.2 The 5% insurer cap allows more with actuarial justification.**
- Quote (AIRB Q&A, published 2026-11-25): "Insurance companies cannot raise their overall rates by more than 5% a year across all of their customers without providing full actuarial justification."
- URL: https://www.airbfordrivers.ca/care-first-your-premium-questions-answered/
- Status: **CONFIRMED**. Note: alberta.ca and the release state the 5% cap with no exception. Only the AIRB Q&A adds "without providing full actuarial justification".

**A-1.3 What the 10% cap doesn't cover (exact lists).**
- alberta.ca: "Drivers could lose rate protection under the adjusted rate cap if: a new at-fault accident / a new driving conviction / adding a driver or changing vehicles / adjusting your coverage". Also: "Whether a driver is eligible for the adjusted rate cap is determined on their insurance policy renewal date."
- AIRB article: "The 10% cap only applies to increases driven by your insurer's overall rate change. It does not limit increases caused by changes to your personal risk profile. If your situation changes, your premium can increase by more than 10%. For example: A new at-fault accident / A new driving conviction / Adding a driver or changing vehicles / Adjusting your coverage"
- AIRB Q&A (the longest list): "your premium could increase by more than 10% if: You have a new at-fault collision. / You receive a driving conviction. / You add a driver to your policy. / You change vehicles. / You make significant changes to your insurance coverage. / You move to a higher-risk territory. / Other changes that affect your risk." Also: "Your premium can also change from year to year, even if you haven't had a claim, a new conviction, or made any changes to your policy. … your vehicle is now a year older, and you and other drivers on your policy are a year older too."
- URLs: as A-1.1 and A-1.2.
- Status: **CONFIRMED**. Only the AIRB Q&A lists **moving** (as "move to a higher-risk territory") and **ageing**. The checker should use the AIRB Q&A list.

**A-1.4 The 10% cap does not cover the 2026-to-2027 change.**
- Quote (AIRB Q&A): "The current Good Driver Rate Cap will be replaced by a new Adjusted Rate Cap which applies to insurance company rate applications submitted *after* January 1, 2027." … "Unlike the Good Driver Rate Cap, the new Adjusted Rate Cap does not limit the change between your 2026 and 2027 premiums to 10%. Instead, the limits apply when insurance companies ask the AIRB to approve rate changes. The AIRB makes sure approved changes stay within the limits." … "It does not guarantee that your total premium will go up by no more than 10% from one year to the next."
- Quote (same page, question "I received a renewal notice for January 2027. Does the new Adjusted Rate Cap apply?"): "No. Although Care-First begins January 1, 2027, the new Adjusted Rate Cap applies to insurance company rate filings submitted to the AIRB after January 1, 2027. This means renewal premiums for 2027 reflect Care-First pricing without a rate cap. Care-First pricing and the Adjusted Rate Cap are two separate changes and depending on the timing of your renewal, may not apply to your policy at the same time."
- URL: https://www.airbfordrivers.ca/care-first-your-premium-questions-answered/ (page JSON-LD: datePublished 2026-11-25T16:15:46Z, dateModified 2026-11-25T19:18:36Z)
- Status: **CONFIRMED / CONFLICT**. This conflicts with the plain reading of alberta.ca ("all average drivers will see their auto insurance premiums capped at 10% at renewal") and with the site's current wording. The AIRB is the rate regulator and its page is the newest, so follow it. Related: AIRB Bulletin 08-2026 (Sept 14, 2026) says "Until the AIRB issues filing guidance, the AIRB will not accept new rate filings from auto insurers operating in Alberta if the filing would affect overall premiums for consumers" and "The AIRB anticipates issuing new filing guidelines by the end of the calendar year" (https://www.airbfordrivers.ca/wp-content/uploads/2026/09/Bulletin-08-2026.pdf, **CONFIRMED**).
- **Site fix needed:** `alberta-car-home-insurance.mdx` (QuickAnswer bullet 3, and "The rate caps" bullet "From 2027") and `facts.yaml` `auto-renewal-cap-2027` (label). Suggested wording: "From 2027, insurers' new rate increases are capped (5% on average, and a rate change can't add more than 10% to one driver's renewal). The cap doesn't apply to your first Care-First renewal in 2027, or to your own changes, like a new claim or ticket."

**A-1.5 Which renewals use Care-First pricing.**
- Quote (AIRB Q&A): "For most drivers, the new pricing will be reflected when their auto insurance policy renews on or after that date. For example: If your policy renews in December 2026: Your renewal will reflect the current insurance system and the rates applicable at that time. If your policy renews in March 2027: Your renewal will reflect the Care-First system and your insurance company's applicable rates." and "Receiving a renewal notice before January 1, 2027 does not necessarily mean your policy will be priced under the old system. The *effective date* of your policy is what matters." and "Care-First does not mean every existing insurance policy will automatically receive a premium reduction on January 1, 2027."
- Quote (AIRB Bulletin 07-2026): "Care-First will apply to all policies renewing on or after January 1, 2027."
- Coverage (as opposed to price) switches for everyone: "All auto insurance policies in Alberta will automatically switch to Care-First on January 1, 2027." (https://www.airbfordrivers.ca/albertas-insurance-system/). Bill 41's new Automobile Insurance Act s.2(2) deems every contract in place on the in-force date to "include the provisions and statutory conditions required under Part 1.1, and provide the compensation set out in Part 2", and Parts 2, 3 and 4 apply "to an accident that occurs on or after the date this section comes into force".
- URLs: https://www.airbfordrivers.ca/care-first-your-premium-questions-answered/ ; https://www.airbfordrivers.ca/wp-content/uploads/2026/09/Bulletin-07-2026.pdf ; Bill 41 PDF https://docs.assembly.ab.ca/LADDAR_files/docs/bills/bill/legislature_31/session_2/20251023_bill-041.pdf
- Status: **CONFIRMED**. This answers the brief's question: a renewal dated in late 2026 for a term running into 2027 is **not** priced under Care-First, but injury coverage switches on Jan 1, 2027 anyway. **CONFLICT with the site:** "policies covering 2027 should reflect the new system" is wrong for renewals that take effect in 2026.

**A-1.6 Prorated cancel-and-rewrite for late-2026 renewals.**
- Quote (AIRB Bulletin 07-2026, Sept 3, 2026): "The AIRB expects insurers to offer prorated cancellation to customers who renewed or purchased an auto insurance policy between September 1 and December 31, 2026, and who ask to cancel and rewrite the policy with the same insurer between January 1 and March 31, 2027, to access the lower Care-First premium. Customers who request a rewrite after March 31, 2027, or who cancel their policy to move to a different insurer, will continue to be subject to the short-rate cancellation rules set out in the AIRB's technical guidance."
- Also (AIRB Q&A): "Be sure to ask about any costs or consequences before cancelling or changing an existing policy."
- URL: https://www.airbfordrivers.ca/wp-content/uploads/2026/09/Bulletin-07-2026.pdf
- Status: **CONFIRMED**. It's an AIRB "expectation" in a bulletin to insurers, not a statute, so the tool should say "the rate board expects insurers to offer", not "you have a right to".

**A-1.7 How Care-First savings interact with the caps.**
- Quote (AIRB Care-First premium impacts): "approved filings show an average premium reduction of 13.7%, or about $297 per vehicle" … "These premium results reflect average results, not guaranteed outcomes for every driver."
- Quote (AIRB Q&A): "Your premium could decrease, increase, or stay about the same depending on your individual circumstances." and "your insurance premium covers more than injuries. … Damage to your vehicle. Damage caused by theft, hail, or other insured events. … These costs are not reduced by Care-First." Also: "Insurance companies may have rate changes approved before Care-First that continue to affect premiums under the current system."
- Quote (GoA release May 14, 2026): "The adjusted rate cap will also protect Alberta drivers from drastic premium increases after they receive the expected savings in 2027."
- URLs: https://www.airbfordrivers.ca/newsroom/care-first-premium-impacts/ ; Q&A as above.
- Status: **CONFIRMED**. No official source describes a mechanism that forces a 13.7% cut on each renewal. The 13.7% is an average across approved filings.

**A-1.8 Motorcycles.**
- AIRB premium impacts: "Motorcycle premiums will increase; all three profiles increase by at least 37.0%, with the lowest for young men." AIRB Q&A: "The AIRB's approved filings project an average increase of approximately 100% for motorcycles."
- Status: **CONFIRMED**. The site's "up at least 37%" is accurate for the AIRB profiles, but the market average is about 100%. Consider adding that.

**A-1.9 The legal basis for the 10%/5% caps.**
- Not found. Bill 41 (Financial Statutes Amendment Act, 2026 (No. 2)) gives regulation-making powers "respecting the maximum premium" but contains no 10% or 5% figure. The Premiums Regulation consolidation (AR 117/2014, current as of Oct 8, 2025) has no cap text. A pending amendment, AR 226/2025, "comes into force on December 31, 2026" (Insurance Act consolidation table), but its text couldn't be found on King's Printer.
- Bill 41 status (assembly.ab.ca): First Reading Nov 17, 2026; Second Reading Nov 23; Committee of the Whole Nov 24; **Third Reading passed Nov 25, 2026**. Royal Assent isn't shown yet. https://www.assembly.ab.ca/assembly-business/bills/bill?billinfoid=12144
- Note: the brief calls Bill 41 the "Automobile Insurance Act". The Automobile Insurance Act itself was **Bill 47 (2025)** (alberta.ca: "Bill 47 - Automobile Insurance Act"). Bill 41 (2026) amends it and other financial statutes.
- Status: **UNCONFIRMED** (which legal instrument sets the caps). Cite AIRB and alberta.ca pages, not a section number.

### A-2. What a driver should check on a renewal notice

**A-2.1 Insurers must include set Care-First text in every renewal.**
- Quote (AIRB Bulletin 05-2026, May 13, 2026): "Insurers will provide communications advising of the change to care-first to all renewal policies regardless of impact to premium. For all policyholder renewals - The required text must be included exactly as provided and cannot be altered." The required text starts "Care-first Auto Insurance: Starting January 1, 2027, Alberta is moving to a new care-first auto insurance system." Also: "Insurers will provide additional information to their policyholders who experience an increase to their premiums."
- For drivers Grid-rated in 2026 who see an increase, renewals must include a "Notice about changes to Grid rating and your Care-first Premium", including: "Your premium is now based solely on your insurer's rating program. If you previously benefited from a Grid-rated discount, you may see an increase in your premium under care-first."
- URL: https://www.airbfordrivers.ca/wp-content/uploads/2026/06/Bulletin-05-2026.pdf
- Status: **CONFIRMED**. Checker tip: "Does your renewal include the Grid notice? If so, you were Grid-rated in 2026, so shop around."

**A-2.2 Coverage changes under Care-First.**
- Accident benefits: "Injured individuals first access accident benefits (Section B) from their own insurer, which provide up to $50,000 in medical and rehabilitation … for up to two years." Under Care-First: "Medical and rehabilitation coverage will become unlimited for eligible treatment supporting recovery, with enhanced income replacement and permanent impairment benefits." (AIRB system page)
- Suing: "Albertans will still be able to sue an at-fault driver in certain cases (like if the other driver is convicted of a Criminal Code driving offense)" (AIRB). GoA release: "Injured Albertans will be able to sue an at-fault driver if they experience out-of-pocket expenses that exceed the maximum amounts provided by their insurance policy."
- DCPD, collision and comprehensive: "Physical damage coverages like Collision, DCPD, and Comprehensive remain the same under Care-First. … the premiums for these physical coverages will continue to reflect cost pressures like inflation, increased complexity of vehicles, vehicle theft" (GoA fact sheet, Aug 2025). DCPD definition (same): "DCPD covers a portion of your vehicle repairs, based on the percentage you were not at-fault for an accident. Coverage for your share of fault is only available through optional collision coverage."
- Optional income top-up: "Insurance companies may also decide to offer an option to purchase additional income replacement coverage or other benefits." (fact sheet)
- Liability minimum: "drivers must always hold a minimum of $200,000 in third-party liability coverage; however, most drivers choose $1,000,000 or $2,000,000" (fact sheet). Already in facts.yaml `auto-liability-minimum`.
- Standard forms: Superintendent Interpretation Bulletin 05-2026: "effective January 1, 2027, the Superintendent of Insurance (Superintendent) has approved amendments to standard automobile insurance forms." (https://www.alberta.ca/insurance-superintendent-bulletins-notices-enforcement)
- URLs: https://www.airbfordrivers.ca/albertas-insurance-system/ ; https://open.alberta.ca/dataset/05d7b6b1-ed14-40f6-8044-87f050b521b1/resource/a89fb33a-e4d2-4118-a982-2ee2cf465ac6/download/tbf-care-first-auto-insurance-2025-08.pdf ; release as A-1.1
- Status: **CONFIRMED**. Not checked: the new Care-First tort/liability rules in detail (for example, whether third-party liability limits still matter for bodily injury). Keep the tool to "don't cut liability", as the guide already says.

**A-2.3 Optional coverages and endorsements to review.**
- Quote (fact sheet): collision, comprehensive, specified perils, all perils; "Endorsements … can include limited glass coverage, replacement cost, loss of use, family protection, accident forgiveness, and others."
- Status: **CONFIRMED**.

**A-2.4 Discounts (AIRB list).**
- Quote (AIRB How rates are calculated): "You may also be eligible for several discounts or preferred rates depending on factors like: Bundling together your home and vehicle insurance / Having an anti-theft system / Using winter tires / Having a membership in a professional association / Being an alum of a university or college. Ask your insurance agent, broker, or direct writer about surcharges or discounts when seeking a quote." Formula: "Base Rate X Rating Factors X Surcharge & Discounts".
- URL: https://www.airbfordrivers.ca/how-rates-are-calculated/
- Status: **CONFIRMED** (same list the site already uses). Usage-based insurance is also named on alberta.ca: "you may be eligible for discounted rates or rewards based on your driving habits."

**A-2.5 Payment plans and fees (monthly vs annual).**
- Quote (Automobile Insurance Premiums Regulation, AR 117/2014, s.9.2): "(1) Every insurer must provide the option to each policyholder who enters into or renews a contract of insurance for a private passenger vehicle to pay the policyholder's annual insurance premium by a premium payment plan, except [listed cases: 2+ cancellations for non-payment in 36 months; non-PPV; fleets of 5+; annual premium ≤ $300; insurer requires all PPV premiums paid in full upfront] … (2) An insurer that provides premium payment plans to its policyholders under subsection (1) must charge all policyholders the same reasonable rate or fee for the premium payment plan."
- URL: https://kings-printer.alberta.ca/documents/Regs/2014_117.pdf (current as of Oct 8, 2025)
- Status: **CONFIRMED**. No dollar or percentage limit on the fee, only "same reasonable rate or fee". Checker prompt: "Ask what the monthly plan costs in total versus paying once."

**A-2.6 Advance notice of renewal terms.**
- AIRB Q&A: "Insurance companies send renewal notices 45 to 60 days in advance of your policy renewal date."
- Searched: Insurance Act (RSA 2000 c I-3, current as of May 14, 2026), Fair Practices Regulation (AR 128/2001, current as of Mar 25, 2026), Premiums Regulation (AR 117/2014). No section requires a set number of days' notice of renewal terms. The statutory conditions only cover **termination by the insurer**: "by the insurer giving to the insured 15 days' notice of termination by recorded mail or 5 days' written notice of termination personally delivered" (Insurance Act statutory condition 8(1)(a)). Bill 41 mentions a "notice of renewal" only for financial responsibility card information (new s.2.8(3)).
- Status: **UNCONFIRMED** (no legal notice period). The checker can say "insurers usually send renewal notices 45 to 60 days before (AIRB)". It must not say "they must give you 30 days".

**A-2.7 Refusing to renew basic coverage is limited.**
- Quote (Insurance Act s.555(1)(d), (2), (3)): "adverse contractual action" includes "refusing to renew a contract"; "This section applies only to adverse contractual action taken in respect of basic coverage on private passenger vehicles"; "An insurer, insurance agent or insurance broker shall not, directly or indirectly, take any adverse contractual action … except for one or more of the following reasons: (a) the non-payment of a premium …" (plus reasons in s.555(3)(b)–(g) and AR 28/2015, such as misrepresentation, fraud, vehicle inspection for 12+ model-year vehicles, no valid licence).
- URLs: https://kings-printer.alberta.ca/documents/Acts/I03.pdf ; https://kings-printer.alberta.ca/documents/Regs/2015_028.pdf
- Status: **CONFIRMED** (current Insurance Act). Whether Bill 41/the Automobile Insurance Act moves or changes s.555 from 2027 was not checked.

### A-3. The 2026 good-driver cap and the Grid

**A-3.1 The 7.5% cap in 2026.**
- Quote (alberta.ca): "To support good drivers, rates for those who qualify are capped at 7.5% in 2026. … Rate increases for good drivers are capped at 5% per year, and an additional 2.5% rate rider accounts for natural disaster-related costs" and "a good driver is anyone who does not have any of the following: an at-fault accident in the last 6 years / a criminal code traffic conviction in the last 4 years / a major traffic conviction in the last 3 years / a minor traffic conviction in the last 3 years". Also: "The Automobile Insurance Rate Board is further limited from approving a rate change greater than an average of 12.5% for all their policy holders, up from the previous of 10%."
- Losing it (GoA release May 14, 2026): "Drivers could lose rate protection under the current Good Driver Rate Cap if they switch their insurance company, move to a different community or replace a vehicle." AIRB article adds "adding a higher-risk driver". AIRB FAQ: "If you meet the definition of a good driver, have not moved, changed vehicles, or added a new driver to your policy, then contact your insurance company to find out why the Good Driver Rate Cap did not apply to you."
- URLs: https://www.alberta.ca/automobile-insurance-reform ; https://www.alberta.ca/release.cfm?xID=93990E2534BDB-01E4-5CB9-663727ECE4CDB7AC (Rate cap extended for 2026, Sept 24, 2025) ; https://www.airbfordrivers.ca/faq/
- Status: **CONFIRMED**. For the checker: a renewal **effective in 2026** for a qualifying good driver is still under the 7.5% cap, so an increase over 7.5% with no changes is worth querying with the insurer.

**A-3.2 The Grid ends January 1, 2027.**
- Quote (AIRB Grid page): "On November 21, 2024, the Government announced the Grid would be repealed effective January 1, 2027 and there will be no replacement." "Less than 10 per cent of Alberta drivers are grid rated, comprised mostly of new and less experienced drivers with less than eight years of driving experience." The Grid applies only to basic coverage (third-party liability, accident benefits, DCPD).
- Caveat (AIRB Bulletin 05-2026): "If significant premium increases occur because of the Grid repeal, the AIRB will develop and implement a replacement mechanism to ensure appropriate consumer protection."
- URL: https://www.airbfordrivers.ca/albertas-insurance-system/grid-rating-system/
- Status: **CONFIRMED**. "No replacement" is the plan, but the AIRB says it may act if increases are large.

### A-4. Complaint path

**A-4.1 Order of escalation.**
- AIRB "Who to contact": broker/agent/direct writer first ("The first point of contact is the broker, agent, or direct writer who sold you your auto insurance"), then the insurer's "Complaint Liaison Officer or Ombudsperson", then the GIO.
- alberta.ca: every insurer's complaint process "must include a company ombudsperson" (list maintained by the Superintendent) and "membership in an independent ombudservice".
- URLs: https://www.airbfordrivers.ca/who-to-contact-with-concerns/ ; https://www.alberta.ca/insurance-consumer-complaints
- Status: **CONFIRMED**.

**A-4.2 The GIO: free, needs a final position letter, can't review price, recommendations not binding.**
- Quote (GIO): "GIO Investigation Officers can only review a case once the policy holder has received a final position letter from their insurance company." "Some matters are beyond the scope of GIO services. These include: The cost of insurance and rates / Availability of insurance …" Stage limits: Informal Conciliation 45 days, Mediation 60 days, Senior Adjudication 90 days. "The Senior Adjudicative Officer's conclusion and non-binding recommendation is the final stage of GIO's services."
- alberta.ca: GIO toll free 1-877-225-0446; ombudservices "do not have the ability to order settlement of a claim".
- URL: https://giocanada.org/how-the-process-works/
- Status: **CONFIRMED**. Important for the checker: **a complaint that the price is too high is outside the GIO's scope.** A miscalculation or wrong information on file (for example, a conviction that isn't yours) is "policy processing and handling", which the GIO can look at.

**A-4.3 The Superintendent of Insurance (insurer conduct).**
- alberta.ca: "Concerns about the market conduct of an insurance company: Contact the Alberta Superintendent of Insurance." Phone 780-643-2237 (toll free: 310-0000 first), email shown on page (Cloudflare-obfuscated), address 8th Floor, Sir Frederick W. Haultain Building, 9811 109 Street NW, Edmonton T5K 2L5. "Please note that these offices do not formally arbitrate or settle claims."
- AIRB: "If your concern is about the operation of the auto insurance system, the experience obtaining coverage, or the resolution of a claim, contact your broker or call the Office of the Superintendent of Insurance at 780-427-8322 or TBF.Insurance@gov.ab.ca."
- Status: **CONFIRMED / CONFLICT** (two different phone numbers on two official pages). Use alberta.ca's 780-643-2237, since it's the Superintendent's own ministry page, or show both.

**A-4.4 The Alberta Insurance Council (agents, brokers, adjusters).**
- alberta.ca: "Concerns about the market conduct or licensing of an agent, broker or an independent adjuster: Contact the Alberta Insurance Council (AIC)." AIRB: "Do you have a complaint about your broker, agent, or independent adjuster? Visit the Alberta Insurance Council to file a complaint online."
- Status: **CONFIRMED**.

**A-4.5 The AIRB regulates rates; it doesn't set personal premiums.**
- AIRB Q&A: "Does the AIRB decide how much I personally pay for auto insurance? No. … we do not set individual premiums, sell insurance, or provide insurance quotes." AIRB "Who to contact": "If your concern is about AIRB rules and processes used to regulate the calculation of auto insurance premiums, contact us at 780-427-5428 or AIRB@gov.ab.ca." AIRB FAQ: "The AIRB does not provide quotes or recommendations for auto insurance."
- AIRB tools: "Rate Change Lookup: Look up approved rate changes for your insurance company over the past three years." (useful for "did my insurer have an approved increase?")
- Status: **CONFIRMED**. The AIRB also has a policy "P08 Consumer Inquiries and Complaints (Feb 1, 2026)" (https://www.airbfordrivers.ca/wp-content/uploads/2026/06/P08-Consumer-Inquiries-and-Complaints-February-1-2026.pdf). It was downloaded but not reviewed in detail.

### A-5. Design inputs for the checker (from the facts above)

Inputs: renewal **effective date**; last premium; new premium; whether the driver was a 2026 "good driver" (no at-fault in 6 yrs, no Criminal Code conviction in 4, no major or minor conviction in 3); changes since last term: at-fault claim, conviction, added driver, changed vehicle, moved, changed coverage or deductible, switched insurer; whether the renewal includes the Grid notice.

Logic the sources support:
1. **Effective date before 2027-01-01** → priced under the current system (A-1.5).
   - Good driver with no changes and an increase over **7.5%** → "Ask your insurer why the Good Driver Rate Cap didn't apply" (AIRB FAQ wording, A-3.1).
   - Effective date between **2026-09-01 and 2026-12-31** → "Between Jan 1 and Mar 31, 2027, ask the same insurer to cancel and rewrite under Care-First. The rate board expects insurers to use a prorated cancellation. Ask about any costs first." (A-1.6)
2. **Effective date in 2027, first Care-First renewal** → **no cap applies** to the 2026-to-2027 change (A-1.4). If the premium went up, show the AIRB's question list (below), point to the 13.7% average saving as an average, not a promise, and suggest getting quotes.
3. **Later renewals priced under rate filings made after 2027-01-01** → an increase over 10% with no personal changes is worth asking about. But the tool **can't know** which filing applies to a given renewal, so the wording must stay "worth asking", not "illegal" or "over the cap".
4. Any personal change → "The cap doesn't cover changes to your own risk" (A-1.3).
5. Grid notice present → "You were Grid-rated. Shop around carefully." (A-2.1, A-3.2)

The AIRB's own question list (Q&A, **CONFIRMED**, quote it word for word): "Does my renewal reflect Care-First pricing? / What factors contributed to my premium increase? / Did any previously approved rate changes affect my renewal? / Are there coverage changes or discounts that could reduce my premium?" and "If you believe your premium has been calculated incorrectly, ask your insurance company to review it."

Official figures the tool may show (all CONFIRMED): 13.7% / about $297 average (AIRB, Sept 8, 2026 filings); 7.5% (2026 good-driver cap); 5% and 10% (from 2027, applying to filings made after Jan 1, 2027); Sept 1–Dec 31, 2026 and Jan 1–Mar 31, 2027 (prorated rewrite window); 45–60 days (usual renewal notice, practice only); $200,000 liability minimum.

---

## PART B: Phone/internet fee complaint letter

### B-1. CRTC 2026-43: which fees are banned

**B-1.1 Decision, date, purpose.**
- Quote (CRTC news release, March 12, 2026): "Based on the public record, the CRTC is eliminating extra fees to activate, change, or cancel a plan." Associated link title: "Telecom Decision CRTC 2026-43: Prohibition of fees that are a barrier to switching cellphone and Internet plans" (href https://crtc.gc.ca/eng/archive/2026/2026-43.htm).
- URL: https://www.canada.ca/en/radio-television-telecommunications/news/2026/03/crtc-eliminates-fees-to-make-it-easier-to-switch-internet-and-cellphone-plans.html
- Status: **CONFIRMED**. The canada.ca link text says "Telecom Decision". A search-engine title for the same URL says "Telecom Regulatory Policy CRTC 2026-43". **UNCONFIRMED which is right**, since the CRTC page couldn't be opened. In the letter, use "CRTC 2026-43" without the document type.

**B-1.2 In force June 12, 2026; what's banned.**
- Quote (CCTS, "New rules: What fees can internet and wireless phone providers charge?", posted Sept 2, 2026): "As of June 12, 2026, most service providers are generally not allowed to charge fees for the activation of internet and wireless services or for modifying an existing service plan." And: "As of June 12, 2026, most internet and wireless service providers are no longer permitted to charge certain fees that are related to activating a new service plan or modifying an existing one, including: Activation fees (e.g. new account fee, service connection fee, setup service fee, enrolment fees) / Installation fees if no technician is required to visit your home / Change fees if no technician is required to visit your home, such as plan changes, service adjustments, internet speed changes."
- URL: https://www.ccts-cprst.ca/which-fees-are-allowed/
- Status: **CONFIRMED**.

**B-1.3 The two exceptions.**
- Quote (CCTS): "There are two main exceptions to this rule. Internet and wireless service providers can charge you a fee if: The activation or modification of a wireless or internet service requires a service technician to physically install the service or service equipment at your home or place of business. / You explicitly agree to purchase an optional product or service."
- Status: **CONFIRMED**.

**B-1.4 The CCTS three-part test (good for the letter's opening).**
- Quote (CCTS): "Your service provider is likely not allowed to charge a fee for the activation or modification of a service if all three of these criteria are met: You, the customer, are either activating a new wireless or internet service plan or modifying an existing one. / You have decided not to purchase any optional equipment or services. / Your service provider charged you this fee on or after June 12, 2026."
- Status: **CONFIRMED**. The letter tool can ask these three questions and only produce a letter if all three are "yes". Otherwise it should explain why not.

**B-1.5 What's still allowed.**
- Quote (CCTS): "Service providers can generally charge fees that are not related to activation and modification of a service plan, such as reconnection fee after disconnection for non-payment, bill reprint fee, or a 3G service maintenance fee. Service providers can also charge certain cancellation fees, if agreed to in the contract, such as equipment non-return charges, unpaid balance for device financing, and early cancellation for Internet services for a fixed term contract." And: "The CCTS cannot change the dollar ($) amount(s) of fees or prices that service providers charge under the terms of your contract."
- Status: **CONFIRMED**. (Matches the site's "Fees that are still allowed" warning. The CCTS also names "bill reprint fee" and "3G service maintenance fee", which the site doesn't list.)

**B-1.6 Fees still under CRTC review (the letter should flag these).**
- Quote (CCTS): "The CRTC is considering whether a select few of these new fees are permitted under its new rules. These fees include: Bell's device-handling charge, TELUS' SIM purchase and eSIM purchase fee, and Rogers' device set-up charge, shipping charge for devices ordered online, and SIM fee. Until the CRTC decides whether these fees are allowed or not, the CCTS may accept complaints about these specific fees. The CCTS may pause substantive dispute-resolution activities for complaints about whether these specific fees are permitted".
- Related: Telecom Notice of Consultation CRTC 2026-155 (show-cause proceeding, from search result titles; https://crtc.gc.ca/eng/archive/2026/2026-155.htm). It couldn't be read (403). Its outcome is **UNCONFIRMED**.
- Status: **CONFIRMED** (CCTS wording). Re-check before launch whether the CRTC has ruled.

**B-1.7 Early cancellation fee on wireless contracts with no subsidised device.**
- The site says: "If your contract didn't come with a discounted phone, there's no cancellation fee at all (since June 12, 2026)."
- The CCTS Annotated Guide to the Wireless Code ("Version of The Wireless Code as of April 2026") still shows the **old** G3: "for fixed-term contracts: The early cancellation fee must not exceed the lesser of $50 or 10% of the minimum monthly charge for the remaining months of the contract … b. for indeterminate contracts: A service provider must not charge an early cancellation fee." The CCTS Wireless Code page says "Recent amendments to the Wireless Code by the CRTC came into effect in June 2026." The CRTC release says the decision removes fees to "cancel a plan". The CCTS fees page lists allowed cancellation fees as equipment non-return, device financing balance and fixed-term **Internet** early cancellation, and does not list wireless.
- A search-result summary of CRTC 2026-43 said that under the new policy no early cancellation fee may be charged when there's no subsidised device. This couldn't be read on crtc.gc.ca.
- URLs: https://www.ccts-cprst.ca/wp-content/uploads/2026/05/Annotated-Guide-to-the-Wireless-Code-2026.pdf ; https://www.ccts-cprst.ca/codes-stats-and-reports/wireless-code/
- Status: **UNCONFIRMED** (strongly implied, but no official text read). Open https://crtc.gc.ca/eng/archive/2026/2026-43.htm in a browser and quote the paragraph before the letter tool uses it. Note that the site guide already states this as fact.

**B-1.8 Which providers and customers are covered.**
- Wireless: "a mandatory code of conduct that applies to all wireless service providers and to all retail mobile wireless voice and data services" … "individual and small business customers" (CCTS Wireless Code page).
- Internet: "the Internet Code, a mandatory code of conduct that applies to large Internet service providers (including all of their brands and affiliates that provide Internet services) and to all retail fixed Internet access services (including, cable, fibre, DSL, fixed wireless, and satellite services)." "The Internet Code applies to individual customers only." The CCTS list includes, among others: Bell Canada (and Virgin Plus, Distributel, EBOX…), Rogers (and Fido, Shaw Communications…), TELUS, SaskTel, Cogeco, Eastlink, Videotron (Fizz, Freedom Mobile, VMedia), Xplore, start.ca, Comwave.
- Fee ban scope: CCTS says "most internet and wireless service providers". Whether the internet fee ban covers **only** Internet Code (large) providers, as press reports say, couldn't be confirmed from the CRTC text.
- URLs: https://www.ccts-cprst.ca/codes-stats-and-reports/wireless-code/ ; https://www.ccts-cprst.ca/codes-stats-and-reports/internet-code/
- Status: Code scope **CONFIRMED**. Exact fee-ban scope for internet providers **UNCONFIRMED**. The letter tool should say "if your internet provider is one of the large providers covered by the CRTC Internet Code" and link the CCTS list.

**B-1.9 Changing or cancelling online, by app or by email (CRTC 2026-78).**
- Quote (CRTC release, April 24, 2026): "the CRTC is ensuring that customers can change or cancel their Internet or cellphone plans through an app, online, or by email." Also "improved how Canadians are notified about expiring contracts and discounts."
- URL: https://www.canada.ca/en/radio-television-telecommunications/news/2026/04/crtc-takes-action-to-help-canadians-more-easily-manage-their-internet-and-cellphone-plans.html
- Status: **CONFIRMED** (policy announced). The **effective date** of 2026-78 is **UNCONFIRMED** (CRTC page blocked). Don't cite it in the letter until the date is known.

### B-2. Wireless Code rights to cite in a letter

All from the CCTS Annotated Guide to the Wireless Code (code text "as of April 2026"): https://www.ccts-cprst.ca/wp-content/uploads/2026/05/Annotated-Guide-to-the-Wireless-Code-2026.pdf

- **B-2.1 Cancel any time (G5):** "i. Customers may cancel their contract at any time by notifying their service provider. ii. Cancellation takes effect on the day the service provider receives the notice of cancellation." The section doesn't apply to prepaid service. **CONFIRMED**.
- **B-2.2 Early cancellation, subsidised device (G2):** "The early cancellation fee must not exceed the value of the device subsidy" and must reduce "by an equal amount each month, for the lesser of 24 months or the total number of months in the contract term, such that the early cancellation fee is reduced to $0". G1: "the service provider must not charge the customer any fee or penalty other than the early cancellation fee." **CONFIRMED** (April 2026 text; whether June 2026 amendments changed G1/G2 is UNCONFIRMED).
- **B-2.3 Unlocking (F1):** "Any device provided by a service provider to the customer for the purpose of providing wireless services must be provided unlocked." and "If a device is, or becomes, locked to a service provider's network, that service provider must unlock the device, or give the customer the means to unlock the device, upon request, at no charge." **CONFIRMED**.
- **B-2.4 Data overage cap (E3):** "A service provider must suspend data overage charges once they reach $50 within a single monthly billing cycle, unless the account holder or authorized user expressly consents to pay additional charges." "this cap applies on a per-account basis". **CONFIRMED** (facts.yaml `wireless-data-overage-cap`).
- **B-2.5 Data roaming cap:** "Service providers are required to suspend international data roaming charges once the charges reach $100 within a single monthly billing cycle, unless the account holder or authorized user expressly consents to pay additional charges." Fees for add-on roaming packages count toward the $100. **CONFIRMED** (facts.yaml `wireless-roaming-cap`).
- **B-2.6 Trial period (G4):** "a service provider must offer the customer a trial period lasting a minimum of 15 calendar days"; usage limits "at least half of the permitted monthly usage"; disability: "a minimum of 30 calendar days, and the permitted usage amounts must be at least double"; cancel "without penalty or early cancellation fee if they have a. used less than the permitted usage; and b. returned any device provided by the service provider, in near-new condition, including original packaging." Applies "When a customer agrees to a contract through which they are subject to an early cancellation fee". **CONFIRMED**.

### B-3. CCTS process

- **B-3.1 Try the provider first (no fixed waiting period).** Procedural Code s.10.1: "The Commissioner shall take no action with respect to a complaint unless the Commissioner is satisfied that the Customer has previously brought the matter to the attention of the Participating Service Provider and that the Participating Service Provider has been afforded a reasonable opportunity to investigate and resolve the matter." CCTS fees page: "Speak with a representative on the phone or online chat and clearly communicate your concerns with them, and Give your service provider a reasonable opportunity to fix the problem. Keep records of the date(s) and time(s) you connected with your service provider, what they said to you, and what the outcome of your conversation(s) was." **CONFIRMED.** No "30 days" or other fixed wait was found: the test is "reasonable opportunity". (The only 30-day figure is for a non-participating provider to join the CCTS, and 20 days is the provider's report-back time after referral.)
- **B-3.2 Time limit: 1 year (up to 18 months in some cases).** Procedural Code s.10.3(a): no action on a complaint "received by the Commissioner more than one year after the date the Customer knew, or with reasonable diligence ought to have known, the facts upon which the complaint is based". s.10.5 allows up to 18 months if the customer raised it with the provider within one year and they were still trying to resolve it after one year. Source: https://www.ccts-cprst.ca/wp-content/uploads/2024/05/CCTS-Procedural-Code-May-2023.pdf (May 2023 version, the current link on the CCTS Procedural Code page). **CONFIRMED.**
- **B-3.3 Free.** CCTS FAQ: "Our service is free of charge for consumers in Canada." **CONFIRMED.** https://www.ccts-cprst.ca/for-consumers/faq/
- **B-3.4 Online form, about 15 minutes.** "Filing a complaint using our online complaint form is the best way to ensure that we receive all the information we need. It takes about 15 minutes." Form: https://www.ccts-cprst.ca/for-consumers/telecom-complaints/online-complaint-form/ . Phone 1-888-221-1687, TTY 1-844-713-3010, response@ccts-cprst.ca. **CONFIRMED.**
- **B-3.5 Steps and timelines.** After acceptance, "The service provider must report back to us within 20 days". "If any part of your complaint is about unpaid charges, your service provider must stop trying to collect these charges until your complaint is closed. You must pay charges that are not related to your complaint." Remedies: explain or apologise, correct the problem, "reimburse you for proven financial losses to a maximum of $5,000." URL: https://www.ccts-cprst.ca/for-consumers/telecom-complaints/complaints-process-explained/ **CONFIRMED.**
- **B-3.6 When findings are binding.** "If you accept the Investigation Findings, your service provider must implement any remedies … You release your service provider from any claims relating to your complaint. If you reject the Investigation Findings, your provider is not required to carry out any remedies." Procedural Code s.12.3(b): no response within 15 days means the party is deemed to have accepted; s.12.3(c): accepted findings "are binding on the Participating Service Provider". **CONFIRMED.** Accurate wording: "binding on the provider if you accept the findings", not "binding once the CCTS accepts the complaint".
- **B-3.7 Withholding only the disputed fee.** CCTS fees page: "if you are disputing a $30 activation fee, you may choose not to pay that amount while the CCTS is reviewing the complaint, but you should pay the rest of your bill. If the CCTS determines that the disputed fees were not legitimate, the provider must remove them. However, if CCTS determines that the fees are allowed to be charged, you will be responsible for paying them." **CONFIRMED.**
- **B-3.8 What the CCTS can't do.** "It is the role of regulators to punish or fine service providers or to ask them to change the way they operate. We do not do these things." FAQ: "the CCTS cannot request that the service provider lower its price for a service provided." **CONFIRMED.**

### B-4. Official template letters

- Searched CRTC, CCTS, canada.ca and ISED Office of Consumer Affairs. **No official telecom complaint template letter was found.** The CRTC has "How to make a complaint" pages (https://crtc.gc.ca/eng/phone/plaint.htm, https://crtc.gc.ca/eng/internet/plaint.htm), but they couldn't be read (403). The ISED Consumer Hub page "How to make a complaint about your telephone service" (https://ised-isde.canada.ca/office-consumer-affairs-consumer-hub/en/sector/term/145) loaded but contains no letter or template text.
- The closest official guidance on what a complaint should contain is general (alberta.ca, citing the Canadian Council of Insurance Regulators): "identify the problem, state why you think it's a problem and set out what you would like to happen. Put down the facts in a logical order and provide relevant information and copies of documents." (https://www.alberta.ca/insurance-consumer-complaints). This is insurance guidance, but it suits both letters.
- Status: **UNCONFIRMED (none exists, as far as found).** The Honest Penny letter must be labelled as Honest Penny's own template, not an official form.

Suggested letter contents (each backed by a CONFIRMED source above): account number; date the fee was charged (on or after June 12, 2026); the fee's name and amount; the three CCTS criteria (B-1.4); "CRTC 2026-43, in force June 12, 2026"; the request (remove or refund the fee); a reply deadline the reader picks ("reasonable opportunity", not a legal period); a note that they'll take it to the CCTS, which is free, and must be done within one year; a reminder to keep dated notes of every contact. Add an automatic note if the fee is one of the six under CRTC review (B-1.6).

---

## What only a person can check
- Open https://crtc.gc.ca/eng/archive/2026/2026-43.htm in a browser: confirm the document type, the no-subsidy wireless early cancellation rule (B-1.7), and which internet providers are covered (B-1.8).
- Check whether the CRTC has ruled on 2026-155 (Bell/TELUS/Rogers SIM and device fees).
- Find the effective date of CRTC 2026-78 (cancel by app, online or email).
- Ask the Superintendent which phone number is current (780-643-2237 vs 780-427-8322).
- Check whether Bill 41 has received Royal Assent, and find the instrument (AR 226/2025 or a ministerial order) that sets the 10%/5% caps.
- Re-read the AIRB Q&A before launch. It was published today and may be edited again.
