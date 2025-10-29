import { test, expect } from "@playwright/test";

test("Verificar comportamiento incorrecto al hacer clic en la imagen del modelo Diablo", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 1920, height: 1050 });

  await page.click('img[title="Lamborghini"]');
  await page.click('text=Veneno');

  const imagenModelo = page.locator('a[href="/"] img.img-fluid');
  await expect(imagenModelo).toBeVisible();

  const urlAntes = page.url();
  await imagenModelo.click();
  await page.waitForLoadState("networkidle");

  const urlDespues = page.url();

  if (urlDespues === "https://buggy.justtestit.org/") {
    console.log(" Comportamiento incorrecto: al hacer clic en la imagen se redirige al inicio.");
  } else if (urlAntes === urlDespues) {
    console.log(" La imagen no se amplió ni cambió la vista.");
  } else {
    console.log(" La imagen se comportó correctamente (no redirigió al inicio).");
  }

  await page.waitForTimeout(2000);
});
