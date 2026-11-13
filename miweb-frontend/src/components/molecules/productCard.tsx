import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatCOP, ProductInfo, SHOW_PRICES } from '../../dataProducts';
import { Lang, productPath } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';

interface ProductCardProps {
  product: ProductInfo;
  lang: Lang;
  priority?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, lang, priority = false }) => {
  const t = getDictionary(lang).products;
  return (
    <Link href={productPath(lang, product.id)} className="group block h-full">
      <article className="h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
        <div className="relative w-full aspect-[4/5]" style={{ backgroundColor: product.accent }}>
          <Image
            src={product.imageUrl}
            alt={`${product.name} – ${product.type} ${product.volumeMl} ml`}
            fill
            className="object-contain mix-blend-multiply p-4 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 33vw"
            priority={priority}
          />
          <span className="absolute top-3 left-3 text-[11px] font-semibold bg-white/90 text-gray-700 px-2.5 py-1 rounded-full">
            {product.volumeMl} ml
          </span>
        </div>
        <div className="flex-1 flex flex-col p-4">
          <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-brand transition-colors">
            {product.name}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 mb-3 line-clamp-2">{product.type}</p>
          <div className="mt-auto">
            {SHOW_PRICES ? (
              <>
                <p className="text-brand font-bold text-lg leading-tight">{formatCOP(product.wholesalePrice)}</p>
                <p className="text-[11px] text-gray-500">{t.cardPerUnit}</p>
              </>
            ) : (
              <p className="text-sm font-semibold text-brand">{t.cardView}</p>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
