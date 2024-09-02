import TableSoldBody from "./TableSoldBody";

const TableSold = ({sold,all,comp1,comp2}) => {
  return(
    <div className="table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>List</th>
          <th>Extra-charge</th>
          <th>Total</th>
        </tr>
      </thead>
      <TableSoldBody sold={sold} all={all} comp1={comp1} comp2={comp2}/>
    </table>
    </div>

  )
}

export default TableSold;