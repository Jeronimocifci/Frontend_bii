"use client";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo_bii_transparent.png"
        alt="Logo bii"
        width={60}
        height={60}
        className="w-[60px] h-[60px]"
        priority
      />
    </Link>
  );
}



