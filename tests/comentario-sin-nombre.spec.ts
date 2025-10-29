import { test, expect } from "@playwright/test";

test("Validar que el usuario tenga nombre configurado antes de comentar", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  await page.fill('input[placeholder="Login"]', "cermenosauly8@gmail.com");
  await page.fill('input[type="password"]', "sauly987Añ*");
  await page.click('button.btn-success');
  await expect(page.locator('a[href="/profile"]')).toBeVisible();

  await page.click('img[title="Lamborghini"]');
  await page.click('text=Diablo');

  const comentario = `
Probando el campo vacio de autor
  `;
  await page.fill('#comment', comentario);
  await page.click('button:has-text("Vote!")');
  await page.waitForLoadState("networkidle");

  const comentarioTabla = page.locator('table tr').last();
  await expect(comentarioTabla).toBeVisible();

  const columnas = comentarioTabla.locator('td');
  const autor = await columnas.nth(1).textContent();
  const comentarioTexto = await columnas.nth(2).textContent();

  console.log("🧾 Autor:", autor?.trim());
  console.log("💬 Comentario:", comentarioTexto?.trim());

  if (!autor?.trim()) {
    console.warn(" BUG DETECTADO: El comentario se publicó sin nombre de autor.");
  }

  expect(autor?.trim()?.length).toBeGreaterThan(0);
});
