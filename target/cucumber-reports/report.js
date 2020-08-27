$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFile/BlazeDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Booking validation in Blaze Portal",
  "description": "",
  "id": "flight-booking-validation-in-blaze-portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Validation of happy flow of flight booking and Confirmation ID",
  "description": "",
  "id": "flight-booking-validation-in-blaze-portal;validation-of-happy-flow-of-flight-booking-and-confirmation-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BlazeDemo_TC01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User select \"\u003cDeparture City\u003e\" and \"\u003cDestination City\u003e\" and click on \"\u003cFind Flight\u003e\" button",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User select any random flight by click on \"\u003cChoosing Flight\u003e\" button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User fills the Passenger details and click on \"\u003cPurchase flight\u003e\"",
  "rows": [
    {
      "cells": [
        "Name",
        "Address",
        "City",
        "State",
        "ZipCode",
        "CreditCardNo",
        "Month",
        "Year",
        "NameOnCard"
      ],
      "line": 11
    },
    {
      "cells": [
        "John",
        "123 Park Avenue",
        "California",
        "Texas",
        "98335",
        "1234 5678 1133 4455",
        "09",
        "2018",
        "John P Carter"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User validate the Confirmation Id and \"\u003cConfirmation Message\u003e\" in Flight Confirmation Screen",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "flight-booking-validation-in-blaze-portal;validation-of-happy-flow-of-flight-booking-and-confirmation-id;",
  "rows": [
    {
      "cells": [
        "Departure City",
        "Destination City",
        "Find Flight",
        "Choosing Flight",
        "Purchase flight",
        "Confirmation Message"
      ],
      "line": 15,
      "id": "flight-booking-validation-in-blaze-portal;validation-of-happy-flow-of-flight-booking-and-confirmation-id;;1"
    },
    {
      "cells": [
        "Portland",
        "Rome",
        "Find Flights",
        "Choose This Flight",
        "Purchase Flight",
        "Thank you for your purchase today!"
      ],
      "line": 16,
      "id": "flight-booking-validation-in-blaze-portal;validation-of-happy-flow-of-flight-booking-and-confirmation-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User initiate the Chrome Driver and login to the application url \"https://blazedemo.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://blazedemo.com/",
      "offset": 66
    }
  ],
  "location": "BlazeDemo.launchingApp(String)"
});
formatter.result({
  "duration": 9976092000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validation of happy flow of flight booking and Confirmation ID",
  "description": "",
  "id": "flight-booking-validation-in-blaze-portal;validation-of-happy-flow-of-flight-booking-and-confirmation-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BlazeDemo_TC01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User select \"Portland\" and \"Rome\" and click on \"Find Flights\" button",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User select any random flight by click on \"Choose This Flight\" button",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User fills the Passenger details and click on \"Purchase Flight\"",
  "matchedColumns": [
    4
  ],
  "rows": [
    {
      "cells": [
        "Name",
        "Address",
        "City",
        "State",
        "ZipCode",
        "CreditCardNo",
        "Month",
        "Year",
        "NameOnCard"
      ],
      "line": 11
    },
    {
      "cells": [
        "John",
        "123 Park Avenue",
        "California",
        "Texas",
        "98335",
        "1234 5678 1133 4455",
        "09",
        "2018",
        "John P Carter"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User validate the Confirmation Id and \"Thank you for your purchase today!\" in Flight Confirmation Screen",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Portland",
      "offset": 13
    },
    {
      "val": "Rome",
      "offset": 28
    },
    {
      "val": "Find Flights",
      "offset": 48
    }
  ],
  "location": "BlazeDemo.CitySelection(String,String,String)"
});
formatter.result({
  "duration": 2872874500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Choose This Flight",
      "offset": 43
    }
  ],
  "location": "BlazeDemo.user_select_any_particular_flight_by_click_on_button(String)"
});
formatter.result({
  "duration": 580225200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Purchase Flight",
      "offset": 47
    }
  ],
  "location": "BlazeDemo.passengerDetails(String,DataTable)"
});
formatter.result({
  "duration": 8870884100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your purchase today!",
      "offset": 39
    }
  ],
  "location": "BlazeDemo.validateConfirmationID(String)"
});
formatter.result({
  "duration": 73072400,
  "status": "passed"
});
});