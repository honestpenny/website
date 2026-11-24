// Serves the commit Cloudflare Workers Builds built, so anyone can confirm a merge is live:
//   curl -s https://honestpenny.ca/build.txt   →  must equal `git rev-parse origin/main`
// Green CI is not "deployed" (C2C LESSONS §26/§33). WORKERS_CI_COMMIT_SHA is set by Workers Builds.
export const prerender = true;

export function GET() {
  const sha = process.env.WORKERS_CI_COMMIT_SHA ?? "local";
  const built = new Date().toISOString();
  return new Response(`${sha}\n${built}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
