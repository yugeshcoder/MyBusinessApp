import React, { useState, useEffect } from 'react';

// Define global variables (if you really need them globally)
let datePost, qPost, modelPost,compPost;

function Header() {
  const [date, setDate] = useState('');
  const [q, setQ] = useState('2');
  const [model, setModel] = useState('');
  const [comp, setComp] = useState('2');

  // Update global variables whenever the state 

  useEffect(() => {
    datePost = date;
    qPost = q;
    modelPost = model;
    compPost = comp;
  }, [date, q, model,comp]); 

  return (
    <>
      <div className="date">
        <div>
          <label htmlFor="date">Date :</label>
          <input 
            id="date" 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="comp">Company :</label>
          <select value={comp} onChange={(e) => setComp(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>

      <div className="qmodel">
        <div className="q">
          <label htmlFor="Q">Q : </label>
          <select value={q} onChange={(e) => setQ(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
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
      </div>
    </>
  );
}

export function postparam(){
  return {datePost,qPost,modelPost,compPost};
}

export default Header;
