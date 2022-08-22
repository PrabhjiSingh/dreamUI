import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export default function OptionAnalysisCard(props) {
  return (
    <Card style={{ width: "20rem" }} className="">
      <Card.Body>
        <Card.Title className="text-center">
          Long Buildup
        </Card.Title>
        <Card.Header className="text-center font-weight-bold "></Card.Header>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Total OI</td>
              <td>20000</td>
              <td>+50%</td>
            </tr>
            <tr>
              <td>Call OI</td>
              <td>10000</td>
              <td>+50%</td>
            </tr>
            <tr>
              <td>Put OI</td>
              <td>5000</td>
              <td>+20%</td>
            </tr>
            <tr>
              <td>Overall PCR</td>
              <td>1.03</td>
              <td>+20%</td>
            </tr>
            <tr>
              <td>Fresh PCR</td>
              <td>4.5</td>
              <td>+450%</td>
            </tr>
            <tr>
              <td>Total Value (Crores)</td>
              <td>45</td>
              <td>+4/5%</td>
            </tr>
            <tr>
              <td>Call Value (Crores)</td>
              <td>30</td>
              <td>+4/5%</td>
            </tr>
            <tr>
              <td>Put Value (Crores)</td>
              <td>15</td>
              <td>+4/5%</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
