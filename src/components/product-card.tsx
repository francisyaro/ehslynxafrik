"use client";

import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Product } from "@/lib/data";
import { useQuote } from "./quote-provider";
import { ProductArt } from "./product-art";

export function ProductCard({product}:{product:Product}) {
  const { add } = useQuote();
  return <article className="product-card">
    <div className="product-image"><span className="product-brand">{product.brand}</span><ProductArt type={product.graphic}/></div>
    <div className="product-card-content"><span className="product-category">{product.category}</span><div className="product-headline"><Link href={`/equipements/${product.slug}`}><h3>{product.name}</h3></Link><Link href={`/equipements/${product.slug}`} aria-label={`Détails ${product.name}`} className="product-view"><ArrowUpRight size={19}/></Link></div><p>{product.summary}</p><div className="product-card-foot"><span>Prix sur devis</span><button type="button" onClick={() => add(product.slug)}>Ajouter <Plus size={17}/></button></div></div>
  </article>;
}
