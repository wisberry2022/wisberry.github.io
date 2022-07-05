$(function () {
  $('#header .lang_switch span').on('click', function () {
    $(this).addClass('lang_toggle');
    $(this).siblings().removeClass('lang_toggle');
  });

  $('main .main_visual .container .main_slider').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '170px',
  });
})