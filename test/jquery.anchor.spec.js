function setUpHTMLFixture() {
		setFixtures('<nav id="container" class="anchor-menu">' +
          '<h3>Anchor Menu</h3>' +
          '<ul>' +
            '<li id="menu-anchor-css"><a href="#" >CSS</a></li>' +
            '<li id="menu-anchor-html"><a href="#">HTML</a></li>' +
            '<li id="menu-anchor-coldfusion"><a href="#">ColdFusion</a></li>' +
            '<li id="menu-anchor-database"><a href="#">Database</a></li>' +
            '<li id="menu-anchor-programming"><a href="#">Programming</a></li>' +
          '</ul>' +
        '</nav>' +
        '<div id="menu-anchor-css-content">CSS content</div>' +
        '<div id="menu-anchor-html-content">HTML content</div>' +
        '<div id="menu-anchor-coldfusion-content">ColdFusion content</div>' +
        '<div id="menu-anchor-database-content">Database content</div>'+
        '<div id="menu-anchor-programming-content">Programming content</div>')
}

describe('A jQuery Anchor Plugin Test', function() {
	var spyEvent
	var plugin

	beforeEach(function() {
		setUpHTMLFixture()
	});

	it('markup should be ready', function() {
		expect($('#container')).toBeDefined()
		expect($('#container').find('[id^=menu-anchor-]').length).toEqual(5)
		expect($('[id^=menu-anchor-][id$=-content]').length).toEqual(5)
	});

	it('should be init correctly', function() {
		plugin = $('#container').MenuAnchor()
		expect(plugin).toBeDefined()
		expect($('#menu-anchor-css')).toHaveClass('selected')
	});

	describe('long process DOM change', function() {

		beforeEach(function(done) {
	      done();
	    }, 1000);

		it('should set selected on clicked', function(done) {
			plugin = $('#container').MenuAnchor()
			spyEvent = spyOnEvent($('#menu-anchor-database'), 'click')
			$('#menu-anchor-database').click()
			expect('click').toHaveBeenTriggeredOn($('#menu-anchor-database'))
	    	expect(spyEvent).toHaveBeenTriggered()
	    	setTimeout(function() {
	    		expect($('#menu-anchor-database')).toHaveClass('selected')
				expect($('#menu-anchor-css')).not.toHaveClass('selected')
				done()
	    	}, 5000)
		}, 6000);

		afterEach(function(done) {
	      done();
	    }, 1000);
	});

});