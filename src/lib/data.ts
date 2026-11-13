export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  summary: string;
  graphic: "dosimeter" | "meter" | "sampler" | "fit";
  details: string[];
  makerUrl: string;
};

export const products: Product[] = [
  {
    slug: "sv-104a", name: "SV 104A", brand: "SVANTEK", category: "Dosimétrie acoustique",
    summary: "Dosimètre individuel pour l’évaluation de l’exposition professionnelle au bruit.",
    graphic: "dosimeter", details: ["Mesure de l'exposition sonore", "Conçu pour les campagnes de dosimétrie", "Données transférables pour analyse"],
    makerUrl: "https://svantek.com/fr/produits/sv-104a-dosimetre-de-bruit-personnel/"
  },
  {
    slug: "sv-971a", name: "SV 971A", brand: "SVANTEK", category: "Sonométrie",
    summary: "Sonomètre de classe 1 destiné aux mesures acoustiques professionnelles.",
    graphic: "meter", details: ["Sonomètre de classe 1", "Mesures acoustiques sur le terrain", "Applications professionnelles et environnementales"],
    makerUrl: "https://svantek.com/"
  },
  {
    slug: "gilair-plus", name: "GilAir Plus", brand: "SENSIDYNE", category: "Prélèvement d’air",
    summary: "Pompe de prélèvement personnel pour les campagnes d’hygiène industrielle.",
    graphic: "sampler", details: ["Prélèvement d'air personnel", "Applications d'hygiène industrielle", "Plusieurs configurations possibles"],
    makerUrl: "https://sensidyne.com/product/gilair-plus/"
  },
  {
    slug: "quantifit-2", name: "Quantifit 2", brand: "OHD", category: "Protection respiratoire",
    summary: "Solution de contrôle d’ajustement quantitatif des protections respiratoires.",
    graphic: "fit", details: ["Essais d'ajustement respiratoire", "Programmes de protection respiratoire", "Évaluation professionnelle"],
    makerUrl: "https://ohdglobal.com/"
  }
];

export const services = [
  { slug: "hygiene-industrielle", number: "01", icon: "activity", title: "Hygiène industrielle", description: "Anticiper, reconnaître, évaluer et maîtriser les facteurs d’exposition professionnelle.", details: "Comprendre et maîtriser les risques d’exposition professionnelle afin de protéger la santé et le bien-être des travailleurs et de leurs communautés." },
  { slug: "qualite-environnement-interieur", number: "02", icon: "wind", title: "Qualité de l’environnement intérieur", description: "Identifier les sources de pollution et évaluer les paramètres de l’air dans les bâtiments.", details: "Identifier les sources de pollution de l’environnement intérieur pour définir les mesures de contrôle adéquates." },
  { slug: "hygiene-environnementale", number: "03", icon: "leaf", title: "Hygiène environnementale", description: "Surveiller les expositions communautaires aux facteurs physiques, chimiques et biologiques.", details: "Évaluer, corriger, contrôler et prévenir les facteurs environnementaux susceptibles d’affecter la santé des générations présentes et futures." },
  { slug: "management-et-prevention", number: "04", icon: "shield", title: "Management des systèmes intégrés", description: "Accompagner les organisations dans la conformité et le renforcement de leurs systèmes de management.", details: "Conseils et renforcement des performances des organisations dans leurs démarches de conformité réglementaire et de certifications internationales." },
  { slug: "analyse-toxicologique", number: "05", icon: "flask", title: "Analyse toxicologique des médias environnementaux", description: "Analyser les composés organiques et inorganiques dans les milieux environnementaux, en particulier l’air.", details: "Mobiliser des méthodes de référence en laboratoire pour les analyses toxicologiques des médias environnementaux." },
  { slug: "formation-professionnelle", number: "06", icon: "book", title: "Formation & compétences", description: "Faire progresser les compétences de vos équipes avec LYNX Academy.", details: "Formations professionnelles, sensibilisation aux risques et développement des compétences techniques." }
];

export const sectors = ["Mines & carrières", "Industrie & énergie", "BTP & infrastructures", "Institutions & ONG", "Santé & laboratoires", "Transport & logistique"];

export const learningOffers = [
  { kind: "FORMATIONS", title: "Hygiène industrielle", description: "Comprendre les expositions et renforcer les pratiques de prévention.", icon: "shield" },
  { kind: "WEBINAIRES", title: "Échanges d’experts", description: "Explorer les méthodes, les enjeux et les innovations du secteur.", icon: "video" },
  { kind: "RESSOURCES", title: "Bibliothèque métier", description: "Accéder à des références utiles pour approfondir vos connaissances.", icon: "book" }
];
