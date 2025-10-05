const { test, expect} = require('@playwright/test');
const { title } = require('../../constants/homePage');
const { baseURL } = require('../../constants/urls');
//homepage validation related test cases
test('Home Page',async({page})=>{
      await page.goto('/login'); //uses the baseUrl automatically from config file
      const pageTitle = await page.title();
      const pageURL = await page.url();
      await expect(page).toHaveURL(baseURL);
      await expect(pageURL).toEqual(baseURL);
      await expect(page).toHaveTitle(title);
      await expect(pageTitle).toEqual(title);
      

});