fetch('https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-XRP,KRW-ADA,KRW-DOGE,KRW-SOL')
  .then(response => {
    if (!response.ok) {
      throw new Error('API 호출 중 문제가 발생했습니다.');
    }
    return response.json();
  })
  .then(data => {
    const btcPrice = data[0].trade_price;
    const ethPrice = data[1].trade_price;
    const xrpPrice = data[2].trade_price;
    const adaPrice = data[3].trade_price;
    const dogePrice = data[4].trade_price;
    const solanaPrice = data[5].trade_price;

    const formattedBtcPrice = Number(btcPrice).toLocaleString();
    const formattedEthPrice = Number(ethPrice).toLocaleString();
    const formattedXrpPrice = Number(xrpPrice).toLocaleString();
    const formattedAdaPrice = Number(adaPrice).toLocaleString();
    const formattedDogePrice = Number(dogePrice).toLocaleString();
    const formattedSolanaPrice = Number(solanaPrice).toLocaleString();

    const btcPriceElement = document.getElementById('btc-price');
    const ethPriceElement = document.getElementById('eth-price');
    const xrpPriceElement = document.getElementById('xrp-price');
    const adaPriceElement = document.getElementById('ada-price');
    const dogePriceElement = document.getElementById('doge-price');
    const solanaPriceElement = document.getElementById('solana-price');

    btcPriceElement.innerText = `₩ ${formattedBtcPrice}`;
    ethPriceElement.innerText = `₩ ${formattedEthPrice}`;
    xrpPriceElement.innerText = `₩ ${formattedXrpPrice}`;
    adaPriceElement.innerText = `₩ ${formattedAdaPrice}`;
    dogePriceElement.innerText = `₩ ${formattedDogePrice}`;
    solanaPriceElement.innerText = `₩ ${formattedSolanaPrice}`;


    //bitcoin.html
    const btnPrice = data[0].trade_price;
    const btc_trade_dateElement = document.getElementById('trade_date');
    btc_trade_dateElement.innerText = `{btnPrice}`;
  })
  .catch(error => {
    console.log('API 호출 중 오류 발생:', error);
  });
