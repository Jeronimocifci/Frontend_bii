import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { MOCK_PRODUCTS } from '../dataProducts';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: "bii jugos naturales | Jugos y smoothies sin conservantes",
  description: "Jugos y smoothies 100% naturales sin conservantes, colorantes ni saborizantes. Frescura y sabor real en cada sorbo. Encuéntranos en Mercasa, Pereira.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/inicio.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 text-center text-white px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Jugo natural, listo en segundos
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Sin conservantes. Sin colorantes. Sin saborizantes. Solo fruta real.
          </p>
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

      {/* Imagen + texto */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <FadeIn className="md:w-1/2" direction="left">
              <Image
                src="/inicio2.jpg"
                alt="Jugos bii"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </FadeIn>
            <FadeIn className="md:w-1/2 space-y-6" direction="right" delay={100}>
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
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-16 px-4 md:px-8 bg-neutral-light">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nuestros jugos
            </h2>
            <p className="text-lg text-gray-600">
              100% fruta, sin trucos. Solo destápalo y disfrútalo.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {MOCK_PRODUCTS.map((product, i) => (
              <FadeIn key={product.id} delay={i * 80} direction="up">
                <Link href={`/productos/${product.id}`} className="group block">
                  <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 group-hover:-translate-y-1 transform transition-transform">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm font-semibold text-gray-700 group-hover:text-brand transition-colors duration-200">
                    {product.name}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <Link href="/productos">
              <button className="border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors duration-300 px-8 py-3 rounded-lg text-lg font-semibold">
                Ver todos los productos
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ¿Por qué elegir bii? */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              ¿Por qué elegir bii?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                color: '#FF8F00',
                title: '100% Natural',
                text: 'Sin conservantes, sin colorantes, sin saborizantes. Solo fruta real.',
                icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
              },
              {
                color: '#1B5C28',
                title: '30 años de experiencia',
                text: 'Más de tres décadas trabajando con las mejores frutas de Colombia.',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                color: '#F9A825',
                title: 'Listo en segundos',
                text: 'Solo destápalo y disfrútalo. Sin preparación, sin complicaciones.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 120} direction="up">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: item.color }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-neutral-mid">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel de clientes */}
      <section className="py-16 px-4 md:px-8 bg-neutral-light">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Algunos de nuestros clientes
            </h2>
          </FadeIn>
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
                      className="flex-shrink-0 w-36 h-24 md:w-44 md:h-28 bg-white rounded-lg flex items-center justify-center px-3 shadow-sm"
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
          <FadeIn>
            <p className="text-center text-gray-600 mt-8">
              Confían en nosotros más de 100 empresas en la región
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
