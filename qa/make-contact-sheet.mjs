import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const dir = path.join(__dirname, "mobile-shots");
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".png")).sort();
  const width = 260;
  const labelHeight = 34;
  const thumbs = [];

  for (const file of files) {
    const input = path.join(dir, file);
    const meta = await sharp(input).metadata();
    const cropHeight = Math.min(meta.height, 1200);
    const imageHeight = Math.round((cropHeight * width) / meta.width);
    const label = file.replace(".png", "");
    const svg = Buffer.from(
      `<svg width="${width}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${labelHeight}" fill="#071c28"/><text x="10" y="22" fill="#e6edf3" font-family="Arial" font-size="14">${label}</text></svg>`
    );

    const thumb = await sharp(input)
      .extract({ left: 0, top: 0, width: meta.width, height: cropHeight })
      .resize({ width })
      .extend({ bottom: labelHeight, background: "#071c28" })
      .composite([{ input: svg, top: imageHeight, left: 0 }])
      .png()
      .toBuffer();

    thumbs.push(thumb);
  }

  const cols = 4;
  const sample = await sharp(thumbs[0]).metadata();
  const rows = Math.ceil(thumbs.length / cols);

  await sharp({
    create: {
      width: cols * width,
      height: rows * sample.height,
      channels: 4,
      background: "#04141d",
    },
  })
    .composite(
      thumbs.map((input, index) => ({
        input,
        left: (index % cols) * width,
        top: Math.floor(index / cols) * sample.height,
      }))
    )
    .png()
    .toFile(path.join(__dirname, "mobile-contact-sheet.png"));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
