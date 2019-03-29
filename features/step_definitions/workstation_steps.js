const { Given, When, Then } = require('cucumber');

Given('I opened workstation', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log(await this.workstationMainWindow.message);

  await this.workstationMainWindow.startWorkstation();
});

When('I search in workstation for {string}', async function (searchString) {
  // await this.workstationMainWindow.search(searchString);
  return 'pending';
});

Then('The search box should contain {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});