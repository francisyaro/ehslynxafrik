import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, FlaskConical, Leaf, MoveUpRight, ShieldCheck, ShoppingBag, Waves, Wind } from "lucide-react";
import { services, sectors, learningOffers } from "@/lib/data";
import { HeroSlideshow } from "@/components/hero-slideshow";

const serviceIcons=[Waves,Leaf,Wind,ShieldCheck,FlaskConical,BookOpen];

export default function Home() {
  return <>
    <HeroSlideshow />

    <section className="partner-strip" aria-labelledby="partners-heading">
      <div className="container partner-strip-layout">
        <div className="partner-strip-heading">
          <span>MARQUES PARTENAIRES</span>
          <h2 id="partners-heading">Des fabricants de référence</h2>
        </div>
        <div className="partner-logo-grid">
          <div className="partner-logo-cell"><Image src="/brands/svantek.webp" width={650} height={199} alt="Logo officiel SVANTEK" sizes="(max-width: 700px) 42vw, 210px" /></div>
          <div className="partner-logo-cell"><Image src="/brands/sensidyne.webp" width={800} height={150} alt="Logo officiel SENSIDYNE" sizes="(max-width: 700px) 42vw, 210px" /></div>
          <div className="partner-logo-cell"><Image src="/brands/slatesafety.webp" width={850} height={109} alt="Logo officiel SLATESAFETY" sizes="(max-width: 700px) 42vw, 210px" /></div>
          <div className="partner-logo-cell"><Image src="/brands/ohd.webp" width={282} height={102} alt="Logo officiel OHD" sizes="(max-width: 700px) 42vw, 210px" /></div>
        </div>
      </div>
    </section>

    <section className="section expertises-section" id="expertises"><div className="container"><div className="section-header grid-header"><div><span className="eyebrow"><span className="eyebrow-line"/> NOS DOMAINES D'EXPERTISE</span><h2>La prévention se construit sur des <em>faits.</em></h2></div><p>De l’identification des risques à la mise en œuvre de solutions, nous associons démarche scientifique, connaissance du terrain et accompagnement sur mesure.</p></div>
      <div className="services-grid">{services.map((service,index)=>{ const Icon=serviceIcons[index]; return <Link href={`/expertises/${service.slug}`} className="service-tile" key={service.slug}><span className="service-num">{service.number} / 06</span><span className="service-symbol"><Icon size={31} strokeWidth={1.45}/></span><h3>{service.title}</h3><p>{service.description}</p><span className="service-cta"><ArrowUpRight size={20}/></span></Link>;})}</div>
      <div className="section-more"><Link className="text-link" href="/expertises">Explorer toutes nos expertises <ArrowUpRight size={19}/></Link></div></div>
    </section>

    <section className="approach-section"><div className="container approach-grid"><div className="approach-visual"><div className="approach-image"/><div className="approach-image-label"><span className="label-tiny">NOTRE APPROCHE</span><strong>Observer.<br/>Mesurer.<br/><i>Agir.</i></strong></div><div className="approach-corner"><MoveUpRight size={22}/></div></div><div className="approach-content"><span className="eyebrow"><span className="eyebrow-line"/> POURQUOI NOUS FAIRE CONFIANCE</span><h2>Les bons choix commencent par une <em>mesure juste.</em></h2><p>Les environnements professionnels présentent des risques complexes. Notre mission est de les rendre compréhensibles, mesurables et maîtrisables pour éclairer vos décisions.</p><div className="approach-list"><div><span>01</span><div><h3>Comprendre les enjeux du terrain</h3><p>Une lecture concrète des situations de travail et de leurs contraintes.</p></div></div><div><span>02</span><div><h3>Mobiliser les bonnes méthodes</h3><p>Des approches techniques adaptées aux objectifs d’évaluation.</p></div></div><div><span>03</span><div><h3>Transformer les données en actions</h3><p>Des conclusions compréhensibles et des pistes d’amélioration utiles.</p></div></div></div><Link href="/a-propos" className="text-link">Découvrir EHS LYNX AFRIK <ArrowUpRight size={18}/></Link></div></div></section>

<section className="shop-bridge-section" aria-labelledby="boutique-heading" id="boutique">
      <div className="container shop-bridge-grid">
        <div className="shop-bridge-copy">
          <span className="eyebrow"><span className="eyebrow-line"/> NOTRE BOUTIQUE EN LIGNE</span>
          <h2 id="boutique-heading">Vos équipements de métrologie, <em>sur un espace dédié.</em></h2>
          <p>Pour découvrir nos instruments, consulter les références et préparer vos achats, rendez-vous sur LYNX AFRIK SHOP, notre boutique en ligne spécialisée.</p>
          <a className="btn btn-dark shop-bridge-cta" href="https://www.lynxafrik.shop/" target="_blank" rel="noopener noreferrer">Découvrir la boutique <ArrowUpRight size={18}/></a>
          <span className="shop-bridge-note">Accès direct à la boutique dans un nouvel onglet</span>
        </div>
        <a className="shop-bridge-card" href="https://www.lynxafrik.shop/" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir LYNX AFRIK SHOP, boutique de métrologie, dans un nouvel onglet">
          <span className="shop-bridge-card-top"><span className="shop-bridge-icon"><ShoppingBag size={24}/></span><span>PLATEFORME SPÉCIALISÉE <ArrowUpRight size={16}/></span></span>
          <span className="shop-bridge-brand">LYNX AFRIK <strong>SHOP</strong></span>
          <span className="shop-bridge-card-caption">Équipements de métrologie · Hygiène industrielle · Prévention</span>
          <span className="shop-bridge-url">www.lynxafrik.shop <ArrowUpRight size={18}/></span>
        </a>
      </div>
    </section>

        <section className="sectors-section"><div className="container sectors-grid"><div><span className="eyebrow lime"><span className="eyebrow-line"/> SECTEURS D'INTERVENTION</span><h2>Chaque secteur a ses risques.<br/><em>Nous en connaissons les enjeux.</em></h2><p>Nous adaptons nos méthodes et nos solutions aux environnements de travail de chaque organisation.</p><Link className="btn btn-outline-light" href="/contact">Parlons de votre secteur <ArrowUpRight size={18}/></Link></div><div className="sector-list">{sectors.map((sector,i)=><div key={sector}><span>0{i+1}</span><strong>{sector}</strong><ArrowUpRight size={18}/></div>)}</div></div></section>

    <section className="academy-section section"><div className="container"><div className="academy-top"><div><span className="eyebrow"><span className="eyebrow-line"/> LYNX ACADEMY</span><h2>Le savoir est aussi un <em>équipement de protection.</em></h2></div><p>Développez les compétences qui permettent de mieux reconnaître, évaluer et maîtriser les risques professionnels et environnementaux.</p></div><div className="academy-intro"><div className="academy-intro-icon"><BookOpen size={28}/></div><div><span>UNE PLATEFORME POUR APPRENDRE ET PROGRESSER</span><strong>Formations · Webinaires · Ressources</strong></div><Link href="/academy">Découvrir LYNX Academy <ArrowUpRight size={19}/></Link></div><div className="learning-grid">{learningOffers.map((offer,i)=><Link href="/academy" className="learning-card" key={offer.kind}><span className="learning-n">0{i+1}</span><span className="learning-kind">{offer.kind}</span><h3>{offer.title}</h3><p>{offer.description}</p><ArrowUpRight size={21}/></Link>)}</div></div></section>

    <section className="closing-section"><div className="container closing-inner"><div><span className="eyebrow lime">VOTRE PROCHAIN PAS</span><h2>Un environnement plus sûr commence par <em>une conversation.</em></h2></div><div><p>Une question technique, un besoin d’équipement ou un projet de formation ? Échangeons sur la solution qui vous convient.</p><Link className="btn btn-lime" href="/contact">Nous contacter <ArrowUpRight size={18}/></Link></div></div></section>
  </>;
}
