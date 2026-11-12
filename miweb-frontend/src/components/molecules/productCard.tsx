import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatCOP } from '../../dataProducts';

interface ImageCardProps {
  id: string;
  name: string;
  imageUrl: string;
  wholesalePrice: number;
}

const ProductCard: React.FC<ImageCardProps> = ({ id, name, imageUrl, wholesalePrice }) => {
  return (
    <Link href={`/productos/${id}`} passHref>
      <div className="group w-[200px] cursor-pointer">
        {/* Imagen */}
        <div className="relative w-[200px] h-[300px] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 group-hover:-translate-y-1 transform transition-transform">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>
        {/* Nombre */}
        <p className="mt-3 text-center text-sm font-semibold text-gray-700 group-hover:text-brand transition-colors duration-200">
          {name}
        </p>
        <p className="text-center text-sm text-brand font-bold">
          {formatCOP(wholesalePrice)} <span className="font-normal text-gray-500 text-xs">al por mayor</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
