import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ImageCardProps {
  id: string;
  name: string;
  imageUrl: string;
}

const ProductCard: React.FC<ImageCardProps> = ({ id, name, imageUrl }) => {
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
      </div>
    </Link>
  );
};

export default ProductCard;
