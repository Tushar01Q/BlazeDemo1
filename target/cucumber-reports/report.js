$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFile/APICheck.feature");
formatter.feature({
  "line": 1,
  "name": "API Validation",
  "description": "",
  "id": "api-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validation of Status Code and different-2 Responses when Endpoint is Valid",
  "description": "",
  "id": "api-validation;validation-of-status-code-and-different-2-responses-when-endpoint-is-valid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SpaceX_APICheck_ValidEndPoint_TC01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is hitting the API for \"\u003cEnd point\u003e\" and Valid Http Method Type",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User is validating certain attributes in http Response",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "api-validation;validation-of-status-code-and-different-2-responses-when-endpoint-is-valid;",
  "rows": [
    {
      "cells": [
        "End point",
        "Http Method"
      ],
      "line": 9,
      "id": "api-validation;validation-of-status-code-and-different-2-responses-when-endpoint-is-valid;;1"
    },
    {
      "cells": [
        "https://api.spacexdata.com/v4/launches/latest",
        "GET"
      ],
      "line": 10,
      "id": "api-validation;validation-of-status-code-and-different-2-responses-when-endpoint-is-valid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Validation of Status Code and different-2 Responses when Endpoint is Valid",
  "description": "",
  "id": "api-validation;validation-of-status-code-and-different-2-responses-when-endpoint-is-valid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SpaceX_APICheck_ValidEndPoint_TC01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is hitting the API for \"https://api.spacexdata.com/v4/launches/latest\" and Valid Http Method Type",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User is validating certain attributes in http Response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.spacexdata.com/v4/launches/latest",
      "offset": 29
    }
  ],
  "location": "APICheck.ApiRun(String)"
});
formatter.result({
  "duration": 2418787400,
  "status": "passed"
});
formatter.match({
  "location": "APICheck.ResponseValidation()"
});
formatter.result({
  "duration": 546540800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Validation of Status Code and API Response when Endpoint is Not Valid",
  "description": "",
  "id": "api-validation;validation-of-status-code-and-api-response-when-endpoint-is-not-valid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SpaceX_APICheck_InvalidEndPoint_TC02"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is hitting the API for \"\u003cEnd point\u003e\" and Valid Http Method Type",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User is validating HTTP Response",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "api-validation;validation-of-status-code-and-api-response-when-endpoint-is-not-valid;",
  "rows": [
    {
      "cells": [
        "End point",
        "Http Method"
      ],
      "line": 18,
      "id": "api-validation;validation-of-status-code-and-api-response-when-endpoint-is-not-valid;;1"
    },
    {
      "cells": [
        "https://api.spacexdata.com/v4/launches/latesW7t",
        "GET"
      ],
      "line": 19,
      "id": "api-validation;validation-of-status-code-and-api-response-when-endpoint-is-not-valid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Validation of Status Code and API Response when Endpoint is Not Valid",
  "description": "",
  "id": "api-validation;validation-of-status-code-and-api-response-when-endpoint-is-not-valid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SpaceX_APICheck_InvalidEndPoint_TC02"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is hitting the API for \"https://api.spacexdata.com/v4/launches/latesW7t\" and Valid Http Method Type",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User is validating HTTP Response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.spacexdata.com/v4/launches/latesW7t",
      "offset": 29
    }
  ],
  "location": "APICheck.ApiRun(String)"
});
formatter.result({
  "duration": 766083100,
  "status": "passed"
});
formatter.match({
  "location": "APICheck.user_is_validating_HTTP_Response()"
});
formatter.result({
  "duration": 386200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Validation of Status Code and API Response when Http Request Type is Invalid",
  "description": "",
  "id": "api-validation;validation-of-status-code-and-api-response-when-http-request-type-is-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@SpaceX_APICheck_InvalidHttpRequest_TC03"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is hitting the API for \"\u003cEnd point\u003e\" and Invalid Http Method Type",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User is validating HTTP Response",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "api-validation;validation-of-status-code-and-api-response-when-http-request-type-is-invalid;",
  "rows": [
    {
      "cells": [
        "End point",
        "Http Method"
      ],
      "line": 28,
      "id": "api-validation;validation-of-status-code-and-api-response-when-http-request-type-is-invalid;;1"
    },
    {
      "cells": [
        "https://api.spacexdata.com/v4/launches/latest",
        "POST"
      ],
      "line": 29,
      "id": "api-validation;validation-of-status-code-and-api-response-when-http-request-type-is-invalid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Validation of Status Code and API Response when Http Request Type is Invalid",
  "description": "",
  "id": "api-validation;validation-of-status-code-and-api-response-when-http-request-type-is-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@SpaceX_APICheck_InvalidHttpRequest_TC03"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is hitting the API for \"https://api.spacexdata.com/v4/launches/latest\" and Invalid Http Method Type",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User is validating HTTP Response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.spacexdata.com/v4/launches/latest",
      "offset": 29
    }
  ],
  "location": "APICheck.InvalidMethodType(String)"
});
formatter.result({
  "duration": 739129000,
  "status": "passed"
});
formatter.match({
  "location": "APICheck.user_is_validating_HTTP_Response()"
});
formatter.result({
  "duration": 137200,
  "status": "passed"
});
});