import type { Metadata } from "next";
import SiteShell, { siteMetadata } from "../../components/SiteShell";

export const metadata: Metadata = siteMetadata('es');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang={'es'}>{children}</SiteShell>;
}
