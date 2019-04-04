exports.config = {

  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // baseUrl: 'https://angularjs.org/',

  capabilities: {
      browserName:'chrome'
  },

  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  specs: [
    './features/*.feature'     // Specs here are the cucumber feature files
  ],

  // cucumber command line options
  cucumberOpts: {
    require: ['./step_definitions/**/*.js'],  // require step definition files before executing features
    // tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    // strict: true,                  // <boolean> fail if there are any undefined or pending steps
    // format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    // 'dry-run': false,              // <boolean> invoke formatters without executing steps
    // compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    // tags: ['@workstation',],
    tags: ['@competitor',],
  },

 onPrepare: async function () {
    // this.WorkstationMainWindow.startWorkstation();

    browser.waitForAngularEnabled(false);

    global.EC = protractor.ExpectedConditions;

  //   browser.params.timeoutRatio = 1;
  //   browser.params.timeoutRatio.waitDefaultTimeout = (5 * 1000);

  //   browser.params.stepTimeoutOffset = 60 * 1000; // Timetout at 60 seconds
  //   browser.params.cucumberStepMaxTimeout = (3 * 60 * 1000); // 3 minutos (Consider debugging)

  //   var { setDefaultTimeout } = require('cucumber');
  //   setDefaultTimeout(6000);// 6 seconds * 1k miliseconds
  }
};