import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
export function SiteFooter() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div className="footer-lead"><span className="eyebrow lime">CONSTRUISONS DES ENVIRONNEMENTS PLUS SÛRS</span><h2>Vos défis.<br/><em>Notre engagement.</em></h2><Link href="/contact" className="btn btn-lime">Discutons de votre projet <ArrowUpRight size={18}/></Link></div><div className="footer-links-group"><div><h3>Explorer</h3><Link href="/expertises">Nos expertises</Link><a href="https://www.lynxafrik.shop/" target="_blank" rel="noopener noreferrer">Boutique en ligne <ArrowUpRight size={13} aria-hidden="true" /></a><Link href="/academy">LYNX Academy</Link><Link href="/a-propos">À propos</Link></div><div><h3>En savoir plus</h3><Link href="/ressources">Ressources</Link><Link href="/devis">Demander un devis</Link><Link href="/contact">Nous contacter</Link><Link href="/mentions-legales">Informations légales</Link></div></div></div>
    <div className="footer-bottom"><div className="footer-identity"><strong>EHS<span>LYNX</span> AFRIK</strong><small>Hygiène industrielle & environnementale</small></div><div className="footer-address"><a href="mailto:info@ehslynx.com"><Mail size={15}/> info@ehslynx.com</a><a href="tel:+22605181881"><Phone size={15}/> +226 05 18 18 81</a><span><MapPin size={15}/> Ouagadougou, Burkina Faso</span></div></div>
    <div className="footer-legal"><span>© {new Date().getFullYear()} EHS LYNX AFRIK. Tous droits réservés.</span><span>Une approche fondée sur la mesure et la prévention.</span></div>
  </div></footer>;
}
