import '../../libs/slick slider/slick.min.js';
$(function () {
	// FIND THE PARENT OF SLIDES
	$('.team-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 300,
		arrows: false,
		pauseOnFocus: false,
		waitForAnimate: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 1,
				},
			}
		]
	})
})

$(function () {
	// FIND THE PARENT OF SLIDES
	$('.gallery-container').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 300,
		arrows: false,
		pauseOnFocus: false,
		waitForAnimate: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	})
})


$(function () {
	// FIND THE PARENT OF SLIDES
	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 300,
		arrows: false,
		pauseOnFocus: false,
		waitForAnimate: true,
		swipeToSlide: true,
		dots: true,
		responsive: [
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 583,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	})
})

