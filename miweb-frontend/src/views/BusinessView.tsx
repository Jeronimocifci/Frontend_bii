import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Package, Leaf, Grid2x2, MessageCircle, HelpCircle } from 'lucide-react';
import BusinessForm from '../components/business/BusinessForm';
import ProductsBar from '../components/organisms/productsBar';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { getProducts } from '../dataProducts';
import { whatsappUrl } from '@/config/contact';
import { BUSINESS_INFO } from '@/config/business';
import { Lang, routePath } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';

const WHY_ICONS = [Package, Leaf, Grid2x2, MessageCircle];

export default function BusinessView({ lang }: { lang: Lang }) {
  const d = getDictionary(lang);
  const t = d.business;

  const conditions = [
    BUSINESS_INFO.minOrderUnits && { label: t.minOrder, value: t.minOrderValue(BUSINESS_INFO.minOrderUnits) },
    BUSINESS_INFO.delivery && { label: t.delivery, value: BUSINESS_INFO.delivery[lang] },
    BUSINESS_INFO.payment && { label: t.payment, value: BUSINESS_INFO.payment[lang] },
    BUSINESS_INFO.shelfLife && { label: t.shelfLife, value: BUSINESS_INFO.shelfLife[lang] },
    BUSINESS_INFO.storage && { label: t.storage, value: BUSINESS_INFO.storage[lang] },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full mb-5">
              {t.kicker}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">{t.title}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">{t.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#solicitud"
                className="inline-flex items-center justify-center bg-white text-brand hover:bg-neutral-light transition-colors px-7 py-3.5 rounded-xl text-lg font-bold"
              >
                {t.cta}
              </a>
              <a
                href={whatsappUrl(d.whatsapp.wholesale)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:bg-white hover:text-brand transition-colors px-7 py-3.5 rounded-xl text-lg font-semibold"
              >
                <WhatsAppIcon /> {t.ctaWhatsApp}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/inicio.jpg"
              alt={d.home.heroAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Por qué */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">{t.whyTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.why.map((item, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <div key={item.title} className="rounded-2xl border border-gray-100 shadow-sm p-6">
                  <span className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo funciona + condiciones */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-neutral-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">{t.howTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.how.map((step, i) => (
              <div key={step.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-brand text-white font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.conditionsTitle}</h3>
            {conditions.length > 0 && (
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                {conditions.map((c) => (
                  <div key={c.label}>
                    <dt className="text-sm text-gray-500">{c.label}</dt>
                    <dd className="font-semibold text-gray-900">{c.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <p className="text-gray-600">{t.pricesNote}</p>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">{t.productsTitle}</h2>
          <ProductsBar products={getProducts(lang)} lang={lang} />
          <div className="text-center mt-8">
            <Link
              href={routePath(lang, 'products')}
              className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors px-8 py-3 rounded-xl font-semibold"
            >
              {t.productsCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="solicitud" className="py-16 md:py-20 px-4 md:px-8 bg-neutral-light scroll-mt-24">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t.formTitle}</h2>
          <p className="text-gray-600 mb-6">{t.formText}</p>
          <BusinessForm lang={lang} />
        </div>
      </section>

      {/* Dudas */}
      <section className="py-14 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <HelpCircle size={32} className="mx-auto text-brand mb-3" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.faqTitle}</h2>
          <p className="text-gray-600 mb-6">{t.faqText}</p>
          <Link
            href={routePath(lang, 'faq')}
            className="inline-block bg-brand hover:bg-brand-medium transition-colors text-white px-7 py-3 rounded-xl font-semibold"
          >
            {t.faqCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
