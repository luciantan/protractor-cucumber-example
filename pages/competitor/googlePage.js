var GooglePage = function() {

  var myDriver = browser.driver;
  
  this.searchString = async function(searchString) {

    await myDriver.findElement(By.name("q")).sendKeys(searchString);

    //mimic user move mouse action..seems not necessary
    // let searchBox = await myDriver.findElement(By.name("q"));
    // browser.actions().
    // mouseMove(searchBox).
    // doubleClick().
    // perform();
    // searchBox.sendKeys(searchString)

    await myDriver.actions().sendKeys(protractor.Key.ENTER).perform();

  }

}

module.exports = new GooglePage();