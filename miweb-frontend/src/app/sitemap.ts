import type { MetadataRoute } from 'next';
import { PRODUCT_IDS } from '../dataProducts';
import { LANGS, Lang, RouteKey, SITE_URL, productPath, routePath } from '../i18n/config';

const PAGES: RouteKey[] = ['home', 'products', 'about', 'whereToBuy', 'contact'];

const alternates = (pathFor: (l: Lang) => string) => ({
  languages: {
    'es-CO': `${SITE_URL}${pathFor('es')}`,
    en: `${SITE_URL}${pathFor('en')}`,
  },
});

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const lang of LANGS) {
    for (const key of PAGES) {
      const pathFor = (l: Lang) => routePath(l, key);
      entries.push({
        url: `${SITE_URL}${pathFor(lang)}`,
        changeFrequency: 'monthly',
        priority: key === 'home' ? 1 : 0.8,
        alternates: alternates(pathFor),
      });
    }
    for (const id of PRODUCT_IDS) {
      const pathFor = (l: Lang) => productPath(l, id);
      entries.push({
        url: `${SITE_URL}${pathFor(lang)}`,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alternates(pathFor),
      });
    }
  }
  return entries;
}
