// Generates every logo and icon file from one mark definition. Run: node scripts/make-brand.mjs
// Mark: an ORIGINAL copper coin with a cent sign (not Royal Canadian Mint artwork: no maple twig, effigy or
// "CANADA" + date). Wordmark: Bricolage Grotesque 800, converted to paths with satori so files need no font.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const PENNY = "#FF9A5C", FOREST = "#12332E", WHITE = "#FFFFFF";
mkdirSync("public/brand", { recursive: true });

// 64x64 mark. Cent sign = open "C" arc + vertical bar. Simple enough to read at 16px.
const mark = ({ bg = PENNY, fg = FOREST, ring = true, pad = 0 } = {}) => {
  const o = pad;
  return `<g transform="translate(${o} ${o})">` +
    `<circle cx="32" cy="32" r="31" fill="${bg}"/>` +
    (ring ? `<circle cx="32" cy="32" r="25.5" fill="none" stroke="${fg}" stroke-opacity="0.22" stroke-width="2"/>` : "") +
    // C: arc from ~45deg to ~315deg around (33,32), r=12
    `<path d="M 41.5 24.2 A 12 12 0 1 0 41.5 39.8" fill="none" stroke="${fg}" stroke-width="6" stroke-linecap="round"/>` +
    `<path d="M 33 13.5 V 50.5" stroke="${fg}" stroke-width="4.5" stroke-linecap="round"/>` +
    `</g>`;
};
const svgDoc = (w, h, body, bg) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${bg ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ""}${body}</svg>`;

// Wordmark paths via satori.
const font = readFileSync("node_modules/@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-800-normal.woff");
async function wordmark(color) {
  const svg = await satori({ type: "div", props: { style: { display: "flex", fontFamily: "B", fontSize: 56, fontWeight: 800, letterSpacing: -2, color }, children: "Honest Penny" } },
    { width: 420, height: 72, fonts: [{ name: "B", data: font, weight: 800, style: "normal" }] });
  return svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
}
const png = (svg, size) => new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();

// ICO container with embedded PNGs (supported by all current browsers and Windows).
function ico(pngs) {
  const header = Buffer.alloc(6); header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(pngs.length, 4);
  const dir = Buffer.alloc(16 * pngs.length); let offset = 6 + dir.length;
  pngs.forEach(({ size, data }, i) => {
    const b = i * 16; dir.writeUInt8(size >= 256 ? 0 : size, b); dir.writeUInt8(size >= 256 ? 0 : size, b + 1);
    dir.writeUInt8(0, b + 2); dir.writeUInt8(0, b + 3); dir.writeUInt16LE(1, b + 4); dir.writeUInt16LE(32, b + 6);
    dir.writeUInt32LE(data.length, b + 8); dir.writeUInt32LE(offset, b + 12); offset += data.length;
  });
  return Buffer.concat([header, dir, ...pngs.map((p) => p.data)]);
}

const markSvg = svgDoc(64, 64, mark());
const smallSvg = svgDoc(64, 64, mark({ ring: false }));            // favicon: no inner ring at tiny sizes
writeFileSync("public/brand/honest-penny-mark.svg", markSvg);
writeFileSync("public/favicon.svg", smallSvg);
writeFileSync("public/favicon.ico", ico([16, 32, 48].map((size) => ({ size, data: png(smallSvg, size) }))));
// Apple touch + Android: full-bleed forest square with the coin centred (iOS adds its own rounded corners).
const touch = (padRatio) => { const pad = Math.round(64 * padRatio); return svgDoc(64 + pad * 2, 64 + pad * 2, mark({ pad }), FOREST); };
writeFileSync("public/apple-touch-icon.png", png(touch(0.22), 180));
writeFileSync("public/icon-192.png", png(touch(0.18), 192));
writeFileSync("public/icon-512.png", png(touch(0.18), 512));
writeFileSync("public/icon-maskable-512.png", png(touch(0.4), 512)); // safe zone for Android shapes

// Horizontal logos (mark + wordmark), light and dark.
for (const [name, text, bg] of [["honest-penny-logo", FOREST, null], ["honest-penny-logo-on-dark", WHITE, null]]) {
  const wm = await wordmark(text);
  const body = `${mark()}<g transform="translate(80 -2)">${wm}</g>`;
  const svg = svgDoc(500, 64, body, bg);
  writeFileSync(`public/brand/${name}.svg`, svg);
  writeFileSync(`public/brand/${name}.png`, png(svgDoc(500, 64, body, bg ?? undefined), 1000));
}
writeFileSync("public/brand/honest-penny-mark.png", png(markSvg, 512));

writeFileSync("public/site.webmanifest", JSON.stringify({
  name: "Honest Penny", short_name: "Honest Penny", description: "Free, independent money help for Albertans and Canadians.",
  start_url: "/", display: "standalone", background_color: "#FFFFFF", theme_color: FOREST,
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
}, null, 2) + "\n");
console.log("brand files written");
