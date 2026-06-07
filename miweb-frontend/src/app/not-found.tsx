import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-light flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Número 404 */}
        <p className="text-9xl font-bold text-brand opacity-20 leading-none select-none">
          404
        </p>

        {/* Emoji fruta */}
        

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Esta página no existe!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Parece que el jugo se derramó por aquí. La página que buscas no está disponible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-brand hover:bg-brand-light transition-colors duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Volver al inicio
          </Link>
          <Link
            href="/productos"
            className="border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors duration-300 px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Ver productos
          </Link>
        </div>
      </div>
    </div>
  );
}
