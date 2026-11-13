import { test, expect } from '@playwright/test';

const pages = [
  { slug: 'hygiene-industrielle', heading: 'Hygiène industrielle', image: 'hygiene-industrielle-soudage.webp', section: 'Risques physiques' },
  { slug: 'qualite-environnement-interieur', heading: 'Qualité de l’environnement intérieur', image: 'qualite-interieur-sources-pollution.webp', section: 'Méthodologie d’intervention' },
  { slug: 'hygiene-environnementale', heading: 'Hygiène environnementale', image: 'hygiene-environnementale-air-eau.webp', section: 'Suivi et analyse des expositions communautaires' },
  { slug: 'management-et-prevention', heading: 'Management des systèmes intégrés', image: 'management-hseq-iso.webp', section: 'Référentiels réglementaires et systèmes de management' },
  { slug: 'analyse-toxicologique', heading: 'Analyse toxicologique des médias environnementaux', image: 'analyse-toxicologique-laboratoire.webp', section: 'Importance des méthodes de référence en laboratoire' },
];
for (const item of pages) {
  test(`expertise ${item.slug} includes source content and embedded image`, async ({page}) => {
    await page.goto(`/expertises/${item.slug}`);
    await expect(page.getByRole('heading',{level:1})).toHaveText(item.heading);
    await expect(page.getByRole('heading',{name:item.section,exact:true})).toBeVisible();
    const img=page.locator(`img[src*="${item.image}"]`).first();
    await expect(img).toBeVisible();
    await expect(page.getByRole('navigation',{name:'Sommaire de la page'})).toHaveCount(1);
  });
}

test('expertise index displays the five updated fields in the requested order', async ({page}) => {
  await page.goto('/expertises');
  const titles=await page.locator('.expertise-index-copy h3').allTextContents();
  expect(titles.slice(0,5)).toEqual(pages.map(p=>p.heading));
});