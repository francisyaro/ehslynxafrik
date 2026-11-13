# Mise à jour du carrousel — 13 novembre 2026

## Portée
Remplacement des trois anciennes diapositives de la page d’accueil par **sept photographies fournies**, dans l’ordre de réception. Conservation du thème clair, des quatre logos de partenaires, de la passerelle boutique et de la section LYNX Academy.

## Nouvel ordre
1. Métrologie professionnelle — « Mesurer avec précision. Prévenir avec confiance. » — [Boutique](https://www.lynxafrik.shop/)
2. Poussières organiques — « Les poussières organiques. Un risque à maîtriser. » — Hygiène industrielle
3. Poussières minérales — « Sur les sites miniers, chaque exposition compte. » — Hygiène industrielle
4. Rayonnements non ionisants — « Champs électromagnétiques. Comprendre les expositions. » — Contact
5. Rayonnements ionisants — « Radioprotection. La vigilance repose sur la mesure. » — Contact
6. Environnement intérieur — « Des bâtiments plus sains. Des occupants mieux protégés. » — Qualité de l’environnement intérieur
7. Formation & compétences — « La prévention s’apprend. Et se transmet sur le terrain. » — [LYNX Academy](https://lynx-academy.vercel.app/)

## Fonctionnement
- Défilement automatique toutes les **7 secondes** hors survol, focus et préférence de réduction des animations.
- Flèches et indicateurs permettant de choisir chaque diapositive.
- Textes adaptés aux images ; CTA vers les pages du site ou les plateformes partenaires.
- Navigation du carrousel adaptée aux écrans de petite largeur.
- Médias situés dans `public/images/carrousel/`.
- La photo source des rayonnements ionisants a été convertie en WebP pour réduire le poids ; les six autres images WebP ont été conservées.
- Aucune modification du domaine de production ou des données Supabase.

## Contrôles prévus
- Compilation Next.js et vérification TypeScript.
- Vérification du rendu HTTP et des sept médias sur la prévisualisation Vercel.
- Test de navigation des sept slides et test de changement automatique.
