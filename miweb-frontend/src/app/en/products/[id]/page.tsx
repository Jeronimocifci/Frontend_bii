import type { Metadata } from "next";
import ProductDetailView, { productMetadata } from "../../../../views/ProductDetailView";
import { PRODUCT_IDS } from "../../../../dataProducts";

interface Props {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCT_IDS.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return productMetadata(id, 'en');
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <ProductDetailView id={id} lang={'en'} />;
}
