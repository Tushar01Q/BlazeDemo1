package com.automation.stepDefs;

import java.util.Collections;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class BlazeDemo {
	
	public WebDriver driver;
	String departureCity = "//select[@name='fromPort']";
	String destinationCity = "//select[@name='toPort']";
	String button = "//input[@value='%s']";
	String ConfirmationIDElement = "//td[text()='Id']/../td[2]";
	String ConfirmationMessage = "//h1[text()='%s']";
	
	@Given("^User initiate the Chrome Driver and login to the application url \"([^\"]*)\"$")
	public void launchingApp(String url) throws Throwable {
		WebDriverManager.chromedriver().setup();
     	ChromeOptions options = new ChromeOptions();
     	options.setExperimentalOption("useAutomationExtension", false);
     	options.setExperimentalOption("excludeSwitches",Collections.singletonList("enable-automation")); 
     	driver = new ChromeDriver(options);
     	driver.manage().window().maximize();
     	driver.get(url);
     	Thread.sleep(1000);
		
	}

	@Given("^User select \"([^\"]*)\" and \"([^\"]*)\" and click on \"([^\"]*)\" button$")
	public void CitySelection(String departure, String destination, String findFlight) throws Throwable {
		WebElement departureCityElement = driver.findElement(By.xpath(departureCity));
		WebElement destinationCityElement = driver.findElement(By.xpath(destinationCity));
		Select departureCity = new Select(departureCityElement);
		Select destinationCity = new Select(destinationCityElement);
		departureCity.selectByVisibleText(departure);
		destinationCity.selectByVisibleText(destination);
		driver.findElement(By.xpath(button.replace("%s", findFlight))).click();
		Thread.sleep(2000);
		
	}

	@When("^User select any random flight by click on \"([^\"]*)\" button$")
	public void user_select_any_particular_flight_by_click_on_button(String flightChoose) throws Throwable {
		List<WebElement> allFlights = driver.findElements(By.xpath(button.replace("%s", flightChoose)));
		allFlights.get(2).click();
	    
	}

	@Then("^User fills the Passenger details and click on \"([^\"]*)\"$")
	public void passengerDetails(String purchaseFlight, DataTable data) throws Throwable {
		List<List<String>> dataFeed = data.raw();
		driver.findElement(By.id("inputName")).sendKeys(dataFeed.get(1).get(0));
		driver.findElement(By.id("address")).sendKeys(dataFeed.get(1).get(1));
		driver.findElement(By.id("city")).sendKeys(dataFeed.get(1).get(2));
	    driver.findElement(By.id("state")).sendKeys(dataFeed.get(1).get(3));
	    driver.findElement(By.id("zipCode")).sendKeys(dataFeed.get(1).get(4));
	    driver.findElement(By.id("creditCardNumber")).sendKeys(dataFeed.get(1).get(5));
	    driver.findElement(By.id("creditCardMonth")).clear();
	    driver.findElement(By.id("creditCardMonth")).sendKeys(dataFeed.get(1).get(6));
	    driver.findElement(By.id("creditCardYear")).clear();
	    driver.findElement(By.id("creditCardYear")).sendKeys(dataFeed.get(1).get(7));
	    driver.findElement(By.id("nameOnCard")).sendKeys(dataFeed.get(1).get(8));
	    driver.findElement(By.id("rememberMe")).click();
	    Thread.sleep(4000); // Just to verify that data entered properly or not
	    driver.findElement(By.xpath(button.replace("%s", purchaseFlight))).click();
	   
		
	}

	public static String ConfirmationID = null;
	@Then("^User validate the Confirmation Id and \"([^\"]*)\" in Flight Confirmation Screen$")
	public void validateConfirmationID(String confrMessage) throws Throwable {
		ConfirmationID = driver.findElement(By.xpath(ConfirmationIDElement)).getText();
		System.out.println(ConfirmationID);
		Assert.assertTrue(driver.findElement(By.xpath(ConfirmationMessage.replace("%s", confrMessage))).isDisplayed());
		Thread.sleep(2000);
		driver.close();
	}


	
}
