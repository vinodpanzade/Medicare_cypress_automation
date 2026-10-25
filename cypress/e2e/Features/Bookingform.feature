Feature: Boooking form valdation

  Scenario:Verify form Page
  Given Submit the empty form and assert every required field is listed.
  Then Enter an age of 0 and of 130 and assert both are rejected.
  Then enter 9 digit in mobile number and assert
  Then assert the reason area
