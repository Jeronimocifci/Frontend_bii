import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Puntos de Venta | bii jugos naturales",
  description: "Encuentra los jugos bii en supermercados, tiendas y distribuidores de Pereira y la región.",
};

import React from 'react';

export default function PuntosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Puntos de Venta
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Encuentra nuestros productos bii en los mejores establecimientos cerca de ti.
            Estamos presentes en múltiples ubicaciones para tu conveniencia.
          </p>
        </div>
      </section>

      {/* Mapa Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ubicaciones de nuestros puntos de venta
            </h2>
            <p className="text-lg text-gray-600">
              Consulta el mapa interactivo para encontrar el punto de venta más cercano a tu ubicación
            </p>
          </div>

          {/* Google Maps Container */}
          <div className="w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=14h-pQ1YmmKAfWw4xu8dzaFeiS2JUFEc&hl=es_419&ehbc=2E312F"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Puntos de venta bii"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 - Supermercados */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Supermercados</h3>
              <p className="text-gray-600">
                Encuentra nuestros productos en las principales cadenas de supermercados de la región.
              </p>
            </div>

            {/* Card 2 - Tiendas de Conveniencia */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tiendas de Conveniencia</h3>
              <p className="text-gray-600">
                Disponible en tiendas de conveniencia para un acceso rápido y fácil a nuestros productos.
              </p>
            </div>

            {/* Card 3 - Distribuidores Mayoristas */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Distribuidores</h3>
              <p className="text-gray-600">
                Red de distribuidores mayoristas para abastecer tu negocio con nuestros productos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto para nuevos puntos */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            ¿Interesado en vender nuestros productos?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Si tienes un establecimiento y te gustaría convertirte en uno de nuestros puntos de venta,
            contáctanos para conocer más sobre nuestro programa de distribución.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-brand hover:bg-brand-light transition-colors duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block"
            >
              Contactar Ventas
            </a>
            <a
              href="tel:+573004254665"
              className="border-2 border-brand hover:bg-brand hover:text-white transition-colors duration-300 text-brand px-8 py-3 rounded-lg text-lg font-semibold inline-block"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
