import TableBody from "./TableBody";

const Table = ({data}) => {
  return(
    <div className="table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Company</th>
          <th>Quality</th>
          <th>Model</th>
          <th>Total Feet</th>
          <th>Labour cost</th>
          <th>Product value</th>
        </tr>
      </thead>
      <TableBody data={data}/>
    </table>
    </div>

  )
}

export default Table;