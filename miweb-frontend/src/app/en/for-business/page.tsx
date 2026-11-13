import type { Metadata } from "next";
import BusinessView from "../../../views/BusinessView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('en').meta;

export const metadata: Metadata = {
  title: t.businessTitle,
  description: t.businessDescription,
  alternates: languageAlternates('en', "business"),
};

export default function Page() {
  return <BusinessView lang={'en'} />;
}
