import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section con imagen de inicio */}
      <section 
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/inicio.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
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
              {/* Repetir las imágenes para el efecto infinito */}
              {[...Array(2)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  <div className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/logo_bii.png"
                      alt="Cliente 1"
                      width={120}
                      height={80}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  <div className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/file.svg"
                      alt="Cliente 2"
                      width={60}
                      height={60}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  <div className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/globe.svg"
                      alt="Cliente 3"
                      width={60}
                      height={60}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  <div className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/window.svg"
                      alt="Cliente 4"
                      width={60}
                      height={60}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  <div className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/next.svg"
                      alt="Cliente 5"
                      width={80}
                      height={40}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  <div className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/vercel.svg"
                      alt="Cliente 6"
                      width={80}
                      height={40}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8">
            Confían en nosotros más de 100 empresas en todo el país
          </p>
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