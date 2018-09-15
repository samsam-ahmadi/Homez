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



  // carousle slider 


      let slideCount = $(".homez-carousle-items .item").length;
      $(".homez-carousle-items .counter").html(`${slideCount} / <span>1</span>`)
      function nextSlide(){
        let activeSlide = $('.homez-carousle-items .item.active');
        let numCount = $(".homez-carousle-items .counter span").text();
        let slide;
        activeSlide.removeClass("active");
        if(activeSlide.next(".homez-carousle-items .item").length !=0 ){
          slide = activeSlide.next();
          numCount++;
        }else{
          slide = $(".homez-carousle-items .item:nth-child(2)")
          numCount =1;
        }
        slide.addClass("active");
        $(".homez-carousle-items .counter").html(`${slideCount} / <span>${numCount}</span>`)
      }
  
      function prevSlide(){
        let activeSlide = $('.homez-carousle-items .item.active');
        let numCount = $(".homez-carousle-items .counter span").text();
        let slide;
        activeSlide.removeClass("active");
        if(activeSlide.prev(".homez-carousle-items .item").length !=0 ){
          slide = activeSlide.prev();
          numCount--
        }else{
          slide = $(".homez-carousle-items .item:last-child")
          numCount = slideCount;
        }
        slide.addClass("active");
        $(".homez-carousle-items .counter").html(`${slideCount} / <span>${numCount}</span>`)
      }
  
      
          $("#next-slide").on("click",function(e){
            nextSlide();
          })
      
      
          $("#prev-slide").on("click",function(e){
            prevSlide();
          })
  // document ready
})


