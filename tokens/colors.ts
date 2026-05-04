export const colors = {
  // ── Primary brand ──────────────────────────────────────────────
  bnbYellow:        '#F0B90B',   // Primary brand yellow
  bnbYellowDark:    '#C89A09',   // Darker yellow (shadow faces on 3D elements)
  bnbYellowDim:     'rgba(240,185,11,0.15)',  // Yellow glow / tint
  bnbYellowFaint:   'rgba(240,185,11,0.08)',  // Very subtle yellow overlay
  white:            '#FFFFFF',

  // ── Slide backgrounds ──────────────────────────────────────────
  slideBg:          '#111111',   // Main slide / page background
  pageBg:           '#0A0A0A',   // Preview page background (slightly darker)

  // ── Surface / elevation ────────────────────────────────────────
  cardBg:           '#1A1A1A',   // Cards, panels, bento containers
  elevatedBg:       '#252525',   // Raised elements, hover states
  iconBgStart:      '#222222',   // Icon container gradient start
  iconBgEnd:        '#141414',   // Icon container gradient end
  iconFace:         '#2A2A2A',   // Dark face on 3D icon elements
  logoPageGray:     '#3A3A3A',   // Medium dark bg (logo showcase page)

  // ── Table ──────────────────────────────────────────────────────
  tableHeader:      '#2C2C2C',
  tableRowPrimary:  '#1E1E1E',
  tableRowAlt:      '#252525',

  // ── Text ───────────────────────────────────────────────────────
  textPrimary:      '#FFFFFF',   // Headlines, data, primary body
  textSecondary:    '#AAAAAA',   // Supporting body, descriptions
  textMuted:        '#666666',   // Source attributions, captions
  textDimmed:       '#444444',   // Very muted — disabled / tertiary
  textYellow:       '#F0B90B',   // Metric values, highlighted phrases
  textTagline:      '#888888',   // "BUILD WEB3 WITH BNB CHAIN" footer

  // ── Typography semantic roles ──────────────────────────────────
  // (from actual slides: pages 33, 35, 36)
  typographyHero:       '#FFFFFF',  // Cover/section divider white text
  typographyHeroAccent: '#F0B90B',  // Cover/section divider yellow text
  typographySlideTitle: '#F0B90B',  // In-slide content title
  typographyHighlight:  '#F0B90B',  // Inline text emphasis ("next billion")
  typographyBody:       '#FFFFFF',  // Slide body text
  typographyCaption:    '#AAAAAA',  // Sub-labels, captions
  typographySource:     '#666666',  // "Source: ..." attribution

  // ── Bento card semantic colors (page 19, 36) ──────────────────
  bentoLabel:         '#AAAAAA',  // Small uppercase label above metric
  bentoMetric:        '#F0B90B',  // The big number (4.32M, $5.9B, etc.)
  bentoSubtitle:      '#FFFFFF',  // Short subtitle line under metric
  bentoDescription:   '#AAAAAA',  // Longer description paragraph
  bentoCardBg:        '#1A1A1A',
  bentoCardBorder:    'rgba(255,255,255,0.06)',

  // ── Comparison / competitor colors (page 36) ──────────────────
  // These appear specifically in VS-comparison bento cards
  solanaAccent:    '#9945FF',   // ">3.23M" VS Solana — purple
  ethereumAccent:  '#4DB3FF',   // ">1.2M" VS Ethereum — cyan
  nearAccent:      '#00C1DE',   // NEAR teal (from bar chart)
  totalAddresses:  '#FFFFFF',   // "700M+" Total addresses — white

  // ── BNB product accent colors ──────────────────────────────────
  greenfieldGreen:   '#3DCC91',  // BNB Greenfield product
  greenfieldGreenDark: '#2A9968', // Darker Greenfield green
  bscChainLink:      '#B0B0B0',  // BSC chain link elements (silver/gray)

  // ── Borders ────────────────────────────────────────────────────
  borderSubtle:  'rgba(255,255,255,0.06)',
  borderMedium:  'rgba(255,255,255,0.12)',
  borderYellow:  '#F0B90B',
  borderIcon:    'rgba(255,255,255,0.07)',  // Icon container border

  // ── Chart / data viz ───────────────────────────────────────────
  chartBnb:        '#F0B90B',   // BNB Chain bar in charts
  chartCompetitor: '#3A3A3A',   // Competitor bars in charts
  chartGrid:       'rgba(255,255,255,0.05)',  // Chart grid lines

  // ── Badge variants ─────────────────────────────────────────────
  badgeDarkBg:     '#1A1A1A',
  badgeOutlineFg:  '#F0B90B',
  badgeFillBg:     '#F0B90B',
  badgeFillFg:     '#000000',
} as const;

export type ColorToken = keyof typeof colors;
