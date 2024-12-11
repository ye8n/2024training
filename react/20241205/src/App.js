//rsf
import React from 'react';
import StyleCom1 from './components/StyleCom1';
import Props1 from './components/Props1';
import Props2 from './components/Props2';
import Props3sub from './components/Props3sub';
import Props3 from './components/Props3';
import Map1 from './components/Map1';

function App(props) {
  return (
    <div>
      {/* 인라인 방식으로 꾸미기 */}
      <h1 style={{fontSize: '3rem', padding: '0 10px', margin: 5}}>react</h1>

      {/* <StyleCom1 />
      <hr />
      <Props1 />
      <hr />
      <Props2 />
      <Props3/>
      <Props3sub/>
       */}
      
      <Map1/>

    </div>
  );
}

export default App;