import { getRawTotal } from "./TableRawBody";
import { useState } from "react";

const Footer = () => {
  const [rawTotal, setRawTotal] = useState("0");
setTimeout(()=>{
  setRawTotal(getRawTotal());
},10);
 
 console.log(rawTotal);
  return(
    <div>
      <h2>Total : {rawTotal}</h2>
    </div>
  )
}

export default Footer;