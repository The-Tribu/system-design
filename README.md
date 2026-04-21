# The Tribu — Design System

Source of truth for The Tribu brand identity: colors, typography, spacing, motion, components and layout guidelines.

## Run locally

```bash
pnpm install
pnpm storybook
```

Opens at http://localhost:6006

## Deploy to GitHub Pages

```bash
pnpm run deploy
```

This builds the static site to `storybook-static/` and publishes it to the `gh-pages` branch.

## Using tokens in your project

### Option A — CSS (direct copy)

```html
<link rel="stylesheet" href="https://your-cdn.com/tokens.css">
```

Or copy the contents of `src/tokens/tokens.css` into your project.

### Option B — JSON (for design tools or scripts)

Import `src/tokens/tokens.json` into your Tailwind config, Style Dictionary, or token tool.

```js
import tokens from './tokens.json';
// tokens.colors.brand.accent.value → '#c621e5'
```

## Structure

```
src/
├── tokens/
│   ├── tokens.css     # CSS custom properties — import in any project
│   └── tokens.json    # Same token set as structured JSON
├── components/        # React implementations (reference)
└── stories/
    ├── foundations/   # Colors, Typography, Spacing, Elevation, Motion, Layout
    └── components/    # Button, Input, Badge, Card, Feedback (Toast)
```

## Design system sections

| Section | Content |
|---------|---------|
| **Colors** | Primary palette, Purple/Indigo/Neutral scales, semantic colors, text and border tokens |
| **Typography** | Font families (Satoshi, Inter), size scale, weights, line-heights |
| **Spacing** | 4px base scale (space-1 → space-24), border-radius |
| **Elevation** | 5 accent glow levels, named by use context |
| **Motion** | Durations, easings, interactive demos, z-index |
| **Layout** | Breakpoints, max-width containers, 12-column grid |
| **Button** | primary / secondary / ghost · sm / md / lg · disabled |
| **Input** | default / focused / error / disabled |
| **Badge** | purple / indigo / success / warning / error |
| **Card** | base and accent variant |
| **Feedback** | Toast success / error / info / warning |
