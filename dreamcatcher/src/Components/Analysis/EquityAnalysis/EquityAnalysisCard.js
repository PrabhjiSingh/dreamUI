import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export default function EquityAnalysisCard(props) {
  const data = props.equityFieldAnalysisData;
  console.log("Data is :" + JSON.stringify(data));

  return (
    <Card style={{ width: "20rem" }} className="">
      <Card.Body>
        <Card.Title className="text-center">
          {`${data.type} (${data.analysis.currentValue})`}
        </Card.Title>
        <Card.Header className="text-center font-weight-bold ">
          {data.analysis.period} Days
        </Card.Header>
        <Table striped bordered hover>
          {data.analysis.map((periodAnalysis) => (
            <tbody>
              <tr>
                <td>Minimum</td>
                <td>{periodAnalysis.minValue}</td>
                <td className="bg-danger">{periodAnalysis.minValueTime}</td>
              </tr>
              <tr>
                <td>Maximum</td>
                <td>{periodAnalysis.maxValue}</td>
                <td className="bg-danger">{periodAnalysis.maxValueTime}</td>
              </tr>
              <tr>
                <td>Average</td>
                <td>{periodAnalysis.avgValue}</td>
                <td>''</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Card.Body>
    </Card>
  );
}
