import { useState } from "react";

function StateCom4() {
  const [bgColor, setBgColor] = useState('orange');

  const changeColor = () => {
    // setBgColor('tomato')
    setBgColor(bgColor === 'orange' ? 'tomato' : 'orange');
  }

  return (
    <section className="wrapper">
      <h2>박스를 클릭할 때마다 두 개의 색상이 번갈아 나옴</h2>
      <div style={{ cursor: 'pointer', backgroundColor: bgColor, padding: 20, border: '1px solid #000'}} onClick={changeColor}>backgroundColor: <strong>{bgColor}</strong></div>
    </section>
  );
}

export default StateCom4;