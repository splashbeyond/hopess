export function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /thank-you/

Sitemap: https://www.myhopess.com/sitemap-index.xml
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}
