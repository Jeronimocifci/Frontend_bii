import React from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nosotros
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Conoce nuestra historia, valores y el compromiso que nos impulsa cada día
          </p>
        </div>
      </section>

      {/* Sección principal con texto a la izquierda e imagen a la derecha */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Texto a la izquierda */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Desde hace más de 30 años, nuestra familia se ha dedicado a trabajar con las mejores frutas, especialmente en la elaboración de pulpas. Nos enorgullece ofrecer a nuestros clientes la oportunidad de disfrutar de jugos de la más alta calidad.

Entendemos que, a menudo, el ritmo de vida no permite disponer del tiempo o los métodos adecuados para preparar un buen jugo. Por eso, creamos bii, pensando en quienes buscan una opción de alta calidad de manera sencilla y rápida.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Además, ofrecemos combinaciones exclusivas en nuestros extractos, que se destacan por sus sabores únicos y su contenido nutricional excepcional.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 pt-4">
                Nuestros Valores
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-light mr-3 mt-1">•</span>
                  <span><strong>Calidad:</strong> Productos premium que superan estándares internacionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-light mr-3 mt-1">•</span>
                  <span><strong>Innovación:</strong> Desarrollo continuo y mejora de nuestros procesos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-light mr-3 mt-1">•</span>
                  <span><strong>Responsabilidad:</strong> Compromiso con el medio ambiente y la comunidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-light mr-3 mt-1">•</span>
                  <span><strong>Integridad:</strong> Transparencia y honestidad en todas nuestras acciones</span>
                </li>
              </ul>
            </div>

            {/* Imagen a la derecha */}
            <div className="md:w-1/2">
              <Image
                src="/nosotros.jpg"
                alt="Acerca de BII"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de misión y visión */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Misión */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Proporcionar productos de calidad excepcional que mejoren la experiencia de vida
                de nuestros consumidores, manteniendo siempre los más altos estándares de calidad
                y servicio al cliente.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Ser la empresa líder en nuestro sector, reconocida por la excelencia de nuestros
                productos, la innovación constante y nuestro compromiso con la satisfacción del cliente
                y la responsabilidad social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            ¿Quieres conocer más?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Estamos aquí para responder tus preguntas y brindarte la mejor experiencia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-brand hover:bg-brand-light transition-colors duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block"
            >
              Contáctanos
            </Link>
            <Link
              href="/productos"
              className="border-2 border-brand hover:bg-brand hover:text-white transition-colors duration-300 text-brand px-8 py-3 rounded-lg text-lg font-semibold inline-block"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
