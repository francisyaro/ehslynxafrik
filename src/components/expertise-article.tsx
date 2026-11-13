import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, ClipboardList } from "lucide-react";
import { services } from "@/lib/data";
import type { ExpertiseBlock, ExpertiseIllustration, ExpertiseLongform } from "@/lib/expertise-content";

function TechnicalFigure({ image, compact = false }: { image: ExpertiseIllustration; compact?: boolean }) {
  return (
    <figure className={`expertise-figure ${compact ? "expertise-figure-hero" : "expertise-figure-inline"}`}>
      <div className={`expertise-figure-surface ${image.fit === "contain" ? "expertise-figure-contain" : ""}`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={compact ? "(max-width: 940px) 100vw, 46vw" : "(max-width: 940px) 100vw, 740px"}
          priority={compact}
        />
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

function TechnicalBlock({ block }: { block: ExpertiseBlock }) {
  if (block.type === "paragraph") return <p className="expertise-paragraph">{block.text}</p>;
  if (block.type === "emphasis") return <p className="expertise-lead-statement">{block.text}</p>;
  if (block.type === "subheading") return <h3 className="expertise-subheading">{block.text}</h3>;
  if (block.type === "image") return <TechnicalFigure image={block.image} />;
  if (block.type === "steps") {
    return <ol className="expertise-steps">{block.items.map((item, index) => {
      const split = item.indexOf(" : ");
      return <li key={`${index}-${item.slice(0, 20)}`}>
        <span className="expertise-step-number">{String(index + 1).padStart(2, "0")}</span>
        <span>{split > 0 ? <><strong>{item.slice(0, split)}</strong> : {item.slice(split + 3)}</> : item}</span>
      </li>;
    })}</ol>;
  }
  if (block.type === "list") return <ul className={`expertise-list-bullets ${block.columns === 2 ? "expertise-list-bullets-split" : ""}`}>
    {block.items.map((item, index) => <li key={`${index}-${item.slice(0, 20)}`}>{item}</li>)}
  </ul>;
  return null;
}

export function ExpertiseArticle({ content }: { content: ExpertiseLongform }) {
  const idx = services.findIndex(service => service.slug === content.slug);
  const next = services[(idx + 1) % services.length];
  return <>
    <section className="expertise-feature-hero">
      <div className={`container expertise-feature-grid ${content.heroImage ? "expertise-feature-has-image" : "expertise-feature-has-tags"}`}>
        <div className="expertise-feature-copy">
          <Link href="/expertises" className="expertise-feature-back"><ArrowLeft size={16} aria-hidden="true"/> Toutes nos expertises</Link>
          <span className="expertise-feature-overline"><span>{String(idx + 1).padStart(2, "0")} / 06</span> {content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
          <div className="expertise-feature-actions">
            <a className="expertise-feature-primary" href="#contenu-expertise">Explorer cette expertise <ChevronDown size={17} aria-hidden="true"/></a>
            <Link href="/contact" className="expertise-feature-secondary">Nous consulter <ArrowUpRight size={17} aria-hidden="true"/></Link>
          </div>
        </div>
        <div className="expertise-feature-media">
          {content.heroImage ? <TechnicalFigure image={content.heroImage} compact /> :
            <div className="expertise-feature-tags" aria-label="Domaines concernés">
              <div className="expertise-feature-tags-label">DOMAINES D’INTERVENTION</div>
              <div className="expertise-feature-tags-grid">{content.heroTags?.map(tag => <span key={tag}><CheckCircle2 size={19} aria-hidden="true"/>{tag}</span>)}</div>
              <div className="expertise-feature-tags-foot">EHS LYNX AFRIK <span>·</span> Expertise et prévention</div>
            </div>}
        </div>
      </div>
    </section>
    <section className="expertise-feature-body" id="contenu-expertise">
      <div className="container expertise-feature-body-grid">
        <aside className="expertise-feature-sidebar" aria-label="Sommaire et contact">
          <div className="expertise-feature-sticky">
            <nav className="expertise-feature-toc" aria-label="Sommaire de la page">
              <span className="expertise-feature-toc-label"><ClipboardList size={16} aria-hidden="true"/> SUR CETTE PAGE</span>
              {content.sections.map((section,i) => <a href={`#${section.id}`} key={section.id}><span>{String(i+1).padStart(2,"0")}</span>{section.title}</a>)}
            </nav>
            <div className="expertise-feature-consult">
              <span>UNE QUESTION SUR VOTRE SITUATION ?</span>
              <p>Échangeons sur vos besoins d’évaluation et de prévention.</p>
              <Link href="/contact">Demander une expertise <ArrowUpRight size={17} aria-hidden="true"/></Link>
            </div>
          </div>
        </aside>
        <article className="expertise-feature-article" aria-label={content.title}>
          {content.sections.map((section,i) => <section className="expertise-content-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
            <div className="expertise-content-head"><span>{String(i+1).padStart(2,"0")}</span><h2 id={`${section.id}-title`}>{section.title}</h2></div>
            <div className="expertise-content-copy">{section.blocks.map((block,j)=><TechnicalBlock block={block} key={`${section.id}-${j}`}/>)}</div>
          </section>)}
          <nav className="expertise-feature-next" aria-label="Découvrir une autre expertise">
            <div><span>POURSUIVRE LA DÉCOUVERTE</span><h2>Une approche complémentaire.</h2></div>
            <Link href={`/expertises/${next.slug}`}>{next.title} <ArrowRight size={19} aria-hidden="true"/></Link>
          </nav>
        </article>
      </div>
    </section>
  </>;
}