import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  //typescript에게 object shape을 설명
  bgColor: string;
  borderColor?: string;
  //borderColor:string으로 하면 required, : 앞에 ?을 추가하면 optional 즉 App에 굳이 전달해줘도 되지 않는 변수가 된다.
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
      {text}
    </Container>
  );
  //borderColor는 string 혹은 undefined를 가짐. 따라서 borderColor가 존재하지 않으면 white로 처리
}

export default Circle;
