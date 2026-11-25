// One add-to-calendar file per deadline. Static, so it never changes behind the reader's back.
import type { APIRoute, GetStaticPaths } from "astro";
import { allDeadlines, ics, type Deadline } from "../../lib/deadlines";
export const getStaticPaths: GetStaticPaths = async () => (await allDeadlines()).map((d) => ({ params: { id: d.id }, props: { d } }));
export const GET: APIRoute = ({ props }) =>
  new Response(ics((props as { d: Deadline }).d), { headers: { "Content-Type": "text/calendar; charset=utf-8" } });
