import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { MOCK_PRODUCTS, JUGO_PRICE, formatCOP } from '../dataProducts';
import ProductsBar from '../components/organisms/productsBar';
import FadeIn from '../components/FadeIn';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { whatsappUrl } from '@/config/contact';

export const metadata: Metadata = {
  title: "bii jugos naturales | Jugos y smoothies en Pereira",
  description: "Néctares y smoothies bii hechos con fruta colombiana, listos para destapar. Precios al por mayor para tiendas, cafés y restaurantes. Mercasa P30, Pereira.",
};

const ORDER_URL = whatsappUrl('Hola bii! Quiero hacer un pedido.');
const WHOLESALE_URL = whatsappUrl('Hola bii! Tengo un negocio y quiero información de precios al por mayor.');

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/inicio.jpg"
          alt="Botellas de jugos bii"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-xl text-white">
            <p className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest bg-white/15 backdrop-blur px-3 py-1 rounded-full mb-5">
              Hecho en Pereira
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              Jugo natural, listo en segundos
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Fruta colombiana de verdad en una botella. Solo agítalo, destápalo y disfrútalo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] transition-colors text-white px-7 py-3.5 rounded-xl text-lg font-semibold"
              >
                <WhatsAppIcon /> Hacer un pedido
              </a>
              <Link
                href="/productos"
                className="inline-flex items-center justify-center border-2 border-white/80 hover:bg-white hover:text-gray-900 transition-colors text-white px-7 py-3.5 rounded-xl text-lg font-semibold"
              >
                Ver productos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Franja de confianza */}
      <section className="bg-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-3 gap-4 text-center text-sm md:text-base font-medium">
          <p>+30 años con fruta</p>
          <p>Sin conservantes</p>
          <p>Listo para tomar</p>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Nuestros sabores</h2>
            <p className="text-lg text-gray-600">
              Néctares de 350 ml y smoothies de 220 ml. Elige el tuyo.
            </p>
          </FadeIn>

          <ProductsBar products={MOCK_PRODUCTS} priorityFirst />

          <div className="text-center mt-10">
            <Link
              href="/productos"
              className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors px-8 py-3 rounded-xl font-semibold"
            >
              Ver detalles de cada producto
            </Link>
          </div>
        </div>
      </section>

      {/* Cómo pedir */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-neutral-light">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">¿Cómo pedir?</h2>
            <p className="text-lg text-gray-600">Tres pasos, sin complicaciones.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Elige tus sabores', text: 'Mira el catálogo y decide qué jugos y smoothies quieres.' },
              { n: '2', title: 'Escríbenos por WhatsApp', text: 'Cuéntanos qué quieres y cuántas unidades. Te confirmamos el pedido.' },
              { n: '3', title: 'Recíbelo o recógelo', text: 'Coordinamos la entrega, o recógelo en nuestro punto de venta en Pereira.' },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 h-full shadow-sm">
                  <span className="w-10 h-10 rounded-full bg-brand text-white font-bold flex items-center justify-center mb-4">
                    {step.n}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] transition-colors text-white px-8 py-3.5 rounded-xl text-lg font-semibold"
            >
              <WhatsAppIcon /> Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <FadeIn className="md:w-1/2" direction="left">
            <Image
              src="/inicio2.jpg"
              alt="Botella de jugo bii"
              width={600}
              height={750}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </FadeIn>
          <FadeIn className="md:w-1/2" direction="right" delay={100}>
            <p className="text-sm font-semibold text-brand-light uppercase tracking-widest mb-3">Nuestra historia</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Fruta real.<br />Sin trucos.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Llevamos más de 30 años trabajando con fruta colombiana. Creamos bii para que un buen jugo no
              dependa de tener tiempo: lo hacemos nosotros, tú solo lo destapas.
            </p>
            <ul className="space-y-3 mb-8">
              {['Sin conservantes ni colorantes', 'Smoothie Verde sin azúcar ni agua añadida', 'Listo para tomar en cualquier momento'].map((text) => (
                <li key={text} className="flex items-center gap-3 text-gray-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-brand-light shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
            <Link
              href="/nosotros"
              className="inline-block bg-brand hover:bg-brand-medium transition-colors text-white px-7 py-3 rounded-xl font-semibold"
            >
              Conoce más de bii
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Mayoristas */}
      <section className="px-4 md:px-8 pb-20 bg-white">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-brand to-brand-medium text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">¿Tienes un negocio?</h2>
            <p className="text-lg text-white/90">
              Tiendas, cafés, restaurantes y gimnasios: vende bii con precios al por mayor desde{' '}
              <strong>{formatCOP(JUGO_PRICE)}</strong> por unidad.
            </p>
          </div>
          <a
            href={WHOLESALE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-brand hover:bg-neutral-light transition-colors px-8 py-4 rounded-xl text-lg font-bold"
          >
            <WhatsAppIcon /> Quiero vender bii
          </a>
        </div>
      </section>
    </div>
  );
}
