Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

@competitor
  Scenario: search for selenium
   Given I am on the Google search page
   When I search for "selenium"
   Then the new page should contain "Selenium - Web Browser Automation"

@competitor
  Scenario Outline: search for protractor
  Given I am on the Google search page
  When I search for "<searchString>"
  Then the new page should contain "<searchResult>"

  Examples:
      | searchString | searchResult                                                |
      | protractor   | Protractor - end-to-end testing for AngularJS               |
      | microstrategy| MicroStrategy: Powerful Data Analytics & Visualization Tools|
 

@workstation
  Scenario: search for airline in workstation
  Given I opened workstation
  When I search in workstation for "airline"
  Then The search popup should contain "airline"
