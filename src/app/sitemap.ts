import type { MetadataRoute } from 'next';
import { products,services } from '@/lib/data';
export default function sitemap():MetadataRoute.Sitemap {
  const base=process.env.NEXT_PUBLIC_SITE_URL||'https://ehslynxafrik.com';
  const paths=['','/expertises','/equipements','/academy','/a-propos','/ressources','/contact','/mentions-legales',...products.map(x=>`/equipements/${x.slug}`),...services.map(x=>`/expertises/${x.slug}`)];
  return paths.map(path=>({url:base+path,changeFrequency:path===''?'weekly':'monthly',priority:path===''?1:.7}));
}
