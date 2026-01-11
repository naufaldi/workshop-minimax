import { existsSync, rmSync, mkdirSync, cpSync } from "fs";
import { join } from "path";

const DIST_DIR = "dist";
const REVEAL_SOURCE = "node_modules/reveal.js";
const REVEAL_DEST = join(DIST_DIR, "reveal.js");

async function build() {
  console.log("🚀 Starting build...");

  if (existsSync(DIST_DIR)) {
    console.log("📦 Cleaning existing dist directory...");
    rmSync(DIST_DIR, { recursive: true, force: true });
  }

  mkdirSync(DIST_DIR, { recursive: true });

  console.log("📋 Copying reveal.js assets...");
  if (!existsSync(REVEAL_SOURCE)) {
    throw new Error(`Reveal.js not found at ${REVEAL_SOURCE}. Run 'bun install' first.`);
  }

  cpSync(join(REVEAL_SOURCE, "dist"), join(REVEAL_DEST, "dist"), { recursive: true });
  cpSync(join(REVEAL_SOURCE, "plugin"), join(REVEAL_DEST, "plugin"), { recursive: true });

  console.log("📄 Copying project files...");
  const htmlContent = await Bun.file("src/index.html").text();
  
  const updatedHtml = htmlContent.replace(
    /\.\.\/node_modules\/reveal\.js\//g,
    "./reveal.js/"
  );

  await Bun.write(join(DIST_DIR, "index.html"), updatedHtml);

  cpSync("src/styles", join(DIST_DIR, "styles"), { recursive: true });
  cpSync("src/images", join(DIST_DIR, "images"), { recursive: true });

  console.log("✅ Build complete! Output in dist/");
}

build().catch((error) => {
  console.error("❌ Build failed:", error);
  process.exit(1);
});
