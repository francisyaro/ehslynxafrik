import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { services } from "@/lib/data";
import { expertiseLongforms } from "@/lib/expertise-content";
import type { ExpertiseIllustration } from "@/lib/expertise-content";

export const metadata: Metadata = {
  title: "Nos expertises",
  description: "Hygiène industrielle, qualité de l'environnement intérieur, hygiène environnementale, systèmes intégrés et analyse toxicologique des médias environnementaux.",
};

function illustrationFor(slug: string): ExpertiseIllustration | undefined {
  const entry = expertiseLongforms.find((e) => e.slug === slug);
  if (!entry) return undefined;
  if (entry.heroImage) return entry.heroImage;
  for (const section of entry.sections) {
    for (const block of section.blocks) {
      if (block.type === "image") return block.image;
    }
  }
  return undefined;
}

export default function ExpertisePage() {
  return <>
    <section className="page-hero page-hero-dark">
      <div className="container">
        <span className="eyebrow lime">NOS DOMAINES D'INTERVENTION</span>
        <h1>Nos <em>expertises.</em></h1>
        <p>Anticiper, reconnaître, évaluer et maîtriser les risques professionnels et environnementaux, avec une démarche rigoureuse et adaptée au terrain.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="page-intro">
          <h2>Une expertise, un enjeu, une réponse adaptée.</h2>
          <p>Explorez nos domaines d’intervention et découvrez les approches, les risques évalués et les méthodes présentées par EHS LYNX AFRIK.</p>
        </div>
        <div className="expertise-index-list">
          {services.map((service) => {
            const pic = illustrationFor(service.slug);
            return <Link className="expertise-index-card" href={`/expertises/${service.slug}`} key={service.slug}>
              <div className="expertise-index-img">
                {pic ? <Image src={pic.src} alt="" width={pic.width} height={pic.height} sizes="(max-width: 650px) 105px, 145px" data-fit={pic.fit} /> : <BookOpen className="expertise-index-illustration" size={48} strokeWidth={1.5} aria-hidden="true" />}
              </div>
              <div className="expertise-index-copy">
                <span className="expertise-index-n">{service.number} / 06</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ArrowUpRight className="expertise-index-arrow" size={19} aria-hidden="true" />
              </div>
            </Link>;
          })}
        </div>
      </div>
    </section>
    <section className="page-callout">
      <div className="container">
        <h2>Un besoin spécifique à évaluer ?</h2>
        <Link className="btn btn-lime" href="/contact">Présenter votre projet <ArrowRight size={17} aria-hidden="true"/></Link>
      </div>
    </section>
  </>;
}