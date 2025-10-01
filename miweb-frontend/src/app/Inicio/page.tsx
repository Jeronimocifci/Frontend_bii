
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section con imagen de inicio */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/inicio.png"
            alt="Imagen de inicio BII"
            fill={true}
            className="object-cover"
            priority
          />
          {/* Overlay oscuro para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        {/* Contenido sobre la imagen */}
        <div className="relative z-10 text-center text-white px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Bienvenido a BII
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de productos de calidad premium
          </p>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productos">
              <button className="bg-brand hover:bg-brand-light transition-colors duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold">
                Ver Productos
              </button>
            </Link>
            <Link href="/nosotros">
              <button className="border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold">
                Conoce más
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Sección adicional opcional */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            ¿Por qué elegir BII?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand mb-4">Calidad Premium</h3>
              <p className="text-gray-600">Productos de la más alta calidad para satisfacer tus necesidades.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand mb-4">Experiencia</h3>
              <p className="text-gray-600">Años de experiencia en el mercado nos respaldan.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand mb-4">Compromiso</h3>
              <p className="text-gray-600">Comprometidos con la excelencia en cada producto.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}