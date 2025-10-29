import { test, expect } from "@playwright/test";

test.setTimeout(60000);

test("Editar perfil de usuario en Buggy Cars", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 1280, height: 800 });

  await page.fill('input[name="login"]', "cermenosauly8@gmail.com");
  await page.fill('input[name="password"]', "sauly987Añ*");
  await page.click('button:has-text("Login")');

  await page.waitForSelector('a:has-text("Profile")');
  await page.click('a:has-text("Profile")');

  await page.waitForSelector('input[name="firstName"]');

  await page.fill('input[name="firstName"]', "Estefani");
  await page.fill('input[name="lastName"]', "Cermeño");

  await page.click('button:has-text("Save")');

  const mensaje = page.locator(".result:not(.hidden-md-down)");
  await expect(mensaje).toHaveText(/The profile has been saved/);
});
