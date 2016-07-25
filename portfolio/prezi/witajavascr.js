$(document).ready(function(){

		$(window).scroll(function(){
			var wScroll = $(this).scrollTop();

		$(".two").css({
			'transform' : 'translate(0px, '+ -wScroll /20 +'%)'
		});

		$(".one").css({
			'transform' : 'translate(0px, '+ wScroll /20 +'%)'
		});

		$(".three").css({
			'transform' : 'translate(0px, '+ wScroll /20 +'%)'
		});

		if (wScroll > $('.wrapper').offset().top-($(window).height()/2)) {
			$('.wrapper figure').each(function(i){

				setTimeout(function(){
				$('.wrapper figure').eq(i).addClass('is-showing');
			}, 100 * (i+1));
			});
		}

		if(wScroll > $('.around_window').offset().top - $(window).height()){
				$('.around_window').css({'background-position':'center '+ (wScroll - $('.around_window').offset().top) +'px'});

				var opacity = (wScroll - $('.around_window').offset().top + 300) / (wScroll/10);

				$('.window-tint').css({'opacity': opacity});
		}

	});

});