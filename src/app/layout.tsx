import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { QuoteProvider } from "@/components/quote-provider";
import { QuoteDrawer } from "@/components/quote-drawer";
import "./globals.css";
import "./refinement.css";
import "./carousel.css";
import "./brands-shop.css";
import "./academy-brand.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ehslynxafrik.com"),
  title: { default: "EHS LYNX AFRIK — Hygiène industrielle, métrologie et formation", template: "%s | EHS LYNX AFRIK" },
  description: "Expertise en hygiène industrielle et environnementale, équipements de métrologie et formation professionnelle en Afrique.",
  robots: process.env.VERCEL_ENV === "production" ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: { title: "EHS LYNX AFRIK", description: "La science de la prévention au service des entreprises et des organisations.", locale: "fr_FR", type: "website" },
};
export const viewport:Viewport={ width:"device-width", initialScale:1, themeColor:"#09252a" };
export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="fr"><body><a href="#contenu" className="skip-link">Aller au contenu principal</a><QuoteProvider><SiteHeader/><main id="contenu">{children}</main><SiteFooter/><QuoteDrawer/></QuoteProvider></body></html>;
}
