import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProducts, JUGO_PRICE, formatCOP, SHOW_PRICES } from '../dataProducts';
import ProductsBar from '../components/organisms/productsBar';
import FadeIn from '../components/FadeIn';
import { ShoppingBag, Store } from 'lucide-react';
import { Lang, routePath } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';

export default function HomeView({ lang }: { lang: Lang }) {
  const d = getDictionary(lang);
  const t = d.home;

  return (
    <div>
      {/* Hero */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        <Image src="/inicio.jpg" alt={t.heroAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-xl text-white">
            <p className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest bg-white/15 backdrop-blur px-3 py-1 rounded-full mb-5">
              {t.heroBadge}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">{t.heroTitle}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">{t.heroText}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={routePath(lang, 'order')}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] transition-colors text-white px-7 py-3.5 rounded-xl text-lg font-semibold"
              >
                <ShoppingBag size={20} /> {t.heroOrder}
              </Link>
              <Link
                href={routePath(lang, 'products')}
                className="inline-flex items-center justify-center border-2 border-white/80 hover:bg-white hover:text-gray-900 transition-colors text-white px-7 py-3.5 rounded-xl text-lg font-semibold"
              >
                {t.heroProducts}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Franja de confianza */}
      <section className="bg-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-3 gap-4 text-center text-sm md:text-base font-medium">
          {t.trust.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t.flavorsTitle}</h2>
            <p className="text-lg text-gray-600">{t.flavorsText}</p>
          </FadeIn>

          <ProductsBar products={getProducts(lang)} lang={lang} priorityFirst />

          <div className="text-center mt-10">
            <Link
              href={routePath(lang, 'products')}
              className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors px-8 py-3 rounded-xl font-semibold"
            >
              {t.flavorsCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Cómo pedir */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-neutral-light">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t.howTitle}</h2>
            <p className="text-lg text-gray-600">{t.howText}</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 h-full shadow-sm">
                  <span className="w-10 h-10 rounded-full bg-brand text-white font-bold flex items-center justify-center mb-4">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={routePath(lang, 'order')}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] transition-colors text-white px-8 py-3.5 rounded-xl text-lg font-semibold"
            >
              <ShoppingBag size={20} /> {t.howCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white overflow-x-clip">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <FadeIn className="md:w-1/2" direction="left">
            <Image
              src="/inicio2.jpg"
              alt={t.storyAlt}
              width={600}
              height={750}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </FadeIn>
          <FadeIn className="md:w-1/2" direction="right" delay={100}>
            <p className="text-sm font-semibold text-brand-light uppercase tracking-widest mb-3">{t.storyKicker}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t.storyTitle1}
              <br />
              {t.storyTitle2}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.storyText}</p>
            <ul className="space-y-3 mb-8">
              {t.storyBullets.map((text) => (
                <li key={text} className="flex items-center gap-3 text-gray-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-brand-light shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
            <Link
              href={routePath(lang, 'about')}
              className="inline-block bg-brand hover:bg-brand-medium transition-colors text-white px-7 py-3 rounded-xl font-semibold"
            >
              {t.storyCta}
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Mayoristas */}
      <section className="px-4 md:px-8 pb-20 bg-white">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-brand to-brand-medium text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.businessTitle}</h2>
            <p className="text-lg text-white/90">
              {t.businessText}
              {SHOW_PRICES && t.businessFrom(formatCOP(JUGO_PRICE))}.
            </p>
          </div>
          <Link
            href={routePath(lang, 'business')}
            className="shrink-0 inline-flex items-center gap-2 bg-white text-brand hover:bg-neutral-light transition-colors px-8 py-4 rounded-xl text-lg font-bold"
          >
            <Store size={20} /> {t.businessCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
