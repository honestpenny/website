// Serves the commit Cloudflare Workers Builds built, so anyone can confirm a merge is live:
//   curl -s https://honestpenny.ca/build.txt   →  first line must equal `git rev-parse origin/main`
// Green CI is not "deployed" (C2C LESSONS §26/§33). Workers Builds clones the repo, so we read the SHA from git;
// WORKERS_CI_COMMIT_SHA is only used if it is a real SHA (on 2026-11-25 Workers Builds gave "main").
import { execSync } from "node:child_process";

export const prerender = true;

const isSha = (s?: string) => !!s && /^[0-9a-f]{40}$/.test(s);

function commit(): string {
  if (isSha(process.env.WORKERS_CI_COMMIT_SHA)) return process.env.WORKERS_CI_COMMIT_SHA!;
  try {
    const sha = execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    if (isSha(sha)) return sha;
  } catch {}
  return "local";
}

export function GET() {
  const built = new Date().toISOString();
  return new Response(`${commit()}\n${built}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
