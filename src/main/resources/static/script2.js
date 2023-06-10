function createTable(market, data) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // 테이블 데이터 생성
  const rowData = [
    { header: '최근 거래 일자(UTC)', value: data[0].trade_date },
    { header: '최근 거래 시각(UTC)', value: data[0].trade_time },
    { header: '최근 거래 일시(UTC)', value: data[0].trade_timestamp },
    { header: '고가', value: addCommas(data[0].high_price) },
    { header: '저가', value: addCommas(data[0].low_price) },
    { header: '종가', value: addCommas(data[0].trade_price) },
    { header: '부호가 있는 변화액', value: addCommas(data[0].signed_change_price) },
    { header: '부호가 있는 변화율', value: data[0].signed_change_rate  + ' %'},
    { header: '24시간 누적 거래대금', value: addCommas(data[0].acc_trade_price_24h) },
    { header: '24시간 누적 거래량', value: addCommas(data[0].acc_trade_volume_24h) },
  ];

  rowData.forEach(rowDataItem => {
    const row = document.createElement('tr');

    // 헤더 셀 생성
    const headerCell = document.createElement('td');
    headerCell.textContent = rowDataItem.header;
    row.appendChild(headerCell);

    // 값 셀 생성
    const valueCell = document.createElement('td');
    valueCell.textContent = rowDataItem.value;
    row.appendChild(valueCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  return table;
}

function fetchMarketDataAndCreateTable(market, htmlElementId) {
  fetch(`https://api.upbit.com/v1/ticker?markets=${market}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('API 호출 중 문제가 발생했습니다.');
      }
      return response.json();
    })
    .then(data => {
      // HTML에 테이블 추가
      const table = createTable(market, data);
      const tableContainer = document.getElementById(htmlElementId);
      tableContainer.appendChild(table);
    })
    .catch(error => {
      console.log('API 호출 중 오류 발생:', error);
    });
}

function addCommas(number) {
  // 숫자에 3글자마다 콤마를 추가하는 함수
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

fetchMarketDataAndCreateTable('KRW-BTC', 'btc-container');
fetchMarketDataAndCreateTable('KRW-ETH', 'eth-container');
fetchMarketDataAndCreateTable('KRW-XRP', 'xrp-container');
fetchMarketDataAndCreateTable('KRW-ADA', 'ada-container');
fetchMarketDataAndCreateTable('KRW-DOGE', 'doge-container');
fetchMarketDataAndCreateTable('KRW-SOL', 'solana-container');
