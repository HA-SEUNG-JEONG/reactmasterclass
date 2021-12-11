import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
  height: 100%;
`;
interface Historical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<Historical[]>(
    ["ohlc", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 10000 }
  );
  const arr = () =>
    data?.map((item) => {
      let x = item.time_open.slice(5, 10);
      let y = [
        item.open.toFixed(2),
        item.high.toFixed(2),
        item.low.toFixed(2),
        item.close.toFixed(2),
        item.volume.toFixed(2),
      ];

      return { x: x, y: y };
    });
  return (
    <Container>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          width={500}
          height={300}
          type="candlestick"
          series={[
            {
              data: arr(),
            },
          ]}
          options={{
            chart: {
              type: "candlestick",
              width: 1000,
              height: 500,
            },
            title: {
              text: `${coinId} Chart`,
              align: "left",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </Container>
  );
}

export default Chart;
