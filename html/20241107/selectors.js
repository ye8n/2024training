/* 
jQuery() 기본구조
$('대상').method();  혹은 jQuery()

https://api.jquery.com/category/selectors/
jQuery('*'); 제이쿼리 방식으로, 전체 선택자 탐색
$('#id'); id 선택자, id 탐색
$('.class'); 클래스 선택자, 탐색
$('#id > .class, type type); 다중 선택자 탐색
$('type:nth-child(n)'); 
$('type [attribute=value]');
$(':selection');

.method(); 
travesing; 
$().parent(); 직계 부모 노드 탐색
$().parents(); 모든 부모 노드 탐색, 조상까지 
$().children(); 모든 직계 자식 노드 탐색. 일촌 관계의 자식들만 탐색
$().siblings(); 형제 노드 탐색
$().prev()); 바로 이전 형제 노드 탐색
$().prevAll());이전 형제 노드 '모두 탐색
$().next; 바로 다음 형제 노드 탐색
$().nextAll; 다음 형제 노드 '모두 탐색
$().first; 일치하는 요소에서 첫 번째 노드 탐색
$().last; 일치하는 요소에서 마지막 노드 탐색
$().find; 일치하는 하위 노드 탐색. 반드시 매개변수 작성해야 함
$().filter; 일치하는 노드 탐색(주로 삭제 시에 사용)
 */

/* css 속성 적용하기

.style.backgroundColor <JS 방식 

이하 jQuery 방식
$().css('속성');  //css 속성 탐색
$().css('속성','값'); //속성과 값 적용 (한 가지)
$().css({'속성':'값', '속성':'값', '속성':'값'}); //여러 개의 속성과 값 적용 // 숫자는 '' 안 써도 됨 */

/* 문서 준비 이벤트  
JS:
window.onload = function() {}
document.addEventListener('DOMContentLoaded', function() {});

이하 jQuery :
$(document).ready(function() {}); 문서를 불러온 다음, 실행 // document 객체가 다 불러와지면 함수를 실행하라
*/

//docuent에 인용부호 넣지 않기
$(document).ready(function () {//문서준비이벤트
  $('body').css('background-color', '#CCC');

  $('body *').css({ 'border': '3px solid #000', 'padding': 10, 'margin': '1rem' });

  console.log($('a'));

  const aParent = $('a').parent(); //a의 1촌 부모를 탐색
  console.log(aParent);
  // method cahining : 여러 개의 메서드를 체인처럼 연결하는 방식
  $('a').parent().css({ 'border-color': '#fa4032' });

  // 매개변수를 지정하지 않으면, a의 상위 노드들 모두 탐색. 즉 body,html까지 탐색함
  $('a').parents('#wrapper').css({ borderStyle: 'dashed' });

  $('.container').children(); //자식 노드 탐색. 매개변수를 지정하지 않으면 같은 라인의 모든 자식 노드 탐색

  $('.container').children('h1').css({ backgroundColor: 'orange' });

  $('li.part').siblings();// li.part의 형제 탐색
  $('li.part').siblings().css({ backgroundColor: 'lightblue' });
  $('li.part').siblings('li:last-child').children().css({ display: 'block' });

  // .first(); 첫번째 탐색한 노드 반환
  // $('li.part').siblings('li:last-child').children('a:first-child').css();
  $('li.part').siblings().last().children().first().css({
    textDecoration: 'none',
    color: '#FF4545',
    borderStyle: 'dotted'
  });

  $('.p2').prev();// .p2의 앞에 작성된 형제 노드 탐색
  $('.p2').prev().css({ backgroundColor: '#FFB38E' });
  $('.p2').prevAll().css({ borderWidth: 6 });// 앞에 작성된 형제 노드 '모두' 탐색

  $('.p2').next();// .p2의 뒤에 작성된 형제 노드 탐색
  $('.p2').next().css({ backgroundColor: '#B1D690' });
  $('.p2').nextAll().css({ borderWidth: 1 });

  // .find(); 하위 노드 탐색. 반드시! 매개변수가 필요
  // $('#header').siblings('.part:last-of-type()').children('li').last().children().last().css();
  $('#header').siblings('ul').find('a:last-child').css({
    color: '#fff',
    textDecoration: 'none'
  });

  // 하위 노드에서 탐색
  $('#header').find('p').css({ backgroundColor: 'teal', color: '#fff' });

  $('.part').filter('ul');// 필터로 골라내겠다
  $('.part').filter('p').css({ color: '#0D92F4' });
  $('.part').filter('li').css({ listStyle: 'none' });

});