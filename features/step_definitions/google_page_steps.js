const { Given, When, Then } = require('cucumber');

var {setWorldConstructor} = require('cucumber');

function CustomWorld() {
  console.log("I am called by cucumber");
  this.googlePage = require('../../pages/googlePage');
  this.resultPage = require('../../pages/resultPage');
}

setWorldConstructor(CustomWorld);


Given('I am on the Google search page', async function () {
  
  await browser.driver.get('https://www.google.com');
  
});

When('I search for {string}', async function (searchString) {

  await this.googlePage.searchString(searchString)
  
});

