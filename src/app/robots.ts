import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const production = process.env.VERCEL_ENV === "production";
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://ehslynxafrik.com";
  if (!production) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/devis"] }],
    sitemap: `${base}/sitemap.xml`,
  };
}
