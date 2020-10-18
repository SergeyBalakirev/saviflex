$(function () {


  $('.banner__slider-inner').slick({
    arrows: false,
    dots: true,
  });




  $('.header__langs').click(function(event) {
    $('.header__langs, .header__lang-list').toggleClass('open');
  });


  $('.header__link--down').click(function(event) {
    $('.header__link--down, .products').toggleClass('down');
  });

  $(".wrapper .tab").click(function () {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");

});