import { test, expect } from "@playwright/test";

test("Registro de nuevo usuario en Buggy Cars", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  await page.click('text=Register');
  await page.waitForSelector("#username", { timeout: 15000 });

  const timestamp = Date.now();
  const username = `saulycermeño${timestamp}`;

  await page.fill("#username", username);
  await page.fill("#firstName", "Estefania");
  await page.fill("#lastName", "Cermeño");
  await page.fill("#password", "Estefania100.");
  await page.fill("#confirmPassword", "Estefania100.");

  await page.click('button:has-text("Register")');

  const result = page.locator(".result");
  await expect(result).toBeVisible({ timeout: 15000 });

  const mensaje = await result.textContent();
  console.log("Mensaje mostrado:", mensaje?.trim());

  await expect(result).toHaveText("Registration is successful");

  await expect(page.locator(".img-fluid")).toBeVisible();
});
