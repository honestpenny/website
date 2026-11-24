# Honest Penny — honestpenny.ca

Independent, Alberta-first, Canada-wide money-help site (MoneySavingExpert-style): free guides, small calculators,
weekly email; a paid Canadian budgeting app comes later. Background research: ~/reports/Canadian money saving site plan.md
and ~/reports/Honest Penny website build plan.md.

## Non-negotiables
- **Every fact sourced and dated.** Each guide's front matter lists ≥2 sources (official first: canada.ca/CRA,
  alberta.ca, city sites, UCA, CRTC, CTA) with a `checked` date. If a fact can't be confirmed from an official
  source, leave it out or say it's unconfirmed. Run a fact-check pass before publishing any new or changed figure.
- **Alberta first, Canada second.** Every guide declares `applies:`; say which rules are Alberta-only.
- **Team byline only** (decided 2026-11-24): "Honest Penny team". Never the founder's name, never a link to his other
  business, never the Airdrie address. Never invent a named persona, expert, quote or review.
- **General information, not personal advice** (NI 31-103 s.8.25 publisher exemption): explain options, don't tell a
  specific reader which security to buy.
- **Paid links**: none today. If added: asterisk + disclosure on the page + `paidLinks: true` + update /how-we-make-money/.
- **Calm, ADHD-friendly design**: one next step, a finish line, no decorative motion, no carousels/countdowns.
- **Not an AI-template site.** No gradients, shadows, three-card icon grids, emoji icons, Inter. Banned phrases live in
  `src/lib/site.ts` (each with a reason) and are tested on every page.

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
- `/build.txt` serves `WORKERS_CI_COMMIT_SHA`.

## Test before done (desktop + phone, production build)
```
npx astro check && npx playwright test     # builds, runs wrangler dev (real Cloudflare runtime), Chromium only
node scripts/check-live.mjs                 # AFTER every merge: live build.txt == origin/main, headers, robots, bots 200
```
Note: `astro preview` auto-backgrounds in agent shells, so tests use `wrangler dev`. Tests walk every sitemap URL, so
new pages are covered automatically. After any form change, do one real labelled signup on the live site.

## Adding a guide
1. Copy an existing `.mdx`; keep `draft: true` until a person has checked every claim.
2. Front matter: `applies`, `sources` (≥2, official), `lastChecked`, `nextReview`, `deadlines` (mark `approximate`).
3. Use `QuickAnswer` first, `HonestTake` once, `Warning` for scams/costly mistakes. Short sentences, answer first.
4. Fact-check, flip `draft: false`, run tests, merge, run `check:live`.

## Open decisions (Kevin)
- One-line promise (draft in `src/lib/site.ts`).
- Kit account → set `PUBLIC_KIT_FORM_ID` in Workers Builds env; CASL mailing address (PO box) before the first email.
- A qualified named reviewer (CFP/QAFP) later → `site.reviewer`.
