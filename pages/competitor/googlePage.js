var GooglePage = function() {

  var myDriver = browser.driver;
  
  this.searchString = async function(searchString) {

    await myDriver.findElement(By.name("q")).sendKeys(searchString);

    await myDriver.actions().sendKeys(protractor.Key.ENTER).perform();

  }

}

module.exports = new GooglePage();