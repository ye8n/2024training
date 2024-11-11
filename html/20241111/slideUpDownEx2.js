// 1. 내가 클릭한 것만 오픈, 나머진 다 닫힘
// 2. 자신을 클릭하면 열고 닫힘

$(function(){
  // 첫 번째 제목(h3)을 클릭하면 첫 번째 p가 내려가고, 다른 p는 모두 올라감

  $('.side-menu li').eq(0).children('h3').on('click', function () {
    $('.side-menu li').eq(0).children('p').slideToggle();
    $('.side-menu li').eq(1).children('p').slideUp();
    $('.side-menu li').eq(2).children('p').slideUp();
    $('.side-menu li').eq(3).children('p').slideUp();
  });
});