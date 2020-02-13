$(function(){

$('nav a').on('click', function(event){
	event.preventDefault();

	let href = $(this).attr('href');

	let offset = $(href).offset().top;

	$('body, html').animate({
		scrollTop: offset,
	}, 700);
});

$('.header-panel__menu img').click(function(){
    if($('.menu-mobail').css('display') == 'none') {
        $('.menu-mobail').css({
            display: 'inline-block'
        });
    } else {
        $('.menu-mobail').css({
            display: 'none'
        });
    }
});

$('.menu-mobail nav a').click(function(){
	$('.menu-mobail').css({
		display: 'none'
	});
});

$('.to-order').click(function(){
	$('.phone').fadeIn(500);

	$('html, body').css({
	    overflow: 'hidden',
	    height: '100%'
	});
});

$('.info').click(function(){
	$('.email').fadeIn(500);

	$('html, body').css({
	    overflow: 'hidden',
	    height: '100%'
	});
});

$('.phone').click(function(event){
	if(event.target == this) {
		$(this).fadeOut(500);
		
		$('html, body').css({
		    overflow: 'visible',
		    height: 'auto'
		});
	}
});

$('.email').click(function(event){
	if(event.target == this) {
		$(this).fadeOut(500);
		
		$('html, body').css({
		    overflow: 'visible',
		    height: 'auto'
		});
	}
});

var firstBlock = $('.works__item:nth-child(1)');
var secondBlock = $('.works__item:nth-child(2)');
var thirdBlock = $('.works__item:nth-child(3)');

var firstSwitch = $('.works__switch button:nth-child(1)');
var secondSwitch = $('.works__switch button:nth-child(2)');
var thirdSwitch = $('.works__switch button:nth-child(3)');

$('.works__left-arrow').click(function(){
	if(firstBlock.css('order') == '1') {
        firstBlock.css({
			order: '2',
		});
		secondBlock.css({
			order: '3',
		});
		thirdBlock.css({
			order: '1',
		});
    } else if (firstBlock.css('order') == '2'){
        firstBlock.css({
			order: '3'
		});
		secondBlock.css({
			order: '1'
		});
		thirdBlock.css({
			order: '2'
		});
    } else if (firstBlock.css('order') == '3'){
        firstBlock.css({
			order: '1'
		});
		secondBlock.css({
			order: '2'
		});
		thirdBlock.css({
			order: '3'
		});
	}
});	

$('.works__right-arrow').click(function(){
	if(firstBlock.css('order') == '1') {
        firstBlock.css({
			order: '3'
		});
		secondBlock.css({
			order: '1'
		});
		thirdBlock.css({
			order: '2'
		});
    } else if (firstBlock.css('order') == '2'){
        firstBlock.css({
			order: '1'
		});
		secondBlock.css({
			order: '2'
		});
		thirdBlock.css({
			order: '3'
		});
    } else if (firstBlock.css('order') == '3'){
        firstBlock.css({
			order: '2'
		});
		secondBlock.css({
			order: '3'
		});
		thirdBlock.css({
			order: '1'
		});
	}
});

firstSwitch.click(function(){
	firstSwitch.css({ 
		'background-color': '#ff4e2e'
	});
	secondSwitch.css({ 
		'background-color': '#ebebeb'
	});
	thirdSwitch.css({ 
		'background-color': '#ebebeb'
	});
	
	if ($('body').css('width') <= '1190px') {
		firstBlock.css({
			order: '1',
			display: 'block'
		});
		secondBlock.css({
			order: '2',
			display: 'block'
		});
		thirdBlock.css({
			order: '3',
			display: 'none'
		});
	} else if ($('body').css('width') <= '999px' & $('body').css('width') > '720px') {
		firstBlock.css({
				order: '1',
				display: 'block'
			});
			secondBlock.css({
				order: '2',
				display: 'block'
			});
			thirdBlock.css({
				order: '3',
				display: 'none'
			});
	} else if ($('body').css('width') <= '720px') {
		firstBlock.css({
			order: '1',
			display: 'block'
		});
		secondBlock.css({
			order: '2',
			display: 'none'
		});
		thirdBlock.css({
			order: '3',
			display: 'none'
		});
	}
});

secondSwitch.click(function(){

	firstSwitch.css({ 
		'background-color': '#ebebeb'
	});
	secondSwitch.css({ 
		'background-color': '#ff4e2e'
	});
	thirdSwitch.css({ 
		'background-color': '#ebebeb'
	});
	
	if ($('body').css('width') <= '1190px') {	
		firstBlock.css({
			order: '3',
			display: 'none'
		});
		secondBlock.css({
			order: '1',
			display: 'block'
		});
		thirdBlock.css({
			order: '2',
			display: 'block'
		});
	} else if ($('body').css('width') <= '999px' & $('body').css('width') > '720px') {
		firstBlock.css({
			order: '3',
			display: 'none'
		});
		secondBlock.css({
			order: '1',
			display: 'block'
		});
		thirdBlock.css({
			order: '2',
			display: 'block'
		});
	} else if ($('body').css('width') <= '720px') {
		firstBlock.css({
			order: '3',
			display: 'none'
		});
		secondBlock.css({
			order: '1',
			display: 'none'
		});
		thirdBlock.css({
			order: '2',
			display: 'block'
		});
	}
});

thirdSwitch.click(function(){

	firstSwitch.css({ 
		'background-color': '#ebebeb'
	});
	secondSwitch.css({ 
		'background-color': '#ebebeb'
	});
	thirdSwitch.css({ 
		'background-color': '#ff4e2e'
	});
	
	if ($('body').css('width') <= '1190px') {
		firstBlock.css({
			order: '2',
			display: 'block'
		});
		secondBlock.css({
			order: '3',
			display: 'none'
		});
		thirdBlock.css({
			order: '1',
			display: 'block'
		});
	} else if ($('body').css('width') <= '999px' & $('body').css('width') > '720px') {
		firstBlock.css({
			order: '2',
			display: 'block'
		});
		secondBlock.css({
			order: '3',
			display: 'none'
		});
		thirdBlock.css({
			order: '1',
			display: 'block'
		});
	} else if ($('body').css('width') <= '720px') {
		firstBlock.css({
			order: '2',
			display: 'none'
		});
		secondBlock.css({
			order: '3',
			display: 'block'
		});
		thirdBlock.css({
			order: '1',
			display: 'none'
		});
	}
});

});