// ESBuild config for bundling the Uppy npm module
import { build } from "esbuild";

// Standard (not minified) build
await build({
  entryPoints: ["mod.ts"],
  bundle: true,
  format: "esm",
  outfile: "dist/uppy.bundle.js",
  minify: false,
  platform: "node",
  mainFields: ["module", "main"],
  target: ["es2019"],
});

// Minified build
await build({
  entryPoints: ["mod.ts"],
  bundle: true,
  format: "esm",
  outfile: "dist/uppy.bundle.min.js",
  minify: true,
  platform: "node",
  mainFields: ["module", "main"],
  target: ["es2019"],
});

console.log("Bundles created: dist/uppy.bundle.js and dist/uppy.bundle.min.js");
