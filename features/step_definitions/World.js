var {setWorldConstructor} = require('cucumber');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

function CustomWorld() {
  console.log("I am called by cucumber");
  this.googlePage = require('../../pages/googlePage');
  this.resultPage = require('../../pages/resultPage');
  this.workstationMainWindow = require('../../pages/workstationMainWindow');
  this.quickSearchPage = require('../../pages/quickSearchPage');
  this.expect = expect;
  this.workstationApp;
  this.sessionID;
}

setWorldConstructor(CustomWorld);