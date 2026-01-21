import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const TARGET_DIR = "./public"; // Path to your images
const MAX_WIDTH = 1920; // Resize huge images to 1080p width

async function walk(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const res = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      await walk(res);
    } else if (/\.(jpe?g|png|webp)$/i.test(file.name)) {
      await optimize(res);
    }
  }
}

async function optimize(filePath) {
  const buffer = await fs.readFile(filePath);
  const metadata = await sharp(buffer).metadata();

  // Only process if it's actually a large file to save time
  const stats = await fs.stat(filePath);
  if (stats.size < 100 * 1024) return; // Skip files smaller than 100KB

  console.log(
    `Optimizing: ${filePath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`
  );

  await sharp(buffer)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true }) // Prevent 10mb 5000px images
    .jpeg({ quality: 80, progressive: true, mozjpeg: true }) // Lossy but visually identical
    .png({ compressionLevel: 9, palette: true })
    .toFile(filePath + ".tmp"); // Write to temp first

  await fs.rename(filePath + ".tmp", filePath);
}

walk(TARGET_DIR).then(() => console.log("✅ All images optimized!"));
