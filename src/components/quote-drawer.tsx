"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle2, Minus, Plus, Trash2, X } from "lucide-react";
import { products } from "@/lib/data";
import { useQuote } from "./quote-provider";
import { TurnstileField } from "./turnstile-field";

export function QuoteDrawer() {
  const { isOpen, close, items, update, remove, clear } = useQuote();
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error" | "unavailable">("idle");
  const [reference, setReference] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    if (!isOpen) return;
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [isOpen, close]);
  if (!isOpen) return null;
  const selected = items.map(item => ({ item, product: products.find(p => p.slug === item.slug) })).filter((entry): entry is { item: typeof items[number]; product: typeof products[number] } => Boolean(entry.product));
  const mailto = `mailto:info@ehslynx.com?subject=${encodeURIComponent("Demande de devis EHS LYNX AFRIK")}&body=${encodeURIComponent(`Bonjour,\nJe souhaite recevoir un devis pour :\n${selected.map(({item,product}) => `- ${product.brand} ${product.name} x ${item.quantity}`).join("\n")}\n\nMerci de me contacter.`)}`;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("loading");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/quote", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        kind:"quotation", fullName:data.get("fullName"),email:data.get("email"),organization:data.get("organization"),phone:data.get("phone"),country:data.get("country"),message:data.get("message"),website:data.get("website"),turnstileToken:token,items
      })});
      if (response.status === 503) { setStatus("unavailable"); return; }
      if (!response.ok) throw new Error("Erreur lors de la transmission");
      const payload = (await response.json()) as {reference:string};
      setReference(payload.reference); setStatus("sent"); clear();
    } catch { setStatus("error"); }
  }
  return <div className="drawer-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) close(); }}>
    <aside className="quote-drawer" role="dialog" aria-modal="true" aria-label="Demande de devis">
      <div className="drawer-head"><div><span className="eyebrow">VOTRE SÉLECTION</span><h2>Demande de devis</h2></div><button className="icon-button" aria-label="Fermer" onClick={close}><X size={23}/></button></div>
      {status === "sent" ? <div className="success-panel"><CheckCircle2 size={46}/><h3>Demande enregistrée.</h3><p>Votre référence est <strong>{reference}</strong>. Notre équipe pourra traiter votre demande.</p><button className="btn btn-dark" onClick={close}>Fermer <ArrowRight size={17}/></button></div> : <div className="drawer-scroll">
        {!selected.length ? <div className="cart-empty"><span className="empty-icon">↗</span><h3>Votre sélection est vide.</h3><p>Parcourez nos équipements et ajoutez les références qui vous intéressent.</p><Link className="btn btn-dark" href="/equipements" onClick={close}>Explorer les équipements <ArrowRight size={16}/></Link></div> : <>
          <div className="cart-items">{selected.map(({item,product}) => <div className="cart-row" key={item.slug}><div className="cart-thumb"><span>{product.brand.slice(0,3)}</span></div><div className="cart-row-content"><strong>{product.name}</strong><small>{product.brand} · {product.category}</small><div className="quantity"><button type="button" aria-label="Diminuer la quantité" onClick={() => update(item.slug,item.quantity-1)}><Minus size={13}/></button><span>{item.quantity}</span><button type="button" aria-label="Augmenter la quantité" onClick={() => update(item.slug,item.quantity+1)}><Plus size={13}/></button></div></div><button className="cart-delete" type="button" aria-label={`Retirer ${product.name}`} onClick={() => remove(item.slug)}><Trash2 size={17}/></button></div>)}</div>
          <p className="drawer-note">Renseignez vos coordonnées pour recevoir une proposition adaptée à vos besoins.</p>
          <form onSubmit={submit} className="drawer-form"><div className="field"><label htmlFor="q-name">Nom et prénom *</label><input id="q-name" name="fullName" required minLength={2} placeholder="Votre nom complet"/></div><div className="field"><label htmlFor="q-org">Entreprise / organisation *</label><input id="q-org" name="organization" required minLength={2} placeholder="Nom de votre organisation"/></div><div className="field"><label htmlFor="q-email">Email professionnel *</label><input id="q-email" type="email" name="email" required placeholder="nom@entreprise.com"/></div><div className="form-row"><div className="field"><label htmlFor="q-phone">Téléphone *</label><input id="q-phone" name="phone" required minLength={5} placeholder="+226 ..."/></div><div className="field"><label htmlFor="q-country">Pays *</label><input id="q-country" name="country" required defaultValue="Burkina Faso"/></div></div><div className="field"><label htmlFor="q-message">Précisions</label><textarea id="q-message" name="message" rows={3} placeholder="Quantités, utilisation prévue, contraintes techniques..."/></div><div className="sr-only"><label htmlFor="q-website">Ne pas remplir</label><input name="website" id="q-website" tabIndex={-1} autoComplete="off"/></div><TurnstileField onToken={setToken}/>
            {status === "error" && <p className="form-error" role="alert">La demande n’a pas été enregistrée. Réessayez ou contactez-nous directement.</p>}
            {status === "unavailable" && <p className="form-error" role="alert">Le formulaire attend la connexion Supabase. Vous pouvez utiliser le lien e-mail ci-dessous.</p>}
            <button className="btn btn-lime btn-full" type="submit" disabled={status === "loading"}>{status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"} <ArrowRight size={17}/></button>
            <a href={mailto} className="cart-email">Ou envoyer la sélection par e-mail ↗</a>
          </form>
        </>}
      </div>}
    </aside>
  </div>;
}
