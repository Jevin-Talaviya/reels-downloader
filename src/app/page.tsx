// pages/index.tsx

import Head from "next/head";
import { InstagramVideoForm } from "@/components/features/instagram/components/form";
import Script from 'next/script';

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Basic SEO Meta Tags */}
        <title>Instagram Video Downloader - Easily Download Instagram Reels</title>
        <meta
          name="description"
          content="Use our Instagram video downloader tool to quickly and easily download Instagram reels. Save your favorite content directly to your device."
        />
        <meta
          name="keywords"
          content="Instagram free reel download, Instagram video downloader, Instagram reel saver, download Instagram reels, Instagram video saving, Instagram free video downloader"
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Instagram Video Downloader - Free Instagram Downloader | No SignUp" />
        <meta property="og:description" content="Quickly, Freely and easily download Instagram reels and videos with our tool." />
        <meta property="og:image" content="/path/to/your/preview-image.jpg" />
        <meta property="og:url" content="https://snapsave.tech" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Instagram Video Downloader - Easily Download Instagram Reels" />
        <meta name="twitter:description" content="Quickly and easily download Instagram reels and videos with our tool." />
        <meta name="twitter:image" content="/path/to/your/preview-image.jpg" />

        {/* Canonical Link to Prevent Duplicate Content */}
        <link rel="canonical" href="https://snapsave.tech" />

        {/* Viewport Meta Tag for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="google-adsense-account" content="ca-pub-2870431461491472"/>

        {/* Adsense code snippet */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2870431461491472"
     crossOrigin="anonymous" />

        
        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://snapsave.tech/",
              "name": "Instagram Video Downloader",
              "description": "Quickly and easily download Instagram reels and videos with our tool.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://snapsave.tech/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </Head>

      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TC7D9FC5PL"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TC7D9FC5PL', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <div className="flex flex-col py-8 px-4 md:px-8 lg:px-16">
        {/* Main Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
          Instagram Video Downloader
        </h1>

        {/* Instagram Video Form */}
        <section className="flex flex-col items-center justify-center gap-4">
          <InstagramVideoForm />
        </section>

        {/* 3-Step Process Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            How to Download Instagram Reels in 3 Easy Steps
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Copy the Reel URL</h3>
              <p className="text-gray-600 text-center">
                Go to Instagram, find the reel you want to download, and copy its URL from the address bar.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Paste the URL</h3>
              <p className="text-gray-600 text-center">
                Paste the copied URL into our Instagram Video Downloader form above.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Download the Video</h3>
              <p className="text-gray-600 text-center">
                Click the Download button and your Instagram reel will be saved to your device instantly.
              </p>
            </div>
          </div>
        </section>

        {/* SEO-Friendly Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Free Instagram reel Downloader
          </h2>
          <p className="text-gray-600 mb-4">
            Our Instagram Video Downloader allows you to save your favorite Instagram reels and videos directly to your device with just a few clicks. Whether you want to keep memories, save inspiring content, or share reels offline, our tool makes the process seamless and user-friendly.
          </p>
          <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-2">
            Features:
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Fast and reliable downloads</li>
            <li>No registration required</li>
            <li>Supports high-definition videos</li>
            <li>Easy-to-use interface</li>
            <li>Completely free to use</li>
          </ul>
        </section>

        

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                Is it free to use the Instagram Video Downloader?
              </h3>
              <p className="text-gray-600">
                Yes, our Instagram Video Downloader is completely free to use. You can download as many reels and videos as you like without any cost.
              </p>
            </div>

            {/* FAQ 2 */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                Do I need to register to use the downloader?
              </h3>
              <p className="text-gray-600">
                No registration is required. Simply paste the URL of the Instagram reel or video you wish to download, and you&apos;re good to go.
              </p>
            </div>

            {/* FAQ 3 */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                Does the downloader support high-definition videos?
              </h3>
              <p className="text-gray-600">
                Yes, our tool supports high-definition video downloads, ensuring you get the best quality content directly to your device.
              </p>
            </div>

            {/* FAQ 4 */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                Is my downloaded content safe?
              </h3>
              <p className="text-gray-600">
                Absolutely. We ensure that all downloaded content is free from malware and safe to use on your device.
              </p>
            </div>

            {/* FAQ 5 */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                Can I use the downloader on mobile devices?
              </h3>
              <p className="text-gray-600">
                Yes, our Instagram Video Downloader is optimized for all devices, including desktops, tablets, and smartphones.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Start Downloading Today!
          </h2>
          <p className="text-gray-600 mb-4">
            Experience the best Instagram Reel Downloader by entering the URL of the reel you wish to save. It&apos;s quick, easy, and completely free.
          </p>
          
        </section>
      </div>
    </>
  );
}
