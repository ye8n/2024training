//StyleCom1.jsx

// rsf
import React from 'react';

// 외부 css 불러오기
import "./styleCom1.css";
import OperatorCom1 from './OperatorCom1';

function StyleCom1() {
  const h2Style={
    backgroundColor: 'orange',
    textDecoration: 'underline',
    padding: 4
  }
  return (
    // class는 html 문법이기 때문에, JSX에서는 className으로 작성
    <main className="wrapper">
      {/* 변수 대입으로 스타일 적용하기  */}
      <h2 style={h2Style}>style 적용</h2>
      <hr />
      <OperatorCom1 />
    </main>
  );
}

export default StyleCom1;