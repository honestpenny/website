// Share cards (1200×630 PNG), generated at build time: one per guide plus "default" for every other page.
// A per-page card with the brand name beats one generic image (C2C LESSONS §18, §45).
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { readFileSync } from "node:fs";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { topicLabel } from "../../lib/guides";
import { site } from "../../lib/site";

const font = (pkg: string, file: string) => readFileSync(new URL(`../../../node_modules/@fontsource/${pkg}/files/${file}`, import.meta.url));
const fonts = [
  { name: "Serif", data: font("source-serif-4", "source-serif-4-latin-700-normal.woff"), weight: 700 as const, style: "normal" as const },
  { name: "Sans", data: font("atkinson-hyperlegible-next", "atkinson-hyperlegible-next-latin-400-normal.woff"), weight: 400 as const, style: "normal" as const },
  { name: "Sans", data: font("atkinson-hyperlegible-next", "atkinson-hyperlegible-next-latin-700-normal.woff"), weight: 700 as const, style: "normal" as const },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const guides = await getCollection("guides", ({ data }) => !data.draft);
  return [
    { params: { slug: "default" }, props: { kicker: "Alberta first · Canada-wide · Free", title: "Money help for Albertans that isn't selling you anything" } },
    ...guides.map((g) => ({ params: { slug: g.id }, props: { kicker: `${topicLabel(g.data.topic)} guide`, title: g.data.title } })),
  ];
};

// Satori takes a React-like element tree; plain objects keep us free of a JSX runtime.
const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { kicker, title } = props as { kicker: string; title: string };
  const tree = h("div", { width: 1200, height: 630, display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FBF8F3", padding: "64px 72px", borderTop: "16px solid #B5652B", fontFamily: "Sans", color: "#211E1A" }, [
    h("div", { display: "flex", alignItems: "center", gap: 18 }, [
      h("div", { width: 56, height: 56, borderRadius: 28, background: "#B5652B", border: "4px solid #8C4718" }),
      h("div", { fontFamily: "Serif", fontSize: 40, fontWeight: 700 }, site.name),
    ]),
    h("div", { display: "flex", flexDirection: "column", gap: 20 }, [
      h("div", { fontSize: 30, fontWeight: 700, color: "#8C4718", textTransform: "uppercase", letterSpacing: 2 }, kicker),
      h("div", { fontFamily: "Serif", fontSize: title.length > 55 ? 62 : 72, fontWeight: 700, lineHeight: 1.1, maxWidth: 1040 }, title),
    ]),
    h("div", { fontSize: 28, color: "#5C554D" }, "honestpenny.ca · Every number linked to its official source"),
  ]);
  const svg = await satori(tree as any, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
