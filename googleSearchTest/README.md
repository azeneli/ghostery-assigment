E2E Auto-Pilot Testing
Testing for the project will be done using Protractor and Jasmine. Why Protractor: running selenium webdriver requires calling the builder in each page.
Steps to install
npm install
need to install protractor, jasmine, geckodriver, chromedriver
running on the latest version of node: v9.2.0
To run: protractor conf.js
The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
* webdriver-manager update
* Start:  webdriver-manager start
* Stop: webdriver-manager shutdown 
[Documentation for Protractor] (http://www.protractortest.org/#/)
