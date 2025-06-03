# Uppy Deno Module

This is a module for Uppy, packaged for easy import and use in other Node projects.

## Usage
Import from `mod.ts` or the bundled files in `dist/` as needed.

## Building for Distribution
To bundle this module for use in Node or for publishing, use the provided npm scripts:

- `npm run build` – Build both standard and minified bundles (outputs to `dist/`)
- `npm run clean` – Remove the `dist/` directory

After building, you will find:
- `dist/uppy.bundle.js` (standard, not minified)
- `dist/uppy.bundle.min.js` (minified)

> **Note:**
> If you want to serve these bundles from a CDN (like jsDelivr or unpkg), you must commit the `dist/` directory to your repository. The `.gitignore` has been updated to allow this.
