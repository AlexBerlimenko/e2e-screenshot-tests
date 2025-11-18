// tests/screenshots/about.spec.js
const { test, expect } = require('@playwright/test');

test('Screenshot сторінки "Про нас"', async ({ page }) => {
  await page.goto('/about.html');
  expect(await page.screenshot()).toMatchSnapshot('about-page.png');
});

test('Screenshot секції "Про нас"', async ({ page }) => {
  await page.goto('/about.html');
  const aboutSection = await page.locator('#about-section');
  expect(await aboutSection.screenshot()).toMatchSnapshot('about-section.png');
});