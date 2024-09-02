import { useState, useEffect } from "react";
const url = import.meta.env.VITE_PORT;

let dateP,compP,whereP,sourceP,tonesP,rateP,extraChargeP;

const Content = () => {
  const [date,setDate] = useState("");
  const [comp,setComp] = useState("1");
  const [where,setWhere] = useState("");
  const [source,setSource] = useState("");
  const [tones,setTones] = useState(0);
  const [rate,setRate] = useState(0);
  const [extraCharge,setExtraCharge] = useState(0);

  useEffect(()=>{
    dateP =date;
    compP = comp;
    whereP = where;
    sourceP = source;
    tonesP = tones;
    rateP = rate;
    extraChargeP = extraCharge;
 
    },[date,comp,where,source,tones,rate,extraCharge]);

    function handleClick() {
      let rawPost = {
      date : dateP,
      company : compP,
      where : whereP,
      source : sourceP,
      tones : tonesP,
      rate : rateP,
      extraCharge : extraChargeP
      };
      console.log(rawPost)
      fetch(`${url}`,{
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(rawPost)
        })
        setComp("");
        setDate("");
        setWhere("");
        setSource("");
        setTones(0);
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
      <div className="comp">
        <label htmlFor="comp">Company :</label>
        <select value={comp} onChange={(e) => setComp(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div className="where">
          <label htmlFor="where">Where :</label>
          <input 
            id="where" 
            type="text" 
            value={where} 
            onChange={(e) => setWhere(e.target.value)} 
          />
      </div>
      <div className="source">
          <label htmlFor="source">Sources :</label>
          <input 
            id="source" 
            type="text" 
            value={source} 
            onChange={(e) => setSource(e.target.value)} 
          />
      </div>
      <div className="tones">
          <label htmlFor="tones">Tones :</label>
          <input 
            id="tones" 
            type="number" 
            value={tones} 
            onChange={(e) => setTones(e.target.value)} 
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

export default Content;