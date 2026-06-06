import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_PRODUCTS, ProductInfo } from '../../../dataProducts';

const WHATSAPP_NUMBER = '573137342087';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { id: productId } = await params;
  const product: ProductInfo | undefined = MOCK_PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="text-center mt-20 p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Producto no encontrado</h1>
        <p className="text-lg text-gray-700 mb-8">El producto no existe o fue removido.</p>
        <Link href="/productos" className="text-brand hover:underline">
          &larr; Volver a productos
        </Link>
      </div>
    );
  }

  const whatsappMessage = `Hola bii! Me interesa el *${product.name}* 🍊 ¿Me pueden dar más información?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="container mx-auto px-6 py-12 min-h-[85vh] flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={600}
            className="w-full max-w-xs md:max-w-sm h-auto object-contain rounded-xl shadow-lg"
            priority
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-sm font-semibold text-brand-light uppercase tracking-wider mb-2">
            bii jugos naturales
          </p>
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Sin conservantes', 'Sin colorantes', '100% natural'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-brand/10 text-brand"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Botón WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] transition-colors duration-200 text-white font-semibold px-8 py-4 rounded-xl text-lg w-full md:w-auto"
          >
            <WhatsAppIcon />
            Pedir por WhatsApp
          </a>

          <div className="mt-8">
            <Link href="/productos" className="text-sm text-brand hover:underline">
              &larr; Ver más productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
