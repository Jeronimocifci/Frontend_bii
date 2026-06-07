import "../styles/globals.css";
import Navbar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "bii jugos naturales | Pereira, Colombia",
  description: "Jugos y smoothies 100% naturales sin conservantes, colorantes ni saborizantes. Frescura y sabor real en cada sorbo. Pereira, Colombia.",
  icons: {
    icon: '/logo_bii_transparent.png',
    shortcut: '/logo_bii_transparent.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
