import { test, expect } from '@playwright/test';
import { noRadioButton, yesRadioButton } from '../../locators/radioButton';

test('test', async ({ page }) => {
  await page.goto('/login');
  await page.locator('span').filter({ hasText: 'Elements' }).locator('div').first().click();
  await page.getByText('Radio Button').click();
  const yesRadioBtn = await page.locator(yesRadioButton);
  await yesRadioBtn.check({force:true});
  await expect(yesRadioBtn).toBeChecked();
  await expect(await yesRadioBtn.isChecked).toBeTruthy();
  const noRadioBtn = await page.locator(noRadioButton);
  await expect(noRadioBtn).not.toBeChecked();
  const impressiveRadioBtn = await page.locator(noRadioButton);
  await expect(impressiveRadioBtn).not.toBeChecked();
});