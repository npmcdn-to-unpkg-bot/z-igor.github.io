$(document).ready();

$("#menu").hide();

$("#dropmenu").click(function() {
	$("#menu").fadeIn(200);
	$("#menu ul").css({
		"right":"0"
	});
});

$("#close").click(function() {
	$("#menu").fadeOut(100);
});

$('#anchor').click(function(){
	$('body, html').animate({
		'scrollTop': $('#welc').offset().top}, 300);
	return false;
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 60,
    center: true,
    nav:true,
    stagePadding:40 ,
    items: 2,
    autoplay: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:2
    //     },
    //     1000:{
    //         items:3
    //     }
    // }
})