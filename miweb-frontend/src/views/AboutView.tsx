import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lang, routePath } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';

export default function AboutView({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).about;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-brand text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t.storyTitle}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{t.story1}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{t.story2}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{t.story3}</p>

              <h3 className="text-2xl font-semibold text-gray-800 pt-4">{t.valuesTitle}</h3>
              <ul className="space-y-3 text-gray-600">
                {t.values.map((v) => (
                  <li key={v.name} className="flex items-start">
                    <span className="text-brand-light mr-3 mt-1">•</span>
                    <span>
                      <strong>{v.name}:</strong> {v.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/2">
              <Image
                src="/nosotros.jpg"
                alt={t.imageAlt}
                width={600}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">{t.missionTitle}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{t.mission}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">{t.visionTitle}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{t.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{t.ctaTitle}</h2>
          <p className="text-lg text-gray-600 mb-8">{t.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={routePath(lang, 'contact')}
              className="bg-brand hover:bg-brand-light transition-colors duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block"
            >
              {t.ctaContact}
            </Link>
            <Link
              href={routePath(lang, 'products')}
              className="border-2 border-brand hover:bg-brand hover:text-white transition-colors duration-300 text-brand px-8 py-3 rounded-lg text-lg font-semibold inline-block"
            >
              {t.ctaProducts}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
