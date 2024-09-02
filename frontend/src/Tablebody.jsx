import { useState } from "react";

// feet array
const feet = [];

//feet calc array
const feetCalc = [];

//while loop for auto fill feet and feetCalc array
let i = 10;
let j = 10;
while(i > 1.9){
  feet.push(Number(i));
  feetCalc.push(j);
  if( i != Math.floor(i)+'.3' && i != Math.floor(i)+'.6' && i != Math.floor(i)+'.9'){
    i -= 0.1;
    i = i.toFixed(1)
  }
  else{
    i -= 0.3;
    i = i.toFixed(1)
  }
  j -= 0.25;
}

//from mongoosedb
let totalPost;
const Tablebody = () =>{
const [pieces, setPieces] = useState(Array(feet.length).fill(0)); // Initialize an array to store the pieces input for each row
const[input, setInput] = useState(0);

const handlePieceChange = (index, value) => {
  if(parseInt(value)){
  const updatedPieces = [...pieces];
  updatedPieces[index] += parseInt(value); // Update the pieces for the specific row
  setPieces(updatedPieces);
  };
  setInput((prev) => ({ ...prev, [index]: "" }));
};



const calculateTotalFeet = () => {
  let  total = 0;
  for(let i = 0; i < feetCalc.length; i++){
     total += feetCalc[i] * pieces[i];
  }
  totalPost =total;
  return total;
};

return (
  <div id="table">
    <table>
      <thead>
        <tr>
          <th>Feet</th>
          <th>Pieces</th>
          <th>Total Feet</th>
        </tr>
      </thead>
      <tbody>
        {feet.map((foot, index) => (
          <tr key={index}>
            <td>{foot}</td>
            <td>
              <input
                type="number"
                value={input[index] || ""}
                onBlur={(e) => handlePieceChange(index, e.target.value)}
                onChange={(e) => setInput((prev) => ({ ...prev, [index]: e.target.value }))}
              />
            </td>
            <td>{feetCalc[index] * pieces[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div id="footer">
      <strong>Total Feet:</strong> {calculateTotalFeet() || 0}
    </div>
  </div>
);
}

export function totalparam(){
  return totalPost;
}
export default Tablebody;