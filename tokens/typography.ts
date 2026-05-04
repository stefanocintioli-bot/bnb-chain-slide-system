export const fontFamily = {
  base: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export const fontSize = {
  displayHero: '96px',
  slideTitle: '36px',
  metricGiant: '72px',
  metricMedium: '52px',
  badgeLg: '14px',
  badgeSm: '11px',
  tableHeader: '14px',
  tableBody: '14px',
  body: '15px',
  source: '11px',
  tagline: '9px',
} as const;

export const letterSpacing = {
  tight: '-0.02em',
  normal: '0',
  wide: '0.04em',
  wider: '0.06em',
  widest: '0.10em',
} as const;

export const lineHeight = {
  tight: 1.0,
  snug: 1.2,
  normal: 1.5,
} as const;
