import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { verifyHuman } from "@/lib/security";
import { readLimitedJson, RequestBodyError } from "@/lib/request-body";
export const runtime="nodejs";
export async function POST(req:Request){
  try {
    const raw=await readLimitedJson(req);
    const parsed=contactSchema.safeParse(raw);
    if(!parsed.success)return NextResponse.json({error:"Informations incomplètes ou invalides"},{status:400});
    const data=parsed.data;
    if(data.website)return NextResponse.json({error:"Requête rejetée"},{status:400});
    if (process.env.NODE_ENV === "production" && !process.env.TURNSTILE_SECRET_KEY) {
      return NextResponse.json({error:"Formulaire temporairement indisponible"},{status:503});
    }
    if(!(await verifyHuman(data.turnstileToken)))return NextResponse.json({error:"Vérification anti-spam requise"},{status:400});
    const supabase=getSupabaseAdmin();
    if(!supabase)return NextResponse.json({error:"Service non configuré"},{status:503});
    const {data:stored,error}=await supabase.from("contact_requests").insert({kind:data.kind,full_name:data.fullName,email:data.email,organization:data.organization,phone:data.phone,country:data.country,subject:data.subject,message:data.message}).select("reference").single();
    if(error){console.error("Contact request insertion failed");return NextResponse.json({error:"Enregistrement impossible"},{status:500});}
    return NextResponse.json({reference:stored.reference},{status:201});
  }catch(error){
    if (error instanceof RequestBodyError) return NextResponse.json({error:error.message},{status:error.status});
    return NextResponse.json({error:"Requête invalide"},{status:400});
  }
}
