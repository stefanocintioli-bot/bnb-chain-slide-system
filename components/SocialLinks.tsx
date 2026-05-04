import React from 'react';
import { colors } from '../tokens/colors';
import { fontFamily, fontWeight, fontSize, letterSpacing } from '../tokens/typography';

/**
 * SocialLinks — "Connect With Us" component extracted from page 40.
 *
 * Layout:
 * - Centered title "CONNECT WITH US" in yellow
 * - 4 social icons: X (Twitter), YouTube, Telegram, Discord
 *   - X and YouTube on the left
 *   - Telegram and Discord on the right
 *   - Each: circular gray icon + label below in yellow
 * - Central QR code placeholder
 * - "JOIN OUR COMMUNITY" button below QR
 */

interface SocialLinksProps {
  qrSrc?: string;
  links?: {
    x?: string;
    youtube?: string;
    telegram?: string;
    discord?: string;
  };
}

const SocialIcon: React.FC<{ label: string; icon: React.ReactNode; href?: string }> = ({
  label,
  icon,
  href,
}) => (
  <a
    href={href ?? '#'}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
    }}
  >
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: '#2A2A2A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.white,
        fontSize: '20px',
      }}
    >
      {icon}
    </div>
    <span
      style={{
        fontFamily: fontFamily.base,
        fontSize: fontSize.badgeLg,
        fontWeight: fontWeight.medium,
        color: colors.bnbYellow,
        letterSpacing: letterSpacing.normal,
      }}
    >
      {label}
    </span>
  </a>
);

export const SocialLinks: React.FC<SocialLinksProps> = ({ qrSrc, links = {} }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
        fontFamily: fontFamily.base,
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: fontFamily.base,
          fontSize: '40px',
          fontWeight: fontWeight.bold,
          color: colors.bnbYellow,
          textTransform: 'uppercase',
          letterSpacing: letterSpacing.tight,
          margin: 0,
        }}
      >
        CONNECT WITH US
      </h2>

      {/* Icons + QR row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 48,
        }}
      >
        {/* Left: X, YouTube */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <SocialIcon label="X" href={links.x} icon={<span style={{ fontWeight: 700 }}>𝕏</span>} />
          <SocialIcon
            label="Youtube"
            href={links.youtube}
            icon={
              <span style={{ fontSize: 16 }}>▶</span>
            }
          />
        </div>

        {/* Center: QR code */}
        <div
          style={{
            width: 180,
            height: 180,
            backgroundColor: '#1A1A1A',
            border: `1px solid ${colors.borderMedium}`,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {qrSrc ? (
            <img src={qrSrc} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span style={{ color: colors.textMuted, fontSize: '12px' }}>QR Code</span>
          )}
        </div>

        {/* Right: Telegram, Discord */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <SocialIcon
            label="Telegram"
            href={links.telegram}
            icon={<span style={{ fontSize: 16 }}>✈</span>}
          />
          <SocialIcon
            label="Discord"
            href={links.discord}
            icon={<span style={{ fontSize: 16 }}>💬</span>}
          />
        </div>
      </div>

      {/* Join button */}
      <button
        style={{
          backgroundColor: 'transparent',
          border: `1px solid ${colors.borderMedium}`,
          borderRadius: 999,
          padding: '10px 28px',
          fontFamily: fontFamily.base,
          fontSize: fontSize.badgeLg,
          fontWeight: fontWeight.semibold,
          color: colors.textPrimary,
          letterSpacing: letterSpacing.wider,
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}
      >
        JOIN OUR COMMUNITY
      </button>
    </div>
  );
};

export default SocialLinks;
