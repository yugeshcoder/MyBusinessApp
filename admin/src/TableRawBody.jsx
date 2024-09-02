import { useState, useEffect } from "react";
let total = 0;
export function getRawTotal(){
  return total;
}
const TableRawBody = ({raw}) => {
  const [info, setInfo] = useState(Array.isArray(raw) ? raw : []);
  const [rawtotal,setRawTotal] = useState(0);

  
  useEffect(() => {
  setInfo(raw); // Update info when data prop changes
  let calculatedTotal = 0;
  raw.forEach(rawInfo => {
    calculatedTotal += rawInfo.extraCharge + (rawInfo.tones * rawInfo.rate);
  });
  setRawTotal(calculatedTotal);
  total = calculatedTotal;
  },[raw] ); // Dependency array with data
  
  return(
    <tbody>
      {info.map((rawInfo, index)=>(
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
      ))}
    </tbody>
  );
  
};
export default TableRawBody;