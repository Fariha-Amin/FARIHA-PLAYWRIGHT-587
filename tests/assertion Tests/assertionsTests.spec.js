const { test, expect} = require('@playwright/test');
const { baseURL } = require('../../constants/urls');
const { title } = require('../../constants/homePage');
const { loginUsernameField, elementTitle, navList } = require('../../locators/homepage');
const { userName } = require('../../constants/textbox');
  test('Assertions practice test',async({page})=>{
    await page.goto('/login');
    //toHaveURL
    await expect(page).toHaveURL(baseURL);
    //toHaveTitle
    await expect(page).toHaveTitle(title);
    const loginUsernameInputField = await page.locator(loginUsernameField);
    //toBeEmpty
    await expect(loginUsernameInputField).toBeEmpty();
    await expect(loginUsernameInputField).toBeEditable();
    await loginUsernameInputField.fill(userName);
    //toHaveValue
    await expect(loginUsernameInputField).toHaveValue(userName);
    const loginButtonElement = await page.locator(loginUsernameField);
    //toBeVisible
    await expect(loginUsernameInputField).toBeVisible();
    //toBeEnabled
    await expect(loginButtonElement).toBeEnabled();
    //similarly, test "toBeDisabled"

    const titleField = await page.locator(elementTitle);
    //toHaveText
    await expect(titleField).toHaveText("Login");
    //toContainText
    await expect(titleField).toContainText("Log");

    const navOptions = await page.$$(navList);
    //toHaveLength
    await expect(navOptions).toHaveLength(6);


  })
