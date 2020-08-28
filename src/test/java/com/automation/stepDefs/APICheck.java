package com.automation.stepDefs;

import java.util.List;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class APICheck {

	RequestSpecification httpRequest;
	Response response;
	JsonPath jsonPathValuator;

	@Given("^User is hitting the API for \"([^\"]*)\" and Valid http Method Type$")
	public void user_is_hitting_the_API_for_and_Valid_http_Method_Type(String endPoint) throws Throwable {
		RestAssured.baseURI = endPoint;
		httpRequest = RestAssured.given();
		httpRequest.header("Content-Type","application/json");
		response = httpRequest.request(Method.GET);
	}

	@Then("^User is validating certain attributes in http Response$")
	public void user_is_validating_certain_attributes_in_http_Response() throws Throwable {
    
		// Validating http Response Code
		System.out.println("Response Code is:"+ response.getStatusCode());
		Assert.assertEquals(response.getStatusCode(), 200);
		
		// Validating header of content type of Response
		System.out.println(response.getHeader("Content-Type"));
		Assert.assertEquals(response.getHeader("Content-Type"), "application/json; charset=utf-8");
		
		jsonPathValuator = response.jsonPath();
		
		// Validating attribute value of Success Attribute based on Assumption that it should be true
		System.out.println("Success message is: " + jsonPathValuator.get("success"));
		
		// Validating attribute value of failure Attribute based on Assumption that it should be null or empty
		System.out.println("Failures are: "+ jsonPathValuator.get("failures"));
		List<String> failure = jsonPathValuator.get("failures");
		Assert.assertEquals(failure.size(), 0);
		

	}

	@Then("^User is validating Http Response$")
	public void user_is_validating_Http_Response() throws Throwable {
    
		System.out.println(response.getStatusCode());
		Assert.assertEquals(response.getStatusCode(), 404);
	}

	@Given("^User is hitting the API for \"([^\"]*)\" and InValid http Method Type$")
	public void user_is_hitting_the_API_for_and_InValid_http_Method_Type(String endPOint) throws Throwable {
		RestAssured.baseURI = endPOint;
		httpRequest = RestAssured.given();
		httpRequest.header("Content-Type","application/json");
		response = httpRequest.request(Method.POST);
				
		
	}
	
	
	
	
}
