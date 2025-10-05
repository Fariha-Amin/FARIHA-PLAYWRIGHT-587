const { test, expect} = require('@playwright/test');
const { title } = require('../../constants/homePage');
const { baseURL } = require('../../constants/urls');
const { navList, elementList } = require('../../locators/homepage');
//homepage validation related test cases
test('Locating elements',async({page})=>{
      await page.goto('/login'); //uses the baseUrl automatically from config file
      const navOptions = await page.$$(navList);
      for(const option of navOptions){
         const optionName = await option.textContent();
         console.log(optionName);
         if(optionName=="Elements"){
            await option.click();
            await page.waitForSelector(elementList);
            const elements = await page.$$(elementList);
            for(const element of elements){
               const elementName = await element.textContent();
               console.log("Element Name: ",elementName);
            }
            break;
         }
      }
      

});