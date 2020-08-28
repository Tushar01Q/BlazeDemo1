Feature: API Validation

@SpaceX_APICheck_ValidEndPoint_TC01
Scenario Outline: Validation of Status Code and different-2 Response when Endpoint is Valid
Given User is hitting the API for "<End point>" and Valid http Method Type
Then User is validating certain attributes in http Response
Examples:
|End point|
|https://api.spacexdata.com/v4/launches/latest|



@SpaceX_APICheck_InValidEndPoint_TC02
Scenario Outline: Validation of Status Code and API Response when Endpoint is InValid
Given User is hitting the API for "<End point>" and Valid http Method Type
Then User is validating Http Response
Examples:
|End point|
|https://api.spacexdata.com/v4/launches/lates6Yt|



@SpaceX_APICheck_InValidHttpRequest_TC03
Scenario Outline: Validation of Status Code and API Response when Endpoint is InValid
Given User is hitting the API for "<End point>" and InValid http Method Type
Then User is validating Http Response
Examples:
|End point|
|https://api.spacexdata.com/v4/launches/latest|