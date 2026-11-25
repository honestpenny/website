# Design notes

## v4 (2026-11-25): "Modern" (current)
Kevin's verdict on v3 (Ledger & Patina): still "basic" and old-fashioned. He chose **Wealthsimple / Wise** as the
reference. v3's paper/serif/ledger look is retired; its tools and trust devices stay, restyled.
- **Type:** Bricolage Grotesque (variable, OFL) at weight 800 with tight tracking for headings; Atkinson Hyperlegible
  Next for body. Big: H1 up to 5.4rem.
- **Colour:** white page, warm soft grey sections (#F6F4F0), one brand colour **forest #12332E** (bands, primary
  buttons, footer) and one bright **penny #FF9A5C** accent (main call to action, with ink text 7.96:1; never text on
  white). Copper text #B2531C. Pastel card tints: mint, peach, sky, butter (ink on each >= 13:1). Dark mode tested.
- **Shape:** rounded cards (20px) with a soft shadow, pill buttons, pill tags, small hover lift (off under reduced motion).
- **Hero:** big headline + penny button + a real-looking phone showing the actual quiz question, with two floating
  cards (a benefit result and the next real deadline). Decorative (aria-hidden); the real tool is one click away.
- **Sections:** "Facts checked against" strip of official sources (names, not logos), forest band with three tool
  cards, pastel topic cards, guide cards, 8 Steps list with numbered circles, forest email card, three trust cards.
- **Kept from v3:** fact-checked badge (was the stamp), worked-example cards (were receipts), source pills, quiz,
  key dates + calendar files, steps tracker, guess-then-reveal, get help in the header.
- **Still banned:** fake numbers or testimonials, stock people, autoplay/parallax/countdowns/popups, all-caps runs,
  coin artwork from the Mint, text over images.
- **Logo (2026-11-25):** original copper coin with a cent sign + Bricolage 800 wordmark. One source of truth:
  `scripts/make-brand.mjs` writes `public/brand/*` (logo light/dark SVG+PNG, mark), `favicon.svg`, `favicon.ico`
  (16/32/48), `apple-touch-icon.png`, `icon-192/512.png`, `icon-maskable-512.png`, `site.webmanifest`. Change the mark
  there, rerun it, and update `Logo.astro` to match. Never Mint coin artwork.
- Screenshots: docs/screenshots/v4-*.png.


## v3 (2026-11-25): "Ledger & Patina" (retired: read as old-fashioned)
From deep research (~/reports/Honest Penny creative UI direction.md). v2 still read as "basic" because of template
furniture (rows of three boxes, pill buttons, uppercase eyebrows, copper only as thin rules). v3 makes the brand
**the paperwork of honest money**, so every decorative device is also a trust signal:
- **Checked stamp** (`Stamp.astro`): who checked, when, next check. Real HTML text; inked frame is decorative.
- **Receipts** (`Receipt.astro`): worked examples as torn-edge receipts, real `<table>`, mono figures, a plain-words
  line and "How we worked this out". Say when a figure is rounded.
- **Ledgers:** tables ruled top and bottom in ink; guide lists as ledger entries (no cards); 8 Steps as a numbered ledger.
- **Fact marks:** each official number carries a small mono source mark (`CRA`, `Mint`) linking to the source.
- **Colour fields:** deep copper (#6B3412) and spruce (#1F4D4A) full-bleed bands at full strength.
  Text copper is #8F4A1C (6.26:1); #B5652B only for fills, rules, large display. NEVER copper on spruce (2.19:1).
  Verdigris #2E7566 = "done/settled" (ticks, progress). Kraft #F1E7D8 panels, receipt #FFFDF7.
- **Type:** Source Serif 4 variable with optical sizes (H1 up to ~4.75rem uses the Display cut), Atkinson Hyperlegible
  Next body, Atkinson Hyperlegible Mono for figures. No italics for emphasis, no all-caps (tested).
- **Corners:** 4px. No pills. Buttons are square-ish.
- **Signature tools:** `/check/` (GOV.UK question pages, "Question 3 of 7", Not sure, results first, localStorage),
  `/dates/` (calendar + RFC 5545 `.ics` with a 3-day reminder + Google/Outlook links), 8 Steps tracker (ticks you keep,
  no streaks), guess-then-reveal (typed, not dragged), `/email/` (honest preview built from real dates, archive),
  `/get-help/` (linked from the header on every page: WCAG 3.2.6).
- **Chinook arch** (`ChinookBand.astro`): seasonal sky band, ONLY as the weekly email header.
- **Spots** (`Spot.astro`): original object drawings (jar, receipt, calendar). Replace with a commissioned illustrator
  later (buy-out licence in writing).
- **Legal:** the logo is an original disc + tick. Never reproduce Royal Canadian Mint coin designs (licence via
  image@mint.ca), the Alberta coat of arms, or Alberta Blue + Gold as the main pair.
- **Avoid list:** three equal boxes in a row, pills, eyebrows in caps, Inter/Fraunces/Instrument Serif, gradients as
  decoration, glow, shadows, stock people, mountains/rodeo type, streaks/countdowns/popups, email gates on tools.


## v2 (2026-11-25): "basic" → modern, still calm
Kevin's verdict on v1: "looks basic". v2 keeps the rules (no gradients, shadows, stock photos, emoji icons, motion) and
adds the structure modern money/editorial sites use (MSE, Which?, NerdWallet CA, Wealthsimple Learn, GOV.UK,
GetSmarterAboutMoney; reviewed 2026-11-25):
- **Header:** light, logo left, topic nav right; under 60rem a "Menu" disclosure button (button + panel, Escape closes
  and returns focus; not an ARIA menu; nav shows without JS). `aria-current` on the active link.
- **Home:** two-column hero (promise, primary + secondary button, three proof ticks) beside a "Dates coming up"
  panel with calendar date tiles; topic hubs; "Recently checked" guide cards; calculator cards; email card; trust.
- **Guide page:** breadcrumb (Home / Guides / Topic), big serif h1, lede, meta strip (applies-to chips, checked,
  next check, reading time, byline); sticky "On this page" sidebar on ≥64rem with the current section highlighted,
  collapsible contents on phones; sources list shows the domain; "Read next" cards.
- **Cards:** whole card is one link (stretched title link = one tab stop, big target), hairline border, 12px radius.
- **Facts:** the source label is a small pill ("CRA") glued to the value with a no-break space; long values wrap.
- **Type:** Source Serif 4 (600/700, self-hosted, OFL) for headings, Atkinson Hyperlegible Next for body.
- **Share cards:** `/og/<slug>.png` generated at build (satori + resvg), one per guide + `/og/default.png`.
- **Accessibility beyond axe (tested in `e2e/ux.spec.ts`):** reflow at 320px, tables in focusable scroll regions,
  skip link first + visible focus ring, menu keyboard behaviour, 44px+ nav targets, contents links resolve,
  forced-colors (Windows High Contrast) borders, print stylesheet (prints source URLs), reduced motion.

## v1 (2026-11-24)

Lessons from MoneySavingExpert copied: dated byline at top, quick-answer box, jump list, numbered steps, warning
callouts, plain deal/text rows, "how this site works" in the footer, home page led by the email + deadlines.
Not copied: caps for emphasis, urgency without a date, many accent colours, dense home page, key facts hidden in toggles.

| Token | Hex | Contrast on paper #FBF8F3 | Use |
|---|---|---|---|
| ink | #211E1A | 15.7:1 | text |
| muted | #5C554D | 6.9:1 | bylines, dates |
| copper | #B5652B | 4.1:1 | logo, rules, large text only |
| copper-dark | #8C4718 | 6.5:1 | copper text |
| spruce | #1F4D4A | 8.9:1 (white on it 9.5:1) | header, buttons |
| link | #1B5E7A | 6.8:1 | links, always underlined |
| deadline edge | #9A5B00 | 4.85:1 on #FFF1D1 | deadline box |
| danger | #A3271B | 6.9:1 | warnings |
| border | #8A8178 | 3.6:1 | inputs (non-text 3:1) |

Type (v1): Atkinson Hyperlegible Next body + system serif headings (v2: Source Serif 4).
Every box has a text label; colour never carries meaning alone. Dark mode tokens in global.css (axe-tested).
Source research: ~/research_notes/Honest Penny website build plan/mse_aesthetics.md, design_trust_not_slop.md.
