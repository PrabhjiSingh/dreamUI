import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export default function EquityAnalysisCard(props) {
  const data = props.equityFieldAnalysisData;

  return (
    <Card style={{ width: "20rem" }} className="">
      <Card.Body>
        <Card.Title className="text-center">
          {getAssociatedTextForFieldName(data.type)}
        </Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Days</th>
              <th>Change %</th>
            </tr>
          </thead>
          {data.analysis.map((periodAnalysis) => (
            <tbody>
              <tr>
                <td>{periodAnalysis.period}</td>
                <td className={getEquityAnalysisClassName(
                    periodAnalysis.avgValue,
                    periodAnalysis.currentValue
                  )}
                >
                  {calculatePercentageValueAboveAverage(
                    periodAnalysis.avgValue,
                    periodAnalysis.currentValue
                  )}%
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Card.Body>
    </Card>
  );
}

function getAssociatedTextForFieldName(fieldName) {
  if (fieldName === "volume") {
    return "Volume";
  }

  if (fieldName === "deliveryPercentage") {
    return "Delivery Percentage ";
  }

  if (fieldName === "tradeTurnover") {
    return "Trade Turnover";
  }

  if (fieldName === "deliveryQuantity") {
    return "Delivery Quantity";
  }
}

function calculatePercentageValueAboveAverage(avgValue, currentValue) {
  return Math.round(((currentValue - avgValue) / avgValue) * 100);
}

function getEquityAnalysisClassName(avgValue, currentValue) {

  const value = calculatePercentageValueAboveAverage(avgValue, currentValue);

  if(value < 0) {
    return "bg-danger"
  }

  return "bg-success";
}
