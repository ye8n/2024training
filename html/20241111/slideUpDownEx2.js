// 1. 내가 클릭한 것만 오픈, 나머진 다 닫힘
// 2. 자신을 클릭하면 열고 닫힘


$(function () {
  /* 첫번째 제목(h3)을 클릭하면 첫번째 p가 내려가고 다른 p는 모두 올라감
  $('.side-menu li').eq(0).children('h3').on('click', function () {
    $('.side-menu li').eq(0).children('p').slideToggle();
    $('.side-menu li').eq(1).children('p').slideUp();
    $('.side-menu li').eq(2).children('p').slideUp();
    $('.side-menu li').eq(3).children('p').slideUp();
  });
  // Menu2 가 열고 닫힘 
  $('.side-menu li').eq(1).children('h3').on('click', function () {
    $('.side-menu li').eq(1).children('p').slideToggle();
    $('.side-menu li').eq(0).children('p').slideUp();
    $('.side-menu li').eq(2).children('p').slideUp();
    $('.side-menu li').eq(3).children('p').slideUp();
  });

  $('.side-menu li:nth-child(1) h3')
  
  //방법1을 가장 많이 사용 
  // 1. 방법1
  $('.side-menu li h3').on('click', function() {
    $('.side-menu li p').slideUp();
    // 내가 클릭한 바로 그 h3
    $(this).next('p').slideToggle();
  });
  

  // 2. 방법2
  // .end() 이전 상태로 돌아감. 생략 가능.
  // .parent(); h3의 부모인 li 탐색
  // .parent().siblings(); li의 형제를 탐색. 다른 li
  // .parent().siblings().find('p'); 다른 li의 자손들 중 p 탐색
  $('.side-menu li h3').on('click', function() {
    $(this).next('p').slideToggle()
    .end()
    .parent().siblings().find('p').slideUp();
  });
  */

  //방법3
  $('.side-menu li h3').on('click', function() {
    $('.side-menu li p').not($(this).next('p')).slideUp();
    $(this).next('p').slideToggle();
  });
});