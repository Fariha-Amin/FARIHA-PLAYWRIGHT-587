const { test, expect} = require('@playwright/test');
  test('practice test',async({page})=>{
    await page.goto('https://demoqa.com/login');
    await page.getByRole('textbox', { name: 'UserName' }).click();
    await page.getByRole('textbox', { name: 'UserName' }).fill('fariha');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('faPass123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.close();
  })

  //modified the test generated from codegen
