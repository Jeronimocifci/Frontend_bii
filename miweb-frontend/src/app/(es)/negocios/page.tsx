import type { Metadata } from "next";
import BusinessView from "../../../views/BusinessView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('es').meta;

export const metadata: Metadata = {
  title: t.businessTitle,
  description: t.businessDescription,
  alternates: languageAlternates('es', "business"),
};

export default function Page() {
  return <BusinessView lang={'es'} />;
}
