---
name: Renma brand identity (Claude-inspired warm canvas)
description: Full color, typography, spacing, radius, and component-token spec for the Renma landing page and extension surfaces
type: design
---

# Renma brand identity

Editorial warm-canvas system inspired by Anthropic's Claude. Cream + coral pairing, serif display type, dark navy product mockups. Reject cool blue/slate AI aesthetic.

## Colors (all defined as CSS vars in `src/styles.css`)
- primary (coral): #cc785c · active #a9583e · disabled #e6dfd8
- ink #141413 · body-strong #252523 · body #3d3d3a · muted #6c6a64 · muted-soft #8e8b82
- canvas #faf9f5 · surface-soft #f5f0e8 · surface-card #efe9de · surface-cream-strong #e8e0d2
- surface-dark #181715 · surface-dark-elevated #252320 · surface-dark-soft #1f1e1b
- hairline #e6dfd8 · hairline-soft #ebe6df
- on-primary #ffffff · on-dark #faf9f5 · on-dark-soft #a09d96
- accent-teal #5db8a6 · accent-amber #e8a55a
- success #5db872 · warning #d4a017 · error #c64545

## Typography families
- Display: Instrument Serif (Copernicus stand-in — never load Copernicus)
- Wordmark: Fraunces italic 600, opsz 144, tracking -0.04em, coral period
- UI/body: Inter (StyreneB stand-in)
- Mono: JetBrains Mono

## Type scale (utility → size / weight / line-height / tracking)
- h-display-xl → 64/92px · 400 · 1.02 · -0.03em (hero h1)
- h-display-lg → 48/60px · 400 · 1.05 · -0.02em (section h2)
- h-display-md → 36/48px · 400 · 1.1  · -0.02em (feature h3)
- h-display-sm → 28/36px · 400 · 1.15 · -0.015em (card headline)
- h-title-lg  → 22px · 500 · 1.3
- h-title-md  → 18px · 500 · 1.4
- h-title-sm  → 16px · 500 · 1.4
- t-body      → 16px · 400 · 1.55
- t-body-sm   → 14px · 400 · 1.55
- t-caption   → 13px · 500 · 1.4
- t-caption-upper → 12px · 500 · 1.4 · uppercase · 0.15em
- t-button    → 14px · 500 · 1
- t-nav       → 13.5px · 500 · 1.4
- t-code      → 14px · 400 · 1.6 mono

## Radius
xs 4 · sm 6 · md 8 · lg 12 · xl 16 · pill/full 9999

## Spacing (rhythmic)
4 · 8 · 12 · 16 · 24 · 32 · 48 · 96 (section)

## Component conventions
- Primary CTA: coral bg, on-primary text, t-button, radius md, h 40, px 20
- Secondary CTA on light: canvas bg, ink text, hairline border
- Secondary CTA on dark: surface-dark-elevated bg, on-dark text
- Feature card: surface-card bg, ink text, radius lg, 32px padding
- Product/code mockup card: surface-dark bg, on-dark text, radius lg
- Coral callout / CTA band: coral bg, on-primary text, display-sm/xl inside
- Badge pill: surface-card bg, ink, t-caption
- Coral badge: coral bg, on-primary, t-caption-upper
- Top nav: canvas bg, ink text, t-nav, 64px height
- Footer: surface-dark bg, on-dark-soft text, t-body-sm
