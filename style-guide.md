# BNB Chain Style Guide

---

## Color Palette

### Primary Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| BNB Yellow | `#F0B90B` | Primary brand color. All BNB Chain metrics, highlights, CTA labels, logo. |
| Pure White | `#FFFFFF` | Primary text on dark backgrounds |

### Background Colors

| Name | Hex | Usage |
|------|-----|-------|
| Slide Background | `#111111` | Main slide/page background |
| Card Background | `#1A1A1A` | Cards, panels, bento containers |
| Elevated Surface | `#252525` | Raised elements, hover states |
| Table Header | `#2C2C2C` | Table header row |
| Table Row Primary | `#1E1E1E` | Odd table rows |
| Table Row Alt | `#252525` | Even table rows |
| Logo Page Gray | `#3A3A3A` | Used on logo showcase page (medium dark) |

### Text Colors

| Name | Hex | Usage |
|------|-----|-------|
| Text Primary | `#FFFFFF` | Headlines, data, primary body text |
| Text Secondary | `#AAAAAA` | Supporting body text, descriptions |
| Text Muted | `#666666` | Source attributions, captions, fine print |
| Text Yellow | `#F0B90B` | Metrics, highlighted phrases, section labels |

### Semantic / Competitor Colors
These appear in comparison charts and competitor references only:

| Name | Hex | Usage |
|------|-----|-------|
| Competitor Gray | `#444444` | Competitor bars in charts |
| BNB Greenfield Green | `#3DCC91` | Greenfield product visual only |

### Border Colors

| Name | Hex / Token | Usage |
|------|-------------|-------|
| Border Subtle | `rgba(255,255,255,0.06)` | Card borders, grid lines |
| Border Yellow | `#F0B90B` | Outline badge variant |
| Border Medium | `rgba(255,255,255,0.12)` | Table separators |

---

## Spacing

Base unit: **8px**

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Icon gap, tight element spacing |
| `space-2` | 8px | Small inner padding |
| `space-3` | 12px | Badge padding horizontal |
| `space-4` | 16px | Card padding, row padding |
| `space-5` | 24px | Section gap, card gap |
| `space-6` | 32px | Slide margin, large gap |
| `space-8` | 48px | Major section spacing |
| `space-10` | 64px | Slide edge margin |

---

## Border Radius

| Token | Value | Used on |
|-------|-------|---------|
| `radius-sm` | 4px | Small interactive elements |
| `radius-md` | 8px | Cards, tables, info containers |
| `radius-lg` | 12px | Bento cards |
| `radius-pill` | 999px | Pill-shaped badges (About BNB Chain style) |
| `radius-rect` | 6px | Rectangle badges (CONTENT 1 style) |

---

## Shadows & Glow Effects

Cards and containers use no explicit box-shadow. The depth is created through:
- **Background color contrast** (card is lighter than slide bg)
- **Border**: `1px solid rgba(255,255,255,0.06)`

The BNB logo 3D illustrations use inner yellow glow to indicate active/lit faces. Do not attempt to reproduce these as box-shadow — they are pre-rendered illustrations.

---

## Grid Overlay

All slide backgrounds include a subtle rectangular grid:
```css
background-image:
  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
background-size: 160px 90px;
```

---

## Icon Style

BNB Chain icons appear in two styles:

**Style A — Circuit/Tech** (pages 23–24)
- Rounded-rectangle container: `#1A1A1A` background, subtle gray border
- Yellow circuit board patterns, glowing elements
- Appears for: Development, AI Agents, Low Latency, Staking, DeFi, Trading, Smart Contracts, MEV, etc.

**Style B — Illustrated/Geometric** (pages 25–26)
- Same container shape
- Flat isometric yellow + gray geometric illustrations
- Appears for: Privacy, TVL, Buy, Smart Wallets, Governance, Greenfield, NFT, Gas Fees, etc.

Both styles use the same container: `80×80px` rounded rect, `border-radius: 16px`.
