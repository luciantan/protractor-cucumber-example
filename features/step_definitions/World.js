var {setWorldConstructor} = require('cucumber');

function CustomWorld() {
  console.log("I am called by cucumber");
  this.googlePage = require('../../pages/googlePage');
  this.resultPage = require('../../pages/resultPage');
}

setWorldConstructor(CustomWorld);