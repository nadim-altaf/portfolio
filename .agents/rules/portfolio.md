# Portfolio Project Rules

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript strict mode
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Theming:** next-themes
- **Fonts:** next/font
- **Forms:** React Hook Form + Zod

## Visual Identity

- Support dark/light theme toggle.
- Primary accent: cyan `#00d4ff`. Secondary accent: gold `#f0b429`.
- Fonts: **Syne** (headings), **DM Serif Display** (display), **JetBrains Mono** (code/mono).
- Use glass-card styling (backdrop-blur, semi-transparent backgrounds, subtle borders).

## Content Management

- All text content lives in `/data/site.ts` and `/data/projects.ts`. **Never hardcode content in components.**
- **Never invent facts about me.** Use only `CONTENT.md` as the source of truth; leave clearly marked `TODO` placeholders for any missing information.

## Accessibility

- Meet **WCAG AA** contrast and interaction standards.
- Full keyboard navigation support.
- Use `focus-visible` for focus indicators.
- Respect `prefers-reduced-motion` — disable or reduce animations when the user prefers it.

## Pre-Completion Checklist

Before finishing any task:

1. Run `lint`, `typecheck`, and `build` — all must pass.
2. Open the site in the browser.
3. Check the browser console for errors/warnings.
4. Screenshot both **mobile** and **desktop** viewports.

## Library Usage

- Check current library documentation (Context7 MCP if available) before using any library API. Do not rely on memory for API signatures or options.

## Version Control

- Commit after every completed phase with a **Conventional Commit** message (`feat:`, `fix:`, `chore:`, `docs:`).
- After each completed task, once lint, typecheck and build pass and the work is committed, push with: `git push origin main`
- Before every push, check that `.env.local` and other `.env*` files (except `.env.example`) are not tracked and that no token, key or password is in the commit. If anything looks wrong, stop and ask me.
- Never force push. If a push is rejected, run `git pull --rebase origin main`, show me the result, and wait for me.
- If the sandbox needs approval for the push, ask me.

## Comment Style (write like a human developer)

- Comment sparingly. Only comment the **"why"** (a workaround, a non-obvious decision, a gotcha), never what the code obviously does.
- Keep comments short: one line, plain language, a normal casual tone. Lowercase starts are fine.
- No decorative banners or dividers (no `═══`, `───`, `*****` lines, no "SECTION 1" headers).
- No JSDoc/TSDoc blocks on simple functions or components. Use them only for genuinely reusable utilities with non-obvious parameters.
- No emojis, no "Step 1 / Step 2" comments, no "this function does..." or "Here we..." phrasing.
- Don't comment every function or every JSX block. Most files should have only a few comments, and many none at all.
- Use `TODO` only for real remaining work, written like `TODO: add real demo link`.
- Commit messages: short, lowercase Conventional Commits, one line (e.g. `feat: add project filter`). No long bullet-list bodies.
- Names should explain the code so comments aren't needed.
