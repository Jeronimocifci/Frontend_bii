import type { Metadata } from "next";
import WhereToBuyView from "../../../views/WhereToBuyView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('es').meta;

export const metadata: Metadata = {
  title: t.whereTitle,
  description: t.whereDescription,
  alternates: languageAlternates('es', "whereToBuy"),
};

export default function Page() {
  return <WhereToBuyView lang={'es'} />;
}
