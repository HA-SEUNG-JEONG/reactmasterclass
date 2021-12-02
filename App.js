import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

//Box 변수를 상속받음
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Circle bgColor="greenyellow" />
      <Circle bgColor="red" />
    </Father>
  );
}

export default App;
