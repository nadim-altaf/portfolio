<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Version Control & Pushing Rules

- After each completed task, once lint, typecheck and build pass and the work is committed, push with: `git push origin main`
- Before every push, check that `.env.local` and other `.env*` files (except `.env.example`) are not tracked and that no token, key or password is in the commit. If anything looks wrong, stop and ask me.
- Never force push. If a push is rejected, run `git pull --rebase origin main`, show me the result, and wait for me.
- If the sandbox needs approval for the push, ask me.
