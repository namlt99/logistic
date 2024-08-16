// src/routes/sitemap.xml.ts
import fs from 'fs';
import { join } from 'path';

const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://sillogistic.netlify.app/</loc>
      <lastmod>2024-08-17</lastmod>
    </url>
    <url>
      <loc>https://sillogistic.netlify.app/about</loc>
      <lastmod>2024-08-17</lastmod>
    </url>
  </urlset>
`;

fs.writeFileSync(join('static', 'sitemap.xml'), sitemap);
