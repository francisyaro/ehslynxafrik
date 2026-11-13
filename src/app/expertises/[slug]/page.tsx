import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";
import { expertiseLongforms } from "@/lib/expertise-content";
import { ExpertiseArticle } from "@/components/expertise-article";

export function generateStaticParams(){return services.map(s=>({slug:s.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const service=services.find(s=>s.slug===slug);
  const longform=expertiseLongforms.find(s=>s.slug===slug);
  return {
    title: service?.title||"Expertise",
    description: longform?.intro.slice(0,160) || service?.description,
  };
}

export default async function ServiceDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const service=services.find(s=>s.slug===slug);
  if(!service)notFound();
  const longform=expertiseLongforms.find(s=>s.slug===slug);
  if(longform)return <ExpertiseArticle content={longform}/>;
  // Le sixième domaine (formation) conserve son contenu existant.
  return <>
    <section className="page-hero page-hero-dark"><div className="container">
      <Link className="back-link" href="/expertises"><ArrowLeft size={17}/> Toutes nos expertises</Link>
      <span className="eyebrow lime">EXPERTISE / {service.number}</span>
      <h1>{service.title}<em>.</em></h1><p>{service.description}</p>
    </div></section>
    <section className="section"><div className="container detail-layout">
      <div className="detail-main"><span className="eyebrow"><span className="eyebrow-line"/> NOTRE INTERVENTION</span>
        <h2>Une approche fondée sur le terrain et la méthode.</h2><p>{service.details}</p>
        <p>Chaque intervention débute par une compréhension précise de votre contexte : secteur, environnement, contraintes et objectifs. Un périmètre et une méthodologie adaptés sont proposés avant toute mission.</p>
        <div className="detail-checks"><span><CheckCircle2 size={18}/> Analyse du contexte et des besoins</span><span><CheckCircle2 size={18}/> Démarche de mesure appropriée</span><span><CheckCircle2 size={18}/> Conclusions et pistes d'action</span></div>
      </div><aside className="detail-aside"><span className="eyebrow">PARLONS DE VOTRE BESOIN</span><h3>Votre situation est unique.</h3><p>Décrivez votre contexte pour que notre équipe puisse étudier une proposition adaptée.</p><Link className="btn btn-lime btn-full" href="/contact">Demander une expertise <ArrowUpRight size={18}/></Link></aside>
    </div></section>
  </>;
}