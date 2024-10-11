Feature: Orange HRM Login Feature

Scenario: Orange HRM Login with valid Credentials
Given user is on the orangehrm login page
When user enters the valid username
And user enters the valid password
And user clicks on the login button
Then user will be navigated to dashboard page

Scenario Outline: Orange HRM Login with different Credentials
Given user is on the orangehrm login page
When user enters the valid username "<username>"
And user enters the valid password "<password>"
And user clicks on the login button
Then user will be navigated to dashboard page

Examples:
|username|password|
|Admin|admin123|
|Admin123|admin567|