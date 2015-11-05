describe('A jQuery Anchor Plugin Test', function() {

	beforeEach(function() {
		jasmine.getFixtures().fixturesPath = 'base/test';
		loadFixtures('page.spec.html');
	});

	it('markup should be ready', function() {
		expect($('#container')).toBeDefined();
		expect($('#container').find('[id^=menu-anchor-]').length).toEqual(5);
		expect($('[id^=menu-anchor-][id$=-content]').length).toEqual(5);
	});

	it('should be init correctly', function() {
		$('#container').MenuAnchor();
		//expect($('[id^=anchor][id$=_link]')).toBeDefined();
		//expect($('[id^=anchor][id$=_link]').length).toEqual(5);
	});

});