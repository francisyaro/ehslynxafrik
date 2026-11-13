# EHS LYNX AFRIK — Refonte Next.js

Site institutionnel, catalogue B2B et LYNX Academy. Réalisation Next.js 16, TypeScript, Supabase PostgreSQL, GitHub Actions et Vercel.

## Démarrage local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Les formulaires fonctionnent seulement après la mise en place d’une base Supabase dédiée, des variables d’environnement **côté serveur** et de Cloudflare Turnstile.

## Tests

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Déploiement

La branche `feature/refonte-nextjs` permet de valider le design, les pages et la qualité via une prévisualisation Vercel. La branche `main` et le domaine `ehslynxafrik.com` ne doivent pas être déployés avant validation des migrations, tests et contrôles de sécurité. Le CI GitHub Actions bloque les déploiements de production jusqu’à configuration et autorisation explicites.

Les contenus/produits seront enrichis avec les documents officiels et les autorisations des fabricants avant mise en production.
