import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="bg-brand text-neutral-white rounded-xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Frescura natural en cada sorbo 🍊
          </h1>
          <p className="text-lg text-neutral-white/90">
            Jugos 100% naturales, llenos de energía y sabor. Disfruta la esencia
            de la fruta en cada botella.
          </p>
          <button className="bg-highlight-yellow text-neutral-dark font-semibold px-6 py-3 rounded hover:bg-highlight-orange transition-colors">
            Comprar ahora
          </button>
        </div>
        <Image
          src="/jugos.png"
          alt="Jugos naturales Bii"
          width={400}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* Productos */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Nuestros favoritos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-neutral-white shadow rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition">
            <Image
              src="/naranja.png"
              alt="Jugo de naranja"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-brand">
              Jugo de Naranja
            </h3>
            <p className="text-gray-600 text-sm">
              Refrescante, lleno de vitamina C.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-neutral-white shadow rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition">
            <Image
              src="/mango.png"
              alt="Jugo de mango"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-brand">
              Jugo de Mango
            </h3>
            <p className="text-gray-600 text-sm">
              Dulce y tropical, ideal para energizar tu día.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-neutral-white shadow rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition">
            <Image
              src="/guayaba.png"
              alt="Jugo de guayaba"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-brand">
              Jugo de Guayaba
            </h3>
            <p className="text-gray-600 text-sm">
              Exótico, nutritivo y naturalmente delicioso.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-highlight-orange text-neutral-white text-center rounded-xl p-12 space-y-6">
        <h2 className="text-3xl font-bold">¡Siente la energía natural!</h2>
        <p className="text-neutral-white/90 max-w-2xl mx-auto">
          Únete a la experiencia Bii Jugos y transforma tu día con sabores
          auténticos y frescos.
        </p>
        <button className="bg-neutral-white text-highlight-orange font-semibold px-6 py-3 rounded hover:bg-highlight-yellow transition-colors">
          Probar ahora
        </button>
      </section>
    </div>
  );
}
