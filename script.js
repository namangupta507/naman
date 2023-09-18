//after section-2
$(document).ready(function() {
    $('.slider-top').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
    })
})


//section-5
$(document).ready(function() {
    $('#slider1').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        autoplay:true,
        prevArrow:'<span class="arrow-left"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow:'<span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }]
      });
  })


//section-6
$(document).ready(function() {
$('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<span class="arrow-left2"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
    nextArrow:'<span class="arrow-right2"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
    fade: false,
      infinite:false,
      speed: 1000,
    asNavFor: '.slider-thumb'
  });
  $('.slider-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.slider-content',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    infinite:false,
  });
})


//section-9
$(document).ready(function() {
    $('.slider2').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        autoplay:true,
        prevArrow:'<span class="arrow-left1"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow:'<span class="arrow-right1"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        autoplaySpeed:2000,
    })
})

//scroll-top button
                       // Get the button
                       let mybutton = document.getElementById("scroll-top");

                       // When the user scrolls down 20px from the top of the document, show the button
                       window.onscroll = function() {scrollFunction()};
                       
                       function scrollFunction() {
                         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                           mybutton.style.display = "block";
                         } else {
                           mybutton.style.display = "none";
                         }
                       }
                       
                       // When the user clicks on the button, scroll to the top of the document
                       function topFunction() {
                         document.body.scrollTop = 0;
                         document.documentElement.scrollTop = 0;
                       }
//