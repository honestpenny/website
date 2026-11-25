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
  { name: "Display", data: font("bricolage-grotesque", "bricolage-grotesque-latin-800-normal.woff"), weight: 800 as const, style: "normal" as const },
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
  const tree = h("div", { width: 1200, height: 630, display: "flex", flexDirection: "column", background: "#12332E", padding: "60px 72px", fontFamily: "Sans", color: "#FFFFFF" }, [
    h("div", { display: "flex", alignItems: "center", gap: 16, width: 1056 }, [
      h("div", { width: 56, height: 56, borderRadius: "50%", background: "#FF9A5C" }),
      h("div", { fontFamily: "Display", fontSize: 40, fontWeight: 800, letterSpacing: -1 }, site.name),
      h("div", { marginLeft: "auto", fontSize: 26, fontWeight: 700, color: "#C9D8D4" }, "honestpenny.ca"),
    ]),
    h("div", { display: "flex", flexDirection: "column", gap: 22, marginTop: 120 }, [
      h("div", { display: "flex", alignSelf: "flex-start", fontSize: 26, fontWeight: 700, color: "#16201F", background: "#FF9A5C", borderRadius: 999, padding: "10px 22px" }, kicker),
      h("div", { fontFamily: "Display", fontSize: title.length > 55 ? 64 : 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2, maxWidth: 1056 }, title),
    ]),
  ]);
  const svg = await satori(tree as any, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
