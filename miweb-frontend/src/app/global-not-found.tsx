import type { Metadata } from "next";
import SiteShell from "../components/SiteShell";
import NotFoundView from "../views/NotFoundView";

export const metadata: Metadata = {
  title: "Página no encontrada / Page not found | bii",
  robots: { index: false },
};

// 404 para URLs que no existen en ningún idioma.
export default function GlobalNotFound() {
  return (
    <SiteShell lang="es">
      <NotFoundView lang="es" bilingual />
    </SiteShell>
  );
}
