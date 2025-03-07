import { NextResponse } from "next/server";

// Get current date in YYYY-MM-DD format
const currentDate = new Date().toISOString().split("T")[0];

// Static URLs
const staticUrls = [
  { loc: "https://reelsdownloader.tech/", changefreq: "daily", priority: 1.0 },
  { loc: "https://reelsdownloader.tech/how-to-download", changefreq: "weekly", priority: 0.8 },
  { loc: "https://reelsdownloader.tech/features", changefreq: "weekly", priority: 0.8 },
  { loc: "https://reelsdownloader.tech/faq", changefreq: "monthly", priority: 0.7 },
  { loc: "https://reelsdownloader.tech/contact", changefreq: "monthly", priority: 0.6 },
];

// Simulated function to fetch dynamic URLs (e.g., from a database)
const getDynamicUrls = async () => {
  return [
    { loc: "https://reelsdownloader.tech/blog/post-1", changefreq: "weekly", priority: 0.7 },
    { loc: "https://reelsdownloader.tech/blog/post-2", changefreq: "weekly", priority: 0.7 },
  ];
};

// Generate XML sitemap dynamically
const generateSitemap = async () => {
  const dynamicUrls = await getDynamicUrls();
  const allUrls = [...staticUrls, ...dynamicUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    ({ loc, changefreq, priority }) => `
    <url>
        <loc>${loc}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`
  )
  .join("\n")}
</urlset>`;
};

export async function GET() {
  const sitemap = await generateSitemap();
  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
