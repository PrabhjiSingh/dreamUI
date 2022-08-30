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
              <th scope="col">Days</th>
              <th scope="col">Change Percent</th>
            </tr>
          </thead>
          {data.analysis.map((periodAnalysis) => (
            <tbody>
              <tr>
                <td>{periodAnalysis.period}</td>
                <td className="bg-danger">
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
