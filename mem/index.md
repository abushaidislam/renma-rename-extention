# Project Memory

## Core
Product: Renma — Chrome extension that renames downloaded images by source domain. Landing page in TanStack Start.
Brand: warm-canvas editorial (Claude-inspired). Cream canvas #faf9f5, coral #cc785c CTAs, ink #141413 type. Dark navy product surfaces for code/mockups. No cool blue/slate AI look.
Typography: Fraunces italic (600, opsz 144) for wordmark "renma."; Instrument Serif for display headings; Inter for body/UI; JetBrains Mono for code. Never use Copernicus (unavailable) — Instrument Serif is the display stand-in.
Typography scale utilities live in `src/styles.css` — use `h-display-xl/lg/md/sm`, `h-title-lg/md/sm`, `t-body/-sm`, `t-caption`, `t-caption-upper`, `t-button` instead of ad-hoc `text-{n}xl`.
Never hardcode Tailwind color utilities (`text-white`, `bg-[#...]`) — use semantic tokens defined in `src/styles.css`.

## Memories
- [Brand identity](mem://design/brand-identity) — Full Claude-inspired color, typography, spacing, radius, and component token spec for Renma.
