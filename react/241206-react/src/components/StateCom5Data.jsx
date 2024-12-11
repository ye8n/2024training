import { useState } from "react";
import dataList from "../assets/DB/dataList";

function StateCom5Data() {
  // const [data, setData] = useState(dataList);
  const [ data ] = useState(dataList);
  
  return (
    <section className="wrapper">
      <h2>외부 데이터 처리</h2>
      <ul>
        {
          data.map((elem) => (
            <li key={elem.id}>
              <p>{elem.coffee}</p>
              <p>{elem.tea}</p>
              <p>{elem.drinks}</p>
              <p>{elem.others}</p>
            </li>
          ))
        }
      </ul>
      <hr />
      <ol>
        {
          data.map(({id, coffee, tea, drinks, others}) => (
            <li key={id}>
              <p>{coffee}</p>
              <p>{tea}</p>
              <p>{drinks}</p>
              <p>{others}</p>
            </li>
          ))
        }
      </ol>
    </section>
  );
}

export default StateCom5Data;