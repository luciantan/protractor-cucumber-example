const { Given, When, Then } = require('cucumber');


Given('I am on the Google search page', async function () {
  
  await browser.driver.get('https://www.google.com');
  
});

When('I search for {string}', async function (searchString) {

  await this.googlePage.searchString(searchString);

  // await this.workstationMainWindow.startWorkstation();
  
});

