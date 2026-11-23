const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="75%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#2A2722" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0D0D0D" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0D0D0D"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>

  <!-- Subtle Inner Border Frame -->
  <rect x="30" y="30" width="1140" height="570" rx="24" fill="none" stroke="url(#borderGrad)" stroke-width="1.5"/>

  <!-- Top Metadata Bar -->
  <text x="80" y="95" font-family="Courier, monospace" font-size="16" font-weight="600" fill="#9E9A90" letter-spacing="2.5">
    OFFICIAL PORTFOLIO • RUDRA PRATAP SINGH
  </text>
  <text x="1120" y="95" text-anchor="end" font-family="Courier, monospace" font-size="16" font-weight="600" fill="#9E9A90" letter-spacing="2">
    KOLKATA, INDIA
  </text>
  <line x1="80" y1="120" x2="1120" y2="120" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>

  <!-- Monogram Pill / Badge -->
  <g transform="translate(80, 155)">
    <rect width="140" height="36" rx="18" fill="#1A1A1A" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <text x="70" y="23" text-anchor="middle" font-family="Courier, monospace" font-size="14" font-weight="700" fill="#F2F0EA" letter-spacing="1.5">
      CIIR 2026
    </text>
  </g>
  <g transform="translate(235, 155)">
    <rect width="180" height="36" rx="18" fill="#1A1A1A" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <text x="90" y="23" text-anchor="middle" font-family="Courier, monospace" font-size="14" font-weight="700" fill="#F2F0EA" letter-spacing="1.5">
      HACKFEST WINNER
    </text>
  </g>

  <!-- Monumental Name Headline -->
  <text x="80" y="280" font-family="Times New Roman, Georgia, serif" font-style="italic" font-size="76" font-weight="normal" fill="#F2F0EA" letter-spacing="-0.5">
    Rudra Pratap Singh
  </text>

  <!-- Role / Subheading -->
  <text x="80" y="345" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="600" fill="#DCD7CB" letter-spacing="-0.2">
    Full-Stack Developer &amp; AI Product Engineer
  </text>

  <!-- Descriptive Pitch -->
  <text x="80" y="405" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="400" fill="#9E9A90">
    Applied Deep Learning Computer Vision Pipelines • Role-Based Web Platforms
  </text>
  <text x="80" y="440" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="400" fill="#9E9A90">
    Sister Nivedita University • B.Tech Computer Science &amp; Business Systems
  </text>

  <!-- Bottom Technology Tags Strip -->
  <line x1="80" y1="490" x2="1120" y2="490" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>

  <g transform="translate(80, 525)">
    <text x="0" y="20" font-family="Courier, monospace" font-size="15" fill="#B0ABA0">
      STACK: PyTorch • RT-DETR • React 19 • Next.js 15 • TypeScript • MongoDB Atlas
    </text>
  </g>

  <g transform="translate(1120, 525)">
    <text x="0" y="20" text-anchor="end" font-family="Courier, monospace" font-size="15" font-weight="600" fill="#F2F0EA" letter-spacing="1">
      rudrapratapsingh.tech &#8594;
    </text>
  </g>
</svg>
`;

const outputPath = path.resolve(__dirname, '../public/og-image.png');

sharp(Buffer.from(svg))
  .png({ quality: 95 })
  .toFile(outputPath)
  .then(() => {
    console.log('Successfully generated public/og-image.png');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error generating og-image:', err);
    process.exit(1);
  });
