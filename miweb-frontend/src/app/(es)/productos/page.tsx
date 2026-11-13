import type { Metadata } from "next";
import ProductsView from "../../../views/ProductsView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('es').meta;

export const metadata: Metadata = {
  title: t.productsTitle,
  description: t.productsDescription,
  alternates: languageAlternates('es', "products"),
};

export default function Page() {
  return <ProductsView lang={'es'} />;
}
