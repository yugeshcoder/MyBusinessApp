import TableRawBody from "./TableRawBody";

const TableRaw = ({raw}) => {
  return(
    <div className="table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Company</th>
          <th>Place</th>
          <th>Source</th>
          <th>Tones</th>
          <th>Rate</th>
          <th>Labour Charge</th>
          <th>Extra Charge</th>
          <th>Total raw-cost</th>
        </tr>
      </thead>
      <TableRawBody raw={raw}/>
    </table>
    </div>

  )
}

export default TableRaw;