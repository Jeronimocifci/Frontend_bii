import "../styles/globals.css";
import Navbar from "../components/navigation/navbar";
import { Inter } from "next/font/google";

// Fuente Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Bii Jugos",
  description: "Jugos naturales frescos y deliciosos",
  icons: {
    icon: '/biiLogo.jpg', 
    shortcut: '/biiLogo.jpg',
  },
};

// RootLayout.tsx (ejemplo)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}




