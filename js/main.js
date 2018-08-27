$(document).ready(function () {





  $('.categories').owlCarousel({
    margin: 10,
    rtl:true,
    responsiveClass: true,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      470: {
        items: 2,
      },
      600: {
        items: 3,
        nav: false
      },
      900: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  })





})