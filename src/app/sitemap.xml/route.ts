import { NextResponse } from 'next/server';

export async function GET() {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.snapsave.tech/</loc>
      <lastmod>2024-12-08T00:00:00+01:00</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://www.snapsave.tech/privacy-policy</loc>
      <lastmod>2024-12-08T00:00:00+01:00</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://www.snapsave.tech/terms-of-service</loc>
      <lastmod>2024-12-08T00:00:00+01:00</lastmod>
      <priority>1.0</priority>
    </url>
    <!-- Add more URLs as needed -->
  </urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
