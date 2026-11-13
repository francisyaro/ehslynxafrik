// Derived from the five EHS LYNX AFRIK Word documents provided for the refonte.
// Source wording is preserved; do not add unsupported technical or certification claims.
export type ExpertiseIllustration = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  fit: "cover" | "contain";
};
export type ExpertiseBlock =
  | { type: "paragraph" | "emphasis" | "subheading"; text: string }
  | { type: "list"; items: string[]; columns: number }
  | { type: "steps"; items: string[] }
  | { type: "image"; image: ExpertiseIllustration };
export type ExpertiseLongform = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  heroImage: ExpertiseIllustration | null;
  heroTags?: string[];
  sections: { id: string; title: string; blocks: ExpertiseBlock[] }[];
};

export const expertiseLongforms: ExpertiseLongform[] = [
  {
    "slug": "hygiene-industrielle",
    "title": "Hygiène industrielle",
    "eyebrow": "EXPOSITION PROFESSIONNELLE",
    "intro": "L’hygiène industrielle (HI) ou hygiène du travail est une discipline essentielle pour la prévention des maladies professionnelles. Son but est de comprendre et maîtriser les risques d’exposition professionnelle afin de protéger la santé et le bien-être des travailleurs et de leurs communautés .",
    "heroImage": {
      "src": "/expertises/hygiene-industrielle-soudage.webp",
      "alt": "Travailleur réalisant une opération de soudage dans un atelier avec dégagement de fumées.",
      "caption": "Situation de travail comportant des risques d’exposition aux fumées de soudage.",
      "width": 1400,
      "height": 500,
      "fit": "cover"
    },
    "sections": [
      {
        "id": "definition",
        "title": "Qu’est-ce que l’hygiène industrielle (HI) ou hygiène du travail ?",
        "blocks": [
          {
            "type": "paragraph",
            "text": "L’Association Américaine d’Hygiène Industrielle (AIHA) définit l’hygiène industrielle comme la science et l’art consacrés à l’anticipation, à la reconnaissance, à l’évaluation, à la maîtrise et à la confirmation de la protection contre les facteurs. environnemental survenant dans le lieu de travail ou à partir de celui-ci, susceptible de provoquer des maladies, une détérioration de la santé et du bien-être, ou un inconfort significatif parmi les travailleurs ou les citoyens de la communauté, provenant de sources chimiques , physiques et/ou biologiques."
          }
        ]
      },
      {
        "id": "pourquoi",
        "title": "Pourquoi l’hygiène industrielle ?",
        "blocks": [
          {
            "type": "emphasis",
            "text": "Une responsabilité légale et réglementaire, un devoir Social et Sociétal des entreprises, mais surtout une opportunité pour accroître les profits."
          },
          {
            "type": "paragraph",
            "text": "Dans tous les secteurs d’activité, sans exception, les matières premières, les processus de production et l’organisation du travail peuvent exposer les travailleurs à divers types de risques, pouvant conduire à des maladies professionnelles aiguës ou chroniques. Cela engage la responsabilité légale de l’entreprise tout en compromettant sa réputation et sa rentabilité."
          },
          {
            "type": "paragraph",
            "text": "Premièrement, les dispositions légales et réglementaires, tant nationales qu’internationales, exigeant des employeurs qu’ils assurent un environnement de travail et sain pour tous les employés, y compris les contractuels et les travailleurs temporaires."
          },
          {
            "type": "paragraph",
            "text": "Deuxièmement, la santé et le bien-être des employés sont doublement bénéfiques pour l’entreprise : non seulement ils diminuent l’absentéisme chronique et les congés maladie, améliorant ainsi la production et maximisant les bénéfices, mais ils permettent également d’économiser des ressources qui auraient été attribuées à la compensation des maladies professionnelles."
          },
          {
            "type": "paragraph",
            "text": "Enfin, la réputation d’une entreprise est un facteur déterminant de sa compétitivité internationale et de l’augmentation de ses profits."
          }
        ]
      },
      {
        "id": "risques-physiques",
        "title": "Risques physiques",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Nuisances sonores (Bruit).",
              "Températures extrêmes (ambiances chaudes, ambiances froides).",
              "Pressions extrêmes (environnements hypobares ou hyperbares).",
              "Vibrations corporelles.",
              "Vibrations des membres supérieurs",
              "Rayonnements ionisants : rayonnement corpusculaire (alpha et Beta), rayonnement électromagnétique (Gamma et X).",
              "Rayonnements non-ionisantes : rayons Ultra-Violet (UV), Infrarouge, Radiofréquences (RF) et rayonnements de basse fréquence (ELF), champs électromagnétiques (EMF).",
              "Luminance/éclairage des espaces de travail."
            ],
            "columns": 2
          }
        ]
      },
      {
        "id": "risques-chimiques",
        "title": "Risques chimiques",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Les métaux lourds des fumées de soudage ou de diesel et autres procédés industriels : Cadmium, Béryllium, oxyde de chrome VI, trioxyde de diarsenic, plomb, nickel, zinc, oxydes de nickel, Méthylmercure etc.",
              "Les solvants organiques : BTEX (benzène, toluène, éthylbenzène, xylène), formaldéhyde, Trichloréthylène (TCE), perchloroéthylène (PCE), Méthyl-éthyl-cétone (MEK) etc.",
              "Les gaz et inhalant : Monoxyde de carbone, Dioxyde de carbone, cyanure d’hydrogène, Radon, sulfure de dihydrogène (H2S), Ozone, Dioxyde de soufre, Oxydes d’azote, Composés Organiques Volatiles (COV), etc.",
              "Les poussières minérales : Silices, phosphates, silicates, l’amiante",
              "Les poussières organiques (Combustibles) : poussière de coton, poussière de grain, le sucre en poudre, etc.",
              "Les composés organiques polychlorés : biphényles polychlorés (BPC),",
              "Les hydrocarbures aromatiques polycycliques (HAP)",
              "Les pesticides"
            ],
            "columns": 1
          }
        ]
      },
      {
        "id": "risques-biologiques-et-ergonomiques",
        "title": "Risques biologiques et ergonomiques",
        "blocks": [
          {
            "type": "subheading",
            "text": "Risques biologiques"
          },
          {
            "type": "paragraph",
            "text": "Évaluation des expositions aux agents infectieux : Bactéries, Virus, Parasites, Fongites, Pollens"
          },
          {
            "type": "subheading",
            "text": "Risques ergonomiques"
          },
          {
            "type": "paragraph",
            "text": "Postures, mouvements répétitifs, charges lourdes pouvant conduire à des risques de Troubles Musculosquelettiques (TMS)."
          }
        ]
      },
      {
        "id": "mesures-de-controle",
        "title": "Mise en œuvre, suivi et évaluation des mesures de contrôle des risques",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Programme de surveillance des risques et d’évaluation des mesures de contrôle",
              "Évaluation des fonctionnalités du système de ventilation",
              "Programmes de protection respiratoire .",
              "Sélection des équipements de protection respiratoire adaptés",
              "Essais d’ajustement ou fit-testing (qualitatif et quantitatif) des appareils de protection respiratoire.",
              "Programmes de protection auditive",
              "Programme de prévention du stress thermique",
              "Analyses interprétation de données d’exposition environnementales.",
              "Cartographie des risques d’hygiène – identification de groupes d’exposition similaire (GES)",
              "Surveillance des espaces confinés à accès contrôlé"
            ],
            "columns": 1
          },
          {
            "type": "image",
            "image": {
              "src": "/expertises/hygiene-industrielle-equipe.webp",
              "alt": "Équipe en casques de protection examinant des documents techniques sur un chantier.",
              "caption": "Examen des situations de travail et suivi des mesures de prévention.",
              "width": 850,
              "height": 654,
              "fit": "cover"
            }
          }
        ]
      }
    ]
  },
  {
    "slug": "qualite-environnement-interieur",
    "title": "Qualité de l’environnement intérieur",
    "eyebrow": "QUALITÉ DE L’AIR DANS LES BÂTIMENTS",
    "intro": "L’air dans les bâtiments, qu’ils soient administratifs, commerciaux ou résidentiels, peut contenir un mélange complexe de polluants (voir image) pouvant affecter la productivité et surtout la santé des occupants avec différents effets :",
    "heroImage": null,
    "sections": [
      {
        "id": "enjeux-de-sante",
        "title": "Qualité de l’air dans les bâtiments : Un enjeu de santé publique",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Effets aigus : Céphalées, nausées, irritation des muqueuses, intoxications sévères voire mortelles, inconfort.",
              "Effets à court terme : Syndrome du bâtiment malsain (Sick Building Syndromes – SBS), maladies infectieuses (grippe, légionellose).",
              "Effets chroniques : Affections multifactorielles comme la bronchopneumopathie chronique obstructive (BPCO), l’asthme, le cancer, et les accidents cardio-vasculaires (AVC)."
            ],
            "columns": 1
          },
          {
            "type": "paragraph",
            "text": "Pourtant, il existe des solutions accessibles pour améliorer la qualité des espaces de travail, de résidence, de loisir, etc. Cependant, il est impératif d’identifier d’abord la source de pollution de l’environnement intérieur, afin de mettre en œuvre les mesures de contrôle adéquates."
          },
          {
            "type": "image",
            "image": {
              "src": "/expertises/qualite-interieur-sources-pollution.webp",
              "alt": "Schéma fourni illustrant différentes sources de contamination à l’intérieur des bâtiments, notamment les moisissures, allergènes, COV et radon.",
              "caption": "Principales sources de pollution dans un bâtiment — illustration figurant dans le document transmis.",
              "width": 1077,
              "height": 658,
              "fit": "contain"
            }
          }
        ]
      },
      {
        "id": "notre-reponse",
        "title": "La solution : EHS LYNX AFRIK",
        "blocks": [
          {
            "type": "paragraph",
            "text": "EHS LYNX AFRIK utilise une approche rigoureuse et des technologies avancées, pour vous aider à prévenir les maladies liées à la pollution de l’air et à promouvoir un cadre de vie et de travail optimal."
          },
          {
            "type": "subheading",
            "text": "Expert en qualité de l’air intérieur et outils de pointe"
          },
          {
            "type": "paragraph",
            "text": "EHS LYNX AFRIK dispose d’une équipe d’experts certifiés en hygiène industrielle (CIH) et en toxicologie industrielle et environnementale, ainsi que d’instruments de métrologie de dernière génération. Ces ressources permettent d’identifier les sources de pollution, de mesurer le niveau d’exposition, d’évaluer le niveau de risques, et de mettre en place des stratégies d’amélioration de la qualité de l’air intérieur dans les bâtiments résidentiels, commerciales et administratives."
          }
        ]
      },
      {
        "id": "methodologie",
        "title": "Méthodologie d’intervention",
        "blocks": [
          {
            "type": "paragraph",
            "text": "L’équipe d’investigation procède à plusieurs étapes pour évaluer et améliorer la qualité de l’air :"
          },
          {
            "type": "steps",
            "items": [
              "Interrogatoire : Comprendre la nature et la complexité de la problématique.",
              "Inspection visuelle : Recherche de moisissures, peinture de plomb craquelé, et amiante sur les édifices.",
              "Mesure des paramètres physiques : Température, humidité relative, nuisance sonore.",
              "Mesure des paramètres chimiques : CO2, CO, COVs, O3, SO2, NOx, CH2O, radon, fumée de tabac environnementale (ETS), et matières particulaires fines et ultrafines (PM10, PM5, PM1, PM0.1).",
              "Évaluation des systèmes de ventilation/aération : Mesure du débit minimal d’air neuf introduit par occupant.",
              "Dans les établissements publics (écoles, hôpitaux, etc.), l’ investigation pourrait s’intéresser également à la qualité de l’eau et du sol : Recherche de microorganismes (Legionella et autres coliformes), métaux lourds (plomb, mercure) et autres contaminants émergents (substances perfluoroalkylées et polyfluoroalkylées – PFAS)."
            ]
          }
        ]
      }
    ],
    "heroTags": [
      "Bâtiments administratifs",
      "Espaces commerciaux",
      "Habitations"
    ]
  },
  {
    "slug": "hygiene-environnementale",
    "title": "Hygiène environnementale",
    "eyebrow": "SANTÉ PUBLIQUE ENVIRONNEMENTALE",
    "intro": "L’hygiène environnementale est la branche de la santé publique qui a pour mais d’évaluer, de corriger, de contrôler et de prévenir les facteurs physiques, chimiques, biologiques, sociaux et psychologiques dans l’environnement qui peuvent affecter la santé des générations. présents et futurs. Les communautés sont exposées aux agents environnementaux dans l’air, l’eau, le sol et la nourriture.",
    "heroImage": null,
    "sections": [
      {
        "id": "enquetes-et-expositions",
        "title": "Enquêtes sur les expositions communautaires",
        "blocks": [
          {
            "type": "paragraph",
            "text": "EHS LYNX AFRIK dispose d’une équipe d’experts certifiés et des technologies avancées pour conduire des enquêtes sur les expositions communautaires, afin d’éclairer les prises de décisions par les pouvoirs publics"
          },
          {
            "type": "image",
            "image": {
              "src": "/expertises/hygiene-environnementale-air-eau.webp",
              "alt": "Deux vues de pollution environnementale : eau chargée et trafic routier dans un air brumeux.",
              "caption": "Expositions des communautés par l’eau et l’air.",
              "width": 639,
              "height": 183,
              "fit": "contain"
            }
          }
        ]
      },
      {
        "id": "suivi-communautaire",
        "title": "Suivi et analyse des expositions communautaires",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Surveillance des expositions aux polluants atmosphériques",
              "Surveillance des expositions aux agents physiques",
              "Surveillance des pollutions des eaux",
              "Élaboration et mise en œuvre des plans de gestion des déchets urbains"
            ],
            "columns": 1
          }
        ]
      },
      {
        "id": "recherche-en-sante-publique",
        "title": "Recherche en santé publique environnementale et expertise particulière",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Investigation des expositions communautaires : Analyse quantitative des risques microbiens (QMRA) et des risques chimiques (QCRA).",
              "Etudes épidémiologiques des expositions environnementales au niveau communautaire.",
              "Etudes épidémiologiques des expositions professionnelles.",
              "Évaluation des expositions aux contaminants émergents – tels que les substances perfluoroalkylées et polyfluoroalkylées (PFAS)."
            ],
            "columns": 1
          }
        ]
      }
    ],
    "heroTags": [
      "Air",
      "Eau",
      "Sol",
      "Nourriture"
    ]
  },
  {
    "slug": "management-et-prevention",
    "title": "Management des systèmes intégrés",
    "eyebrow": "CONFORMITÉ & SYSTÈMES DE MANAGEMENT",
    "intro": "Conseils et renforcement des performances des entreprises et organisations dans leurs démarches de conformité réglementaire et de certifications internationales.",
    "heroImage": {
      "src": "/expertises/management-hseq-iso.webp",
      "alt": "Schéma HSEQ associant la qualité ISO 9001, l’environnement ISO 14001 et la santé-sécurité ISO 45001.",
      "caption": "Les trois référentiels de management illustrés dans le document.",
      "width": 640,
      "height": 389,
      "fit": "contain"
    },
    "sections": [
      {
        "id": "referentiels",
        "title": "Référentiels réglementaires et systèmes de management",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mise en place, des performances des entreprises en conformité avec :"
          },
          {
            "type": "list",
            "items": [
              "les exigences légales et réglementaires nationales.",
              "les exigences légales OSHA (Occupational Safety and Heath Administration).",
              "la norme ISO 14001 : 2015 – système de management environnemental (PME).",
              "la norme ISO 45001 : 2018 – système de management de la santé et sécurité au travail (SST).",
              "la norme ISO 26000 : Responsabilité Sociale et Sociétale des Entreprises (RSE).",
              "Gouvernance Sociale des Entreprises (ESG).",
              "la norme ISO 9001 : 2015 – système de management de la qualité (SMQ)."
            ],
            "columns": 1
          }
        ]
      },
      {
        "id": "evaluations-et-actions",
        "title": "Évaluations environnementales et dispositifs de prévention",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Évaluations environnementales Phase 1 et Phase 2.",
              "Etudes d’impacts environnementaux et sociaux (EIES)",
              "Développement et déploiement des plans d’urgence.",
              "Développement, mise en place et audits des programmes de Biosécurité et biosureté.",
              "Enquêtes sur les accidents et incidents"
            ],
            "columns": 1
          }
        ]
      }
    ]
  },
  {
    "slug": "analyse-toxicologique",
    "title": "Analyse toxicologique des médias environnementaux",
    "eyebrow": "ANALYSES ENVIRONNEMENTALES",
    "intro": "Les services proposés comprennent des analyses toxicologiques des composés organiques et inorganiques dans les milieux environnementaux, et spécialement dans l’air.",
    "heroImage": {
      "src": "/expertises/analyse-toxicologique-laboratoire.webp",
      "alt": "Technicien en laboratoire manipulant une éprouvette et une pipette dans un environnement d’analyse chimique.",
      "caption": "Analyses toxicologiques des médias environnementaux en laboratoire.",
      "width": 1700,
      "height": 599,
      "fit": "cover"
    },
    "sections": [
      {
        "id": "methodes-de-reference",
        "title": "Importance des méthodes de référence en laboratoire",
        "blocks": [
          {
            "type": "paragraph",
            "text": "En matière d’évaluation des risques d’expositions professionnelles, les méthodes de référence pour le dosage toxicologique des médias environnementaux sont les méthodes du laboratoire. Ces méthodes permettent d’obtenir des analyses précises et fiables, cruciales pour la protection de la santé des travailleurs."
          }
        ]
      },
      {
        "id": "defis-regionaux",
        "title": "Défis en Afrique subsaharienne",
        "blocks": [
          {
            "type": "paragraph",
            "text": "L’Afrique subsaharienne, et plus spécifiquement l’Afrique de l’Ouest, dispose de très peu, voire pas du tout, de laboratoires accrédités capables de délivrer des analyses toxicologiques des médias environnementaux qui sont acceptées dans le cadre de l’évaluation des risques. professionnels. Cette absence d’infrastructures adéquates pose un défi majeur pour l’évaluation des risques d’exposition professionnelle dans la sous-région."
          }
        ]
      },
      {
        "id": "notre-reseau-international",
        "title": "La Solution : EHS LYNX AFRIK et son réseau international",
        "blocks": [
          {
            "type": "paragraph",
            "text": "EHS LYNX AFRIK, en collaboration avec son réseau de laboratoires accrédités en analyses environnementales aux USA, offre une solution complète à l’ensemble des parties impliquées dans la gestion des risques professionnels et environnementaux."
          },
          {
            "type": "paragraph",
            "text": "Les services proposés comprennent des analyses toxicologiques des composés organiques et inorganiques dans les milieux environnementaux, et spécialement dans l’air."
          },
          {
            "type": "paragraph",
            "text": "Cette collaboration permet de pallier l’absence de laboratoires accrédités dans la sous-région, contribuant ainsi à une meilleure évaluation et gestion des risques professionnels et à la protection de la santé des travailleurs."
          }
        ]
      }
    ]
  }
];