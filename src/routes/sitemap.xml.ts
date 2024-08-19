import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
    <loc>https://sil-logistic.com/</loc>
    <lastmod>2024-08-19</lastmod>
    <priority>1.0</priority>
    <changefreq>monthly</changefreq>
  </url>

  <url>
    <loc>https://sil-logistic.com/about</loc>
    <lastmod>2024-08-19</lastmod>
    <priority>0.2</priority>
    <changefreq>monthly</changefreq>
  </url>

  <url>
    <loc>https://sil-logistic.com/service</loc>
    <lastmod>2024-08-19</lastmod>
    <priority>0.3</priority>
    <changefreq>monthly</changefreq>
  </url>

  <url>
    <loc>https://sil-logistic.com/service/van-chuyen-duong-bien</loc>
    <lastmod>2024-08-19</lastmod>
    <priority>0.5</priority>
    <changefreq>monthly</changefreq>
  </url>

  <url>
    <loc>https://sil-logistic.com/service/van-chuyen-duong-hang-khong</loc>
    <lastmod>2024-08-19</lastmod>
    <priority>0.5</priority>
    <changefreq>monthly</changefreq>
  </url>

    <url>
    <loc>https://sil-logistic.com/service/moi-gioi-hai-quan-va-cap-co-giay-chung-nhan-kiem-dich-thuc-vat</loc>
    <lastmod>2024-08-19</lastmod>
    <priority>0.5</priority>
    <changefreq>monthly</changefreq>
  </url>

    <url>
    <loc>https://sil-logistic.com/service/kho-hang</loc>
    <lastmod>2024-08-19</lastmod>
    <priority>0.5</priority>
    <changefreq>monthly</changefreq>
  </url>

   <url>
    <loc>https://sil-logistic.com/service/dich-vu-xin-giay-chung-nhan-kiem-dich-thuc-vat</loc>
    <lastmod>2024-08-19</lastmod>
    <priority>0.5</priority>
    <changefreq>monthly</changefreq>
  </url>

  <url>
    <loc>https://sil-logistic.com/service/van-tai-da-phuong-thuc</loc>
    <lastmod>2024-08-19</lastmod>
    <priority>0.5</priority>
    <changefreq>monthly</changefreq>
  </url>

  <url>
    <loc>https://sil-logistic.com/contact</loc>
    <lastmod>2024-08-19</lastmod>
    <priority>0.5</priority>
    <changefreq>yearly</changefreq>
  </url>

</urlset>

  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
