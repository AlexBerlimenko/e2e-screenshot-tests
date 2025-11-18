// tests/e2e/about.test.js
const { test, expect } = require('@playwright/test');

test('Перевірка заголовка сторінки "Про нас"', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page.locator('h1')).toHaveText('Про нашу компанію');
});

test('Перевірка кнопки контакту на сторінці "Про нас"', async ({ page }) => {
  await page.goto('/about.html');
  await page.click('#contact-btn');
  await expect(page.locator('#contact-message')).toBeVisible();
});

test('Перевірка навігації між сторінками', async ({ page }) => {
  await page.goto('/about.html');
  await page.click('text=Головна');
  await expect(page).toHaveURL('/');
  await expect(page.locator('h1')).toHaveText('Вітаємо на локальній зміненій сторінці!');
});