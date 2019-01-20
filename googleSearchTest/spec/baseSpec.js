describe('testing google ping', () => {

	it('should ping to google', () =>{
		browser.get('https://www.google.com/');
		const googleUrl = 'https://www.google.com/';

		expect(browser.getCurrentUrl()).toBe(googleUrl);	
	});




});
