import React from 'react';

/* 
  (props):
  컴포넌트에 전달할 정보를 담고 있는 자바스크립트 객체이자 리액트 컴포넌트 속성
  - 부모 : 자식 컴포넌트 전달, 그 반대의 경우는 성립되지 않음
  - 자식 : 부모 컴포넌트로 전달하고자 한다면 부모 컴포넌트에서 함수로 props를 전달하여 값을 받아야 함

  부모.jsx 내용 중,
  <자식 컴포넌트 props=전달값/>

  전달값: {숫자}, '문자열, {논리연산자}, {state}, {function} ...

  리덕스 redux. 
*/

// rsc
// 컴포넌트 생성
const Coffee = (props) => { //props: 매개변수, 수정가능
  return (
    <>
    {/* props로 받아오는 값은, 객체 형태로 받아오기 때문에 객체 방식으로 읽혀야 함? { props : '커피' } */}
      <h3>{props.drink} 컴포넌트</h3>
    </>
  );
};

// 두 번째 자식 컴포넌트
/* const Tea = (props) =>{
  return(
    <>
      <h3>{props.drink}컴포넌트</h3>
    </>
  );
} */

// 구조분해, 비구조분해할당, 비구조할당
const Tea = (props) => {
  return (
    <>
      <h3>{drink} 컴포넌트</h3>
    </>
  );
}

// Water컴포넌트 생성, 

// 부모 컴포넌트로 설정
function Props1() {
  return (
    <section>
      {/* 자식 컴포넌트 */}

      {/* <자식 컴포넌트 속성=값/> */}
      <Coffee drink="아메리카노" />

      <Tea drink="녹차"/>
    </section>


  );
}


