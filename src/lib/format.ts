// Dates written the Canadian way readers expect: "24 November 2026" is unambiguous.
export const longDate = (d: Date) =>
  d.toLocaleDateString("en-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const PLACE_LABEL: Record<string, string> = {
  alberta: "Alberta", calgary: "Calgary", edmonton: "Edmonton", canada: "All of Canada",
};
