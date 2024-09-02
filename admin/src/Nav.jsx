import { useState, useEffect } from "react"
import Table from './Table'
import TableRaw from './TableRaw'
const url = import.meta.env.VITE_PORT;

const Nav = () =>{
  let data = [];
  let raw = [];
  const [all, setAll] = useState(true);
  const [comp1, setComp1] = useState(false);
  const [comp2, setComp2] = useState(false);

  const [info, setInfo] = useState([]); // Initialize state to hold fetched data
  const [rawInfo,setRawInfo] = useState([]);
  useEffect(() => {
    if(all){
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setInfo(data);// Update state with fetched data
        })
        fetch(`${url}/rawProduct`)
        .then(res => res.json())
        .then(raw => {
          setRawInfo(raw);// Update state with fetched data
        })
    }
    else if(comp1){
      fetch(`${url}/comp1`)
      .then(res => res.json())
      .then(data => {
        setInfo(data); // Update state with fetched data
      })
      fetch(`${url}/rawProduct/comp1`)
      .then(res => res.json())
      .then(raw => {
        setRawInfo(raw);// Update state with fetched data
      })
    }
    else{
      fetch(`${url}/comp2`)
      .then(res => res.json())
      .then(data => {
        setInfo(data); // Update state with fetched data
      })
      fetch(`${url}/rawProduct/comp2`)
      .then(res => res.json())
      .then(raw => {
        setRawInfo(raw);// Update state with fetched data
      })
    }
  }, [all,comp1,comp2]); // Empty dependency array means this effect runs once after initial render

  return (
    <>
      <div className="nav">
        <div>
          <label htmlFor="all">All</label>
          <input 
            id="all" 
            type="radio" 
            name="filter" 
            value={all}
            onChange={(e) => {setAll(true);setComp1(false);setComp2(false)}} 
          ></input>
        </div>

        <div>
        <label htmlFor="comp1">Company 1</label>
          <input 
            id="comp1" 
            type="radio" 
            name="filter" 
            value={comp1}
            onChange={(e) => {setComp1(true);setAll(false);setComp2(false)}} 
          ></input>
        </div>

        <div>
        <label htmlFor="comp2">Company 2</label>
        <input 
          id="comp2" 
          type="radio" 
          name="filter" 
          value={comp2}
          onChange={(e) => {setComp2(true);setAll(false);setComp1(false)}} 
        ></input>
        </div>
      </div>
      <Table data={info}/>
      <h1>Raw Materials</h1>
      <TableRaw raw={rawInfo}/>
    </>
  )
}

export default Nav;