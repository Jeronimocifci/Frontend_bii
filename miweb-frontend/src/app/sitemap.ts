import type { MetadataRoute } from 'next';
import { MOCK_PRODUCTS } from '../dataProducts';

const SITE_URL = 'https://www.jugosbii.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/productos', '/nosotros', '/puntos', '/contacto'].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
  const products = MOCK_PRODUCTS.map((p) => ({
    url: `${SITE_URL}/productos/${p.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  return [...pages, ...products];
}
