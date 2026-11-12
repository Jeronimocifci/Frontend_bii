import "../styles/globals.css";
import Navbar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { PHONE_DISPLAY } from "@/config/contact";

const SITE_URL = "https://www.jugosbii.com";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "bii jugos naturales | Pereira, Colombia",
  description: "Néctares y smoothies hechos con fruta colombiana, sin conservantes ni colorantes. Listos para destapar. Pereira, Colombia.",
  icons: {
    icon: '/logo_bii_transparent.png',
    shortcut: '/logo_bii_transparent.png',
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "bii jugos naturales",
    images: ["/inicio.jpg"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "bii jugos naturales",
  url: SITE_URL,
  image: `${SITE_URL}/inicio.jpg`,
  logo: `${SITE_URL}/logo_bii_transparent.png`,
  telephone: PHONE_DISPLAY,
  email: "jugosbii.col@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mercasa P30",
    addressLocality: "Pereira",
    addressRegion: "Risaralda",
    addressCountry: "CO",
  },
  sameAs: ["https://www.instagram.com/bii.col/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
