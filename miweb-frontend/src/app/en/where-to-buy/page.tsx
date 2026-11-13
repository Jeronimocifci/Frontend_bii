import type { Metadata } from "next";
import WhereToBuyView from "../../../views/WhereToBuyView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('en').meta;

export const metadata: Metadata = {
  title: t.whereTitle,
  description: t.whereDescription,
  alternates: languageAlternates('en', "whereToBuy"),
};

export default function Page() {
  return <WhereToBuyView lang={'en'} />;
}
