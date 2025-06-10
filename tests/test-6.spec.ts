import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dashboard.foreman.mn/login/?next=/dashboard/miners/');
  await page.getByRole('textbox', { name: 'E-Mail' }).click();
  await page.getByRole('textbox', { name: 'E-Mail' }).fill('masanori@notimedia.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('AlfaGamma89@');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Table' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download CSV' }).click();
  const download = await downloadPromise;
  await download.saveAs('C:/Users/turky/Documents/Trabajo mycros/IA proyecto/IAMiners/main/csv/' + 'maquinas_con_errores.csv');
});