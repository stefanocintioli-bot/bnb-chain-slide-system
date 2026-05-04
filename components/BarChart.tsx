import React from 'react';
import { colors } from '../tokens/colors';
import { fontFamily, fontWeight, fontSize, letterSpacing } from '../tokens/typography';

/**
 * BarChart — horizontal bar chart extracted from Bento Info Containers (page 19)
 * and Slide Examples (page 36: "4.32M Daily Active Users").
 *
 * Design rules observed:
 * - BNB Chain bar: yellow (#F0B90B), always tallest / first
 * - Competitor bars: gray (#444444)
 * - Metric label above the bar
 * - Network name below the bar
 * - Title centered above the chart
 * - Container: same dark card style as BentoCard
 */

export interface BarChartItem {
  label: string;
  value: number;
  displayValue: string;
  isBnb?: boolean;
}

interface BarChartProps {
  title?: string;
  items: BarChartItem[];
  style?: React.CSSProperties;
}

export const BarChart: React.FC<BarChartProps> = ({ title, items, style }) => {
  const maxValue = Math.max(...items.map((i) => i.value));

  return (
    <div
      style={{
        backgroundColor: colors.cardBg,
        borderRadius: 12,
        border: `1px solid ${colors.borderSubtle}`,
        padding: '20px 24px',
        fontFamily: fontFamily.base,
        ...style,
      }}
    >
      {title && (
        <p
          style={{
            textAlign: 'center',
            fontSize: fontSize.source,
            fontWeight: fontWeight.regular,
            color: colors.textSecondary,
            textTransform: 'uppercase',
            letterSpacing: letterSpacing.wider,
            margin: '0 0 20px 0',
          }}
        >
          {title}
        </p>
      )}

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24, height: 100 }}>
        {items.map((item) => {
          const heightPct = (item.value / maxValue) * 100;
          return (
            <div
              key={item.label}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Value label above bar */}
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: item.isBnb ? fontWeight.bold : fontWeight.regular,
                  color: item.isBnb ? colors.bnbYellow : colors.textSecondary,
                  marginBottom: 6,
                }}
              >
                {item.displayValue}
              </span>

              {/* Bar */}
              <div
                style={{
                  width: '100%',
                  height: `${heightPct}%`,
                  backgroundColor: item.isBnb ? colors.bnbYellow : colors.competitorGray,
                  borderRadius: '3px 3px 0 0',
                  minHeight: 4,
                }}
              />

              {/* Network label below bar */}
              <span
                style={{
                  fontSize: '12px',
                  color: colors.textSecondary,
                  marginTop: 8,
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;
