# Agent Instructions for Contribution Arena

## Project Overview
Contribution Arena is an Astro-based web application that compares GitHub contribution graphs in a retro arcade battle style. It uses Astro v5 with SSR via the Node adapter for dynamic rendering. See [README.md](../../README.md) for full details.

## Build and Development Commands
- Start development server: `npm run dev`
- Start network development server: `npm run dev:network`
- Build for production: `npm run build`
- Preview built app: `npm run preview`

## Astro Best Practices
- Use server-side rendering (SSR) for API-driven content like GitHub data.
- Enforce TypeScript strict mode for type safety.
- Structure components in `.astro` files with scoped styles.
- Place pages in `src/pages/` and static assets in `public/`.
- Optimize for performance by minimizing client-side JavaScript.
