import {NextResponse} from "next/server";
export async function GET(){return NextResponse.json({status:"ok",application:"ehs-lynx-afrik",environment:"preview"});}
