var {setWorldConstructor} = require('cucumber');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

function CustomWorld() {
  console.log("I am called by cucumber");
  this.googlePage = require('../pages/competitor/googlePage');
  this.googleSearchResultPage = require('../pages/competitor/googleSearchResultPage');
  this.workstationMainWindow = require('../pages/wsNativeWindows/workstationMainWindow');
  this.quickSearchPage = require('../pages/wsWebViews/quickSearchPage');
  this.expect = expect;
  this.workstationApp;
  this.sessionID;
}

setWorldConstructor(CustomWorld);