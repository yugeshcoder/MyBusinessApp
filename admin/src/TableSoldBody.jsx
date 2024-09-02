import { useEffect, useState } from "react";

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

let total = 0;
export function getSoldTotal(){
  return total;
}

const TableSoldBody = ({sold,all,comp1,comp2}) => {
  const [info, setInfo] = useState(Array.isArray(sold) ? sold : []);
  const [soldTotal, setSoldTotal] = useState(0);
  useEffect(() => {
  setInfo(sold); // Update info when data prop changes

  let soldcalculatedTotal = 0;
  sold.forEach(soldInfo => {
      soldInfo.list.forEach(soldCalc =>{
        if(all){
          soldcalculatedTotal += Number(`${soldCalc.total * soldCalc.rate}`);
        }
        else if(comp1 && soldCalc.company == '1'){
          soldcalculatedTotal += Number(`${soldCalc.total * soldCalc.rate}`);
        }
        else if(comp2 && soldCalc.company == '2'){
          soldcalculatedTotal += Number(`${soldCalc.total * soldCalc.rate}`);
        }
      });
      if(all){
        soldcalculatedTotal += soldInfo.extraCharge;
      }
  });
  setSoldTotal(soldcalculatedTotal );
  total = soldcalculatedTotal;
  console.log(soldcalculatedTotal);
  console.log(sold); // Debugging the data prop
  },[sold,all,comp1,comp2] ); // Dependency array with data
  return(
    <tbody>
      {info.map((proInfo, index)=>{
        const productKey = `${proInfo.model}_${proInfo.q}`;
        let totalKey = 0; 
        return(
        <tr key={index}>
          <td>{proInfo.date}</td>
          <td>{proInfo.name}</td>
          <td>
            {proInfo.list.map((listInfo,idx)=>{
              
              if(all){
                totalKey += Number(`${listInfo.total * listInfo.rate}`);
              return(
              <div key={idx}>
                <span>{`${listInfo.company} `}</span>
                <span>{`${listInfo.quality} `}</span>
                <span>{`${listInfo.model} `}</span>
                <span>{`${listInfo.total} `}</span>
                <span>{listInfo.rate}</span>
              </div>
              )
            }
            else if(comp1 && listInfo.company == '1'){
              totalKey += Number(`${listInfo.total * listInfo.rate}`);
              return(
                <div key={idx}>
                  <span>{`${listInfo.company} `}</span>
                  <span>{`${listInfo.quality} `}</span>
                  <span>{`${listInfo.model} `}</span>
                  <span>{`${listInfo.total} `}</span>
                  <span>{listInfo.rate}</span>
                </div>
                )
            }
            else if(comp2 && listInfo.company == '2'){
              totalKey += Number(`${listInfo.total * listInfo.rate}`);
              return(
                <div key={idx}>
                  <span>{`${listInfo.company} `}</span>
                  <span>{`${listInfo.quality} `}</span>
                  <span>{`${listInfo.model} `}</span>
                  <span>{`${listInfo.total} `}</span>
                  <span>{listInfo.rate}</span>
                </div>
                )
            }
            })}
          </td>
          <td>{proInfo.extraCharge}</td>
          <td>{totalKey + (all ? proInfo.extraCharge : 0)}</td>
        </tr>
        );
      })}
    </tbody>
  )
}
export default TableSoldBody