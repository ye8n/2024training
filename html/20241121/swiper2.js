// main 높이값
const mainHt = function() {
  const mainSlideHt = $(window).height() - $('nav').outerHeight() - $('footer').outerHeight();
  $('.main-slide').height(mainSlideHt);
  $('.main-slide').css({ marginTop: $('nav').height()});
};

// addEventListener('resize', 콜백함수);
// $(window).on('resize', 콜백함수);

mainHt();
// 브라우저의 사이즈가 변경되면 함수 실행
$(window).on('resize', mainHt);

// swiper
const mainSwiper = new Swiper(".main-slide", {
  slidesPerView: 1,
  loop: true,
  autoplay : {
    delay: 2500 
  },
  scrollbar : {
    el: '.swiper-scrollbar',
    hide: true
  },
  breakpoints: {
    513: {// 화면의 크기가 513보다 크거나 같으면 실행
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// swiper.on(event, handler)
mainSwiper.on('slideChange', function () {
  console.log('slide changed');
  $('.logo').toggleClass('change-bg');
});
/*
$('.gnb a').eq(0).on('click', function(e) {
  e.preventDefault();

  $('.gnb a').removeClass('colorOn');
  // 내가 클릭한 그 a에 addClass
  $(this).addClass('colorOn');

  // 해당 슬라이드 이동
  mainSwiper.slideToLoop(0);
});
$('.gnb a').eq(1).on('click', function(e) {
  e.preventDefault();

  $('.gnb a').removeClass('colorOn');
  $(this).addClass('colorOn');
  mainSwiper.slideToLoop(1);
});

const $as = document.querySelectorAll('.gnb a');
$as.forEach((a, idx) => {
  a.addEventListener();
});
*/

// 수많은 a에 인덱스 번호가 순차적으로 붙고, 각 각의 a에 함수 적용
$('.gnb a').each(function (idx, elem) {
  $(elem).on('click', function(e) {
    e.preventDefault();

    $('.gnb a').removeClass('colorOn');
    $(this).addClass('colorOn');

    mainSwiper.slideToLoop(idx);
  })
});