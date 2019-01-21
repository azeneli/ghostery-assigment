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

	it('should remain on Google Site if no search term entered', () => {
		const inputForm = $$('input.gLFyf.gsfi');		
		let searchQuery = '  ';
	
		inputForm.sendKeys(searchQuery);
		let button = $$('input.gLFyf.gsfi');
		button.click();

		// no search term entered so stay on sitex & staying within the site
		expect(browser.getCurrentUrl()).toBe('https://www.google.com/');
	});


});
