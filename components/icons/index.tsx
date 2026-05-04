import React from 'react';

export interface IconProps {
  size?: number;
}

export type IconStyle = 'tech' | 'illustrated';

// ─── Style A shared base ──────────────────────────────────────────────────────
// 80×80 dark rounded square with:
//   - gradient bg (#222 → #0E0E0E)
//   - outer border ring stroke #2A2A2A
//   - inner border inset 2px stroke #181818
//   - L-shaped yellow circuit traces at all 4 corners
//   - outer dashed yellow circle r=28
//   - inner platform ring r=20 fill #141414 stroke #F0B90B

const IconBaseA: React.FC<{ size?: number; id: string; children: React.ReactNode }> = ({
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
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#222222" />
        <stop offset="100%" stopColor="#0E0E0E" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="80" height="80" rx="14" fill={`url(#${id}-bg)`} />
    {/* Outer border */}
    <rect x="1" y="1" width="78" height="78" rx="13" stroke="#2A2A2A" strokeWidth="2" fill="none" />
    {/* Inner border inset 2px */}
    <rect x="3" y="3" width="74" height="74" rx="12" stroke="#181818" strokeWidth="1" fill="none" />

    {/* Corner circuit traces — yellow L-shapes */}
    {/* Top-left */}
    <polyline points="6,18 6,6 18,6" stroke="#F0B90B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="6" cy="6" r="2" fill="#F0B90B" />
    <circle cx="6" cy="18" r="1.5" fill="#F0B90B" />
    <circle cx="18" cy="6" r="1.5" fill="#F0B90B" />
    {/* Top-right */}
    <polyline points="74,18 74,6 62,6" stroke="#F0B90B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="74" cy="6" r="2" fill="#F0B90B" />
    <circle cx="74" cy="18" r="1.5" fill="#F0B90B" />
    <circle cx="62" cy="6" r="1.5" fill="#F0B90B" />
    {/* Bottom-left */}
    <polyline points="6,62 6,74 18,74" stroke="#F0B90B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="6" cy="74" r="2" fill="#F0B90B" />
    <circle cx="6" cy="62" r="1.5" fill="#F0B90B" />
    <circle cx="18" cy="74" r="1.5" fill="#F0B90B" />
    {/* Bottom-right */}
    <polyline points="74,62 74,74 62,74" stroke="#F0B90B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="74" cy="74" r="2" fill="#F0B90B" />
    <circle cx="74" cy="62" r="1.5" fill="#F0B90B" />
    <circle cx="62" cy="74" r="1.5" fill="#F0B90B" />

    {/* Outer dashed circle */}
    <circle cx="40" cy="40" r="28" stroke="#F0B90B" strokeWidth="1.2" strokeDasharray="5 4" fill="none" />

    {/* Inner platform ring */}
    <circle cx="40" cy="40" r="20" fill="#141414" stroke="#F0B90B" strokeWidth="2" />

    {children}
  </svg>
);

// ─── 1. Development — </> code brackets ──────────────────────────────────────
export const IconDevelopment: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="dev">
    <polyline points="28,33 23,40 28,47" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="33" y1="47" x2="47" y2="33" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" />
    <polyline points="52,33 57,40 52,47" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </IconBaseA>
);

// ─── 2. On-chain AI Agents — BNB hexagon + orbital connector dots ─────────────
export const IconOnChainAIAgents: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="ocaa">
    {/* Hexagon outline */}
    <polygon points="40,26 49,31.2 49,41.5 40,46.7 31,41.5 31,31.2" stroke="#F0B90B" strokeWidth="1.5" fill="#2A2A2A" />
    {/* Isometric BNB cube top face */}
    <polygon points="40,28.5 46,32 40,35.5 34,32" fill="#F5CC3C" />
    {/* Left face */}
    <polygon points="34,32 40,35.5 40,42 34,38.5" fill="#F0B90B" />
    {/* Right face */}
    <polygon points="46,32 40,35.5 40,42 46,38.5" fill="#C89A09" />
    {/* Orbital connector lines N/E/S/W on dashed circle */}
    <line x1="40" y1="12" x2="40" y2="26" stroke="#F0B90B" strokeWidth="1" opacity="0.6" />
    <line x1="68" y1="40" x2="49" y2="40" stroke="#F0B90B" strokeWidth="1" opacity="0.6" />
    <line x1="40" y1="68" x2="40" y2="47" stroke="#F0B90B" strokeWidth="1" opacity="0.6" />
    <line x1="12" y1="40" x2="31" y2="40" stroke="#F0B90B" strokeWidth="1" opacity="0.6" />
    {/* Dots on dashed circle at N/E/S/W */}
    <circle cx="40" cy="12" r="2.5" fill="#F0B90B" />
    <circle cx="68" cy="40" r="2.5" fill="#F0B90B" />
    <circle cx="40" cy="68" r="2.5" fill="#F0B90B" />
    <circle cx="12" cy="40" r="2.5" fill="#F0B90B" />
  </IconBaseA>
);

// ─── 3. Low Latency — speedometer arc + lightning bolt ───────────────────────
export const IconLowLatency: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="ll">
    {/* 270° gauge arc — starts at 225° (bottom-left), sweeps 270° clockwise to bottom-right */}
    <path
      d="M 25.9 54.1 A 18 18 0 1 1 54.1 54.1"
      stroke="#F0B90B"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Tick marks at 5 positions */}
    <line x1="22" y1="40" x2="25" y2="40" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="25.3" y1="27.3" x2="27.4" y2="29.4" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="22" x2="40" y2="25" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="54.7" y1="27.3" x2="52.6" y2="29.4" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="58" y1="40" x2="55" y2="40" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Lightning bolt inside inner circle */}
    <polygon points="42,26 35,40 40,40 38,54 45,38 40,38" fill="#F0B90B" />
    {/* Needle tip dot at top-right of arc */}
    <circle cx="54.1" cy="54.1" r="2.5" fill="#F0B90B" />
  </IconBaseA>
);

// ─── 4. Staking — dollar coin ─────────────────────────────────────────────────
export const IconStaking: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="stk">
    {/* Large yellow coin filling the r=20 inner circle */}
    <circle cx="40" cy="40" r="16" fill="#F0B90B" />
    {/* Inner ring darker yellow */}
    <circle cx="40" cy="40" r="12" fill="#C89A09" />
    {/* Dollar sign */}
    <line x1="40" y1="27" x2="40" y2="30" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="50" x2="40" y2="53" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M 45 30 C 45 28 35 28 35 32 C 35 36 45 36 45 40 C 45 44 35 44 35 42"
      stroke="#1A1A1A"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </IconBaseA>
);

// ─── 5. DeFi Strategies — chess rook ─────────────────────────────────────────
export const IconDeFiStrategies: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="defi">
    {/* Rook body */}
    <rect x="31" y="43" width="18" height="12" rx="1" stroke="#F0B90B" strokeWidth="1.5" fill="#2A2A2A" />
    {/* Base platform */}
    <rect x="29" y="54" width="22" height="3" rx="1" stroke="#F0B90B" strokeWidth="1" fill="#F0B90B" />
    {/* Top battlements row (3 merlons) */}
    <rect x="31" y="31" width="4" height="6" rx="0.5" stroke="#F0B90B" strokeWidth="1.5" fill="#2A2A2A" />
    <rect x="38" y="31" width="4" height="6" rx="0.5" stroke="#F0B90B" strokeWidth="1.5" fill="#2A2A2A" />
    <rect x="45" y="31" width="4" height="6" rx="0.5" stroke="#F0B90B" strokeWidth="1.5" fill="#2A2A2A" />
    {/* Connecting bar under battlements */}
    <rect x="31" y="37" width="18" height="6" rx="0.5" stroke="#F0B90B" strokeWidth="1.5" fill="#2A2A2A" />
    {/* Window on body */}
    <rect x="37" y="46" width="6" height="5" rx="1" stroke="#F0B90B" strokeWidth="1" fill="#1A1A1A" />
  </IconBaseA>
);

// ─── 6. Trading — candlestick chart + line ────────────────────────────────────
export const IconTrading: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="trd">
    {/* Candlestick 1 — left */}
    <line x1="30" y1="27" x2="30" y2="53" stroke="#F0B90B" strokeWidth="1" />
    <rect x="27" y="33" width="6" height="12" rx="0.5" fill="#F0B90B" />
    {/* Candlestick 2 — center */}
    <line x1="40" y1="24" x2="40" y2="55" stroke="#F0B90B" strokeWidth="1" />
    <rect x="37" y="30" width="6" height="16" rx="0.5" fill="#C89A09" />
    {/* Candlestick 3 — right */}
    <line x1="50" y1="26" x2="50" y2="52" stroke="#F0B90B" strokeWidth="1" />
    <rect x="47" y="32" width="6" height="10" rx="0.5" fill="#F0B90B" />
    {/* Trend line over bars */}
    <polyline
      points="28,50 40,36 50,42"
      stroke="#F0B90B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBaseA>
);

// ─── 7. AI-first Blockchain — BNB cube + outer hexagon + compass dots ─────────
export const IconAIFirstBlockchain: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="aifb">
    {/* Outer hexagon outline */}
    <polygon points="40,24 50,29.8 50,41.4 40,47.2 30,41.4 30,29.8" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    {/* Isometric BNB cube */}
    <polygon points="40,27 48,31.6 40,36.2 32,31.6" fill="#F5CC3C" />
    <polygon points="32,31.6 40,36.2 40,44 32,39.4" fill="#F0B90B" />
    <polygon points="48,31.6 40,36.2 40,44 48,39.4" fill="#C89A09" />
    {/* Small circuit dots at compass positions on dashed circle */}
    <circle cx="40" cy="12" r="2" fill="#F0B90B" />
    <circle cx="68" cy="40" r="2" fill="#F0B90B" />
    <circle cx="40" cy="68" r="2" fill="#F0B90B" />
    <circle cx="12" cy="40" r="2" fill="#F0B90B" />
  </IconBaseA>
);

// ─── 8. Issue Tokens — coin with upward arrow ─────────────────────────────────
export const IconIssueTokens: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="it">
    {/* Coin */}
    <circle cx="40" cy="40" r="15" fill="#F0B90B" />
    <circle cx="40" cy="40" r="11" fill="#C89A09" />
    {/* Upward arrow inside coin */}
    <line x1="40" y1="46" x2="40" y2="33" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    <polyline points="35,38 40,33 45,38" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </IconBaseA>
);

// ─── 9. Smart Contracts — document with </> ───────────────────────────────────
export const IconSmartContracts: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="sc">
    {/* Document body */}
    <rect x="28" y="26" width="24" height="28" rx="2" stroke="#F0B90B" strokeWidth="1.5" fill="#1A1A1A" />
    {/* Folded corner */}
    <polyline points="44,26 52,34 44,34" stroke="#F0B90B" strokeWidth="1" fill="#2A2A2A" />
    <line x1="44" y1="26" x2="52" y2="34" stroke="#F0B90B" strokeWidth="1" />
    {/* </> brackets on document */}
    <polyline points="32,37 29,40 32,43" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="35" y1="43" x2="41" y2="37" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <polyline points="44,37 47,40 44,43" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Text line below code */}
    <line x1="31" y1="48" x2="45" y2="48" stroke="#F0B90B" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
  </IconBaseA>
);

// ─── 10. Batch Processing — 3 stacked isometric diamond layers ────────────────
export const IconBatchProcessing: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="bp">
    {/* Bottom layer */}
    <polygon points="40,46 52,40 40,34 28,40" fill="#8B6F09" />
    <polygon points="28,40 40,46 40,51 28,45" fill="#6B5207" />
    <polygon points="52,40 40,46 40,51 52,45" fill="#A07808" />
    {/* Middle layer */}
    <polygon points="40,39 52,33 40,27 28,33" fill="#C89A09" />
    <polygon points="28,33 40,39 40,44 28,38" fill="#A07808" />
    <polygon points="52,33 40,39 40,44 52,38" fill="#8B6F09" />
    {/* Top layer */}
    <polygon points="40,32 52,26 40,20 28,26" fill="#F5CC3C" />
    <polygon points="28,26 40,32 40,37 28,31" fill="#F0B90B" />
    <polygon points="52,26 40,32 40,37 52,31" fill="#C89A09" />
  </IconBaseA>
);

// ─── 11. MEV — rotated diamond + pickaxe diagonal ────────────────────────────
export const IconMEV: React.FC<IconProps> = ({ size = 80 }) => (
  <IconBaseA size={size} id="mev">
    {/* 45° rotated square (diamond shape) */}
    <rect x="27" y="27" width="26" height="26" rx="2" transform="rotate(45 40 40)" stroke="#F0B90B" strokeWidth="1.5" fill="#1A1A1A" />
    {/* Pickaxe / chisel diagonal line */}
    <line x1="26" y1="26" x2="54" y2="54" stroke="#F5CC3C" strokeWidth="3" strokeLinecap="round" />
    {/* Pick head at top-left */}
    <polygon points="23,23 19,27 27,23" fill="#F0B90B" />
    {/* Pick tail at bottom-right */}
    <polygon points="57,57 53,61 61,57" fill="#F0B90B" />
  </IconBaseA>
);

// ─── 12. Developer Tools — gear ring with </> inside ─────────────────────────
export const IconDeveloperTools: React.FC<IconProps> = ({ size = 80 }) => {
  const teeth = 12;
  const outerR = 27;
  const innerR = 20;
  const points: string[] = [];
  for (let i = 0; i < teeth * 2; i++) {
    const angle = (i * Math.PI) / teeth - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    points.push(`${40 + r * Math.cos(angle)},${40 + r * Math.sin(angle)}`);
  }
  return (
    <IconBaseA size={size} id="dt">
      {/* Gear ring */}
      <polygon points={points.join(' ')} fill="#F0B90B" />
      {/* Dark inner hub */}
      <circle cx="40" cy="40" r="16" fill="#141414" />
      {/* </> code */}
      <polyline points="30,34 25,40 30,46" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="36" y1="46" x2="44" y2="34" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
      <polyline points="50,34 55,40 50,46" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </IconBaseA>
  );
};

// ─── Style B — Illustrated / 3D icons ────────────────────────────────────────
// Each icon is independent with its own outer form and gradients.

// ─── 13. Transaction Costs — gear ring, dark center, $ sign ──────────────────
export const IconTransactionCosts: React.FC<IconProps> = ({ size = 80 }) => {
  const teeth = 12;
  const outerR = 34;
  const innerR = 26;
  const points: string[] = [];
  for (let i = 0; i < teeth * 2; i++) {
    const angle = (i * Math.PI) / teeth - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    points.push(`${40 + r * Math.cos(angle)},${40 + r * Math.sin(angle)}`);
  }
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tc-yl" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#F5CC3C" />
          <stop offset="100%" stopColor="#C89A09" />
        </linearGradient>
      </defs>
      <polygon points={points.join(' ')} fill="#F0B90B" />
      <circle cx="40" cy="40" r="22" fill="#1E1E1E" />
      <circle cx="40" cy="40" r="18" fill="#C89A09" />
      {/* Dollar sign */}
      <line x1="40" y1="27" x2="40" y2="30" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="50" x2="40" y2="53" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 46 30 C 46 28 34 28 34 32.5 C 34 37 46 37 46 41.5 C 46 46 34 46 34 44" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
};

// ─── 14. Total Value Locked — yellow diamond, location pin ────────────────────
export const IconTotalValueLocked: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tvl-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Diamond outer shape */}
    <rect x="22" y="22" width="36" height="36" rx="3" transform="rotate(45 40 40)" fill="url(#tvl-yl)" />
    {/* Location pin */}
    <path d="M 40 22 A 12 12 0 0 1 52 34 C 52 43 40 56 40 56 C 40 56 28 43 28 34 A 12 12 0 0 1 40 22 Z" fill="#1A1A1A" />
    <circle cx="40" cy="34" r="4" fill="#F0B90B" />
    {/* Rivet circles at diamond tips */}
    <circle cx="40" cy="14" r="2.5" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
    <circle cx="66" cy="40" r="2.5" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
    <circle cx="40" cy="66" r="2.5" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
    <circle cx="14" cy="40" r="2.5" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
  </svg>
);

// ─── 15. Buy — hexagonal ring, shopping cart ──────────────────────────────────
export const IconBuy: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="buy-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Hexagonal outer ring */}
    <polygon points="40,8 66,23 66,57 40,72 14,57 14,23" fill="url(#buy-yl)" />
    <polygon points="40,14 60,25.5 60,54.5 40,66 20,54.5 20,25.5" fill="#1E1E1E" />
    {/* Shopping cart handle */}
    <path d="M 24 30 L 28 30 L 32 52" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Cart body */}
    <path d="M 32 36 L 56 36 L 52 52 L 32 52 Z" fill="#F0B90B" />
    {/* Item in cart */}
    <rect x="37" y="38" width="10" height="8" rx="1" fill="#C89A09" />
    {/* Wheels */}
    <circle cx="36" cy="56" r="3.5" fill="#F0B90B" />
    <circle cx="50" cy="56" r="3.5" fill="#F0B90B" />
    {/* Rivet dots on hex ring */}
    <circle cx="40" cy="8" r="2" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
    <circle cx="66" cy="23" r="2" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
    <circle cx="66" cy="57" r="2" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
    <circle cx="40" cy="72" r="2" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
    <circle cx="14" cy="57" r="2" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
    <circle cx="14" cy="23" r="2" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
  </svg>
);

// ─── 16. Smart Wallets — wallet with happy face ───────────────────────────────
export const IconSmartWallets: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sw-yl" x1="0" y1="14" x2="0" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Wallet body */}
    <rect x="12" y="24" width="56" height="40" rx="6" fill="url(#sw-yl)" />
    {/* Wallet flap at top */}
    <rect x="12" y="14" width="56" height="18" rx="6" fill="#F0B90B" />
    {/* Card slot stripe */}
    <line x1="12" y1="36" x2="68" y2="36" stroke="#C89A09" strokeWidth="2" />
    {/* Coin purse bump */}
    <rect x="50" y="30" width="18" height="14" rx="7" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
    <circle cx="59" cy="37" r="3" fill="#1A1A1A" />
    {/* Happy face on wallet front */}
    {/* Eyes */}
    <circle cx="31" cy="48" r="2.5" fill="#1A1A1A" />
    <circle cx="43" cy="48" r="2.5" fill="#1A1A1A" />
    {/* Smile */}
    <path d="M 28 54 Q 37 60 46 54" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

// ─── 17. User Experience — monitor frame, person, crown ──────────────────────
export const IconUserExperience: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Monitor outer frame */}
    <rect x="8" y="14" width="64" height="44" rx="5" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="2" />
    {/* Screen area */}
    <rect x="12" y="18" width="56" height="36" rx="3" fill="#1A1A1A" />
    {/* Stand */}
    <rect x="34" y="58" width="12" height="6" rx="1" fill="#2A2A2A" />
    <rect x="26" y="64" width="28" height="3" rx="1.5" fill="#2A2A2A" />
    {/* Person silhouette inside screen */}
    <circle cx="40" cy="30" r="7" fill="#F0B90B" />
    <path d="M 24 50 C 24 40 56 40 56 50" fill="#F0B90B" />
    {/* Crown above head */}
    <polygon points="30,22 33,16 37,20 40,14 43,20 47,16 50,22" fill="#F0B90B" />
    {/* Rivet on outer frame corners */}
    <circle cx="8" cy="14" r="2" fill="#F0B90B" opacity="0.6" />
    <circle cx="72" cy="14" r="2" fill="#F0B90B" opacity="0.6" />
    <circle cx="8" cy="58" r="2" fill="#F0B90B" opacity="0.6" />
    <circle cx="72" cy="58" r="2" fill="#F0B90B" opacity="0.6" />
  </svg>
);

// ─── 18. One BNB — circular reticle / targeting scope ────────────────────────
export const IconOneBNB: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring */}
    <circle cx="40" cy="40" r="34" stroke="#F0B90B" strokeWidth="2" fill="#1A1A1A" />
    {/* Inner ring */}
    <circle cx="40" cy="40" r="24" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    {/* Center dot ring */}
    <circle cx="40" cy="40" r="6" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <circle cx="40" cy="40" r="2" fill="#F0B90B" />
    {/* Crosshair lines N/S/E/W — gap in the middle */}
    <line x1="40" y1="6" x2="40" y2="34" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="46" x2="40" y2="74" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="40" x2="34" y2="40" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="46" y1="40" x2="74" y2="40" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* 45° hash marks on outer ring */}
    <line x1="16" y1="16" x2="19" y2="19" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="64" y1="16" x2="61" y2="19" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="16" y1="64" x2="19" y2="61" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="64" y1="64" x2="61" y2="61" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── 19. Voting — ballot box with ✓ and ✗ options ────────────────────────────
export const IconVoting: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ballot box body */}
    <rect x="14" y="28" width="52" height="42" rx="4" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1.5" />
    {/* Slot at top of box */}
    <rect x="32" y="26" width="16" height="4" rx="1" fill="#F0B90B" />
    {/* Ballot paper going in */}
    <rect x="34" y="14" width="12" height="16" rx="1" fill="#F0B90B" />
    {/* Checkmark on paper */}
    <polyline points="36,20 39,24 44,17" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Rows of options in box */}
    {/* Row 1: checkbox + check */}
    <rect x="20" y="38" width="8" height="8" rx="1" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <polyline points="21,42 23,45 27,39" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="32" y1="42" x2="52" y2="42" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    {/* Row 2: checkbox + X */}
    <rect x="20" y="52" width="8" height="8" rx="1" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <line x1="22" y1="54" x2="26" y2="58" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="26" y1="54" x2="22" y2="58" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="56" x2="52" y2="56" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    {/* Row 3: checkbox empty */}
    <rect x="20" y="62" width="8" height="6" rx="1" stroke="#F0B90B" strokeWidth="1.5" fill="none" opacity="0.4" />
    <line x1="32" y1="65" x2="46" y2="65" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
  </svg>
);

// ─── 20. Pay — isometric BNB cube with payment context ───────────────────────
export const IconPay: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pay-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Large isometric BNB cube centered */}
    <polygon points="40,16 62,28.5 62,51.5 40,64 18,51.5 18,28.5" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
    <polygon points="40,18 60,29.8 40,41.6 20,29.8" fill="#F5CC3C" />
    <polygon points="20,29.8 40,41.6 40,61.8 20,50.6" fill="#F0B90B" />
    <polygon points="60,29.8 40,41.6 40,61.8 60,50.6" fill="#C89A09" />
    {/* Dark silhouette person/hands below — simplified as two arcs */}
    <path d="M 20 70 Q 30 62 40 66 Q 50 62 60 70" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="28" cy="67" r="4" fill="#1A1A1A" />
    <circle cx="52" cy="67" r="4" fill="#1A1A1A" />
  </svg>
);

// ─── 21. Daily Active Users — orbit ring with person icons ────────────────────
export const IconDailyActiveUsers: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer orbit ring */}
    <circle cx="40" cy="40" r="32" stroke="#F0B90B" strokeWidth="2" fill="#1A1A1A" />
    {/* Inner ring */}
    <circle cx="40" cy="40" r="18" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    {/* Center BNB hex */}
    <polygon points="40,32 47,36 40,40 33,36" fill="#F5CC3C" />
    <polygon points="33,36 40,40 40,46 33,42" fill="#F0B90B" />
    <polygon points="47,36 40,40 40,46 47,42" fill="#C89A09" />
    {/* Person silhouettes at N/E/S/W on orbit ring */}
    {/* North */}
    <circle cx="40" cy="11" r="3.5" fill="#F0B90B" />
    <path d="M 34 20 C 34 15 46 15 46 20" fill="#F0B90B" />
    {/* East */}
    <circle cx="69" cy="40" r="3.5" fill="#F0B90B" />
    <path d="M 63 48 C 63 43 75 43 75 48" fill="#F0B90B" />
    {/* South */}
    <circle cx="40" cy="69" r="3.5" fill="#F0B90B" />
    <path d="M 34 78 C 34 73 46 73 46 78" fill="#F0B90B" />
    {/* West */}
    <circle cx="11" cy="40" r="3.5" fill="#F0B90B" />
    <path d="M 5 48 C 5 43 17 43 17 48" fill="#F0B90B" />
  </svg>
);

// ─── 22. On-chain Gaming — gamepad controller ────────────────────────────────
export const IconOnChainGaming: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ocg-dk" x1="0" y1="26" x2="0" y2="62" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2A2A2A" />
        <stop offset="100%" stopColor="#1A1A1A" />
      </linearGradient>
    </defs>
    {/* Controller body */}
    <path d="M 14 42 Q 14 26 28 26 L 52 26 Q 66 26 66 42 Q 66 58 56 58 L 48 52 L 32 52 L 24 58 Q 14 58 14 42 Z" fill="url(#ocg-dk)" stroke="#F0B90B" strokeWidth="1.5" />
    {/* Bumpers top */}
    <rect x="18" y="22" width="16" height="6" rx="3" fill="#C89A09" />
    <rect x="46" y="22" width="16" height="6" rx="3" fill="#C89A09" />
    {/* D-pad left side */}
    <rect x="20" y="38" width="14" height="5" rx="1" fill="#F0B90B" />
    <rect x="24" y="34" width="6" height="13" rx="1" fill="#F0B90B" />
    {/* Action buttons right side */}
    <circle cx="54" cy="36" r="3.5" fill="#F0B90B" />
    <circle cx="61" cy="42" r="3.5" fill="#F0B90B" />
    <circle cx="54" cy="48" r="3.5" fill="#F0B90B" />
    <circle cx="47" cy="42" r="3.5" fill="#F0B90B" />
    {/* Center track circle */}
    <circle cx="40" cy="41" r="5" stroke="#F0B90B" strokeWidth="1" fill="none" />
    <circle cx="40" cy="41" r="2" fill="#F0B90B" />
  </svg>
);

// ─── 23. Stablecoins — large $ coin + person silhouettes ─────────────────────
export const IconStablecoins: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring */}
    <circle cx="40" cy="36" r="30" stroke="#F0B90B" strokeWidth="2" fill="#1A1A1A" />
    {/* Coin */}
    <circle cx="40" cy="36" r="22" fill="#F0B90B" />
    <circle cx="40" cy="36" r="16" fill="#C89A09" />
    {/* Dollar sign */}
    <line x1="40" y1="23" x2="40" y2="26" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="40" y1="46" x2="40" y2="49" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 45 26 C 45 24 35 24 35 28 C 35 32 45 32 45 36 C 45 40 35 40 35 38" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* 3 person silhouettes arranged below */}
    <circle cx="22" cy="68" r="4" fill="#F0B90B" />
    <path d="M 16 76 C 16 70 28 70 28 76" fill="#F0B90B" />
    <circle cx="40" cy="70" r="4" fill="#F0B90B" />
    <path d="M 34 78 C 34 72 46 72 46 78" fill="#F0B90B" />
    <circle cx="58" cy="68" r="4" fill="#F0B90B" />
    <path d="M 52 76 C 52 70 64 70 64 76" fill="#F0B90B" />
  </svg>
);

// ─── 24. Memecoins Surge — human silhouette holding two coin bags ─────────────
export const IconMemecoinsSurge: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background glow circle */}
    <circle cx="40" cy="40" r="34" fill="#1A1A1A" />
    {/* Human body silhouette */}
    <circle cx="40" cy="22" r="8" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />
    <rect x="33" y="30" width="14" height="18" rx="4" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />
    {/* Left arm holding bag */}
    <line x1="33" y1="34" x2="20" y2="44" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
    {/* Right arm holding bag */}
    <line x1="47" y1="34" x2="60" y2="44" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
    {/* Legs */}
    <line x1="36" y1="48" x2="32" y2="64" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
    <line x1="44" y1="48" x2="48" y2="64" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
    {/* Left coin bag */}
    <circle cx="17" cy="50" r="8" fill="#F0B90B" />
    <path d="M 13 44 Q 17 41 21 44" stroke="#C89A09" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <text x="14" y="53" fontSize="7" fontWeight="bold" fill="#1A1A1A" fontFamily="monospace">$</text>
    {/* Right coin bag */}
    <circle cx="63" cy="50" r="8" fill="#F0B90B" />
    <path d="M 59 44 Q 63 41 67 44" stroke="#C89A09" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <text x="60" y="53" fontSize="7" fontWeight="bold" fill="#1A1A1A" fontFamily="monospace">$</text>
    {/* Coin sparks/coins floating */}
    <circle cx="30" cy="12" r="4" fill="#F0B90B" />
    <circle cx="50" cy="10" r="3" fill="#C89A09" />
    <circle cx="60" cy="18" r="3.5" fill="#F0B90B" />
  </svg>
);

// ─── 25. Privacy — X-cross 4-pointed star + eye center ───────────────────────
export const IconPrivacy: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="priv-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Four diamond-ended arms forming an X cross */}
    {/* North arm */}
    <polygon points="40,6 46,22 40,30 34,22" fill="url(#priv-yl)" />
    {/* South arm */}
    <polygon points="40,74 46,58 40,50 34,58" fill="url(#priv-yl)" />
    {/* East arm */}
    <polygon points="74,40 58,46 50,40 58,34" fill="url(#priv-yl)" />
    {/* West arm */}
    <polygon points="6,40 22,46 30,40 22,34" fill="url(#priv-yl)" />
    {/* Center dark circle */}
    <circle cx="40" cy="40" r="14" fill="#1A1A1A" />
    {/* Eye */}
    <ellipse cx="40" cy="40" rx="9" ry="5" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <circle cx="40" cy="40" r="3" fill="#F0B90B" />
    <circle cx="40" cy="40" r="1.5" fill="#1A1A1A" />
  </svg>
);

// ─── 26. Total Value Locked 2 — yellow diamond + location pin ────────────────
export const IconTotalValueLocked2: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tvl2-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Outer dark diamond */}
    <rect x="20" y="20" width="40" height="40" rx="4" transform="rotate(45 40 40)" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1.5" />
    {/* Side flanges left and right */}
    <rect x="2" y="36" width="18" height="8" rx="3" fill="#F0B90B" />
    <rect x="60" y="36" width="18" height="8" rx="3" fill="#F0B90B" />
    {/* Location pin marker */}
    <path d="M 40 20 A 11 11 0 0 1 51 31 C 51 40 40 52 40 52 C 40 52 29 40 29 31 A 11 11 0 0 1 40 20 Z" fill="#F0B90B" />
    <circle cx="40" cy="31" r="4" fill="#1A1A1A" />
  </svg>
);

// ─── 27. Buy 2 — hexagon with asterisk + % ────────────────────────────────────
export const IconBuy2: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="buy2-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Hexagonal shape */}
    <polygon points="40,8 66,23 66,57 40,72 14,57 14,23" fill="url(#buy2-yl)" />
    {/* Dark inner hex */}
    <polygon points="40,16 58,26.5 58,53.5 40,64 22,53.5 22,26.5" fill="#1A1A1A" />
    {/* Asterisk / starburst — 6 lines */}
    <line x1="40" y1="24" x2="40" y2="56" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <line x1="24.1" y1="32" x2="55.9" y2="48" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <line x1="55.9" y1="32" x2="24.1" y2="48" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    {/* % symbol overlay */}
    <circle cx="33" cy="33" r="4" stroke="#F0B90B" strokeWidth="2" fill="#1A1A1A" />
    <circle cx="47" cy="47" r="4" stroke="#F0B90B" strokeWidth="2" fill="#1A1A1A" />
    <line x1="30" y1="50" x2="50" y2="30" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    {/* Rivets */}
    <circle cx="40" cy="8" r="2.5" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
    <circle cx="40" cy="72" r="2.5" fill="#C89A09" stroke="#F5CC3C" strokeWidth="1" />
  </svg>
);

// ─── 28. Smart Wallets 2 — money pouch / wallet bag with $ ───────────────────
export const IconSmartWallets2: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sw2-yl" x1="0" y1="14" x2="0" y2="72" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Bag neck */}
    <rect x="30" y="10" width="20" height="10" rx="4" fill="#C89A09" />
    {/* Drawstring line */}
    <line x1="26" y1="18" x2="54" y2="18" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    {/* Main bag body — rounded pentagon shape */}
    <path d="M 12 46 Q 12 22 40 22 Q 68 22 68 46 Q 68 68 40 70 Q 12 68 12 46 Z" fill="url(#sw2-yl)" />
    {/* Dark front panel */}
    <rect x="22" y="36" width="36" height="26" rx="4" fill="#1A1A1A" />
    {/* Dollar sign on panel */}
    <line x1="40" y1="39" x2="40" y2="42" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="56" x2="40" y2="59" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <path d="M 45 42 C 45 40 35 40 35 44 C 35 48 45 48 45 52 C 45 56 35 56 35 54" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

// ─── 29. User Experience 2 — chain-link target / interlocked circles ──────────
export const IconUserExperience2: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer yellow hexagonal ring */}
    <polygon points="40,8 66,23 66,57 40,72 14,57 14,23" stroke="#F0B90B" strokeWidth="3" fill="#1A1A1A" />
    {/* Crosshair target circles inside */}
    <circle cx="40" cy="40" r="20" stroke="#F0B90B" strokeWidth="2" fill="none" />
    <circle cx="40" cy="40" r="10" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <circle cx="40" cy="40" r="3" fill="#F0B90B" />
    {/* Crosshair arms */}
    <line x1="40" y1="14" x2="40" y2="30" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="50" x2="40" y2="66" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="40" x2="30" y2="40" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="50" y1="40" x2="66" y2="40" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Chain-link interlocked ovals at 45° */}
    <ellipse cx="34" cy="34" rx="6" ry="3.5" transform="rotate(-45 34 34)" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    <ellipse cx="46" cy="46" rx="6" ry="3.5" transform="rotate(-45 46 46)" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
  </svg>
);

// ─── 30. One BNB 2 — dark diamond with yellow ticket / coupon ─────────────────
export const IconOneBNB2: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="onebnb2-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Dark outer diamond */}
    <rect x="18" y="18" width="44" height="44" rx="4" transform="rotate(45 40 40)" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1.5" />
    {/* Yellow ticket / coupon shape inside */}
    <rect x="22" y="30" width="36" height="20" rx="3" fill="url(#onebnb2-yl)" />
    {/* Ticket perforations (notch left/right) */}
    <circle cx="22" cy="40" r="3" fill="#2A2A2A" />
    <circle cx="58" cy="40" r="3" fill="#2A2A2A" />
    {/* Dashed line across ticket */}
    <line x1="25" y1="40" x2="55" y2="40" stroke="#C89A09" strokeWidth="1" strokeDasharray="3 2" />
    {/* Star decoration top */}
    <polygon points="40,32 41.5,36 46,36 42.5,38.5 44,43 40,40.5 36,43 37.5,38.5 34,36 38.5,36" fill="#C89A09" />
    {/* Small dots at diamond tips */}
    <circle cx="40" cy="9" r="2" fill="#F0B90B" />
    <circle cx="71" cy="40" r="2" fill="#F0B90B" />
    <circle cx="40" cy="71" r="2" fill="#F0B90B" />
    <circle cx="9" cy="40" r="2" fill="#F0B90B" />
  </svg>
);

// ─── 31. Earn — front-facing safe / vault with combination lock ───────────────
export const IconEarn: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="earn-yl" x1="0" y1="12" x2="0" y2="72" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Safe body */}
    <rect x="10" y="14" width="60" height="56" rx="6" fill="url(#earn-yl)" />
    {/* Safe door darker inset */}
    <rect x="16" y="20" width="48" height="44" rx="4" fill="#C89A09" />
    {/* Handle strip */}
    <rect x="56" y="34" width="6" height="16" rx="3" fill="#F5CC3C" />
    {/* Combination lock dial */}
    <circle cx="36" cy="42" r="14" fill="#1A1A1A" stroke="#F5CC3C" strokeWidth="2" />
    <circle cx="36" cy="42" r="9" stroke="#F0B90B" strokeWidth="1.5" fill="none" />
    {/* Dial notches */}
    {[0, 60, 120, 180, 240, 300].map((deg) => {
      const rad = (deg * Math.PI) / 180;
      return (
        <line
          key={`earn-notch-${deg}`}
          x1={36 + 9 * Math.cos(rad)}
          y1={42 + 9 * Math.sin(rad)}
          x2={36 + 12 * Math.cos(rad)}
          y2={42 + 12 * Math.sin(rad)}
          stroke="#F0B90B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      );
    })}
    {/* Dial pointer */}
    <line x1="36" y1="42" x2="36" y2="33" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <circle cx="36" cy="42" r="2.5" fill="#F0B90B" />
    {/* $ sign on right side of door */}
    <line x1="52" y1="35" x2="52" y2="37" stroke="#F5CC3C" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="52" y1="47" x2="52" y2="49" stroke="#F5CC3C" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 55 37 C 55 36 49 36 49 38.5 C 49 41 55 41 55 43.5 C 55 46 49 46 49 45" stroke="#F5CC3C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

// ─── 32. Open-source Frameworks — open padlock + document pages ───────────────
export const IconOpenSourceFrameworks: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="osf-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Back document page */}
    <rect x="26" y="30" width="32" height="40" rx="3" fill="#8B6F09" />
    {/* Middle document page */}
    <rect x="22" y="26" width="32" height="40" rx="3" fill="#C89A09" />
    {/* Front document page */}
    <rect x="18" y="22" width="32" height="40" rx="3" fill="url(#osf-yl)" />
    {/* Lines on front doc */}
    <line x1="23" y1="44" x2="44" y2="44" stroke="#C89A09" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="23" y1="50" x2="44" y2="50" stroke="#C89A09" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="23" y1="56" x2="38" y2="56" stroke="#C89A09" strokeWidth="1.5" strokeLinecap="round" />
    {/* Open padlock body */}
    <rect x="36" y="30" width="22" height="18" rx="3" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />
    {/* Shackle — open (rotated up and to the right) */}
    <path d="M 40 30 L 40 22 A 7 7 0 0 1 54 22" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Keyhole */}
    <circle cx="47" cy="38" r="3" fill="#F0B90B" />
    <line x1="47" y1="41" x2="47" y2="45" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ─── 33. Travel — yellow suitcase / luggage ───────────────────────────────────
export const IconTravel: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="trvl-yl" x1="0" y1="18" x2="0" y2="74" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Handle */}
    <path d="M 30 18 L 30 12 Q 30 8 40 8 Q 50 8 50 12 L 50 18" stroke="#C89A09" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Suitcase body */}
    <rect x="12" y="18" width="56" height="52" rx="6" fill="url(#trvl-yl)" />
    {/* Horizontal stripe */}
    <rect x="12" y="40" width="56" height="10" fill="#C89A09" />
    {/* Clasp on stripe */}
    <rect x="36" y="42" width="8" height="6" rx="1" fill="#F5CC3C" />
    {/* Corner reinforcements */}
    <rect x="12" y="18" width="8" height="8" rx="2" fill="#C89A09" opacity="0.7" />
    <rect x="60" y="18" width="8" height="8" rx="2" fill="#C89A09" opacity="0.7" />
    <rect x="12" y="62" width="8" height="8" rx="2" fill="#C89A09" opacity="0.7" />
    <rect x="60" y="62" width="8" height="8" rx="2" fill="#C89A09" opacity="0.7" />
    {/* Wheels */}
    <circle cx="22" cy="72" r="4" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1" />
    <circle cx="58" cy="72" r="4" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1" />
  </svg>
);

// ─── 34. Travel 2 — globe with lat/lon lines + location pin ──────────────────
export const IconTravel2: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="trvl2-dk" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#2A2A2A" />
        <stop offset="100%" stopColor="#141414" />
      </radialGradient>
    </defs>
    {/* Globe fill */}
    <circle cx="40" cy="40" r="32" fill="url(#trvl2-dk)" stroke="#F0B90B" strokeWidth="2" />
    {/* Latitude arcs */}
    <path d="M 10 30 Q 40 24 70 30" stroke="#F0B90B" strokeWidth="1" fill="none" opacity="0.7" />
    <path d="M 8 40 Q 40 40 72 40" stroke="#F0B90B" strokeWidth="1" fill="none" opacity="0.7" />
    <path d="M 10 50 Q 40 56 70 50" stroke="#F0B90B" strokeWidth="1" fill="none" opacity="0.7" />
    {/* Longitude ovals */}
    <ellipse cx="40" cy="40" rx="14" ry="32" stroke="#F0B90B" strokeWidth="1" fill="none" opacity="0.7" />
    <line x1="40" y1="8" x2="40" y2="72" stroke="#F0B90B" strokeWidth="1" opacity="0.4" />
    {/* Location pin on globe surface */}
    <path d="M 52 22 A 8 8 0 0 1 68 22 C 68 30 60 40 60 40 C 60 40 52 30 52 22 Z" fill="#F0B90B" />
    <circle cx="60" cy="22" r="3" fill="#1A1A1A" />
  </svg>
);

// ─── 35. BNB Greenfield — circle ring with BNB cube + green network ───────────
export const IconBNBGreenfield: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring with slight green tint */}
    <circle cx="40" cy="40" r="34" stroke="#3DCC91" strokeWidth="2.5" fill="#1A1A1A" />
    <circle cx="40" cy="40" r="28" stroke="#2A2A2A" strokeWidth="1" fill="none" />
    {/* Network spokes */}
    <line x1="40" y1="12" x2="40" y2="28" stroke="#3DCC91" strokeWidth="1.5" />
    <line x1="68" y1="40" x2="52" y2="40" stroke="#3DCC91" strokeWidth="1.5" />
    <line x1="40" y1="68" x2="40" y2="52" stroke="#3DCC91" strokeWidth="1.5" />
    <line x1="12" y1="40" x2="28" y2="40" stroke="#3DCC91" strokeWidth="1.5" />
    {/* Diagonal spokes */}
    <line x1="16" y1="16" x2="28" y2="28" stroke="#3DCC91" strokeWidth="1" opacity="0.6" />
    <line x1="64" y1="16" x2="52" y2="28" stroke="#3DCC91" strokeWidth="1" opacity="0.6" />
    <line x1="16" y1="64" x2="28" y2="52" stroke="#3DCC91" strokeWidth="1" opacity="0.6" />
    <line x1="64" y1="64" x2="52" y2="52" stroke="#3DCC91" strokeWidth="1" opacity="0.6" />
    {/* Node dots on ring */}
    <circle cx="40" cy="12" r="3" fill="#3DCC91" />
    <circle cx="68" cy="40" r="3" fill="#3DCC91" />
    <circle cx="40" cy="68" r="3" fill="#3DCC91" />
    <circle cx="12" cy="40" r="3" fill="#3DCC91" />
    {/* BNB cube center */}
    <polygon points="40,26 52,33 40,40 28,33" fill="#F5CC3C" />
    <polygon points="28,33 40,40 40,52 28,45" fill="#F0B90B" />
    <polygon points="52,33 40,40 40,52 52,45" fill="#C89A09" />
  </svg>
);

// ─── 36. On-chain Governance — Greek columns / temple ────────────────────────
export const IconOnChainGovernance: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ocgov-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Circular outer frame */}
    <circle cx="40" cy="40" r="36" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />
    {/* Pediment / roof */}
    <polygon points="40,10 70,28 10,28" fill="url(#ocgov-yl)" />
    {/* Frieze */}
    <rect x="12" y="28" width="56" height="6" fill="#C89A09" />
    {/* Columns */}
    <rect x="18" y="34" width="7" height="26" rx="1" fill="url(#ocgov-yl)" />
    <rect x="30" y="34" width="7" height="26" rx="1" fill="#C89A09" />
    <rect x="43" y="34" width="7" height="26" rx="1" fill="url(#ocgov-yl)" />
    <rect x="55" y="34" width="7" height="26" rx="1" fill="#C89A09" />
    {/* Stylobate / base steps */}
    <rect x="10" y="60" width="60" height="5" rx="1" fill="#C89A09" />
    <rect x="8" y="65" width="64" height="4" rx="1" fill="#F0B90B" />
    {/* Small person silhouettes at base */}
    <circle cx="22" cy="71" r="2.5" fill="#F0B90B" />
    <circle cx="40" cy="71" r="2.5" fill="#F0B90B" />
    <circle cx="58" cy="71" r="2.5" fill="#F0B90B" />
  </svg>
);

// ─── 37. NFT + Ecosystem — picture frame with circuit node corners ─────────────
export const IconNFTEcosystem: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="nft-sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor="#1A3A5C" />
        <stop offset="60%" stopColor="#1A2A3A" />
        <stop offset="100%" stopColor="#1A1A1A" />
      </linearGradient>
      <clipPath id="nft-clip">
        <rect x="16" y="18" width="48" height="38" rx="2" />
      </clipPath>
    </defs>
    {/* Frame outer */}
    <rect x="10" y="14" width="60" height="52" rx="4" stroke="#F0B90B" strokeWidth="2.5" fill="#1E1E1E" />
    {/* Image content inside frame */}
    <rect x="13" y="17" width="54" height="46" rx="3" fill="url(#nft-sky)" clipPath="url(#nft-clip)" />
    {/* Mountains / landscape */}
    <polygon points="13,56 26,32 36,46 48,26 67,56" fill="#2A3A2A" clipPath="url(#nft-clip)" />
    <polygon points="13,56 26,38 34,50 43,30 55,48 67,56" fill="#3A4A3A" clipPath="url(#nft-clip)" />
    {/* Sun */}
    <circle cx="54" cy="28" r="6" fill="#F0B90B" clipPath="url(#nft-clip)" />
    {/* Circuit node dots at frame corners */}
    <circle cx="10" cy="14" r="3.5" fill="#F0B90B" />
    <circle cx="70" cy="14" r="3.5" fill="#F0B90B" />
    <circle cx="10" cy="66" r="3.5" fill="#F0B90B" />
    <circle cx="70" cy="66" r="3.5" fill="#F0B90B" />
    {/* Short traces from corner dots */}
    <line x1="13" y1="14" x2="22" y2="14" stroke="#F0B90B" strokeWidth="1.5" />
    <line x1="10" y1="17" x2="10" y2="26" stroke="#F0B90B" strokeWidth="1.5" />
    <line x1="67" y1="14" x2="58" y2="14" stroke="#F0B90B" strokeWidth="1.5" />
    <line x1="70" y1="17" x2="70" y2="26" stroke="#F0B90B" strokeWidth="1.5" />
    <line x1="13" y1="66" x2="22" y2="66" stroke="#F0B90B" strokeWidth="1.5" />
    <line x1="10" y1="63" x2="10" y2="54" stroke="#F0B90B" strokeWidth="1.5" />
    <line x1="67" y1="66" x2="58" y2="66" stroke="#F0B90B" strokeWidth="1.5" />
    <line x1="70" y1="63" x2="70" y2="54" stroke="#F0B90B" strokeWidth="1.5" />
  </svg>
);

// ─── 38. Scalable + Low Fees — circular gear with BNB + $ circles ─────────────
export const IconScalableLowFees: React.FC<IconProps> = ({ size = 80 }) => {
  const teeth = 14;
  const outerR = 36;
  const innerR = 28;
  const points: string[] = [];
  for (let i = 0; i < teeth * 2; i++) {
    const angle = (i * Math.PI) / teeth - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    points.push(`${40 + r * Math.cos(angle)},${40 + r * Math.sin(angle)}`);
  }
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="slf-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5CC3C" />
          <stop offset="100%" stopColor="#C89A09" />
        </linearGradient>
      </defs>
      {/* Gear */}
      <polygon points={points.join(' ')} fill="url(#slf-yl)" />
      {/* Dark inner hub */}
      <circle cx="40" cy="40" r="24" fill="#1A1A1A" />
      {/* BNB hexagon */}
      <polygon points="40,28 50,33.8 50,45.4 40,51.2 30,45.4 30,33.8" fill="#F0B90B" />
      <polygon points="40,30 47,34 40,38 33,34" fill="#F5CC3C" />
      <polygon points="33,34 40,38 40,46 33,42" fill="#C89A09" />
      <polygon points="47,34 40,38 40,46 47,42" fill="#A07808" />
      {/* Small $ circles around BNB inside dark hub */}
      <circle cx="40" cy="20" r="5" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
      <text x="37.5" y="23" fontSize="6" fill="#F0B90B" fontWeight="bold" fontFamily="monospace">$</text>
      <circle cx="60" cy="40" r="5" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
      <text x="57.5" y="43" fontSize="6" fill="#F0B90B" fontWeight="bold" fontFamily="monospace">$</text>
      <circle cx="20" cy="40" r="5" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
      <text x="17.5" y="43" fontSize="6" fill="#F0B90B" fontWeight="bold" fontFamily="monospace">$</text>
      <circle cx="40" cy="60" r="5" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1" />
      <text x="37.5" y="63" fontSize="6" fill="#F0B90B" fontWeight="bold" fontFamily="monospace">$</text>
    </svg>
  );
};

// ─── 39. Developer Tools 2 — circular gear ring with </> code ────────────────
export const IconDeveloperTools2: React.FC<IconProps> = ({ size = 80 }) => {
  const teeth = 12;
  const outerR = 36;
  const innerR = 28;
  const points: string[] = [];
  for (let i = 0; i < teeth * 2; i++) {
    const angle = (i * Math.PI) / teeth - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    points.push(`${40 + r * Math.cos(angle)},${40 + r * Math.sin(angle)}`);
  }
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dt2-yl" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5CC3C" />
          <stop offset="100%" stopColor="#C89A09" />
        </linearGradient>
      </defs>
      {/* Gear */}
      <polygon points={points.join(' ')} fill="url(#dt2-yl)" />
      {/* Dark inner hub */}
      <circle cx="40" cy="40" r="24" fill="#1A1A1A" />
      {/* </> brackets */}
      <polyline points="28,32 22,40 28,48" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="34" y1="48" x2="46" y2="32" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="52,32 58,40 52,48" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

// ─── 40. Lend — large BNB coin held by hands ─────────────────────────────────
export const IconLend: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lend-yl" x1="0" y1="8" x2="0" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Large BNB coin */}
    <circle cx="40" cy="34" r="24" fill="url(#lend-yl)" />
    <circle cx="40" cy="34" r="18" fill="#C89A09" />
    {/* BNB logo on coin */}
    <polygon points="40,20 48,24.6 40,29.2 32,24.6" fill="#F5CC3C" />
    <polygon points="32,24.6 40,29.2 40,36.4 32,31.8" fill="#C89A09" />
    <polygon points="48,24.6 40,29.2 40,36.4 48,31.8" fill="#A07808" />
    {/* Holding hands from below */}
    {/* Left hand/palm */}
    <path d="M 8 62 Q 8 54 16 54 L 34 54 Q 40 54 40 58 L 40 68 Q 26 72 8 62 Z" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1" />
    {/* Right hand/palm */}
    <path d="M 72 62 Q 72 54 64 54 L 46 54 Q 40 54 40 58 L 40 68 Q 54 72 72 62 Z" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1" />
    {/* Finger lines on left hand */}
    <line x1="20" y1="54" x2="20" y2="62" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    <line x1="26" y1="54" x2="26" y2="63" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    <line x1="32" y1="54" x2="32" y2="63" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    {/* Finger lines on right hand */}
    <line x1="60" y1="54" x2="60" y2="62" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    <line x1="54" y1="54" x2="54" y2="63" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    <line x1="48" y1="54" x2="48" y2="63" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
  </svg>
);

// ─── 41. Proposal — clipboard / document with large P ────────────────────────
export const IconProposal: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="prop-yl" x1="0" y1="8" x2="0" y2="78" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Document body */}
    <rect x="16" y="12" width="48" height="62" rx="5" fill="url(#prop-yl)" />
    {/* Clipboard clip at top */}
    <rect x="30" y="8" width="20" height="10" rx="3" fill="#C89A09" />
    <rect x="36" y="6" width="8" height="6" rx="2" fill="#1A1A1A" />
    {/* Large P on document */}
    {/* P vertical stroke */}
    <rect x="24" y="24" width="6" height="30" rx="1" fill="#1A1A1A" />
    {/* P bump */}
    <path d="M 30 24 Q 50 24 50 33 Q 50 42 30 42" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" fill="none" />
    {/* Text lines below P */}
    <line x1="22" y1="60" x2="58" y2="60" stroke="#C89A09" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="68" x2="48" y2="68" stroke="#C89A09" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// ─── 42. Proposal Archived — stack of 3 documents with P ─────────────────────
export const IconProposalArchived: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="propa-yl" x1="0" y1="10" x2="0" y2="76" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Back doc (grey/dark) */}
    <rect x="26" y="8" width="38" height="52" rx="4" fill="#555555" />
    {/* Middle doc */}
    <rect x="20" y="12" width="38" height="52" rx="4" fill="#C89A09" />
    {/* Front doc */}
    <rect x="14" y="18" width="40" height="54" rx="5" fill="url(#propa-yl)" />
    {/* Folded corner on front */}
    <polygon points="44,18 54,28 44,28" fill="#C89A09" />
    {/* P on front doc */}
    <rect x="20" y="30" width="5" height="26" rx="1" fill="#1A1A1A" />
    <path d="M 25 30 Q 42 30 42 38 Q 42 46 25 46" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" fill="none" />
    {/* Bottom lines on front */}
    <line x1="18" y1="60" x2="46" y2="60" stroke="#C89A09" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="66" x2="38" y2="66" stroke="#C89A09" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ─── 43. Gas Fees — yellow gas can with $ label ───────────────────────────────
export const IconGasFees: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gas-yl" x1="0" y1="12" x2="0" y2="76" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>
    {/* Main can body */}
    <rect x="14" y="20" width="36" height="52" rx="4" fill="url(#gas-yl)" />
    {/* Can top neck */}
    <rect x="20" y="12" width="24" height="10" rx="3" fill="#C89A09" />
    {/* Spout nozzle arm going right */}
    <rect x="50" y="22" width="18" height="4" rx="2" fill="#C89A09" />
    {/* Nozzle vertical drop */}
    <rect x="64" y="24" width="4" height="14" rx="2" fill="#C89A09" />
    {/* Fuel drop at nozzle tip */}
    <path d="M 66 38 Q 62 38 62 43 Q 62 48 66 48 Q 70 48 70 43 Q 70 38 66 38 Z" fill="#F0B90B" />
    {/* Dark label on can body */}
    <rect x="18" y="40" width="28" height="20" rx="2" fill="#1A1A1A" />
    {/* "USD" text on label */}
    <text x="21" y="53" fontSize="9" fontWeight="bold" fill="#F0B90B" fontFamily="monospace">USD</text>
    {/* Carry handle */}
    <path d="M 22 12 L 22 8 Q 22 5 28 5 L 36 5 Q 42 5 42 8 L 42 12" stroke="#C89A09" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

// ─── 44. Gas Fees 2 — dark hexagonal gas container with circuit grid ──────────
export const IconGasFees2: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Octagonal / hex container */}
    <polygon points="26,8 54,8 72,26 72,54 54,72 26,72 8,54 8,26" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />
    {/* PCB circuit grid pattern — 4x4 cells */}
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <rect
          key={`gas2-cell-${row}-${col}`}
          x={18 + col * 11}
          y={18 + row * 11}
          width="9"
          height="9"
          rx="1"
          fill="#2A2A2A"
          stroke="#F0B90B"
          strokeWidth="0.5"
        />
      ))
    )}
    {/* Grid trace lines */}
    <line x1="18" y1="18" x2="62" y2="18" stroke="#F0B90B" strokeWidth="0.5" opacity="0.5" />
    <line x1="18" y1="29" x2="62" y2="29" stroke="#F0B90B" strokeWidth="0.5" opacity="0.5" />
    <line x1="18" y1="40" x2="62" y2="40" stroke="#F0B90B" strokeWidth="0.5" opacity="0.5" />
    <line x1="18" y1="51" x2="62" y2="51" stroke="#F0B90B" strokeWidth="0.5" opacity="0.5" />
    <line x1="18" y1="62" x2="62" y2="62" stroke="#F0B90B" strokeWidth="0.5" opacity="0.5" />
    <line x1="18" y1="18" x2="18" y2="62" stroke="#F0B90B" strokeWidth="0.5" opacity="0.5" />
    <line x1="29" y1="18" x2="29" y2="62" stroke="#F0B90B" strokeWidth="0.5" opacity="0.5" />
    <line x1="40" y1="18" x2="40" y2="62" stroke="#F0B90B" strokeWidth="0.5" opacity="0.5" />
    <line x1="51" y1="18" x2="51" y2="62" stroke="#F0B90B" strokeWidth="0.5" opacity="0.5" />
    <line x1="62" y1="18" x2="62" y2="62" stroke="#F0B90B" strokeWidth="0.5" opacity="0.5" />
    {/* Fuel drip at top */}
    <line x1="40" y1="4" x2="40" y2="8" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <path d="M 40 8 Q 36 8 36 13 Q 36 18 40 18 Q 44 18 44 13 Q 44 8 40 8 Z" fill="#F0B90B" />
  </svg>
);

// ─── 45. Temperature Check — speedometer gauge + 3 hex cells ─────────────────
export const IconTemperatureCheck: React.FC<IconProps> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="temp-yl" x1="0" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3DCC91" />
        <stop offset="50%" stopColor="#F0B90B" />
        <stop offset="100%" stopColor="#E05050" />
      </linearGradient>
    </defs>
    {/* Speedometer arc — semi-circle 180° */}
    <path d="M 10 50 A 30 30 0 0 1 70 50" stroke="url(#temp-yl)" strokeWidth="4" strokeLinecap="round" fill="none" />
    {/* Inner arc */}
    <path d="M 16 50 A 24 24 0 0 1 64 50" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Tick marks */}
    <line x1="10" y1="50" x2="14" y2="46" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="30" x2="21" y2="33" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="20" x2="40" y2="24" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <line x1="62" y1="30" x2="59" y2="33" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    <line x1="70" y1="50" x2="66" y2="46" stroke="#F0B90B" strokeWidth="2" strokeLinecap="round" />
    {/* Speed labels */}
    <text x="8" y="62" fontSize="7" fill="#F0B90B" fontFamily="monospace">0</text>
    <text x="34" y="16" fontSize="7" fill="#F0B90B" fontFamily="monospace">50</text>
    <text x="64" y="62" fontSize="7" fill="#F0B90B" fontFamily="monospace">100</text>
    {/* Needle pointing to 65% position (~117° from left) */}
    <line x1="40" y1="50" x2="58" y2="32" stroke="#F0B90B" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="40" cy="50" r="4" fill="#F0B90B" />
    <circle cx="40" cy="50" r="2" fill="#1A1A1A" />
    {/* 3 yellow honeycomb hexagonal cells at bottom */}
    {/* Left hex */}
    <polygon points="20,68 25,65 30,68 30,74 25,77 20,74" fill="#F0B90B" stroke="#C89A09" strokeWidth="1" />
    {/* Center hex */}
    <polygon points="30,68 35,65 40,68 40,74 35,77 30,74" fill="#F0B90B" stroke="#C89A09" strokeWidth="1" />
    {/* Right hex */}
    <polygon points="40,68 45,65 50,68 50,74 45,77 40,74" fill="#F0B90B" stroke="#C89A09" strokeWidth="1" />
  </svg>
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
