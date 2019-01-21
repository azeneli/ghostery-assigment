E2E Google Search Form Testing

Testing for the project will be done using Protractor and Jasmine. 
Why Protractor: running selenium webdriver requires calling the builder in each page.

Steps to install

 ~ npm install
 ~ need to install protractor, jasmine, geckodriver, chromedriver. If manually installing each dependency

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
