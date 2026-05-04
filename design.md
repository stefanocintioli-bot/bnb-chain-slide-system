# BNB Chain Slide Design System

Source: Slides Material Library PDF (40 pages)

---

## Overview

This design system captures every component, pattern, and visual element from the official BNB Chain slide library. It is the single reference for building on-brand presentations and web recreations.

---

## Library Sections

| Section | Pages | Description |
|---------|-------|-------------|
| Slide Backgrounds | 3–9 | 7 reusable background templates |
| Logo Assets | 10–11 | 9 BNB Chain logo variants |
| Headers & Labels | 12–13 | Badge/pill components in all variants |
| Tables | 14–17 | Ranked data tables (3, 4, 5 columns) |
| Bento Info Containers | 18–19 | Metric/stat card layouts |
| Network Logos | 20–21 | 40 blockchain network logos |
| Icons | 22–26 | 33 BNB Chain topic icons in 2 styles |
| BNB Chain Product Visuals | 27–29 | 4 product illustration icons |
| Slide Examples | 30–40 | 10 complete real slide layouts |

---

## Slide Backgrounds

Seven background variants for different content needs. All backgrounds are 1920×1080 (16:9), dark-themed. Every background includes:
- BNB Chain logo — bottom-left corner
- "BUILD WEB3 WITH BNB CHAIN" tagline — bottom-right corner
- Subtle grid overlay across the content area

### `bg-hero-geometric` (default cover)
Diagonal angular shapes and stacked isometric cubes in top-right, with yellow (#F0B90B) accent glow on cube faces. Used as the primary cover and section divider.

### `bg-orbs-sphere`
Central dark glowing ring/portal with floating 3D shapes (cubes, spheres, hexagons) at the edges. Creates a sci-fi / space feel.

### `bg-isometric-bnb`
Large 3D isometric BNB logo construction anchored to the bottom-right. Diagonal construction grid lines cross the slide. Used for BNB Chain product content.

### `bg-sphere-horizon`
Dark atmospheric scene with a planetary sphere horizon at the bottom, glowing from below. Used for mission/vision slides.

### `bg-defi-coins`
Floating 3D circular DeFi protocol coin tokens spilling from the right. Used for DeFi/ecosystem content.

### `bg-clean-grid`
Pure near-black (#111111) with a subtle rectangular grid overlay. Used for data-heavy slides where visual noise should be minimized.

### `bg-scattered-shapes`
Dark background with 3D spheres, cubes, and hexagonal prisms scattered at edges. Used for incentives and general content slides.

### `bg-split-panel`
Left: near-black. Right: lighter dark gray with ambient glow from top-right. Used for two-column content layouts.

---

## Layout System

### Slide Dimensions
- **Aspect ratio**: 16:9
- **Reference resolution**: 1920 × 1080px
- **Content area**: ~64px margin on all sides

### Content Zones
```
┌──────────────────────────────────────────────────────────┐
│ [BNB LOGO]                           top-left: 32px 32px │
│                                                          │
│   CONTENT AREA                        RIGHT ZONE         │
│   (left ~55%)                         (right ~45%)       │
│   - Titles                            - Decorative BG    │
│   - Stats                             - Product visuals  │
│   - Tables                            - Charts           │
│                                                          │
│ [BNB CHAIN LOGO]              [BUILD WEB3 WITH BNB CHAIN]│
└──────────────────────────────────────────────────────────┘
```

### Text Hierarchy on Slides
1. **Section label** (badge/pill, small) — identifies the slide category
2. **Slide title** — main heading, yellow or white, bold
3. **Subtitle or body** — supporting text, white or muted gray
4. **Data / metric** — yellow for BNB Chain, gray for competitors
5. **Source attribution** — tiny muted text, bottom of content

---

## Component Map

| Component | File | Page Reference |
|-----------|------|----------------|
| `<SlideLayout>` | `components/SlideLayout.tsx` | pp. 3–9 |
| `<Badge>` | `components/Badge.tsx` | p. 13 |
| `<DataTable>` | `components/DataTable.tsx` | pp. 15–17 |
| `<BentoCard>` | `components/BentoCard.tsx` | p. 19 |
| `<BarChart>` | `components/BarChart.tsx` | pp. 19, 36 |
| `<SocialLinks>` | `components/SocialLinks.tsx` | p. 40 |

---

## Visual Identity Notes

- **BNB Chain is always yellow.** Competitor metrics appear in gray or secondary brand colors.
- **Black backgrounds are not pure black.** Use `#111111` for slides, `#1A1A1A` for cards.
- **Typography is all-caps for headers** at the hero/display level; sentence case for body content.
- **Grid lines** appear on most backgrounds as very faint white lines (`rgba(255,255,255,0.05)`).
- **Rounded corners**: 8px on cards/tables, 999px on pill badges, 6px on rect badges.
