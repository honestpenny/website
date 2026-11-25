# Design notes

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
