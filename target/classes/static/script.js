fetch('https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-XRP,KRW-MASK,KRW-TRX,KRW-NEO')
  .then(response => {
    if (!response.ok) {
      throw new Error('API 호출 중 문제가 발생했습니다.');
    }
    return response.json();
  })
  .then(data => {
    const btcPrice = data[0].trade_price;
    const ethPrice = data[1].trade_price;
    const usdtPrice = data[2].trade_price;
    const bnbPrice = data[3].trade_price;
    const usdcPrice = data[4].trade_price;
    const xrpPrice = data[5].trade_price;

    const formattedBtcPrice = Number(btcPrice).toLocaleString();
    const formattedEthPrice = Number(ethPrice).toLocaleString();
    const formattedUsdtPrice = Number(usdtPrice).toLocaleString();
    const formattedBnbPrice = Number(bnbPrice).toLocaleString();
    const formattedUsdcPrice = Number(usdcPrice).toLocaleString();
    const formattedXrpPrice = Number(xrpPrice).toLocaleString();

    const btcPriceElement = document.getElementById('btc-price');
    const ethPriceElement = document.getElementById('eth-price');
    const usdtPriceElement = document.getElementById('xrp-price');
    const bnbPriceElement = document.getElementById('mask-price');
    const usdcPriceElement = document.getElementById('trx-price');
    const xrpPriceElement = document.getElementById('neo-price');

    btcPriceElement.innerText = `₩ ${formattedBtcPrice}`;
    ethPriceElement.innerText = `₩ ${formattedEthPrice}`;
    usdtPriceElement.innerText = `₩ ${formattedUsdtPrice}`;
    bnbPriceElement.innerText = `₩ ${formattedBnbPrice}`;
    usdcPriceElement.innerText = `₩ ${formattedUsdcPrice}`;
    xrpPriceElement.innerText = `₩ ${formattedXrpPrice}`;
  })
  .catch(error => {
    console.log('API 호출 중 오류 발생:', error);
  });
