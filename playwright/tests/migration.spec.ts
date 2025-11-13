import { test, expect } from "@playwright/test";

test("handles login with API mock", async ({ page }) => {
  await page.route("POST", "/api/login", (route) => route.fulfill({ json: { success: true } }));
  await page.goto("/");
  await page.fill('[data-test="username"]', "admin");
  await page.fill('[data-test="password"]', "secret");
  await page.click('[data-test="login-btn"]');
  await expect(page.locator('[data-test="header"]')).toHaveText("Welcome");
});