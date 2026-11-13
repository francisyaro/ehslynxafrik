"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TurnstileField } from "./turnstile-field";

export function ContactForm({kind="contact"}:{kind?:"contact"|"expertise"}) {
  const [status, setStatus] = useState<"idle"|"loading"|"sent"|"error"|"unavailable">("idle");
  const [token, setToken] = useState("");
  const [reference, setReference] = useState("");
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("loading");
    const fields = new FormData(event.currentTarget);
    try {
      const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind,fullName:fields.get("fullName"),email:fields.get("email"),organization:fields.get("organization"),phone:fields.get("phone"),country:fields.get("country"),subject:fields.get("subject"),message:fields.get("message"),website:fields.get("website"),turnstileToken:token})});
      if(response.status===503){setStatus("unavailable");return;}
      if(!response.ok) throw new Error("Transmission impossible");
      const result=(await response.json()) as {reference:string};
      setReference(result.reference);setStatus("sent");
    }catch{setStatus("error");}
  }
  if(status==="sent") return <div className="form-success" role="status"><CheckCircle2 size={52}/><h3>Votre message a bien été enregistré.</h3><p>Référence : <strong>{reference}</strong>. Merci de nous avoir contactés.</p><button type="button" className="btn btn-dark" onClick={()=>setStatus("idle")}>Envoyer un autre message <ArrowRight size={17}/></button></div>;
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><div className="field"><label htmlFor="c-name">Nom et prénom *</label><input id="c-name" name="fullName" required minLength={2} placeholder="Votre nom complet"/></div><div className="field"><label htmlFor="c-email">Adresse e-mail *</label><input id="c-email" name="email" type="email" required placeholder="nom@entreprise.com"/></div></div>
    <div className="form-row"><div className="field"><label htmlFor="c-organization">Entreprise / organisation</label><input id="c-organization" name="organization" placeholder="Nom de votre organisation"/></div><div className="field"><label htmlFor="c-phone">Téléphone</label><input id="c-phone" name="phone" placeholder="+226 ..."/></div></div>
    <div className="field"><label htmlFor="c-country">Pays</label><input id="c-country" name="country" defaultValue="Burkina Faso"/></div>
    <div className="field"><label htmlFor="c-subject">Votre besoin *</label><select id="c-subject" name="subject" required defaultValue=""><option value="" disabled>Choisissez le sujet de votre demande</option><option>Demande d’expertise / diagnostic</option><option>Équipements et devis</option><option>Formation / LYNX Academy</option><option>Partenariat / collaboration</option><option>Autre demande</option></select></div>
    <div className="field"><label htmlFor="c-message">Votre message *</label><textarea id="c-message" name="message" required minLength={15} rows={6} placeholder="Décrivez votre contexte, vos objectifs et les informations utiles..."/></div>
    <div className="sr-only"><label htmlFor="c-website">Ne pas remplir</label><input id="c-website" name="website" tabIndex={-1} autoComplete="off"/></div>
    <TurnstileField onToken={setToken}/>
    {status==="error" && <p className="form-error" role="alert">Un problème est survenu. Réessayez ou contactez-nous par e-mail.</p>}
    {status==="unavailable" && <p className="form-error" role="alert">L’enregistrement en ligne sera disponible après connexion de Supabase. En attendant : <a href="mailto:info@ehslynx.com">info@ehslynx.com</a>.</p>}
    <div className="form-bottom"><p>Vos informations sont utilisées pour répondre à votre demande.</p><button className="btn btn-dark" disabled={status==="loading"}>{status==="loading"?"Envoi...":"Envoyer ma demande"} <ArrowRight size={17}/></button></div>
  </form>;
}
