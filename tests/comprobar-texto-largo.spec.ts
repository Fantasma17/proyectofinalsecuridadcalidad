import { test, expect } from "@playwright/test";

test("Validar mensaje de error cuando el comentario excede el límite permitido", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  await page.fill('input[placeholder="Login"]', "cermenosauly8@gmail.com");
  await page.fill('input[type="password"]', "sauly987Añ*");
  await page.click('button.btn-success');
  await expect(page.locator('a[href="/profile"]')).toBeVisible();

  await page.click('img[title="Lamborghini"]');
  await page.click('text=Diablo');

  const comentarioLargo = "Mensaje Largo".repeat(1500);
  await page.fill('#comment', comentarioLargo);

  await page.click('button:has-text("Vote!")');

  const alerta = page.locator('.alert-danger');
  await expect(alerta).toHaveText("comment is too long");
});
