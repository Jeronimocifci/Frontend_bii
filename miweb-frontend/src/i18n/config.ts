// Configuración de idiomas y rutas del sitio.
// Español en la raíz (URLs de siempre) e inglés bajo /en con rutas traducidas.

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];
export const DEFAULT_LANG: Lang = 'es';
export const SITE_URL = 'https://www.jugosbii.com';

export type RouteKey = 'home' | 'products' | 'order' | 'business' | 'faq' | 'about' | 'whereToBuy' | 'contact';

const ROUTES: Record<Lang, Record<RouteKey, string>> = {
  es: {
    home: '/',
    products: '/productos',
    order: '/pedido',
    business: '/negocios',
    faq: '/preguntas-frecuentes',
    about: '/nosotros',
    whereToBuy: '/puntos',
    contact: '/contacto',
  },
  en: {
    home: '/en',
    products: '/en/products',
    order: '/en/order',
    business: '/en/for-business',
    faq: '/en/faq',
    about: '/en/about',
    whereToBuy: '/en/where-to-buy',
    contact: '/en/contact',
  },
};

export const routePath = (lang: Lang, key: RouteKey) => ROUTES[lang][key];
export const productPath = (lang: Lang, id: string) => `${ROUTES[lang].products}/${id}`;

const normalize = (p: string) => p.replace(/\/$/, '') || '/';

export const langFromPath = (pathname: string): Lang =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';

/** Devuelve la misma página en el otro idioma (o el inicio si no hay equivalente). */
export function alternatePath(pathname: string, target: Lang): string {
  const path = normalize(pathname);
  const from = langFromPath(path);
  for (const key of Object.keys(ROUTES[from]) as RouteKey[]) {
    const base = ROUTES[from][key];
    if (path === base) return ROUTES[target][key];
    if (key === 'products' && path.startsWith(base + '/')) {
      return ROUTES[target].products + path.slice(base.length);
    }
  }
  return ROUTES[target].home;
}

/** Metadatos de canonical + hreflang para una página. */
export function languageAlternates(lang: Lang, key: RouteKey, productId?: string) {
  const pathFor = (l: Lang) => (productId ? productPath(l, productId) : routePath(l, key));
  return {
    canonical: pathFor(lang),
    languages: {
      'es-CO': pathFor('es'),
      en: pathFor('en'),
      'x-default': pathFor('es'),
    },
  };
}
