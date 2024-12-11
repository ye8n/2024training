/* 
  .map((elem, index)=> {});
  - 새로운 배열로 반환
  - .map() 사용시, key값을 요소에 부여해야 함
  - key: 고유성을 유지해야 하기 때문에 중복된 번호 사용 안 됨
  - index의 경우, key값으로 권장하지 않음. 유동성이 있기 때문
  - 안정적인 고유성을 위해, 배열 내부 요소에 id를 작성하여 key로 사용

*/

const Map1 = () => {
  // const arr = ["아메리카노", "라떼", "모카", "바닐라라떼", "에스프레소"];
  const arr = ["아메리카노", "모카", "바닐라라떼", "에스프레소"]; //중간의 라떼를 삭제함으로써, 인덱스 번호가 변경됨
  const data = [
    { no:2, name: "라떼" },
    { no:1, name: "아메리카노" },
    { no:3, name: "모카" },
    { no:4, name: "바닐라라떼" },
    { no:5, name: "에스프레소" },
  ]


  return (
    <section className="wrapper">
      <h2>.map()</h2>
      <ul>
        {/* 아래처럼 인덱스 번호로 키 값을 부여하는 것은 권장하지 않음. */}
        {
          arr.map((coffee, index)=> <li key={index}>{coffee}</li>) //두 줄 작성 시, return 작성 필요함
        }
        <hr />
        <ul>
          {
            data.map((coffee)=>{
              return <li key={coffee.no}>{coffee.name}</li>
            })
          }
        </ul>
      </ul>
    </section>
  );
};

export default Map1;