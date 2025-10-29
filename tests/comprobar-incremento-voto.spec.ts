import { test, expect } from "@playwright/test";

test("El contador de votos se incrementa al votar por un auto", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  await page.waitForSelector('input[placeholder="Login"]');
  await page.waitForSelector('input[type="password"]');
  await page.fill('input[placeholder="Login"]', "cermenosauly8@gmail.com");
  await page.fill('input[type="password"]', "sauly987Añ*");
  await page.click('button.btn-success');
  await expect(page.locator('a[href="/profile"]')).toBeVisible();

  await page.click('img[title="Lamborghini"]');
  await page.click('text=Diablo');

  const votosLocator = page.locator('h4 strong');
  const votosAntesTexto = await votosLocator.textContent();
  const votosAntes = parseInt(votosAntesTexto?.trim() || "0", 10);
  console.log("🔢 Votos antes del voto:", votosAntes);

  await page.fill('#comment', "El mejor auto");
  await page.click('button:has-text("Vote!")');
  await page.waitForLoadState("networkidle");

  const mensaje = page.locator(".card-text");
  await expect(mensaje).toHaveText("Thank you for your vote!", { timeout: 10000 });

  const votosDespuesTexto = await votosLocator.textContent();
  const votosDespues = parseInt(votosDespuesTexto?.trim() || "0", 10);
  console.log("🔢 Votos después del voto:", votosDespues);

  expect(votosDespues).toBe(votosAntes + 1);
});
