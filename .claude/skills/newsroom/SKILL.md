---
name: newsroom
description: Check Honest Penny's official-source watchlist for new announcements (CRA limits and tax brackets, Alberta programs, utility rates, CRTC/CTA rules, city assessment dates), update facts.yaml and affected guides, fact-check, and open a pull request for human approval. Use for "/newsroom", "check for updates", "any new announcements", "add this news", or on the weekly schedule.
---

# Newsroom: keep Honest Penny current

Goal: no guide ever shows an outdated number. Automate the finding and drafting; a human approves publishing.

## Inputs
- `src/data/watchlist.yaml`: official pages to check, what to watch for, which facts/guides they affect.
- `src/data/facts.yaml`: every number we show, with source, `checked` and `reviewBy` dates.
- Optional: a news article or announcement URL the user pasted. Treat articles as **leads**: find the official
  source that confirms them before changing anything.

## Steps
1. `git checkout main && git pull`, then `git checkout -b news/YYYY-MM-DD`.
2. **Due items first:** list facts with `reviewBy` within 14 days or past, and guides with `nextReview` within 14 days.
3. **Scan the watchlist:** fetch each source; look for announcements dated after the newest `checked` date of the
   facts it affects. Note each relevant change with its official URL and date.
4. **Update facts:** for each confirmed change, edit `facts.yaml` (`value`, `effective`, `source`, `checked` = today,
   new `reviewBy`). For a new year's value (e.g. 2027 TFSA limit), ADD a new id (`tfsa-limit-2027`) and switch guides
   to it when it takes effect; don't overwrite history silently.
5. **Update guides:** fix any text the change affects; update `lastChecked`, `nextReview`, `sources[].checked`.
   If a change needs a new guide, draft it with `draft: true`.
6. **Fact-check:** run the `fact-checker` agent on every changed file. Fix every WRONG/OUTDATED item. Anything
   UNVERIFIABLE is removed or marked unconfirmed in the text, never published as fact.
7. **Test:** `npx astro check && npx playwright test`. All must pass.
8. **Changelog:** add a dated entry per guide changed to `/corrections/` only if a published fact was wrong;
   routine updates go in the PR body.
9. **PR:** push the branch and open a PR titled `News YYYY-MM-DD: <summary>` listing each change → official source.
   **Never merge.** Kevin merges, then run `node scripts/check-live.mjs`.
10. If nothing changed, say so in one line and don't open a PR.

## Rules
- Official sources only for facts. Never invent, round up or "estimate" an official figure.
- Alberta first; say when a rule is federal vs Alberta-only.
- Same voice: plain, short sentences, no banned phrases (`src/lib/site.ts`).
