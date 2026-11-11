"use client";
import { Plus } from "lucide-react";
import { useQuote } from "./quote-provider";
export function AddToQuote({slug}:{slug:string}){const{add}=useQuote();return <button className="btn btn-dark" type="button" onClick={()=>add(slug)}>Ajouter à ma demande de devis <Plus size={18}/></button>}
