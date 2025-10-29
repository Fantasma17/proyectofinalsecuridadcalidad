import { test, expect } from "@playwright/test";

test("Verificar que no se pueda votar otra vez", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  await page.waitForSelector('input[placeholder="Login"]');
  await page.waitForSelector('input[type="password"]');
  await page.fill('input[placeholder="Login"]', "cermenosauly8@gmail.com");
  await page.fill('input[type="password"]', "sauly987Añ*");
  await page.click('button.btn-success');

  await page.click('img[title="Lamborghini"]');
  await page.click('text=Diablo');
  
  const mensaje = page.locator(".card-text");
  await expect(mensaje).toHaveText("Thank you for your vote!", { timeout: 10000 });
});
