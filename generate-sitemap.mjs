import { writeFile } from 'fs/promises';
import path from 'path';

const routes = [
  '/', 
  '/about', 
  '/projects', 
  '/experience',
  '/blog',

];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>https://www.malekbouzarkouna.com${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('')}
</urlset>`;

await writeFile(path.resolve('./public/sitemap.xml'), sitemap);

console.log('Sitemap généré dans public/sitemap.xml');
