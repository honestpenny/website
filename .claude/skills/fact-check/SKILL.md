---
name: fact-check
description: Fact-check Honest Penny guides or facts against official sources using the fact-checker agent, then fix what it finds. Use for "/fact-check", "fact check everything", or before publishing any guide.
---

1. Pick the files: those named by the user, or every `src/content/guides/*.mdx` + `src/data/facts.yaml` for "everything".
2. Run the `fact-checker` agent (one per 2–3 guides, in parallel). Give it the file paths.
3. Fix every WRONG/OUTDATED item in content or `facts.yaml`; remove or mark UNVERIFIABLE claims.
4. Update `checked`/`lastChecked` dates only for claims actually confirmed.
5. Run the tests. Report: confirmed count, what you changed, and anything still unconfirmed.
