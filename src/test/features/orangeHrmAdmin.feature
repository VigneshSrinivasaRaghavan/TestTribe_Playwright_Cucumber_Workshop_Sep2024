Feature: Orange HRM Admin Feature

Scenario: Orange HRM navigation to Admin Page
Given user is on the orangehrm login page
When user enters the valid username
And user enters the valid password
And user clicks on the login button
And user clicks on admin tab button
Then user will be navigated to admin page