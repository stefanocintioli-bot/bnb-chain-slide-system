import React from 'react';

export interface ProductProps {
  size?: number;
}

// ─── ONE BNB ─────────────────────────────────────────────────────────────────
// Central BNB diamond hub with three orbiting chain rings (BSC, opBNB, Greenfield)

export const ProductOneBNB: React.FC<ProductProps> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="onebnb-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(240,185,11,0.18)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <linearGradient id="onebnb-face-top" x1="100" y1="60" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#F0B90B" />
      </linearGradient>
    </defs>

    {/* Glow background */}
    <circle cx="100" cy="100" r="80" fill="url(#onebnb-glow)" />

    {/* Outer dashed orbit ring */}
    <circle cx="100" cy="100" r="76" stroke="#F0B90B" strokeWidth="1" strokeDasharray="4 6" fill="none" opacity="0.4" />

    {/* Mid orbit ring */}
    <circle cx="100" cy="100" r="56" stroke="#F0B90B" strokeWidth="1" strokeDasharray="3 5" fill="none" opacity="0.25" />

    {/* Inner circle background */}
    <circle cx="100" cy="100" r="38" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />

    {/* BNB Diamond logo — center */}
    {/* Top diamond */}
    <polygon points="100,74 110,84 100,94 90,84" fill="url(#onebnb-face-top)" />
    {/* Left diamond */}
    <polygon points="82,92 92,102 82,112 72,102" fill="#F0B90B" />
    {/* Right diamond */}
    <polygon points="118,92 128,102 118,112 108,102" fill="#F0B90B" />
    {/* Bottom diamond */}
    <polygon points="100,110 110,120 100,130 90,120" fill="#C89A09" />
    {/* Center diamond */}
    <polygon points="100,88 112,100 100,112 88,100" fill="#F0B90B" />
    <polygon points="100,92 108,100 100,108 92,100" fill="#C89A09" />

    {/* Connector spokes to orbital nodes */}
    {/* BSC node — top-right */}
    <line x1="127" y1="73" x2="155" y2="45" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    {/* opBNB node — bottom-right */}
    <line x1="130" y1="115" x2="158" y2="150" stroke="#F0B90B" strokeWidth="1" opacity="0.5" />
    {/* Greenfield node — left */}
    <line x1="62" y1="100" x2="28" y2="100" stroke="#3DCC91" strokeWidth="1" opacity="0.5" />

    {/* BSC orbital node */}
    <circle cx="160" cy="40" r="14" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />
    <text x="160" y="44" textAnchor="middle" fill="#F0B90B" fontSize="8" fontWeight="700" fontFamily="monospace">BSC</text>

    {/* opBNB orbital node */}
    <circle cx="162" cy="155" r="14" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />
    <text x="162" y="159" textAnchor="middle" fill="#F0B90B" fontSize="6.5" fontWeight="700" fontFamily="monospace">opBNB</text>

    {/* Greenfield orbital node */}
    <circle cx="22" cy="100" r="14" fill="#1A1A1A" stroke="#3DCC91" strokeWidth="1.5" />
    <text x="22" y="100" textAnchor="middle" fill="#3DCC91" fontSize="5.5" fontWeight="700" fontFamily="monospace" dy="2">GF</text>

    {/* Orbital dots */}
    <circle cx="100" cy="24" r="3" fill="#F0B90B" />
    <circle cx="176" cy="100" r="3" fill="#F0B90B" />
    <circle cx="100" cy="176" r="3" fill="#F0B90B" />
    <circle cx="24" cy="100" r="3" fill="#3DCC91" opacity="0.5" />
  </svg>
);

// ─── BSC — BNB Smart Chain ────────────────────────────────────────────────────
// Octagonal shield with yellow diamond + padlock + silver chain link elements

export const ProductBSC: React.FC<ProductProps> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bsc-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(240,185,11,0.15)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <linearGradient id="bsc-diamond" x1="100" y1="60" x2="100" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5CC3C" />
        <stop offset="100%" stopColor="#C89A09" />
      </linearGradient>
    </defs>

    {/* Glow */}
    <circle cx="100" cy="100" r="80" fill="url(#bsc-glow)" />

    {/* Octagon shield */}
    <polygon
      points="100,18 152,38 170,90 152,142 100,162 48,142 30,90 48,38"
      fill="#1A1A1A"
      stroke="#F0B90B"
      strokeWidth="2"
    />

    {/* Inner octagon ring */}
    <polygon
      points="100,30 144,47 158,91 144,135 100,152 56,135 42,91 56,47"
      fill="none"
      stroke="rgba(240,185,11,0.18)"
      strokeWidth="1"
    />

    {/* Chain link — left */}
    <rect x="24" y="82" width="22" height="16" rx="8" fill="none" stroke="#B0B0B0" strokeWidth="2" />
    <rect x="28" y="86" width="14" height="8" rx="4" fill="none" stroke="#B0B0B0" strokeWidth="1" />

    {/* Chain link — right */}
    <rect x="154" y="82" width="22" height="16" rx="8" fill="none" stroke="#B0B0B0" strokeWidth="2" />
    <rect x="158" y="86" width="14" height="8" rx="4" fill="none" stroke="#B0B0B0" strokeWidth="1" />

    {/* Connector bar through center */}
    <line x1="46" y1="90" x2="154" y2="90" stroke="#B0B0B0" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />

    {/* Large BNB Diamond — center */}
    {/* Top face */}
    <polygon points="100,55 120,75 100,95 80,75" fill="url(#bsc-diamond)" />
    {/* Left face */}
    <polygon points="80,75 100,95 100,115 80,95" fill="#F0B90B" />
    {/* Right face */}
    <polygon points="120,75 100,95 100,115 120,95" fill="#C89A09" />

    {/* Padlock body */}
    <rect x="85" y="112" width="30" height="24" rx="5" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1.5" />
    {/* Padlock shackle */}
    <path d="M 90 112 L 90 104 Q 100 97 110 104 L 110 112" stroke="#F0B90B" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Keyhole */}
    <circle cx="100" cy="122" r="4" fill="#F0B90B" />
    <rect x="98" y="122" width="4" height="8" rx="1" fill="#F0B90B" />

    {/* Corner accent dots */}
    <circle cx="100" cy="18" r="3" fill="#F0B90B" />
    <circle cx="152" cy="38" r="2.5" fill="#F0B90B" opacity="0.6" />
    <circle cx="48" cy="38" r="2.5" fill="#F0B90B" opacity="0.6" />
    <circle cx="152" cy="142" r="2.5" fill="#F0B90B" opacity="0.6" />
    <circle cx="48" cy="142" r="2.5" fill="#F0B90B" opacity="0.6" />
    <circle cx="100" cy="162" r="3" fill="#F0B90B" />
  </svg>
);

// ─── opBNB ────────────────────────────────────────────────────────────────────
// Stacked isometric yellow/dark layers representing L2 scaling

export const ProductOpBNB: React.FC<ProductProps> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="opbnb-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(240,185,11,0.12)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>

    {/* Subtle glow */}
    <circle cx="100" cy="110" r="80" fill="url(#opbnb-glow)" />

    {/* Layer 3 — bottom (darkest) */}
    {/* Top face */}
    <polygon points="100,128 150,108 100,88 50,108" fill="#252525" stroke="#3A3A3A" strokeWidth="1.2" />
    {/* Left face */}
    <polygon points="50,108 50,122 100,142 100,128" fill="#1A1A1A" stroke="#3A3A3A" strokeWidth="1.2" />
    {/* Right face */}
    <polygon points="150,108 150,122 100,142 100,128" fill="#222222" stroke="#3A3A3A" strokeWidth="1.2" />

    {/* Layer 2 — middle */}
    {/* Top face */}
    <polygon points="100,108 150,88 100,68 50,88" fill="#2A2A2A" stroke="#F0B90B" strokeWidth="1.2" strokeOpacity="0.6" />
    {/* Left face */}
    <polygon points="50,88 50,108 100,128 100,108" fill="#1E1E1E" stroke="#F0B90B" strokeWidth="1.2" strokeOpacity="0.5" />
    {/* Right face */}
    <polygon points="150,88 150,108 100,128 100,108" fill="#242424" stroke="#F0B90B" strokeWidth="1.2" strokeOpacity="0.4" />

    {/* Layer 1 — top (brightest yellow) */}
    {/* Top face */}
    <polygon points="100,88 150,68 100,48 50,68" fill="#F5CC3C" />
    {/* Left face */}
    <polygon points="50,68 50,88 100,108 100,88" fill="#F0B90B" />
    {/* Right face */}
    <polygon points="150,68 150,88 100,108 100,88" fill="#C89A09" />

    {/* "OP" label on top face */}
    <text x="100" y="74" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontWeight="800" fontFamily="monospace">op</text>

    {/* Speed lines — right side */}
    <line x1="155" y1="55" x2="175" y2="50" stroke="#F0B90B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <line x1="158" y1="63" x2="182" y2="60" stroke="#F0B90B" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <line x1="159" y1="71" x2="177" y2="70" stroke="#F0B90B" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />

    {/* Up arrow — represents scaling / L2 boost */}
    <polygon points="100,32 112,48 106,48 106,62 94,62 94,48 88,48" fill="#F0B90B" />

    {/* Corner ticks on top layer */}
    <circle cx="100" cy="48" r="2.5" fill="#F5CC3C" />
    <circle cx="150" cy="68" r="2.5" fill="#F0B90B" />
    <circle cx="50" cy="68" r="2.5" fill="#F0B90B" />

    {/* Layer label at bottom */}
    <text x="100" y="160" textAnchor="middle" fill="#666666" fontSize="9" fontWeight="600" fontFamily="monospace" letterSpacing="2">L2 SCALING</text>
  </svg>
);

// ─── BNB Greenfield ───────────────────────────────────────────────────────────
// Circular network graph with green accent nodes representing decentralized storage

export const ProductGreenfield: React.FC<ProductProps> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="gf-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(61,204,145,0.12)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <linearGradient id="gf-hub" x1="100" y1="80" x2="100" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3DCC91" />
        <stop offset="100%" stopColor="#2A9968" />
      </linearGradient>
    </defs>

    {/* Glow */}
    <circle cx="100" cy="100" r="80" fill="url(#gf-glow)" />

    {/* Outer orbit ring */}
    <circle cx="100" cy="100" r="74" stroke="#3DCC91" strokeWidth="1" strokeDasharray="5 6" fill="none" opacity="0.3" />

    {/* Mid ring */}
    <circle cx="100" cy="100" r="52" stroke="#3DCC91" strokeWidth="0.8" strokeDasharray="3 5" fill="none" opacity="0.2" />

    {/* Connection lines — spoke + cross pattern */}
    {/* Top node */}
    <line x1="100" y1="48" x2="100" y2="78" stroke="#3DCC91" strokeWidth="1" opacity="0.5" />
    {/* Top-right node */}
    <line x1="136" y1="62" x2="117" y2="83" stroke="#3DCC91" strokeWidth="1" opacity="0.4" />
    {/* Right node */}
    <line x1="148" y1="100" x2="122" y2="100" stroke="#3DCC91" strokeWidth="1" opacity="0.5" />
    {/* Bottom-right node */}
    <line x1="136" y1="138" x2="117" y2="117" stroke="#3DCC91" strokeWidth="1" opacity="0.4" />
    {/* Bottom node */}
    <line x1="100" y1="152" x2="100" y2="122" stroke="#3DCC91" strokeWidth="1" opacity="0.5" />
    {/* Bottom-left node */}
    <line x1="64" y1="138" x2="83" y2="117" stroke="#3DCC91" strokeWidth="1" opacity="0.4" />
    {/* Left node */}
    <line x1="52" y1="100" x2="78" y2="100" stroke="#3DCC91" strokeWidth="1" opacity="0.5" />
    {/* Top-left node */}
    <line x1="64" y1="62" x2="83" y2="83" stroke="#3DCC91" strokeWidth="1" opacity="0.4" />

    {/* Cross connections (outer nodes to each other) */}
    <line x1="100" y1="48" x2="136" y2="62" stroke="#F0B90B" strokeWidth="0.75" opacity="0.3" />
    <line x1="136" y1="62" x2="148" y2="100" stroke="#F0B90B" strokeWidth="0.75" opacity="0.3" />
    <line x1="148" y1="100" x2="136" y2="138" stroke="#F0B90B" strokeWidth="0.75" opacity="0.3" />
    <line x1="136" y1="138" x2="100" y2="152" stroke="#F0B90B" strokeWidth="0.75" opacity="0.3" />
    <line x1="100" y1="152" x2="64" y2="138" stroke="#F0B90B" strokeWidth="0.75" opacity="0.3" />
    <line x1="64" y1="138" x2="52" y2="100" stroke="#F0B90B" strokeWidth="0.75" opacity="0.3" />
    <line x1="52" y1="100" x2="64" y2="62" stroke="#F0B90B" strokeWidth="0.75" opacity="0.3" />
    <line x1="64" y1="62" x2="100" y2="48" stroke="#F0B90B" strokeWidth="0.75" opacity="0.3" />

    {/* Center hub */}
    <circle cx="100" cy="100" r="22" fill="url(#gf-hub)" />
    <circle cx="100" cy="100" r="16" fill="#1A1A1A" />
    {/* Leaf / storage icon in center */}
    <path
      d="M 100 88 C 108 88 114 94 114 100 C 114 108 108 114 100 116 C 92 114 86 108 86 100 C 86 94 92 88 100 88 Z"
      fill="#3DCC91"
      opacity="0.9"
    />
    <path d="M 100 88 L 100 116" stroke="#1A1A1A" strokeWidth="1.5" />
    <path d="M 86 100 Q 100 95 114 100" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />

    {/* Outer storage nodes — 8 positions */}
    <circle cx="100" cy="44" r="7" fill="#1A1A1A" stroke="#3DCC91" strokeWidth="1.5" />
    <circle cx="138" cy="60" r="6" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />
    <circle cx="150" cy="100" r="7" fill="#1A1A1A" stroke="#3DCC91" strokeWidth="1.5" />
    <circle cx="138" cy="140" r="6" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />
    <circle cx="100" cy="156" r="7" fill="#1A1A1A" stroke="#3DCC91" strokeWidth="1.5" />
    <circle cx="62" cy="140" r="6" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />
    <circle cx="50" cy="100" r="7" fill="#1A1A1A" stroke="#3DCC91" strokeWidth="1.5" />
    <circle cx="62" cy="60" r="6" fill="#1A1A1A" stroke="#F0B90B" strokeWidth="1.5" />

    {/* Node fill dots */}
    <circle cx="100" cy="44" r="3" fill="#3DCC91" />
    <circle cx="138" cy="60" r="2.5" fill="#F0B90B" />
    <circle cx="150" cy="100" r="3" fill="#3DCC91" />
    <circle cx="138" cy="140" r="2.5" fill="#F0B90B" />
    <circle cx="100" cy="156" r="3" fill="#3DCC91" />
    <circle cx="62" cy="140" r="2.5" fill="#F0B90B" />
    <circle cx="50" cy="100" r="3" fill="#3DCC91" />
    <circle cx="62" cy="60" r="2.5" fill="#F0B90B" />
  </svg>
);

// ─── Exports ──────────────────────────────────────────────────────────────────

export const ALL_PRODUCTS = [
  { name: 'ONE BNB',        subtitle: 'Unified BNB Ecosystem',    component: ProductOneBNB,    accent: '#F0B90B' },
  { name: 'BNB Smart Chain', subtitle: 'EVM-Compatible Layer 1',  component: ProductBSC,       accent: '#F0B90B' },
  { name: 'opBNB',          subtitle: 'Optimistic L2 Scaling',    component: ProductOpBNB,     accent: '#F0B90B' },
  { name: 'BNB Greenfield', subtitle: 'Decentralised Storage',    component: ProductGreenfield, accent: '#3DCC91' },
] as const;
