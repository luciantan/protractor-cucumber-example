const { Given, When, Then } = require('cucumber');
var {After, Before} = require('cucumber');

Given('I opened workstation', {timeout: 100000}, async function () {

  this.sessionID = await this.workstationMainWindow.startWorkstation();

});

When('I search in workstation for {string}', {timeout: 100000}, async function (searchString) {
  
  await this.workstationMainWindow.search(searchString);
  
});

Then('The search popup should contain {string}', {timeout: 100000}, async function (string) {

  await this.expect(this.quickSearchPage.popupExist(this.sessionID)).become(true);

});

After ({tags: "@workstation"}, async function() {

  await this.workstationMainWindow.closeWorkstation();
  
})

