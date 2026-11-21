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
- **Never commit** `.env` files, tokens, or secrets.
- **Never force push.**
- Remote: `https://github.com/nadim-altaf/portfolio.git` (branch: `main`). **Push only when the user says so.**
