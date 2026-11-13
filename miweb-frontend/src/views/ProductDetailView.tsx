import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProducts, getProduct, formatCOP, SHOW_PRICES } from '../dataProducts';
import ProductCard from '../components/molecules/productCard';
import WhatsAppIcon from '../components/WhatsAppIcon';
import OrderPortalLink from '../components/OrderPortalLink';
import { whatsappUrl } from '@/config/contact';
import { Lang, routePath, languageAlternates } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';

export function productMetadata(id: string, lang: Lang): Metadata {
  const product = getProduct(id, lang);
  if (!product) return {};
  const t = getDictionary(lang).product;
  return {
    title: `${product.name} – ${product.type} ${product.volumeMl} ml | bii`,
    description: SHOW_PRICES
      ? `${product.description} ${formatCOP(product.wholesalePrice)} ${t.priceSuffix}`
      : product.description,
    alternates: languageAlternates(lang, 'products', id),
    openGraph: { images: [product.imageUrl] },
  };
}

export default function ProductDetailView({ id, lang }: { id: string; lang: Lang }) {
  const product = getProduct(id, lang);
  if (!product) notFound();

  const d = getDictionary(lang);
  const t = d.product;
  const message = SHOW_PRICES
    ? d.whatsapp.productWithPrice(product.name, product.volumeMl, formatCOP(product.wholesalePrice))
    : d.whatsapp.product(product.name, product.volumeMl);
  const all = getProducts(lang);
  const related = [
    ...all.filter((p) => p.id !== product.id && p.category === product.category),
    ...all.filter((p) => p.category !== product.category),
  ].slice(0, 3);

  return (
    <div className="px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6" aria-label={t.breadcrumbLabel}>
          <Link href={routePath(lang, 'products')} className="hover:text-brand">
            {t.breadcrumbProducts}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden" style={{ backgroundColor: product.accent }}>
            <Image
              src={product.imageUrl}
              alt={`${product.name} – ${product.type} ${product.volumeMl} ml`}
              fill
              priority
              className="object-contain mix-blend-multiply p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-light uppercase tracking-wider mb-2">
              {product.category === 'jugo' ? t.juice : t.smoothie} · {product.volumeMl} ml
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-500 mb-6">{product.type}</p>

            {SHOW_PRICES && (
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-brand">{formatCOP(product.wholesalePrice)}</span>
                <span className="text-gray-500">{t.perUnitWholesale}</span>
              </div>
            )}

            <p className="text-gray-700 text-lg leading-relaxed mb-6">{product.description}</p>

            {product.category === 'smoothie' && (
              <div className="mb-6 rounded-2xl border-l-4 border-brand bg-brand/5 p-4">
                <p className="font-bold text-brand">{t.smoothieCalloutTitle}</p>
                <p className="text-sm text-gray-700">{t.smoothieCalloutText}</p>
              </div>
            )}

            {product.labelClaims && (
              <div className="flex flex-wrap gap-2 mb-6">
                {product.labelClaims.map((claim) => (
                  <span key={claim} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand/10 text-brand">
                    {claim}
                  </span>
                ))}
              </div>
            )}

            {product.ingredients && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">{t.ingredients}</h2>
                <p className="text-gray-700">{product.ingredients.join(', ')}.</p>
              </div>
            )}

            <OrderPortalLink
              label={t.portalCta}
              iconSize={20}
              className="bg-brand hover:bg-brand-medium transition-colors text-white font-semibold px-8 py-4 rounded-xl text-lg w-full md:w-auto"
            />
            <p className="text-sm text-gray-500 mt-2">{t.portalHelp}</p>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-900 mb-1">{t.newClient}</p>
              <a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[#128C4A] hover:underline"
              >
                <WhatsAppIcon /> {t.order}
              </a>
              <p className="text-sm text-gray-500 mt-1">{t.orderHelp}</p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{t.related}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} lang={lang} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
