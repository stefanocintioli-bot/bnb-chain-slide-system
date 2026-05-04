import React from 'react';
import { colors } from '../tokens/colors';
import { fontFamily, fontWeight, fontSize, letterSpacing } from '../tokens/typography';

/**
 * Badge / Label component — extracted from Headers & Labels section (page 13).
 *
 * Variants observed:
 *  - shape: pill (fully rounded) | rect (6px corners)
 *  - size: lg ("ABOUT BNB CHAIN" scale) | md ("CONTENT 1" scale) | sm (smallest)
 *  - color: dark | dark-yellow | outline | fill-yellow
 *  - withDropdown: adds a downward triangle indicator below the badge
 *  - indicator: 'circle' | 'diamond' | none — small icon to the left
 */

type BadgeShape = 'pill' | 'rect';
type BadgeSize = 'lg' | 'md' | 'sm';
type BadgeColor = 'dark' | 'dark-yellow' | 'outline' | 'fill-yellow';
type BadgeIndicator = 'circle' | 'diamond' | 'none';

interface BadgeProps {
  children: React.ReactNode;
  shape?: BadgeShape;
  size?: BadgeSize;
  color?: BadgeColor;
  withDropdown?: boolean;
  indicator?: BadgeIndicator;
}

const shapeRadius: Record<BadgeShape, string> = {
  pill: '999px',
  rect: '6px',
};

const sizeStyles: Record<BadgeSize, React.CSSProperties> = {
  lg: {
    fontSize: fontSize.badgeLg,
    padding: '6px 14px',
    letterSpacing: letterSpacing.wide,
  },
  md: {
    fontSize: '12px',
    padding: '4px 12px',
    letterSpacing: letterSpacing.wider,
  },
  sm: {
    fontSize: fontSize.badgeSm,
    padding: '3px 10px',
    letterSpacing: letterSpacing.wider,
  },
};

const colorStyles: Record<BadgeColor, React.CSSProperties> = {
  dark: {
    backgroundColor: colors.cardBg,
    color: colors.textPrimary,
    border: `1px solid ${colors.borderSubtle}`,
  },
  'dark-yellow': {
    backgroundColor: colors.cardBg,
    color: colors.bnbYellow,
    border: `1px solid ${colors.borderSubtle}`,
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.bnbYellow,
    border: `1px solid ${colors.bnbYellow}`,
  },
  'fill-yellow': {
    backgroundColor: colors.bnbYellow,
    color: '#000000',
    border: `1px solid ${colors.bnbYellow}`,
  },
};

const DropdownArrow = () => (
  <div
    style={{
      position: 'absolute',
      bottom: '-7px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: `7px solid currentColor`,
    }}
  />
);

const IndicatorIcon = ({ type, color }: { type: BadgeIndicator; color: string }) => {
  if (type === 'circle') {
    return (
      <span
        style={{
          display: 'inline-block',
          width: 8,
          height: 8,
          borderRadius: '50%',
          border: `1.5px solid ${color}`,
          marginRight: 6,
          flexShrink: 0,
        }}
      />
    );
  }
  if (type === 'diamond') {
    return (
      <span
        style={{
          display: 'inline-block',
          width: 7,
          height: 7,
          backgroundColor: color,
          transform: 'rotate(45deg)',
          marginRight: 6,
          flexShrink: 0,
        }}
      />
    );
  }
  return null;
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  shape = 'pill',
  size = 'md',
  color = 'dark',
  withDropdown = false,
  indicator = 'none',
}) => {
  const indicatorColor =
    color === 'fill-yellow' ? '#000000' : color === 'outline' || color === 'dark-yellow' ? colors.bnbYellow : colors.textPrimary;

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          fontFamily: fontFamily.base,
          fontWeight: fontWeight.semibold,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          borderRadius: shapeRadius[shape],
          position: 'relative',
          ...sizeStyles[size],
          ...colorStyles[color],
        }}
      >
        {indicator !== 'none' && <IndicatorIcon type={indicator} color={indicatorColor} />}
        {children}
        {withDropdown && <DropdownArrow />}
      </div>
    </div>
  );
};

export default Badge;
