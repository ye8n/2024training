import { useState } from "react";

function StateCom2() {
  // 일반 변수 선언시 가상돔이기 때문에 화면 상태가 업데이트 되지 않음. 콘솔에서만 업데이트
  // let count = 0;
  const [count, setCount] = useState(0);

  const increment = () => {
    // count += 1;
    // console.log(count);
    setCount(count + 1);// set함수는 매개변수의 값을 받아 연산 후 다시 count 변수로 돌려보냄
  }
  const decrement = () => setCount(count - 1);// 현재 count 변수 상태값에서 연산

  return (
    <section className="wrapper">
      <h2>counter: {count}</h2>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </section>
  );
}

export default StateCom2;