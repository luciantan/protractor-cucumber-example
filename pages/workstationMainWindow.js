var wd = require('wd'); 

var WorkstationMainWindow = function() {

  let workstationApp;

  this.startWorkstation = async function() {
    console.log("starting workstation");

    try {
      workstationApp = await wd.promiseChainRemote('http://localhost:4723/wd/hub');
      await workstationApp.init({
        platformName: 'Mac',
        deviceName: 'Mac',
        app: '/Applications/workstation-mac-11.1.1.10701.app',
        newCommandTimeout: 100000,        
      });
      
      workstationApp.sleep(2000);
      let sessionID = await workstationApp.getSessionId();
      console.log(`session id: ${sessionID}`);

      return sessionID;

    } catch (err) {
        console.log(err);
        return false;
    }
  }

  this.search = async function(searchString) {

    let searchBoxPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXSubrole='AXSearchField']";

    try {
      let searchBox = await workstationApp.elementByXPath(searchBoxPath);
      await searchBox.moveTo();
      await workstationApp.sleep(500);
      await workstationApp.buttonDown();
      await workstationApp.sleep(500);
      await workstationApp.buttonUp();
      await workstationApp.sleep(500);
      await searchBox.sendKeys(searchString); 
      await workstationApp.sleep(500);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  this.popupExist = async function() {
    // let popupPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments' and @AXSubrole='AXStandardWindow']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXValue='MicroStrategy' and @AXSubrole='AXSearchField']/AXPopover[0]";
    let popupPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments' and @AXSubrole='AXStandardWindow']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXValue='airline' and @AXSubrole='AXSearchField']/AXPopover[0]/AXScrollArea[0]/AXTable[0]/AXRow[@AXSubrole='AXTableRow']/AXCell[0]/AXStaticText[@AXValue='DOSSIERS']"
    try {

      await workstationApp.sleep(500);
      let popup = workstationApp.elementByXPath(popupPath);
      popup.moveTo();
      return popup.isDisplayed();
      
    } catch (err) {
        console.log(err);
        return false;
    }

  }

  this.closeWorkstation = async function() {
    let closeWorkstationButtonPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments' and @AXSubrole='AXStandardWindow']/AXButton[@AXSubrole='AXCloseButton']";
    try {

      await workstationApp.sleep(500);
      let closeWorkstationButton = workstationApp.elementByXPath(closeWorkstationButtonPath);
      closeWorkstationButton.moveTo();
      await workstationApp.sleep(500);
      await workstationApp.buttonDown();
      await workstationApp.sleep(500);
      await workstationApp.buttonUp();
      await workstationApp.sleep(500);
      
    } catch (err) {
        console.log(err);
    }
  }

}

module.exports = new WorkstationMainWindow();