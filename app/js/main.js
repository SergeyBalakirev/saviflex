$(function () {


  function f1() {
    let out1 = document.querySelector('.header-top__products');

    out1.classList.toggle('height');
  }

  document.querySelector('.header-top__link--down').onclick = f1;

  $('.header-banner__slider-inner').slick({
    arrows: false,
  });



  $(".wrapper .tab").click(function () {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");

});