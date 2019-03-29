var expect = require('chai').expect;



var ResultPage = function() {

  var myDriver = browser.driver;
  
  this.containsString = async function(searchResultString) {

    var element = await myDriver.findElement(By.xpath("//h3[contains(text(), '" + searchResultString + "')]"));

    expect(await element.getText()).to.equal(searchResultString);

  }

}

module.exports = new ResultPage();