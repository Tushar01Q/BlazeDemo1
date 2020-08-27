package cucumber.test;


import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
features = "FeatureFile/BlazeDemo.feature",
glue = "com.automation.stepDefs",
//dryRun=true,
monochrome = true,
tags = {},
plugin = { "pretty", "json:target/cucumber.json", "html:target/cucumber-reports" })

public class TestRunner extends AbstractTestNGCucumberTests {
	 @BeforeClass
	    public static void setUpSuite() {
	        System.setProperty("jagacy.properties.dir", "FeatureFile");
	        System.setProperty("test.window", "true");
	    }
	    
	   
	
}


