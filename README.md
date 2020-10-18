Direction to Run the Code:
Please change the Feature file name in TestRunner class :
-- To run Web Code, please give value >> features = "FeatureFile/BlazeDemo.feature",
-- To run API Code, please give Value >> features = "FeatureFile/APICheck.feature",


Web Automation --
1. Test Cases are written in BDD format in Feature file "BlazeDemo" placed under FeatureFile folder
2. Only 1st TC has been automated completely. 
3. Remaining Test cases are the various scenarios one can test
4. Add Natural PLugin to get good visuals of Feature File
5. Use Maven command to run the code from dos "mvn clean install -Dxml=testng -P web"



API Automation --
1. Wrote 3 Tcs in the same Project but different feature file "APICheck.feature" inside FeatureFile folder
2. Validated few values in 1st TC based on assumption that we need to validate those Responses as part of the req.


