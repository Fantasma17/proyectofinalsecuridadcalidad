import { test, expect } from '@playwright/test';

test('Registro de nuevo usuario en Buggy Cars', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.setViewportSize({ width: 710, height: 735 });

  await page.click('text=Register');

  await page.fill('#username', 'saulycermeño.');
  await page.fill('#firstName', 'Sauly');
  await page.fill('#lastName', 'Cermeño');
  await page.fill('#password', 'Estefania100.');
  await page.fill('#confirmPassword', 'Estefania100.');

  await page.click('button:has-text("Register")');

  await expect(page.locator('.result')).toHaveText('Registration is successful');

  await expect(page.locator('.img-fluid')).toBeVisible();
});
