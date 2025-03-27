import React from "react";
import { useState, useEffect } from "react";
export default function App7() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);
 
  useEffect(()=>{
    setResult(parseInt(a)+parseInt(b));
  },[a]);


  useEffect(()=>{
    setResult(parseInt(a)*parseInt(b));
  },[b]);



  return (
    <div>
      <h3>This is App7</h3>
      <p>
        <input type="number" onChange={(e)=>setA(e.target.value)}></input>
      </p>
      <p>
        <input type="number" onChange={(e)=>setB(e.target.value)}></input>
      </p>
      {/* <button onClick={handleSubmit}>Submit</button> */}
      <p>
        {result}
      </p>
    </div>
  );
}