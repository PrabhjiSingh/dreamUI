import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export default function FutureAnalysisCard(props) {
  return (
    <Card style={{ width: "20rem" }} className="">
      <Card.Body>
        <Card.Title className="text-center">
          Expiry 25 Aug 2022
        </Card.Title>
        <Card.Header className="text-center font-weight-bold "></Card.Header>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Close Price</td>
              <td>170000</td>
              <td>+2.01%</td>
            </tr>
            <tr>
              <td>OI</td>
              <td>160000</td>
              <td>+50%</td>
            </tr>
            <tr>
              <td>Value (Crores)</td>
              <td>123</td>
              <td>+20%</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
