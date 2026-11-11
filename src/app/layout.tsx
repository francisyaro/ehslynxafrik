import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"EHS LYNX AFRIK — Hygiène industrielle, métrologie et formation",description:"Expertise scientifique, instrumentation professionnelle et formation spécialisée en hygiène industrielle et environnementale à Ouagadougou.",robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
