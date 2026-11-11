"use client";

import { useEffect, useRef } from "react";

declare global { interface Window { turnstile?: { render:(element:HTMLElement, options:{sitekey:string; callback:(token:string)=>void; "expired-callback":()=>void})=>string; remove:(id:string)=>void } } }
export function TurnstileField({onToken}:{onToken:(token:string)=>void}) {
  const slot = useRef<HTMLDivElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  useEffect(() => {
    if (!siteKey || !slot.current) return;
    let cancelled = false;
    let widgetId: string | null = null;
    const render = () => {
      if (cancelled || !slot.current || !window.turnstile || widgetId) return;
      widgetId = window.turnstile.render(slot.current, { sitekey: siteKey, callback: onToken, "expired-callback": () => onToken("") });
    };
    const scriptId = "ehs-turnstile-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) { script = document.createElement("script"); script.id=scriptId; script.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"; script.async=true; document.head.appendChild(script); }
    script.addEventListener("load",render);
    render();
    const observer = new MutationObserver(render);
    observer.observe(document.head,{childList:true});
    return () => { cancelled = true; script?.removeEventListener("load",render); observer.disconnect(); if(widgetId) window.turnstile?.remove(widgetId); };
  }, [siteKey, onToken]);
  if (!siteKey) return null;
  return <div ref={slot} className="turnstile-slot" aria-label="Vérification anti-spam"/>;
}
