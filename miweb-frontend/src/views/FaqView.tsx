import React from 'react';
import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import OrderPortalLink from '../components/OrderPortalLink';
import { whatsappUrl } from '@/config/contact';
import { BUSINESS_INFO } from '@/config/business';
import { formatCOP, JUGO_PRICE, SMOOTHIE_PRICE, SHOW_PRICES } from '../dataProducts';
import { Lang } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';

/** Preguntas visibles: las que dependen de datos sin llenar (config/business.ts) se ocultan. */
export function getFaqItems(lang: Lang) {
  const f = getDictionary(lang).faq;
  const info = BUSINESS_INFO;
  const items: ({ q: string; a: string } | null)[] = [
    f.order,
    info.minOrderUnits ? { q: f.minOrder.q, a: f.minOrder.a(info.minOrderUnits) } : null,
    info.shelfLife ? f.shelfLife : null,
    info.storage ? f.storage : null,
    { q: f.delivery.q, a: info.delivery ? f.delivery.a : f.delivery.aDefault },
    info.payment ? f.payment : null,
    f.nitLogin,
    f.finalPrices,
    f.difference,
    f.preservatives,
    f.wholesale,
    { q: f.price.q, a: SHOW_PRICES ? f.price.aWithPrices(formatCOP(JUGO_PRICE), formatCOP(SMOOTHIE_PRICE)) : f.price.a },
    f.location,
  ];
  return items.filter(Boolean) as { q: string; a: string }[];
}

export default function FaqView({ lang }: { lang: Lang }) {
  const d = getDictionary(lang);
  const f = d.faq;
  const items = getFaqItems(lang);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="px-4 md:px-8 py-12 md:py-16 bg-neutral-light min-h-screen">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{f.title}</h1>
          <p className="text-lg text-gray-600">{f.intro}</p>
        </header>

        <div className="space-y-3">
          {items.map((item, i) => (
            <details key={item.q} className="group bg-white rounded-2xl shadow-sm" open={i === 0}>
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <ChevronDown size={20} className="shrink-0 text-brand transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-gray-600 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-brand text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">{f.ctaTitle}</h2>
          <p className="text-white/90 mb-6">{f.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <OrderPortalLink
              label={d.nav.order}
              className="bg-white text-brand hover:bg-white/90 transition-colors px-7 py-3 rounded-xl font-semibold shadow-sm"
            />
            <a
              href={whatsappUrl(f.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:bg-white hover:text-brand transition-colors px-7 py-3 rounded-xl font-semibold"
            >
              <WhatsAppIcon /> {f.ctaButton}
            </a>
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
