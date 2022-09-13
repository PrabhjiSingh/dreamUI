import React, { useEffect, useState } from "react";
import "./Analysis.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EquityAnalysisCard from "./EquityAnalysis/EquityAnalysisCard";
import OptionAnalysisCard from "./OptionAnalysis/OptionAnalysisCard";
import FutureAnalysisCard from "./FutureAnalysis/FutureAnalysisCard";
import { fetchSymbolData } from "../../Services/AnalysisService";

const dummyData = {
  fieldAnalysis: [
    {
      type: "volume",
      analysis: [
        {
          period: 50,
          timeframe: "Daily",
          maxValue: 168277.0,
          maxValueEpochTime: 1659465000,
          maxValueTime: "3/AUGUST/2022 0:0:0",
          minValue: 11196.0,
          minValueEpochTime: 1655663400,
          minValueTime: "20/JUNE/2022 0:0:0",
          avgValue: 45699.52,
          currentValue: 43541.0,
          currentValueEpochTime: 1661711400,
          currentValueTime: "29/AUGUST/2022 0:0:0",
          minFactor: 3.89,
          maxFactor: 0.26,
          avgFactor: 0.95,
        },
      ],
    },
    {
      type: "deliveryPercentage",
      analysis: [
        {
          period: 50,
          timeframe: "Daily",
          maxValue: 57.41,
          maxValueEpochTime: 1661711400,
          maxValueTime: "29/AUGUST/2022 0:0:0",
          minValue: 15.3,
          minValueEpochTime: 1656613800,
          minValueTime: "1/JULY/2022 0:0:0",
          avgValue: 33.0,
          currentValue: 57.41,
          currentValueEpochTime: 1661711400,
          currentValueTime: "29/AUGUST/2022 0:0:0",
          minFactor: 3.75,
          maxFactor: 1.0,
          avgFactor: 1.74,
        },
      ],
    },
    {
      type: "tradeTurnover",
      analysis: [
        {
          period: 50,
          timeframe: "Daily",
          maxValue: 96542.04,
          maxValueEpochTime: 1661279400,
          maxValueTime: "24/AUGUST/2022 0:0:0",
          minValue: 37099.22,
          minValueEpochTime: 1655663400,
          minValueTime: "20/JUNE/2022 0:0:0",
          avgValue: 62327.65,
          currentValue: 77509.33,
          currentValueEpochTime: 1661711400,
          currentValueTime: "29/AUGUST/2022 0:0:0",
          minFactor: 2.09,
          maxFactor: 0.8,
          avgFactor: 1.24,
        },
      ],
    },
    {
      type: "deliveryQuantity",
      analysis: [
        {
          period: 50,
          timeframe: "Daily",
          maxValue: 43355.0,
          maxValueEpochTime: 1656441000,
          maxValueTime: "29/JUNE/2022 0:0:0",
          minValue: 2389.0,
          minValueEpochTime: 1657564200,
          minValueTime: "12/JULY/2022 0:0:0",
          avgValue: 14959.8,
          currentValue: 24997.0,
          currentValueEpochTime: 1661711400,
          currentValueTime: "29/AUGUST/2022 0:0:0",
          minFactor: 10.46,
          maxFactor: 0.58,
          avgFactor: 1.67,
        },
      ],
    },
    {
      type: "volatility",
      analysis: [
        {
          period: 50,
          timeframe: "Daily",
          maxValue: 7.35,
          maxValueEpochTime: 1656441000,
          maxValueTime: "29/JUNE/2022 0:0:0",
          minValue: 0.87,
          minValueEpochTime: 1657564200,
          minValueTime: "12/JULY/2022 0:0:0",
          avgValue: 2.83,
          currentValue: 2.2,
          currentValueEpochTime: 1661711400,
          currentValueTime: "29/AUGUST/2022 0:0:0",
          minFactor: 2.53,
          maxFactor: 0.3,
          avgFactor: 0.78,
        },
      ],
    },
  ],
  priceAnalysis: {
    period: 100,
    periodTop: 18224.7,
    periodTopEpochTime: 1660674600,
    periodTopTime: "17/AUGUST/2022 0:0:0",
    periodBottom: 12932.45,
    periodBottomEpochTime: 1652293800,
    periodBottomTime: "12/MAY/2022 0:0:0",
    topToBottomDifference: 29.04,
    bottomToTopDifference: 40.92,
    currentPrice: 17059.9,
    currentEpochTime: 1661711400,
    currentTime: "29/AUGUST/2022 0:0:0",
    currentFallFromPeriodTop: 6.39,
    currentRiseFromPeriodBottom: 31.92,
    maxFallAfterTopIsAchieved: 7.81,
    currentFallFromTopAfterTopIsAchieved: 6.39,
    currentRiseFromBottomAfterTopIsAchieved: 1.54,
    currentPotentialTillTop: 6.83,
  },
  optionAnalysis: {
    expiryTime: "29-Sep-2022",
    epochExpiryTime: 1664389800,
    totalOI: 76700.0,
    freshChangeInTotalOI: 10200.0,
    percentageChangeInTotalOI: 15.34,
    callOI: 53900.0,
    freshChangeInCallOI: 7250.0,
    percentageChangeInCallOI: 15.54,
    putOI: 22800.0,
    freshChangeInPutOI: 2950.0,
    percentageChangeInPutOI: 14.86,
    overallPutCallRatio: 0.42,
    freshChangeInOverallPutCallRatio: -0.01,
    percentageChangeInOverallPutCallRatio: -2.33,
    freshPutCallRatio: 0.41,
    maximumCallOI: 16500.0,
    maximumCallOIStrikePrice: 18000.0,
    maximumPutOI: 9700.0,
    maximumPutOIStrikePrice: 16500.0,
    totalValueInLakhs: 7263.77,
    callValueInLakhs: 6232.4,
    putValueInLakhs: 1031.37,
  },
  futureAnalysis: {
    expiryTime: "29/SEPTEMBER/2022 0:0:0",
    epochExpiryTime: 1661711400,
    open: 17150.0,
    high: 17249.5,
    low: 16900.05,
    close: 17166.95,
    percentChangeInPrice: -1.38,
    contracts: 1244.0,
    valueInLakhs: 10666.46,
    openInterest: 190850.0,
    changeInOI: 6500.0,
    percentChangeInOi: 3.53,
  },
  candleAnalysis: {
    uniCandlePattern: "NOT_CONSIDERABLE",
    uniCandlePatternDirection: "NOT_CONSIDERABLE",
    multiCandlePattern: "NOT_CONSIDERABLE",
    multiCandlePatternDirection: "NOT_CONSIDERABLE",
    candleGap: {
      gapUpCriteria: 0.5,
      gapDownCriteria: 0.5,
      gapType: "GAP_DOWN",
      gapPercent: 1.19,
    },
    isGreenCandle: true,
  },
};

export default function Analysis(props) {
  const [data, setData] = useState(dummyData);
  const [error, setError] = useState('');
  const [userSearch, setUserSearch] = useState('');

  const onUserInputChange = (event) => {
    setUserSearch(event.target.value);
  }

  const fetchDataHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetchSymbolData(userSearch, "29-Aug-2022", "29-Sep-2022");
      setData(response);
      setUserSearch('');
    } catch (error) {
      console.log("Error : "+ error.message)
      setError(error.message)
      
    }
  };

  return (
    <>
       <Container
        id="searchContainer"
        fluid
      >
      <form className="d-flex" role="search" onSubmit={fetchDataHandler}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter Symbol (e.g. RELIANCE)"
          aria-label="Analyze"
          onChange={onUserInputChange}
          value={userSearch}
        />
        <button className="btn btn-dark" type="submit">
          Analyze
        </button>
      </form>
      </Container>
      {/* Info Container */}
      <Container
        id="infoContainer"
        fluid
        className="bg-dark border border-dark rounded"
      >
        <Row>
          <Col className="col-10">
            <h3 className="text-light">{data.symbol}</h3>
          </Col>
          <Col>
            <h5 className="text-light">{data.time}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="text-light">
              {`${data.closePrice} ${data.priceChangePercent}`}
            </h5>
          </Col>
        </Row>
      </Container>

      <Container
        id="basicAnalysisContainer"
        fluid
        className="bg-light border rounded"
      >
        <Row className="border rounded bg-dark">
          <Col className="col-11" style={{ padding: "0.5rem" }}>
            <h4 className="text-light">Equity Analysis</h4>
          </Col>
        </Row>

        <Row style={{ margin: "0.2rem" }}>
          {data.fieldAnalysis.map((fa) => (

            <Col>
              <EquityAnalysisCard
                equityFieldAnalysisData={fa}
              ></EquityAnalysisCard>
            </Col>

          ))}
        </Row>
      </Container>

      <Container
        id="futuresAnalysisContainer"
        fluid
        className="bg-light border rounded"
      >
        <Row className="border rounded bg-dark">
          <Col className="col-10" style={{ padding: "0.5rem" }}>
            <h4 className="text-light">Future Analysis</h4>
          </Col>
        </Row>

        <Row>
          <Col>
          <FutureAnalysisCard futureAnalysisData={data.futureAnalysis}></FutureAnalysisCard>
          </Col>
        </Row>
      </Container>

      <Container
        id="optionsAnalysisContainer"
        fluid
        className="bg-light border rounded"
      >
        <Row className="border rounded bg-dark">
          <Col className="col-10" style={{ padding: "0.5rem" }}>
            <h4 className="text-light">Option Analysis</h4>
          </Col>
        </Row>

        <Row>
          <Col>
          <OptionAnalysisCard optionAnalysisData={data.optionAnalysis}></OptionAnalysisCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}
