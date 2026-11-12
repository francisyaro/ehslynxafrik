import Image from "next/image";
import { ArrowUpRight, BookOpen, GraduationCap, Video } from "lucide-react";
import { learningOffers } from "@/lib/data";

const academyUrl = "https://lynx-academy.vercel.app/";
const offerIcons = [GraduationCap, Video, BookOpen];

export function AcademyPromo() {
  return (
    <section className="academy-brand-section" id="lynx-academy" aria-labelledby="academy-brand-heading">
      <div className="container">
        <div className="academy-brand-feature">
          <div className="academy-brand-copy">
            <span className="academy-brand-eyebrow"><span aria-hidden="true"/> LYNX ACADEMY</span>
            <h2 id="academy-brand-heading">La connaissance au service <em>de la prévention.</em></h2>
            <p>Explorez un espace dédié aux formations, aux webinaires et aux ressources en hygiène industrielle et environnementale. Développez les compétences qui font la différence sur le terrain.</p>
            <a href={academyUrl} target="_blank" rel="noopener noreferrer" className="academy-brand-button">
              Découvrir LYNX Academy <ArrowUpRight size={18} aria-hidden="true"/>
            </a>
            <span className="academy-brand-hint">Accès à la plateforme de formation dans un nouvel onglet</span>
          </div>
          <a href={academyUrl} target="_blank" rel="noopener noreferrer" className="academy-brand-visual" aria-label="Accéder à la plateforme LYNX Academy dans un nouvel onglet">
            <div className="academy-brand-logo-frame">
              <Image
                src="/brands/lynx-academy-logo.webp"
                alt="Logo officiel LYNX Academy"
                width={840}
                height={765}
                sizes="(max-width: 800px) 74vw, 360px"
                className="academy-brand-image"
              />
            </div>
            <div className="academy-brand-visual-foot">
              <span>Apprendre. Comprendre. Prévenir.</span>
              <ArrowUpRight size={19} aria-hidden="true"/>
            </div>
          </a>
        </div>
        <div className="academy-brand-offers" aria-label="Les offres LYNX Academy">
          {learningOffers.map((offer, i) => {
            const Icon=offerIcons[i] ?? BookOpen;
            return (
              <a href={academyUrl} target="_blank" rel="noopener noreferrer" className="academy-brand-offer" key={offer.kind}>
                <div className="academy-brand-offer-icon"><Icon size={23} strokeWidth={1.7} aria-hidden="true"/></div>
                <div><span>{offer.kind}</span><h3>{offer.title}</h3><p>{offer.description}</p></div>
                <ArrowUpRight className="academy-brand-offer-arrow" size={20} aria-hidden="true"/>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
