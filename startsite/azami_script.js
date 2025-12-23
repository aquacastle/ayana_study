$(function(){

	const body = $('body');
	const menuBtn = $('#menu-btn');

	menuBtn.on('click', function(){
		body.toggleClass('menu-open');
	});

});
