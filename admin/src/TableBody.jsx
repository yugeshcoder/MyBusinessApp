import { useEffect, useState } from "react";

const labourCost = {
  P_10_10: 0.25,
  P_1_6: 0.25,
  P_1_10: 0.40,
  P_35_6: 0.40,
  P_45_6: 0.50,
  P_35_10: 0.40,
  P_45_10: 0.50,
  pvc_18_18: 0.50,
  pvc_1_18: 0.50,
  AB_12_12: 0.60,
  AD_12_12: 0.60,
  AB_15_15: 0.60,
  AD_15_15: 0.60,
  AB_18_18: 0.70,
  AD_18_18: 0.70,
  AB_25_25: 1,
  AB_35_35: 1,
  AE_22_10: 0.60,
  AE_32_10: 0.70,
  CB_20_8: 0.60,
  CB_25_8: 0.60,
  CB_32_8: .70,
  CB_45_10: .70,
  AE_22_18: .70,
  AE_28_18: .70,
  AE_35_22: 1,
  AE_45_28: 1,
  Bundle: 35
};

const productCost = {
  P_10_10_2: 1,
  P_1_6_2: 1,
  P_1_10_2: 2,
  P_35_6_2: 2,
  P_45_6_2: 4,
  P_35_10_2: 3.75,
  P_45_10_2: 6,
  pvc_18_18_2: 2.75,
  pvc_1_18_2: 3,
  AB_12_12_2: 2,
  AD_12_12_2: 2,
  AB_15_15_2: 2.75,
  AD_15_15_2: 2.75,
  AB_18_18_2: 4.5,
  AD_18_18_2: 4.5,
  AB_25_25_2: 7.5,
  AB_35_35_2: 20,
  AE_22_10_2: 3,
  AE_32_10_2: 5,
  CB_20_8_2: 2.25,
  CB_25_8_2: 3,
  CB_32_8_2: 4.5,
  CB_45_10_2: 8,
  AE_22_18_2: 6,
  AE_28_18_2: 7,
  AE_35_22_2: 11,
  AE_45_28_2: 28,
  Bundle: 35,
  pvc_18_18_1: 2.75,
  pvc_1_18_1: 3,
  P_10_10_1: 3,
  P_1_6_1: 2.5,
  P_1_10_1: 5,
  P_35_6_1: 5,
  P_45_6_1: 8,
  P_35_10_1: 8.75,
  P_45_10_1: 13,
  AB_12_12_1: 4.5,
  AD_12_12_1: 4.5,
  AB_15_15_1: 5.5,
  AD_15_15_1: 5.5,
  AB_18_18_1: 8,
  AD_18_18_1: 8,
  AB_25_25_1: 14,
  AB_35_35_1: 28,
  AE_22_10_1: 6,
  AE_32_10_1: 10,
  CB_20_8_1: 5,
  CB_25_8_1: 6,
  CB_32_8_1: 8,
  CB_45_10_1: 15,
  AE_22_18_1: 12,
  AE_28_18_1: 16,
  AE_35_22_1: 25,
  AE_45_28_1: 40
};

let labourTotal = 0;
let productTotal = 0;
export function getProductTotal(){
  return {labourTotal,productTotal};
}

const TableBody = ({data}) => {
  const [info, setInfo] = useState(Array.isArray(data) ? data : []);
  useEffect(() => {
  setInfo(data); // Update info when data prop changes
  console.log(data); // Debugging the data prop

  let labourCalculatedTotal = 0;
  data.forEach(labour =>{
    labourCalculatedTotal += (Number(labour.total)) * labourCost[labour.model];
    Math.floor(labourCalculatedTotal);
  });

  let productCalculatedTotal = 0;
  data.forEach(product =>{
    const productTotalKey = `${product.model}_${product.q}`;
    productCalculatedTotal +=(Number(product.total) * productCost[productTotalKey]);
    Math.floor(productCalculatedTotal);
  });

  labourTotal = labourCalculatedTotal;
  productTotal = productCalculatedTotal;

  },[data] ); // Dependency array with data
  return(
    <tbody>
      {info.map((proInfo, index)=>{
        const productKey = `${proInfo.model}_${proInfo.q}`;
        return(
        <tr key={index}>
          <td>{proInfo.date}</td>
          <td>{proInfo.company}</td>
          <td>{proInfo.q}</td>
          <td>{proInfo.model}</td>
          <td>{proInfo.total}</td>
          <td>{Math.floor(Number(proInfo.total) * labourCost[proInfo.model])}</td>
          <td>{Math.floor(Number(proInfo.total) * productCost[productKey])}</td>
        </tr>
        );
      })}
    </tbody>
  )
}
export default TableBody