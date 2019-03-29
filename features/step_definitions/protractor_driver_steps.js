const assert = require('assert');
const { Given, When, Then } = require('cucumber');

var googlePage = require('../../pages/googlePage');
var resultPage = require('../../pages/resultPage');

Given('I am on the Google search page', async function () {
  
  await browser.driver.get('https://www.google.com');
  
});

When('I search for {string}', async function (searchString) {

  // await myDriver.findElement(By.name("q")).sendKeys(searchString);
  // await myDriver.actions().sendKeys(protractor.Key.ENTER).perform();

  await googlePage.searchString(searchString)
  
});

Then('the new page should contain {string}', async function (searchResultString) {
  
  // var element = await myDriver.findElement(By.xpath("//h3[contains(text(), 'Selenium - Web Browser Automation')]"));
  // expect(await element.getText()).to.equal(searchResultString);

  resultPage.containsString(searchResultString);

});