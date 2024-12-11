import React from 'react';
import './App.css';
import StateCom1 from './components/StateCom1';
import StateCom2 from './components/StateCom2';
import StateCom3 from './components/StateCom3';
import StateCom4 from './components/StateCom4';
import StateCom5Data from './components/StateCom5Data';
import Style1 from './components/Style1';

/* 
  state
    리액트 컴포넌트 상태를 말하며 변경 가능한 데이터
    일반적으로 렌더링 될 때마다 화면에 새롭게 그려내는 방식이므로 상태 유지를 하지 못함
    재렌더링되는 경우 함수, 변수 등 다시 초기화되기 때문에 값을 유지하기 위해 useState란 hook 사용

    const [state, setState] = useState(초기값);
    const [상태데이터(변수), 상태값을 변경하기 위한 함수] = useState(초기값);
    초기값: 숫자, 문자, 논리, 배열, 객체 등등
    set함수의 이름의 첫글자는 대문자 setName
*/

function App() {
  return (
    <>
      <h1>state 상태</h1>
      {/* <StateCom1 /> */}
      {/* <StateCom2 /> */}
      {/* <StateCom3 /> */}
      {/* <StateCom4 /> */}
      {/* <StateCom5Data /> */}
      <Style1 />
    </>
  );
}

export default App;