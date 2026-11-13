"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, ShoppingBag, X } from "lucide-react";
import { useQuote } from "./quote-provider";

type NavItem = { href: string; label: string; external?: boolean };
const nav: NavItem[] = [
  { href:"/", label:"Accueil" }, { href:"/expertises", label:"Expertises" },
  { href:"https://www.lynxafrik.shop/", label:"Boutique", external:true }, { href:"https://lynx-academy.vercel.app/", label:"LYNX Academy", external:true },
  { href:"/a-propos", label:"À propos" }, { href:"/ressources", label:"Ressources" },
];
export function SiteHeader() {
  const path = usePathname();
  const [mobile, setMobile] = useState(false);
  const { count, open } = useQuote();
  const showQuoteCart = path.startsWith("/equipements") || path.startsWith("/devis");
  return <>
    <div className="microbar"><div className="container microbar-inner"><span><span className="micro-dot"/> LA SCIENCE DE LA PRÉVENTION</span><span>Ouagadougou · Afrique de l’Ouest & centrale</span></div></div>
    <header className="site-header">
      <div className="container nav-container">
        <Link href="/" className="brand" aria-label="EHS LYNX AFRIK, accueil" onClick={() => setMobile(false)}>
          <span className="brand-icon"><Image src="/logo-original.webp" alt="" width={66} height={46} priority /></span>
          <span className="brand-wordmark"><strong>EHS<span>LYNX</span></strong><small>AFRIK</small></span>
        </Link>
        <nav className={`main-nav ${mobile ? "nav-expanded" : ""}`} aria-label="Navigation principale">
          {nav.map(item => item.external
            ? <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="nav-shop-link" onClick={() => setMobile(false)}>{item.label} <ArrowUpRight size={13} aria-hidden="true"/></a>
            : <Link key={item.href} href={item.href} className={path === item.href || (item.href !== "/" && path.startsWith(item.href + "/")) ? "active" : ""} onClick={() => setMobile(false)}>{item.label}</Link>)}
          <Link className="nav-mobile-contact" href="/contact" onClick={() => setMobile(false)}>Nous contacter <ArrowUpRight size={16}/></Link>
        </nav>
        <div className="nav-actions">{showQuoteCart && <button className="cart-nav" onClick={open} aria-label={`Voir ma sélection de devis : ${count} article(s)`}><ShoppingBag size={19}/>{count > 0 && <span>{count}</span>}</button>}<Link href="/contact" className="nav-cta">Parlons de votre projet <ArrowUpRight size={16}/></Link><button className="mobile-toggle" aria-label={mobile ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={mobile} onClick={() => setMobile(!mobile)}>{mobile ? <X size={24}/> : <Menu size={24}/>}</button></div>
      </div>
    </header>
  </>;
}
