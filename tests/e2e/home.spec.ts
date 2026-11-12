import { test, expect } from '@playwright/test';

test('homepage presents the three business pillars', async ({page}) => {
  await page.goto('/');
  await expect(page.getByRole('heading',{level:1})).toContainText('Mieux comprendre les risques');
  await page.getByRole('button',{name:'Diapositive suivante'}).click();
  await expect(page.getByRole('heading',{level:1})).toContainText('La qualité de l’air intérieur');
  await page.getByRole('button',{name:'Afficher : MESURES DU BRUIT ET DES VIBRATIONS'}).click();
  await expect(page.getByRole('heading',{level:1})).toContainText('Mesurer avec précision');
  await expect(page.getByRole('link',{name:'Boutique',exact:true}).first()).toHaveAttribute('href', 'https://www.lynxafrik.shop/');
  await expect(page.getByRole('heading',{name:'Des fabricants de référence'})).toBeVisible();
  await expect(page.getByRole('link',{name:/Découvrir la boutique/})).toHaveAttribute('href', 'https://www.lynxafrik.shop/');
  await expect(page.getByText('INSTRUMENTATION PROFESSIONNELLE')).toHaveCount(0);
  await expect(page.getByText('LYNX ACADEMY').first()).toBeVisible();
});

test('quote cart adds a selected product', async ({page}) => {
  await page.goto('/equipements');
  await page.getByRole('button',{name:/Ajouter/}).first().click();
  await expect(page.getByRole('dialog',{name:'Demande de devis'})).toBeVisible();
  await expect(page.getByText('SV 104A').last()).toBeVisible();
});

test('health endpoint is available', async ({request}) => {
  const response=await request.get('/api/health');
  expect(response.status()).toBe(200);
  expect((await response.json()).status).toBe('ok');
});


test('hero slideshow advances automatically', async ({page}) => {
  await page.clock.install();
  await page.goto('/');
  await expect(page.getByRole('heading',{level:1})).toContainText('Mieux comprendre les risques');
  await page.clock.fastForward(7200);
  await expect(page.getByRole('heading',{level:1})).toContainText('La qualité de l’air intérieur');
});
