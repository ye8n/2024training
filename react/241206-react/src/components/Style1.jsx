import "./style1.css";
import myStyle from "./Style1.module.css";

function Style1() {
  return (
    <>
      <h2 className="bg">css-modules</h2>
      <h3 className={myStyle.bg}>js기반의 스타일 모듈 시스템</h3>
    </>
  );
}

export default Style1;