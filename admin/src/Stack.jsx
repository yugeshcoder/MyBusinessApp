import { useState,useEffect } from "react";
import { getProductTotal } from "./TableBody";
import { getRawTotal } from "./TableRawBody";
import { getSoldTotal } from "./TableSoldBody";


const Stack = ()=>{
  const [rawTotal, setRawTotal] = useState("0");
  const [labourTotal, setLabourTotal] = useState("0");
  const [prodTotal, setProductTotal] = useState(0);
  const [labourtotal,setLabourtotal] = useState(0);
  setTimeout(()=>{
    const prodtotal = getProductTotal();
    const [total,labourTotal] = getRawTotal();
    const soldtotal = getSoldTotal();
    setLabourTotal(prodtotal.labourTotal);
    setProductTotal(prodtotal.productTotal);
    setRawTotal(total);
    setLabourtotal(labourTotal);
  },10);
  return(
    <div>
      <h2>Raw-Material : {rawTotal}</h2>
      <h2>Production : {prodTotal}</h2>
      <h2>Labour-cost : {labourTotal + labourtotal}</h2>
      {/* <h2>Sold-product : {soldtotal}</h2> */}
      {/* <h2>Stack : {prodTotal-soldtotal}</h2> */}
      <h2>Profit/Lost : {prodTotal - (rawTotal + labourTotal)}</h2>
    </div>
  )
}

export default Stack

