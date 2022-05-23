
import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page';
import Registration from '../pageobjects/registration.page'
import verification from '../pageobjects/verification';
import Verrification from '../pageobjects/verification'

Given(/^I am on the home page$/, async () => {

    await HomePage.openHomePage();
 });

When(/^Navigate to the Register page$/, async () =>  {

  await (await HomePage.btnSeePrices).click();


  });

When(/^set the value for All mandantory fields$/, async () =>   {

   await Registration.registrationData('Ansari','jaminansari@gmail.com',7538812986,'Full');

 });

Then(/^click the see prices Button and verify the given details$/, async () =>   {
   
    await Registration.clcik_ShowPlansBtn();
    await (await verification.choose_plan).click();
    await Verrification.verify_Allfield();
});
    
