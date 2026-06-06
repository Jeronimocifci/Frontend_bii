import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ImageCardProps {
  id: string;
  imageUrl: string;
  sizeClasses?: string;
}

const ProductCard: React.FC<ImageCardProps> = ({
  id,
  imageUrl,
  sizeClasses = 'w-[200px] h-[300px]',
}) => {
  return (
    <Link href={`/productos/${id}`} passHref>
      <div
        className={`
          relative
          bg-white
          rounded-lg
          shadow-md
          cursor-pointer
          overflow-hidden
          hover:shadow-xl
          transition-shadow
          duration-300
          transform
          hover:-translate-y-1
          ${sizeClasses}
        `}
      >
        <Image
          src={imageUrl}
          alt={`Producto con ID ${id}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 200px, 200px"
        />
      </div>
    </Link>
  );
};

export default ProductCard;
