// 대메뉴에 마우스를 올리면, 소메뉴가 내려옴

// .global-menu. .menu-title이 아니라 .global-menu>li 인 이유: 범위를 대메뉴에만 한정하면 소메뉴를 선택하려고 마우스가 떠나는순간 메뉴가 닫힘


/* 
  $('.global-menu>li').on('mouseenter',()=>{
  $('.global-menu .sub-menu').slideDown();
})

$('.global-menu>li').on('mouseleave',()=>{
  $('.global-menu .sub-menu').slideUp();
}) 
  */

/* 
$('.global-menu > li').on({
  'mouseenter':() =>{
    $('.global-menu .sub-menu').stop(). slideDown();
  },
  'mouseleave': ()=>{
    $('.global-menu .sub-menu').stop().slideUp();
  }
}) 

 */

$('.global-menu > li').on({
  'mouseenter': function(){
    // this: 내가 마우스를 올린 그 li의 자손 중, .sub-menu만 적용
    $(this).find('.sub-menu').stop().slideDown();
  },
  'mouseleave': function(){
    $(this).find('.sub-menu').stop().slideUp();
  }
})