export async function fetchSymbolData(symbol, time, expiryTime) {
  const requestPayload = {
    symbol: symbol,
    time: time,
    timeframe: "Daily",
    fieldAnalysis: {
      type: [
        "volume",
        "deliveryPercentage",
        "tradeTurnover",
        "deliveryQuantity"
      ],
      period: ["3","10","50"],
    },
    priceAnalysis: {
      period: 100,
    },
    optionAnalysis: {
      expiryTime: expiryTime,
    },
    futureAnalysis: {
      expiryTime: expiryTime,
    },
    candleAnalysis: {
      uniCandlePatternConfig: {
        rightWickToBodyRatio: 2.5,
        bodyToWrongWickRatio: "1.5",
        bodyToWickOnEitherSideRatio: "3.5",
        totalSizeToBodyRatio: "5.0",
        rightWickToWrongWickRatio: "3.0",
      },
      multiCandlePatternConfig: {
        numberOfEngulfedCandle: 1,
        engulfingInAccuracyPercent: "0.2",
      },
      gapCriteria: {
        gapUpCriteria: 0.5,
        gapDownCriteria: 0.5,
      },
    },
    movesAndSRAnalysis: {
      period: 100,
      config: {
        moveCriteria: "10.0",
        srMergeCriteria: "1.5",
        candlePriceConfig: "OPEN_CLOSE",
        intraMovesAndSRConfig: {
          moveCriteria: "5.0",
          srMergeCriteria: "0.5",
          candlePriceConfig: "OPEN_CLOSE",
        },
      },
    },
  };

  try {
    const response = await fetch(
      "http://localhost:5000/dreamcatcher/nse/analysis",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestPayload)
      }
    );
    return await response.json();
  } catch {
    throw new Error("Something went wrong");
  }
}
