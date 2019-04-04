var GoogleSearchResultPage = function() {

  var myDriver = browser.driver;
  
  this.containsString = async function(searchResultString) {
    try {

      var element = await myDriver.findElement(By.xpath("//*[contains(text(), '" + searchResultString + "')]"));
      
      return element.isDisplayed();
  
    } catch (err) {
        console.log(err);
        return false;
    }
  }

}

module.exports = new GoogleSearchResultPage();