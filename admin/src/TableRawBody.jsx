import { useState, useEffect } from "react";

const TableRawBody = ({raw}) => {
  const [info, setInfo] = useState(Array.isArray(raw) ? raw : []);
  useEffect(() => {
  setInfo(raw); // Update info when data prop changes
  console.log(raw); // Debugging the data prop
  },[raw] ); // Dependency array with data
  return(
    <tbody>
      {info.map((rawInfo, index)=>{
        // const productKey = `${proInfo.model}_${proInfo.q}`;
        return(
        <tr key={index}>
          <td>{rawInfo.date}</td>
          <td>{rawInfo.company}</td>
          <td>{rawInfo.where}</td>
          <td>{rawInfo.source}</td>
          <td>{rawInfo.tones}</td>
          <td>{rawInfo.rate}</td>
          <td>{rawInfo.extraCharge}</td>
          <td>{rawInfo.extraCharge + ((rawInfo.tones) * (rawInfo.rate))}</td>
        </tr>
        );
      })}
    </tbody>
  )
}
export default TableRawBody