// postbuild: writes dist/sitemap.xml from the exact same route list used by
// vite-react-ssg's getStaticPaths (src/App.jsx), via src/lib/content.js's
// getAllRoutes() - so the sitemap and the prerendered routes can never drift
// apart.
//
// This needs to run through Vite so `import.meta.glob` works outside the
// browser/SSG context, so it uses vite's `createServer`-free `loadEnv`-style
// module runner (`vite-node`-less approach): we spin up a minimal Vite SSR
// module loader.

import path from 'node:path';
import fs from 'node:fs/promises';
import { createServer } from 'vite';

const SITE_URL = 'https://mogawinch.com';
// Run via `npm run build` (postbuild step), so cwd is already the project
// root (mogawinch-web) - avoids passing a Windows-style `root` path into
// Vite's dev server, which otherwise fails to resolve `/src/...` URLs.
const projectRoot = process.cwd();

async function main() {
  const server = await createServer({
    root: projectRoot,
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const { getAllRoutes } = await server.ssrLoadModule('/src/lib/content.js');
    const routes = getAllRoutes();

    const urls = routes
      .map((route) => {
        const loc = `${SITE_URL}${route === '/' ? '/' : route}`;
        return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
      })
      .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

    const distDir = path.resolve(projectRoot, 'dist');
    await fs.mkdir(distDir, { recursive: true });
    await fs.writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');

    console.log(`[generate-sitemap] wrote dist/sitemap.xml with ${routes.length} routes`);
  } finally {
    await server.close();
  }
}

main().catch((err) => {
  console.error('[generate-sitemap] failed:', err);
  process.exit(1);
});
