import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bii Jugos Naturales | Jugos y smoothies sin conservantes",
  description: "Jugos y smoothies 100% naturales sin conservantes, colorantes ni saborizantes. Frescura y sabor real en cada sorbo. Encuéntranos en Mercasa, Pereira.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section con imagen de inicio */}
      <section 
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/inicio.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        {/* Contenido sobre la imagen */}
        <div className="relative z-10 text-center text-white px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Jugo natural, listo en segundos
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Sin conservantes. Sin colorantes. Sin saborizantes. Solo fruta real.
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
      
      {/* Nueva sección con imagen a la izquierda y texto a la derecha */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Imagen a la izquierda */}
            <div className="md:w-1/2">
              <Image
                src="/inicio2.jpg"
                alt="Logo BII"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
            
            {/* Texto a la derecha */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Frescura y sabor natural
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                En bii, nuestra misión es llevar la frescura y el sabor natural de la fruta recién exprimida directamente a tu paladar. Seleccionamos cuidadosamente cada ingrediente para crear jugos y extractos únicos y sin trucos que puedes disfrutar en cualquier momento, sin complicarte la vida. Lo mejor... NO usamos conservantes ni preservantes ni saborizantes ni colorantes porque creemos en la alimentación consciente y real.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tenemos opciones para todos los gustos... los jugos clásicos, bajos en azúcar, y los smoothies, sin agua ni azúcar añadidas, ideales para los que buscan opciones muy saludables. No tienes que hacerlo, sólo destápalo y ¡pruébalo! ¡Se te hará jugo la boca!
              </p>
              <div className="pt-4">
                <Link href="/nosotros">
                  <button className="bg-brand hover:bg-brand-light transition-colors duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold">
                    Conoce más sobre nosotros
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Carrusel de clientes */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Algunos de nuestros clientes
          </h2>
          
          {/* Carrusel container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8 md:space-x-12">
              {[...Array(2)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {[
                    'Restaurante El Jardín',
                    'Café Alma',
                    'Gym Activa',
                    'Hotel Plaza',
                    'Mercasa Pereira',
                    'Frutas & Co.',
                  ].map((nombre) => (
                    <div
                      key={nombre}
                      className="flex-shrink-0 w-36 h-24 md:w-44 md:h-28 bg-gray-100 rounded-lg flex items-center justify-center px-3"
                    >
                      <span className="text-sm md:text-base font-semibold text-gray-500 text-center leading-tight opacity-70 hover:opacity-100 transition-opacity duration-300">
                        {nombre}
                      </span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8">
            Confían en nosotros más de 100 empresas en todo el país
          </p>
        </div>
      </section>

      {/* ¿Por qué elegir BII? */}
      <section className="py-16 px-4 md:px-8 bg-neutral-light">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            ¿Por qué elegir BII?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#FF8F00' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">100% Natural</h3>
              <p className="text-neutral-mid">Sin conservantes, sin colorantes, sin saborizantes. Solo fruta real.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-brand">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">30 años de experiencia</h3>
              <p className="text-neutral-mid">Más de tres décadas trabajando con las mejores frutas de Colombia.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#F9A825' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Listo en segundos</h3>
              <p className="text-neutral-mid">Solo destápalo y disfrútalo. Sin preparación, sin complicaciones.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}