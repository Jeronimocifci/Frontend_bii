import "../styles/globals.css";
import Navbar from "../components/navigation/navbar";
import { Inter } from "next/font/google";

// Importar fuente Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // pesos que quieras usar
});

export const metadata = {
  title: "Bii Jugos",
  description: "Jugos naturales frescos y deliciosos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* inter.className aplica la fuente a todo el body */}
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}


