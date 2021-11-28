
$(document).ready(function(){

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 10,
    loop: true,
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
