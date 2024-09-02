import { getSoldTotal } from "./TableSoldBody"
import { useState } from "react";

const SoldFooter = () =>{
  const [soldTotal, setSoldTotal] = useState("0");
setTimeout(()=>{
  setSoldTotal(getSoldTotal());
},10);
 
 console.log(soldTotal);
  return(
    <div>
      <h2>Total : {soldTotal}</h2>
    </div>
  )
}
export default SoldFooter