
//구조분해할당
const Coffee = ({name, price, size}) => {
  return(
    <>
    <p>주문한 커피는 {name}입니다. 가격은 {price}원, 사이즈는 {size}입니다.</p>
    </>
  );
}

const Props2 = () =>{
  return(
    <div className="wrapper">
      <h2>props 2</h2>
      <Coffee name="아메리카노" price="4000" size="tall"/>
      <Coffee name="카페라떼" price="4500" size="tall"/>
      <Coffee name="바닐라라떼" price="4500" size="tall"/>
    </div>
  );
};

export default Props2;