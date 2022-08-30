import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export default function EquityAnalysisCard(props) {
  
  const data = props.equityFieldAnalysisData;

  
  
  return (
    <Card style={{ width: "20rem" }} className="">
      <Card.Body>
        <Card.Title className="text-center">
          {`${data.type} (${data.currentValue})`}
        </Card.Title>
        <Card.Header className="text-center font-weight-bold ">{data.period} Days</Card.Header>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Minimum</td>
              <td>{data.minValue}</td>
              <td className="bg-danger">{data.minValueTime}</td>
            </tr>
            <tr>
              <td>Maximum</td>
              <td>{data.maxValue}</td>
              <td className="bg-danger">{data.maxValueTime}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{data.avgValue}</td>
              <td>''</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
