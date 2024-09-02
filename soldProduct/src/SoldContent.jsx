import { useState, useEffect } from "react";
const url = import.meta.env.VITE_PORT;

let dateP,compP,qualityP,modelP,totalP,rateP,extraChargeP,nameP;
let listP = []; 

const SoldContent = () => {
  const [date,setDate] = useState("");
  const [comp,setComp] = useState("1");
  const [quality,setQuality] = useState("2");
  const [model,setModel] = useState("");
  const [total,setTotal] = useState(0);
  const [rate,setRate] = useState(0);
  const [extraCharge,setExtraCharge] = useState(0);
  const [name, setName] = useState("");

  useEffect(()=>{
    dateP =date;
    compP = comp;
    qualityP = quality;
    modelP = model;
    totalP = total;
    rateP = rate;
    extraChargeP = extraCharge;
    nameP = name;
 
    },[date,comp,quality,model,total,rate,extraCharge,name]);

    function handleClickForList(){
      let listobj = {
        company : comp,
        quality : quality,
        model : model,
        total : total,
        rate : rate,
      }
      listP.push(listobj);
      setComp("2");
      setDate(date);
      setQuality("2");
      setModel("");
      setTotal(0);
      setRate(0);
      setExtraCharge(0);
      setName(name);
    }

    function handleClick() {
      let soldPost = {
      date : dateP,
      list : listP,
      name : nameP,
      extraCharge : extraChargeP
      };
      console.log(JSON.stringify(soldPost));
      fetch(`${url}`,{
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(soldPost)
        })
        setComp("");
        setDate("");
        setQuality("");
        setModel("");
        setTotal(0);
        setRate(0);
        setExtraCharge(0);
    }
  return(
    <>
    <div className="raw">
      <div className="rm">
        <h1>RAW MATERIAL</h1>
      </div>
      <div className="date">
          <label htmlFor="date">Date :</label>
          <input 
            id="date" 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
      </div>
      <div className="customerName">
          <label htmlFor="customerName">Name :</label>
          <input 
            id="customerName" 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
      </div>
      <label>List:</label>
      <div className="list">
        <div className="comp">
          <label htmlFor="comp">Company :</label>
          <select value={comp} onChange={(e) => setComp(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="quality">
            <label htmlFor="quality">Quality :</label>
            <input 
              id="quality" 
              type="text" 
              value={quality} 
              onChange={(e) => setQuality(e.target.value)} 
            />
        </div>
        <div className="model">
          <label htmlFor="model">Model : </label>
          <input 
            id="model" 
            list="model1" 
            value={model} 
            onChange={(e) => setModel(e.target.value)} 
          />
          <datalist id="model1">
            <option value='P_10_10'/>
            <option value="P_1_6"/>
            <option value="P_1_10"/>
            <option value="P_35_6"/>
            <option value="P_45_6"/>
            <option value="P_35_10"/>
            <option value="P_45_10"/>
            <option value="pvc_18_18"/>
            <option value="pvc_1_18"/>
            <option value="AB_12_12"/>
            <option value="AB_15_15"/>
            <option value="AB_18_18"/>
            <option value="AB_25_25"/>
            <option value="AB_35_35"/>
            <option value="AD_12_12"/>
            <option value="AD_15_15"/>
            <option value="AD_18_18"/>
            <option value="AE_32_10"/>
            <option value="AE_22_10"/>
            <option value="CB_20_8"/>
            <option value="CB_25_8"/>
            <option value="CB_32_8"/>
            <option value="CB_45_10"/>
            <option value="AE_22_18"/>
            <option value="AE_25_18"/>
            <option value="AE_35_22"/>
            <option value="AE_45_28"/>
            <option value="Bundle"/>
          </datalist>
        </div>
        <div className="total">
            <label htmlFor="total">Total :</label>
            <input 
              id="total" 
              type="number" 
              value={total} 
              onChange={(e) => setTotal(e.target.value)} 
            />
        </div>
        <div className="rate">
            <label htmlFor="rate">Rate :</label>
            <input 
              id="rate" 
              type="number" 
              value={rate} 
              onChange={(e) => setRate(e.target.value)} 
            />
      </div>
      <div className="submit">
        <button onClick={handleClickForList}>ADD</button>
      </div>
      </div>
      <div className="extraCharge">
          <label htmlFor="extraCharge">Extra charge :</label>
          <input 
            id="extraCharge" 
            type="number" 
            value={extraCharge} 
            onChange={(e) => setExtraCharge(e.target.value)} 
          />
      </div>
      <div className="submit">
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
    </>
  )
}

export default SoldContent;