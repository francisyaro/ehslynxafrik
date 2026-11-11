import type { Product } from "@/lib/data";

export function ProductArt({ type, small = false }: { type: Product["graphic"]; small?: boolean }) {
  return (
    <div className={`product-art art-${type}${small ? " product-art-small" : ""}`} aria-hidden="true">
      <div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" />
      <svg viewBox="0 0 300 260" fill="none" role="presentation">
        <ellipse cx="151" cy="225" rx="84" ry="12" fill="#145652" opacity=".13" />
        {type === "dosimeter" && <>
          <rect x="112" y="58" width="77" height="153" rx="18" fill="#203F45" stroke="#395B60" strokeWidth="4" />
          <rect x="121" y="68" width="59" height="18" rx="7" fill="#D0E8CF" />
          <rect x="122" y="96" width="57" height="62" rx="7" fill="#CDE9D3" />
          <rect x="130" y="105" width="40" height="10" rx="2" fill="#81A89E" />
          <path d="M129 140h40M129 147h28" stroke="#5C9890" strokeWidth="3" />
          <circle cx="150" cy="180" r="10" fill="#99D2A1" /><circle cx="131" cy="199" r="4" fill="#90C4A3" /><circle cx="169" cy="199" r="4" fill="#90C4A3" />
          <rect x="133" y="48" width="34" height="15" rx="5" fill="#81A9AA" />
          <path d="M150 48v-14" stroke="#A0D2B8" strokeWidth="5" strokeLinecap="round" /><circle cx="150" cy="29" r="7" fill="#B0DCAA" />
        </>}
        {type === "meter" && <>
          <path d="M150 60V28" stroke="#2B5256" strokeWidth="8" strokeLinecap="round" />
          <circle cx="150" cy="27" r="15" fill="#263F43" stroke="#517D79" strokeWidth="3" />
          <rect x="110" y="66" width="82" height="150" rx="19" fill="#F4CE4A" stroke="#C4A83C" strokeWidth="4" />
          <rect x="119" y="87" width="64" height="65" rx="7" fill="#CDE6CB" />
          <path d="M127 126h48M127 136h31" stroke="#63948F" strokeWidth="4" />
          <text x="128" y="115" fill="#1E5559" fontSize="22" fontFamily="Arial" fontWeight="700">64.2</text>
          <circle cx="151" cy="177" r="12" fill="#1D5558"/><circle cx="128" cy="199" r="5" fill="#24545D"/><circle cx="174" cy="199" r="5" fill="#24545D"/>
        </>}
        {type === "sampler" && <>
          <path d="M122 59V40h55v19" stroke="#376E6F" strokeWidth="10" strokeLinecap="round" />
          <rect x="95" y="58" width="111" height="160" rx="17" fill="#2C646E" stroke="#3E7376" strokeWidth="4" />
          <rect x="106" y="76" width="89" height="58" rx="8" fill="#D6E9D4" />
          <text x="116" y="112" fill="#34726C" fontSize="24" fontFamily="Arial" fontWeight="700">02.4</text>
          <rect x="115" y="148" width="72" height="12" rx="5" fill="#174652" /><circle cx="121" cy="186" r="11" fill="#A7CD9D"/><circle cx="153" cy="186" r="11" fill="#8EBA9B"/><circle cx="185" cy="186" r="11" fill="#A7CD9D" />
          <path d="M151 43V27c0-17 13-22 28-16" stroke="#76B5A3" strokeWidth="4" strokeLinecap="round" />
        </>}
        {type === "fit" && <>
          <rect x="88" y="63" width="126" height="152" rx="15" fill="#E3EBDA" stroke="#B3C7B4" strokeWidth="4" />
          <rect x="105" y="80" width="92" height="61" rx="7" fill="#28616B" />
          <path d="M113 116c18-14 29-2 43-10 14-8 23-15 32-9" stroke="#A5EE80" strokeWidth="3" strokeLinecap="round" />
          <path d="M117 174h72M117 184h55" stroke="#AFC2AF" strokeWidth="6" strokeLinecap="round" />
          <circle cx="178" cy="197" r="9" fill="#76B29D" />
          <path d="M215 90c35-6 50 12 39 36M254 126c-6 17-15 18-20 33" stroke="#4C8787" strokeWidth="5" strokeLinecap="round" />
          <path d="M224 160h30v22h-30z" fill="#5D9B95" />
        </>}
      </svg>
      <span className="art-tick art-tick-a">+</span><span className="art-tick art-tick-b">+</span>
    </div>
  );
}
