import { useState } from "react";

function StateCom3() {
  const [isShow, setIsShow] = useState(false);

  const onShow = () => setIsShow(true);
  const onHide = () => setIsShow(false);
  const onToggle = () => setIsShow(!isShow);
  // ! not

  return (
    <section className="wrapper">
      <h2>연산자를 통한 상태값 변화</h2>
      <ul>
        <li>버튼을 클릭하면 onShow 함수 호출</li>
        <li>함수실행(isShow 상태값이 setIsShow의 값으로 변경)</li>
        <li>변경된 상태 값을 비교 혹은 연산</li>
      </ul>
      <p>
        <button onClick={onShow}>show</button>
        <button onClick={onHide}>hide</button>
        <button onClick={onToggle}>{isShow ? 'hide': 'show'}</button>
      </p>
      <hr />
      {
        isShow ? <div style={{ width: 200, height: 100, marginBottom: 10, backgroundColor: 'tomato' }}>box1</div> : null
      }
      <hr />
      {
        isShow && <div style={{ width: 200, height: 100, marginBottom: 10, backgroundColor: 'orange' }}>true 조건일때 보임</div>
      }
      <hr />
      {/* isShow의 값이 true면 B조건까지 읽지 않아도 참으로 반환되기 때문에 뒤의 내용이 나오지 않음 */}
      {
        isShow || <div style={{ width: 200, height: 100, marginBottom: 10, backgroundColor: 'teal' }}>false 조건일 때만 보임</div>
      }
    </section>
  );
}

export default StateCom3;