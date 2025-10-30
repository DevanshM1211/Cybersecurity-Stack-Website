const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "..", "public", "team");
const outputs = [
  {
    src: "Luke Collinson.jpeg",
    baseName: "luke-collinson",
  },
  {
    src: "Anna Wilson.png",
    baseName: "anna-wilson",
  },
];

(async () => {
  for (const item of outputs) {
    const inPath = path.join(inputDir, item.src);
    if (!fs.existsSync(inPath)) {
      console.warn(`Skipping ${item.src}: not found at ${inPath}`);
      continue;
    }

    try {
      // JPEG (800x1000) - keep aspect ratio, fit inside
      const jpegOut = path.join(inputDir, `${item.baseName}.jpg`);
      await sharp(inPath)
        .resize(800, 1000, { fit: "inside" })
        .jpeg({ quality: 85 })
        .toFile(jpegOut);

      // WebP
      const webpOut = path.join(inputDir, `${item.baseName}.webp`);
      await sharp(inPath)
        .resize(800, 1000, { fit: "inside" })
        .webp({ quality: 80 })
        .toFile(webpOut);

      console.log(`Wrote ${jpegOut} and ${webpOut}`);
    } catch (err) {
      console.error(`Error processing ${item.src}:`, err);
    }
  }
})();
