const { test, expect} = require('@playwright/test');
const { advertisingArrowImageAltText, loginpageUsernamePlaceholder } = require('../../constants/homePage');
const { userName } = require('../../constants/textbox');
const { loginPassword } = require('../../constants/login');
//built-in locator functions related test cases
test('Home Page',async({page})=>{
      await page.goto('/login');
      //getByAltText 
      const advertisingArrowImage = await page.getByAltText(advertisingArrowImageAltText);
      await expect(advertisingArrowImage).toBeVisible();
      //getByPlaceHolder
      const usernameField = await page.getByPlaceholder(loginpageUsernamePlaceholder)
      await expect(usernameField).toBeVisible();
      await usernameField.fill(userName);

      //getByLabel
      const passwordField = await page.getByLabel('Password : ');
      await expect(passwordField).toBeVisible();

      //getByText
      let elementsOption = await page.getByText("Elements");
      await expect(elementsOption).toBeVisible();
      await elementsOption.click();

      //more practice:
        //  -> getByRole()
        //  -> getByTitle()
        //  -> getByTestId() //data-testid
});   