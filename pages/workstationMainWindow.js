var wd = require('wd'); 

var {MacDriver} = require("appium-mac-driver");

var WorkstationMainWindow = function() {

  let workstationApp;

  this.startWorkstation = async function() {
    console.log("starting workstation");
    // try {
    //   let defaultCaps = {
    //     app: '/Applications/workstation-mac-11.1.1.10701.app',
    //     platformName: 'Mac',
    //     deviceName: 'Mac',
    //   }
    //   workstationApp = new MacDriver();
    //   await workstationApp.createSession(defaultCaps);

    // } catch (err) {
    //     console.log(err);
    //     return false;
    // }
    try {
      let workstationApp = await wd.promiseChainRemote('http://localhost:4622/wd/hub');
      await workstationApp.init({
        // platformName: 'Mac',
        // deviceName: 'Mac',
        // app: '/Applications/workstation-mac-11.1.1.10701.app',
        // newCommandTimeout: 100000        
        browserName:'chrome',
      })




    } catch (err) {
        console.log(err);
        return false;
    }
  }

  this.search = async function(searchString) {

    // let searchBoxPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXSubrole='AXSearchField']";

    // try {
    //   console.log(searchString);
    //   let searchBox = await workstationApp.findElement(By.);
    //   await searchBox.moveTo();
    //   await workstationApp.sleep(1000);
    //   await workstationApp.buttonDown();
    //   await workstationApp.sleep(1000);
    //   await workstationApp.buttonUp();
    //   await workstationApp.sleep(1000);
    //   // await searchBox.sendKeys(searchString);
    //   // await workstationApp.sleep(1000);
    //   await searchBox.sendKeys(searchString); 
    //   await workstationApp.sleep(3000);
    // } catch (err) {
    //   console.log(err);
    //   return false;
    // }
  }

  this.message = "hello~ I am workstation window";

}

module.exports = new WorkstationMainWindow();