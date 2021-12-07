import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "bnb-binance-coin",
    name: "Binance Coin",
    symbol: "BNB",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "usdt-tether",
    name: "Tether",
    symbol: "USDT",
    rank: 4,
    is_new: false,
    is_active: true,
    type: "token",
  },
  {
    id: "sol-solana",
    name: "Solana",
    symbol: "SOL",
    rank: 5,
    is_new: false,
    is_active: true,
    type: "token",
  },
  {
    id: "ada-cardano",
    name: "Cardano",
    symbol: "ADA",
    rank: 6,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "xrp-xrp",
    name: "XRP",
    symbol: "XRP",
    rank: 7,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 8,
    is_new: false,
    is_active: true,
    type: "token",
  },
  {
    id: "usdc-usd-coin",
    name: "USD Coin",
    symbol: "USDC",
    rank: 9,
    is_new: false,
    is_active: true,
    type: "token",
  },
  {
    id: "luna-terra",
    name: "Terra",
    symbol: "LUNA",
    rank: 10,
    is_new: false,
    is_active: true,
    type: "coin",
  },
];

function Coins() {
  return (
    <Container>
      <Header>
        <Title>Coin Tracker</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}
export default Coins;
