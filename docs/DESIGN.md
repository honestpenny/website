# Design notes (2026-11-24)

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

Type: Atkinson Hyperlegible Next (body, 18px/1.6, self-hosted) + system serif (Charter/Cambria/Georgia) for headings.
Every box has a text label; colour never carries meaning alone. Dark mode tokens in global.css (axe-tested).
Source research: ~/research_notes/Honest Penny website build plan/mse_aesthetics.md, design_trust_not_slop.md.
