$('.slider__winners').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,  
  nextArrow: '<i class="fas fa-angle-right"></i>',
  prevArrow: '<i class="fas fa-angle-left"></i>',
});

$('.slider__promo').slick({
	dots: true,
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  
  	arrows: false,
});