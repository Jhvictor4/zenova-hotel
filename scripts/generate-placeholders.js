const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const placeholders = [
  // A: No watermark (will use real photo in PhotoGrid)
  { name: 'test-hero.jpg', width: 1920, height: 1080, label: 'A', quality: 95, watermark: false },
  // B-H: With watermark for Vision test
  { name: 'zenova-sky-premium-ocean-view-suite-jeju.jpg', width: 1600, height: 900, label: 'B', quality: 90, watermark: true },
  { name: 'test-high-res.jpg', width: 2400, height: 1600, label: 'C', quality: 100, watermark: true },
  { name: 'test-compressed.jpg', width: 800, height: 600, label: 'D', quality: 60, watermark: true },
  { name: 'test-article-context.jpg', width: 1200, height: 800, label: 'E', quality: 85, watermark: true },
  { name: 'img001.jpg', width: 1000, height: 667, label: 'F', quality: 75, watermark: true },
  { name: 'zenova-sky-jeju-oceanview-suite.jpg', width: 1800, height: 1200, label: 'G', quality: 88, watermark: true },
  { name: 'test-schema-rich.jpg', width: 1920, height: 1280, label: 'H', quality: 92, watermark: true },
  // ★: With watermark initially (user can replace with real photo)
  { name: 'user-test-image.jpg', width: 1920, height: 1080, label: '★', quality: 90, watermark: true },
];

async function generatePlaceholder(config) {
  const { name, width, height, label, quality, watermark } = config;

  // Watermark text (conditional)
  const watermarkText = watermark ? `
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 10}"
          fill="white" fill-opacity="0.6" text-anchor="middle" dominant-baseline="middle" font-weight="bold">
      제노바 스카이 호텔
    </text>
    <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 20}"
          fill="white" fill-opacity="0.6" text-anchor="middle" dominant-baseline="middle">
      Zenova Sky Boutique Hotel
    </text>
  ` : '';

  // Create a gradient background
  const svgImage = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad${label}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(59,130,246);stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:rgb(147,51,234);stop-opacity:0.9" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad${label})" />
      ${watermarkText}
      <rect x="20" y="20" width="${Math.min(width, height) / 8}" height="${Math.min(width, height) / 8}"
            fill="rgb(220, 38, 38)" opacity="0.9" />
      <text x="${Math.min(width, height) / 16 + 20}" y="${Math.min(width, height) / 16 + 20}"
            font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 12}"
            fill="white" text-anchor="middle" dominant-baseline="middle" font-weight="bold">
        ${label}
      </text>
    </svg>
  `;

  const buffer = Buffer.from(svgImage);

  await sharp(buffer)
    .jpeg({ quality: quality })
    .toFile(path.join(imagesDir, name));

  const wmStatus = watermark ? '🏷️ Watermark' : '❌ No watermark';
  console.log(`✓ Generated ${name} (${width}x${height}, Q${quality}, Label: ${label}, ${wmStatus})`);
}

async function generateAll() {
  console.log('Generating placeholder images for GEO testing...\n');

  for (const config of placeholders) {
    await generatePlaceholder(config);
  }

  console.log('\n✅ All placeholder images generated successfully!');
  console.log(`\n📁 Images saved to: ${imagesDir}`);
  console.log('\n🎯 To test with a real image, replace: user-test-image.jpg');
}

generateAll().catch(console.error);
