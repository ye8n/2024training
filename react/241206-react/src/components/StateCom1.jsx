import { useState } from "react";

function StateCom1() {
  // [변수,set함수(변수의 값을 받아 상태를 업데이트하는 함수)]
  // set함수의 매개변수값을 name변수가 있는 곳으로 가서 상태를 업데이트 해라
  const [ name, setName ] = useState('커피 이름');
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("#ddd");

  const onPrice1 = () => setPrice(4500);
  const onPrice2 = () => setPrice(5000);
  const onPrice3 = () => setPrice(5500);

  const onColor1 = () => setColor('orange');
  const onColor2 = () => setColor('lightblue');
  const onColor3 = () => setColor('salmon');

  return (
    <section className="wrapper">
      <p>주문 커피는 이곳에서 확인하세요</p>
      <h3 style={{ backgroundColor: color }}>커피: {name} / 가격: {price} / 배경색 : {color}</h3>
      <hr />
      <p>주문할 커피를 선택해 주세요</p>
      <button onClick={() => setName("아메리카노")}>아메리카노</button>
      <button onClick={() => setName("카페라떼")}>카페라떼</button>
      <button onClick={() => setName("바닐라라떼")}>바닐라라떼</button>
      <hr />
      <button onClick={onPrice1}>4500원</button>
      <button onClick={onPrice2}>5000원</button>
      <button onClick={onPrice3}>5500원</button>
      <hr />
      {/* 버튼을 클릭하면 h3의 배경색 변경 */}
      <button onClick={onColor1}>orange</button>
      <button onClick={onColor2}>lightblue</button>
      <button onClick={onColor3}>salmon</button>
    </section>
  );
}

export default StateCom1;