$(function(){

$('.header-panel__menu img').click(function(){
    if($('.menu-mob').css('display') == 'none') {
        $('.menu-mob').css({
            display: 'inline-block'
        });
    } else {
        $('.menu-mob').css({
            display: 'none'
        });
    }
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

$('.arrow1').click(function(){
	if($('.list-works__type-work:nth-child(1)').css('order') == '1') {
        $('.list-works__type-work:nth-child(1)').css({
			order: '2'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '3'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '1'
		});
    } else if ($('.list-works__type-work:nth-child(1)').css('order') == '2'){
        $('.list-works__type-work:nth-child(1)').css({
			order: '3'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '1'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '2'
		});
    } else if ($('.list-works .list-works__type-work:nth-child(1)').css('order') == '3'){
        $('.list-works__type-work:nth-child(1)').css({
			order: '1'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '2'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '3'
		});
	}
});	

$('.arrow2').click(function(){
	if($('.list-works__type-work:nth-child(1)').css('order') == '1') {
        $('.list-works__type-work:nth-child(1)').css({
			order: '3'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '1'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '2'
		});
    } else if ($('.list-works__type-work:nth-child(1)').css('order') == '2'){
        $('.list-works__type-work:nth-child(1)').css({
			order: '1'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '2'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '3'
		});
    } else if ($('.list-works .list-works__type-work:nth-child(1)').css('order') == '3'){
        $('.list-works__type-work:nth-child(1)').css({
			order: '2'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '3'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '1'
		});
	}
});

$('.works__switch button:nth-child(1)').click(function(){
	$('.works__switch button:nth-child(1)').css({ 
		'background-color': '#ff4e2e'
	});
	$('.works__switch button:nth-child(2)').css({ 
		'background-color': '#ebebeb'
	});
	$('.works__switch button:nth-child(3)').css({ 
		'background-color': '#ebebeb'
	});
	
	if ($('body').css('width') <= '1190px') {
		$('.list-works__type-work:nth-child(1)').css({
			order: '1',
			display: 'block'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '2',
			display: 'block'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '3',
			display: 'none'
		});
	} else if ($('body').css('width') <= '999px' & $('body').css('width') > '720px') {
			$('.list-works__type-work:nth-child(1)').css({
				order: '1',
				display: 'block'
			});
			$('.list-works__type-work:nth-child(2)').css({
				order: '2',
				display: 'block'
			});
			$('.list-works__type-work:nth-child(3)').css({
				order: '3',
				display: 'none'
			});
	} else if ($('body').css('width') <= '720px') {
		$('.list-works__type-work:nth-child(1)').css({
			order: '1',
			display: 'block'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '2',
			display: 'none'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '3',
			display: 'none'
		});
	}
});

$('.works__switch button:nth-child(2)').click(function(){

	$('.works__switch button:nth-child(1)').css({ 
		'background-color': '#ebebeb'
	});
	$('.works__switch button:nth-child(2)').css({ 
		'background-color': '#ff4e2e'
	});
	$('.works__switch button:nth-child(3)').css({ 
		'background-color': '#ebebeb'
	});
	
	if ($('body').css('width') <= '1190px') {	
		$('.list-works__type-work:nth-child(1)').css({
			order: '3',
			display: 'none'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '1',
			display: 'block'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '2',
			display: 'block'
		});
	} else if ($('body').css('width') <= '999px' & $('body').css('width') > '720px') {
		$('.list-works__type-work:nth-child(1)').css({
			order: '3',
			display: 'none'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '1',
			display: 'block'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '2',
			display: 'block'
		});
	} else if ($('body').css('width') <= '720px') {
		$('.list-works__type-work:nth-child(1)').css({
			order: '3',
			display: 'none'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '1',
			display: 'none'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '2',
			display: 'block'
		});
	}
});

$('.works__switch button:nth-child(3)').click(function(){

	$('.works__switch button:nth-child(1)').css({ 
		'background-color': '#ebebeb'
	});
	$('.works__switch button:nth-child(2)').css({ 
		'background-color': '#ebebeb'
	});
	$('.works__switch button:nth-child(3)').css({ 
		'background-color': '#ff4e2e'
	});
	
	if ($('body').css('width') <= '1190px') {
		$('.list-works__type-work:nth-child(1)').css({
			order: '2',
			display: 'block'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '3',
			display: 'none'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '1',
			display: 'block'
		});
	} else if ($('body').css('width') <= '999px' & $('body').css('width') > '720px') {
		$('.list-works__type-work:nth-child(1)').css({
			order: '2',
			display: 'block'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '3',
			display: 'none'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '1',
			display: 'block'
		});
	} else if ($('body').css('width') <= '720px') {
		$('.list-works__type-work:nth-child(1)').css({
			order: '2',
			display: 'none'
		});
		$('.list-works__type-work:nth-child(2)').css({
			order: '3',
			display: 'block'
		});
		$('.list-works__type-work:nth-child(3)').css({
			order: '1',
			display: 'none'
		});
	}
});

});