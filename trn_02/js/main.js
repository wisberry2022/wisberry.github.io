$(function () {
  // 220620 wang topBanner 
  $('.topBanner i').on('click', function () {
    $('.topBanner').slideUp();
  })
  // 220620 wang topBanner 

  $('.mainSlider').on('init afterChange', function (e, s, c) {
    var current = $('.slick-current');
    console.log(current);
    current.addClass('on').siblings().removeClass('on');
    $('.mainArrow i').removeClass('on');
    if (c === 1) {
      $('.mainArrow i').addClass('on');
    }
    // if (c) {
    //   c += 1;
    // } else {
    //   c = 1
    // };
    $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
  });

  // main - main_visual
  $('.mainSlider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $('.mainArrow i:nth-child(1)').on('click', function () {
    $('.mainSlider').slick('slickPrev');
  })

  $('.mainArrow i:nth-child(2)').on('click', function () {
    $('.mainSlider').slick('slickNext');
  })
  // main - main_visual
})