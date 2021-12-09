export function fetchCoins() {
  return fetch("http://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
