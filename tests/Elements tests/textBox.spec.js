const { test, expect} = require('@playwright/test');
const { navList, elementList, elementTitle } = require('../../locators/homepage');
const { userName, password, email, currentAddress, permanentAddress } = require('../../constants/textbox');
const { userNameField, passswordField, emailField, currentAddressField, permanentAddressField } = require('../../locators/textBox');
//textbox related test cases
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
               if(elementName == "Text Box"){
                await element.click();
                await page.waitForSelector(elementTitle);
                const elementTitleField = await page.locator(elementTitle);
                const elementTitleValue = await elementTitleField.textContent();
                await expect(elementTitleValue).toEqual("Text Box");
                await page.fill(userNameField,userName);
                await page.type(emailField,email);
                await page.locator(currentAddressField).fill(currentAddress);
                await page.locator(permanentAddressField).type(permanentAddress);
               }
            }
            break;
         }
      }
      

});