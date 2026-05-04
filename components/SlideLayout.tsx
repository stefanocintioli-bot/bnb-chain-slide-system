import React from 'react';
import { colors } from '../tokens/colors';
import { fontFamily, fontWeight, fontSize, letterSpacing } from '../tokens/typography';

/**
 * SlideLayout — wrapper component for BNB Chain slide compositions.
 *
 * Backgrounds are the actual extracted images from the Slide Backgrounds section (pages 3–9).
 * Image files live at: ../assets/backgrounds/<name>.png
 *
 * Set `backgroundsBasePath` to the resolved URL/path for your environment, e.g.:
 *   - Next.js:   '/backgrounds'  (place PNGs in public/backgrounds/)
 *   - Vite:      new URL('../assets/backgrounds/', import.meta.url).href
 *   - Static:    relative path from your HTML file
 *
 * Background variants:
 *  'hero-geometric'     — Cover default: dark bg + angular stacked cubes top-right with yellow accent glow
 *  'orbs-sphere'        — Glowing ring portal + floating 3D shapes (cubes, spheres, hexagons) at edges
 *  'isometric-bnb'      — Large 3D isometric BNB logo bottom-right + diagonal construction grid lines
 *  'sphere-horizon'     — Planetary atmosphere / horizon glow rising from bottom
 *  'defi-coins'         — 3D DeFi protocol coin tokens spilling from right
 *  'clean-grid'         — Pure near-black with subtle rectangular grid lines only
 *  'scattered-shapes'   — 3D spheres / cubes / hexagonal prisms scattered at corners/edges
 *  'split-panel'        — Left dark / Right lighter dark-gray with ambient top glow
 *
 * Usage:
 *   <SlideLayout background="hero-geometric" backgroundsBasePath="/backgrounds">
 *     <YourSlideContent />
 *   </SlideLayout>
 */

type SlideBackground =
  | 'hero-geometric'
  | 'orbs-sphere'
  | 'isometric-bnb'
  | 'sphere-horizon'
  | 'defi-coins'
  | 'clean-grid'
  | 'scattered-shapes'
  | 'split-panel';

interface SlideLayoutProps {
  background?: SlideBackground;
  /** Base URL/path where the background PNG files are served from. */
  backgroundsBasePath?: string;
  children?: React.ReactNode;
  showLogo?: boolean;
  showTagline?: boolean;
  style?: React.CSSProperties;
}

const backgroundFileNames: Record<SlideBackground, string> = {
  'hero-geometric':   'bg-hero-geometric.png',
  'orbs-sphere':      'bg-orbs-sphere.png',
  'isometric-bnb':    'bg-isometric-bnb.png',
  'sphere-horizon':   'bg-sphere-horizon.png',
  'defi-coins':       'bg-defi-coins.png',
  'clean-grid':       'bg-clean-grid.png',
  'scattered-shapes': 'bg-scattered-shapes.png',
  'split-panel':      'bg-split-panel.png',
};

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  background = 'hero-geometric',
  backgroundsBasePath = '../assets/backgrounds',
  children,
  showLogo = true,
  showTagline = true,
  style,
}) => {
  const bgFile = backgroundFileNames[background];
  const bgUrl = `${backgroundsBasePath.replace(/\/$/, '')}/${bgFile}`;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        backgroundColor: colors.slideBg,
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...style,
      }}
    >
      {/* Content area */}
      <div
        style={{
          position: 'absolute',
          inset: '32px 40px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>

      {/* Bottom-left: BNB Chain logo placeholder */}
      {showLogo && (
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: fontFamily.base,
          }}
        >
          {/* Replace with actual BNB Chain SVG logo */}
          <div
            style={{
              width: 18,
              height: 18,
              backgroundColor: colors.bnbYellow,
              borderRadius: 3,
              opacity: 0.9,
            }}
          />
          <span
            style={{
              fontSize: '11px',
              fontWeight: fontWeight.bold,
              color: colors.white,
              letterSpacing: letterSpacing.wide,
            }}
          >
            <strong>BNB</strong> CHAIN
          </span>
        </div>
      )}

      {/* Bottom-right: tagline */}
      {showTagline && (
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            right: 32,
            fontFamily: fontFamily.base,
            fontSize: fontSize.tagline,
            fontWeight: fontWeight.regular,
            color: '#888888',
            letterSpacing: letterSpacing.widest,
            textTransform: 'uppercase',
          }}
        >
          BUILD WEB3 WITH BNB CHAIN
        </div>
      )}
    </div>
  );
};

export default SlideLayout;
