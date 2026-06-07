"use client";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo_bii.png"
        alt="Logo bii"
        width={110}
        height={110}
        style={{ width: '110px', height: 'auto' }}
        priority
      />
    </Link>
  );
}



