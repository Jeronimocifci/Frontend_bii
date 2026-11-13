import Link from "next/link";
import Image from "next/image";

export default function Logo({ href, alt }: { href: string; alt: string }) {
  return (
    <Link href={href} className="flex items-center gap-2">
      <Image
        src="/logo_bii_transparent.png"
        alt={alt}
        width={60}
        height={60}
        className="w-[60px] h-[60px]"
        priority
      />
    </Link>
  );
}
