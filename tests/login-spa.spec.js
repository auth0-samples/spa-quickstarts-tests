const { test, expect } = require("@playwright/test");

test("Log in and log out using Universal Login (SPA)", async ({ page }) => {
  await page.goto("/");
  await page.locator("#qsLoginBtn").waitFor({ timeout: 10_000 });
  await page.locator("#qsLoginBtn").click();

  await page.locator('input[name="username"]').waitFor({ timeout: 10_000 });
  await page.locator('input[name="username"]').fill("asdasd");
  await page.locator('input[name="password"]').fill("asdasd");
  await page.locator('button[type="submit"]').click();

  await page.locator("#profileDropDown").waitFor({ timeout: 15_000 });
  await page.locator("#profileDropDown").click();
  await page.locator("#qsLogoutBtn").waitFor();
  await page.locator("#qsLogoutBtn").click();

  await expect(page.locator("#qsLoginBtn")).toBeVisible({ timeout: 10_000 });
});
