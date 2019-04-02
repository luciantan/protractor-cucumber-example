const { Given, When, Then } = require('cucumber');
var {After, Before} = require('cucumber');

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

After (async function() {
  await this.workstationMainWindow.closeWorkstation();
})

