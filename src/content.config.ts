import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

// Every guide must say where it applies, who wrote it, when it was last checked and
// what it's based on. No source list, no publish. (Google: money pages must be
// "highly accurate"; Kevin: "keep me honest", primary sources only.)
const guides = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string().max(70),
    summary: z.string().max(160),
    topic: z.enum(["budget", "bills", "benefits", "tax", "savings", "debt", "travel", "housing", "investing"]),
    // Where the guide's rules apply. Alberta first; "canada" means federal rules for everyone.
    applies: z.array(z.enum(["alberta", "calgary", "edmonton", "canada"])).min(1),
    author: z.string(),
    reviewedBy: z.string().optional(),
    published: z.coerce.date(),
    lastChecked: z.coerce.date(),
    nextReview: z.coerce.date(),
    // A guide stays out of the build until Kevin approves every claim.
    draft: z.boolean().default(true),
    // Deadlines shown in a deadline box and on the homepage "coming up" list.
    deadlines: z
      .array(z.object({ date: z.coerce.date(), label: z.string(), short: z.string().max(56).optional(), approximate: z.boolean().default(false) }))
      .default([]),
    sources: z
      .array(z.object({ title: z.string(), url: z.url(), publisher: z.string(), checked: z.coerce.date() }))
      .min(2, "Every guide needs at least two primary sources"),
    // Any paid link on the page must be declared here, and gets an asterisk.
    paidLinks: z.boolean().default(false),
  }),
});

// Fact registry (src/data/facts.yaml): every number a guide shows via <Fact id>. See CLAUDE.md "Keeping facts current".
const facts = defineCollection({
  loader: file("src/data/facts.yaml"),
  schema: z.object({
    label: z.string(),
    value: z.string(),
    applies: z.array(z.enum(["alberta", "calgary", "edmonton", "canada"])).min(1),
    effective: z.string(),
    source: z.object({ title: z.string(), publisher: z.string(), short: z.string().max(14), url: z.url() }),
    checked: z.coerce.date(),
    reviewBy: z.coerce.date(),
  }),
});

export const collections = { guides, facts };
