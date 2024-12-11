const Props3sub = ({ name, price }) => {
  
  return (
    <>
      <h3>Props3 자식 컴포넌트</h3>
      <p>
        커피: {name} ({typeof name})
      </p>
      <p>
        가격: {price}원 ({typeof name})
      </p>
    </>
  );
};

export default Props3sub;