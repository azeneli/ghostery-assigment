// describe('Ensure that you are in the proper site', () => {

// 	it('should ping to google', () =>{
// 		browser.get('https://www.google.com/');
// 		const googleUrl = 'https://www.google.com/';

// 		expect(browser.getCurrentUrl()).toBe(googleUrl);	
// 	});

// });

//import basePage from '../pages/basePage';

describe('Search Functionality', () => {
	beforeEach(() =>  {
		browser.get('https://www.google.com/');	
	});

	it('should search the word by hitting key', () =>{
		const inputForm = $$('input.gLFyf.gsfi');		
		let searchQuery = 'ghostery';
	
		inputForm.sendKeys(searchQuery);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();

		// testing for page title as it indicates the you reached results page
		expect(browser.getTitle()).toBe('ghostery - Google Search');
	});

	it('should search the word by selecting the search button', () =>{
		const inputForm = $$('input.gLFyf.gsfi');		
		let searchQuery = 'ghostery';
	
		inputForm.sendKeys(searchQuery);
		let EC = protractor.ExpectedConditions;
		let button = $('[name="btnK"]');
		let isClickable = EC.elementToBeClickable(button);

		browser.wait(isClickable, 5000); //wait for an element to become clickable
		button.click();
	
		// testing for page title as it indicates the you reached results page
		expect(browser.getTitle()).toBe('ghostery - Google Search');
	});

	it('should take you to the Ghostery site if you are feeling lucky', () =>{
		const inputForm = $$('input.gLFyf.gsfi');		
		let searchQuery = 'ghostery';
	
		inputForm.sendKeys(searchQuery);
		let EC = protractor.ExpectedConditions;
		let button = $('[name="btnI"]');
		let isClickable = EC.elementToBeClickable(button);

		browser.wait(isClickable, 5000); //wait for an element to become clickable
		button.click();

		// testing for page title as it indicates the you reached results page
		expect(browser.getCurrentUrl()).toBe('https://www.ghostery.com/');
	});


});




// search results page class h1.bNg8Rb