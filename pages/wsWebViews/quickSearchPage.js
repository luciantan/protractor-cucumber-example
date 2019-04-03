var wd = require('wd'); 

var QuickSearchPage = function() {

  let workstationApp;

  this.popupExist = async function(sessionID) {
    
    // let popupPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments' and @AXSubrole='AXStandardWindow']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXValue='MicroStrategy' and @AXSubrole='AXSearchField']/AXPopover[0]";
    let popupPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments' and @AXSubrole='AXStandardWindow']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXValue='airline' and @AXSubrole='AXSearchField']/AXPopover[0]/AXScrollArea[0]/AXTable[0]/AXRow[@AXSubrole='AXTableRow']/AXCell[0]/AXStaticText[@AXValue='DOSSIERS']"
    try {

      workstationApp = await wd.promiseChainRemote('http://localhost:4723/wd/hub');
      await workstationApp.attach(sessionID);

      await workstationApp.sleep(500);
      let popup = workstationApp.elementByXPath(popupPath);
      popup.moveTo();
      return popup.isDisplayed();
      
    } catch (err) {
        console.log(err);
        return false;
    }

  }

  this.message = "hello~ I am quick search popup page";

}

module.exports = new QuickSearchPage();