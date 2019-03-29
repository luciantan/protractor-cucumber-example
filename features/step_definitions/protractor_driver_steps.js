const assert = require('assert');
const { Given, When, Then } = require('cucumber');

var expect = require('chai').expect;

var myDriver = browser.driver;

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}

Given('I am on the Google search page', async function () {
  
  await myDriver.get('https://www.google.com')
  
});

When('I search for {string}', async function (searchString) {

  await myDriver.findElement(By.name("q")).sendKeys("selenium");
  await myDriver.actions().sendKeys(protractor.Key.ENTER).perform();
  
});

Then('the page title should start with {string}', async function (titleString) {

  wait(2000);
  
  expect(1).to.equal(1);
  var element = await myDriver.findElement(By.xpath("//h3[contains(text(), 'Selenium - Web Browser Automation')]"));

  expect(await element.getText()).to.equal("Selenium - Web Browser Automation");

  
});