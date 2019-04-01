const { Given, When, Then } = require('cucumber');

// var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');

// chai.use(chaiAsPromised);
// var expect = chai.expect;

Given('I opened workstation', async function () {
  
  console.log(await this.workstationMainWindow.message);

  await this.workstationMainWindow.startWorkstation();
});

When('I search in workstation for {string}', async function (searchString) {
  
  await this.workstationMainWindow.search(searchString);
  
});

Then('The search popup should contain {string}', async function (string) {
  
  await this.expect(this.workstationMainWindow.popupExist()).become(true);

});