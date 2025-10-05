const { test, expect} = require('@playwright/test');
const { baseURL } = require('../../constants/urls');
const { title } = require('../../constants/homePage');
const { loginUsernameField, elementTitle, navList } = require('../../locators/homepage');
const { userName } = require('../../constants/textbox');
  test('Assertions practice test',async({page})=>{
    await page.goto('/login');
    //soft assertions
    await expect.soft(page).toHaveURL(baseURL+"wrong");
    await expect.soft(page).toHaveTitle(title);
    let loginUsernameInputField = await page.locator(loginUsernameField);
    await expect.soft(loginUsernameInputField).toBeEmpty();

    //hard assertions
    await expect(page).toHaveURL(baseURL+"wrong");
    await expect(page).toHaveTitle(title);
    loginUsernameInputField = await page.locator(loginUsernameField);
    await expect(loginUsernameInputField).toBeEmpty();
    
  })
