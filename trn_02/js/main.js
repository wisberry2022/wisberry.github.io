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
  // ytplayer
  $('#utb').YTPlayer(
    {
      videoURL: 'https://youtu.be/fE1LQFdwMnw',
      containment: '.utb',
      autoPlay: true,
      mute: true,
      startAt: 0,
      opacity: 1,
      showControls: false,
      playOnlyIfVisible: true,
    });

  $('.utb .zoom').on('click', function (e) {
    e.preventDefault();
    $('#utb').YTPFullscreen();
  })
})