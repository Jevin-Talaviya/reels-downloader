import { NextResponse } from 'next/server';

export async function GET() {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://reelsdownloader.tech/</loc>
        <lastmod>2025-02-08</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://reelsdownloader.tech/how-to-download</loc>
        <lastmod>2025-02-08</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://reelsdownloader.tech/features</loc>
        <lastmod>2025-02-08</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://reelsdownloader.tech/faq</loc>
        <lastmod>2025-02-08</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://reelsdownloader.tech/contact</loc>
        <lastmod>2025-02-08</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
</urlset>
`;

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
