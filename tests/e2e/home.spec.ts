import { test, expect } from '@playwright/test';

test('homepage shows the seven new slides in supplied order', async ({page}) => {
  await page.goto('/');
  const h1=page.getByRole('heading',{level:1});
  const titles=[
    'Mesurer avec précision',
    'Les poussières organiques',
    'Sur les sites miniers',
    'Champs électromagnétiques',
    'Radioprotection',
    'Des bâtiments plus sains',
    'La prévention s’apprend',
  ];
  for(let i=0;i<titles.length;i++){
    await expect(h1).toContainText(titles[i]);
    if(i<titles.length-1)await page.getByRole('button',{name:'Diapositive suivante'}).click();
  }
  await expect(page.getByRole('link',{name:/Accéder à LYNX Academy/})).toHaveAttribute('href','https://lynx-academy.vercel.app/');
  await expect(page.getByRole('link',{name:'Boutique',exact:true}).first()).toHaveAttribute('href','https://www.lynxafrik.shop/');
  await expect(page.getByRole('heading',{name:'Des fabricants de référence'})).toBeVisible();
  await expect(page.getByRole('link',{name:/Découvrir la boutique/})).toHaveAttribute('href','https://www.lynxafrik.shop/');
  await expect(page.getByText('INSTRUMENTATION PROFESSIONNELLE')).toHaveCount(0);
  await expect(page.getByRole('img',{name:'Logo officiel LYNX Academy'})).toBeVisible();
  await expect(page.getByRole('link',{name:/Découvrir LYNX Academy/})).toHaveAttribute('href','https://lynx-academy.vercel.app/');
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


test('hero slideshow advances automatically after seven seconds', async ({page}) => {
  await page.clock.install();
  await page.goto('/');
  await expect(page.getByRole('heading',{level:1})).toContainText('Mesurer avec précision');
  await page.clock.fastForward(7200);
  await expect(page.getByRole('heading',{level:1})).toContainText('Les poussières organiques');
});

test('legacy Academy route redirects temporarily to dedicated portal',async ({request}) => {
  const response=await request.get('/academy',{maxRedirects:0});
  expect(response.status()).toBe(307);
  expect(response.headers()['location']).toBe('https://lynx-academy.vercel.app/');
});
