# Copilot Instructions — HaarKliniek45

Angular 21 hair transplant clinic website. Migration from a legacy static HTML site (`backup-static-site/`) to a modern standalone-component Angular app. The goal is an **original design** — do not reproduce the visual design of the old static site or hairclinicwolf.be.

## Commands

```bash
npm start              # Dev server → http://localhost:4200
npm run build          # Production build → dist/
npm test               # Run all unit tests (Vitest)
npm run test:coverage  # Tests + coverage report (target: 80% lines/functions/branches/statements)
npm run test:ui        # Vitest browser UI
npm run lint           # ESLint on src/**/*.{ts,html}
npm run lint:fix       # ESLint with auto-fix
npm run format         # Prettier on src/**/*.{ts,html,scss,css,json}
```

**Single test:** `npx vitest src/app/components/hero/hero.spec.ts` or `npx vitest -t "test name pattern"`

## Architecture

All components live in `src/app/components/` and are **standalone** (no NgModule). The root `App` component (`src/app/app.ts`) imports and composes all 12 section components in order. Routing exists (`app.routes.ts`) but is currently empty — ready for future treatment detail pages.

There are no services yet — all components are presentation-only.

```
src/
├── app/
│   ├── components/        # 12 standalone section components
│   ├── app.ts             # Root component (imports + composes all sections)
│   ├── app.config.ts      # bootstrapApplication config
│   └── app.routes.ts      # Empty, ready for expansion
├── styles/
│   ├── _colors.scss       # Brand color palette (SCSS variables)
│   ├── _typography.scss   # Font families + type scale
│   └── _spacing.scss      # 8px grid, breakpoints, container mixin
├── styles.scss            # Global reset, utility classes (.btn, .container, etc.)
└── assets/                # Images, fonts (owned assets only — no scraped content)
```

## Key Conventions

### Standalone components
Always generate with `ng generate component --standalone`. Each component has three files: `name.ts`, `name.html`, `name.scss`. No `NgModule` exists in this project.

### SCSS design tokens — explicit imports required
Every component `.scss` file **must** explicitly import the tokens it uses. There is no auto-import.

```scss
@use '../../../styles/colors' as *;
@use '../../../styles/typography' as *;
@use '../../../styles/spacing' as *;
```

After importing `as *`, variables are available directly: `$primary-green`, `$h2-size`, `$space-4`, etc.

### Design token reference
- **Primary brand color**: `$primary-green: #1a4d47` (deep medical green)
- **Heading font**: `'Playfair Display', Georgia, serif`
- **Body font**: `'Lato', -apple-system, sans-serif`
- **Breakpoints**: `$breakpoint-sm: 640px`, `$breakpoint-md: 768px`, `$breakpoint-lg: 1024px`, `$breakpoint-xl: 1280px`
- **Spacing scale**: 8px base grid — `$space-1` (4px) through `$space-24` (96px)

### Responsive styles
Mobile-first. Use the breakpoints above for `min-width` media queries. The `container` mixin from `_spacing.scss` provides the standard responsive container (max-width 1200px).

### TypeScript
Strict mode is enabled (`tsconfig.json`). Prefix intentionally unused variables with `_` to satisfy the linter.

### Component selector prefix
All component selectors must use the `app-` prefix (enforced by ESLint).

### Production bundle budget
Initial bundle must stay under 500 kB (warning) / 1 MB (error), as configured in `angular.json`.

## Agent System

This repo uses a multi-agent workflow via MCP. Agents are triggered by GitHub issue labels:

| Label | Agent |
|---|---|
| `needs:architecture` | Architect — Context7 Angular docs, ADR output |
| `needs:ux-dev` | UX Dev — component implementation |
| `needs:testing` | Tester — Vitest + Playwright |
| `needs:issue` | Issue Creator — structured issue authoring |

MCP server config: `.github/mcp-config.json`. Configured libraries: `@angular/angular`, `@angular/components`, `@angular/cdk`, `microsoft/playwright`.

## Learning Ledger

`lessons.md` tracks hard-won lessons and anti-patterns from this project. Check it before adding new components or tooling. Key entries:
- SCSS `@use` imports are required per-file — no global injection.
- "Implement X then Y" prompts mean complete **all steps**, not just scaffolding.
- Infrastructure work is a means, not an end — keep the website goal primary.
