import { test, expect } from "@playwright/test";

test("Verificar límite de paginación en la sección 'Overall Rating'", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  await page.click('a[href="/overall"] img.img-fluid.center-block');

  await expect(page).toHaveURL(/\/overall/i);

  const botonSiguiente = page.locator('a.btn', { hasText: '»' });
  const textoPagina = page.locator('text=/page \\d+ of \\d+/i');

  for (let i = 0; i < 7; i++) {
    await botonSiguiente.click();
    await page.waitForTimeout(700);
  }

  const textoActual = await textoPagina.textContent();
  console.log(`📄 Texto de paginación actual: ${textoActual}`);

  const match = textoActual?.match(/page (\d+) of (\d+)/i);
  const paginaActual = match ? parseInt(match[1], 10) : NaN;
  const paginaMaxima = match ? parseInt(match[2], 10) : 5;

  if (paginaActual > paginaMaxima) {
    console.log(`❌ Error: El sistema permite avanzar hasta la página ${paginaActual}, excediendo el límite (${paginaMaxima}).`);
  } else {
    console.log(`✅ El sistema detuvo la paginación correctamente en la página ${paginaActual} de ${paginaMaxima}.`);
  }

  expect(paginaActual).toBeLessThanOrEqual(paginaMaxima);
});
