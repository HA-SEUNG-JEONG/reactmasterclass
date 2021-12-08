import { useParams, useLocation } from "react-router";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  // console.log(state.name); //해당 Coin 이름
  return (
    <Container>
      <Header>
        {/* state가 존재하면 coin name 보여주고 아니면 Loading... */}
        <Title>{state?.name || "Loading"}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
