import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" className="flex items-center gap-2 text-white font-semibold text-xl">
			<span className="inline-grid place-items-center w-8 h-8 rounded-full bg-white/20">
				<span className="text-emerald-900">B</span>
			</span>
			<span>bii Jugos</span>
		</Link>
	);
}

