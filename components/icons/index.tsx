import React from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface IconProps {
  size?: number;
}

export type IconStyle = 'tech' | 'illustrated';

// ─── Shared base ─────────────────────────────────────────────────────────────

const IconBase: React.FC<{ size?: number; id: string; children: React.ReactNode }> = ({
  size = 80,
  id,
  children,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id={`${id}-bg`}
        x1="0"
        y1="0"
        x2="80"
        y2="80"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#222222" />
        <stop offset="100%" stopColor="#141414" />
      </linearGradient>
    </defs>
    <rect width="80" height="80" rx="18" fill={`url(#${id}-bg)`} />
    <rect
      width="80"
      height="80"
      rx="18"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
      fill="none"
    />
    {children}
  </svg>
);

// ─── STYLE A — Circuit / Tech icons ──────────────────────────────────────────

// 1. IconDevelopment
export const IconDevelopment: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="dev">
    {/* Dashed ring */}
    <circle
      cx="40"
      cy="40"
      r="28"
      stroke="#F0B90B"
      strokeWidth="1.5"
      strokeDasharray="3 5"
      fill="none"
    />
    {/* Compass dots */}
    <circle cx="40" cy="12" r="2.5" fill="#F0B90B" />
    <circle cx="68" cy="40" r="2.5" fill="#F0B90B" />
    <circle cx="40" cy="68" r="2.5" fill="#F0B90B" />
    <circle cx="12" cy="40" r="2.5" fill="#F0B90B" />
    {/* < bracket */}
    <polyline
      points="26,32 20,40 26,48"
      stroke="#F0B90B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* / slash */}
    <line
      x1="34"
      y1="48"
      x2="46"
      y2="32"
      stroke="#F0B90B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* > bracket */}
    <polyline
      points="54,32 60,40 54,48"
      stroke="#F0B90B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// 2. IconOnChainAIAgents
export const IconOnChainAIAgents: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="ocaa">
    {/* Outer dashed ring */}
    <circle
      cx="40"
      cy="40"
      r="28"
      stroke="#F0B90B"
      strokeWidth="1.5"
      strokeDasharray="2 4"
      fill="none"
    />
    {/* Inner filled circle */}
    <circle cx="40" cy="40" r="18" fill="#1A1A1A" />
    {/* Hexagon (6-sided) */}
    <polygon
      points="40,24 53,31.5 53,46.5 40,54 27,46.5 27,31.5"
      stroke="#F0B90B"
      strokeWidth="1.5"
      fill="#2A2A2A"
    />
    {/* BNB cube top face */}
    <polygon points="40,28 47,32 40,36 33,32" fill="#F5CC3C" />
    {/* BNB cube left face */}
    <polygon points="33,32 40,36 40,44 33,40" fill="#F0B90B" />
    {/* BNB cube right face */}
    <polygon points="47,32 40,36 40,44 47,40" fill="#C89A09" />
    {/* Orbit dots + connectors */}
    <line x1="40" y1="22" x2="58" y2="40" stroke="#F0B90B" strokeWidth="0.75" opacity="0.5" />
    <line x1="58" y1="40" x2="40" y2="58" stroke="#F0B90B" strokeWidth="0.75" opacity="0.5" />
    <line x1="40" y1="58" x2="22" y2="40" stroke="#F0B90B" strokeWidth="0.75" opacity="0.5" />
    <line x1="22" y1="40" x2="40" y2="22" stroke="#F0B90B" strokeWidth="0.75" opacity="0.5" />
    <circle cx="40" cy="22" r="2" fill="#F0B90B" />
    <circle cx="58" cy="40" r="2" fill="#F0B90B" />
    <circle cx="40" cy="58" r="2" fill="#F0B90B" />
    <circle cx="22" cy="40" r="2" fill="#F0B90B" />
  </IconBase>
);

// 3. IconLowLatency
export const IconLowLatency: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="ll">
    {/* Gauge arc 270° — from 135° to 45° clockwise (goes around bottom) */}
    <path
      d="M 21.1 58.9 A 26 26 0 1 1 58.9 58.9"
      stroke="#F0B90B"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Tick marks */}
    <line x1="14" y1="40" x2="18" y2="40" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="14" x2="40" y2="18" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="66" y1="40" x2="62" y2="40" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="21" y1="21" x2="24" y2="24" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="59" y1="21" x2="56" y2="24" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Lightning bolt — filled yellow polygon */}
    <polygon
      points="43,24 35,42 40,42 37,56 45,38 40,38"
      fill="#F0B90B"
    />
    {/* Needle tip dot */}
    <circle cx="58.5" cy="21.5" r="2.5" fill="#F0B90B" />
  </IconBase>
);

// 4. IconStaking
export const IconStaking: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="stk">
    {/* Outer dashed ring */}
    <circle
      cx="40"
      cy="40"
      r="34"
      stroke="#F0B90B"
      strokeWidth="1"
      strokeDasharray="2 4"
      fill="none"
    />
    {/* Large coin */}
    <circle cx="40" cy="40" r="26" fill="#F0B90B" />
    {/* Inner coin */}
    <circle cx="40" cy="40" r="20" fill="#C89A09" />
    {/* Dollar sign vertical bar top */}
    <line x1="40" y1="26" x2="40" y2="30" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
    {/* Dollar sign vertical bar bottom */}
    <line x1="40" y1="50" x2="40" y2="54" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
    {/* Dollar sign S-curve */}
    <path
      d="M 46 31 C 46 28.5 34 28.5 34 33 C 34 37.5 46 37.5 46 42 C 46 46.5 34 46.5 34 44"
      stroke="#1A1A1A"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  </IconBase>
);

// 5. IconDeFiStrategies
export const IconDeFiStrategies: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="defi">
    {/* Microchip body */}
    <rect x="22" y="22" width="36" height="36" rx="4" fill="#1E1E1E" stroke="#F0B90B" strokeWidth="1.5" />
    {/* Left pins */}
    <line x1="14" y1="29" x2="22" y2="29" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="40" x2="22" y2="40" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="51" x2="22" y2="51" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Right pins */}
    <line x1="58" y1="29" x2="66" y2="29" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="58" y1="40" x2="66" y2="40" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="58" y1="51" x2="66" y2="51" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Top pins */}
    <line x1="29" y1="14" x2="29" y2="22" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="14" x2="40" y2="22" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="51" y1="14" x2="51" y2="22" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Bottom pins */}
    <line x1="29" y1="58" x2="29" y2="66" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="58" x2="40" y2="66" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="51" y1="58" x2="51" y2="66" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Pin tip dots */}
    <circle cx="14" cy="29" r="1.5" fill="#F0B90B" />
    <circle cx="14" cy="40" r="1.5" fill="#F0B90B" />
    <circle cx="14" cy="51" r="1.5" fill="#F0B90B" />
    <circle cx="66" cy="29" r="1.5" fill="#F0B90B" />
    <circle cx="66" cy="40" r="1.5" fill="#F0B90B" />
    <circle cx="66" cy="51" r="1.5" fill="#F0B90B" />
    {/* Bar chart bars inside */}
    <rect x="28" y="46" width="7" height="10" rx="1" fill="#F0B90B" />
    <rect x="37" y="40" width="7" height="16" rx="1" fill="#F0B90B" />
    <rect x="46" y="44" width="7" height="12" rx="1" fill="#F0B90B" />
  </IconBase>
);

// 6. IconTrading
export const IconTrading: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="trd">
    {/* Faint grid */}
    {[20, 30, 40, 50, 60].map((v) => (
      <React.Fragment key={`trd-g-${v}`}>
        <line x1={v} y1="18" x2={v} y2="62" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="18" y1={v} x2="62" y2={v} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      </React.Fragment>
    ))}
    {/* Candlestick 1 */}
    <line x1="26" y1="24" x2="26" y2="56" stroke="#F0B90B" strokeWidth="1" />
    <rect x="22" y="34" width="8" height="14" rx="1" fill="#F0B90B" />
    {/* Candlestick 2 */}
    <line x1="40" y1="20" x2="40" y2="58" stroke="#F0B90B" strokeWidth="1" />
    <rect x="36" y="28" width="8" height="20" rx="1" fill="#F0B90B" />
    {/* Candlestick 3 */}
    <line x1="54" y1="22" x2="54" y2="54" stroke="#F0B90B" strokeWidth="1" />
    <rect x="50" y="30" width="8" height="12" rx="1" fill="#C89A09" />
    {/* Trend arrow */}
    <polyline
      points="24,52 40,34 54,40 64,22"
      stroke="#F0B90B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="60,22 64,22 64,26"
      stroke="#F0B90B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// 7. IconAIFirstBlockchain
export const IconAIFirstBlockchain: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="aifb">
    {/* Outer hexagon */}
    <polygon
      points="40,12 61,23.5 61,46.5 40,58 19,46.5 19,23.5"
      stroke="#F0B90B"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Inner hexagon */}
    <polygon
      points="40,20 56,29 56,47 40,56 24,47 24,29"
      fill="#1A1A1A"
    />
    {/* Network connections */}
    <line x1="40" y1="26" x2="52" y2="33" stroke="#F0B90B" strokeWidth="1" opacity="0.7" />
    <line x1="52" y1="33" x2="52" y2="47" stroke="#F0B90B" strokeWidth="1" opacity="0.7" />
    <line x1="52" y1="47" x2="40" y2="54" stroke="#F0B90B" strokeWidth="1" opacity="0.7" />
    <line x1="40" y1="54" x2="28" y2="47" stroke="#F0B90B" strokeWidth="1" opacity="0.7" />
    <line x1="28" y1="47" x2="28" y2="33" stroke="#F0B90B" strokeWidth="1" opacity="0.7" />
    <line x1="28" y1="33" x2="40" y2="26" stroke="#F0B90B" strokeWidth="1" opacity="0.7" />
    <line x1="40" y1="26" x2="52" y2="47" stroke="#F0B90B" strokeWidth="0.75" opacity="0.4" />
    <line x1="52" y1="33" x2="28" y2="47" stroke="#F0B90B" strokeWidth="0.75" opacity="0.4" />
    <line x1="28" y1="33" x2="52" y2="47" stroke="#F0B90B" strokeWidth="0.75" opacity="0.4" />
    {/* Large glowing dots */}
    <circle cx="40" cy="26" r="3" fill="#F0B90B" />
    <circle cx="52" cy="47" r="3" fill="#F0B90B" />
    <circle cx="28" cy="47" r="3" fill="#F0B90B" />
    {/* Small dark dots */}
    <circle cx="52" cy="33" r="2" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
    <circle cx="28" cy="33" r="2" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
    <circle cx="40" cy="54" r="2" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
  </IconBase>
);

// 8. IconIssueTokens
export const IconIssueTokens: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="it">
    {/* Outer dashed ring */}
    <circle
      cx="40"
      cy="40"
      r="34"
      stroke="#F0B90B"
      strokeWidth="1"
      strokeDasharray="2 4"
      fill="none"
    />
    {/* Large coin */}
    <circle cx="40" cy="40" r="26" fill="#F0B90B" />
    {/* Inner coin */}
    <circle cx="40" cy="40" r="20" fill="#C89A09" />
    {/* Plus sign */}
    <rect x="37" y="28" width="6" height="24" rx="2" fill="#1A1A1A" />
    <rect x="28" y="37" width="24" height="6" rx="2" fill="#1A1A1A" />
  </IconBase>
);

// 9. IconSmartContracts
export const IconSmartContracts: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="sc">
    {/* Document base */}
    <rect x="20" y="16" width="34" height="44" rx="3" fill="#F0B90B" />
    {/* Folded corner — triangle cutout */}
    <polygon points="44,16 54,26 44,26" fill="#C89A09" />
    {/* Text lines on document */}
    <line x1="26" y1="34" x2="44" y2="34" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    <line x1="26" y1="40" x2="44" y2="40" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    <line x1="26" y1="46" x2="40" y2="46" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    {/* Circuit dots on left */}
    <circle cx="20" cy="26" r="2" fill="#F0B90B" stroke="#C89A09" strokeWidth="1" />
    <circle cx="20" cy="36" r="2" fill="#F0B90B" stroke="#C89A09" strokeWidth="1" />
    <circle cx="20" cy="46" r="2" fill="#F0B90B" stroke="#C89A09" strokeWidth="1" />
    {/* Code bracket overlay */}
    <rect x="40" y="46" width="24" height="18" rx="3" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
    {/* < */}
    <polyline
      points="45,51 42,55 45,59"
      stroke="#F0B90B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* / */}
    <line x1="48" y1="59" x2="53" y2="51" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* > */}
    <polyline
      points="56,51 59,55 56,59"
      stroke="#F0B90B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// 10. IconBatchProcessing
export const IconBatchProcessing: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="bp">
    {/* Bottom bar */}
    <rect x="14" y="50" width="44" height="10" rx="3" fill="#333333" />
    {/* Middle bar */}
    <rect x="16" y="40" width="44" height="10" rx="3" fill="#444444" />
    {/* Top bar (yellow) */}
    <rect x="18" y="30" width="44" height="10" rx="3" fill="#F0B90B" />
    {/* Hamburger lines on right of bottom bar */}
    <line x1="46" y1="53.5" x2="52" y2="53.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="46" y1="56.5" x2="52" y2="56.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Hamburger lines on right of middle bar */}
    <line x1="48" y1="43.5" x2="54" y2="43.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="48" y1="46.5" x2="54" y2="46.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Hamburger lines on right of top bar */}
    <line x1="50" y1="33.5" x2="56" y2="33.5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="50" y1="36.5" x2="56" y2="36.5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
  </IconBase>
);

// 11. IconMEV
export const IconMEV: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="mev">
    {/* Diamond shape (rotated square) */}
    <rect
      x="25"
      y="25"
      width="30"
      height="30"
      rx="2"
      transform="rotate(45 40 40)"
      fill="#1E1E1E"
      stroke="#F0B90B"
      strokeWidth="1.5"
    />
    {/* Crossed pick lines */}
    <line x1="24" y1="24" x2="56" y2="56" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <line x1="56" y1="24" x2="24" y2="56" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    {/* Pick head 1 (top-left) */}
    <polyline
      points="24,24 20,20 26,20 24,24"
      stroke="#F0B90B"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="#F0B90B"
    />
    {/* Pick head 2 (top-right) */}
    <polyline
      points="56,24 60,20 60,26 56,24"
      stroke="#F0B90B"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="#F0B90B"
    />
    {/* Center diamond pip */}
    <rect
      x="37"
      y="37"
      width="6"
      height="6"
      transform="rotate(45 40 40)"
      fill="#F0B90B"
    />
  </IconBase>
);

// 12. IconDeveloperTools
export const IconDeveloperTools: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="dt">
    <defs>
      <mask id="dt-gear-mask">
        <rect width="80" height="80" fill="white" />
        <circle cx="40" cy="40" r="18" fill="black" />
      </mask>
    </defs>
    {/* Gear teeth via star polygon approach using clipPath */}
    {/* Gear base circle with teeth */}
    {Array.from({ length: 10 }).map((_, i) => {
      const angle = (i * 36 * Math.PI) / 180;
      const x = 40 + 30 * Math.cos(angle);
      const y = 40 + 30 * Math.sin(angle);
      const w = 6;
      return (
        <rect
          key={`dt-tooth-${i}`}
          x={x - w / 2}
          y={y - w / 2}
          width={w}
          height={w}
          transform={`rotate(${i * 36}, ${x}, ${y})`}
          fill="#F0B90B"
        />
      );
    })}
    <circle cx="40" cy="40" r="28" fill="#F0B90B" mask="url(#dt-gear-mask)" />
    {/* Inner dark circle */}
    <circle cx="40" cy="40" r="18" fill="url(#dt-bg)" />
    {/* Code brackets inside */}
    <polyline
      points="30,34 25,40 30,46"
      stroke="#F0B90B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line x1="36" y1="46" x2="44" y2="34" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <polyline
      points="50,34 55,40 50,46"
      stroke="#F0B90B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// ─── STYLE B — Illustrated / Geometric icons ──────────────────────────────────

// 13. IconTransactionCosts
export const IconTransactionCosts: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="tc">
    <defs>
      <mask id="tc-gear-mask">
        <rect width="80" height="80" fill="white" />
        <circle cx="40" cy="40" r="20" fill="black" />
      </mask>
    </defs>
    <circle cx="40" cy="40" r="30" fill="#F0B90B" mask="url(#tc-gear-mask)" />
    {Array.from({ length: 10 }).map((_, i) => {
      const angle = (i * 36 * Math.PI) / 180;
      const x = 40 + 32 * Math.cos(angle);
      const y = 40 + 32 * Math.sin(angle);
      return (
        <rect
          key={`tc-t-${i}`}
          x={x - 3}
          y={y - 3}
          width="6"
          height="6"
          transform={`rotate(${i * 36}, ${x}, ${y})`}
          fill="#F0B90B"
        />
      );
    })}
    <circle cx="40" cy="40" r="20" fill="#C89A09" />
    {/* Dollar sign */}
    <line x1="40" y1="26" x2="40" y2="29" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="40" y1="51" x2="40" y2="54" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
    <path
      d="M 46 31 C 46 28.5 34 28.5 34 33.5 C 34 38 46 38 46 43 C 46 47.5 34 47.5 34 45"
      stroke="#1A1A1A"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  </IconBase>
);

// 14. IconTotalValueLocked
export const IconTotalValueLocked: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="tvl">
    {/* Star / 4-pointed diamond — two overlapping rects rotated */}
    <rect x="22" y="22" width="36" height="36" rx="3" transform="rotate(45 40 40)" fill="#F0B90B" />
    <rect x="26" y="26" width="28" height="28" rx="3" transform="rotate(0 40 40)" fill="#F0B90B" />
    {/* Crosshair */}
    <line x1="40" y1="14" x2="40" y2="66" stroke="#C89A09" strokeWidth="1" />
    <line x1="14" y1="40" x2="66" y2="40" stroke="#C89A09" strokeWidth="1" />
    {/* Padlock body */}
    <rect x="33" y="42" width="14" height="12" rx="2" fill="#1A1A1A" />
    {/* Padlock arch */}
    <path
      d="M 34 42 L 34 37 A 6 6 0 0 1 46 37 L 46 42"
      stroke="#1A1A1A"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Keyhole */}
    <circle cx="40" cy="47" r="2" fill="#F0B90B" />
    <line x1="40" y1="49" x2="40" y2="52" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
  </IconBase>
);

// 15. IconBuy
export const IconBuy: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="buy">
    {/* Cart handle */}
    <path
      d="M 16 22 L 22 22 L 28 50"
      stroke="#F0B90B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Cart body */}
    <path
      d="M 28 30 L 60 30 L 56 50 L 28 50 Z"
      fill="#F0B90B"
    />
    {/* BNB cube on cart */}
    <polygon points="40,33 46,36.5 40,40 34,36.5" fill="#F5CC3C" />
    <polygon points="34,36.5 40,40 40,46 34,42.5" fill="#C89A09" />
    <polygon points="46,36.5 40,40 40,46 46,42.5" fill="#A07808" />
    {/* Wheels */}
    <circle cx="34" cy="54" r="4" fill="#C89A09" />
    <circle cx="52" cy="54" r="4" fill="#C89A09" />
  </IconBase>
);

// 16. IconSmartWallets
export const IconSmartWallets: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="sw">
    {/* Large circle */}
    <circle cx="40" cy="40" r="28" fill="#F0B90B" />
    {/* Avatar head */}
    <circle cx="40" cy="30" r="8" fill="#1A1A1A" />
    {/* Avatar body */}
    <path
      d="M 26 56 C 26 46 54 46 54 56"
      fill="#1A1A1A"
    />
    {/* Credit card overlay */}
    <rect x="34" y="44" width="30" height="20" rx="3" fill="#C89A09" stroke="#F0B90B" strokeWidth="1" />
    <line x1="34" y1="51" x2="64" y2="51" stroke="#F0B90B" strokeWidth="1.5" />
    <rect x="37" y="54" width="8" height="4" rx="1" fill="#F0B90B" />
    {/* Gear badge */}
    <circle cx="62" cy="20" r="6" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
    <circle cx="62" cy="20" r="3" fill="#F0B90B" />
  </IconBase>
);

// 17. IconUserExperience
export const IconUserExperience: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="ux">
    {/* Monitor frame */}
    <rect x="14" y="18" width="52" height="36" rx="4" stroke="#F0B90B" strokeWidth="2" fill="#1E1E1E" />
    {/* Screen stand */}
    <rect x="34" y="54" width="12" height="6" rx="1" fill="#333333" />
    <rect x="28" y="60" width="24" height="3" rx="1.5" fill="#333333" />
    {/* Person head inside screen */}
    <circle cx="40" cy="32" r="7" fill="#F0B90B" />
    {/* Person shoulders */}
    <path
      d="M 26 50 C 26 40 54 40 54 50"
      fill="#F0B90B"
    />
    {/* Star accent */}
    <polygon
      points="58,20 59,23 62,23 60,25 61,28 58,26 55,28 56,25 54,23 57,23"
      fill="#F0B90B"
    />
  </IconBase>
);

// 18. IconOneBNB
export const IconOneBNB: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="onebnb">
    {/* Concentric rings */}
    <circle cx="40" cy="40" r="32" stroke="#F0B90B" strokeWidth="1" fill="none" />
    <circle cx="40" cy="40" r="24" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <circle cx="40" cy="40" r="16" stroke="#F0B90B" strokeWidth="2" fill="none" />
    {/* Crosshair */}
    <line x1="40" y1="8" x2="40" y2="72" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    <line x1="8" y1="40" x2="72" y2="40" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    {/* Center BNB hexagon */}
    <polygon points="40,28 50,33.8 50,45.4 40,51.2 30,45.4 30,33.8" fill="#F0B90B" />
    {/* Cube faces */}
    <polygon points="40,30 47,34 40,38 33,34" fill="#F5CC3C" />
    <polygon points="33,34 40,38 40,44 33,40" fill="#C89A09" />
    <polygon points="47,34 40,38 40,44 47,40" fill="#A07808" />
  </IconBase>
);

// 19. IconVoting
export const IconVoting: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="vote">
    {/* Ballot tablet */}
    <rect x="22" y="16" width="36" height="48" rx="4" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1.5" />
    {/* Ballot clip at top */}
    <rect x="34" y="12" width="12" height="8" rx="2" fill="#F0B90B" />
    {/* Person icon */}
    <circle cx="40" cy="28" r="4" fill="#F0B90B" />
    {/* X mark */}
    <line x1="28" y1="38" x2="52" y2="58" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="52" y1="38" x2="28" y2="58" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" />
    {/* Checkmark option */}
    <polyline
      points="28,40 34,46 44,36"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// 20. IconPay
export const IconPay: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="pay">
    {/* BNB isometric cube */}
    <polygon points="40,18 56,27 56,45 40,54 24,45 24,27" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
    <polygon points="40,20 54,28.5 40,37 26,28.5" fill="#F5CC3C" />
    <polygon points="26,28.5 40,37 40,52 26,43.5" fill="#F0B90B" />
    <polygon points="54,28.5 40,37 40,52 54,43.5" fill="#C89A09" />
    {/* Arrow pointing right */}
    <line x1="56" y1="40" x2="68" y2="40" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" />
    <polyline
      points="63,34 69,40 63,46"
      stroke="#F0B90B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Dot trail */}
    <circle cx="60" cy="50" r="1.5" fill="#F0B90B" opacity="0.6" />
    <circle cx="64" cy="52" r="1.5" fill="#F0B90B" opacity="0.4" />
    <circle cx="68" cy="54" r="1.5" fill="#F0B90B" opacity="0.2" />
  </IconBase>
);

// 21. IconDailyActiveUsers
export const IconDailyActiveUsers: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="dau">
    {/* Connecting lines (network) */}
    <line x1="22" y1="22" x2="58" y2="22" stroke="#F0B90B" strokeWidth="1" />
    <line x1="22" y1="22" x2="22" y2="58" stroke="#F0B90B" strokeWidth="1" />
    <line x1="22" y1="22" x2="58" y2="58" stroke="#F0B90B" strokeWidth="1" />
    <line x1="58" y1="22" x2="22" y2="58" stroke="#F0B90B" strokeWidth="1" />
    <line x1="58" y1="22" x2="58" y2="58" stroke="#F0B90B" strokeWidth="1" />
    <line x1="22" y1="58" x2="58" y2="58" stroke="#F0B90B" strokeWidth="1" />
    <line x1="22" y1="22" x2="40" y2="40" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    <line x1="58" y1="22" x2="40" y2="40" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    <line x1="22" y1="58" x2="40" y2="40" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    <line x1="58" y1="58" x2="40" y2="40" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    {/* Person 1 (top-left) */}
    <circle cx="22" cy="18" r="5" fill="#F0B90B" />
    <path d="M 14 28 C 14 22 30 22 30 28" fill="#F0B90B" />
    {/* Person 2 (top-right) */}
    <circle cx="58" cy="18" r="5" fill="#F0B90B" />
    <path d="M 50 28 C 50 22 66 22 66 28" fill="#F0B90B" />
    {/* Person 3 (bottom-left) */}
    <circle cx="22" cy="54" r="5" fill="#F0B90B" />
    <path d="M 14 64 C 14 58 30 58 30 64" fill="#F0B90B" />
    {/* Person 4 (bottom-right) */}
    <circle cx="58" cy="54" r="5" fill="#F0B90B" />
    <path d="M 50 64 C 50 58 66 58 66 64" fill="#F0B90B" />
    {/* Center node */}
    <circle cx="40" cy="40" r="5" fill="#F0B90B" />
  </IconBase>
);

// 22. IconOnChainGaming
export const IconOnChainGaming: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="ocg">
    {/* Controller body */}
    <rect x="14" y="28" width="52" height="28" rx="14" fill="#F0B90B" />
    {/* Center divot */}
    <ellipse cx="40" cy="42" rx="6" ry="4" fill="#C89A09" />
    {/* D-pad left part */}
    <rect x="20" y="39" width="14" height="6" rx="2" fill="#1A1A1A" />
    <rect x="24" y="35" width="6" height="14" rx="2" fill="#1A1A1A" />
    {/* Action buttons */}
    <circle cx="54" cy="38" r="4" fill="#1A1A1A" />
    <circle cx="62" cy="38" r="4" fill="#1A1A1A" />
    {/* Bumpers */}
    <rect x="18" y="22" width="14" height="8" rx="4" fill="#C89A09" />
    <rect x="48" y="22" width="14" height="8" rx="4" fill="#C89A09" />
    {/* Speaker grille dots */}
    <circle cx="40" cy="50" r="1.5" fill="#C89A09" />
    <circle cx="44" cy="50" r="1.5" fill="#C89A09" />
    <circle cx="36" cy="50" r="1.5" fill="#C89A09" />
  </IconBase>
);

// 23. IconStablecoins
export const IconStablecoins: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="stbl">
    {/* Large coin */}
    <circle cx="40" cy="36" r="26" fill="#F0B90B" />
    {/* Shine arc */}
    <path
      d="M 22 26 A 18 18 0 0 1 40 18"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Inner coin */}
    <circle cx="40" cy="36" r="20" fill="#C89A09" />
    {/* Dollar sign */}
    <line x1="40" y1="22" x2="40" y2="25" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="40" y1="47" x2="40" y2="50" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
    <path
      d="M 46 27 C 46 24.5 34 24.5 34 29.5 C 34 34 46 34 46 39 C 46 43.5 34 43.5 34 41"
      stroke="#1A1A1A"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* 3 person silhouettes below coin */}
    <circle cx="28" cy="66" r="4" fill="#F0B90B" />
    <path d="M 22 74 C 22 68 34 68 34 74" fill="#F0B90B" />
    <circle cx="40" cy="64" r="4" fill="#F0B90B" />
    <path d="M 34 72 C 34 66 46 66 46 72" fill="#F0B90B" />
    <circle cx="52" cy="66" r="4" fill="#F0B90B" />
    <path d="M 46 74 C 46 68 58 68 58 74" fill="#F0B90B" />
  </IconBase>
);

// 24. IconMemecoinsSurge
export const IconMemecoinsSurge: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="meme">
    {/* Back coin */}
    <circle cx="46" cy="50" r="18" fill="#8B6F09" />
    {/* Middle coin */}
    <circle cx="44" cy="46" r="18" fill="#C89A09" />
    {/* Front coin */}
    <circle cx="40" cy="42" r="18" fill="#F0B90B" />
    {/* Dollar sign on front coin */}
    <line x1="40" y1="30" x2="40" y2="33" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="51" x2="40" y2="54" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M 45 33 C 45 31 35 31 35 35 C 35 39 45 39 45 43 C 45 47 35 47 35 45"
      stroke="#1A1A1A"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Rising flame / rocket arrow */}
    <path
      d="M 40 18 L 36 26 L 38 26 L 36 32 L 40 28 L 44 32 L 42 26 L 44 26 Z"
      fill="#F0B90B"
    />
  </IconBase>
);

// 25. IconPrivacy
export const IconPrivacy: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="priv">
    {/* 4-petal flower — 4 circles at compass positions */}
    <circle cx="40" cy="26" r="14" fill="#F0B90B" opacity="0.9" />
    <circle cx="54" cy="40" r="14" fill="#F0B90B" opacity="0.9" />
    <circle cx="40" cy="54" r="14" fill="#F0B90B" opacity="0.9" />
    <circle cx="26" cy="40" r="14" fill="#F0B90B" opacity="0.9" />
    {/* Center cover circle */}
    <circle cx="40" cy="40" r="10" fill="#1A1A1A" />
    {/* Eye — ellipse */}
    <ellipse cx="40" cy="40" rx="7" ry="4" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    {/* Pupil */}
    <circle cx="40" cy="40" r="2.5" fill="#F0B90B" />
  </IconBase>
);

// 26. IconTotalValueLocked2
export const IconTotalValueLocked2: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="tvl2">
    {/* Dark diamond */}
    <rect
      x="22"
      y="22"
      width="36"
      height="36"
      rx="3"
      transform="rotate(45 40 40)"
      fill="#2A2A2A"
      stroke="#F0B90B"
      strokeWidth="1.5"
    />
    {/* Location pin (teardrop) */}
    <path
      d="M 40 20 A 12 12 0 0 1 52 32 C 52 42 40 56 40 56 C 40 56 28 42 28 32 A 12 12 0 0 1 40 20 Z"
      fill="#F0B90B"
    />
    {/* Lock on pin */}
    <rect x="35" y="33" width="10" height="8" rx="1.5" fill="#1A1A1A" />
    <path
      d="M 36 33 L 36 30 A 4 4 0 0 1 44 30 L 44 33"
      stroke="#1A1A1A"
      strokeWidth="2"
      fill="none"
    />
    {/* Diamond pips at corners */}
    <rect x="38" y="10" width="4" height="4" transform="rotate(45 40 12)" fill="#F0B90B" opacity="0.6" />
    <rect x="60" y="38" width="4" height="4" transform="rotate(45 62 40)" fill="#F0B90B" opacity="0.6" />
    <rect x="16" y="38" width="4" height="4" transform="rotate(45 18 40)" fill="#F0B90B" opacity="0.6" />
  </IconBase>
);

// 27. IconBuy2 — starburst with %
export const IconBuy2: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="buy2">
    {/* 12-pointed starburst */}
    {Array.from({ length: 12 }).map((_, i) => {
      const outerR = 34;
      const innerR = 24;
      const angle1 = ((i * 30 - 90) * Math.PI) / 180;
      const angle2 = (((i + 0.5) * 30 - 90) * Math.PI) / 180;
      const x1 = 40 + outerR * Math.cos(angle1);
      const y1 = 40 + outerR * Math.sin(angle1);
      const x2 = 40 + innerR * Math.cos(angle2);
      const y2 = 40 + innerR * Math.sin(angle2);
      const angle3 = (((i + 1) * 30 - 90) * Math.PI) / 180;
      const x3 = 40 + outerR * Math.cos(angle3);
      const y3 = 40 + outerR * Math.sin(angle3);
      return (
        <polygon
          key={`buy2-star-${i}`}
          points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
          fill="#F0B90B"
        />
      );
    })}
    <circle cx="40" cy="40" r="24" fill="#F0B90B" />
    {/* Dark center */}
    <circle cx="40" cy="40" r="14" fill="#1A1A1A" />
    {/* % symbol */}
    <circle cx="35" cy="35" r="3" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <circle cx="45" cy="45" r="3" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <line x1="33" y1="47" x2="47" y2="33" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
  </IconBase>
);

// 28. IconSmartWallets2 — coin stacks
export const IconSmartWallets2: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="sw2">
    {/* Tower 1 (left) — 3 coins */}
    <ellipse cx="22" cy="60" rx="10" ry="3.5" fill="#C89A09" />
    <ellipse cx="22" cy="56" rx="10" ry="3.5" fill="#C89A09" />
    <ellipse cx="22" cy="52" rx="10" ry="3.5" fill="#C89A09" />
    <rect x="12" y="52" width="20" height="8" fill="#C89A09" />
    <ellipse cx="22" cy="52" rx="10" ry="3.5" fill="#D4A80F" />
    {/* Tower 2 (center) — 4 coins, tallest */}
    <ellipse cx="40" cy="62" rx="10" ry="3.5" fill="#F0B90B" />
    <ellipse cx="40" cy="57" rx="10" ry="3.5" fill="#F0B90B" />
    <ellipse cx="40" cy="52" rx="10" ry="3.5" fill="#F0B90B" />
    <ellipse cx="40" cy="47" rx="10" ry="3.5" fill="#F0B90B" />
    <rect x="30" y="47" width="20" height="15" fill="#F0B90B" />
    <ellipse cx="40" cy="47" rx="10" ry="3.5" fill="#F5CC3C" />
    {/* Tower 3 (right) — 2 coins */}
    <ellipse cx="58" cy="60" rx="10" ry="3.5" fill="#C89A09" />
    <ellipse cx="58" cy="56" rx="10" ry="3.5" fill="#C89A09" />
    <rect x="48" y="56" width="20" height="4" fill="#C89A09" />
    <ellipse cx="58" cy="56" rx="10" ry="3.5" fill="#D4A80F" />
    {/* Dollar sign above center tower */}
    <line x1="40" y1="30" x2="40" y2="33" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="41" x2="40" y2="44" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M 44 33 C 44 31 36 31 36 34.5 C 36 38 44 38 44 41.5 C 44 45 36 45 36 43"
      stroke="#F0B90B"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </IconBase>
);

// 29. IconUserExperience2 — target/scope
export const IconUserExperience2: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="ux2">
    {/* 3 concentric rings */}
    <circle cx="40" cy="40" r="30" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <circle cx="40" cy="40" r="20" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <circle cx="40" cy="40" r="10" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    {/* 4 L-bracket corners */}
    {/* Top-left */}
    <polyline points="14,22 14,14 22,14" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Top-right */}
    <polyline points="58,14 66,14 66,22" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Bottom-left */}
    <polyline points="14,58 14,66 22,66" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Bottom-right */}
    <polyline points="66,58 66,66 58,66" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* BNB hexagon center */}
    <polygon points="40,33 47,36.9 47,44.7 40,48.6 33,44.7 33,36.9" fill="#F0B90B" />
    <polygon points="40,35 45,38 40,41 35,38" fill="#F5CC3C" />
    <polygon points="35,38 40,41 40,46 35,43" fill="#C89A09" />
    <polygon points="45,38 40,41 40,46 45,43" fill="#A07808" />
  </IconBase>
);

// 30. IconOneBNB2 — star badge
export const IconOneBNB2: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="onebnb2">
    {/* Hexagonal badge */}
    <polygon
      points="40,12 62,23 62,57 40,68 18,57 18,23"
      fill="#F0B90B"
    />
    {/* Inner dark hexagon */}
    <polygon
      points="40,18 58,28 58,52 40,62 22,52 22,28"
      fill="#1A1A1A"
    />
    {/* 5-pointed star */}
    <polygon
      points="40,22 43,33 54,33 45.5,39.5 48.5,50.5 40,44 31.5,50.5 34.5,39.5 26,33 37,33"
      fill="#F0B90B"
    />
    {/* Diamond pip top-right */}
    <rect
      x="56"
      y="16"
      width="6"
      height="6"
      transform="rotate(45 59 19)"
      fill="#C89A09"
    />
  </IconBase>
);

// 31. IconEarn
export const IconEarn: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="earn">
    {/* Envelope body */}
    <rect x="18" y="30" width="44" height="32" rx="4" stroke="#F0B90B" strokeWidth="2" fill="#1E1E1E" />
    {/* Envelope flap (V) */}
    <polyline
      points="18,30 40,48 62,30"
      stroke="#F0B90B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Dollar sign emerging from top */}
    <line x1="40" y1="14" x2="40" y2="17" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="40" y1="27" x2="40" y2="30" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" />
    <path
      d="M 45 17 C 45 15 35 15 35 19 C 35 23 45 23 45 27 C 45 31 35 31 35 29"
      stroke="#F0B90B"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Side accents */}
    <line x1="18" y1="44" x2="22" y2="44" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="58" y1="44" x2="62" y2="44" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
  </IconBase>
);

// 32. IconOpenSourceFrameworks
export const IconOpenSourceFrameworks: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="osf">
    {/* Folder tab */}
    <rect x="18" y="26" width="44" height="34" rx="4" fill="#F0B90B" />
    <rect x="18" y="22" width="20" height="8" rx="3" fill="#F0B90B" />
    {/* Padlock inside folder */}
    <rect x="32" y="38" width="16" height="14" rx="2" fill="#1A1A1A" />
    <path
      d="M 34 38 L 34 34 A 6 6 0 0 1 46 34 L 46 38"
      stroke="#1A1A1A"
      strokeWidth="2.5"
      fill="none"
    />
    {/* Keyhole */}
    <circle cx="40" cy="44" r="2.5" fill="#F0B90B" />
    <line x1="40" y1="46.5" x2="40" y2="50" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Diamond accents at folder corners */}
    <rect x="16" y="24" width="4" height="4" transform="rotate(45 18 26)" fill="#C89A09" />
    <rect x="58" y="24" width="4" height="4" transform="rotate(45 60 26)" fill="#C89A09" />
    <rect x="16" y="56" width="4" height="4" transform="rotate(45 18 58)" fill="#C89A09" />
    <rect x="58" y="56" width="4" height="4" transform="rotate(45 60 58)" fill="#C89A09" />
  </IconBase>
);

// 33. IconTravel — passport/booklet
export const IconTravel: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="trvl">
    {/* Passport body */}
    <rect x="20" y="14" width="36" height="52" rx="4" fill="#F0B90B" />
    {/* Spine line */}
    <line x1="28" y1="14" x2="28" y2="66" stroke="#C89A09" strokeWidth="2" />
    {/* Photo box */}
    <rect x="30" y="20" width="18" height="16" rx="2" fill="#C89A09" />
    {/* Horizontal data lines */}
    <line x1="30" y1="42" x2="50" y2="42" stroke="#C89A09" strokeWidth="2" strokeLinecap="round" />
    <line x1="30" y1="48" x2="50" y2="48" stroke="#C89A09" strokeWidth="2" strokeLinecap="round" />
    <line x1="30" y1="54" x2="44" y2="54" stroke="#C89A09" strokeWidth="2" strokeLinecap="round" />
    {/* Diagonal corner fold effect */}
    <polygon points="44,14 56,14 56,26" fill="#C89A09" opacity="0.5" />
  </IconBase>
);

// 34. IconTravel2 — globe/compass
export const IconTravel2: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="trvl2">
    {/* Globe outline */}
    <circle cx="40" cy="40" r="28" stroke="#F0B90B" strokeWidth="2" fill="none" />
    {/* Latitude arcs */}
    <path d="M 13 34 Q 40 30 67 34" stroke="#F0B90B" strokeWidth="1" fill="none" opacity="0.7" />
    <path d="M 13 46 Q 40 50 67 46" stroke="#F0B90B" strokeWidth="1" fill="none" opacity="0.7" />
    {/* Longitude ovals */}
    <ellipse cx="40" cy="40" rx="12" ry="28" stroke="#F0B90B" strokeWidth="1" fill="none" opacity="0.7" />
    <line x1="40" y1="12" x2="40" y2="68" stroke="#F0B90B" strokeWidth="1" opacity="0.4" />
    <line x1="12" y1="40" x2="68" y2="40" stroke="#F0B90B" strokeWidth="1" opacity="0.4" />
    {/* Airplane at 45° */}
    <g transform="rotate(-45 40 40)">
      {/* Fuselage */}
      <ellipse cx="40" cy="40" rx="12" ry="4" fill="#F0B90B" />
      {/* Wing */}
      <polygon points="36,40 44,40 48,34 32,34" fill="#F0B90B" />
      {/* Tail */}
      <polygon points="28,40 34,40 32,36 28,36" fill="#F0B90B" />
    </g>
  </IconBase>
);

// 35. IconBNBGreenfield
export const IconBNBGreenfield: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="bnbgf">
    {/* Outer dark ring */}
    <circle cx="40" cy="40" r="30" stroke="#2A2A2A" strokeWidth="3" fill="none" />
    {/* Network lines between connected dots */}
    <line x1="40" y1="22" x2="58" y2="40" stroke="#3DCC91" strokeWidth="1.5" />
    <line x1="58" y1="40" x2="40" y2="58" stroke="#3DCC91" strokeWidth="1.5" />
    <line x1="40" y1="58" x2="22" y2="40" stroke="#3DCC91" strokeWidth="1.5" />
    <line x1="22" y1="40" x2="40" y2="22" stroke="#3DCC91" strokeWidth="1.5" />
    <line x1="40" y1="22" x2="40" y2="40" stroke="#3DCC91" strokeWidth="1.5" />
    <line x1="58" y1="40" x2="40" y2="40" stroke="#3DCC91" strokeWidth="1.5" />
    <line x1="40" y1="58" x2="40" y2="40" stroke="#3DCC91" strokeWidth="1.5" />
    <line x1="22" y1="40" x2="40" y2="40" stroke="#3DCC91" strokeWidth="1.5" />
    {/* Outer connection dots */}
    <circle cx="40" cy="22" r="3" fill="#3DCC91" />
    <circle cx="58" cy="40" r="3" fill="#3DCC91" />
    <circle cx="40" cy="58" r="3" fill="#3DCC91" />
    <circle cx="22" cy="40" r="3" fill="#3DCC91" />
    {/* Center cube */}
    <polygon points="40,32 47,36 40,40 33,36" fill="#F5CC3C" />
    <polygon points="33,36 40,40 40,46 33,42" fill="#F0B90B" />
    <polygon points="47,36 40,40 40,46 47,42" fill="#C89A09" />
  </IconBase>
);

// 36. IconOnChainGovernance
export const IconOnChainGovernance: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="ocgov">
    {/* Temple base */}
    <rect x="16" y="58" width="48" height="6" rx="1" fill="#F0B90B" />
    {/* Temple steps */}
    <rect x="20" y="54" width="40" height="4" rx="1" fill="#C89A09" />
    {/* Columns */}
    <rect x="22" y="32" width="6" height="22" rx="1" fill="#F0B90B" />
    <rect x="33" y="32" width="6" height="22" rx="1" fill="#C89A09" />
    <rect x="44" y="32" width="6" height="22" rx="1" fill="#F0B90B" />
    <rect x="55" y="32" width="6" height="22" rx="1" fill="#C89A09" />
    {/* Roof / pediment */}
    <polygon points="40,16 68,32 12,32" fill="#F0B90B" />
    {/* Governance ring with person dots */}
    <circle cx="40" cy="24" r="0" fill="none" />
    {[0, 72, 144, 216, 288].map((deg) => {
      const r = 10;
      const rad = (deg * Math.PI) / 180;
      const cx = 40 + r * Math.cos(rad);
      const cy = 24 + r * Math.sin(rad);
      return <circle key={`ocgov-dot-${deg}`} cx={cx} cy={cy} r="2" fill="#1A1A1A" />;
    })}
  </IconBase>
);

// 37. IconNFTEcosystem
export const IconNFTEcosystem: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="nft">
    {/* Picture frame */}
    <rect x="16" y="18" width="48" height="44" rx="3" stroke="#F0B90B" strokeWidth="2" fill="#1E1E1E" />
    {/* Mountain/landscape art inside */}
    <defs>
      <linearGradient id="nft-art" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F0B90B" />
        <stop offset="100%" stopColor="#2A2A2A" />
      </linearGradient>
      <clipPath id="nft-frame-clip">
        <rect x="18" y="20" width="44" height="40" rx="2" />
      </clipPath>
    </defs>
    <polygon
      points="18,60 30,36 40,48 52,28 62,60"
      fill="url(#nft-art)"
      clipPath="url(#nft-frame-clip)"
    />
    {/* Circuit dots at corners */}
    <circle cx="16" cy="18" r="2.5" fill="#F0B90B" />
    <circle cx="64" cy="18" r="2.5" fill="#F0B90B" />
    <circle cx="16" cy="62" r="2.5" fill="#F0B90B" />
    <circle cx="64" cy="62" r="2.5" fill="#F0B90B" />
    {/* Stars */}
    <polygon points="56,24 57,27 60,27 58,29 59,32 56,30 53,32 54,29 52,27 55,27" fill="#F0B90B" />
    <polygon points="22,30 23,33 26,33 24,35 25,38 22,36 19,38 20,35 18,33 21,33" fill="#F0B90B" opacity="0.5" />
  </IconBase>
);

// 38. IconScalableLowFees
export const IconScalableLowFees: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="slf">
    {/* Back coin hex */}
    <polygon points="40,28 54,36 54,52 40,60 26,52 26,36" fill="#8B6F09" transform="translate(4,4)" />
    {/* Middle coin hex */}
    <polygon points="40,28 54,36 54,52 40,60 26,52 26,36" fill="#C89A09" transform="translate(2,2)" />
    {/* Top coin hex */}
    <polygon points="40,28 54,36 54,52 40,60 26,52 26,36" fill="#F0B90B" />
    {/* BNB logo on top coin */}
    <polygon points="40,32 46,35.5 40,39 34,35.5" fill="#F5CC3C" />
    <polygon points="34,35.5 40,39 40,44 34,41" fill="#C89A09" />
    <polygon points="46,35.5 40,39 40,44 46,41" fill="#A07808" />
    {/* Chain link arc below */}
    <path
      d="M 28 62 A 14 14 0 0 0 52 62"
      stroke="#F0B90B"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Dollar sign overlapping */}
    <text x="54" y="44" fontSize="14" fontWeight="bold" fill="#F0B90B" fontFamily="monospace">$</text>
  </IconBase>
);

// 39. IconDeveloperTools2 — large filled circle variant
export const IconDeveloperTools2: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="dt2">
    {/* Large filled circle */}
    <circle cx="40" cy="40" r="30" fill="#F0B90B" />
    {/* Dark inner circle */}
    <circle cx="40" cy="40" r="22" fill="#1A1A1A" />
    {/* Code brackets */}
    <polyline
      points="28,32 22,40 28,48"
      stroke="#F0B90B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line x1="34" y1="48" x2="46" y2="32" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" />
    <polyline
      points="52,32 58,40 52,48"
      stroke="#F0B90B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// 40. IconLend
export const IconLend: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="lend">
    {/* BNB circular logo — hexagon ring */}
    <polygon points="40,18 58,28 58,48 40,58 22,48 22,28" fill="#F0B90B" />
    {/* Cube faces inside */}
    <polygon points="40,22 52,29 40,36 28,29" fill="#F5CC3C" />
    <polygon points="28,29 40,36 40,50 28,43" fill="#C89A09" />
    <polygon points="52,29 40,36 40,50 52,43" fill="#A07808" />
    {/* Coin stack below */}
    <ellipse cx="40" cy="64" rx="14" ry="4" fill="#C89A09" />
    <ellipse cx="40" cy="60" rx="14" ry="4" fill="#C89A09" />
    <rect x="26" y="60" width="28" height="4" fill="#C89A09" />
    <ellipse cx="40" cy="60" rx="14" ry="4" fill="#D4A80F" />
    <ellipse cx="40" cy="56" rx="14" ry="4" fill="#F0B90B" />
    <rect x="26" y="56" width="28" height="4" fill="#D4A80F" />
    <ellipse cx="40" cy="56" rx="14" ry="4" fill="#F5CC3C" />
  </IconBase>
);

// 41. IconProposal
export const IconProposal: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="prop">
    {/* Document body */}
    <rect x="18" y="14" width="38" height="52" rx="4" fill="#F0B90B" />
    {/* Folded corner */}
    <polygon points="46,14 56,24 46,24" fill="#C89A09" />
    {/* P letter — vertical stroke */}
    <rect x="26" y="24" width="5" height="24" rx="1" fill="#1A1A1A" />
    {/* P letter — bump arc */}
    <path
      d="M 31 24 L 31 36 A 8 8 0 0 0 31 24 Z"
      fill="#1A1A1A"
    />
    <path
      d="M 30 24 Q 46 24 46 30 Q 46 36 30 36"
      stroke="#1A1A1A"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Bottom text lines */}
    <line x1="24" y1="52" x2="48" y2="52" stroke="#C89A09" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="58" x2="42" y2="58" stroke="#C89A09" strokeWidth="2.5" strokeLinecap="round" />
  </IconBase>
);

// 42. IconProposalArchived
export const IconProposalArchived: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="propa">
    {/* Back doc */}
    <rect x="24" y="10" width="36" height="50" rx="4" fill="#888888" />
    {/* Middle doc */}
    <rect x="22" y="12" width="36" height="50" rx="4" fill="#C89A09" />
    {/* Front doc */}
    <rect x="18" y="16" width="38" height="52" rx="4" fill="#F0B90B" />
    {/* Folded corner */}
    <polygon points="46,16 56,26 46,26" fill="#C89A09" />
    {/* P letter */}
    <rect x="24" y="26" width="5" height="24" rx="1" fill="#1A1A1A" />
    <path
      d="M 28 26 Q 44 26 44 32 Q 44 38 28 38"
      stroke="#1A1A1A"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Bottom lines */}
    <line x1="22" y1="54" x2="48" y2="54" stroke="#C89A09" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="60" x2="40" y2="60" stroke="#C89A09" strokeWidth="2" strokeLinecap="round" />
  </IconBase>
);

// 43. IconGasFees
export const IconGasFees: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="gas">
    {/* Gas pump body */}
    <rect x="18" y="22" width="28" height="38" rx="3" fill="#F0B90B" />
    {/* Nozzle arm */}
    <rect x="46" y="28" width="16" height="4" rx="2" fill="#C89A09" />
    <rect x="58" y="28" width="4" height="12" rx="2" fill="#C89A09" />
    {/* Gas drop at nozzle tip */}
    <path d="M 60 40 Q 57 40 57 43 Q 57 46 60 46 Q 63 46 63 43 Q 63 40 60 40 Z" fill="#F0B90B" />
    {/* Dollar sign on pump body */}
    <line x1="32" y1="30" x2="32" y2="33" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="45" x2="32" y2="48" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M 37 33 C 37 31 27 31 27 35 C 27 39 37 39 37 43 C 37 47 27 47 27 45"
      stroke="#1A1A1A"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Pump base */}
    <rect x="14" y="58" width="36" height="6" rx="2" fill="#C89A09" />
  </IconBase>
);

// 44. IconGasFees2 — waffle grid
export const IconGasFees2: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="gas2">
    {/* Waffle grid base */}
    <rect x="16" y="22" width="48" height="48" rx="4" fill="#F0B90B" />
    {/* 4x4 grid cutouts */}
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <rect
          key={`gas2-cell-${row}-${col}`}
          x={18 + col * 11}
          y={24 + row * 11}
          width="9"
          height="9"
          rx="1"
          fill="#1A1A1A"
        />
      ))
    )}
    {/* Gas drop top-right */}
    <path
      d="M 58 12 Q 53 12 53 17 Q 53 22 58 22 Q 63 22 63 17 Q 63 12 58 12 Z"
      fill="#F0B90B"
    />
    <line x1="58" y1="8" x2="58" y2="12" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
  </IconBase>
);

// 45. IconTemperatureCheck
export const IconTemperatureCheck: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBase size={size} id="temp">
    {/* Semi-circular gauge dial */}
    <path
      d="M 16 52 A 24 24 0 0 1 64 52"
      stroke="#F0B90B"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Gauge tick marks */}
    <line x1="16" y1="52" x2="19" y2="49" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="36" x2="26" y2="39" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="28" x2="40" y2="32" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="56" y1="36" x2="54" y2="39" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="64" y1="52" x2="61" y2="49" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Needle pointing center-right (~45°) */}
    <line x1="40" y1="52" x2="55" y2="38" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <circle cx="40" cy="52" r="3" fill="#F0B90B" />
    {/* 3 person silhouettes */}
    {/* Left person (yellow) */}
    <circle cx="20" cy="64" r="5" fill="#F0B90B" />
    <path d="M 12 76 C 12 68 28 68 28 76" fill="#F0B90B" />
    {/* Center person (dark) */}
    <circle cx="40" cy="62" r="5" fill="#333333" stroke="#F0B90B" strokeWidth="1" />
    <path d="M 32 74 C 32 66 48 66 48 74" fill="#333333" />
    {/* Right person (yellow) */}
    <circle cx="60" cy="64" r="5" fill="#F0B90B" />
    <path d="M 52 76 C 52 68 68 68 68 76" fill="#F0B90B" />
  </IconBase>
);

// ─── ALL_ICONS export array ───────────────────────────────────────────────────

export const ALL_ICONS: Array<{
  name: string;
  component: React.FC<IconProps>;
  style: IconStyle;
}> = [
  { name: 'Development', component: IconDevelopment, style: 'tech' },
  { name: 'On-chain AI Agents', component: IconOnChainAIAgents, style: 'tech' },
  { name: 'Low Latency', component: IconLowLatency, style: 'tech' },
  { name: 'Staking', component: IconStaking, style: 'tech' },
  { name: 'DeFi Strategies', component: IconDeFiStrategies, style: 'tech' },
  { name: 'Trading', component: IconTrading, style: 'tech' },
  { name: 'AI-First Blockchain', component: IconAIFirstBlockchain, style: 'tech' },
  { name: 'Issue Tokens', component: IconIssueTokens, style: 'tech' },
  { name: 'Smart Contracts', component: IconSmartContracts, style: 'tech' },
  { name: 'Batch Processing', component: IconBatchProcessing, style: 'tech' },
  { name: 'MEV', component: IconMEV, style: 'tech' },
  { name: 'Developer Tools', component: IconDeveloperTools, style: 'tech' },
  { name: 'Transaction Costs', component: IconTransactionCosts, style: 'illustrated' },
  { name: 'Total Value Locked', component: IconTotalValueLocked, style: 'illustrated' },
  { name: 'Buy', component: IconBuy, style: 'illustrated' },
  { name: 'Smart Wallets', component: IconSmartWallets, style: 'illustrated' },
  { name: 'User Experience', component: IconUserExperience, style: 'illustrated' },
  { name: 'One BNB', component: IconOneBNB, style: 'illustrated' },
  { name: 'Voting', component: IconVoting, style: 'illustrated' },
  { name: 'Pay', component: IconPay, style: 'illustrated' },
  { name: 'Daily Active Users', component: IconDailyActiveUsers, style: 'illustrated' },
  { name: 'On-chain Gaming', component: IconOnChainGaming, style: 'illustrated' },
  { name: 'Stablecoins', component: IconStablecoins, style: 'illustrated' },
  { name: 'Memecoins Surge', component: IconMemecoinsSurge, style: 'illustrated' },
  { name: 'Privacy', component: IconPrivacy, style: 'illustrated' },
  { name: 'Total Value Locked 2', component: IconTotalValueLocked2, style: 'illustrated' },
  { name: 'Buy 2', component: IconBuy2, style: 'illustrated' },
  { name: 'Smart Wallets 2', component: IconSmartWallets2, style: 'illustrated' },
  { name: 'User Experience 2', component: IconUserExperience2, style: 'illustrated' },
  { name: 'One BNB 2', component: IconOneBNB2, style: 'illustrated' },
  { name: 'Earn', component: IconEarn, style: 'illustrated' },
  { name: 'Open Source Frameworks', component: IconOpenSourceFrameworks, style: 'illustrated' },
  { name: 'Travel', component: IconTravel, style: 'illustrated' },
  { name: 'Travel 2', component: IconTravel2, style: 'illustrated' },
  { name: 'BNB Greenfield', component: IconBNBGreenfield, style: 'illustrated' },
  { name: 'On-chain Governance', component: IconOnChainGovernance, style: 'illustrated' },
  { name: 'NFT Ecosystem', component: IconNFTEcosystem, style: 'illustrated' },
  { name: 'Scalable Low Fees', component: IconScalableLowFees, style: 'illustrated' },
  { name: 'Developer Tools 2', component: IconDeveloperTools2, style: 'illustrated' },
  { name: 'Lend', component: IconLend, style: 'illustrated' },
  { name: 'Proposal', component: IconProposal, style: 'illustrated' },
  { name: 'Proposal Archived', component: IconProposalArchived, style: 'illustrated' },
  { name: 'Gas Fees', component: IconGasFees, style: 'illustrated' },
  { name: 'Gas Fees 2', component: IconGasFees2, style: 'illustrated' },
  { name: 'Temperature Check', component: IconTemperatureCheck, style: 'illustrated' },
];
