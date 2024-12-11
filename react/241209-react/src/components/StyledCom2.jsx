import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background-color: #333;
  display: grid;
  place-items: center;
  height: 50vh
`;
// 실행 컴포넌트 앞에 작성
const mov = keyframes`
  25% { transform : translateY(-20px) rotate(20deg)}
  50% { transform : translateY(0) rotate(0)}
  75% { transform : translateY(-20px) rotate(-20deg)}
`;

const Tree = styled.div`
  font-size: 5rem;
  animation: ${mov} 0.5s infinite ease-in-out;
  &:hover {
    animation: pause
  }
`;

function StyledCom2() {
  return (
    <>
      <h2>styled-components Animation</h2>
      <Container>
        <Tree>🎄</Tree>
      </Container>
    </>
    
  );
}

export default StyledCom2;