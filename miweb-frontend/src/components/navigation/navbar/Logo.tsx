"use client";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo_bii.png" // 👈 como está en /public, se accede con esta ruta
        alt="Logo Bii"
        width={110} // ajusta tamaño
        height={110}
        priority
      />
    </Link>
  );
}



