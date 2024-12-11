//rsf
import React from 'react';

function OperatorCom1(props) {
  return (
    <section>
      <h3 className='title'>삼항연산자</h3>
      <p className='border'>
        {true === true? <button>참 버튼 on</button> : <button>거짓 버튼 off</button>}
      </p>
      <h3 className='title'>논리연산자 &&</h3>
      <p className='border'>
        {true && <strong>A, B조건 모두 참인 결과로 이 내용이 보임</strong>}  
      </p>      

      <h3 className='title'>논리연산자 || A의 조건이 참인 경우, 뒤의 조건까지 읽지 않아도 참이기 때문에 멈춤</h3>
      <p className='border'>{true || <button>A조건이 참인 경우</button>}</p>
      <p className='border'>{false || <button>A조건이 거짓인 경우</button>}</p>
      <p className='border'>{undefined || <button>내용을 찾을 수 없습니다.</button>}</p>
    </section>
  );

}

export default OperatorCom1;