import { test, expect } from '@playwright/test';
import { checkbox } from '../../locators/checkbox';
import { oldDropdown, selectOneDropdown } from '../../locators/dropdowns';

test('test', async ({ page }) => {
  await page.goto('/login');
  await page.locator('span').filter({ hasText: 'Widgets' }).locator('div').first().click();
  await page.getByRole('listitem').filter({ hasText: 'Select Menu' }).click();
  await page.locator(oldDropdown).selectOption({label:'Blue'}); //label
  await page.locator(oldDropdown).selectOption('Red'); //Visible text
  await page.locator(oldDropdown).selectOption({value:'3'}); //Value
  await page.locator(oldDropdown).selectOption({index:4}); //index
  await page.selectOption(oldDropdown,"Green"); //by text directly

  //Assertions
  //1
  const options = await page.locator(oldDropdown,"option");
  await expect(options).toHaveCount(11);
  //2
  options = await page.$$(oldDropdown,"option");
  let status = false;
  for(const option of options){
    //console.log("Option: ", await option.textContent())
    const value = await option.textContent();
    if(value=="Blue"){
        status = true
        break;
    }
  }

  await expect(status).toBeTruthy();
  

  //selecting from dropdown nit having select tag
  options = await page.$$(selectOneDropdown,"option");
  for(const option of options){
    //console.log("Option: ", await option.textContent())
    const value = await option.textContent();
    if(value.includes("Mrs.")){
        await page.selectOption(selectOneDropdown,value);
        break;
    }
  }
});