$(function () { 

  $('.header__btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--close')
  })
  
  $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close')
  })


  //slider main
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });



})