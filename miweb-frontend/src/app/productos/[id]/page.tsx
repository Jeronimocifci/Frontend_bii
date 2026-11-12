import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MOCK_PRODUCTS, getProduct, formatCOP } from '../../../dataProducts';
import ProductCard from '../../../components/molecules/productCard';
import WhatsAppIcon from '../../../components/WhatsAppIcon';
import { whatsappUrl } from '@/config/contact';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({ id: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};
  return {
    title: `${product.name} – ${product.type} ${product.volumeMl} ml | bii`,
    description: `${product.description} ${formatCOP(product.wholesalePrice)} por unidad al por mayor.`,
    openGraph: { images: [product.imageUrl] },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const message = `Hola bii! Me interesa el *${product.name}* (${product.volumeMl} ml, ${formatCOP(product.wholesalePrice)} al por mayor). ¿Me pueden dar más información?`;
  const related = [
    ...MOCK_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category),
    ...MOCK_PRODUCTS.filter((p) => p.category !== product.category),
  ].slice(0, 3);

  return (
    <div className="px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Ruta">
          <Link href="/productos" className="hover:text-brand">Productos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden" style={{ backgroundColor: product.accent }}>
            <Image
              src={product.imageUrl}
              alt={`${product.name} – ${product.type} ${product.volumeMl} ml`}
              fill
              priority
              className="object-contain mix-blend-multiply p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-light uppercase tracking-wider mb-2">
              {product.category === 'jugo' ? 'Jugo' : 'Smoothie'} · {product.volumeMl} ml
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-500 mb-6">{product.type}</p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-brand">{formatCOP(product.wholesalePrice)}</span>
              <span className="text-gray-500">por unidad, al por mayor</span>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">{product.description}</p>

            {product.category === 'smoothie' && (
              <div className="mb-6 rounded-2xl border-l-4 border-brand bg-brand/5 p-4">
                <p className="font-bold text-brand">Extracto 100% zumo de frutas y vegetales</p>
                <p className="text-sm text-gray-700">Sin agua añadida y sin azúcar añadida.</p>
              </div>
            )}

            {product.labelClaims && (
              <div className="flex flex-wrap gap-2 mb-6">
                {product.labelClaims.map((claim) => (
                  <span key={claim} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand/10 text-brand">
                    {claim}
                  </span>
                ))}
              </div>
            )}

            {product.ingredients && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Ingredientes</h2>
                <p className="text-gray-700">{product.ingredients.join(', ')}.</p>
              </div>
            )}

            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] transition-colors text-white font-semibold px-8 py-4 rounded-xl text-lg w-full md:w-auto"
            >
              <WhatsAppIcon /> Pedir por WhatsApp
            </a>
            <p className="text-sm text-gray-500 mt-3">Te respondemos por WhatsApp para confirmar cantidades y entrega.</p>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">También te puede gustar</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
