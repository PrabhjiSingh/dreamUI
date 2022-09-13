import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { convertDateToHRFormat } from "../../../Utils/UtilsDataTime";

export default function OptionAnalysisCard(props) {
  const data = props.optionAnalysisData
  return (
    <Card style={{ width: "20rem" }} className="">
      <Card.Body>
        <Card.Title className="text-center">
        Expiry {convertDateToHRFormat(data.expiryTime)}
        </Card.Title> 
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Total OI</td>
              <td>{data.totalOI} ({data.percentageChangeInTotalOI} %)</td>
            </tr>
            <tr>
              <td>Call OI</td>
              <td>{data.callOI} ({data.percentageChangeInCallOI} %)</td>
            </tr>
            <tr>
              <td>Put OI</td>
              <td>{data.putOI} ({data.percentageChangeInPutOI} %)</td>
            </tr>
            <tr>
              <td>Overall PCR</td>
              <td>{data.overallPutCallRatio}</td>
            </tr>
            <tr>
              <td>Fresh Call OI</td>
              <td>{data.freshChangeInCallOI}</td>
            </tr>
            <tr>
              <td>Fresh Put OI</td>
              <td>{data.freshChangeInPutOI}</td>
            </tr>
            <tr>
              <td>Fresh PCR</td>
              <td>{data.freshPutCallRatio}</td>
            </tr>
            <tr>
              <td>Value (Cr.)</td>
              <td>{Math.round(data.totalValueInLakhs/100)}</td>   
            </tr>
            <tr>
              <td>Call Value (Cr.)</td>
              <td>{Math.round(data.callValueInLakhs/100)}</td>   
            </tr>
            <tr>
              <td>Put Value (Cr)</td>
              <td>{Math.round(data.putValueInLakhs/100)}</td>   
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
