Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario: Finding some cheese
   Given I am on the Google search page
   When I search for "selenium"
   Then the new page should contain "Selenium - Web Browser Automation"