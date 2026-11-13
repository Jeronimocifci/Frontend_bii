import type { Metadata } from "next";
import HomeView from "../../views/HomeView";
import { getDictionary } from "../../i18n/dictionaries";
import { languageAlternates } from "../../i18n/config";

const t = getDictionary('es').meta;

export const metadata: Metadata = {
  title: t.homeTitle,
  description: t.homeDescription,
  alternates: languageAlternates('es', "home"),
};

export default function Page() {
  return <HomeView lang={'es'} />;
}
