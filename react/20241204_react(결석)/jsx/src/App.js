/* 
  import React from 'react';// node_modules에서 가져옴
  
  컴포넌트명: 첫글자는 *반드시* 대문자로 시작
  컴포넌트 파일 종류 : .js, .jsx

  rsf : 선언 함수형 컴포넌트 단축키
    function 컴포넌트명() {
      return (
        <> <- fragment
          JSX 문법의 영역
          화면에 보이는 영역
          html과 비슷하나 태그가 아님
          개발을 쉽게 하기 위해 태그 형식으로 사용
        </>
      )
    }

  rsc : 함수 표현식(리터럴) 컴포넌트 단축키
    const 컴포넌트명 = () => {
      return (
        <main>
        </main>
      )
    }
*/

import React from 'react';
import Ex1 from './components/Ex1';

function App(props) {
  return (
    <>
      <h1>react</h1>
      {/* 대문자로 시작한 태그는 컴포넌트 */}
      <Ex1 />
    </>
  );
}

export default App;