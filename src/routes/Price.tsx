import { useQuery } from "react-query";
import styled, { keyframes } from "styled-components";
import { fetchCoinTickers } from "../api";

const Container = styled.div`
  padding: 0 10px;
  width: 100%;
`;

const priceani = keyframes`
    0%{
      opacity:0;
    }50%{
      opacity:0.5;
    }100%{
      opacity:1;
    }
  `;

const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.containerColor};
  color: ${(props) => props.theme.textColor};
  padding: 10px 15px;
  margin-top: 15px;
  animation: ${priceani} 1s ease-in-out;
  border-radius: 10px;
  &:first-child {
    margin-top: 30px;
  }
`;

const TagContent = styled.span<{ isMinus: boolean }>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) =>
    props.isMinus ? props.theme.plusColor : props.theme.minusColor};
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 1000;
  color: black;
`;

interface Icoin {
  coinId: string;
}

interface ITickersInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: Icoin) {
  const { isLoading, data } = useQuery<ITickersInfo>(
    ["price", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  return (
    <Container>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <>
          <Tags>
            <Title>Percent Change 1 hours: </Title>
            <TagContent
              isMinus={
                data?.quotes.USD.percent_change_1h.toString().slice(0, 1) !==
                "-"
              }
            >{`$ ${data?.quotes.USD.percent_change_1h}%`}</TagContent>
          </Tags>
          <Tags>
            <Title>Percent Change 12 hours: </Title>
            <TagContent
              isMinus={
                data?.quotes.USD.percent_change_12h.toString().slice(0, 1) !==
                "-"
              }
            >{`$ ${data?.quotes.USD.percent_change_12h}%`}</TagContent>
          </Tags>
          <Tags>
            <Title>Percent Change 24 hours:</Title>
            <TagContent
              isMinus={
                data?.quotes.USD.percent_change_24h.toString().slice(0, 1) !==
                "-"
              }
            >{`$ ${data?.quotes.USD.percent_change_24h}%`}</TagContent>
          </Tags>
          <Tags>
            <Title>Percent Change 24h_24h hours:</Title>
            <TagContent
              isMinus={
                data?.quotes.USD.volume_24h_change_24h
                  .toString()
                  .slice(0, 1) !== "-"
              }
            >{`$ ${data?.quotes.USD.volume_24h_change_24h}%`}</TagContent>
          </Tags>
          <Tags>
            <Title>Percent Change 7 days:</Title>
            <TagContent
              isMinus={
                data?.quotes.USD.percent_change_7d.toString().slice(0, 1) !==
                "-"
              }
            >{`$ ${data?.quotes.USD.percent_change_7d}%`}</TagContent>
          </Tags>
          <Tags>
            <Title>Percent Change year:</Title>
            <TagContent
              isMinus={data?.quotes.USD.percent_change_1y.toString() !== "-"}
            >{`$ ${data?.quotes.USD.percent_change_1y}%`}</TagContent>
          </Tags>
          <Tags>
            <Title>Percent Change ath_price :</Title>
            <TagContent
              isMinus={data?.quotes.USD.ath_price.toString() !== "-"}
            >{`$ ${data?.quotes.USD.ath_price}%`}</TagContent>
          </Tags>
        </>
      )}
    </Container>
  );
}

export default Price;
