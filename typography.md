# BNB Chain Typography

---

## Primary Typeface: Space Grotesk

All BNB Chain slide text uses **Space Grotesk** — a geometric sans-serif with distinctive letterforms (note: 'G' has a spur, 'R' has a curved leg).

**Google Fonts CDN:**
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
```

**CSS:**
```css
font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

---

## Type Scale

| Role | Size | Weight | Transform | Tracking | Color | Used on |
|------|------|--------|-----------|---------|-------|---------|
| Display Hero | 96–120px | 800 ExtraBold | UPPERCASE | -0.02em | Yellow + White | Cover/section divider titles |
| Slide Title | 32–40px | 700 Bold | Sentence | 0 | Yellow or White | In-content slide headings |
| Metric Giant | 64–80px | 700 Bold | As-is | -0.02em | Yellow | Bento hero metric |
| Metric Medium | 48–56px | 700 Bold | As-is | -0.01em | Yellow | Secondary metrics |
| Badge Large | 14px | 600 SemiBold | UPPERCASE | 0.04em | White or Yellow | "ABOUT BNB CHAIN" labels |
| Badge Small | 11px | 600 SemiBold | UPPERCASE | 0.06em | White or Yellow | "CONTENT 1" labels |
| Table Header | 14px | 600 SemiBold | Sentence | 0 | White | Table column headers |
| Table Body | 14px | 400 Regular | Sentence | 0 | White | Table data cells |
| Body Text | 14–16px | 400 Regular | Sentence | 0 | `#AAAAAA` | Description, supporting copy |
| Source / Caption | 10–11px | 400 Regular | Sentence | 0 | `#666666` | "Source: ..." attribution |
| Bottom Tagline | 9px | 400 Regular | UPPERCASE | 0.1em | `#888888` | "BUILD WEB3 WITH BNB CHAIN" |

---

## Display Titles

The hero section titles (SLIDE BACKGROUNDS, TABLES, HEADERS & LABELS) follow a 2-line pattern:

```
[YELLOW WORD]       ← first word or category label
[WHITE WORD(S)]     ← second line, rest of the title
```

Example:
```
SLIDE               ← #F0B90B
BACKGROUNDS         ← #FFFFFF
```

Exception: Single-word titles (TABLES, INCENTIVES) use yellow only.

Font size at 1920px wide: ~96px. Line height: ~1.0–1.05 (tight, no leading).

---

## Slide Content Headings

On actual content slides (not section dividers), titles use:
- **Yellow** for the main subject word or section label
- **White** for body/subtitle text
- Mixed yellow+white inline for emphasis (e.g., "next billion" in yellow, rest in white)

Example from Mission slide:
```
Onboard the [next billion] Web3 users.
```
Where `[next billion]` is yellow (#F0B90B) and the rest is white.

---

## Numeric / Metric Text

Large metrics follow this hierarchy:
```
STABLECOIN MARKET CAP     ← 11px uppercase, #AAAAAA, tracking 0.08em
$14.22B                   ← 64px, #F0B90B, weight 700
```

Numbers are set in Space Grotesk Bold. Currency symbols ($) and suffixes (B, M, K, %) are the same size and weight as the number — do not reduce them.

---

## Logo Typography

The "BNB CHAIN" wordmark uses:
- **"BNB"** — Bold weight
- **"CHAIN"** — Regular weight
- Same size, uppercase, no tracking adjustment

This is a lockup with the cube icon; do not separate them.
