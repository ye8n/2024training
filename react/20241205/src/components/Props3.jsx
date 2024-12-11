import Props3sub from "./Props3sub";

const Props3 = (props) => {
  const latte = {name : "카페라떼", price: 4500};
  

  return (
    <div>
      <h2>Props3</h2>

      <Props3sub 
      name="아메리카노" //string
      price="4000"  //string
      /> 

      <Props3sub 
      name="아메리카노" //string
      price={4000} //number
      /> 

      <Props3sub 
      name={latte.name} //string
      price={latte.price} //number
      /> 

      <Props3sub 
      { ...latte} //string number
      /> 
    </div>
  );
};

export default Props3;