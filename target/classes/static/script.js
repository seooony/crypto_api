fetch('/crypto/ticker?market=BTC-KRW')
  .then(response => response.json())
  .then(data => {
    const btcPrice = data[0].trade_price;
    const btcPriceElement = document.getElementById('btc-price');
    btcPriceElement.innerText = `Bitcoin 시세: ${btcPrice}`;
  })
  .catch(error => {
    console.log('API 호출 중 오류 발생:', error);
  });
