import { useState, useEffect } from "react";
let total = 0;
let labourTotal = 0;
export function getRawTotal(){
  return [total,labourTotal];
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
  total = Math.floor(calculatedTotal);
  let calculatedLabourTotal = 0;
  raw.forEach(rawInfo => {
    calculatedLabourTotal += (rawInfo.tones*0.001*600);
  });
  labourTotal = Math.floor(calculatedLabourTotal);
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
          <td>{Math.floor(rawInfo.tones*0.001*600)}</td>
          <td>{rawInfo.extraCharge}</td>
          <td>{Math.floor(rawInfo.extraCharge + ((rawInfo.tones) * (rawInfo.rate)))}</td>
        </tr>
      ))}
    </tbody>
  );
  
};
export default TableRawBody;