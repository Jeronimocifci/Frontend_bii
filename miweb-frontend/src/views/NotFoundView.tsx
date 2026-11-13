import React from 'react';
import Link from 'next/link';
import { Lang, routePath } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';

/** bilingual: muestra también el mensaje en inglés (para el 404 global, donde no sabemos el idioma). */
export default function NotFoundView({ lang, bilingual = false }: { lang: Lang; bilingual?: boolean }) {
  const t = getDictionary(lang).notFound;
  const en = getDictionary('en').notFound;
  return (
    <div className="min-h-[70vh] bg-neutral-light flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg">
        <p className="text-9xl font-bold text-brand opacity-20 leading-none select-none">404</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{t.text}</p>
        {bilingual && (
          <p className="text-base text-gray-500 -mt-4 mb-8" lang="en">
            {en.title} {en.text}{' '}
            <Link href={routePath('en', 'home')} className="text-brand font-semibold hover:underline">
              {en.home}
            </Link>
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={routePath(lang, 'home')}
            className="bg-brand hover:bg-brand-light transition-colors duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            {t.home}
          </Link>
          <Link
            href={routePath(lang, 'products')}
            className="border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors duration-300 px-8 py-3 rounded-lg text-lg font-semibold"
          >
            {t.products}
          </Link>
        </div>
      </div>
    </div>
  );
}
