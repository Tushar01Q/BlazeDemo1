Feature: API Validation


@SpaceX_APICheck_ValidEndPoint_TC01
Scenario Outline: Validation of Status Code and different-2 Responses when Endpoint is Valid
Given User is hitting the API for "<End point>" and Valid Http Method Type
Then User is validating certain attributes in http Response
Examples:
|End point|Http Method|
|https://api.spacexdata.com/v4/launches/latest|GET|


@SpaceX_APICheck_InvalidEndPoint_TC02
Scenario Outline: Validation of Status Code and API Response when Endpoint is Not Valid
Given User is hitting the API for "<End point>" and Valid Http Method Type 
Then User is validating HTTP Response
Examples:
|End point|Http Method|
|https://api.spacexdata.com/v4/launches/latesW7t|GET|



@SpaceX_APICheck_InvalidHttpRequest_TC03
Scenario Outline: Validation of Status Code and API Response when Http Request Type is Invalid
Given User is hitting the API for "<End point>" and Invalid Http Method Type 
Then User is validating HTTP Response
Examples:
|End point|Http Method|
|https://api.spacexdata.com/v4/launches/latest|POST|


