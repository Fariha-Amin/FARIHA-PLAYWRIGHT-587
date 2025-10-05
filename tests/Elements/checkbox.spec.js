import { test, expect } from '@playwright/test';
import { checkbox } from '../../locators/checkbox';

test('test', async ({ page }) => {
  await page.goto('/login');
  await page.locator('span').filter({ hasText: 'Elements' }).locator('div').first().click();
  await page.getByRole('listitem').filter({ hasText: 'Check Box' }).click();
  await page.getByRole('button', { name: 'Toggle' }).click();
  const checkboxes = [
        await page.locator(checkbox("Desktop")),
        await page.locator(checkbox("Documents")),
        await page.locator(checkbox("Downloads"))
  ];

  console.log(checkboxes)

  for(const checkbox of checkboxes){
    await checkbox.check();
}

  for(const checkbox of checkboxes){
    if(await checkbox.isChecked()){
        await checkbox.uncheck();
    }
  }
 
});