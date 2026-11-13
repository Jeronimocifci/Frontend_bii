import React from 'react';
import ProductsBar from '../components/organisms/productsBar';
import { productsByCategory, formatCOP, JUGO_PRICE, SMOOTHIE_PRICE, SHOW_PRICES } from '../dataProducts';
import { Lang } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';

export default function ProductsView({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).products;
  const juices = productsByCategory('jugo', lang);
  const smoothies = productsByCategory('smoothie', lang);

  return (
    <div className="px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.intro}</p>
        </header>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">{t.juicesTitle}</h2>
              <p className="text-gray-600">{t.juicesText}</p>
            </div>
            {SHOW_PRICES && (
              <p className="text-gray-700 font-semibold">
                {formatCOP(JUGO_PRICE)} {t.perUnitWholesale}
              </p>
            )}
          </div>
          <ProductsBar products={juices} lang={lang} priorityFirst />
        </section>

        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">{t.smoothiesTitle}</h2>
              <p className="text-gray-600">{t.smoothiesText}</p>
            </div>
            {SHOW_PRICES && (
              <p className="text-gray-700 font-semibold">
                {formatCOP(SMOOTHIE_PRICE)} {t.perUnitWholesale}
              </p>
            )}
          </div>
          <div className="mb-6 rounded-2xl border-l-4 border-brand bg-brand/5 p-5 md:p-6">
            <p className="text-lg md:text-xl font-bold text-brand mb-1">{t.smoothieCalloutTitle}</p>
            <p className="text-gray-700">{t.smoothieCalloutText}</p>
          </div>
          <ProductsBar products={smoothies} lang={lang} />
        </section>
      </div>
    </div>
  );
}
