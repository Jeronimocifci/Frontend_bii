import type { Metadata } from "next";
import ProductsView from "../../../views/ProductsView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('en').meta;

export const metadata: Metadata = {
  title: t.productsTitle,
  description: t.productsDescription,
  alternates: languageAlternates('en', "products"),
};

export default function Page() {
  return <ProductsView lang={'en'} />;
}
