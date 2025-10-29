import { test, expect } from "@playwright/test";

test("Verificar que el botón « esté deshabilitado en la primera página de la sección 'Overall Rating'", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  await page.click('a[href="/overall"] img.img-fluid.center-block');
  await expect(page).toHaveURL(/\/overall/i);

  const botonAnterior = page.locator('a.btn', { hasText: '«' });
  await expect(botonAnterior).toBeVisible();

  const clases = await botonAnterior.getAttribute("class");
  console.log(`🔍 Clases del botón con «: ${clases}`);

  if (clases?.includes("disabled")) {
    console.log("✅ El botón « está deshabilitado correctamente en la página 1.");
  } else {
    console.log("❌ El botón « NO está deshabilitado en la página 1 (debería estarlo).");
  }

  expect(clases).toContain("disabled");
});
