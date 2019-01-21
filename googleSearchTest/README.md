E2E Google Search Form Testing

Testing for the project will be done using Protractor and Jasmine. 
Why Protractor: running selenium webdriver requires calling the builder in each page.

Steps to install

 ~ npm install
 ~ need to install protractor, jasmine, geckodriver, chromedriver, jasmine spec reporter. If manually installing each dependency
 		commands for the dependcies above are: 
 			~ npm install protractor --save
 			~ npm install jasmine --save
 			~ npm install geckodriver --save
 			~ npm install chromedriver --save
 			~ npm install jasmine-spec-reporter --save-dev
 			~ npm install -g webdriver-manager

Steps to Run: 

First startup webdriver: 
	~ run webdriver-manager update in the repo folder
	~ then webdriver-manager start

Then to run test suite: 	
    ~ Enter command: protractor conf.js


The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
* webdriver-manager update
* Start:  webdriver-manager start
* Stop: webdriver-manager shutdown 

[Documentation for Protractor] (http://www.protractortest.org/#/)
