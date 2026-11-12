import type { Metadata } from 'next';
import React from 'react';
import ProductsBar from '../../components/organisms/productsBar';
import { productsByCategory, formatCOP, JUGO_PRICE, SMOOTHIE_PRICE } from '../../dataProducts';

export const metadata: Metadata = {
  title: "Productos | bii jugos naturales",
  description: "Néctares de 350 ml (mora, mango, maracuyá, 3 Soles) y smoothies de 220 ml (Smoothie Verde, Toro Negro). Precios al por mayor en Pereira.",
};

export default function ProductosPage() {
  const jugos = productsByCategory('jugo');
  const smoothies = productsByCategory('smoothie');

  return (
    <div className="px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros productos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hechos con fruta colombiana, listos para destapar. Precios por unidad al por mayor.
          </p>
        </header>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">Jugos · 350 ml</h2>
              <p className="text-gray-600">Néctares de fruta con el sabor de lo hecho en casa.</p>
            </div>
            <p className="text-gray-700 font-semibold">{formatCOP(JUGO_PRICE)} c/u al por mayor</p>
          </div>
          <ProductsBar products={jugos} priorityFirst />
        </section>

        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">Smoothies · 220 ml</h2>
              <p className="text-gray-600">Extractos de frutas y verduras para darle un giro a tu día.</p>
            </div>
            <p className="text-gray-700 font-semibold">{formatCOP(SMOOTHIE_PRICE)} c/u al por mayor</p>
          </div>
          <div className="mb-6 rounded-2xl border-l-4 border-brand bg-brand/5 p-5 md:p-6">
            <p className="text-lg md:text-xl font-bold text-brand mb-1">Extractos 100% zumo de frutas y vegetales</p>
            <p className="text-gray-700">Sin agua añadida y sin azúcar añadida. Solo el jugo de la fruta y la verdura.</p>
          </div>
          <ProductsBar products={smoothies} />
        </section>
      </div>
    </div>
  );
}
