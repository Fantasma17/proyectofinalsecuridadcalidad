import { test, expect } from "@playwright/test";

test("Votar por el modelo Diablo (usuario autenticado)", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  await page.waitForSelector('input[placeholder="Login"]', { timeout: 15000 });
  await page.waitForSelector('input[type="password"]', { timeout: 15000 });

  await page.fill('input[placeholder="Login"]', "saulycermeño"); // Sauly Cermeño
  await page.fill('input[type="password"]', "Estefania100."); // Estefania Cermeño

  await page.click('button.btn-success');

  await expect(page.locator('a[href="/profile"]')).toBeVisible({ timeout: 10000 });

  await page.click('img[title="Lamborghini"]');
  await page.click('text=Diablo');

  await page.fill('#comment', "Agrega un comentario random"); // Cambiar comentario si es necesario

  await page.click('button:has-text("Vote!")');

  await page.waitForLoadState("networkidle");

  const mensaje = page.locator(".card-text");
  await expect(mensaje).toHaveText("Thank you for your vote!", { timeout: 10000 });
});
