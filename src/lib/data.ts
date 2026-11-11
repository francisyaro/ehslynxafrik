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
  { slug: "hygiene-industrielle", number: "01", icon: "activity", title: "Hygiène industrielle", description: "Identifier, mesurer et maîtriser les expositions qui affectent la santé au travail.", details: "Évaluations de l’exposition au bruit, aux vibrations et aux agents chimiques ou physiques, études de poste et appui à la prévention." },
  { slug: "hygiene-environnementale", number: "02", icon: "leaf", title: "Hygiène environnementale", description: "Comprendre les impacts environnementaux pour agir avec méthode et précision.", details: "Évaluations environnementales, surveillance de paramètres physiques et chimiques et accompagnement de la maîtrise des risques." },
  { slug: "qualite-environnement-interieur", number: "03", icon: "wind", title: "Qualité de l’air intérieur", description: "Évaluer les environnements intérieurs au service de la santé et du confort.", details: "Mesure et interprétation de paramètres de qualité de l'air et de confort dans les locaux professionnels et collectifs." },
  { slug: "management-et-prevention", number: "04", icon: "shield", title: "Management & prévention", description: "Structurer une démarche de prévention durable et adaptée à votre organisation.", details: "Appui aux systèmes de management, diagnostics et amélioration des pratiques de prévention des risques." },
  { slug: "analyse-toxicologique", number: "05", icon: "flask", title: "Analyse toxicologique", description: "Caractériser les polluants présents dans les milieux professionnels et environnementaux.", details: "Conception de campagnes de prélèvement et orientation vers des analyses adaptées selon les besoins et moyens disponibles." },
  { slug: "formation-professionnelle", number: "06", icon: "book", title: "Formation & compétences", description: "Faire progresser les compétences de vos équipes avec LYNX Academy.", details: "Formations professionnelles, sensibilisation aux risques et développement des compétences techniques." }
];

export const sectors = ["Mines & carrières", "Industrie & énergie", "BTP & infrastructures", "Institutions & ONG", "Santé & laboratoires", "Transport & logistique"];

export const learningOffers = [
  { kind: "FORMATIONS", title: "Hygiène industrielle", description: "Comprendre les expositions et renforcer les pratiques de prévention.", icon: "shield" },
  { kind: "WEBINAIRES", title: "Échanges d’experts", description: "Explorer les méthodes, les enjeux et les innovations du secteur.", icon: "video" },
  { kind: "RESSOURCES", title: "Bibliothèque métier", description: "Accéder à des références utiles pour approfondir vos connaissances.", icon: "book" }
];
