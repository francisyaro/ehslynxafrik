# EHS LYNX AFRIK — Refonte

Refonte institutionnelle Next.js, prévisualisation indépendante du domaine de production.

## Démarrer

```bash
npm install
npm run dev
```

## CI/CD

GitHub Actions vérifie le typage et la compilation sur les branches de travail. Le déploiement de prévisualisation est effectué sur Vercel. Aucun déploiement sur `ehslynxafrik.com` n'est autorisé sans validation.

## Architecture

Next.js App Router + TypeScript. L'intégration Supabase pour les formulaires commerciaux est à finaliser après création d'un projet Supabase dédié.
