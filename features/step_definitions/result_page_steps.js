const { Given, When, Then } = require('cucumber');

Then('the new page should contain {string}', async function (searchResultString) {
  
  await this.resultPage.containsString(searchResultString);

});