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




  // new homez

  function checkWidthWindow() {
    if($(window).width()< 993){
      sliderNewHomez();
    }else{
      $('.new-homez').owlCarousel('destroy')
    }

  }

  
  function sliderNewHomez() {
    
    $('.new-homez').owlCarousel({
      rtl:true,
      responsiveClass: true,
      autoWidth: true,
    })
  }
  
  checkWidthWindow();


  $(window).on('resize',function(e){
    checkWidthWindow();
  })

})