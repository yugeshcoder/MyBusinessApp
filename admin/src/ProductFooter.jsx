import { getProductTotal } from "./TableBody";
import { useState } from "react";

const ProductFooter = () => {
  const [labourTotal, setLabourTotal] = useState("0");
  const [prodTotal, setProductTotal] = useState(0);
  setTimeout(()=>{
    const prodTotal = getProductTotal();
    setLabourTotal(prodTotal.labourTotal);
    setProductTotal(prodTotal.productTotal);
  },10);
  return(
    <div>
      <h2>Labour-total : {labourTotal} Production-total : {prodTotal}</h2>
    </div>
  )
}

export default ProductFooter;