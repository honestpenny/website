# Honest Penny — honestpenny.ca

Independent, Alberta-first, Canada-wide money-help site (MoneySavingExpert-style): free guides, small calculators,
weekly email; a paid Canadian budgeting app comes later. Background research: ~/reports/Canadian money saving site plan.md
and ~/reports/Honest Penny website build plan.md.

## Non-negotiables
- **Every fact sourced and dated.** Each guide's front matter lists ≥2 sources (official first: canada.ca/CRA,
  alberta.ca, city sites, UCA, CRTC, CTA) with a `checked` date. If a fact can't be confirmed from an official
  source, leave it out or say it's unconfirmed. Run a fact-check pass before publishing any new or changed figure.
- **Alberta first, Canada second.** Every guide declares `applies:`; say which rules are Alberta-only.
- **Team byline only** (decided 2026-11-24): "Honest Penny team". Never the founder's name or the Airdrie address.
  The only link to a related business is the footer credit "Website by Altasmith" (Kevin's call, 2026-11-25); never
  Code To Cloud, and never in guide content. Never invent a named persona, expert, quote or review.
- **General information, not personal advice** (NI 31-103 s.8.25 publisher exemption): explain options, don't tell a
  specific reader which security to buy.
- **Paid links**: none today. If added: asterisk + disclosure on the page + `paidLinks: true` + update /how-we-make-money/.
- **Calm, ADHD-friendly design**: one next step, a finish line, no decorative motion, no carousels/countdowns.
- **Modern, Wealthsimple/Wise-style** (Kevin's pick, 2026-11-25; v4 in `docs/DESIGN.md`): bold Bricolage headlines,
  white space, forest + penny colours, rounded cards, real product UI in the hero. Kevin rejected v2 and v3 as
  "basic"/old-fashioned: don't drift back to paper/serif/ledger looks. Still no fake numbers, stock people, all-caps,
  popups or decorative motion. Banned phrases live in `src/lib/site.ts` (each with a reason) and are tested on every page.

## Stack
Astro 7 static output + MDX content collection (`src/content/guides/*.mdx`, schema in `src/content.config.ts`).
Calculators are vanilla-JS Astro components; they never send data anywhere (tested). Fonts self-hosted
(Atkinson Hyperlegible Next, OFL) in `public/fonts/`. Design tokens + contrast notes: `src/styles/global.css`, `docs/DESIGN.md`.

## Hosting
Separate Cloudflare account (not Code To Cloud's: its free plan builds one site at a time across all its sites).
Assets-only Worker (`wrangler.jsonc`, no `main`), deployed by **Cloudflare Workers Builds** from `main` of
`github.com/honestpenny/website`. GitHub Actions only runs tests; it never deploys.
- `public/_headers`: security headers + noindex on workers.dev. Don't tighten Referrer-Policy (breaks form providers).
- `public/robots.txt`: search + answer bots allowed, training bots disallowed, Content-Signal `ai-input=yes, ai-train=no`.
  Cloudflare AI crawler policy must be **Search Allow / Agent Allow / Training Disallow — never Block** (Block also
  blocks Googlebot and Bingbot).
- Worker name is `website` (must match the dashboard). Preview host: https://website.honest-penny-dns.workers.dev
  (noindex). Build: `npm run build`, deploy `npx wrangler deploy`, build var `NODE_VERSION=24` (+ `PUBLIC_KIT_FORM_ID` later).
- **SEO/AI visibility (copied from Code To Cloud):** one `#org` entity id that every Article's author/publisher points
  at; per-guide share cards `/og/<slug>.png`; sitemap `lastmod` = guide `lastChecked` (tested); IndexNow after each
  deploy (`scripts/indexnow.mjs`, `.github/workflows/indexnow.yml`, key file in `public/`; exits cleanly pre-launch).
- **Cloudflare Web Analytics** is ON (Kevin, 2026-11-25): cookie-free page views, auto-injected by Cloudflare, allowed in
  the CSP and disclosed on /privacy/. Never add another analytics or tracking tool without updating /privacy/ first.
- `/build.txt` serves the built commit from `git rev-parse HEAD` (Workers Builds' `WORKERS_CI_COMMIT_SHA` came
  through as "main", so it's only trusted when it's a real 40-character SHA).

## Test before done (desktop + phone, production build)
```
npx astro check && npx playwright test     # builds, runs wrangler dev (real Cloudflare runtime), Chromium only
                                            # a11y (axe light+dark), ux (menu, 320px reflow, skip link, tables), seo, facts
node scripts/check-live.mjs                 # AFTER every merge: live build.txt == origin/main, headers, robots, bots 200
```
Note: `astro preview` auto-backgrounds in agent shells, so tests use `wrangler dev`. Tests walk every sitemap URL, so
new pages are covered automatically. After any form change, do one real labelled signup on the live site.

## Tools and their data (fact-check like guides)
- `/check/` quiz: questions + benefits in `src/data/benefits.ts` (`CHECKED`, `REVIEW_BY`; tests fail when overdue).
  Wording is always "you might be able to claim"; never promise eligibility or amounts. Every URL official.
  Evidence: `docs/fact-checks/2026-11-25-quiz-and-help.md`. Re-check every 6 months and after each federal budget.
- `/dates/` + `/dates/<id>.ics`: built from guide `deadlines` front matter (`short` = calendar title, max 56 chars).
- `/get-help/`: phone numbers verified 2026-11-25; re-check with the quiz.
- `/email/`: preview is built from real upcoming dates; never invent a past issue.

## Adding a guide
1. Copy an existing `.mdx`; keep `draft: true` until a person has checked every claim.
2. Front matter: `applies`, `sources` (≥2, official), `lastChecked`, `nextReview`, `deadlines` (mark `approximate`).
3. Every official number goes in `src/data/facts.yaml` and is shown with `<Fact id="..." />`, which renders the
   value plus a visible link to the official page ("$7,000 CRA"). Never type an official figure straight into a guide.
4. Name official tools/programs with `<Official href by>` so readers can click through to the government page.
5. Use `QuickAnswer` first, `HonestTake` once, `Warning` for scams/costly mistakes. Short sentences, answer first.
6. Run `/fact-check` on it, fix everything, flip `draft: false`, run tests, merge, run `npm run check:live`.

## Keeping facts current (automated as far as is safe)
- **Fact registry** `src/data/facts.yaml`: value, official source (`short` label shown on the page), `checked`,
  `reviewBy`. Tests fail if a fact's source isn't an official domain, if `reviewBy` has passed, or if a page shows a
  fact without its source link. New year's values get a new id (`tfsa-limit-2027`), never a silent overwrite.
- **Watchlist** `src/data/watchlist.yaml`: official news pages to scan and which facts/guides each affects. Add a
  source whenever a new guide depends on one.
- **`/newsroom`** (`.claude/skills/newsroom/SKILL.md`): scans the watchlist (or a pasted news link, treated as a
  lead only), updates facts and guides, runs the `fact-checker` agent, runs tests and opens a PR. **Never merges.**
- **`/fact-check`** (`.claude/skills/fact-check/SKILL.md`) + **`fact-checker` agent** (`.claude/agents/`): independent
  verification against official sources; reports to `docs/fact-checks/`.
- **Weekly GitHub Action** `.github/workflows/freshness.yml` (`scripts/due.mjs`): opens/updates a "freshness" issue
  listing facts and guides due within 21 days. A scheduled Claude routine can run `/newsroom` weekly once the repo is
  on GitHub (set up with the `schedule` skill).
- Known yearly moments: CRA indexation and TFSA/RRSP limits (Nov), Alberta assessment notices (Jan), tax season
  (Feb–Apr), RoLR resets (Jan 1 every second year: next 2027), CCB/benefit year (July), federal budget (fall).

## Legal (draft protections; an Alberta lawyer must review before launch)
- `/terms/` (general information not advice, accuracy, calculators are estimates, third-party links, limitation of
  liability, Alberta law), short disclaimer on every guide, `/privacy/` (Alberta PIPA/PIPEDA basics), `/editorial-code/`.
- Publisher exemption only holds while content is general: never tailor investment picks to a reader, never take
  mortgage/insurance referral fees without checking RECA / Alberta Insurance Council licensing rules first.
- Affiliate links (if ever): disclose on the page (Competition Bureau / Ad Standards). Email: CASL consent records,
  sender ID + mailing address, unsubscribe within 10 business days.
- Kevin to-dos: put Honest Penny in its own corporation (keeps liability off him and Code To Cloud), lawyer review of
  terms/privacy, media/errors-and-omissions liability insurance quote, CIPO trademark search/filing for "Honest Penny".

## Guides roadmap (each: research → write → /fact-check → publish)
Written (2026-11-24): property assessment, electricity RoLR 2027, natural gas fixed vs default, phones & internet,
car & home insurance (Care-First 2027), 2026 tax brackets (+ calculator, `src/lib/tax.ts`), TFSA/RRSP/FHSA/RESP/RDSP
compared, Honest Penny Steps. Added 2026-11-25: 2027 tax brackets (`YEARS[2027]` in `src/lib/tax.ts`, from CRA
T4127 Jan 2027; re-check against CRA's rates page in January), RRSP vs TFSA vs non-registered withdrawals (+ withdrawal
calculator). `/steps/` landing page. Fact-check reports: `docs/fact-checks/`. MSE research + roadmap:
~/reports/MSE value adds for Alberta.md (next: Care-First renewal checker, phone-fee complaint letter, template letters).
Added 2026-11-25 (2nd batch): budget guide, account-setup guide, /budget/ planner, Care-First renewal check
(/car-insurance-renewal-check/: AIRB says the 10% cap does NOT limit 2026->2027), phone fee letter (/phone-fee-letter/),
flight delay/cancellation guide (APPR; Bill C-31 not law yet), car negotiation + AI guide (AMVIC all-in pricing).
Scheduled cloud routines (claude.ai/code/routines) open PRs for: RoLR 2027-28 (Dec 3), TFSA 2027 (Dec 10, Jan 5),
CRA 2027 rates page (Jan 20). Next: re-check Bill C-31 after Royal Assent, CRTC 2026-155 ruling on carrier SIM/device fees, RoLR 2027 rates (~Dec 2), Calgary/Edmonton 2027 assessment dates (Jan).
Yearly: update `src/lib/tax.ts` brackets each January (test pins $70,000 → total).

## Repo identity
Commits use the repo-local identity "Honest Penny" + GitHub no-reply email. Never commit with the founder's
Code To Cloud email. (The no-reply address still contains the GitHub username.)

## Open decisions (Kevin)
- One-line promise (draft in `src/lib/site.ts`).
- Kit account → set `PUBLIC_KIT_FORM_ID` in Workers Builds env; CASL mailing address (PO box) before the first email.
- A qualified named reviewer (CFP/QAFP) later → `site.reviewer`.
- Legal to-dos above.
