import React from 'react';
import { colors } from '../tokens/colors';
import { fontFamily, fontWeight, fontSize, letterSpacing, lineHeight } from '../tokens/typography';

/**
 * BentoCard — extracted from Bento Info Containers section (page 19).
 *
 * Four variants observed:
 *
 * 1. `simple`     — label + giant metric + short subtitle (designed for 2-up or 4-up grid)
 * 2. `extended`   — label + giant metric + paragraph description (half-width)
 * 3. `hero`       — label + very large metric + long description (full-width)
 *
 * All variants share:
 * - Background: #1A1A1A, border-radius: 12px
 * - Subtle border: 1px solid rgba(255,255,255,0.06)
 * - Label: small uppercase muted text
 * - Metric: yellow, bold, large
 */

type BentoVariant = 'simple' | 'extended' | 'hero';

interface BentoCardProps {
  variant?: BentoVariant;
  label: string;
  metric: string;
  subtitle?: string;
  description?: string;
  style?: React.CSSProperties;
}

const labelStyle: React.CSSProperties = {
  fontFamily: fontFamily.base,
  fontSize: fontSize.source,
  fontWeight: fontWeight.regular,
  color: colors.textSecondary,
  textTransform: 'uppercase',
  letterSpacing: letterSpacing.widest,
  marginBottom: 8,
};

const metricStyleMap: Record<BentoVariant, React.CSSProperties> = {
  simple: {
    fontSize: '52px',
    lineHeight: lineHeight.tight,
    marginBottom: 8,
  },
  extended: {
    fontSize: '64px',
    lineHeight: lineHeight.tight,
    marginBottom: 12,
  },
  hero: {
    fontSize: '80px',
    lineHeight: lineHeight.tight,
    marginBottom: 16,
  },
};

const paddingMap: Record<BentoVariant, string> = {
  simple: '20px 24px',
  extended: '24px 28px',
  hero: '28px 32px',
};

export const BentoCard: React.FC<BentoCardProps> = ({
  variant = 'simple',
  label,
  metric,
  subtitle,
  description,
  style,
}) => {
  return (
    <div
      style={{
        backgroundColor: colors.cardBg,
        borderRadius: 12,
        border: `1px solid ${colors.borderSubtle}`,
        padding: paddingMap[variant],
        fontFamily: fontFamily.base,
        ...style,
      }}
    >
      <p style={labelStyle}>{label}</p>

      <p
        style={{
          ...metricStyleMap[variant],
          fontWeight: fontWeight.bold,
          color: colors.bnbYellow,
          margin: 0,
          fontFamily: fontFamily.base,
        }}
      >
        {metric}
      </p>

      {subtitle && (
        <p
          style={{
            fontSize: '14px',
            color: colors.textSecondary,
            fontWeight: fontWeight.regular,
            margin: 0,
            marginTop: 4,
            lineHeight: lineHeight.snug,
          }}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          style={{
            fontSize: fontSize.body,
            color: colors.textSecondary,
            fontWeight: fontWeight.regular,
            margin: 0,
            marginTop: 12,
            lineHeight: lineHeight.normal,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default BentoCard;
