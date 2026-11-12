import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, CircleDot, FlaskConical, Leaf, MoveUpRight, ShieldCheck, Waves, Wind } from "lucide-react";
import { services, products, sectors, learningOffers } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { HeroSlideshow } from "@/components/hero-slideshow";

const serviceIcons=[Waves,Leaf,Wind,ShieldCheck,FlaskConical,BookOpen];

export default function Home() {
  return <>
    <HeroSlideshow />

    <section className="trust-strip"><div className="container trust-inner"><span className="trust-caption">DES SOLUTIONS PORTÉES PAR DES FABRICANTS SPÉCIALISÉS</span><div className="trust-names"><span>SVANTEK</span><span>SENSIDYNE</span><span>SLATESAFETY</span><span>OHD</span></div></div></section>

    <section className="section expertises-section" id="expertises"><div className="container"><div className="section-header grid-header"><div><span className="eyebrow"><span className="eyebrow-line"/> NOS DOMAINES D'EXPERTISE</span><h2>La prévention se construit sur des <em>faits.</em></h2></div><p>De l’identification des risques à la mise en œuvre de solutions, nous associons démarche scientifique, connaissance du terrain et accompagnement sur mesure.</p></div>
      <div className="services-grid">{services.map((service,index)=>{ const Icon=serviceIcons[index]; return <Link href={`/expertises/${service.slug}`} className="service-tile" key={service.slug}><span className="service-num">{service.number} / 06</span><span className="service-symbol"><Icon size={31} strokeWidth={1.45}/></span><h3>{service.title}</h3><p>{service.description}</p><span className="service-cta"><ArrowUpRight size={20}/></span></Link>;})}</div>
      <div className="section-more"><Link className="text-link" href="/expertises">Explorer toutes nos expertises <ArrowUpRight size={19}/></Link></div></div>
    </section>

    <section className="approach-section"><div className="container approach-grid"><div className="approach-visual"><div className="approach-image"/><div className="approach-image-label"><span className="label-tiny">NOTRE APPROCHE</span><strong>Observer.<br/>Mesurer.<br/><i>Agir.</i></strong></div><div className="approach-corner"><MoveUpRight size={22}/></div></div><div className="approach-content"><span className="eyebrow"><span className="eyebrow-line"/> POURQUOI NOUS FAIRE CONFIANCE</span><h2>Les bons choix commencent par une <em>mesure juste.</em></h2><p>Les environnements professionnels présentent des risques complexes. Notre mission est de les rendre compréhensibles, mesurables et maîtrisables pour éclairer vos décisions.</p><div className="approach-list"><div><span>01</span><div><h3>Comprendre les enjeux du terrain</h3><p>Une lecture concrète des situations de travail et de leurs contraintes.</p></div></div><div><span>02</span><div><h3>Mobiliser les bonnes méthodes</h3><p>Des approches techniques adaptées aux objectifs d’évaluation.</p></div></div><div><span>03</span><div><h3>Transformer les données en actions</h3><p>Des conclusions compréhensibles et des pistes d’amélioration utiles.</p></div></div></div><Link href="/a-propos" className="text-link">Découvrir EHS LYNX AFRIK <ArrowUpRight size={18}/></Link></div></div></section>

    <section className="section catalog-section"><div className="container"><div className="section-header catalog-heading"><div><span className="eyebrow"><span className="eyebrow-line"/> INSTRUMENTATION PROFESSIONNELLE</span><h2>Des instruments conçus pour des <em>mesures fiables.</em></h2></div><div><p>Une sélection de technologies dédiées à la métrologie, à l’évaluation des expositions et à la protection des travailleurs.</p><Link className="text-link" href="/equipements">Voir le catalogue <ArrowUpRight size={18}/></Link></div></div>
      <div className="catalog-grid">{products.map(product=><ProductCard key={product.slug} product={product}/>)}</div>
      <div className="catalog-bottom"><span><CircleDot size={16}/> Vous avez plusieurs références à chiffrer ?</span><Link href="/devis">Préparez votre demande de devis <ArrowRight size={17}/></Link></div>
    </div></section>

    <section className="sectors-section"><div className="container sectors-grid"><div><span className="eyebrow lime"><span className="eyebrow-line"/> SECTEURS D'INTERVENTION</span><h2>Chaque secteur a ses risques.<br/><em>Nous en connaissons les enjeux.</em></h2><p>Nous adaptons nos méthodes et nos solutions aux environnements de travail de chaque organisation.</p><Link className="btn btn-outline-light" href="/contact">Parlons de votre secteur <ArrowUpRight size={18}/></Link></div><div className="sector-list">{sectors.map((sector,i)=><div key={sector}><span>0{i+1}</span><strong>{sector}</strong><ArrowUpRight size={18}/></div>)}</div></div></section>

    <section className="academy-section section"><div className="container"><div className="academy-top"><div><span className="eyebrow"><span className="eyebrow-line"/> LYNX ACADEMY</span><h2>Le savoir est aussi un <em>équipement de protection.</em></h2></div><p>Développez les compétences qui permettent de mieux reconnaître, évaluer et maîtriser les risques professionnels et environnementaux.</p></div><div className="academy-intro"><div className="academy-intro-icon"><BookOpen size={28}/></div><div><span>UNE PLATEFORME POUR APPRENDRE ET PROGRESSER</span><strong>Formations · Webinaires · Ressources</strong></div><Link href="/academy">Découvrir LYNX Academy <ArrowUpRight size={19}/></Link></div><div className="learning-grid">{learningOffers.map((offer,i)=><Link href="/academy" className="learning-card" key={offer.kind}><span className="learning-n">0{i+1}</span><span className="learning-kind">{offer.kind}</span><h3>{offer.title}</h3><p>{offer.description}</p><ArrowUpRight size={21}/></Link>)}</div></div></section>

    <section className="closing-section"><div className="container closing-inner"><div><span className="eyebrow lime">VOTRE PROCHAIN PAS</span><h2>Un environnement plus sûr commence par <em>une conversation.</em></h2></div><div><p>Une question technique, un besoin d’équipement ou un projet de formation ? Échangeons sur la solution qui vous convient.</p><Link className="btn btn-lime" href="/contact">Nous contacter <ArrowUpRight size={18}/></Link></div></div></section>
  </>;
}
