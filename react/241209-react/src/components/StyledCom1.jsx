/* 
  styled-components 사용

  const 컴포넌트명 = 참조변수명.태그명`css 적용값`;
  const 컴포넌트명 = styled('태그명')`css 적용값`;
*/
import styled from 'styled-components';

const Wrapper = styled.section`
  border: 1px solid #000;
  margin: 20px; padding: 20px;
`;
const Box1 = styled.p`
  background-color: lightblue;
  width: 80%;
  padding: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: orange;
    color: #fff;
  }
`;
const Box2 = styled('div')`
  border: 3px solid orange;
  padding: 20px;
  margin: 20px 0;
  font-weight: bold;
`;
const Button = styled('button')`
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
  border-radius: 20px;
  padding: 5px 20px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
    color: #000;
  }
`;

function StyledCom1() {
  return (
    <Wrapper>
      <h2>styled-components</h2>
      <Box1>첫번째 박스</Box1>
      <Box2>두번째 박스</Box2>
      <Button>버튼</Button>
    </Wrapper>
  );
}

export default StyledCom1;