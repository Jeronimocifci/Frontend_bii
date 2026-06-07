"use client";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo_bii_transparent.png"
        alt="Logo bii"
        width={140}
        height={140}
        style={{ width: '140px', height: 'auto' }}
        priority
      />
    </Link>
  );
}



