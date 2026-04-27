const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const input = path.join(__dirname, '..', 'public', 'images', 'dhaka-header.jpg');
const outputDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(input)) {
  console.error('Source image not found:', input);
  process.exit(1);
}

async function generate() {
  const sizes = [640, 1024, 1600];
  for (const width of sizes) {
    const avifOut = path.join(outputDir, `dhaka-header-${width}.avif`);
    const webpOut = path.join(outputDir, `dhaka-header-${width}.webp`);

    await sharp(input)
      .resize({ width })
      .avif({ quality: 70 })
      .toFile(avifOut);

    await sharp(input)
      .resize({ width })
      .webp({ quality: 75 })
      .toFile(webpOut);

    console.log('Generated', avifOut, webpOut);
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
