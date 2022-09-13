import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { convertDateToHRFormat } from "../../../Utils/UtilsDataTime";

export default function FutureAnalysisCard(props) {
  const data = props.futureAnalysisData;
  console.log(data);
  return (
    <Card style={{ width: "20rem" }} className="">
      <Card.Body>
        <Card.Title className="text-center">
        Expiry {convertDateToHRFormat(data.expiryTime)}
        </Card.Title>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Close Price</td>
              <td>{data.close} ({data.percentChangeInPrice} %)</td>
            </tr>
            <tr>
              <td>OI</td>
              <td>{data.openInterest} ({data.percentChangeInOi} %)</td>
            </tr>
            <tr>
              <td>OI Change</td>
              <td>{data.changeInOI} </td>
            </tr>
            <tr>
              <td>Value (Cr.)</td>
              <td>{Math.round(data.valueInLakhs/100)}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
