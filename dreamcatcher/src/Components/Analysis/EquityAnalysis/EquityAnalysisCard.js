import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export default function EquityAnalysisCard(props) {
  return (
    <Card style={{ width: "20rem" }} className="">
      <Card.Body>
        <Card.Title className="text-center">
          Delivery Percentage (1279102){" "}
        </Card.Title>
        <Card.Header className="text-center font-weight-bold "></Card.Header>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Days</th>
              <th>Change %</th>
              <th>Conclusion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>+35.5%</td>
              <td>Very High</td>
            </tr>
            <tr>
              <td>50</td>
              <td>-35.5%</td>
              <td className="bg-danger">Very Low</td>
            </tr>
            <tr>
              <td>100</td>
              <td>35.5%</td>
              <td className="bg-success">Very High</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
