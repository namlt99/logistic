import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const content = `
    User-agent: *
    Allow: /

    Sitemap: https://sil-logistic.com/sitemap.xml

  `;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};