import sharp from "sharp";
import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// Prefer the original RealFaviconGenerator asset so re-runs stay idempotent.
const SRC = fs.existsSync(
  "C:/Users/delan/Downloads/favicon (1)/web-app-manifest-512x512.png",
)
  ? "C:/Users/delan/Downloads/favicon (1)/web-app-manifest-512x512.png"
  : "public/web-app-manifest-512x512.png";
const OUT = {
  appIcon: "app/icon.png",
  appApple: "app/apple-icon.png",
  public96: "public/favicon-96x96.png",
  publicApple: "public/apple-touch-icon.png",
  public192: "public/web-app-manifest-192x192.png",
  public512: "public/web-app-manifest-512x512.png",
  publicIco: "public/favicon.ico",
  appIco: "app/favicon.ico",
};

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

let minX = width;
let minY = height;
let maxX = 0;
let maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a < 12) continue;
    if (r < 25 && g < 25 && b < 25) continue;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
}

const cw = maxX - minX + 1;
const ch = maxY - minY + 1;
console.log("content bbox", { minX, minY, cw, ch });

const cropped = await sharp(SRC)
  .extract({ left: minX, top: minY, width: cw, height: ch })
  .png()
  .toBuffer();

async function fitOnCanvas(size, fillRatio = 0.92) {
  const target = Math.round(size * fillRatio);
  const fitted = await sharp(cropped)
    .resize({
      width: target,
      height: target,
      fit: "inside",
      withoutEnlargement: false,
    })
    .png()
    .toBuffer({ resolveWithObject: true });

  const left = Math.floor((size - fitted.info.width) / 2);
  const top = Math.floor((size - fitted.info.height) / 2);

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    },
  })
    .composite([{ input: fitted.data, left, top }])
    .png()
    .toBuffer();
}

const icon96 = await fitOnCanvas(96, 0.94);
const icon180 = await fitOnCanvas(180, 0.9);
const icon192 = await fitOnCanvas(192, 0.92);
const icon512 = await fitOnCanvas(512, 0.92);

fs.writeFileSync(OUT.appIcon, icon96);
fs.writeFileSync(OUT.public96, icon96);
fs.writeFileSync(OUT.appApple, icon180);
fs.writeFileSync(OUT.publicApple, icon180);
fs.writeFileSync(OUT.public192, icon192);
fs.writeFileSync(OUT.public512, icon512);

const tmpDir = ".tmp-favicon";
fs.mkdirSync(tmpDir, { recursive: true });
const icoPngs = [];
for (const s of [16, 32, 48]) {
  const buf = await fitOnCanvas(s, 0.96);
  const p = path.join(tmpDir, `${s}.png`);
  fs.writeFileSync(p, buf);
  icoPngs.push(p);
}

// Ensure png-to-ico is available
let pngToIcoMod;
try {
  pngToIcoMod = require("png-to-ico");
} catch {
  execInstall();
  pngToIcoMod = require("png-to-ico");
}
const pngToIco = pngToIcoMod.default ?? pngToIcoMod;

function execInstall() {
  const { execSync } = require("child_process");
  execSync("npm install --no-save png-to-ico", { stdio: "inherit" });
}

const ico = await pngToIco(icoPngs);
fs.writeFileSync(OUT.publicIco, ico);
fs.writeFileSync(OUT.appIco, ico);
fs.rmSync(tmpDir, { recursive: true, force: true });

const check = await sharp(OUT.public96)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
let cminX = check.info.width;
let cminY = check.info.height;
let cmaxX = 0;
let cmaxY = 0;
for (let y = 0; y < check.info.height; y++) {
  for (let x = 0; x < check.info.width; x++) {
    const i = (y * check.info.width + x) * check.info.channels;
    const r = check.data[i];
    const g = check.data[i + 1];
    const b = check.data[i + 2];
    const a = check.data[i + 3];
    if (a < 12) continue;
    if (r < 25 && g < 25 && b < 25) continue;
    cminX = Math.min(cminX, x);
    cminY = Math.min(cminY, y);
    cmaxX = Math.max(cmaxX, x);
    cmaxY = Math.max(cmaxY, y);
  }
}
const ncw = cmaxX - cminX + 1;
const nch = cmaxY - cminY + 1;
console.log("new 96 fill%", ((ncw * nch) / (96 * 96) * 100).toFixed(1));
console.log("done");
