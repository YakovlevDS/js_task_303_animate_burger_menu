$('body').on('click', '.js-burger-toggle-colapse-spin', function(e) {
		e.preventDefault();
		$(this).toggleClass('colapse-spin');
	});

	$('body').on('click', '.js-burger-toggle-colapse-down-spin', function(e) {
		e.preventDefault();
		$(this).toggleClass('colapse-down-spin');
	});

	$('body').on('click', '.js-burger-toggle-foldin', function(e) {
		e.preventDefault();
		$(this).toggleClass('foldin');
	});

	$('body').on('click', '.js-burger-toggle-vortex', function(e) {
		e.preventDefault();
		$(this).toggleClass('vortex');
	});

	$('body').on('click', '.js-burger-toggle-foldin-out', function(e) {
		e.preventDefault();
		$(this).toggleClass('foldin-out');
	});

	$('body').on('click', '.js-burger-toggle-revolve', function(e) {
		e.preventDefault();
		$(this).toggleClass('revolve');
	});