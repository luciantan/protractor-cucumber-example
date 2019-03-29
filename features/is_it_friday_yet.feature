Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario: search for selenium
   Given I am on the Google search page
   When I search for "selenium"
   Then the new page should contain "Selenium - Web Browser Automation"

  Scenario: search for protractor
  Given I am on the Google search page
  When I search for "protractor"
  Then the new page should contain "Protractor - end-to-end testing for AngularJS"