const baseWidth = 1200;
const baseHeight = 800;

exports.config = {
  framework: 'jasmine',	
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/*Spec.js'],
  capabilities: {
    browserName:'chrome',        
    shardTestFiles: true,
    maxInstances: 2,
    chromeOptions: {
        args: [
            '--disable-infobars',
            '--disable-extensions',
            'verbose',
            'log-path=/tmp/chromedriver.log'
        ]
    }
  },
  
  onPrepare: function(){
  	// Auto-Pilot is non-angular app
    browser.ignoreSynchronization = true;
    // set browser window size for consistency...
    browser.manage().window().setSize(baseWidth, baseHeight);

    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(
        new SpecReporter({
            spec: {
                displayStacktrace: true
            },
            colors: {
    			success: 'green',
    			failure: 'red',
    			pending: 'yellow'
  			},	
      		prefixes: {
        		success: '✓ ',
    			failure: '✗ ',
    			pending: '* '
    		}
        })
    );

  }
};
