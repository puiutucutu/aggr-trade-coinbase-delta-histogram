if (upColor === 0) {
  if (options.showDelta) {
    upColor = options.upBgColor
    downColor = options.downBgColor
  } else {
    upColor = options.upColor
    downColor = options.downColor
  }
}

histogram({
    time: time,
    value: COINBASE:BTC-USDT.vbuy - COINBASE:BTC-USDT.vsell, 
    color: COINBASE:BTC-USDT.vbuy - COINBASE:BTC-USDT.vsell > 0 ? options.upColor : options.downColor
})
