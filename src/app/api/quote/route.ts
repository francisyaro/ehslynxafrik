import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validators";
import { products } from "@/lib/data";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { verifyHuman } from "@/lib/security";
import { readLimitedJson, RequestBodyError } from "@/lib/request-body";
export const runtime="nodejs";
export async function POST(req:Request){
  try {
    const parsed=quoteSchema.safeParse(await readLimitedJson(req));
    if(!parsed.success)return NextResponse.json({error:"Informations invalides"},{status:400});
    const q=parsed.data;
    if(q.website || new Set(q.items.map(item=>item.slug)).size!==q.items.length || q.items.some(item=>!products.some(p=>p.slug===item.slug)))return NextResponse.json({error:"Sélection invalide"},{status:400});
    if (process.env.NODE_ENV === "production" && !process.env.TURNSTILE_SECRET_KEY) {
      return NextResponse.json({error:"Formulaire temporairement indisponible"},{status:503});
    }
    if(!(await verifyHuman(q.turnstileToken)))return NextResponse.json({error:"Vérification anti-spam requise"},{status:400});
    const supabase=getSupabaseAdmin();
    if(!supabase)return NextResponse.json({error:"Service non configuré"},{status:503});
    const items=q.items.map(item=>{const p=products.find(p=>p.slug===item.slug)!;return {product_slug:p.slug,product_name:p.name,brand:p.brand,quantity:item.quantity};});
    const {data,error}=await supabase.rpc("create_quote_request",{request_payload:{full_name:q.fullName,email:q.email,organization:q.organization,phone:q.phone,country:q.country,message:q.message,items}});
    if(error){console.error("Quotation creation failed");return NextResponse.json({error:"Enregistrement impossible"},{status:500});}
    return NextResponse.json({reference:data as string},{status:201});
  }catch(error){
    if (error instanceof RequestBodyError) return NextResponse.json({error:error.message},{status:error.status});
    return NextResponse.json({error:"Requête invalide"},{status:400});
  }
}
