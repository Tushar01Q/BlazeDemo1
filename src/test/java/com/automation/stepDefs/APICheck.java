package com.automation.stepDefs;

import java.util.HashMap;
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

	RequestSpecification httpRequest ;
	Response response;
	JsonPath jsonPathEvaluator;
	
	
	@Given("^User is hitting the API for \"([^\"]*)\" and Valid Http Method Type$")
	public void ApiRun(String endPoint) throws Throwable {
		RestAssured.baseURI = endPoint;
		httpRequest = RestAssured.given(); 
	    httpRequest.header("Content-Type", "application/json");
	    response = httpRequest.request(Method.GET);
	}

	@Then("^User is validating certain attributes in http Response$")
	public void ResponseValidation() throws Throwable {
	    
		// Validating http Response Code
		Assert.assertEquals(response.getStatusCode(),200);
		System.out.println("Response Code is: "+ response.getStatusCode());
		
		// Validating header of content type of Response
		System.out.println(response.getHeader("Content-Type"));
		Assert.assertEquals(response.getHeader("Content-Type"),"application/json; charset=utf-8");
		
		jsonPathEvaluator = response.jsonPath();
		
		// Validating success message that purely depends on Assumption that attribute value should be true
		System.out.println("Success message is: " + jsonPathEvaluator.get("success"));
				
		// Validating failures of the API Response purely based on Assumption that Failures should be an empty List
		System.out.println("Failures are : " + jsonPathEvaluator.get("failures"));
		List<String> books = jsonPathEvaluator.get("failures");
		Assert.assertEquals(books.size(), 0);
		
		
	}
	
	
	@Then("^User is validating HTTP Response$")
	public void user_is_validating_HTTP_Response() throws Throwable {
		System.out.println(response.getStatusCode());
		Assert.assertEquals(response.getStatusCode(),404);
	}

	@Given("^User is hitting the API for \"([^\"]*)\" and Invalid Http Method Type$")
	public void InvalidMethodType(String endPoint) throws Throwable {
		RestAssured.baseURI = endPoint;
		httpRequest = RestAssured.given(); 
	    httpRequest.header("Content-Type", "application/json");
	    response = httpRequest.request(Method.POST);
	}
	
	
	
}
