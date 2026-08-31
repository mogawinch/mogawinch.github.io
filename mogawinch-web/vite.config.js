import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssgOptions: {
    // GitHub Pages serves an exact `{route}.html` match with a direct 200,
    // but a `{route}/index.html` match with a 302 redirect (verified against
    // production). Flat output preserves every legacy URL (including the
    // Base64 review/blog slugs) with zero redirects.
    dirStyle: 'flat',
    // Dynamic routes (our splat detail routes) are excluded from prerender
    // by default unless they declare getStaticPaths. `/404` isn't a real
    // route, but it matches our catch-all `*` route just like any unknown
    // path would, so this renders our styled NotFound page to `dist/404.html`
    // - the file GitHub Pages serves (with a real 404 status) for any URL
    // that has no matching prerendered file.
    includedRoutes: (paths) => [...paths, '/404'],
  },
});
