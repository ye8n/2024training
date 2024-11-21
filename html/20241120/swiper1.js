const mainSwiper = new Swiper("#main-slide", {
  speed: 600,
  parallax: true,// 시간차 움직임
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // 하단의 클릭할 수 있는 작은 동그라미 버튼 
    // type: 'progressbar' //상태바
    type: 'fraction' // 하단에 페이지네이션이 숫자로 등장 1/4
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop : true,
  autoplay : {
    delay: 2500,
  }
});

const subSwiper = new Swiper(".sub-slide", {
  speed: 1500,
  parallax: true,// 시간차 움직임
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // 하단의 클릭할 수 있는 작은 동그라미 버튼 
    dynamicBullets : true // 현재 페이지가 큰 동그라미로 바뀜
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop : true,
  autoplay : {
    delay: 2500,
  }
});