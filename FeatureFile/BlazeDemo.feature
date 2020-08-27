Feature: Flight Booking validation in Blaze Portal

Background:
Given User initiate the Chrome Driver and login to the application url "https://blazedemo.com/"

@BlazeDemo_TC01
Scenario Outline: Validation of happy flow of flight booking and Confirmation ID
Given User select "<Departure City>" and "<Destination City>" and click on "<Find Flight>" button
When User select any random flight by click on "<Choosing Flight>" button
Then User fills the Passenger details and click on "<Purchase flight>"
|Name|Address|City|State|ZipCode|CreditCardNo|Month|Year|NameOnCard|
|John|123 Park Avenue|California|Texas|98335|1234 5678 1133 4455|09|2018|John P Carter|
And User validate the Confirmation Id and "<Confirmation Message>" in Flight Confirmation Screen
Examples:
|Departure City|Destination City|Find Flight|Choosing Flight|Purchase flight|Confirmation Message|
|Portland|Rome|Find Flights|Choose This Flight|Purchase Flight|Thank you for your purchase today!|


#@BlazeDemo_TC02
#Scenario: Field Level Validation of Input fields displaying in Passenger Details screen

#Scenario: Validation of Departure City and Destination City on Choose Flight Screen

#Scenario: Validation of Airline name, Flight Number, Price and Total Cost in Passenger Details Screen as compared to Choose Flight screen

#Scenario: Validation of Card Type and Credit Card Number combination 

#Scenario: Validation of details like last 4 digits of Card Number, Expiration, Date of Flight in Confirmation Screen











