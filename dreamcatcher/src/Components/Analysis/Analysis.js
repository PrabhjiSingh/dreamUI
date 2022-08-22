import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EquityAnalysisCard from "./EquityAnalysis/EquityAnalysisCard";
import OptionAnalysisCard from "./OptionAnalysis/OptionAnalysisCard";
import FutureAnalysisCard from "./FutureAnalysis/FutureAnalysisCard";
import "./Analysis.css";

export default function Analysis(props) {
  return (
    <>
      {/* Info Container */}
      <Container
        id="infoContainer"
        fluid
        className="bg-dark border border-dark rounded"
      >
        <Row>
          <Col className="col-10">
            <h3 className="text-light">HDFCBANK</h3>
          </Col>
          <Col>
            <h5 className="text-light">11-Aug-2022 14:55</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="text-light">2543.70 (+2.36%)</h5>
          </Col>
        </Row>
      </Container>

      <Container
        id="basicAnalysisContainer"
        fluid
        className="bg-light border rounded"
      >
        {/* Basic Analysis Heading Row */}
        <Row className="border rounded bg-dark">
          <Col className="col-11" style={{ padding: "0.5rem" }}>
            <h4 className="text-light">Equity Analysis</h4>
          </Col>
        </Row>

        {/* Basic Analysis Cards */}
        <Row style={{ margin: "0.2rem" }}>
          <Col>
            <EquityAnalysisCard></EquityAnalysisCard>
          </Col>
        </Row>
      </Container>

      <Container
        id="futuresAnalysisContainer"
        fluid
        className="bg-light border rounded"
      >
        {/* Future Analysis Heading Row */}
        <Row className="border rounded bg-dark">
          <Col className="col-10" style={{ padding: "0.5rem" }}>
            <h4 className="text-light">Future Analysis</h4>
          </Col>
        </Row>

        {/* Future Analysis Cards */}
        <Row>
          <Col>
            <FutureAnalysisCard></FutureAnalysisCard>
          </Col>
        </Row>
      </Container>

      <Container
        id="optionsAnalysisContainer"
        fluid
        className="bg-light border rounded"
      >
        {/* Option Analysis Heading Row */}
        <Row className="border rounded bg-dark">
          <Col className="col-10" style={{ padding: "0.5rem" }}>
            <h4 className="text-light">Option Analysis</h4>
          </Col>
        </Row>

        {/* Option Analysis Cards */}
        <Row>
          <Col>
            <OptionAnalysisCard></OptionAnalysisCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}
